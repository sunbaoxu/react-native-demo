//import引入相关组件
import React, { Component } from 'react';
import {
	TouchableHighlight,
	StyleSheet,
	StatusBar,
	View,
	Text,
	Platform,
	NativeModules
} from 'react-native';

// const { StatusBarManager } = NativeModules;


// StatusBarManager.getHeight((statusBarHeight)=>{
//     console.log(statusBarHeight)
//   })

//设置android和iOS设备上不同的NavigatorBar高度
const NavigatorBar_ANDROID_HEIGHT=50;
const NavigatorBar_IOS_HEIGHT=44;

export default class NavigatorBar extends Component{
	/*
		自定义导航栏：
		一般的导航栏左边是返回按钮，中间是title，右边也有一个按钮。
	*/
	constructor(props){
		super(props);
	}


   render(){
		//状态栏
		let statusBar=<StatusBar barStyle='light-content' translucent={true} hidden={false} animated={true} {...this.props.obj.statusBar} />;
		return(
			<View>
				{statusBar}
				<View style={cs.navgigatorBar}>
					<TouchableHighlight
						underlayColor="transparent" 
						style={cs.close}
						onPress={() =>{
							this.props.obj.navigator.pop();
						}
					}>
						{/*tintColor可以为图表着色*/}
						<Text style={cs.col}>返回</Text>
					</TouchableHighlight>
					<View style={cs.title}>
						<Text style={cs.col}>{this.props.obj.title}</Text>
					</View>
					<TouchableHighlight style={cs.close}>
						<Text style={cs.col}>保存</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const  cs=StyleSheet.create({
	headerNav : {
		backgroundColor:'red'
	},
	navgigatorBar:{
		height:Platform.OS ==='ios'?NavigatorBar_IOS_HEIGHT+20:NavigatorBar_ANDROID_HEIGHT,
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor:'#3080ff',
		paddingTop:Platform.OS ==='ios'?20:10,
		paddingBottom:0,
		paddingLeft:10,
		paddingRight:10
	},

	//当Navigator左右两边都没有相关组件传递进来，也要保证title居中
	//相对定位，左右两边距离相等，保持居中。单独设置justifyContent:'center'无法水平居中
	title:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		position:'absolute',
		left:60,
		right:60,
		flexDirection:'row',
		top:Platform.OS ==='ios'?20:10,
		bottom:0
	},
	close : {
		height:'100%',
		alignItems:'center',
		flexDirection:'row'
	},
	col:{
		color:'#fff'
	}
});