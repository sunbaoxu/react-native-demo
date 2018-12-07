//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import Toast from 'react-native-easy-toast';

import cs from './style';
import coms from '^/cs/coms';


export default class TipsTop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
			<View style={coms.geny}>
				<View style={coms.geny}>
					<Image source={require('^/img/icon/tips.png')} style={cs.icon}/>
					<Text>实名认证</Text>
				</View>
				<View style={coms.geny}>
					<Text>未认证</Text>
					<Image source={require('^/img/icon/jian.png')} style={cs.icon}/>
				</View>
			</View>
		)
	}
}

