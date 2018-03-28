export function ExcaliburContainerRegister() {
  return function (target, propertyKey: string) {
    target[propertyKey]();
  };
}
