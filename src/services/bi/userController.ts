// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 通过用户id获取用户信息 GET /api/user/${param0} */
export async function getUserByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseUserVO_>(`/api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 通过ID删除用户 DELETE /api/user/${param0} */
export async function deleteUserByIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserByIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加用户 POST /api/user/add */
export async function addUserUsingPOST(body: API.UserEntity, options?: { [key: string]: any }) {
  return request<API.BaseResponse>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /api/user/current */
export async function currentUserUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO_>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/user/list */
export async function getUserListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserVO_>('/api/user/list', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // pageSize has a default value: 5
      pageSize: '5',
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录-email POST /api/user/login/email */
export async function loginUsingPOST(
  body: API.LoginEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/user/login/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录-email POST /api/user/login/email/quick */
export async function quickLoginUsingPOST(
  body: API.QuickLoginEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/user/login/email/quick', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册-email POST /api/user/register/email */
export async function registerByEmailUsingPOST(
  body: API.VerifyCodeRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/user/register/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendVerifyCode GET /api/user/send/code */
export async function sendVerifyCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendVerifyCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/user/send/code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新用户 POST /api/user/update */
export async function updateUserInfoUsingPOST(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
