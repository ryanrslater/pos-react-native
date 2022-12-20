/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSaveInput = {
  id?: string | null,
  items?: Array< string > | null,
  accountholderID: string,
};

export type ModelSaveConditionInput = {
  items?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelSaveConditionInput | null > | null,
  or?: Array< ModelSaveConditionInput | null > | null,
  not?: ModelSaveConditionInput | null,
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

export type Save = {
  __typename: "Save",
  id: string,
  items?: Array< string > | null,
  accountholderID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSaveInput = {
  id: string,
  items?: Array< string > | null,
  accountholderID?: string | null,
};

export type DeleteSaveInput = {
  id: string,
};

export type CreateOptionsInput = {
  id?: string | null,
  options?: Array< string | null > | null,
  productsID: string,
};

export type ModelOptionsConditionInput = {
  options?: ModelStringInput | null,
  productsID?: ModelIDInput | null,
  and?: Array< ModelOptionsConditionInput | null > | null,
  or?: Array< ModelOptionsConditionInput | null > | null,
  not?: ModelOptionsConditionInput | null,
};

export type Options = {
  __typename: "Options",
  id: string,
  options?: Array< string | null > | null,
  productsID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOptionsInput = {
  id: string,
  options?: Array< string | null > | null,
  productsID?: string | null,
};

export type DeleteOptionsInput = {
  id: string,
};

export type CreateOrdersInput = {
  id?: string | null,
  orderStatus: OrderStatus,
  accountholderID: string,
  items?: Array< string > | null,
  usersID: string,
  invoiceId?: string | null,
  orderNumber?: number | null,
};

export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
}


export type ModelOrdersConditionInput = {
  orderStatus?: ModelOrderStatusInput | null,
  accountholderID?: ModelIDInput | null,
  items?: ModelStringInput | null,
  usersID?: ModelIDInput | null,
  invoiceId?: ModelStringInput | null,
  orderNumber?: ModelIntInput | null,
  and?: Array< ModelOrdersConditionInput | null > | null,
  or?: Array< ModelOrdersConditionInput | null > | null,
  not?: ModelOrdersConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
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

export type Orders = {
  __typename: "Orders",
  id: string,
  orderStatus: OrderStatus,
  accountholderID: string,
  items?: Array< string > | null,
  usersID: string,
  invoiceId?: string | null,
  orderNumber?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrdersInput = {
  id: string,
  orderStatus?: OrderStatus | null,
  accountholderID?: string | null,
  items?: Array< string > | null,
  usersID?: string | null,
  invoiceId?: string | null,
  orderNumber?: number | null,
};

export type DeleteOrdersInput = {
  id: string,
};

export type CreateProductsInput = {
  id?: string | null,
  name?: string | null,
  price?: number | null,
  accountholderID: string,
};

export type ModelProductsConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
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

export type Products = {
  __typename: "Products",
  id: string,
  name?: string | null,
  price?: number | null,
  ProductCategories?: ModelProductsProductCategoriesConnection | null,
  accountholderID: string,
  Options?: ModelOptionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductsProductCategoriesConnection = {
  __typename: "ModelProductsProductCategoriesConnection",
  items:  Array<ProductsProductCategories | null >,
  nextToken?: string | null,
};

export type ProductsProductCategories = {
  __typename: "ProductsProductCategories",
  id: string,
  productsId: string,
  productCategoriesId: string,
  products: Products,
  productCategories: ProductCategories,
  createdAt: string,
  updatedAt: string,
};

export type ProductCategories = {
  __typename: "ProductCategories",
  id: string,
  name?: string | null,
  description?: string | null,
  accountholderID: string,
  productss?: ModelProductsProductCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOptionsConnection = {
  __typename: "ModelOptionsConnection",
  items:  Array<Options | null >,
  nextToken?: string | null,
};

export type UpdateProductsInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  accountholderID?: string | null,
};

export type DeleteProductsInput = {
  id: string,
};

export type CreateProductCategoriesInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  accountholderID: string,
};

export type ModelProductCategoriesConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesConditionInput | null > | null,
  or?: Array< ModelProductCategoriesConditionInput | null > | null,
  not?: ModelProductCategoriesConditionInput | null,
};

export type UpdateProductCategoriesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  accountholderID?: string | null,
};

export type DeleteProductCategoriesInput = {
  id: string,
};

export type CreateUsersInput = {
  id?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  pin: number,
  accountholderID: string,
};

export type ModelUsersConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  pin?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  pin: number,
  accountholderID: string,
  Orders?: ModelOrdersConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrdersConnection = {
  __typename: "ModelOrdersConnection",
  items:  Array<Orders | null >,
  nextToken?: string | null,
};

export type UpdateUsersInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  pin?: number | null,
  accountholderID?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateAccountHolderInput = {
  id?: string | null,
  accountHolderStatus?: AcccountHolderStatu | null,
  company?: string | null,
  paymentPricessor?: string | null,
  profilePicture?: string | null,
  sub?: string | null,
};

export enum AcccountHolderStatu {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
}


export type ModelAccountHolderConditionInput = {
  accountHolderStatus?: ModelAcccountHolderStatuInput | null,
  company?: ModelStringInput | null,
  paymentPricessor?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelAccountHolderConditionInput | null > | null,
  or?: Array< ModelAccountHolderConditionInput | null > | null,
  not?: ModelAccountHolderConditionInput | null,
};

export type ModelAcccountHolderStatuInput = {
  eq?: AcccountHolderStatu | null,
  ne?: AcccountHolderStatu | null,
};

export type AccountHolder = {
  __typename: "AccountHolder",
  id: string,
  accountHolderStatus?: AcccountHolderStatu | null,
  company?: string | null,
  paymentPricessor?: string | null,
  profilePicture?: string | null,
  Users?: ModelProductCategoriesConnection | null,
  ProductCategories?: ModelProductCategoriesConnection | null,
  Products?: ModelProductCategoriesConnection | null,
  Saves?: ModelSaveConnection | null,
  Saved?: ModelSaveConnection | null,
  sub?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductCategoriesConnection = {
  __typename: "ModelProductCategoriesConnection",
  items:  Array<ProductCategories | null >,
  nextToken?: string | null,
};

export type ModelSaveConnection = {
  __typename: "ModelSaveConnection",
  items:  Array<Save | null >,
  nextToken?: string | null,
};

export type UpdateAccountHolderInput = {
  id: string,
  accountHolderStatus?: AcccountHolderStatu | null,
  company?: string | null,
  paymentPricessor?: string | null,
  profilePicture?: string | null,
  sub?: string | null,
};

export type DeleteAccountHolderInput = {
  id: string,
};

export type CreateProductsProductCategoriesInput = {
  id?: string | null,
  productsId: string,
  productCategoriesId: string,
};

export type ModelProductsProductCategoriesConditionInput = {
  productsId?: ModelIDInput | null,
  productCategoriesId?: ModelIDInput | null,
  and?: Array< ModelProductsProductCategoriesConditionInput | null > | null,
  or?: Array< ModelProductsProductCategoriesConditionInput | null > | null,
  not?: ModelProductsProductCategoriesConditionInput | null,
};

export type UpdateProductsProductCategoriesInput = {
  id: string,
  productsId?: string | null,
  productCategoriesId?: string | null,
};

export type DeleteProductsProductCategoriesInput = {
  id: string,
};

export type ModelSaveFilterInput = {
  id?: ModelIDInput | null,
  items?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelSaveFilterInput | null > | null,
  or?: Array< ModelSaveFilterInput | null > | null,
  not?: ModelSaveFilterInput | null,
};

export type ModelOptionsFilterInput = {
  id?: ModelIDInput | null,
  options?: ModelStringInput | null,
  productsID?: ModelIDInput | null,
  and?: Array< ModelOptionsFilterInput | null > | null,
  or?: Array< ModelOptionsFilterInput | null > | null,
  not?: ModelOptionsFilterInput | null,
};

export type ModelOrdersFilterInput = {
  id?: ModelIDInput | null,
  orderStatus?: ModelOrderStatusInput | null,
  accountholderID?: ModelIDInput | null,
  items?: ModelStringInput | null,
  usersID?: ModelIDInput | null,
  invoiceId?: ModelStringInput | null,
  orderNumber?: ModelIntInput | null,
  and?: Array< ModelOrdersFilterInput | null > | null,
  or?: Array< ModelOrdersFilterInput | null > | null,
  not?: ModelOrdersFilterInput | null,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
};

export type ModelProductCategoriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesFilterInput | null > | null,
  or?: Array< ModelProductCategoriesFilterInput | null > | null,
  not?: ModelProductCategoriesFilterInput | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  pin?: ModelIntInput | null,
  accountholderID?: ModelIDInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelAccountHolderFilterInput = {
  id?: ModelIDInput | null,
  accountHolderStatus?: ModelAcccountHolderStatuInput | null,
  company?: ModelStringInput | null,
  paymentPricessor?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelAccountHolderFilterInput | null > | null,
  or?: Array< ModelAccountHolderFilterInput | null > | null,
  not?: ModelAccountHolderFilterInput | null,
};

export type ModelAccountHolderConnection = {
  __typename: "ModelAccountHolderConnection",
  items:  Array<AccountHolder | null >,
  nextToken?: string | null,
};

export type ModelProductsProductCategoriesFilterInput = {
  id?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  productCategoriesId?: ModelIDInput | null,
  and?: Array< ModelProductsProductCategoriesFilterInput | null > | null,
  or?: Array< ModelProductsProductCategoriesFilterInput | null > | null,
  not?: ModelProductsProductCategoriesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSaveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  items?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSaveFilterInput | null > | null,
  or?: Array< ModelSubscriptionSaveFilterInput | null > | null,
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

export type ModelSubscriptionOptionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  options?: ModelSubscriptionStringInput | null,
  productsID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOptionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionOptionsFilterInput | null > | null,
};

export type ModelSubscriptionOrdersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderStatus?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  items?: ModelSubscriptionStringInput | null,
  usersID?: ModelSubscriptionIDInput | null,
  invoiceId?: ModelSubscriptionStringInput | null,
  orderNumber?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
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

export type ModelSubscriptionProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsFilterInput | null > | null,
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

export type ModelSubscriptionProductCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  pin?: ModelSubscriptionIntInput | null,
  accountholderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionAccountHolderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountHolderStatus?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  paymentPricessor?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountHolderFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountHolderFilterInput | null > | null,
};

export type ModelSubscriptionProductsProductCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productsId?: ModelSubscriptionIDInput | null,
  productCategoriesId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsProductCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsProductCategoriesFilterInput | null > | null,
};

export type CreateSaveMutationVariables = {
  input: CreateSaveInput,
  condition?: ModelSaveConditionInput | null,
};

export type CreateSaveMutation = {
  createSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSaveMutationVariables = {
  input: UpdateSaveInput,
  condition?: ModelSaveConditionInput | null,
};

export type UpdateSaveMutation = {
  updateSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSaveMutationVariables = {
  input: DeleteSaveInput,
  condition?: ModelSaveConditionInput | null,
};

export type DeleteSaveMutation = {
  deleteSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOptionsMutationVariables = {
  input: CreateOptionsInput,
  condition?: ModelOptionsConditionInput | null,
};

export type CreateOptionsMutation = {
  createOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOptionsMutationVariables = {
  input: UpdateOptionsInput,
  condition?: ModelOptionsConditionInput | null,
};

export type UpdateOptionsMutation = {
  updateOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOptionsMutationVariables = {
  input: DeleteOptionsInput,
  condition?: ModelOptionsConditionInput | null,
};

export type DeleteOptionsMutation = {
  deleteOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrdersMutationVariables = {
  input: CreateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type CreateOrdersMutation = {
  createOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrdersMutationVariables = {
  input: UpdateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type UpdateOrdersMutation = {
  updateOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrdersMutationVariables = {
  input: DeleteOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type DeleteOrdersMutation = {
  deleteOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductCategoriesMutationVariables = {
  input: CreateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type CreateProductCategoriesMutation = {
  createProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductCategoriesMutationVariables = {
  input: UpdateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type UpdateProductCategoriesMutation = {
  updateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductCategoriesMutationVariables = {
  input: DeleteProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type DeleteProductCategoriesMutation = {
  deleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
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
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
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
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductsProductCategoriesMutationVariables = {
  input: CreateProductsProductCategoriesInput,
  condition?: ModelProductsProductCategoriesConditionInput | null,
};

export type CreateProductsProductCategoriesMutation = {
  createProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsProductCategoriesMutationVariables = {
  input: UpdateProductsProductCategoriesInput,
  condition?: ModelProductsProductCategoriesConditionInput | null,
};

export type UpdateProductsProductCategoriesMutation = {
  updateProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsProductCategoriesMutationVariables = {
  input: DeleteProductsProductCategoriesInput,
  condition?: ModelProductsProductCategoriesConditionInput | null,
};

export type DeleteProductsProductCategoriesMutation = {
  deleteProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSaveQueryVariables = {
  id: string,
};

export type GetSaveQuery = {
  getSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSavesQueryVariables = {
  filter?: ModelSaveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSavesQuery = {
  listSaves?:  {
    __typename: "ModelSaveConnection",
    items:  Array< {
      __typename: "Save",
      id: string,
      items?: Array< string > | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOptionsQueryVariables = {
  id: string,
};

export type GetOptionsQuery = {
  getOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOptionsQueryVariables = {
  filter?: ModelOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOptionsQuery = {
  listOptions?:  {
    __typename: "ModelOptionsConnection",
    items:  Array< {
      __typename: "Options",
      id: string,
      options?: Array< string | null > | null,
      productsID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersQueryVariables = {
  id: string,
};

export type GetOrdersQuery = {
  getOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      orderStatus: OrderStatus,
      accountholderID: string,
      items?: Array< string > | null,
      usersID: string,
      invoiceId?: string | null,
      orderNumber?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductCategoriesQueryVariables = {
  id: string,
};

export type GetProductCategoriesQuery = {
  getProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      pin: number,
      accountholderID: string,
      Orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountHolderQueryVariables = {
  id: string,
};

export type GetAccountHolderQuery = {
  getAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
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
      accountHolderStatus?: AcccountHolderStatu | null,
      company?: string | null,
      paymentPricessor?: string | null,
      profilePicture?: string | null,
      Users?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      ProductCategories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      Products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      Saves?:  {
        __typename: "ModelSaveConnection",
        nextToken?: string | null,
      } | null,
      Saved?:  {
        __typename: "ModelSaveConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsProductCategoriesQueryVariables = {
  id: string,
};

export type GetProductsProductCategoriesQuery = {
  getProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsProductCategoriesQueryVariables = {
  filter?: ModelProductsProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsProductCategoriesQuery = {
  listProductsProductCategories?:  {
    __typename: "ModelProductsProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductsProductCategories",
      id: string,
      productsId: string,
      productCategoriesId: string,
      products:  {
        __typename: "Products",
        id: string,
        name?: string | null,
        price?: number | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      productCategories:  {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SavesByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSaveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SavesByAccountholderIDQuery = {
  savesByAccountholderID?:  {
    __typename: "ModelSaveConnection",
    items:  Array< {
      __typename: "Save",
      id: string,
      items?: Array< string > | null,
      accountholderID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OptionsByProductsIDQueryVariables = {
  productsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOptionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OptionsByProductsIDQuery = {
  optionsByProductsID?:  {
    __typename: "ModelOptionsConnection",
    items:  Array< {
      __typename: "Options",
      id: string,
      options?: Array< string | null > | null,
      productsID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByAccountholderIDQuery = {
  ordersByAccountholderID?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      orderStatus: OrderStatus,
      accountholderID: string,
      items?: Array< string > | null,
      usersID: string,
      invoiceId?: string | null,
      orderNumber?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUsersIDQueryVariables = {
  usersID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUsersIDQuery = {
  ordersByUsersID?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      orderStatus: OrderStatus,
      accountholderID: string,
      items?: Array< string > | null,
      usersID: string,
      invoiceId?: string | null,
      orderNumber?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByAccountholderIDQuery = {
  productsByAccountholderID?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductCategoriesByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByAccountholderIDQuery = {
  productCategoriesByAccountholderID?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByAccountholderIDQueryVariables = {
  accountholderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByAccountholderIDQuery = {
  usersByAccountholderID?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      pin: number,
      accountholderID: string,
      Orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsProductCategoriesByProductsIdQueryVariables = {
  productsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsProductCategoriesByProductsIdQuery = {
  productsProductCategoriesByProductsId?:  {
    __typename: "ModelProductsProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductsProductCategories",
      id: string,
      productsId: string,
      productCategoriesId: string,
      products:  {
        __typename: "Products",
        id: string,
        name?: string | null,
        price?: number | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      productCategories:  {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsProductCategoriesByProductCategoriesIdQueryVariables = {
  productCategoriesId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsProductCategoriesByProductCategoriesIdQuery = {
  productsProductCategoriesByProductCategoriesId?:  {
    __typename: "ModelProductsProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductsProductCategories",
      id: string,
      productsId: string,
      productCategoriesId: string,
      products:  {
        __typename: "Products",
        id: string,
        name?: string | null,
        price?: number | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      productCategories:  {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSaveSubscriptionVariables = {
  filter?: ModelSubscriptionSaveFilterInput | null,
};

export type OnCreateSaveSubscription = {
  onCreateSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSaveSubscriptionVariables = {
  filter?: ModelSubscriptionSaveFilterInput | null,
};

export type OnUpdateSaveSubscription = {
  onUpdateSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSaveSubscriptionVariables = {
  filter?: ModelSubscriptionSaveFilterInput | null,
};

export type OnDeleteSaveSubscription = {
  onDeleteSave?:  {
    __typename: "Save",
    id: string,
    items?: Array< string > | null,
    accountholderID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionOptionsFilterInput | null,
};

export type OnCreateOptionsSubscription = {
  onCreateOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionOptionsFilterInput | null,
};

export type OnUpdateOptionsSubscription = {
  onUpdateOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOptionsSubscriptionVariables = {
  filter?: ModelSubscriptionOptionsFilterInput | null,
};

export type OnDeleteOptionsSubscription = {
  onDeleteOptions?:  {
    __typename: "Options",
    id: string,
    options?: Array< string | null > | null,
    productsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnCreateOrdersSubscription = {
  onCreateOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnUpdateOrdersSubscription = {
  onUpdateOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnDeleteOrdersSubscription = {
  onDeleteOrders?:  {
    __typename: "Orders",
    id: string,
    orderStatus: OrderStatus,
    accountholderID: string,
    items?: Array< string > | null,
    usersID: string,
    invoiceId?: string | null,
    orderNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    name?: string | null,
    price?: number | null,
    ProductCategories?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accountholderID: string,
    Options?:  {
      __typename: "ModelOptionsConnection",
      items:  Array< {
        __typename: "Options",
        id: string,
        options?: Array< string | null > | null,
        productsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnCreateProductCategoriesSubscription = {
  onCreateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnUpdateProductCategoriesSubscription = {
  onUpdateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnDeleteProductCategoriesSubscription = {
  onDeleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    name?: string | null,
    description?: string | null,
    accountholderID: string,
    productss?:  {
      __typename: "ModelProductsProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductsProductCategories",
        id: string,
        productsId: string,
        productCategoriesId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    pin: number,
    accountholderID: string,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        orderStatus: OrderStatus,
        accountholderID: string,
        items?: Array< string > | null,
        usersID: string,
        invoiceId?: string | null,
        orderNumber?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnCreateAccountHolderSubscription = {
  onCreateAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnUpdateAccountHolderSubscription = {
  onUpdateAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountHolderSubscriptionVariables = {
  filter?: ModelSubscriptionAccountHolderFilterInput | null,
};

export type OnDeleteAccountHolderSubscription = {
  onDeleteAccountHolder?:  {
    __typename: "AccountHolder",
    id: string,
    accountHolderStatus?: AcccountHolderStatu | null,
    company?: string | null,
    paymentPricessor?: string | null,
    profilePicture?: string | null,
    Users?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductCategories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        name?: string | null,
        description?: string | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saves?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Saved?:  {
      __typename: "ModelSaveConnection",
      items:  Array< {
        __typename: "Save",
        id: string,
        items?: Array< string > | null,
        accountholderID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductsProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductsProductCategoriesFilterInput | null,
};

export type OnCreateProductsProductCategoriesSubscription = {
  onCreateProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductsProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductsProductCategoriesFilterInput | null,
};

export type OnUpdateProductsProductCategoriesSubscription = {
  onUpdateProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductsProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductsProductCategoriesFilterInput | null,
};

export type OnDeleteProductsProductCategoriesSubscription = {
  onDeleteProductsProductCategories?:  {
    __typename: "ProductsProductCategories",
    id: string,
    productsId: string,
    productCategoriesId: string,
    products:  {
      __typename: "Products",
      id: string,
      name?: string | null,
      price?: number | null,
      ProductCategories?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      accountholderID: string,
      Options?:  {
        __typename: "ModelOptionsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productCategories:  {
      __typename: "ProductCategories",
      id: string,
      name?: string | null,
      description?: string | null,
      accountholderID: string,
      productss?:  {
        __typename: "ModelProductsProductCategoriesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
