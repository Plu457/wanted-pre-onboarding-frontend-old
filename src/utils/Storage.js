const getAuthToken = ({ name }) => localStorage.getItem(name);

const setAuthToken = ({ name, value }) => localStorage.setItem(name, value);

const deleteAuthToken = ({ name }) => localStorage.removeItem(name);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAuthToken,
  setAuthToken,
  deleteAuthToken,
};
