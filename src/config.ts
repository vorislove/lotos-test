export const isProd = process.env.NODE_ENV === 'production';

export const REACT_PUBLIC_API_URL = isProd
	? 'https://lotos-test-seven.vercel.app/'
	: 'http://localhost:80';
