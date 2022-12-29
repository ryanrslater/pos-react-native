/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCouponInput = {
  id?: string | null,
  name?: string | null,
  amount?: number | null,
  couponType?: CouponType | null,
  code?: string | null,
  expires?: string | null,
  accountholderID: string,
  expired?: boolean | null,
  _version?: number | null,
};

export enum CouponType {
  PERCENT = "PERCENT",
  FIXED = "FIXED",
}


export type ModelCouponConditionInput = {
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  couponType?: ModelCouponTypeInput | null,
  code?: ModelStringInput | null,
  expires?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  expired?: ModelBooleanInput | null,
  and?: Array< ModelCouponConditionInput | null > | null,
  or?: Array< ModelCouponConditionInput | null > | null,
  not?: ModelCouponConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCouponTypeInput = {
  eq?: CouponType | null,
  ne?: CouponType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Coupon = {
  __typename: "Coupon",
  id: string,
  name?: string | null,
  amount?: number | null,
  couponType?: CouponType | null,
  code?: string | null,
  expires?: string | null,
  accountholderID: string,
  expired?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCouponInput = {
  id: string,
  name?: string | null,
  amount?: number | null,
  couponType?: CouponType | null,
  code?: string | null,
  expires?: string | null,
  accountholderID?: string | null,
  expired?: boolean | null,
  _version?: number | null,
};

export type DeleteCouponInput = {
  id: string,
  _version?: number | null,
};

export type CreatePaymentsInput = {
  id?: string | null,
  terminalUID?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  agentId?: string | null,
  orderId?: string | null,
  paymentStatus?: PaymentStatus | null,
  amount?: number | null,
  paymentType?: PaymentType | null,
  processorType?: ProcessorType | null,
  _version?: number | null,
};

export enum PaymentStatus {
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}


export enum PaymentType {
  CASH = "CASH",
  CARD = "CARD",
}


export enum ProcessorType {
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
}


export type ModelPaymentsConditionInput = {
  terminalUID?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  agentId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  paymentStatus?: ModelPaymentStatusInput | null,
  amount?: ModelFloatInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  processorType?: ModelProcessorTypeInput | null,
  and?: Array< ModelPaymentsConditionInput | null > | null,
  or?: Array< ModelPaymentsConditionInput | null > | null,
  not?: ModelPaymentsConditionInput | null,
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null,
  ne?: PaymentStatus | null,
};

export type ModelPaymentTypeInput = {
  eq?: PaymentType | null,
  ne?: PaymentType | null,
};

export type ModelProcessorTypeInput = {
  eq?: ProcessorType | null,
  ne?: ProcessorType | null,
};

export type Payments = {
  __typename: "Payments",
  id: string,
  terminalUID?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  agentId?: string | null,
  orderId?: string | null,
  paymentStatus?: PaymentStatus | null,
  amount?: number | null,
  paymentType?: PaymentType | null,
  processorType?: ProcessorType | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePaymentsInput = {
  id: string,
  terminalUID?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  agentId?: string | null,
  orderId?: string | null,
  paymentStatus?: PaymentStatus | null,
  amount?: number | null,
  paymentType?: PaymentType | null,
  processorType?: ProcessorType | null,
  _version?: number | null,
};

export type DeletePaymentsInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductCategoryInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  accountholderID: string,
  _version?: number | null,
};

export type ModelProductCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductCategoryConditionInput | null > | null,
  or?: Array< ModelProductCategoryConditionInput | null > | null,
  not?: ModelProductCategoryConditionInput | null,
};

export type ProductCategory = {
  __typename: "ProductCategory",
  id: string,
  name?: string | null,
  description?: string | null,
  accountholderID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  accountholderID?: string | null,
  _version?: number | null,
};

export type DeleteProductCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateTerminalInput = {
  id?: string | null,
  UID?: string | null,
  tablet?: number | null,
  accountholderID: string,
  _version?: number | null,
};

export type ModelTerminalConditionInput = {
  UID?: ModelStringInput | null,
  tablet?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelTerminalConditionInput | null > | null,
  or?: Array< ModelTerminalConditionInput | null > | null,
  not?: ModelTerminalConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Terminal = {
  __typename: "Terminal",
  id: string,
  UID?: string | null,
  tablet?: number | null,
  accountholderID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTerminalInput = {
  id: string,
  UID?: string | null,
  tablet?: number | null,
  accountholderID?: string | null,
  _version?: number | null,
};

export type DeleteTerminalInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  item: ItemInput,
  Categories?: Array< number | null > | null,
  accountholderID: string,
  special?: string | null,
  _version?: number | null,
};

export type ItemInput = {
  ItemNames: string,
  Alterations?: Array< AlterationsInput | null > | null,
  price?: number | null,
  specialPrice?: number | null,
  unalteredPrice?: number | null,
};

export type AlterationsInput = {
  name?: string | null,
  choices?: Array< string | null > | null,
  number?: string | null,
  description?: string | null,
};

export type ModelProductConditionInput = {
  Categories?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  special?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  item: Item,
  Categories?: Array< number | null > | null,
  accountholderID: string,
  special?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Item = {
  __typename: "Item",
  ItemNames: string,
  Alterations?:  Array<Alterations | null > | null,
  price?: number | null,
  specialPrice?: number | null,
  unalteredPrice?: number | null,
};

export type Alterations = {
  __typename: "Alterations",
  name?: string | null,
  choices?: Array< string | null > | null,
  number?: string | null,
  description?: string | null,
};

export type UpdateProductInput = {
  id: string,
  item?: ItemInput | null,
  Categories?: Array< number | null > | null,
  accountholderID?: string | null,
  special?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  Items: Array< ItemInput | null >,
  firstname?: string | null,
  lastname?: string | null,
  accountholderID: string,
  total: number,
  remaining: number,
  orderStatus?: OrderStatus | null,
  notes?: string | null,
  processorPaymentIds?: Array< string | null > | null,
  processorRefundIds?: Array< string | null > | null,
  paymentIds?: Array< string | null > | null,
  _version?: number | null,
};

export enum OrderStatus {
  INPROGRESS = "INPROGRESS",
  CANCELLED = "CANCELLED",
  SAVED = "SAVED",
  PENDING = "PENDING",
  PAUSED = "PAUSED",
  COMPLETE = "COMPLETE",
}


export type ModelOrderConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  remaining?: ModelFloatInput | null,
  orderStatus?: ModelOrderStatusInput | null,
  notes?: ModelStringInput | null,
  processorPaymentIds?: ModelIDInput | null,
  processorRefundIds?: ModelIDInput | null,
  paymentIds?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  Items:  Array<Item | null >,
  firstname?: string | null,
  lastname?: string | null,
  accountholderID: string,
  total: number,
  remaining: number,
  orderStatus?: OrderStatus | null,
  notes?: string | null,
  processorPaymentIds?: Array< string | null > | null,
  processorRefundIds?: Array< string | null > | null,
  paymentIds?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateOrderInput = {
  id: string,
  Items?: Array< ItemInput | null > | null,
  firstname?: string | null,
  lastname?: string | null,
  accountholderID?: string | null,
  total?: number | null,
  remaining?: number | null,
  orderStatus?: OrderStatus | null,
  notes?: string | null,
  processorPaymentIds?: Array< string | null > | null,
  processorRefundIds?: Array< string | null > | null,
  paymentIds?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  pin?: number | null,
  accountholderID: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  pin?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  pin?: number | null,
  accountholderID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  pin?: number | null,
  accountholderID?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountHolderInput = {
  id?: string | null,
  sub: string,
  accountStatus: AccountStatus,
  stripeId?: string | null,
  name: string,
  email?: string | null,
  _version?: number | null,
};

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  ACCOUNTCREATION = "ACCOUNTCREATION",
  BANNED = "BANNED",
}


export type ModelAccountHolderConditionInput = {
  sub?: ModelStringInput | null,
  accountStatus?: ModelAccountStatusInput | null,
  stripeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountHolderConditionInput | null > | null,
  or?: Array< ModelAccountHolderConditionInput | null > | null,
  not?: ModelAccountHolderConditionInput | null,
};

export type ModelAccountStatusInput = {
  eq?: AccountStatus | null,
  ne?: AccountStatus | null,
};

export type AccountHolder = {
  __typename: "AccountHolder",
  id: string,
  sub: string,
  accountStatus: AccountStatus,
  Users?: ModelUserConnection | null,
  Orders?: ModelUserConnection | null,
  Terminals?: ModelUserConnection | null,
  Products?: ModelUserConnection | null,
  ProductCategories?: ModelUserConnection | null,
  stripeId?: string | null,
  Coupons?: ModelUserConnection | null,
  name: string,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateAccountHolderInput = {
  id: string,
  sub?: string | null,
  accountStatus?: AccountStatus | null,
  stripeId?: string | null,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteAccountHolderInput = {
  id: string,
  _version?: number | null,
};

export type ModelCouponFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  couponType?: ModelCouponTypeInput | null,
  code?: ModelStringInput | null,
  expires?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  expired?: ModelBooleanInput | null,
  and?: Array< ModelCouponFilterInput | null > | null,
  or?: Array< ModelCouponFilterInput | null > | null,
  not?: ModelCouponFilterInput | null,
};

export type ModelCouponConnection = {
  __typename: "ModelCouponConnection",
  items:  Array<Coupon | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPaymentsFilterInput = {
  id?: ModelIDInput | null,
  terminalUID?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  agentId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  paymentStatus?: ModelPaymentStatusInput | null,
  amount?: ModelFloatInput | null,
  paymentType?: ModelPaymentTypeInput | null,
  processorType?: ModelProcessorTypeInput | null,
  and?: Array< ModelPaymentsFilterInput | null > | null,
  or?: Array< ModelPaymentsFilterInput | null > | null,
  not?: ModelPaymentsFilterInput | null,
};

export type ModelPaymentsConnection = {
  __typename: "ModelPaymentsConnection",
  items:  Array<Payments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductCategoryFilterInput | null > | null,
  or?: Array< ModelProductCategoryFilterInput | null > | null,
  not?: ModelProductCategoryFilterInput | null,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTerminalFilterInput = {
  id?: ModelIDInput | null,
  UID?: ModelStringInput | null,
  tablet?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelTerminalFilterInput | null > | null,
  or?: Array< ModelTerminalFilterInput | null > | null,
  not?: ModelTerminalFilterInput | null,
};

export type ModelTerminalConnection = {
  __typename: "ModelTerminalConnection",
  items:  Array<Terminal | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  Categories?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  special?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  remaining?: ModelFloatInput | null,
  orderStatus?: ModelOrderStatusInput | null,
  notes?: ModelStringInput | null,
  processorPaymentIds?: ModelIDInput | null,
  processorRefundIds?: ModelIDInput | null,
  paymentIds?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  pin?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelAccountHolderFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelStringInput | null,
  accountStatus?: ModelAccountStatusInput | null,
  stripeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountHolderFilterInput | null > | null,
  or?: Array< ModelAccountHolderFilterInput | null > | null,
  not?: ModelAccountHolderFilterInput | null,
};

export type ModelAccountHolderConnection = {
  __typename: "ModelAccountHolderConnection",
  items:  Array<AccountHolder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCouponFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  couponType?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  expires?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  expired?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCouponFilterInput | null > | null,
  or?: Array< ModelSubscriptionCouponFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPaymentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  terminalUID?: ModelSubscriptionStringInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  agentId?: ModelSubscriptionIDInput | null,
  orderId?: ModelSubscriptionIDInput | null,
  paymentStatus?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  paymentType?: ModelSubscriptionStringInput | null,
  processorType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPaymentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentsFilterInput | null > | null,
};

export type ModelSubscriptionProductCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
};

export type ModelSubscriptionTerminalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  UID?: ModelSubscriptionStringInput | null,
  tablet?: ModelSubscriptionIntInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTerminalFilterInput | null > | null,
  or?: Array< ModelSubscriptionTerminalFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Categories?: ModelSubscriptionIntInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  special?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  total?: ModelSubscriptionFloatInput | null,
  remaining?: ModelSubscriptionFloatInput | null,
  orderStatus?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  processorPaymentIds?: ModelSubscriptionIDInput | null,
  processorRefundIds?: ModelSubscriptionIDInput | null,
  paymentIds?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  pin?: ModelSubscriptionIntInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionAccountHolderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionStringInput | null,
  accountStatus?: ModelSubscriptionStringInput | null,
  stripeId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountHolderFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountHolderFilterInput | null > | null,
};

export type CreateCouponMutationVariables = {
  input: CreateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type CreateCouponMutation = {
  createCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCouponMutationVariables = {
  input: UpdateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type UpdateCouponMutation = {
  updateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCouponMutationVariables = {
  input: DeleteCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type DeleteCouponMutation = {
  deleteCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePaymentsMutationVariables = {
  input: CreatePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type CreatePaymentsMutation = {
  createPayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePaymentsMutationVariables = {
  input: UpdatePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type UpdatePaymentsMutation = {
  updatePayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePaymentsMutationVariables = {
  input: DeletePaymentsInput,
  condition?: ModelPaymentsConditionInput | null,
};

export type DeletePaymentsMutation = {
  deletePayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductCategoryMutationVariables = {
  input: CreateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type CreateProductCategoryMutation = {
  createProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductCategoryMutationVariables = {
  input: UpdateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductCategoryMutationVariables = {
  input: DeleteProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTerminalMutationVariables = {
  input: CreateTerminalInput,
  condition?: ModelTerminalConditionInput | null,
};

export type CreateTerminalMutation = {
  createTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTerminalMutationVariables = {
  input: UpdateTerminalInput,
  condition?: ModelTerminalConditionInput | null,
};

export type UpdateTerminalMutation = {
  updateTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTerminalMutationVariables = {
  input: DeleteTerminalInput,
  condition?: ModelTerminalConditionInput | null,
};

export type DeleteTerminalMutation = {
  deleteTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAccountHolderMutationVariables = {
  input: CreateAccountHolderInput,
  condition?: ModelAccountHolderConditionInput | null,
};

export type CreateAccountHolderMutation = {
  createAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountHolderMutationVariables = {
  input: UpdateAccountHolderInput,
  condition?: ModelAccountHolderConditionInput | null,
};

export type UpdateAccountHolderMutation = {
  updateAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountHolderMutationVariables = {
  input: DeleteAccountHolderInput,
  condition?: ModelAccountHolderConditionInput | null,
};

export type DeleteAccountHolderMutation = {
  deleteAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCouponQueryVariables = {
  id: string,
};

export type GetCouponQuery = {
  getCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCouponsQueryVariables = {
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouponsQuery = {
  listCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name?: string | null,
      amount?: number | null,
      couponType?: CouponType | null,
      code?: string | null,
      expires?: string | null,
      accountholderID: string,
      expired?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCouponsQueryVariables = {
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCouponsQuery = {
  syncCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name?: string | null,
      amount?: number | null,
      couponType?: CouponType | null,
      code?: string | null,
      expires?: string | null,
      accountholderID: string,
      expired?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CouponsByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CouponsByAccountholderIDQuery = {
  couponsByAccountholderID?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name?: string | null,
      amount?: number | null,
      couponType?: CouponType | null,
      code?: string | null,
      expires?: string | null,
      accountholderID: string,
      expired?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPaymentsQueryVariables = {
  id: string,
};

export type GetPaymentsQuery = {
  getPayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentsConnection",
    items:  Array< {
      __typename: "Payments",
      id: string,
      terminalUID?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      agentId?: string | null,
      orderId?: string | null,
      paymentStatus?: PaymentStatus | null,
      amount?: number | null,
      paymentType?: PaymentType | null,
      processorType?: ProcessorType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentsQueryVariables = {
  filter?: ModelPaymentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentsQuery = {
  syncPayments?:  {
    __typename: "ModelPaymentsConnection",
    items:  Array< {
      __typename: "Payments",
      id: string,
      terminalUID?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      agentId?: string | null,
      orderId?: string | null,
      paymentStatus?: PaymentStatus | null,
      amount?: number | null,
      paymentType?: PaymentType | null,
      processorType?: ProcessorType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductCategoryQueryVariables = {
  id: string,
};

export type GetProductCategoryQuery = {
  getProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductCategoriesQuery = {
  syncProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductCategoriesByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByAccountholderIDQuery = {
  productCategoriesByAccountholderID?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTerminalQueryVariables = {
  id: string,
};

export type GetTerminalQuery = {
  getTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTerminalsQueryVariables = {
  filter?: ModelTerminalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTerminalsQuery = {
  listTerminals?:  {
    __typename: "ModelTerminalConnection",
    items:  Array< {
      __typename: "Terminal",
      id: string,
      UID?: string | null,
      tablet?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTerminalsQueryVariables = {
  filter?: ModelTerminalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTerminalsQuery = {
  syncTerminals?:  {
    __typename: "ModelTerminalConnection",
    items:  Array< {
      __typename: "Terminal",
      id: string,
      UID?: string | null,
      tablet?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TerminalsByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTerminalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TerminalsByAccountholderIDQuery = {
  terminalsByAccountholderID?:  {
    __typename: "ModelTerminalConnection",
    items:  Array< {
      __typename: "Terminal",
      id: string,
      UID?: string | null,
      tablet?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      Categories?: Array< number | null > | null,
      accountholderID: string,
      special?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      Categories?: Array< number | null > | null,
      accountholderID: string,
      special?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByAccountholderIDQuery = {
  productsByAccountholderID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      Categories?: Array< number | null > | null,
      accountholderID: string,
      special?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      accountholderID: string,
      total: number,
      remaining: number,
      orderStatus?: OrderStatus | null,
      notes?: string | null,
      processorPaymentIds?: Array< string | null > | null,
      processorRefundIds?: Array< string | null > | null,
      paymentIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      accountholderID: string,
      total: number,
      remaining: number,
      orderStatus?: OrderStatus | null,
      notes?: string | null,
      processorPaymentIds?: Array< string | null > | null,
      processorRefundIds?: Array< string | null > | null,
      paymentIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OrdersByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByAccountholderIDQuery = {
  ordersByAccountholderID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      accountholderID: string,
      total: number,
      remaining: number,
      orderStatus?: OrderStatus | null,
      notes?: string | null,
      processorPaymentIds?: Array< string | null > | null,
      processorRefundIds?: Array< string | null > | null,
      paymentIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      pin?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      pin?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UsersByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByAccountholderIDQuery = {
  usersByAccountholderID?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      pin?: number | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAccountHolderQueryVariables = {
  id: string,
};

export type GetAccountHolderQuery = {
  getAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountHoldersQueryVariables = {
  filter?: ModelAccountHolderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountHoldersQuery = {
  listAccountHolders?:  {
    __typename: "ModelAccountHolderConnection",
    items:  Array< {
      __typename: "AccountHolder",
      id: string,
      sub: string,
      accountStatus: AccountStatus,
      stripeId?: string | null,
      name: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountHoldersQueryVariables = {
  filter?: ModelAccountHolderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountHoldersQuery = {
  syncAccountHolders?:  {
    __typename: "ModelAccountHolderConnection",
    items:  Array< {
      __typename: "AccountHolder",
      id: string,
      sub: string,
      accountStatus: AccountStatus,
      stripeId?: string | null,
      name: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnCreateCouponSubscription = {
  onCreateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnUpdateCouponSubscription = {
  onUpdateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnDeleteCouponSubscription = {
  onDeleteCoupon?:  {
    __typename: "Coupon",
    id: string,
    name?: string | null,
    amount?: number | null,
    couponType?: CouponType | null,
    code?: string | null,
    expires?: string | null,
    accountholderID: string,
    expired?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
};

export type OnCreatePaymentsSubscription = {
  onCreatePayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
};

export type OnUpdatePaymentsSubscription = {
  onUpdatePayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePaymentsSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentsFilterInput | null,
};

export type OnDeletePaymentsSubscription = {
  onDeletePayments?:  {
    __typename: "Payments",
    id: string,
    terminalUID?: string | null,
    firstname?: string | null,
    lastname?: string | null,
    agentId?: string | null,
    orderId?: string | null,
    paymentStatus?: PaymentStatus | null,
    amount?: number | null,
    paymentType?: PaymentType | null,
    processorType?: ProcessorType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnCreateProductCategorySubscription = {
  onCreateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnUpdateProductCategorySubscription = {
  onUpdateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnDeleteProductCategorySubscription = {
  onDeleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTerminalSubscriptionVariables = {
  filter?: ModelSubscriptionTerminalFilterInput | null,
};

export type OnCreateTerminalSubscription = {
  onCreateTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTerminalSubscriptionVariables = {
  filter?: ModelSubscriptionTerminalFilterInput | null,
};

export type OnUpdateTerminalSubscription = {
  onUpdateTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTerminalSubscriptionVariables = {
  filter?: ModelSubscriptionTerminalFilterInput | null,
};

export type OnDeleteTerminalSubscription = {
  onDeleteTerminal?:  {
    __typename: "Terminal",
    id: string,
    UID?: string | null,
    tablet?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    item:  {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    },
    Categories?: Array< number | null > | null,
    accountholderID: string,
    special?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    Items:  Array< {
      __typename: "Item",
      ItemNames: string,
      price?: number | null,
      specialPrice?: number | null,
      unalteredPrice?: number | null,
    } | null >,
    firstname?: string | null,
    lastname?: string | null,
    accountholderID: string,
    total: number,
    remaining: number,
    orderStatus?: OrderStatus | null,
    notes?: string | null,
    processorPaymentIds?: Array< string | null > | null,
    processorRefundIds?: Array< string | null > | null,
    paymentIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin?: number | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnCreateAccountHolderSubscription = {
  onCreateAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnUpdateAccountHolderSubscription = {
  onUpdateAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnDeleteAccountHolderSubscription = {
  onDeleteAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    sub: string,
    accountStatus: AccountStatus,
    Users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Terminals?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Products?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    stripeId?: string | null,
    Coupons?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
