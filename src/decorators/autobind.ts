export function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const ogMethod = descriptor.value;

  const adjDescriptor = {
    configurable: true,
    get() {
      const boundFunc = ogMethod.bind(this);
      return boundFunc;
    },
  };

  return adjDescriptor;
}
