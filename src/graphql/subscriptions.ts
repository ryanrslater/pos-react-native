/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onCreateCoupon(filter: $filter) {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onUpdateCoupon(filter: $filter) {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onDeleteCoupon(filter: $filter) {
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
export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onCreatePayments(filter: $filter) {
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
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onUpdatePayments(filter: $filter) {
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
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onDeletePayments(filter: $filter) {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onCreateProductCategory(filter: $filter) {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onUpdateProductCategory(filter: $filter) {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onDeleteProductCategory(filter: $filter) {
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
export const onCreateTerminal = /* GraphQL */ `
  subscription OnCreateTerminal($filter: ModelSubscriptionTerminalFilterInput) {
    onCreateTerminal(filter: $filter) {
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
export const onUpdateTerminal = /* GraphQL */ `
  subscription OnUpdateTerminal($filter: ModelSubscriptionTerminalFilterInput) {
    onUpdateTerminal(filter: $filter) {
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
export const onDeleteTerminal = /* GraphQL */ `
  subscription OnDeleteTerminal($filter: ModelSubscriptionTerminalFilterInput) {
    onDeleteTerminal(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAccountHolder = /* GraphQL */ `
  subscription OnCreateAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onCreateAccountHolder(filter: $filter) {
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
export const onUpdateAccountHolder = /* GraphQL */ `
  subscription OnUpdateAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onUpdateAccountHolder(filter: $filter) {
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
export const onDeleteAccountHolder = /* GraphQL */ `
  subscription OnDeleteAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onDeleteAccountHolder(filter: $filter) {
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
