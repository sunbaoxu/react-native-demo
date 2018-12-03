//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import Toast from 'react-native-easy-toast';

import cs from './style';
import coms from '^/cs/coms';
import * as api from './api';
import NavigatorBar from '@/header/headerNav';
import storage from '^/js/storage';
import ShangCode from '~/shang/shangCode';


export default class LoginBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            phone :'',
            imgVcode:'',
            valiCode  : '',
            imgUrl    : require('^/img/yzm.jpg'),
            passText :'获取验证码',
            passAsync:false,
            imgAsync:false,
            timer : null ,
        }
    }

    /**判断是否符合发送验证码要求 */
    passBtnFn =() =>{
        if(!this.state.phone){
            return false;
        }else if(!(/^1[0-9]{10}$/.test(this.state.phone)) ){ 
            this.refs.toast.show('手机号输入不正确');
        return false;
        } else if(this.state.imgAsync && !this.state.imgVcode){
            this.refs.toast.show('请输入图片验证码');
        return false;
        }
        //获取短信验证码，蜡笔发送，不校验token
        this.setState({passAsync:true});
        this.getNotValiSend();
    }
    /** 发送验证码 */
    async getNotValiSend (){
        const data = await api.getNotValiSend({
            imgVcode :this.state.imgVcode,
            phone:this.state.phone
        });
        if(data.code === 1){
            this.setTimeFn()
        }
        else if(data.code === -200){
            this.getImgSend();
            this.setState({passAsync:false});
        } else{
            this.refs.toast.show(data.message);
            this.getImgSend();
            this.setState({passAsync:false});
        }
    }

    /**倒计时 */
   setTimeFn (){
        let num =60;
        let timer = setInterval(()=>{
            num--;
            if(num<=0){
                this.setState({
                    passAsync:false,
                    passText :'获取验证码'
                });
                clearInterval(this.state.timer)
            } else{
                this.setState({
                    passText :`${num}s`
                });
            }
            

        },100);

        this.setState({timer})

    }
    /**获取图片 */
    async getImgSend () {
    const url= await  api.getImgSend({
        phone :this.state.phone,
        num :Math.random()
    });
    this.setState({
        imgUrl:url,
        imgAsync : true,
        imgVcode :''
    });
    }

    /**登录 */
    async register () {
        const data= await  api.register({
            loginPhone : this.state.phone,
            dnyCode    : this.state.valiCode,
            udid       : 'oz8TVwjyQDB5V2EDTarQ3gMWHa0Q',
            openId     : 'oz8TVwjyQDB5V2EDTarQ3gMWHa0Q'
        });

        if(data.respCode === '045' || data.respCode === '041'){
            storage.set('labi-login-obj',{
                loginPhone:data.loginPhone,
                token:data.token,
                userID:data.userID
            });

            this.props.navigator.push({
                component:ShangCode
            });
        } else{
            this.refs.toast.show(data.respMesg);
        }
    }

   

    render() {
        return (
            <View style={{flex:1}}>
                {/* 顶部栏 */}
                <NavigatorBar title={'登陆注册'} navigator={this.props.navigator}/>
                {/* 主体内容 */}
                <ScrollView>
                    <View>
                        <View style={cs.icon}>
                            <View style={cs.imgBox}>
                                <Image style={cs.iconImg} source={require('^/img/logo-icon.png')} />
                            </View>
                            <Text style={cs.iconText}>蜡笔分期</Text>
                        </View>
                        {/* 表单输入 */}
                        <View style={cs.formBox}>
                            <View style={cs.listBox}>
                                <TextInput
                                placeholder="请输入手机号"
                                placeholderTextColor ="#999"
                                underlineColorAndroid="transparent"
                                style={cs.input}
                                keyboardType="numeric"
                                maxLength={11}
                                onChangeText={
                                    (phone) => {
                                        this.setState({phone})
                                    }
                                }
                                value={this.state.phone} />
                            </View>
                            {/* 图片验证码 */}
                            <View style={[cs.listBox,cs.listBox1,!this.state.imgAsync?cs.listBox2:{}]}>
                                <TextInput
                                placeholder="请输入图片验证码"
                                placeholderTextColor ="#999"
                                underlineColorAndroid="transparent"
                                keyboardType="number-pad"
                                maxLength={6}
                                style={[cs.input,{flex:1}]}
                                onChangeText={
                                    (imgVcode) => this.setState({imgVcode})
                                }
                                value={this.state.imgVcode} />
                                <Image 
                                    style={cs.yanImg}
                                    source={require('^/img/yzm.jpg')}/>
                            </View>
                            <View style={[cs.listBox,cs.listBox1]}>
                                <TextInput
                                placeholder="请输入验证码"
                                placeholderTextColor ="#999"
                                underlineColorAndroid="transparent"
                                keyboardType="number-pad"
                                maxLength={6}
                                style={[cs.input,{flex:1}]}
                                onChangeText={
                                    (valiCode) => this.setState({valiCode})
                                }
                                value={this.state.valiCode} />
                                <Text style={[cs.passBtn,(this.state.phone && !this.state.passAsync?cs.passBtnOn:{})]} onPress={()=>{
                                    if(this.state.phone){
                                        this.passBtnFn()
                                    } else{
                                        return false
                                    }
                                }}>{this.state.passText}</Text>
                            </View>
                        </View>
                        {/* 订单提交 */}
                        <View style={coms.gBtnBox}>
                            <Text 
                                style={[coms.gBtnBoxButton,(this.state.phone && this.state.valiCode?coms.gBtnBoxButtonOn:{})]}
                                onPress={()=>{
                                    if(this.state.phone.length!==11 || !this.state.valiCode||(!this.state.imgVcode && this.state.imgAsync)){
                                        return false
                                    } else{
                                        this.register()
                                    }
                                }}
                            >登陆</Text>
                        </View>

                    </View>
                    <View style={cs.top}></View>
                </ScrollView>
                <Toast ref="toast" opacity={0.8}/>
            </View>
        )
    }
}

