import axios from './request';

export const getTopBanner = () => axios({
    url: "banner"
});

export function getHotRecommends(limit) {
    return axios({
      url: "/personalized",
      params: {
        limit
      }
    })
  }