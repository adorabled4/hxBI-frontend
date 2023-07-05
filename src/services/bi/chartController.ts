// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addChartEntity POST /api/chart/add */
export async function addChartEntityUsingPOST(
  body: API.ChartAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/chart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteChartEntity POST /api/chart/delete */
export async function deleteChartEntityUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editChartEntity POST /api/chart/edit */
export async function editChartEntityUsingPOST(
  body: API.ChartEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chart/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getChartEntityById GET /api/chart/get */
export async function getChartEntityByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartEntityByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChartEntity_>('/api/chart/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listChartEntityByPage POST /api/chart/list/page */
export async function listChartEntityByPageUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChartEntity_>('/api/chart/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyChartEntityByPage POST /api/chart/my/list/page */
export async function listMyChartEntityByPageUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChartEntity_>('/api/chart/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateChartEntity POST /api/chart/update */
export async function updateChartEntityUsingPOST(
  body: API.ChartUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
