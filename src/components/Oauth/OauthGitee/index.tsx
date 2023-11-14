import { loginByGiteeUsingGET } from '@/services/bi/loginController';
import { message } from 'antd';

export const OauthGitee = {
  getCode() {
    const authorize_uri = 'https://gitee.com/oauth/authorize';
    const client_id = '7d0bcf67627ef27818bf82d8b617430830428525028b27b2288214b35cb49e54';
    const redirect_uri = 'http://localhost:8000/user/login';
    location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    localStorage.setItem('login_state', 'GITEE');
  },

   async getToken(code: string) {
    const state = localStorage.getItem('login_state') || '';
    const params: API.loginByGiteeUsingGETParams = { code: code, state: state };
    let msg = await loginByGiteeUsingGET(params);
    // console.log('params', params);
    if (msg.code === 200) {
      console.log('result : ', msg);
      // 保存token到localStorage
      let token:string = msg.data ?? '';
      localStorage.setItem('accessToken', token);
      // message.success(defaultLoginSuccessMessage);
      message.success('登录成功');
      return token;
    }
  },
};

export default OauthGitee;
