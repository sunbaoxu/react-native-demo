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
// import coms from '^/cs/coms';
import * as api from './api';
import storage from '^/js/storage';
import NavigatorBar from '@/header/headerNav';
import HeaderBox from '../common/header';

export default class ShangCode extends Component{
	constructor(props) {
		super(props);
		this.state = {
			obj :{},
			arr :[]
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
	}



	render() {
		return (
			<View style={cs.listWrap}>
				<NavigatorBar title={'商家列表'} navigator={this.props.navigator}/>
				<View View style={[cs.listBody]}>
					{/* 商家头部 */}
					<HeaderBox  obj={this.state.obj} />
					{/* 课程列表 */}
					<View style={cs.listMain}>
		
					</View>
				</View>
				<Toast ref="toast" opacity={0.8}/>
			</View>
		)
	}
}