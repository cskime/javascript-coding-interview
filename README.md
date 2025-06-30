# JavaScript Coding Interview

## Useful methods

### 문자열 다루기

- [String.prototype.replaceAll(pattern, replacement)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) : `pattern`과 일치하는 모든 문자열이 `replacement`로 대체된 새 문자열 반환
- [String.prototype.replace(pattern, replacement)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) : `pattern`과 일치하는 문자열이 `replacement`로 대체된 새 문자열 반환 (1회성)
- [String.prototype.repeat(count)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) : 문자열을 `count`번 반복해서 이어붙인 새 문자열 반환
- [String.prototype.slice(start, [end])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) : `start`에서 `end` 이전까지의 부분 문자열 반환
- [String.prototype.split(separator, [limit])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) : `separator`를 기준으로 최대 `limit`개의 부분 문자열 배열 반환
- [Array.prototype.join(separator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) : 배열의 모든 요소들을 `separator`를 기준으로 이어붙인 새 문자열 반환
- [String.prototype.charCodeAt(index)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) : 문자의 UTF-16 코드 반환 (0 - 65535 사이)
- [String.fromCharCode(code1, ...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) : `code` sequence에 해당하는 UTF-16 문자열 반환
- [Array.prototype.filter(callbackFn, thisArg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) : `callbackFn`은 (element, index, array) 3개의 argument를 받고 truthy 반환. `callbackFn`이 truthy를 반환한 요소만 남김
- [Array.prototype.reduce(callbackFn, initialValue)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) : `callbackFn`은 (accumulator, currentValue, currentIndex, array) 4개의 argument를 받고 누적값을 반환. 마지막으로 호출된 `callbackFn`의 반환값이 최종 반환값이 됨

### 정규 표현식

- [RegExp.prototype.test(str)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) : `str`에서 정규 표현식에 match되는 문자열이 존재하면 `true` 반환
- [String.prototype.match(regexp)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) : 문자열에서 정규 표현식(`regexp`)과 match되는 부분 문자열의 배열 반환
