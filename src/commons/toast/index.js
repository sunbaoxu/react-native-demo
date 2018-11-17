//import引入相关组件
import React, { Component } from 'react';
import Toast from 'react-native-easy-toast';

export default class ToastBox extends Component{

    render() {
        return (
            <Toast ref="toast" opacity={0.8}/>
        )
    }
}