import React, { Component } from 'react';
import {
    Text,
		View,
		Image,
		TouchableHighlight
} from 'react-native';
import Gfn from '^/js/globalFn';
import Toast from 'react-native-easy-toast';

import cs from './style';
import * as api from './api';
import coms from '^/cs/coms';
import storage from '^/js/storage';
import NavigatorBar from '@/header/headerNav';
import HeaderBox from '../common/header';
import ModalBox from '../common/modal';

export default class ShangCode extends Component{
	constructor(props) {
		super(props);
		this.state = {
			obj :{},
			arr :[],
			planText :'',
			planObj:{},
			async:false
		}
	}

	componentWillMount (){
		//从本地缓存中，取bus数据 
		this.getBusObj();
	}

/** 从本地缓存中，取bus数据 */
	async getBusObj (){
		let obj = await storage.get('labi-bus-obj').then(res=>{
			return res;
		});
		this.setState({obj});
		//获取商品方案
		this.queriesProgramListNew();
	}

/** 获取商品方案 */
	async queriesProgramListNew (){
		let _this = this.state.obj;
		let res = await Gfn.dataFn({
			orgId:_this.orgId,
			commodityId:_this.commodityId
		});
		
		let data = await api.queriesProgramListNew(res);

		if(data.respCode === '000'){
			let obj = await storage.get('lb-bus-play-obj').then(res=>{
					return res;
				});
			this.setState({
				arr:data.plans,
				planObj:obj ?JSON.parse(obj):data.plans[0]
			});
		} else{
			this.refs.toast.show(data.respMesg)
		}
	}
	/**关闭 方案遮罩 */
	onCloseFn (obj) {
		this.setState({
			planObj:obj,
			async:false
		});
	}

	render() {
		let _this = this.state;
		return (
			<View style={cs.listWrap}>
				<NavigatorBar title={'商家列表'} navigator={this.props.navigator}/>
				<View View style={[cs.listBody]}>
					{/* 商家头部 */}
					<HeaderBox  obj={this.state.obj} />
					{/* 课程列表 */}
					<View style={cs.listMain}>
						{/* 商品名称 */}
						<View style={[cs.listBox,coms.gfencen,coms.gborder]}>
							<View style={coms.gceny}>
								<Image source={require('^/img/icon/cName.png')} style={[cs.icon]}/>
								<Text style={cs.title}>商品名称</Text>
							</View>
							<Text style={cs.name}>{_this.obj.cName}</Text>
						</View>
						{/* 分期方案 */}
						<TouchableHighlight
								underlayColor="transparent"
								onPress={() =>{
									this.setState({
										async:true
									});
								}}
							>
							<View style={[cs.listBox,coms.gfencen]}>
								<View style={coms.gceny}>
									<Image source={require('^/img/icon/money.png')} style={[cs.icon]}/>
									<Text style={cs.title}>分期方案</Text>
								</View>
								
								<View style={[coms.gceny]}>
									<Text style={cs.name}>{_this.planText || '点击选择分期方案'}</Text>
									<Image source={require('^/img/icon/jian.png')} style={[cs.icon1]}/>
								</View>
							</View>
						</TouchableHighlight>
					</View>
					{/* 订单提交 */}
					<View style={[coms.gBtnBox,cs.btnBox]}>
						<Text 
								style={[coms.gBtnBoxButton,(this.state.code ?coms.gBtnBoxButtonOn:{})]}
								onPress={()=>{
										// if(!this.state.code){
										// 		return false
										// } else{
										// 		// this.queryBusinessInfoAndProgram()
										// }
								}}
						>下一步</Text>
					</View>
					{/* 弹层  方案 */}
					{_this.async?<ModalBox ref="modalBox" arr={_this.arr} onCloseFn={(res)=>this.onCloseFn(res)} async={_this.async} planObj={_this.planObj}></ModalBox>:<Text></Text>}
				</View>
				<Toast ref="toast" opacity={0.8}/>
			</View>
		)
	}
}