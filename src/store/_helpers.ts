interface AsyncType {
  [key: string]: {
    START: string;
    SUCCESS: string;
    ERROR: string;
  };
}

export const asyncTypes = (typeName: string, prefix?: string): AsyncType => {
  const name = prefix ? prefix + '_' + typeName : typeName;
  return {
    [typeName]: {
      START: `${name}_START`,
      SUCCESS: `${name}_SUCCESS`,
      ERROR: `${name}_ERROR`,
    },
  };
};
