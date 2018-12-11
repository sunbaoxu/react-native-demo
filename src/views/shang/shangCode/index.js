import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Gfn from '^/js/globalFn';

import cs from './style';
import coms from '^/cs/coms';
import * as api from './api';
import ShangList from '~/shang/shangList';

export default class ShangCode extends Component{
	constructor(props) {
		super(props);
		this.state = {
			code:''
		}
	}
/** 根据code获取商家信息 */
	async queryBusinessInfoAndProgram (){
		let res = await Gfn.dataFn({
			QRcode:this.state.code
		});
		
		let data = await api.queryBusinessInfoAndProgram(res);

		if(data.respCode === '000'){
			this.props.navigator.push({
				component:ShangList,
				params:{
						code:data.recoCode
				}
			});
		} else{
			this.props.toastFn(data.respMesg)
		}
	}

	componentDidMount (){
		this.props.navigatorFn({
			navigator:this.props.navigator,
			title:'商家推荐码'
		});
	}



	render() {
		return (
			<View style={cs.codeWrap}>
				<View View style={cs.codeMain}>
					<View style={{'flexDirection':'row',"backgroundColor":'green'}}>
						<TextInput
						placeholder="请输入推荐码(6-11位字母或数字)"
						placeholderTextColor ="#999"
						underlineColorAndroid="transparent"
						style={cs.input}
						maxLength={11}
						onChangeText={
							(code) => {
								this.setState({code})
							}
						}
						value={this.state.code} />
						{/* icon图标 */}
						<TouchableHighlight 
						underlayColor="transparent"
						style={[cs.iconBox,!this.state.code?cs.iconNo:{}]}
						onPress={()=>{
							this.setState({
								code:''
							})
						}}
						>
							<Image source={require('^/img/icon/guanbi.png')} style={cs.icon}/>
						</TouchableHighlight>
					</View>
					{/* 订单提交 */}
					<View style={[coms.gBtnBox,cs.btnBox]}>
						<Text 
							style={[coms.gBtnBoxButton,(this.state.code ?coms.gBtnBoxButtonOn:{})]}
							onPress={()=>{
								if(!this.state.code){
									return false
								} else{
									this.queryBusinessInfoAndProgram()
								}
							}}
						>下一步</Text>
					</View>
				</View>
			</View>
		)
	}
}