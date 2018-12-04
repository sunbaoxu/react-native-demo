//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  Image,
  TouchableHighlight,
  Modal,
  ScrollView
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class StatusBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      async:false,
      obj :{}
    }
  }
  //modal  显示
  modalAsyncFn  (obj) {
    this.setState({async:true,obj});
  }

  
	render() {
    let arr= this.props.arr,
        obj= this.state.obj;
		return (
      <Modal
      style={cs.header}
      animationType="slide"
      transparent={true}
      visible ={this.state.async}>
      <View style={cs.modalBox}>
        <View style={cs.main}>
          <View>
            <Text style={cs.title}>已选方案：”{obj.planName}“</Text>
            <ScrollView style={cs.scrollbox}>
              <View style={cs.listmain}>
                {
                  arr.map((m,i)=>{
                  return  <View key={i} 
                            style={
                            [ cs.listbox,
                              i%3===1?cs.listcen:'',
                              i%3===2?cs.listrig:''
                          ]}>
                            <View style={[cs.borRadius,m.planId ===obj.planId ?cs.boron:'']}>
                              <Text style={[cs.list,m.planId ===obj.planId ?cs.liston:'']}>{m.planName}</Text>
                            </View>
                          </View>
                  })
                }
              </View>
            </ScrollView>
            {/* 期数 */}
            <View style={[coms.gfencen,cs.qibox,coms.gborder]}>
              <View style={coms.gceny}>
                <Text style={cs.gray}>机构代偿期：</Text>
                <Text style={cs.gray3}>{obj.orgNper}期</Text>
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
        </View>
        <Text style={cs.btnbox}>确定</Text>
      </View>
			</Modal>
		)
	}
}