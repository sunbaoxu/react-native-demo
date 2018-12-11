import api from '$/api';
import Gfn from '^/js/globalFn';

/** 上传图片*/
export const   upload = (data) =>api.post('vx/file/base64/upload',data).then(res => {
    return res.data
});
