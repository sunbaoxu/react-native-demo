import api from '$/api';
import Gfn from '^/js/globalFn';

/**登陆 */
export const   register = (data) => 
    api.post('vx/login/login',Gfn.loginObj(data)).then(res => {
        return res.data;

    });

/**发送验证码 */
export const   getNotValiSend = (data) => 
    api.post('vx/basic/notVali/send',data).then(res =>{
        return res.data
});

/**发送图片验证码 */
export const   getImgSend = (data) => {
    return `${api.defaults.baseURL}vx/basic/send/${data.phone}?${Math.random()}`
}