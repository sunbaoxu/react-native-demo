//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import cs from './style';
import coms from '^/cs/coms';


export default class TipsTop extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={[cs.header,coms.gceny]}>	
        <Image source={require('^/img/icon/tips.png')} style={cs.icon}/>
        <Text style={cs.text}>{this.props.str}</Text>
			</View>
		)
	}
}

