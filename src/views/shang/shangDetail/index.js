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
import SlideBox from '../common/slider';
import User from '~/user/user';

export default class ShangCode extends Component{
	constructor(props) {
		super(props);
		this.state = {
			obj :{},
			arr :[],
			planText :'',
			planObj:{},
			async:false,//是否显示滑块
			moneyValNum:0,//默认金额
			moneyAsync:false,//默认金额是否变更
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
		//根据方案查低高额还款期
		this.queriesProgramListNew();
	}

/** 根据方案查低高额还款期 */
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
				}),
				arr = data.plans.length===1?data.plans[0]:{}
			this.setState({
				arr:data.plans,
				planObj:obj ?JSON.parse(obj):arr,
				planText :obj ?JSON.parse(obj).planName:arr.planName,
				moneyValNum:obj ?JSON.parse(obj).moneyValNum:arr.money,
			});
		} else{
			this.refs.toast.show(data.respMesg)
		}
	}
/** 基本信息认证 */
async queryAuthInfo (){
	let res = await Gfn.dataFn({
		source : 'loan'
	});
	
	let data = await api.queryAuthInfo(res);
	//校验信息是否完全
	if(data.isPerfect){
		if(data.isblack){
			Toast('很抱歉，您未能通过平台的信用评估(411)');
		}else{
			//学贷检查是否可以下单
			// this.loanCheckInstall();
		}
	} else{
		// Object.assign(this.planObj,{moneyValNum:this.moneyValNum,});
		// storage.set('labi-bus-obj',{});
		//跳转到我的资料页
		this.props.navigator.push({
				component:User
		});
	}
}
/**关闭 方案遮罩 */
	onCloseFn (obj,async) {
		if(async){
			this.setState({
				planObj:obj,
				async:false,
				planText:obj.planName,
				moneyValNum :obj.money,
				moneyAsync :true
			});
		} else{
			this.setState({
				async:false,
				moneyAsync: false
			});
		}
	}


	render() {
		let _this = this.state;
		return (
			<View style={cs.listWrap}>
				<NavigatorBar title='商品详情' navigator={this.props.navigator}/>
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
					{/* 滑块 */}
					{_this.planText 
						? 
						<SlideBox 
							obj={_this.planObj} 
							moneyValNum={_this.moneyValNum}
							setValueNameFn = {(res)=>{this.setState({...res})}}
							moneyAsync = {_this.moneyAsync}
						> 
						<Image source={require('^/img/icon/xiugai.png')} style={cs.icon2}/>
						</SlideBox>
						:
						<Text />
					}
					{/* <SlideBox />  */}
					{/* 订单提交 */}
					<View style={[coms.gBtnBox,cs.btnBox]}>
						<Text 
								style={[coms.gBtnBoxButton,(_this.planObj.planName ?coms.gBtnBoxButtonOn:{})]}
								onPress={()=>{
									//基本信息认证
									this.queryAuthInfo();
								}}
						>下一步</Text>
					</View>
					{/* 弹层  方案 */}
					{_this.async ?
						<ModalBox 
							ref="modalBox" 
							arr={_this.arr} 
							onCloseFn={(res,async)=>this.onCloseFn(res,async)} 
							async={_this.async} planObj={_this.planObj} 
						/>
						:
						<Text/>
					}
				</View>
				<Toast ref="toast" opacity={0.8}/>
			</View>
		)
	}
}