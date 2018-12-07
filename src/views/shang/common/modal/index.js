//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class ModalBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      obj :this.props.planObj.planName?this.props.planObj:this.props.arr[0]
    }
  }
  /**个人还款期数 */
  userFn (obj) {
    let str='';
    if(obj.lowRate<=0 || obj.highRate<=0){
      str = 'userNper';
    } else if(obj.lowRate>0 && obj.highRate>0){
      str = 'userNper';
    } else if(obj.lowNper>0){
      str = 'userNper';
    } else if(obj.highNper>0){
      str = 'userNper';
    }

    return <Text>{obj[str]}期</Text>
  }
  
	render() {
    let arr= this.props.arr,
        obj= this.state.obj;
		return (
      <Modal
      style={cs.header}
      animationType="slide"
      transparent={true}
      onRequestClose={() => { 
        this.props.onCloseFn(this.props.planObj,false)
      }}
      visible ={this.props.async}>
      {/* 半透明 */}
      <Text style={cs.flex}
        onPress={() =>{
          this.props.onCloseFn(this.props.planObj,false)
      }}></Text>
      {/* 主要内容 */}
      <View style={cs.main}>
        <View>
          <Text style={cs.title}>已选方案：”{obj.planName}“</Text>
          {/* 方案列表 */}
          <ScrollView style={cs.scrollbox}>
            <View style={cs.listmain}>
              {
                arr.map((m,i)=>{
                return (
                <View 
                    key={i} 
                    style={
                    [ cs.listbox,
                      i%3===1?cs.listcen:'',
                      i%3===2?cs.listrig:''
                  ]}>
                    <View style={[cs.borRadius,m.planId ===obj.planId ?cs.boron:'']}>
                      <TouchableOpacity 
                        onPress={() =>{
                          this.setState({
                            obj:m
                          })
                      }}>
                        <Text 
                          style={[cs.list,m.planId ===obj.planId ?cs.liston:'']} >{m.planName}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>)
                })
              }
            </View>
          </ScrollView>
          {/* 还款期数 */}
          <View style={[coms.gfencen,cs.qibox,coms.gborder]}>
            <View style={coms.gceny}>
              <Text style={cs.gray}>机构代偿期：</Text>
              <Text style={cs.gray3}>{obj.orgNper}期</Text>
            </View>
            <View style={coms.gceny}>
              <Text style={cs.gray}>低额还款期：</Text>
              {
                obj.lowRate <=0 ? 
                <Text style={cs.gray3}>
                  <Text>{obj.lowNper}期</Text>0期
                </Text>
                :
                <Text style={cs.gray3}>{obj.lowNper}期</Text>
              }
            </View>
            <View style={coms.gceny}>
              <Text style={cs.gray}>高额还款期：</Text>
              {
                obj.highRate <=0 ? 
                <Text style={cs.gray3}>
                  <Text>{obj.highNper}期</Text>0期
                </Text>
                :
                <Text style={cs.gray3}>{obj.highNper}期</Text>
              }
            </View>
          </View>
          {/* 个人还款期数 */}
          <View style={[cs.userbox,coms.gfencen]}>
            <Text style={cs.usertitle}>个人还款期数：</Text>
            {/* 个人还款期数 */}
            {this.userFn(obj)}
          </View>
        </View>
      </View>
      <Text
        style={cs.btnbox} 
        onPress={() =>{
          this.props.onCloseFn(obj,true)
        }}>确定</Text>
			</Modal>
		)
	}
}