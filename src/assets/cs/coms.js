import {
    StyleSheet
} from 'react-native';
import {res} from './resect'
/**公共样式 */
let comcs = StyleSheet.create(
{
    gBtnBox :{
        paddingLeft:res.pad30,
        paddingRight:res.pad30,
        paddingTop:45
    },
    gBtnBoxButton :{
        fontSize:17,
        height:50,
        backgroundColor:res.ccc, 
        borderRadius:25,
        color:res.white,
        overflow:'hidden',
        textAlign:'center',
        lineHeight:50
    },
    gBtnBoxButtonOn :{
        backgroundColor:res.blue
    },
    gCenY :{
        display:'flex'

    },
    gTextOver :{
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // writingDirection: 'nowrap'
    }
});

module.exports = comcs;