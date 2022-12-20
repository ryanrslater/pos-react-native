/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSave = /* GraphQL */ `
  subscription OnCreateSave($filter: ModelSubscriptionSaveFilterInput) {
    onCreateSave(filter: $filter) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSave = /* GraphQL */ `
  subscription OnUpdateSave($filter: ModelSubscriptionSaveFilterInput) {
    onUpdateSave(filter: $filter) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSave = /* GraphQL */ `
  subscription OnDeleteSave($filter: ModelSubscriptionSaveFilterInput) {
    onDeleteSave(filter: $filter) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOptions = /* GraphQL */ `
  subscription OnCreateOptions($filter: ModelSubscriptionOptionsFilterInput) {
    onCreateOptions(filter: $filter) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOptions = /* GraphQL */ `
  subscription OnUpdateOptions($filter: ModelSubscriptionOptionsFilterInput) {
    onUpdateOptions(filter: $filter) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOptions = /* GraphQL */ `
  subscription OnDeleteOptions($filter: ModelSubscriptionOptionsFilterInput) {
    onDeleteOptions(filter: $filter) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onCreateOrders(filter: $filter) {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onUpdateOrders(filter: $filter) {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onDeleteOrders(filter: $filter) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
export const onCreateProductCategories = /* GraphQL */ `
  subscription OnCreateProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
  ) {
    onCreateProductCategories(filter: $filter) {
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
export const onUpdateProductCategories = /* GraphQL */ `
  subscription OnUpdateProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
  ) {
    onUpdateProductCategories(filter: $filter) {
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
export const onDeleteProductCategories = /* GraphQL */ `
  subscription OnDeleteProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
  ) {
    onDeleteProductCategories(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateAccountHolder = /* GraphQL */ `
  subscription OnCreateAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onCreateAccountHolder(filter: $filter) {
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
export const onUpdateAccountHolder = /* GraphQL */ `
  subscription OnUpdateAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onUpdateAccountHolder(filter: $filter) {
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
export const onDeleteAccountHolder = /* GraphQL */ `
  subscription OnDeleteAccountHolder(
    $filter: ModelSubscriptionAccountHolderFilterInput
  ) {
    onDeleteAccountHolder(filter: $filter) {
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
export const onCreateProductsProductCategories = /* GraphQL */ `
  subscription OnCreateProductsProductCategories(
    $filter: ModelSubscriptionProductsProductCategoriesFilterInput
  ) {
    onCreateProductsProductCategories(filter: $filter) {
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
export const onUpdateProductsProductCategories = /* GraphQL */ `
  subscription OnUpdateProductsProductCategories(
    $filter: ModelSubscriptionProductsProductCategoriesFilterInput
  ) {
    onUpdateProductsProductCategories(filter: $filter) {
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
export const onDeleteProductsProductCategories = /* GraphQL */ `
  subscription OnDeleteProductsProductCategories(
    $filter: ModelSubscriptionProductsProductCategoriesFilterInput
  ) {
    onDeleteProductsProductCategories(filter: $filter) {
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
