import axios from 'axios';
import baseURL from '../shared/baseUrl';

export default axios.create({
  baseURL,
});