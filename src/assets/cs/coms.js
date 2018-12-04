import {
  StyleSheet
} from 'react-native';
import {res} from './resect'
/**公共样式 */
let comcs = StyleSheet.create(
{
	gBtnBox :{
		paddingLeft:res.pad15,
		paddingRight:res.pad15,
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
	gceny :{
		flexDirection:'row',
		alignItems:'center'
	},
	gcencen:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	gfencen:{
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	gborder:{
		borderColor:res.eee,
		borderBottomWidth:1,
		borderStyle:'solid',
	},
	gTextOver :{
			// overflow: 'hidden',
			// textOverflow: 'ellipsis',
			// writingDirection: 'nowrap'
	}
});

module.exports = comcs;