(function(win, doc) {
  'use strict';

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-num"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');

  function initialize() {
    iniEvents();
  }

  function iniEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });

    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });

    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemOperation($visor.value);   
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function lastItemOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();

    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, (function(button) {
      return button.value;
    }));
  }

  function removeLastItemOperation(string) {
    if (lastItemOperation(string))
      return string.slice(0, -1);        
    return string;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemOperation($visor.value);    
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function calculateAllValues(accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemOperation(actual);
      var lasOperator = getLastOperation(actual);
      return doOperation(operator, firstValue, lastValue) + lasOperator;
  }

  function getLastOperation(value) {
    return lastItemOperation(value) ? value.split('').pop() : '';
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
        case '+':
          return Number(firstValue) + Number(lastValue);
        case '-':
          return Number(firstValue) - Number(lastValue);
        case 'x':
          return Number(firstValue) * Number(lastValue);
        case '÷':
          return Number(firstValue) / Number(lastValue);
      }
  }

  initialize();

}) (window, document);