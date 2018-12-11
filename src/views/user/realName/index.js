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
import Gfn from '^/js/globalFn';
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

	/** 根据方案查低高额还款期 */
	async upload (){
		let arr=[this.state.justImg,this.state.backImg];
		let res = await Gfn.dataFn({
			list :arr
		});
		
		let data = await api.upload(res);
		if(data.code === -1){
			this.props.toast(data.message)
		} else{
			console.log(data,res)
		}
		
	}


	//选择图片
	selectPhotoTapped(name) {
		const options = {
			title: '', 
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
			maxWidth: 295,
			maxHeight: 190,
			quality: 0.8, 
			angle: 0,
			allowsEditing: false, 
			noData: false,
			storageOptions: {
				skipBackup: true  
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}else if (response.fileSize /1024 >= 500) { 
				//1048576 = 1024 * 1024
				this.refs.toast.show('图片太大，请选择一张更小的图');
      }
			else {
				let source = { 
					uri: response.uri,
					fileName:response.fileName,
					fileType : name === 'just' ?'10005':'10006',
					file:'data:image/png;base64,'+response.data,
				};
				this.setState({
					[`${name}Img`]: source
				});
			}
		});
	}
//this.urlArr.push({file:str,fileType:this.type == 'just' ? '10005' : '10006',fileName:name});
	//listBox  模块
	listBoxFn (name) {
		let _this = this.state,
				str   = name === 'just' ?'点击上传身份证人像面照片':'点击上传身份证国徽照片';
				img   = name === 'just' ?require('^/img/idcard/just.png'):require('^/img/idcard/back.png');
		return 	(
			<View style={{marginBottom:name==='just'?20:0,alignItems:'center'}}>	
				<View style={[cs.imgBox,{position:'relative'},coms.gcencen]}>
					<TouchableOpacity 
					onPress={()=>{
							this.selectPhotoTapped(name)
						}}
					>
						<Image style={cs.img} source={_this[`${name}Img`]?_this[`${name}Img`] :img} />
					</TouchableOpacity>
					<Text style={cs.text}>{!_this[`${name}Img`]?str:''}</Text>
					{_this[`${name}Img`] ? 
					<TouchableOpacity 
						style={cs.iconbox}
						onPress={()=>{
							this.setState({[`${name}Img`]:''})
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
						{this.listBoxFn('just')}
						{/* 国徽照片 */}
						{this.listBoxFn('back')}
					</View>

					{/* 订单提交 */}
					<View style={[coms.gBtnBox,{paddingTop:0}]}>
						<Text style={[
							coms.gBtnBoxButton,
							_this.justImg&&_this.backImg?coms.gBtnBoxButtonOn:''
						]}
						onPress={()=>{
							this.upload();
						}}
						>下一步</Text>
					</View>
				</ScrollView>
			</View>
		);
	}

}

