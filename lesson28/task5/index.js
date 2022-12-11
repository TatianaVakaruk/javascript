const shmoment = (initValue) => {
  let result = new Date(initValue).getMilliseconds();
  const calc = {
    add(arg, value) {
      switch (arg) {
        case "years":
          let value1 = new Date(value).getMilliseconds();
          result = result + value1;
          return this;

        case "months":
          let month1 = new Date(value).getMilliseconds();

          result = result + month1;
          return this;

        case "hour":
          let hour1 = new Date(value).getMilliseconds();
          result = result + hour1;
          return this;

        case "minutes":
          let minutes1 = new Date(value).getMilliseconds();
          result = result + minutes1;
          return this;

        case "seconds":
          let seconds1 = new Date(value).getMilliseconds();
          result = result + seconds1;
          return this;

        case "milliseconds":
          let milliseconds1 = new Date(value).getMilliseconds();
          let result = result + milliseconds1;
          return this;
      }
    },

    subtract(arg, value) {
      switch (arg) {
        case "years":
          let year1 = new Data(value).getMilliseconds();
          result = result - year1;
          return this;

        case "months":
          let month1 = new Date(value).getMilliseconds();
          result = result - month1;
          return this;

        case "hour":
          let hour1 = new Date(value).getMilliseconds();
          result = result - hour1;
          return this;

        case "minutes":
          let minutes1 = new Date(value).getMilliseconds();
          result = result - minutes1;
          return this;

        case "seconds":
          let seconds1 = new Date(value).getMilliseconds();
          result = result - seconds1;
          return this;

        case "milliseconds":
          let milliseconds1 = new Date(initValue).getMilliseconds();
          result = result - milliseconds1;
          return this;
      }
    },

    result() {
      return new Date(result);
    },
  };
  return calc;
};
const result1 = shmoment(new Date(2019, 3, 5)).add("year", 3).result();
console.log(result1);
