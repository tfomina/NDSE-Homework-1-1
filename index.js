#!/usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const options = yargs(hideBin(process.argv))
  .options({
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
    add: {
      describe: "Получение даты в будущем",
    },
    sub: {
      describe: "Получение даты в прошлом",
    },
  })
  .help().argv;

const date = new Date();

if (options.year || options.y) {
  console.log(date.getFullYear());
}
if (options.month || options.m) {
  console.log(date.getMonth() + 1);
}
if (options.date || options.d) {
  console.log(date.getDate());
}

// Получение даты в будущем
if (options.add) {
  if (options.year || options.y) {
    console.log(
      new Date(date.setFullYear(date.getFullYear() + options.y)).getFullYear()
    );
  }

  if (options.month || options.m) {
    console.log(
      new Date(date.setMonth(date.getMonth() + options.m)).getMonth() + 1
    );
  }

  if (options.date || options.d) {
    console.log(new Date(date.setDate(date.getDate() + options.d)).getDate());
  }
}

// Получение даты в прошлом
if (options.sub) {
  if (options.year || options.y) {
    console.log(
      new Date(date.setFullYear(date.getFullYear() - options.y)).getFullYear()
    );
  }

  if (options.month || options.m) {
    console.log(
      new Date(date.setMonth(date.getMonth() - options.m)).getMonth() + 1
    );
  }

  if (options.date || options.d) {
    if (options.date || options.d) {
      console.log(new Date(date.setDate(date.getDate() - options.d)).getDate());
    }
  }
}
console.log(date);
