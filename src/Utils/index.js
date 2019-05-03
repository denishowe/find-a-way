const random = (min, max) => Math.floor(min + (max - min + 1) * Math.random());

const ucFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

export { random, ucFirst };
