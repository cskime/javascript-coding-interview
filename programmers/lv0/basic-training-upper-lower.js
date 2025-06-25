/* https://school.programmers.co.kr/learn/courses/30/lessons/181949
 *
 * [ 풀이 1 ]
 * UTF-16 code에서 대문자는 65, 소문자는 97부터 시작하므로 두 code의 차이인 32를 더하거나 빼서 대소문자를 변환한다.
 *
 * 1. Index로 문자열을 순회하면서 `String.prototype.charCodeAt(index)` method로 각 문자를 UTF-16 code로 변환
 * 2. Code가 97보다 크면 소문자이므로, code에서 32를 빼서 대문자로 변환
 * 3. Input은 대문자 또는 소문자로만 이루어진 문자열이므로, 이 외의 경우는 32를 더해서 소문자로 변환
 * 4. 변환된 code는 `String.fromCharCode(code1, ...)` method로 문자로 변환
 *
 * [ 풀이 2 ]
 * 단순히 대문자/소문자를 판별하여 `String.prototype.toLowerCase()` 또는 `String.prototype.toUpperCase()`로 변환한다.
 *
 * 1. 문자열을 순회하며 `RegExp.prototype.test(str)` method를 사용해서 각 문자가 소문자인지 판단
 * 2. 소문자라면 `String.prototype.toUpperCase()`를, 대문자라면 `String.prototype.toLowerCase()` method를 사용해서 변환
 * 3. 문자열 `input`을 array로 바꿔서 `map()` method를 사용했으므로, `Array.prototype.join("")` method를 사용해서 문자열로 병합
 * - 문자열을 각 문자가 대문자일 떄는
 * - 문자열을 순회하면서 각 문자에 대해 `RegExp.prototype.test(str)` 또는 `String.prototype.match(regexp)` method로 대소문자 판단
 * - 문자열을 순회하면서 각 문자에 대해 `RegExp.prototype.test(str)` 또는 `String.prototype.match(regexp)` method로 대소문자 판단
 *
 * [ 비고 ]
 * - 풀이 2에서 각 문자의 대소문자를 판단할 때 `char === char.toLowerCase()`같은 방식으로 비교하지 않기 위해 정규 표현식을 사용한다.
 * - 정규 표현식으로 대소문자를 판단할 때 `String.prototype.match(regexp)` method를 활용할 수도 있다.
 *   - `RegExp.prototype.test(str)` method는 문자열에서 정규 표현식과 matching되는 부분이 있으면 `true`를 반환
 *   - `String.prototype.match(regexp)` method는 문자열에서 정규 표현식과 matching되는 부분을 배열로 반환
 */

function solution1(input) {
  let output = "";
  for (let index = 0; index < input.length; index++) {
    const code = input.charCodeAt(index);
    output += String.fromCharCode(code >= 97 ? code - 32 : code + 32);
  }
  return output;
}

function solution2(input) {
  const isLowerCase = (str) => /[a-z]/.test(str);

  let output = [...input]
    .map((c) => (isLowerCase(c) ? c.toUpperCase() : c.toLowerCase()))
    .join("");
  return output;
}

let inputs = ["aBcDeFg"];
inputs.forEach((input) => console.log(solution1(input)));
inputs.forEach((input) => console.log(solution2(input)));
