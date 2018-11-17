const isDev = process.env.NODE_ENV === 'development';
// const protocol = window.location.protocol;

export default {
  ajaxBasePath: isDev ? '/api' : '',
  path: `https://txuedai.labifenqi.com/gateway2server/`
};
