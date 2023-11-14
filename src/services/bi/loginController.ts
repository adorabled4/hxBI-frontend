// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** loginByGitee GET /api/login3rd/gitee/callback */
export async function loginByGiteeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginByGiteeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/login3rd/gitee/callback', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginByGithub GET /api/login3rd/github/callback */
export async function loginByGithubUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginByGithubUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/login3rd/github/callback', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
