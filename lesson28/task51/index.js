const date = new Date();
const getDateFunctions = {
  years: date.getFullYear,
  months: date.getMonth,
  days: date.getDate,
  hours: date.getHours,
  minutes: date.getMinutes,
  seconds: date.getSeconds,
  milliseconds: date.getMilliseconds,
};

const setDateFunctions = {
  years: date.setFullYear,
  months: date.setMonth,
  days: date.setDate,
  hours: date.setHours,
  minutes: date.setMinutes,
  seconds: date.setSeconds,
  milliseconds: date.setMilliseconds,
};

export const shmoment = (initialDate) => {
  const resultDate = new Date(initialDate);

  return {
    _makeOperation(value, operation, funcs) {
      if (operation === "+") {
        funcs[1].call(resultDate, funcs[0].call(resultDate) + value);
      } else if (operation === "-") {
        funcs[1].call(resultDate, funcs[0].call(resultDate) - value);
      }
    },
    _selectTypeOperation(type, value, operation) {
      this._makeOperation(value, operation, [
        getDateFunctions[type],
        setDateFunctions[type],
      ]);
    },
    add(type, value) {
      this._selectTypeOperation(type, value, "+");
      return this;
    },
    subtract(type, value) {
      this._selectTypeOperation(type, value, "-");
      return this;
    },
    result() {
      return new Date(resultDate);
    },
  };
};
