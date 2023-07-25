import { OutPutType, print } from "../helpers/print.js";
export default class Exception extends Error {
  constructor(message) {
    super(message); //call the constructor of parent class(Exceptions)
    print(message, OutPutType.ERROR);
  }
}
