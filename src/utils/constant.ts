const ROUTES_PATH = {
  DEFAULT: '/',
  STORE_DETAIL: '/store',
  DASHBOARD_HOST: '/host',
  ABOUT: '/about',
};

const AUTH = 'auth';
const USER = 'user';
const API = 'api';

const API_ENDPOINT = {
  TOPIC_RESTAURANT: 'Topic',
  STORE_DETAIL: 'FoodStore',
  LOGIN: `${AUTH}/login`,
  REGISTER: `${AUTH}/register`,
  INFO: `${API}/${USER}/myinfo`,
};

const QUERY_KEY = {
  TOPIC_RESTAURANT: 'topicRestaurant',
  CATEGORY_OF_STORE: 'categoryOfStore',
  STORE: 'store',
};

export { ROUTES_PATH, API_ENDPOINT, QUERY_KEY };
