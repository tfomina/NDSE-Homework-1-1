#!/usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const OPTIONS = {
  year: {
    alias: "y",
    describe: "Текущий год",
  },
  month: {
    alias: "m",
    describe: "Текущий месяц",
  },
  date: {
    alias: "d",
    describe: "Дата в календарном месяце",
  },
};

const date = new Date();
const options = yargs(hideBin(process.argv))
  .options(OPTIONS)
  .command(
    "add [year]|[month]|[day]",
    "Получение даты в будущем",
    OPTIONS,
    (options) => {
      let newDate = "";
      if (options.year || options.y) {
        newDate = date.setFullYear(date.getFullYear() + options.y);
      }

      if (options.month || options.m) {
        newDate = date.setMonth(date.getMonth() + options.m);
      }

      if (options.date || options.d) {
        newDate = date.setDate(date.getDate() + options.d);
      }

      if (!newDate) process.exit(-1);

      console.log(`Дата в будущем: ${new Date(newDate).toISOString()}`);
      process.exit(-1);
    }
  )
  .command(
    "sub [year]|[month]|[day]",
    "Получение даты в прошлом",
    OPTIONS,
    (options) => {
      let newDate = "";
      if (options.year || options.y) {
        newDate = date.setFullYear(date.getFullYear() - options.y);
      }

      if (options.month || options.m) {
        newDate = date.setMonth(date.getMonth() - options.m);
      }

      if (options.date || options.d) {
        newDate = date.setDate(date.getDate() - options.d);
      }

      if (!newDate) process.exit(-1);

      console.log(`Дата в прошлом: ${new Date(newDate).toISOString()}`);
      process.exit(-1);
    }
  )
  .help().argv;

if (options.year || options.y) {
  console.log(`Текущий год: ${date.getFullYear()}`);
}
if (options.month || options.m) {
  console.log(`Текущий месяц: ${date.getMonth() + 1}`);
}
if (options.date || options.d) {
  console.log(`Дата в календарном месяце: ${date.getDate()}`);
}

// Если не передано никаких аргументов, возвращаем текущую дату
if (Object.keys(options).length === 2) {
  console.log(date);
}
