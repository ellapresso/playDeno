export interface Person {
  name: string;
  age: number;
}

/**
 * 이름을 부르며 인사를 합니다.
 * @param {Person} person
 * @returns {void}
 */
export function hello(person: Person): void {
  console.log(`hello, ${person.name}`);
}

/**
 * 이 상수는 그냥 쓴 상수 입니다.
 */
export const HELLO = "World";

/**
 * 이 클래스는 default 로 내보내기 되어 있습니다.
 * 멤버 변수와 함수는 전체 문서에는 안나옵니다.
 */
export default class MyClass {
  foo: number;
  bar() {}
}

/**
 * namespace 의 경우에는 . 을 이용해서 안의 내용을 검색할 수 있습니다.
 * Namespace.Klass
 */
export namespace Namespace {
  /**
	 * 안쪽의 문서도 밖에서 보입니다.
	 */
  export class Klass {}
}
