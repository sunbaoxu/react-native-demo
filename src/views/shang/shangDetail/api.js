import api from '$/api';

/** 根据方案查低高额还款期 */
export const   queriesProgramListNew = (data) =>api.post('borrowerController/queriesProgramListNew',data).then(res => {
    return res.data
});

/** 基本信息认证 */
export const   queryAuthInfo = (data) =>api.post('vx/userInfo/queryAuthInfo',data).then(res => {
    return res.data
});
   


    



