//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class HeaderBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      maxHeight :null,
      numLines:null,
      async: false,
      btnText:'查看更多'
    }
  }
	render() {
    let obj = this.props.obj,
        _this =this.state;
    /**更多按钮 */
    btnBox = <TouchableHighlight
              underlayColor="transparent" 
              onPress={()=>{
                this.setState({
                  numLines:_this.numLines?null:2,
                  btnText:!_this.numLines?'查看更多':'收起更多'
                });
              }}
            >
              <View style={[cs.btnbox,coms.gcencen]}>
                <Image source={require('^/img/icon/jian.png')} style={[cs.icon,_this.numLines && cs.iconTop]}/>
                <Text 
                style={cs.btntext} 
                >{_this.btnText}</Text>
              </View> 
            </TouchableHighlight>

		return (
			<View style={cs.header}>
        {/* 商家logo，title */}
				<View style={cs.dl}>
          <View style={cs.dt}>
            <Image source={require('^/img/bus.png')} style={cs.dtimg}/>
          </View>
          <View style={cs.dd}>
            <Text style={cs.title}>{obj.orgShortName}</Text>
            <Text style={[cs.ddtext,coms.gTextOver]} numberOfLines={1}>{obj.orgAddrDetailed}</Text>
          </View>
        </View>
        {/* 商家介绍 */}
        <View>
          <Text 
          numberOfLines={_this.numLines} 
          style={cs.ptext}
          onLayout={(e)=>{
            let h = e.nativeEvent.layout.height;
            //第一次测量view的最大高度
            if(h >37 && !_this.async){
              this.setState({
                numLines:2,
                async:true
              });
            }
        }}
        >{obj.remark}</Text>

        {/* 更多按钮 */}
        </View>
        {_this.numLines || _this.async?btnBox:<Text></Text>}
			</View>
		)
	}
}