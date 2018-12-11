//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
		Image,
		TouchableHighlight
} from 'react-native';
import Toast from 'react-native-easy-toast';

import cs from './style';
import coms from '^/cs/coms';
import RealName from '~/user/realName';

export default class TipsTop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
			<TouchableHighlight 
				underlayColor="transparent" 
				onPress={() =>{
					
					this.props.navigator.push({
						component:RealName
					});
				}}
			>
				<View style={[coms.gceny,cs.box,coms.gborder]}>
					<View style={[coms.gceny,cs.lef]}>
						<Image source={require('^/img/icon/tips.png')} style={cs.icon}/>
						<Text>实名认证</Text>
					</View>
					<View style={[coms.gceny,cs.rig]}>
						<Text>未认证</Text>
						<Image source={require('^/img/icon/jian.png')} style={cs.jiao}/>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

