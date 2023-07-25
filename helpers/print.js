import chalk from "chalk";

class OutPutType {
  static INFORMATION = "INFORMATION";
  static SUCCESS = "SUCCESS";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
}

const print = (message, type) => {
  switch (type) {
    case OutPutType.INFORMATION:
      console.log(chalk.blue(message));
      break;
    case OutPutType.SUCCESS:
      console.log(chalk.green(message));
      break;
    case OutPutType.WARNING:
      console.log(chalk.yellow(message));
      break;
    case OutPutType.ERROR:
      console.log(chalk.red(message));
      break;
    default:
      console.log(chalk.red(message));
  }
};

export { OutPutType, print };
