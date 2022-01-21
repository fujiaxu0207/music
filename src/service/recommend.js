import axios from './request';

export const getTopBanner = () => axios({
    url: "banner"
});