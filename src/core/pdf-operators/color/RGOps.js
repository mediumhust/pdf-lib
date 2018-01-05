/* @flow */
/* eslint-disable new-cap */
import PDFOperator from '../PDFOperator';

import { and, addStringToBuffer } from '../../../utils';
import { validate, isNumber, isInRange } from '../../../utils/validate';

/**
Set the stroking colour space to DeviceRGB (or the DefaultRGB colour space) and
set the colour to use for stroking operations. Each operand shall be a number
between 0.0 (minimum intensity) and 1.0 (maximum intensity).
*/
export class RG extends PDFOperator {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    super();
    validate(
      r,
      and(isNumber, isInRange(0.0, 1.1)),
      'RG operator arg "r" must be a number between 0.0 and 1.0.',
    );
    validate(
      g,
      and(isNumber, isInRange(0.0, 1.1)),
      'RG operator arg "g" must be a number between 0.0 and 1.0.',
    );
    validate(
      b,
      and(isNumber, isInRange(0.0, 1.1)),
      'RG operator arg "b" must be a number between 0.0 and 1.0.',
    );
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static of = (r: number, g: number, b: number) => new RG(r, g, b);

  toString = (): string => `${this.r} ${this.g} ${this.b} RG\n`;

  bytesSize = (): number => this.toString().length;

  copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer);
}

/**
Same as RG but used for nonstroking operations.
*/
export class rg extends PDFOperator {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    super();
    validate(
      r,
      and(isNumber, isInRange(0.0, 1.1)),
      'rg operator arg "r" must be a number between 0.0 and 1.0.',
    );
    validate(
      g,
      and(isNumber, isInRange(0.0, 1.1)),
      'rg operator arg "g" must be a number between 0.0 and 1.0.',
    );
    validate(
      b,
      and(isNumber, isInRange(0.0, 1.1)),
      'rg operator arg "b" must be a number between 0.0 and 1.0.',
    );
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static of = (r: number, g: number, b: number) => new rg(r, g, b);

  toString = (): string => `${this.r} ${this.g} ${this.b} rg\n`;

  bytesSize = (): number => this.toString().length;

  copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer);
}
