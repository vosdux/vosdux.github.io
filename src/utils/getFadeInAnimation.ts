export const getFadeInAnimation = (direction: 'Up' | 'Right' | 'Left' | 'Down') => {
  return ['wow', 'animate__animated', `animate__fadeIn${direction}`];
};
