export function fieldReducer(initialData, action) {
  const { name, value } = action.data;
  switch (action.type) {
    case 'create': {
      return {
        ...initialData,
        [name]: value
      };
    }
    case 'update': {
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
