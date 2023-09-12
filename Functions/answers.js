function calculate(a) {
    return function(b) {
      return function(op) {
        switch(op) {
          case '+':
            return a + b;
          case '-':  
            return a - b; 
          case '*':
            return a * b;
          case '/':
            return a / b;
        }
      }
    }
  }


  function sumFromTo(a, b) {
    if (a > b) return 0;
    return a + sumFromTo(a + 1, b); 
  }


  function callOnceAfter(func, delay) {
    let timer = null;
    
    return function() {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        func();
      }, delay * 1000);
    }
  }


  function limitCallForEveryDuration(func, duration) {

    let lastCalled = 0;
  
    return function() {
      const now = new Date().getTime();
      if (now - lastCalled >= duration * 1000) {
        func();
        lastCalled = now;
      }
    }
  
  }

  function rememberOrDo(func) {

    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    }
  
  }

  function makeCancelableTimeout(callback, delay) {

    let timeoutId;
  
    const cancel = () => {
      clearTimeout(timeoutId);
    }
  
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  
    return cancel;
  
  }