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
console.log(date);
