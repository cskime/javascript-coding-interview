/* https://school.programmers.co.kr/learn/courses/30/lessons/181932
 *
 * [ 풀이 1 ]
 * 1. 0부터 index를 순회
 * 2. 문자열 `code`에서 index 위치의 문자가 '1'이면 mode 변경
 * 3. mode가 1이면 홀수 index의 문자를 이어붙이기
 * 4. mode가 0이면 짝수 index의 문자를 이어붙이기
 *
 * [ 풀이 2 ]
 * 1. 전체 문자열 `code`를 '1'을 기준으로 split하면 반환된 배열의 index가 mode가 된다.
 * 2. `reduce`를 사용해서 생성된 배열을 하나의 문자열로 합친다.
 * 3. `reduce`에 전달한 callback 함수에서 `filter`로 조건에 맞는 문자들만 선택하고 `join`으로 이어붙인다.
 *
 * [ 비고 ]
 * - `Array.prototype.filter(callbackFn, thisArg)` : (element, index, array) 3개의 argument를 받고 truthy 반환. `callbackFn`이 truthy를 반환한 요소만 남김
 * - `Array.prototype.reduce(callbackFn, initialValue)` : (accumulator, currentValue, currentIndex, array) 4개의 argument를 받고 누적값을 반환
 */

function solution1(code) {
  let output = "";
  output = code.split("1").reduce((acc, code, index) => {
    mode = index % 2;
    return (
      acc +
      [...code]
        .filter((c, idx) => (mode && idx % 2 != 0) || (!mode && idx % 2 == 0))
        .join("")
    );
  }, "");
  return output;
}

function solution2(code) {
  let output = "";

  let mode = 0;
  for (let index = 0; index < code.length; index++) {
    if (+code[index]) {
      mode = (mode + 1) % 2;
      continue;
    }

    if (mode && index % 2 != 0) {
      output += code[index];
    }

    if (!mode && index % 2 == 0) {
      output += code[index];
    }
  }

  return output;
}

let inputs = ["abc1abc1abc"];
inputs.forEach((input) => console.log(solution1(input)));
inputs.forEach((input) => console.log(solution2(input)));
