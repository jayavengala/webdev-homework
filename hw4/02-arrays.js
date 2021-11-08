let result = [];

const insertItem = (item) => {
  // insert item into result
  let index = result.length;
  result[index] = item;
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  result.splice(result.indexOf(item), 1);
  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  if (index > 0 && index <= result.length) {
    let num = result[index];
    result.splice(index, 1);
    return num;
  } else {
    return null;
  }
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  return result.join(", ");
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
