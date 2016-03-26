exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : (arr, item) => arr.indexOf(item),

  sum : (arr) => arr.reduce((a, b) => a + b),

  remove : (arr, item) => arr.filter((el) => el !== item),

  removeWithoutCopy : (arr, item) => {
    let index = arr.indexOf(item);

    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : (arr, item) => [...arr, item],

  truncate : (arr) => arr.slice(0, arr.length - 1),

  prepend : (arr, item) => [item, ...arr],

  curtail : (arr) => arr.slice(1),

  concat : (arr1, arr2) => [...arr1, ...arr2],

  insert : (arr, item, index) => [
    ...arr.slice(0, index),
    item,
    ...arr.slice(index)],

  count : (arr, item) => arr.filter((el) => el === item).length,

  duplicates : (arr) =>
    arr.filter((el, index) =>
      arr.indexOf(el) != index && arr.lastIndexOf(el) == index),

  square : (arr) => arr.map((el) => el * el),

  findAllOccurrences : (arr, target) =>
    arr.map((el, index) => el === target ? index : -1)
      .filter((el) => el != -1),
}
