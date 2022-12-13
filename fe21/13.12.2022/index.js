function compareObjects(firstObj, secondObj) {
  return Object.keys({ ...firstObj, ...secondObj }).every(
    (key) => firstObj[key] === secondObj[key]
  );
}
function compareObjects(firstObj, secondObj) {
  const biggerObj =
    JSON.stringify(firstObj).length > JSON.stringify(secondObj).length
      ? firstObj
      : secondObj;
  return !Object.keys(biggerObj).some(
    (key) => firstObj[key] !== secondObj[key]
  );
}
const compareObjects = (firstObj, secondObj) => {
  const firstArr = Object.keys(firstObj);
  const secondArr = Object.keys(secondObj);
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  return !firstArr.some((key) => firstObj[key] !== secondObj[key]);
};
const compareObjects2 = (firstObj, secondObj) =>
  JSON.stringify(Object.entries(firstObj).sort()) ===
  JSON.stringify(Object.entries(secondObj).sort());

function compareObjects(firstObj, secondObj) {
  const firstArray = Object.keys(firstObj);
  if (firstArray.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstArray.reduce((acc, element) => {
    if (firstObj[element] !== secondObj[element]) {
      acc = false;
    }
    return acc;
  }, true);
}

const compareObjects = (firstObj, secondObj) =>
  Object.keys(firstObj).reduce(
    (acc, key, index) =>
      firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1,
    0
  ) === Object.keys(secondObj).length;

/*function compareObjects(firstObj, secondObj) {
  const ordered = (obj) =>
    Object.keys(obj)
      .sort()
      .reduce((acc, el) => {
        acc[el] = obj[el];
        console.log(acc);
        return acc;
      }, {});
  const sortFirstObj = ordered(firstObj);
  const sortSecondObj = ordered(secondObj);
  return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
    }
*/
