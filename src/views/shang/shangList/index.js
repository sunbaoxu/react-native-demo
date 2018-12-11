import React, { Component } from 'react';
import {
    Text,
		View,
		Image,
		TouchableHighlight,
		ScrollView,
		FlatList
} from 'react-native';
import Gfn from '^/js/globalFn';

import cs from './style';
import coms from '^/cs/coms';
import * as api from './api';
import storage from '^/js/storage';
import HeaderBox from '../common/header';
import ShangDetail from '~/shang/shangDetail';

export default class ShangCode extends Component{
	constructor(props) {
		super(props);
		this.state = {
			obj :{},
			arr :[]
		}
	}

	componentWillMount (){
		this.queryBusinessInfoAndProgram();
	}

/** 根据code获取商家信息 */
	async queryBusinessInfoAndProgram (){
		let res = await Gfn.dataFn({
			// QRcode:this.props.code
			QRcode:'stjy001'
		});
		
		let data = await api.queryBusinessInfoAndProgram(res);

		if(data.respCode === '000'){
			this.setState({
				arr:data.lCommodities,
				obj :data
			});
		} else{
			this.refs.toast.show(data.respMesg)
		}
	}

	componentDidMount (){
		this.props.navigatorFn({
			navigator:this.props.navigator,
			title:'商家列表'
		});
	}


	listBoxFn (m,i) {
		let _this =this.state.obj;
		return (
			<TouchableHighlight 
				key={i}
				underlayColor="transparent" 
				style={cs.close}
				onPress={() =>{
					storage.set('labi-bus-obj',{
						commodityId	:	m.id,
						cName 			:	m.cName,
						orgId 			: _this.id,
						businessType:	_this.businessType,
						orgShortName:	_this.orgShortName,
						remark			:	_this.remark,
						orgImgPath	:	_this.orgImgPath,
						orgAddrDetailed:_this.orgAddrDetailed
					});
					this.props.navigator.push({
						component:ShangDetail
					});
				}}
			>
				<View style={[cs.listBox,coms.gborder]} >
					<View><Text style={cs.listtitle}>{m.cName}</Text></View>
					<View style={{flexDirection:'row'}}>
						<Text style={[cs.qibox,{paddingTop:1}]}>可选{
							m.nperList.map((n,ind) =>{
								let str = '/';
								if(ind >= m.nperList.length-1){
									str='';
								}
								return (
									n+str
								)
							})
						}期</Text>
						<View style={cs.router}>
							<Text style={cs.qibox}>最高可借</Text>
							<Text style={cs.money}>￥{m.money}</Text>
							<Image source={require('^/img/icon/jian.png')} style={[cs.icon]}/>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}


	render() {
		let _this =this.state.obj;
		return (
			<View style={cs.listWrap}>
				<View View style={[cs.listBody]}>
					{/* 商家头部 */}
					<HeaderBox  obj={_this} />
					{/* 课程列表 */}
					<View style={cs.listMain}>
						<FlatList 
							data = {this.state.arr}
							renderItem = {(item)=>
								this.listBoxFn(item.item,item.index)
							}
						/>
					</View>
				</View>
			</View>
		)
	}
}