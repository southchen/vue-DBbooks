import axios from 'axios';
const getReview = axios.create({
  method: 'get',
  baseURL: 'http://localhost:5000/new',
});
export default getReview;
