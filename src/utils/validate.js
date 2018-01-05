/* @flow */
import _ from 'lodash';
import { and, not } from '.';

export const validate = <T>(value: T, predicate: T => boolean, msg: string) => {
  if (!predicate(value)) throw new Error(msg);
};

export const validateArr = <T: Array<any>>(
  value: T,
  predicate: T => boolean,
  msg: string,
) => {
  value.forEach(v => validate(v, predicate, msg));
};

export const isInstance = <T>(requiredClass: T) => (value: any) =>
  value instanceof requiredClass;

export const isIdentity = <T>(requiredValue: T) => (value: any) =>
  value === requiredValue;

export const isNotIdentity = <T>(requiredValue: T) => (value: any) =>
  value !== requiredValue;

export const doesMatch = (regex: RegExp) => (value: string) =>
  !!value.match(regex);

export const isNumber = (n: any) => and(_.isNumber, not(_.isNaN))(n);

export const isInRange = (lower: number, upper: number) => (value: any) =>
  _.inRange(value, lower, upper);
