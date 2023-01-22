export const isProd = process.env.NODE_ENV === 'production';

export const API_URL = isProd ? process.env.REACT_PUBLIC_API_URL : 'http://localhost:80';
