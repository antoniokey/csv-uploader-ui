import axios from 'axios';

export const configAxios = (): void => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
};
