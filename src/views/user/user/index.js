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
import TipsTop from '@/tips/tipsTop';
import storage from '^/js/storage';
import ListBox from '../common/list';


export default class User extends Component{
	constructor(props) {
		super(props);
		this.state = {
				
		}
	}

	render() {
		return (
			<View style={cs.userwarp}>	
				<NavigatorBar title={'我的资料'} navigator={this.props.navigator}/>
				<TipsTop str='您填写的个人信息将做加密处理，请放心认证！'/>
				<ScrollView>
				<View>
						<Text style={[cs.title]}>基本信息（必填）</Text>
						<View style={cs.listbox}>
							<ListBox 
							
							></ListBox>
							<ListBox 
							
							></ListBox>
							<ListBox 
							
							></ListBox>
							<ListBox 
							
							></ListBox>
							<ListBox 
							
							></ListBox>
						</View>
					</View>
					<View>
						<Text style={[cs.title]}>授权认证（必填）</Text>
						<View style={cs.listbox}>
							<ListBox 
							
							></ListBox>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

