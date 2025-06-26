/* https://school.programmers.co.kr/learn/courses/30/lessons/181943
 *
 * [ 풀이 1 ]
 * `my_string`에서 `overwrite_string`으로 덮어쓸 부분을 제외한 부분 문자열을 추출해서 이어붙이기
 *
 * 1. `String.prototype.slice(start, [end])` method로 `my_string`에서 덮어쓰이지 않는 부분 문자열 추출
 *
 * [ 풀이 2 ]
 * 문자열을 배열로 변환한 뒤 덮어쓸 부분을 `overwrite_string`으로 교체하기
 *
 * 1. `String.prototype.split(separator, [limit])` method로 문자열을 배열로 변환
 * 2. `Array.prototype.splice(start, deleteCount, item1, item2, ...)` method로 `s`부터 `overwrite_string` 길이만큼을 `overwrite_string` 문자로 교체
 * 3. `String.prototype.join(glue)` method로 `overwrite_string` 문자로 교체된 배열을 하나의 문자열로 이어붙이기
 *
 * [ 비고 ]
 * - 풀이 2는 배열을 다루기 때문에 풀이 1에 비해 시간이 더 오래 걸릴 수 있다.
 */

function solution1(my_string, overwrite_string, s) {
  var output = "";
  output =
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length);
  return output;
}

function solution2(my_string, overwrite_string, s) {
  var output = "";

  let arr = my_string.split("");
  arr.splice(s, overwrite_string.length, overwrite_string);
  output = arr.join("");

  return output;
}

let inputs = [
  ["He110Wor1d", "lloWorl", 2],
  ["Program29b8UYP", "merS123", 7],
];
inputs.forEach((input) => console.log(solution1(input[0], input[1], input[2])));
inputs.forEach((input) => console.log(solution2(input[0], input[1], input[2])));
