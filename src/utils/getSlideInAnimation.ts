export const getSlideInAnimation = (direction: 'Up' | 'Right' | 'Left' | 'Down') => {
  return ['wow', 'animate__animated', `animate__slideIn${direction}`];
};
