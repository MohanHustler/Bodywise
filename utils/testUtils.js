export const getElementBydataKey = (dataKey, component) => {
  return component.find(`[data-test='${dataKey}']`);
};
