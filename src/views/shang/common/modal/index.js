//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class StatusBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      async:true
    }
  }
  //modal  显示
  modalAsyncFn  () {
    this.setState({async:true})
  }

  
	render() {
    let arr= this.props.arr;
		return (
      <Modal
      style={cs.header}
      animationType="slide"
      transparent={true}
      visible ={this.state.async}>
      <View style={cs.modalBox}>
        <View style={cs.main}>
          <View>
            <Text style={cs.title}>已选方案：”{arr[0] && arr[0].planName}“</Text>
            <View>
              
            </View>
            {/* 期数 */}
            <View style={[coms.gfencen,cs.qibox,coms.gborder]}>
              <View style={coms.gceny}>
                <Text style={cs.gray}>机构代偿期：</Text>
                <Text style={cs.gray3}>{}期</Text>
              </View>
              <View style={coms.gceny}>
                <Text style={cs.gray}>低额还款期：</Text>
                <Text style={cs.gray3}>{}期</Text>
              </View>
              <View style={coms.gceny}>
                <Text style={cs.gray}>高额还款期：</Text>
                <Text style={cs.gray3}>{}期</Text>
              </View>
            </View>
            {/* 个人还款期数 */}
            <View style={[cs.userbox,coms.gfencen]}>
              <Text style={cs.usertitle}>个人还款期数：</Text>
              <Text style={cs.userqi}>{}期</Text>
            </View>
          </View>
          <Text style={cs.btnbox}>确定</Text>
        </View>
      </View>
			</Modal>
		)
	}
}