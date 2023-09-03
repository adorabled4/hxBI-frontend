// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加图表实体 POST /api/chart/add */
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

/** 通过id删除图表 POST /api/chart/delete */
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

/** 编辑图表实体类 POST /api/chart/edit */
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

/** 通过ai生成图表 POST /api/chart/gen/async/mq */
export async function genChartByAiUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartByAiUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseBiResponse_>('/api/chart/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 通过chartId获取图表 GET /api/chart/get */
export async function getChartEntityByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartEntityByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChart_>('/api/chart/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有图表 POST /api/chart/list/chart/all */
export async function getAllChartsUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePage_>('/api/chart/list/chart/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取生成失败图表 POST /api/chart/list/chart/unsucceed */
export async function getUnsucceedChartUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePage_>('/api/chart/list/chart/unsucceed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取图表列表 POST /api/chart/list/page */
export async function listChartEntityByPageUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart_>('/api/chart/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户图表列表 POST /api/chart/my/list/page */
export async function listMyChartEntityByPageUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart_>('/api/chart/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重新生成图表 GET /api/chart/regen/chart */
export async function regenerateChartUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.regenerateChartUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/chart/regen/chart', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新图表实体内容 POST /api/chart/update */
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
