/* https://school.programmers.co.kr/learn/courses/30/lessons/181950
 *
 * [ 풀이 ]
 * 1. `String.prototype.split(separator, [limit])` method로 문자열과 반복 횟수 분리
 * 2. `String.prototype.repeat(count)` method로 문자열을 주어진 횟수 만큼 반복해서 이어붙이기
 *
 * [ 비고 ]
 * - 반복 횟수(`repeats`)는 문자열이기 때문에 number로 형 변환 필요
 * - `+` 단항 연산자를 사용해서 암시적 형 변환
 */

function solution(input) {
  let [str, repeats] = input.split(" ");
  console.log(str.repeat(+repeats));
}

let inputs = ["string 5"];
inputs.forEach((input) => solution(input));
