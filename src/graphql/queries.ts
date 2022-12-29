/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      name
      amount
      couponType
      code
      expires
      accountholderID
      expired
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        couponType
        code
        expires
        accountholderID
        expired
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCoupons = /* GraphQL */ `
  query SyncCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        amount
        couponType
        code
        expires
        accountholderID
        expired
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const couponsByAccountholderID = /* GraphQL */ `
  query CouponsByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    couponsByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        amount
        couponType
        code
        expires
        accountholderID
        expired
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPayments = /* GraphQL */ `
  query GetPayments($id: ID!) {
    getPayments(id: $id) {
      id
      terminalUID
      firstname
      lastname
      agentId
      orderId
      paymentStatus
      amount
      paymentType
      processorType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        terminalUID
        firstname
        lastname
        agentId
        orderId
        paymentStatus
        amount
        paymentType
        processorType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        terminalUID
        firstname
        lastname
        agentId
        orderId
        paymentStatus
        amount
        paymentType
        processorType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductCategory = /* GraphQL */ `
  query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
      id
      name
      description
      accountholderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductCategories = /* GraphQL */ `
  query SyncProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const productCategoriesByAccountholderID = /* GraphQL */ `
  query ProductCategoriesByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productCategoriesByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTerminal = /* GraphQL */ `
  query GetTerminal($id: ID!) {
    getTerminal(id: $id) {
      id
      UID
      tablet
      accountholderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTerminals = /* GraphQL */ `
  query ListTerminals(
    $filter: ModelTerminalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerminals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UID
        tablet
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTerminals = /* GraphQL */ `
  query SyncTerminals(
    $filter: ModelTerminalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTerminals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UID
        tablet
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const terminalsByAccountholderID = /* GraphQL */ `
  query TerminalsByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTerminalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    terminalsByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UID
        tablet
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      item {
        ItemNames
        price
        specialPrice
        unalteredPrice
      }
      Categories
      accountholderID
      special
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Categories
        accountholderID
        special
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Categories
        accountholderID
        special
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const productsByAccountholderID = /* GraphQL */ `
  query ProductsByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Categories
        accountholderID
        special
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      Items {
        ItemNames
        price
        specialPrice
        unalteredPrice
      }
      firstname
      lastname
      accountholderID
      total
      remaining
      orderStatus
      notes
      processorPaymentIds
      processorRefundIds
      paymentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        accountholderID
        total
        remaining
        orderStatus
        notes
        processorPaymentIds
        processorRefundIds
        paymentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        accountholderID
        total
        remaining
        orderStatus
        notes
        processorPaymentIds
        processorRefundIds
        paymentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const ordersByAccountholderID = /* GraphQL */ `
  query OrdersByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstname
        lastname
        accountholderID
        total
        remaining
        orderStatus
        notes
        processorPaymentIds
        processorRefundIds
        paymentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstname
      lastname
      pin
      accountholderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        pin
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        pin
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByAccountholderID = /* GraphQL */ `
  query UsersByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstname
        lastname
        pin
        accountholderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAccountHolder = /* GraphQL */ `
  query GetAccountHolder($id: ID!) {
    getAccountHolder(id: $id) {
      id
      sub
      accountStatus
      Users {
        nextToken
        startedAt
      }
      Orders {
        nextToken
        startedAt
      }
      Terminals {
        nextToken
        startedAt
      }
      Products {
        nextToken
        startedAt
      }
      ProductCategories {
        nextToken
        startedAt
      }
      stripeId
      Coupons {
        nextToken
        startedAt
      }
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAccountHolders = /* GraphQL */ `
  query ListAccountHolders(
    $filter: ModelAccountHolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountHolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        accountStatus
        stripeId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccountHolders = /* GraphQL */ `
  query SyncAccountHolders(
    $filter: ModelAccountHolderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccountHolders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sub
        accountStatus
        stripeId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
