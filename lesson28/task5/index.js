const shmoment = (initValue) => {
  let result;
  const calc = {
    add(arg, initValue) {
      switch (arg) {
        case "years":
          let year1 = new Data(initValue).getFullYear();
          let year = new Data(initValue).setFullYear(year1 + value);
          result = new Date(year).getMilliseconds();
          return this;

        case "months":
          let month1 = new Date(initValue).getMonth();
          let month2 = new Date(initValue).setMonth(month1 + value);
          result = new Date(month2).getMilliseconds();
          return this;

        case "hour":
          let hour1 = new Date(initValue).getHours();
          let hour = new Date(initValue).setHours(hour1 + value);
          result = new Date(hour).getMilliseconds();
          return this;

        case "minutes":
          let minutes1 = new Date(initValue).getMinutes();
          let minutes = new Date(initValue).setMinutes(minutes1 + value);
          result = new Date(minutes).getMilliseconds();
          return this;

        case "seconds":
          let seconds1 = new Date(initValue).getSeconds();
          let seconds = new Date(initValue).setMinutes(seconds1 + value);
          let result = new Date(seconds).getMilliseconds();
          return this;

        case "milliseconds":
          let milliseconds1 = new Date(initValue).getMilliseconds();
          let milliseconds = new Date(initValue).setMilliseconds(
            milliseconds1 + value
          );
          result = new Date(milliseconds).getMilliseconds();
          return this;
      }
    },

    subtract(arg, initValue) {
      switch (arg) {
        case "years":
          let year1 = new Data(initValue).getFullYear();
          let year = new Data(initValue).setFullYear(year1 - value);
          result = new Date(year).getMilliseconds();
          return this;

        case "months":
          let month1 = new Date(initValue).getMonth();
          let month2 = new Date(initValue).setMonth(month1 - value);
          result = month[new Date(month2).getMilliseconds()];
          return this;

        case "hour":
          let hour1 = new Date(initValue).getHours();
          let hour = new Date(initValue).setHours(hour1 - value);
          result = new Date(hour).getMilliseconds();
          return this;

        case "minutes":
          let minutes1 = new Date(initValue).getMinutes();
          let minutes = new Date(initValue).setMinutes(minutes1 - value);
          result = new Date(minutes).getMilliseconds();
          return this;

        case "seconds":
          let seconds1 = new Date(initValue).getSeconds();
          let seconds = new Date(initValue).setMinutes(seconds1 - value);
          let result = new Date(seconds).getMilliseconds();
          return this;

        case "milliseconds":
          let milliseconds1 = new Date(initValue).getMilliseconds();
          let milliseconds = new Date(initValue).setMilliseconds(
            milliseconds1 - value
          );
          result = new Date(milliseconds).getMilliseconds();
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
