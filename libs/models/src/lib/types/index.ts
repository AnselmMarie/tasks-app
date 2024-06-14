export type GenericUnknownParams =
  | string
  | number
  | boolean
  | Record<string, never>
  | Array<string>;
export type GenericNonReturnPromiseType = () => Promise<void>;
export type GenericNonReturnType = (...params: ReadonlyArray<any>) => void;
export type GenericBooleanReturnType = (...params: ReadonlyArray<never>) => boolean;
export type GenericStringReturnType = (...params: ReadonlyArray<never>) => string;
export type GenericStringArrayReturnType = (...params: ReadonlyArray<never>) => Array<string>;
export type GenericObjectReturnType = (...params: ReadonlyArray<never>) => Record<string, never>;
export type GenericNumberReturnType = (...params: ReadonlyArray<never>) => number;
export type GenericUnknownReturnType = (...params: ReadonlyArray<never>) => never;
export type GenericVoidPromiseReturnType = (...params: ReadonlyArray<never>) => Promise<void>;
export type GenericBooleanPromiseReturnType = (...params: ReadonlyArray<never>) => Promise<boolean>;
export type GenericUnknownType = (
  ...params: ReadonlyArray<never>
) => number | string | boolean | Record<string, never> | Array<string>;
