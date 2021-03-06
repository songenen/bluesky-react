const generateOutput =(text:string, output ='0')=>{
  switch (text) {
    case ("0"):
    case ("1"):
    case ("2"):
    case ("3"):
    case ("4"):
    case ("5"):
    case ("6"):
    case ("7"):
    case ("8"):
    case ("9"):
      if (output === "0") {
        return text
      } else {
        return  output + text;
      }
    case ("."):
      if (output.indexOf(".") > -1) {return output; }
      return  output + ".";
    case "删 除":
      if (output.length === 1) {return '';}
      return output.slice(0, - 1) || '';
    case "清 空":
      return '';
    default:
      return '';
  }
}

export {generateOutput}