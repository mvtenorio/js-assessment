exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(el) {
      return function() {
        return fn(el);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  useArguments : function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
      var moreArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(moreArgs));
    };
  },

  curryIt : function(fn) {
    function applyArguments(fn, arguments) {
      return fn.apply(null, arguments);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }
        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
