// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CouponType = {
  "PERCENT": "PERCENT",
  "FIXED": "FIXED"
};

const ProcessorType = {
  "PAYMENT": "PAYMENT",
  "REFUND": "REFUND"
};

const PaymentType = {
  "CASH": "CASH",
  "CARD": "CARD"
};

const PaymentStatus = {
  "CONFIRMED": "CONFIRMED",
  "PENDING": "PENDING",
  "CANCELLED": "CANCELLED",
  "FAILED": "FAILED"
};

const OrderStatus = {
  "INPROGRESS": "INPROGRESS",
  "CANCELLED": "CANCELLED",
  "SAVED": "SAVED",
  "PENDING": "PENDING",
  "PAUSED": "PAUSED",
  "COMPLETE": "COMPLETE"
};

const AccountStatus = {
  "ACTIVE": "ACTIVE",
  "ACCOUNTCREATION": "ACCOUNTCREATION",
  "BANNED": "BANNED"
};

const { Coupon, Payments, ProductCategory, Terminal, Product, Order, User, AccountHolder, Alterations, Item } = initSchema(schema);

export {
  Coupon,
  Payments,
  ProductCategory,
  Terminal,
  Product,
  Order,
  User,
  AccountHolder,
  CouponType,
  ProcessorType,
  PaymentType,
  PaymentStatus,
  OrderStatus,
  AccountStatus,
  Alterations,
  Item
};