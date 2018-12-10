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
			justImg: require('^/img/idcard/just.png'),
			backImg: require('^/img/idcard/back.png')
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

	render() {
		return (
			<View style={cs.realwrap}>
				<NavigatorBar title='实名认证' navigator={this.props.navigator}/>
				<TipsTop str='请务必按照需求上传本人身份证照片，不支持临时身份证'/>
				<View style={{paddingTop:26,paddingBottom:30}}>
					<View style={[cs.listbox,{marginBottom:20}]}>
						<TouchableOpacity 
							onPress={()=>{
								this.selectPhotoTapped('just')
							}}
						>
							<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
								<Image style={cs.img} source={this.state.justImg} />
								<Text style={cs.text}>点击上传身份证人像面照片</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={cs.listbox}>
						<TouchableOpacity onPress={()=>{
							this.selectPhotoTapped('back')
						}}>
							<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
								<Image style={cs.img} source={this.state.backImg} />
								<Text style={cs.text}>点击上传身份证国徽照片</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				{/* 订单提交 */}
				<View style={[coms.gBtnBox,{paddingTop:0}]}>
					<Text style={[coms.gBtnBoxButton]}
						onPress={()=>{
							
						}}
					>下一步</Text>
				</View>
			</View>
		);
	}

}

