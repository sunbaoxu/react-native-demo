'use strict';
import React,{Component} from 'react';
import {Text,TouchableHighlight} from 'react-native';
import home from './style';
import LoginBox from '~/SecondJump';


class MyButton extends Component {
    // constructor(props) {
    //     super(props);
    // }
 
    
    loginFn(){
        // Alert.alert("我要去登录页了");
        this.props.navigator.push({
            name :'测试也',
            component:LoginBox,
            params:{
                // message:'come by FirstJump',
                // onCallBack:word=>this.word=word
            }
        });
    }
    render() {
        
        return (
            <TouchableHighlight onPress={()=>{
                this.loginFn()
            }}>
                <Text style={home.href}>去往登陆页。。</Text>
            </TouchableHighlight>
        );
    }
}
//MyFirstProject
export default MyButton;