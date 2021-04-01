import { useState } from "react";
export function useClassNames(...params) {
  const generateClasses = (...args) => {
    let classes = [];
    args.forEach((arg) => {
      if (!arg) return;
      let argType = typeof arg;
      if (argType === "string") {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        arg.forEach((item) => {
          classes.push(generateClasses(item));
        });
      } else if (argType === "object") {
        for (let key in arg) {
          if (arg[key]) {
            classes.push(key);
          }
        }
      }
    });
    return classes.join(" ");
  };
  const change = (...args) => {
    setClasses(generateClasses(args));
  };
  const [classes, setClasses] = useState(generateClasses(params));
  return { classes, change };
}
