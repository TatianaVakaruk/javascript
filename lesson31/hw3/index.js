export const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout((data1) => {
      resolve(data1);
    }, time);
  });
};
delay(3000).then(() => console.log("Done"));
