//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class FirstJump extends Component{
    constructor(props) {
        super(props);
    }

    onBack(){
        // console.log(this)
        this.props.navigator.pop();
        //回调onCallBack，利用回调函数传递值
        this.props.onCallBack('come by SecondJump')
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
                    <Text style={{
                        color:'#31353a'}}>SecondJump</Text>
                </View>

                <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor='#ff8400'
                    style={{
                        padding:10,
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#ff9e21'}}
                    onPress={()=>this.onBack()}>
                    <Text style={{color:'white'}}>返回至FirstJump</Text>
                </TouchableHighlight>
                <View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
                    <Text style={{
                        color:'#31353a'}}>FirstJump传递过来的值为:{this.props.message}</Text>
                </View>
            </View>
        )
    }
}