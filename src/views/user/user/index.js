//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import Toast from 'react-native-easy-toast';

import cs from './style';
import coms from '^/cs/coms';
import * as api from './api';
import NavigatorBar from '@/header/headerNav';
import storage from '^/js/storage';
import ShangCode from '~/shang/shangCode';


export default class User extends Component{
	constructor(props) {
		super(props);
		this.state = {
				
		}
	}

	render() {
		return (
			<View>	
				<NavigatorBar title={'我的资料'} navigator={this.props.navigator}/>
				<Text>SFDA</Text>
				
			</View>
		)
	}
}

