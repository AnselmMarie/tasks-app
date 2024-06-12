export type GenericNonReturnPromiseType = () => Promise<void>;
export type GenericNonReturnType = (...params: ReadonlyArray<unknown>) => void;
export type GenericBooleanReturnType = (...params: ReadonlyArray<unknown>) => boolean;
export type GenericStringReturnType = (...params: ReadonlyArray<unknown>) => string;
export type GenericStringArrayReturnType = (...params: ReadonlyArray<unknown>) => Array<string>;
export type GenericObjectReturnType = (
  ...params: ReadonlyArray<unknown>
) => Record<string, unknown>;
export type GenericNumberReturnType = (...params: ReadonlyArray<unknown>) => number;
export type GenericUnknownReturnType = (...params: ReadonlyArray<unknown>) => unknown;
export type GenericVoidPromiseReturnType = (...params: ReadonlyArray<unknown>) => Promise<void>;
export type GenericBooleanPromiseReturnType = (
  ...params: ReadonlyArray<unknown>
) => Promise<boolean>;
export type GenericUnknownType = (
  ...params: ReadonlyArray<unknown>
) => number | string | boolean | Record<string, unknown> | Array<string>;
