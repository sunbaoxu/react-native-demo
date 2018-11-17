import api from '$/api';

/** 根据code获取商家信息 */
export const   queryBusinessInfoAndProgram = (data) =>api.post('basicFController/queryBusinessInfoAndProgram',data).then(res => {
        return res.data
    });
   


    



