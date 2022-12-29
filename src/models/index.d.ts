import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum CouponType {
  PERCENT = "PERCENT",
  FIXED = "FIXED"
}

export enum ProcessorType {
  PAYMENT = "PAYMENT",
  REFUND = "REFUND"
}

export enum PaymentType {
  CASH = "CASH",
  CARD = "CARD"
}

export enum PaymentStatus {
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED"
}

export enum OrderStatus {
  INPROGRESS = "INPROGRESS",
  CANCELLED = "CANCELLED",
  SAVED = "SAVED",
  PENDING = "PENDING",
  PAUSED = "PAUSED",
  COMPLETE = "COMPLETE"
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  ACCOUNTCREATION = "ACCOUNTCREATION",
  BANNED = "BANNED"
}

type EagerAlterations = {
  readonly name?: string | null;
  readonly choices?: (string | null)[] | null;
  readonly number?: string | null;
  readonly description?: string | null;
}

type LazyAlterations = {
  readonly name?: string | null;
  readonly choices?: (string | null)[] | null;
  readonly number?: string | null;
  readonly description?: string | null;
}

export declare type Alterations = LazyLoading extends LazyLoadingDisabled ? EagerAlterations : LazyAlterations

export declare const Alterations: (new (init: ModelInit<Alterations>) => Alterations)

type EagerItem = {
  readonly ItemNames: string;
  readonly Alterations?: (Alterations | null)[] | null;
  readonly price?: number | null;
  readonly specialPrice?: number | null;
  readonly unalteredPrice?: number | null;
}

type LazyItem = {
  readonly ItemNames: string;
  readonly Alterations?: (Alterations | null)[] | null;
  readonly price?: number | null;
  readonly specialPrice?: number | null;
  readonly unalteredPrice?: number | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item)

type EagerCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: number | null;
  readonly couponType?: CouponType | keyof typeof CouponType | null;
  readonly code?: string | null;
  readonly expires?: string | null;
  readonly accountholderID: string;
  readonly expired?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: number | null;
  readonly couponType?: CouponType | keyof typeof CouponType | null;
  readonly code?: string | null;
  readonly expires?: string | null;
  readonly accountholderID: string;
  readonly expired?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon

export declare const Coupon: (new (init: ModelInit<Coupon>) => Coupon) & {
  copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon>) => MutableModel<Coupon> | void): Coupon;
}

type EagerPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly terminalUID?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly agentId?: string | null;
  readonly orderId?: string | null;
  readonly paymentStatus?: PaymentStatus | keyof typeof PaymentStatus | null;
  readonly amount?: number | null;
  readonly paymentType?: PaymentType | keyof typeof PaymentType | null;
  readonly processorType?: ProcessorType | keyof typeof ProcessorType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly terminalUID?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly agentId?: string | null;
  readonly orderId?: string | null;
  readonly paymentStatus?: PaymentStatus | keyof typeof PaymentStatus | null;
  readonly amount?: number | null;
  readonly paymentType?: PaymentType | keyof typeof PaymentType | null;
  readonly processorType?: ProcessorType | keyof typeof ProcessorType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payments = LazyLoading extends LazyLoadingDisabled ? EagerPayments : LazyPayments

export declare const Payments: (new (init: ModelInit<Payments>) => Payments) & {
  copyOf(source: Payments, mutator: (draft: MutableModel<Payments>) => MutableModel<Payments> | void): Payments;
}

type EagerProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductCategory = LazyLoading extends LazyLoadingDisabled ? EagerProductCategory : LazyProductCategory

export declare const ProductCategory: (new (init: ModelInit<ProductCategory>) => ProductCategory) & {
  copyOf(source: ProductCategory, mutator: (draft: MutableModel<ProductCategory>) => MutableModel<ProductCategory> | void): ProductCategory;
}

type EagerTerminal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Terminal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UID?: string | null;
  readonly tablet?: number | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerminal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Terminal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UID?: string | null;
  readonly tablet?: number | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Terminal = LazyLoading extends LazyLoadingDisabled ? EagerTerminal : LazyTerminal

export declare const Terminal: (new (init: ModelInit<Terminal>) => Terminal) & {
  copyOf(source: Terminal, mutator: (draft: MutableModel<Terminal>) => MutableModel<Terminal> | void): Terminal;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: Item;
  readonly Categories?: (number | null)[] | null;
  readonly accountholderID: string;
  readonly special?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: Item;
  readonly Categories?: (number | null)[] | null;
  readonly accountholderID: string;
  readonly special?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Items: (Item | null)[];
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly accountholderID: string;
  readonly total: number;
  readonly remaining: number;
  readonly orderStatus?: OrderStatus | keyof typeof OrderStatus | null;
  readonly notes?: string | null;
  readonly processorPaymentIds?: (string | null)[] | null;
  readonly processorRefundIds?: (string | null)[] | null;
  readonly paymentIds?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Items: (Item | null)[];
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly accountholderID: string;
  readonly total: number;
  readonly remaining: number;
  readonly orderStatus?: OrderStatus | keyof typeof OrderStatus | null;
  readonly notes?: string | null;
  readonly processorPaymentIds?: (string | null)[] | null;
  readonly processorRefundIds?: (string | null)[] | null;
  readonly paymentIds?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly pin?: number | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly pin?: number | null;
  readonly accountholderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAccountHolder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountHolder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly accountStatus: AccountStatus | keyof typeof AccountStatus;
  readonly Users?: (User | null)[] | null;
  readonly Orders?: (User | null)[] | null;
  readonly Terminals?: (User | null)[] | null;
  readonly Products?: (User | null)[] | null;
  readonly ProductCategories?: (User | null)[] | null;
  readonly stripeId?: string | null;
  readonly Coupons?: (User | null)[] | null;
  readonly name: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccountHolder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountHolder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly accountStatus: AccountStatus | keyof typeof AccountStatus;
  readonly Users: AsyncCollection<User>;
  readonly Orders: AsyncCollection<User>;
  readonly Terminals: AsyncCollection<User>;
  readonly Products: AsyncCollection<User>;
  readonly ProductCategories: AsyncCollection<User>;
  readonly stripeId?: string | null;
  readonly Coupons: AsyncCollection<User>;
  readonly name: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AccountHolder = LazyLoading extends LazyLoadingDisabled ? EagerAccountHolder : LazyAccountHolder

export declare const AccountHolder: (new (init: ModelInit<AccountHolder>) => AccountHolder) & {
  copyOf(source: AccountHolder, mutator: (draft: MutableModel<AccountHolder>) => MutableModel<AccountHolder> | void): AccountHolder;
}