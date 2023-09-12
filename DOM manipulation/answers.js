function elementor(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error('No element found with that selector'); 
    }
  
    return {
      attribute: {
        set: (name, value) => element.setAttribute(name, value),
        get: (name) => element.getAttribute(name), 
        remove: (name) => element.removeAttribute(name)
      },
      click: () => element.click(),
      on: (event, callback) => element.addEventListener(event, callback),
      text: {
        set: (text) => element.textContent = text,
        get: () => element.textContent
      }, 
      class: {
        add: (className) => element.classList.add(className),
        remove: (className) => element.classList.remove(className),
        toggle: (className) => element.classList.toggle(className)
      },
      remove: () => element.remove()
    }
  }



  function render(node) {
    if (typeof node === 'string') {
      return document.createTextNode(node); 
    }
    
    const element = document.createElement(node.Name);
    
    for (let attribute of node.Attributes) {
      element.setAttribute(attribute.key, attribute.value);
    }
    
    for (let child of node.Children) {
      element.appendChild(render(child)); 
    }
  
    return element;
  }




  function formBuilder(inputs) {
    const form = document.createElement('form');
  
    inputs.forEach(input => {
      let inputElement;
      if(input.type === 'text') {
        // create input type text
        inputElement = createTextElement(input); 
      } else if(input.type === 'checkbox') {
        // create checkbox
        inputElement = createCheckboxElement(input);
      } else if(input.type === 'select') {
        // create select
        inputElement = createSelectElement(input);
      }
  
      form.appendChild(inputElement);
    });
  
    return form; 
  }