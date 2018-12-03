import api from '$/api';

/** 根据code获取商家信息 */
export const   queriesProgramListNew = (data) =>api.post('borrowerController/queriesProgramListNew',data).then(res => {
        return res.data
    });
   


    



