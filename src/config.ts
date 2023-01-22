export const isProd = process.env.NODE_ENV === 'production';

export const API_URL = isProd ? 'https://lotos-test-back.onrender.com' : 'http://localhost:80';
