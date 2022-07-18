import { Validation } from "./validation";

export class Field{
  fieldName!:string;
  fieldLable!:string;
  inputType!:string;
  placeholder?:string;
  defultVal?:string;
  validation?:Validation;
  colSpan?:string;
}
