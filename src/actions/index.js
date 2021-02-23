import * as c from './ActionTypes';

export const addTap = (newTap) => {
  const { name, brand, price, alcoholContent, pintQuantity, id } = newTap;
  return {
    type: c.ADD_TAP,
    name,
    brand,
    alcoholContent,
    pintQuantity,
    price,
    id
  }
}

export const deleteTap = (id) => {
  return {
    type: c.DELETE_TAP,
    id
  }
}

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM
  }
}

export const selectTap = (selectedTap) => {
  return {
    type: c.SELECT_TAP,
    selectedTap
  }
}

export const deselectTap = () => {
  return {
    type: c.DESELECT_TAP
  }
}

export const pourAPint = (newTap) => {
  const { name, brand, price, alcoholContent, pintQuantity, id } = newTap;
  return {
    type: c.POUR_PINT,
    name,
    brand,
    alcoholContent,
    pintQuantity: (pintQuantity-1).toString(),
    price,
    id
  }
}

export const restockTap = (newTap) => {
  const { name, brand, price, alcoholContent, pintQuantity, id } = newTap;
  return {
    type: c.RESTOCK_TAP,
    name,
    brand,
    alcoholContent,
    pintQuantity: "124",
    price,
    id
  }
}

export const toggleEditing = () => {
  return {
    type: c.TOGGLE_EDITING
  }
}