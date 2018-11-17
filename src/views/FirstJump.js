//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import SecondJump from './SecondJump';


export default class FirstJump extends Component{
    constructor(props) {
        super(props);
        this.word=''
    }

    jump(){
        this.props.navigator.push({
            name :'测试也',
            component:SecondJump,
            params:{
                message:'come by FirstJump',
                onCallBack:word=>this.word=word
            }
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
                    <Text style={{
                        color:'#31353a'}}>FirstJump</Text>
                </View>

                <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor='#ff8400'
                    style={{
                        padding:10,
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#ff9e21'}}
                    onPress={()=>this.jump()}>
                        <Text style={{color:'white'}}>跳转到SecondJump</Text>
                </TouchableHighlight>

                <View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
                    <Text style={{
                        color:'#31353a'}}>SecondJump传递过来的值为:{this.word}</Text>
                </View>
            </View>
        )
    }
}