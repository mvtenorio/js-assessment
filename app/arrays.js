exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);

    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    return this.remove(arr, item);
  },

  append : function(arr, item) {
    // returns the new length
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    // returns the element that was removed
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    // returns the new length
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    // returns the element that was removed
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    // returns a new array
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    // returns [] since no item was deleted
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(val) {
      return (val === item);
    }).length;
  },

  duplicates : function(arr) {
    arr.sort();
    var duplicates = [];

    for (var i = 1; i < arr.length; i++) {
      var current = arr[i];
      var previous = arr[i-1];

      if (current === previous && duplicates.indexOf(current) === -1) {
        duplicates.push(current);
      }
    }
    return duplicates;
  },

  square : function(arr) {
    return arr.map(function(el) {
      return el * el;
    });
  },

  findAllOccurrences : function(arr, target) {
    var ocurrences = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        ocurrences.push(i);
      }
    }
    return ocurrences;
  }
};
