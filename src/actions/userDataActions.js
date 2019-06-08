export default function createOrSetUserId(userId) {
  let computedUserId = userId;
  if (!computedUserId) {
    computedUserId = createUserId();
  }
  return {
    type: 'CREATE_OR_SET_USER_ID',
    payload: {
      computedUserId,
    },
  };
}

const createUserId = () => {
  const createdUserId = new Date().getTime();
  return createdUserId;
};
