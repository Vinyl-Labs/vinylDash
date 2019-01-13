declare module "ramda-fantasy" {
  export interface Maybe<T> {
    map<U>(fn: (val: T) => U): Maybe<U>;

    chain<U>(fn: (val: T) => Maybe<U>): Maybe<U>;

    filter(fn: (val: T) => boolean): Maybe<T>;

    reduce<U>(fn: (acc: U, val: T) => U, x: U): U;

    ap<U>(m: Maybe<T>): Maybe<U>;

    getOrElse(val?: T | null): T;

    equals(m: Maybe<any>): boolean;
  }

  export function Maybe<T>(value: T | null | undefined): Maybe<T>;

  export namespace Maybe {
    function Just<T>(value: T): Maybe<T>;
    function Nothing<T = any>(): Maybe<T>;

    function isJust(m: Maybe<any>): boolean;
    function isNothing(m: Maybe<any>): boolean;

    function maybe<T, U>(nothing: U, justFn: (val: T) => U, maybe: Maybe<T>): U;
  }

  export interface Tuple<X, Y> {
    map<U>(fn: (val: Y) => U): Tuple<X, U>;
  }

  export function Tuple<X, Y>(x: X, y: Y): Tuple<X, Y>;

  export interface Reader<R, A> {
    run(env: R): A;

    map<B>(fn: (val: A) => B): Reader<R, B>;

    chain<B>(fn: (val: A) => Reader<R, B>): Reader<R, B>;
  }

  export function Reader<R, A>(fn: (r: R) => A): Reader<R, A>;

  export namespace Reader {
    function of<A>(val: A): Reader<void, A>;
  }

  export interface Either<L, R> {
    map<U>(fn: (val: R) => U): Tuple<L, U>;

    either<L, R>(leftFn: (val: L) => any, rightFn: (val: R) => any): any;
  }

  export namespace Either {
    function Left<L>(value: L): Either<L, any>;
    function Right<R>(value: R): Either<any, R>;

    function either<L, R>(
      leftFn: (val: L) => any,
      rightFn: (val: R) => any,
      either: Either<L, R>
    ): any;
  }
}
