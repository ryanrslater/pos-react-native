/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSave = /* GraphQL */ `
  mutation CreateSave(
    $input: CreateSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    createSave(input: $input, condition: $condition) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const updateSave = /* GraphQL */ `
  mutation UpdateSave(
    $input: UpdateSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    updateSave(input: $input, condition: $condition) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const deleteSave = /* GraphQL */ `
  mutation DeleteSave(
    $input: DeleteSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    deleteSave(input: $input, condition: $condition) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const createOptions = /* GraphQL */ `
  mutation CreateOptions(
    $input: CreateOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    createOptions(input: $input, condition: $condition) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const updateOptions = /* GraphQL */ `
  mutation UpdateOptions(
    $input: UpdateOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    updateOptions(input: $input, condition: $condition) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteOptions = /* GraphQL */ `
  mutation DeleteOptions(
    $input: DeleteOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    deleteOptions(input: $input, condition: $condition) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
      id
      orderStatus
      accountholderID
      items
      usersID
      invoiceId
      orderNumber
      createdAt
      updatedAt
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
      id
      orderStatus
      accountholderID
      items
      usersID
      invoiceId
      orderNumber
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
      id
      orderStatus
      accountholderID
      items
      usersID
      invoiceId
      orderNumber
      createdAt
      updatedAt
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      price
      ProductCategories {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      accountholderID
      Options {
        items {
          id
          options
          productsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      price
      ProductCategories {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      accountholderID
      Options {
        items {
          id
          options
          productsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      price
      ProductCategories {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      accountholderID
      Options {
        items {
          id
          options
          productsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProductCategories = /* GraphQL */ `
  mutation CreateProductCategories(
    $input: CreateProductCategoriesInput!
    $condition: ModelProductCategoriesConditionInput
  ) {
    createProductCategories(input: $input, condition: $condition) {
      id
      name
      description
      accountholderID
      productss {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProductCategories = /* GraphQL */ `
  mutation UpdateProductCategories(
    $input: UpdateProductCategoriesInput!
    $condition: ModelProductCategoriesConditionInput
  ) {
    updateProductCategories(input: $input, condition: $condition) {
      id
      name
      description
      accountholderID
      productss {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProductCategories = /* GraphQL */ `
  mutation DeleteProductCategories(
    $input: DeleteProductCategoriesInput!
    $condition: ModelProductCategoriesConditionInput
  ) {
    deleteProductCategories(input: $input, condition: $condition) {
      id
      name
      description
      accountholderID
      productss {
        items {
          id
          productsId
          productCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      firstname
      lastname
      pin
      accountholderID
      Orders {
        items {
          id
          orderStatus
          accountholderID
          items
          usersID
          invoiceId
          orderNumber
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      firstname
      lastname
      pin
      accountholderID
      Orders {
        items {
          id
          orderStatus
          accountholderID
          items
          usersID
          invoiceId
          orderNumber
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      firstname
      lastname
      pin
      accountholderID
      Orders {
        items {
          id
          orderStatus
          accountholderID
          items
          usersID
          invoiceId
          orderNumber
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      accountHolderStatus
      company
      paymentPricessor
      profilePicture
      Users {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      ProductCategories {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Products {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saves {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saved {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
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
      accountHolderStatus
      company
      paymentPricessor
      profilePicture
      Users {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      ProductCategories {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Products {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saves {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saved {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
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
      accountHolderStatus
      company
      paymentPricessor
      profilePicture
      Users {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      ProductCategories {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Products {
        items {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saves {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      Saved {
        items {
          id
          items
          accountholderID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
    }
  }
`;
export const createProductsProductCategories = /* GraphQL */ `
  mutation CreateProductsProductCategories(
    $input: CreateProductsProductCategoriesInput!
    $condition: ModelProductsProductCategoriesConditionInput
  ) {
    createProductsProductCategories(input: $input, condition: $condition) {
      id
      productsId
      productCategoriesId
      products {
        id
        name
        price
        ProductCategories {
          nextToken
        }
        accountholderID
        Options {
          nextToken
        }
        createdAt
        updatedAt
      }
      productCategories {
        id
        name
        description
        accountholderID
        productss {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProductsProductCategories = /* GraphQL */ `
  mutation UpdateProductsProductCategories(
    $input: UpdateProductsProductCategoriesInput!
    $condition: ModelProductsProductCategoriesConditionInput
  ) {
    updateProductsProductCategories(input: $input, condition: $condition) {
      id
      productsId
      productCategoriesId
      products {
        id
        name
        price
        ProductCategories {
          nextToken
        }
        accountholderID
        Options {
          nextToken
        }
        createdAt
        updatedAt
      }
      productCategories {
        id
        name
        description
        accountholderID
        productss {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProductsProductCategories = /* GraphQL */ `
  mutation DeleteProductsProductCategories(
    $input: DeleteProductsProductCategoriesInput!
    $condition: ModelProductsProductCategoriesConditionInput
  ) {
    deleteProductsProductCategories(input: $input, condition: $condition) {
      id
      productsId
      productCategoriesId
      products {
        id
        name
        price
        ProductCategories {
          nextToken
        }
        accountholderID
        Options {
          nextToken
        }
        createdAt
        updatedAt
      }
      productCategories {
        id
        name
        description
        accountholderID
        productss {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
