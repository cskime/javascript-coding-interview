/* https://school.programmers.co.kr/learn/courses/30/lessons/181942
 *
 * [ 풀이 1 ]
 * Index로 문자열을 순회하면서 `str1`과 `str2`를 번갈아가며 이어붙이기
 *
 * [ 풀이 2 ]
 * `str1` 문자 1개와 `str2` 문자 1개를 합친 문자열을 요소로 갖는 배열로 변환한 뒤 이어붙이기
 *
 * 1. `map(callbackFn, thisArg)` method로 `str1`을 순회하며 `str1`의 문자에 `str2`의 문자 1개를 이어붙임
 * 2. `Array.prototype.join(glue)` method로 배열을 문자열로 변환
 *
 * [ 비고 ]
 * - 두 방법 모두 O(1) 시간 복잡도를 가짐
 * - 풀이 1은 다른 배열을 만들지 않아도 되기 때문에 메모리 사용 측면에서 이점이 있다.
 */

function solution1(str1, str2) {
  var output = "";
  for (let index = 0; index < str1.length; index++) {
    output += str1[index] + str2[index];
  }
  return output;
}

function solution2(str1, str2) {
  var output = "";
  output = [...str1].map((char, index) => char + str2[index]).join("");
  return output;
}

let inputs = [["aaaaa", "bbbbb"]];
inputs.forEach((input) => console.log(solution1(input[0], input[1])));
inputs.forEach((input) => console.log(solution2(input[0], input[1])));
