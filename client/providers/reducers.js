function _removeTag(tagToRemove, tags) {
  const tagToRemoveIndex = tags.findIndex((tag) => tag === tagToRemove);

  if (tagToRemoveIndex === -1) {
    throw Error("Couldn't find tag: " + tagToRemove);
  } else {
    tags.splice(tagToRemoveIndex, 1);
  }
}

function _addTag(tagToAdd, tags) {
  if (tags) {
    return [...tags, tagToAdd];
  } else {
    return [tagToAdd];
  }
}

export function fieldReducer(initialData, action) {
  switch (action.type) {
    case 'create': {
      const { name, value } = action.data;

      return {
        ...initialData,
        [name]: value
      };
    }

    case 'addTag': {
      initialData.tags = _addTag(action.data, initialData.tags);

      return { ...initialData };
    }

    case 'removeTag': {
      _removeTag(action.data, initialData.tags);

      return { ...initialData };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function itemReducer(initialData, action) {
  const item = action.data;

  switch (action.type) {
    case 'add': {
      return [...initialData, item];
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
