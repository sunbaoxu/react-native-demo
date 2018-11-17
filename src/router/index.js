//import引入相关组件
import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
  } from 'react-native';
//首页

import ShangCode from '~/shang/shangList';
// import {initPage} from './initPage';

export default class MyApp extends Component{
    /*
        在React-native里，使用最多的是弹性盒子模型。其默认的方向是column。
        也就是默认的主轴是纵向的。
    */
    render(){
        return (
            <Text>sdfa喂喂喂无法</Text>
        )
        // return(<Navigator

        //     //初始化路由，指定FirstJump为首次渲染的组件   
        //     initialRoute={
        //         {
        //             name :'首页',
        //             component:ShangCode
        //         }
        //     }

        //     //组件渲染时触发，有动态组件的渲染和静态组件的渲染
        //     //以下是动态渲染组件，定义了组件的两个属性navigator和一个传递其他参数的对象。
        //     //'...'会把该对象展开。所以在访问该对象的参数时，不用加上前缀(对象名字)(该对象名字随意取)
        //     renderScene={
        //         (route,navigator)=>{
        //             let Component=route.component;
        //             return <Component
        //                 navigator={navigator}
        //                 {...route.params}
        //             />
        //         }
        //     }

        //     //定义渲染动画
        //     // configureScene={
        //     //     (route,routeStack)=>{
        //     //         // return Navigator.SceneConfigs.FloatFromBottom
        //     //         // if(route.type='Bottom'){
        //     //         //     return Navigator.SceneConfigs.FloatFromBottom
        //     //         // }else if(route.type='Right'){
        //     //         //     return Navigator.SceneConfigs.FloatFromRight
        //     //         // }else{
        //     //         //     return Navigator.SceneConfigs.FloatFromRight
        //     //         // }
        //     //     }
        //     // }
        // />

        // )
    }
}