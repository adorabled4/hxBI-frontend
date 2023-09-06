// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLastDayLog GET /api/chart/log */
export async function getLastDayLogUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLastDayLogUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChartLogDTO_>('/api/chart/log', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
