import ImagePicker from 'react-native-image-picker';
//import引入相关组件
import React, { Component } from 'react';
import {
  Text,
  View,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';
import cs from './style'
import coms from '^/cs/coms';
import * as api from './api';
import NavigatorBar from '@/header/headerNav';
import TipsTop from '@/tips/tipsTop';


export default class RealName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			justImg: '',
			backImg: ''
		}
	}


	//选择图片
	selectPhotoTapped(name) {
		const options = {
			title: '选择图片', 
			cancelButtonTitle: '取消',
			takePhotoButtonTitle: '拍照', 
			chooseFromLibraryButtonTitle: '选择照片', 
			// customButtons: [
			// 	{name: 'fb', title: 'Choose Photo from Facebook'},
			// ],//自定义按钮
			cameraType: 'back',
			mediaType: 'photo',
			videoQuality: 'high', 
			durationLimit: 10, 
			maxWidth: 300,
			maxHeight: 300,
			quality: 0.8, 
			angle: 0,
			allowsEditing: false, 
			noData: false,
			storageOptions: {
				skipBackup: true  
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			// console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					justImg: source
				});
			}
		});
	}

	//listBox  模块
	listBoxFn (name) {
		let _this = this.state;
		return 	(
			<View style={[cs.listbox,{marginBottom:name==='just'?20:0}]}>	
				<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
					<TouchableOpacity 
					onPress={()=>{
							this.selectPhotoTapped('just')
						}}
					>
						<Image style={cs.img} source={_this.justImg?_this.justImg :require('^/img/idcard/just.png')} />
					</TouchableOpacity>
					<Text style={cs.text}>{!_this.justImg?'点击上传身份证人像面照片':''}</Text>
					{_this.justImg ? 
					<TouchableOpacity 
						style={cs.iconbox}
						onPress={()=>{
							this.setState({justImg:''})
						}}
					>
						<Image style={cs.icon} source={require('^/img/icon/close.png')} /> 
					</TouchableOpacity>
					: <Text />}
				</View>
			</View>
		)
	}


	render() {
		let _this = this.state;
		return (
			<View style={cs.realwrap}>
				<NavigatorBar title='实名认证' navigator={this.props.navigator}/>
				<TipsTop str='请务必按照需求上传本人身份证照片，不支持临时身份证'/>
				<ScrollView>
					<View style={{paddingTop:26,paddingBottom:30}}>
						{/* 人像面照片 */}
						{
							this.listBoxFn('just')
						}
						{/* 国徽照片 */}
						{this.listBoxFn('back')}
						{/* <View style={[cs.listbox,{marginBottom:20}]}>	
							<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
								<TouchableOpacity 
								onPress={()=>{
										this.selectPhotoTapped('just')
									}}
								>
									<Image style={cs.img} source={_this.justImg?_this.justImg :require('^/img/idcard/just.png')} />
								</TouchableOpacity>
								<Text style={cs.text}>{!_this.justImg?'点击上传身份证人像面照片':''}</Text>
								{_this.justImg ? 
								<TouchableOpacity 
									style={cs.iconbox}
									onPress={()=>{
										this.setState({justImg:''})
									}}
								>
									<Image style={cs.icon} source={require('^/img/icon/close.png')} /> 
								</TouchableOpacity>
								: <Text />}
							</View>
						</View>
						<View style={cs.listbox}>
							<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
								<TouchableOpacity onPress={()=>{
									this.selectPhotoTapped('back')
								}}>
									<Image style={cs.img} source={_this.backImg ? _this.backImg:require('^/img/idcard/back.png')} />
								</TouchableOpacity>
								<Text style={cs.text}>{!_this.backImg?'点击上传身份证国徽照片':''}</Text>
								{_this.backImg ? 
								<TouchableOpacity 
									style={cs.iconbox}
									onPress={()=>{
										this.setState({backImg:''})
									}}
								>
									<Image style={cs.icon} source={require('^/img/icon/close.png')} /> 
								</TouchableOpacity>
								: <Text />}
							</View>
						</View> */}
					</View>

					{/* 订单提交 */}
					<View style={[coms.gBtnBox,{paddingTop:0}]}>
						<Text style={[coms.gBtnBoxButton]}
							onPress={()=>{
								
							}}
						>下一步</Text>
					</View>
				</ScrollView>
			</View>
		);
	}

}

