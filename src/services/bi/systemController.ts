// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** pushMessage GET /api/socket/push/${param0} */
export async function pushMessageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pushMessageUsingGETParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.BaseResponse>(`/api/socket/push/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
