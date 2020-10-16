// TODO A mettre là où c'est utilisé (1 seule fois) ?
export const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
