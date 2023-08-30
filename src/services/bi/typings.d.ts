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

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    description?: string;
    message?: string;
  };

  type BaseResponseListBoolean_ = {
    code?: number;
    data?: boolean[];
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

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    description?: string;
    message?: string;
  };

  type BaseResponsePage_ = {
    code?: number;
    data?: Page;
    description?: string;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    description?: string;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
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

  type Chart = {
    chartId?: number;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: string;
    name?: string;
    status?: string;
    userId?: number;
    version?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    execMessage?: string;
    goal?: string;
    name?: string;
    status?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    execMessage?: string;
    goal?: string;
    id?: number;
    name?: string;
    status?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    current?: number;
    execMessage?: string;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
  };

  type compressChartTestUsingGETParams = {
    /** id */
    id: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type deleteUserByIdUsingDELETEParams = {
    /** id */
    id: number;
  };

  type genChartByAiUsingPOSTParams = {
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

  type LoginEmailRequest = {
    email?: string;
    password?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type Page = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Pageable = {
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    sort?: Sort;
    unpaged?: boolean;
  };

  type PageChart_ = {
    content?: Chart[];
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
  };

  type pushMessageUsingGETParams = {
    /** message */
    message?: string;
    /** userId */
    userId: string;
  };

  type QuickLoginEmailRequest = {
    code?: string;
    email?: string;
  };

  type regenerateChartUsingGETParams = {
    /** chartId */
    chartId: number;
  };

  type sendMessageUsingGETParams = {
    /** id */
    id: number;
  };

  type sendUsingGETParams = {
    /** msg */
    msg: string;
  };

  type sendVerifyCodeUsingGETParams = {
    /** email */
    email: string;
  };

  type Sort = {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
  };

  type testGetFromMongoUsingGETParams = {
    /** id */
    id: number;
  };

  type testGetFromMysqlUsingGETParams = {
    /** id */
    id: number;
  };

  type testInsertMongoSingleUsingGETParams = {
    /** id */
    id: number;
  };

  type updateUserInfoUsingPOSTParams = {
    address?: string;
    avatarUrl?: string;
    birth?: string;
    email?: string;
    gender?: number;
    phone?: string;
    userName?: string;
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
    userId?: number;
    userName?: string;
    userRole?: string;
  };

  type VerifyCodeRegisterRequest = {
    code?: string;
    email?: string;
    password?: string;
  };
}
