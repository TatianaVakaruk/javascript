export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reverse = arr.slice();
  return reverse.reverse();
}

export const withdraw = (clients, balances, client, amount) => {
  //put your code here

  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  } else {
    balances[index] = balances[index] - amount;
  }
  return balances[index];
};

export const getAdults = (obj) => {
  let result = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }
  return result;
  // put your code here
};
