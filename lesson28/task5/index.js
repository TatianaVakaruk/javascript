const shmoment = (initValue) => {
  let result = Data.parse(initValue);
  const calc = {
    add(arg, value) {
      switch (arg) {
        case "years":
          let value1 = value * 1000 * 60 * 60 * 24 * 30 * 12;
          result = result + value1;
          return this;

        case "months":
          let month1 = value * 1000 * 60 * 60 * 24 * 30;
          result = result + month1;
          return this;

        case "days":
          let day = value * 1000 * 60 * 60 * 24;
          result = result + day;
          return this;

        case "hours":
          let hour1 = value * 1000 * 60 * 60;
          result = result + hour1;
          return this;

        case "minutes":
          let minutes1 = value * 1000 * 60;
          result = result + minutes1;
          return this;

        case "seconds":
          let seconds1 = value * 1000;
          result = result + seconds1;
          return this;

        case "milliseconds":
          let result = result + value;
          return this;
      }
    },

    subtract(arg, value) {
      switch (arg) {
        case "years":
          let year1 = value * 1000 * 60 * 60 * 24 * 30 * 12;
          result = result - year1;
          return this;

        case "months":
          let month1 = value * 1000 * 60 * 60 * 24 * 30;
          result = result - month1;
          return this;

        case "days":
          let day = value * 1000 * 60 * 60 * 24;
          result = result - day;
          return this;

        case "hours":
          let hour1 = value * 1000 * 60 * 60;
          result = result - hour1;
          return this;

        case "minutes":
          let minutes1 = value * 1000 * 60;
          result = result - minutes1;
          return this;

        case "seconds":
          let seconds1 = value * 1000;
          result = result - seconds1;
          return this;

        case "milliseconds":
          result = result - value;
          return this;
      }
    },

    result() {
      return new Date(result).toString();
    },
  };
  return calc;
};

const result1 = shmoment(new Date(2019, 3, 5)).add("years", 3).result();
console.log(result1);
