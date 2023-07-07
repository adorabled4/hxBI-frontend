declare namespace API {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    description?: string;
    message?: string;
  };

  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    description?: string;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    description?: string;
    message?: string;
  };

  type BaseResponseChartEntity_ = {
    code?: number;
    data?: ChartEntity;
    description?: string;
    message?: string;
  };

  type BaseResponseListUserVO_ = {
    code?: number;
    data?: UserVO[];
    description?: string;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    description?: string;
    message?: string;
  };

  type BaseResponsePageChartEntity_ = {
    code?: number;
    data?: PageChartEntity_;
    description?: string;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    description?: string;
    message?: string;
  };

  type BiResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartEntity = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartQueryRequest = {
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type deleteUserByIdUsingDELETEParams = {
    /** id */
    id: number;
  };

  type getChartByAIUsingPOSTParams = {
    biz?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type getChartEntityByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getUserListUsingGETParams = {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type LoginRequest = {
    password?: string;
    userAccount?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChartEntity_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChartEntity[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type RegisterRequest = {
    checkPassword?: string;
    password?: string;
    userAccount?: string;
  };

  type UserEntity = {
    address?: string;
    avatarUrl?: string;
    birth?: string;
    createTime?: string;
    email?: string;
    gender?: number;
    isDelete?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userId?: number;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserVO = {
    address?: string;
    avatarUrl?: string;
    birth?: string;
    email?: string;
    gender?: number;
    phone?: string;
    userAccount?: string;
    userId?: number;
    userName?: string;
    userRole?: string;
  };
}
