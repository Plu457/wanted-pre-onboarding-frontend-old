import { Constants } from 'commons';
import Storage from './Storage';

const accessToken = Storage.getAuthToken({ name: Constants.AuthTokenName });

const getHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken || null}`,
});

const getTodos = url =>
  fetch(`${Constants.BASE_URL}${url}`, {
    method: 'GET',
    headers: getHeaders(),
  });

const createTodo = ({ todo }) =>
  fetch(`${Constants.BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({ todo }),
    headers: getHeaders(),
  });

const deleteTodo = ({ id }) =>
  fetch(`${Constants.BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });

const updateTodo = ({ id, todo, isCompleted }) =>
  fetch(`${Constants.BASE_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ todo, isCompleted }),
    headers: getHeaders(),
  });

const login = ({ email, password }) =>
  fetch(`${Constants.BASE_URL}/auth/signin`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

const signUp = ({ email, password }) =>
  fetch(`${Constants.BASE_URL}/auth/signUp`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  login,
  signUp,
};
