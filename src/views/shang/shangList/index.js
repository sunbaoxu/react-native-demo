import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Gfn from '^/js/globalFn';
import Toast from 'react-native-easy-toast';

import cs from './style';
// import coms from '^/cs/coms';
import * as api from './api';
import NavigatorBar from '@/header/headerNav';

export default class ShangCode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            obj :{},
            arr :[]
        }

        console.log(this.props,'bbbbbbbbbbb')
    }

    componentWillMount (){
        this.queryBusinessInfoAndProgram();
    }

/** 根据code获取商家信息 */
    async queryBusinessInfoAndProgram (){
        let res = await Gfn.dataFn({
            // QRcode:this.props.code
            QRcode:'trda001'
        });
        
        let data = await api.queryBusinessInfoAndProgram(res);

        if(data.respCode === '000'){
            console.log(data)
            this.setState({
                arr:data.lCommodities,
                obj :data
            });
        } else{
            this.refs.toast.show(data.respMesg)
        }
    }



    render() {
        return (
            <View style={cs.listWrap}>
                <NavigatorBar title={'商家列表'} navigator={this.props.navigator}/>
                <View View style={[cs.listBody]}>
                {/* 商家头部 */}

                {/* 课程列表 */}
                <View style={cs.listMain}>
                    {
                        this.state.arr.map((m,i)=>{
                            return (<View style={cs.listBox} key={i}>
                                <Text>{m.cName}</Text>
                            </View>)
                        })
                    }
                </View>
                </View>
                <Toast ref="toast" opacity={0.8}/>
            </View>
        )
    }
}