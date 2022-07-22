export const queryParamsToNumberOrZero = (
  params: Record<string, string | string[] | undefined>
): Record<string, number> => {
  const convertedParams: Record<string, number> = {};

  Object.keys(params).map((key) => {
    const currentValue = params[key];
    let newValue = 0;
    if (typeof currentValue === 'string') {
      const numericParam = Number(currentValue);
      if (!isNaN(numericParam)) newValue = numericParam;
    }
    convertedParams[key] = newValue;
  });

  return convertedParams;
};
