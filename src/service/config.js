const devBaseURL = "https://netease-cloud-music-api-pi-sandy.vercel.app";

const proBaseURL = "https://netease-cloud-music-api-pi-sandy.vercel.app";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;