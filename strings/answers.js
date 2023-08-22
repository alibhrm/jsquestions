function filterWords(text, blacklist) {

    return text.split(' ')
      .filter(word => {
        if(blacklist.includes(word)) {
          return '*'.repeat(word.length);
        }
        return word;
      })
      .join(' ');
  
  }

  function reverseString(str) {
    return str.split('').reverse().join(''); 
  }

  const farsiNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function toFarsi(str) {
  let result = '';

  for(let i=0; i<str.length; i++) {
    if(!isNaN(parseInt(str[i]))) {
      result += farsiNumbers[parseInt(str[i])];
    } else {
      result += str[i];
    }
  }

  return result;
}

function getMostFrequent(str) {

    let charMap = {};
    let max = 0;
    let maxChar = '';
  
    str.split('').forEach(char => {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1; 
      }
  
      if(charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    });
  
    return {
      character: maxChar,
      count: max
    };
  
  }

  function areRoots(str1, str2) {

    let charMap1 = buildCharMap(str1);
    let charMap2 = buildCharMap(str2);
  
    for(let char in charMap1) {
      if(charMap1[char] !== charMap2[char]) {
        return false;
      }
    }
  
    return true;
  
  }
  
  function buildCharMap(str) {
    let charMap = {};
  
    str.replace(/\s/g, '').split('').forEach(char => {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
  
    return charMap;
  }

  function formatNumber(str) {

    let result = '';
  
    for(let i=str.length-1; i>=0; i--) {
      result = str[i] + result;
  
      if(i%3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }
  
    return result;
  
  }

  function isValid(str) {

    let stack = [];
  
    for(let char of str) {
      if(char === '(') {
        stack.push(char);
      } else if(char === ')') {
        if(stack.length === 0) return false;
        stack.pop();
      }
    }
  
    return stack.length === 0;
  
  }

  function removeDuplicates(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) === -1) {
        result += str[i];
      }
    }
  
    return result;
  }

  function myReplace(input, replaceThis, replaceTo) {

    if(!replaceThis || !replaceTo) return input;
  
    let result = '';
  
    for(let i=0; i<input.length; i++) {
      if(input[i] === replaceThis[0] && matches(input, i, replaceThis)) {
        result += replaceTo;
        i += replaceThis.length - 1;
      } else {
        result += input[i];
      }
    }
  
    return result;
  
  }
  
  function matches(input, index, sub) {
    for(let i=0; i<sub.length; i++) {
      if(input[index + i] !== sub[i]) {
        return false;
      }
    }
    return true;
  }
