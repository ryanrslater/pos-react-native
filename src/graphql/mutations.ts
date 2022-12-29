/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
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
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
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
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
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
export const createPayments = /* GraphQL */ `
  mutation CreatePayments(
    $input: CreatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    createPayments(input: $input, condition: $condition) {
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
export const updatePayments = /* GraphQL */ `
  mutation UpdatePayments(
    $input: UpdatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    updatePayments(input: $input, condition: $condition) {
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
export const deletePayments = /* GraphQL */ `
  mutation DeletePayments(
    $input: DeletePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    deletePayments(input: $input, condition: $condition) {
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
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
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
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
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
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
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
export const createTerminal = /* GraphQL */ `
  mutation CreateTerminal(
    $input: CreateTerminalInput!
    $condition: ModelTerminalConditionInput
  ) {
    createTerminal(input: $input, condition: $condition) {
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
export const updateTerminal = /* GraphQL */ `
  mutation UpdateTerminal(
    $input: UpdateTerminalInput!
    $condition: ModelTerminalConditionInput
  ) {
    updateTerminal(input: $input, condition: $condition) {
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
export const deleteTerminal = /* GraphQL */ `
  mutation DeleteTerminal(
    $input: DeleteTerminalInput!
    $condition: ModelTerminalConditionInput
  ) {
    deleteTerminal(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAccountHolder = /* GraphQL */ `
  mutation CreateAccountHolder(
    $input: CreateAccountHolderInput!
    $condition: ModelAccountHolderConditionInput
  ) {
    createAccountHolder(input: $input, condition: $condition) {
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
export const updateAccountHolder = /* GraphQL */ `
  mutation UpdateAccountHolder(
    $input: UpdateAccountHolderInput!
    $condition: ModelAccountHolderConditionInput
  ) {
    updateAccountHolder(input: $input, condition: $condition) {
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
export const deleteAccountHolder = /* GraphQL */ `
  mutation DeleteAccountHolder(
    $input: DeleteAccountHolderInput!
    $condition: ModelAccountHolderConditionInput
  ) {
    deleteAccountHolder(input: $input, condition: $condition) {
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
