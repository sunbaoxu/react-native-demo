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
import storage from '^/js/storage';
import NavigatorBar from '@/header/headerNav';
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



	render() {
		let _this =this.state.obj;
		return (
			<View style={cs.listWrap}>
				<NavigatorBar title={'商家列表'} navigator={this.props.navigator}/>
				<View View style={[cs.listBody]}>
					{/* 商家头部 */}
					<HeaderBox  obj={_this} />
					{/* 课程列表 */}
					<View style={cs.listMain}>
						{
							this.state.arr.map((m,i)=>{
								return (
									<TouchableHighlight 
										key={i}
										underlayColor="transparent" 
										style={cs.close}
										onPress={() =>{
											storage.set('labi-bus-obj',{
												commodityId:m.id,
												cName:m.cName,
												orgId : _this.id,
												businessType:_this.businessType,
												orgShortName:_this.orgShortName,
												remark:_this.remark,
												orgImgPath:_this.orgImgPath,
												orgAddrDetailed:_this.orgAddrDetailed
											});
											this.props.navigator.push({
												component:ShangDetail
											});
										}}
									>
										<View style={[cs.listBox,i!==this.state.arr.length-1&& cs.listBorder]} >
											<View><Text style={cs.listtitle}>{m.cName}</Text></View>
											<View style={cs.box}>
												<Text style={[cs.qibox,cs.nper]}>可选{
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
									</TouchableHighlight>)
							})
						}
					</View>
				</View>
				<Toast ref="toast" opacity={0.8}/>
			</View>
		)
	}
}