/* https://school.programmers.co.kr/learn/courses/30/lessons/181946
 *
 * [ 풀이 1 ]
 * 공백을 기준으로 두 문자열을 분리한 뒤 다시 합치는 방법
 *
 * 1. `String.prototype.split(separator, [limit])` method로 두 문자열을 분리해서 배열로 변환
 * 2. `Array.prototype.join(separator)` method로 분리된 문자열을 이어붙이기
 *
 * [ 풀이 2 ]
 * 단순히 문자열에서 공백을 제거하는 방법
 *
 * 1. `String.prototype.replaceAll(pattern, replacement)` method로 공백(" ")을 빈 문자열("")로 대체
 *
 * [ 비고 ]
 * - `String.prototype.replaceAll(pattern, replacement)` method는 문자열에서 `pattern`과 matching되는 모든 부분을 `replacement`로 대체
 * - 비슷한 `String.prototype.replace(pattern, replacement)` method는 문자열에서 `pattern`과 matching되는 첫 번째 부분만 `replacement`로 대체
 */

function solution1(input) {
  let output = "";
  output = input.split(" ").join("");
  return output;
}

function solution2(input) {
  let output = "";
  output = input.replaceAll(" ", "");
  return output;
}

let inputs = ["apple pen", "Hello World!"];
inputs.forEach((input) => console.log(solution1(input)));
inputs.forEach((input) => console.log(solution2(input)));
