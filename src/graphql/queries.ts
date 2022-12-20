/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSave = /* GraphQL */ `
  query GetSave($id: ID!) {
    getSave(id: $id) {
      id
      items
      accountholderID
      createdAt
      updatedAt
    }
  }
`;
export const listSaves = /* GraphQL */ `
  query ListSaves(
    $filter: ModelSaveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items
        accountholderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOptions = /* GraphQL */ `
  query GetOptions($id: ID!) {
    getOptions(id: $id) {
      id
      options
      productsID
      createdAt
      updatedAt
    }
  }
`;
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $filter: ModelOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        options
        productsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProductCategories = /* GraphQL */ `
  query GetProductCategories($id: ID!) {
    getProductCategories(id: $id) {
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
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoriesFilterInput
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
        productss {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
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
        Orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccountHolder = /* GraphQL */ `
  query GetAccountHolder($id: ID!) {
    getAccountHolder(id: $id) {
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
export const listAccountHolders = /* GraphQL */ `
  query ListAccountHolders(
    $filter: ModelAccountHolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountHolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountHolderStatus
        company
        paymentPricessor
        profilePicture
        Users {
          nextToken
        }
        ProductCategories {
          nextToken
        }
        Products {
          nextToken
        }
        Saves {
          nextToken
        }
        Saved {
          nextToken
        }
        sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductsProductCategories = /* GraphQL */ `
  query GetProductsProductCategories($id: ID!) {
    getProductsProductCategories(id: $id) {
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
export const listProductsProductCategories = /* GraphQL */ `
  query ListProductsProductCategories(
    $filter: ModelProductsProductCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductsProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productsId
        productCategoriesId
        products {
          id
          name
          price
          accountholderID
          createdAt
          updatedAt
        }
        productCategories {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const savesByAccountholderID = /* GraphQL */ `
  query SavesByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSaveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savesByAccountholderID(
      accountholderID: $accountholderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        items
        accountholderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const optionsByProductsID = /* GraphQL */ `
  query OptionsByProductsID(
    $productsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    optionsByProductsID(
      productsID: $productsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        options
        productsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByAccountholderID = /* GraphQL */ `
  query OrdersByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdersFilterInput
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
  }
`;
export const ordersByUsersID = /* GraphQL */ `
  query OrdersByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const productsByAccountholderID = /* GraphQL */ `
  query ProductsByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
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
      nextToken
    }
  }
`;
export const productCategoriesByAccountholderID = /* GraphQL */ `
  query ProductCategoriesByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductCategoriesFilterInput
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
        productss {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByAccountholderID = /* GraphQL */ `
  query UsersByAccountholderID(
    $accountholderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
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
        Orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsProductCategoriesByProductsId = /* GraphQL */ `
  query ProductsProductCategoriesByProductsId(
    $productsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsProductCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsProductCategoriesByProductsId(
      productsId: $productsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productsId
        productCategoriesId
        products {
          id
          name
          price
          accountholderID
          createdAt
          updatedAt
        }
        productCategories {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsProductCategoriesByProductCategoriesId = /* GraphQL */ `
  query ProductsProductCategoriesByProductCategoriesId(
    $productCategoriesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsProductCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsProductCategoriesByProductCategoriesId(
      productCategoriesId: $productCategoriesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productsId
        productCategoriesId
        products {
          id
          name
          price
          accountholderID
          createdAt
          updatedAt
        }
        productCategories {
          id
          name
          description
          accountholderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
