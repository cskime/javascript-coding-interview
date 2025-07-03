/* https://school.programmers.co.kr/learn/courses/30/lessons/181927
 *
 * [ 풀이 1 ]
 * - 전통적인 방식으로 주어진 배열의 마지막 두 원소를 가져와서 비교한 뒤 계산한 결과값을 추가하는 방법
 * - 이 때, spread operator를 사용해서 새 배열을 만들면 간편하다.
 *
 * [ 풀이 2 ]
 * - 풀이 1에서 마지막 두 요소를 가져올 때, 대괄호 대신 `at(index)` method를 사용하는 방법
 * - 
 *
 * [ 풀이 3 ]
 * - 주어진 배열에서 `splice([start], [end])` method로 마지막 요소 두 개만 잘라낸 뒤 구조분해 문법으로 한 번에 값을 가져오기
 * - 값을 반환할 때에도 spread operator를 사용하여 새 배열을 간결하게 생성
 * 
 * [ 비고 ]
 * - `Array.prototype.at(index)` : ES2022부터 추가된 method로, 음수 index를 지원하여 대괄호보다 가독성이 좋다.
 * - `String.prototype.replaceAll(pattern, replacement)` method는 문자열에서 `pattern`과 matching되는 모든 부분을 `replacement`로 대체
 * - 비슷한 `String.prototype.replace(pattern, replacement)` method는 문자열에서 `pattern`과 matching되는 첫 번째 부분만 `replacement`로 대체
 */

function solution1(input) {
  let output = [...input];;
  const last = input[input.length - 1];
  const compare = input[input.length - 2];
  const result = last > compare ? last - compare : last * 2;
  output.push(result);
  return output;
}

function solution2(input) {
  let output = [...input];
  const last = input.at(-1);
  const compare = input.at(-2);
  const result = last > compare ? last - compare : last * 2;
  output.push(result);
  return output;
}

function solution3(input) {
  const [compare, last] = input.slice(-2);
  return [...input, last > compare ? last - compare : last * 2];
}

let inputs = [[2, 1, 6], [5, 2, 1, 7, 5]];
inputs.forEach((input) => console.log(solution1(input)));
inputs.forEach((input) => console.log(solution2(input)));
inputs.forEach((input) => console.log(solution3(input)));
