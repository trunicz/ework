const initial = (opacity = 0, direction = { x: 0, y: 30 }) => {
  return { opacity, x: direction.x, y: direction.y };
};

const final = (opacity = 1, direction = { x: 0, y: 0 }) => {
  return { opacity, x: direction.x, y: direction.y };
};

const transition = (delay: number, duration: number) => {
  return { delay, duration, ease: "easeInOut" };
};

export { initial, final, transition };
