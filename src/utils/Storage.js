const getAuthToken = ({ name }) => localStorage.getItem(name);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAuthToken,
};
