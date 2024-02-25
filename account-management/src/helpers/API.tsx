import axios from 'axios';

//interface for the Helper
interface Params {
  baseUrl: string;
  auth: {
    username: string;
    password: string;
  };
  method: string;
}

const config: Params = {
  baseUrl: process.env.REACT_APP_API_URL || '',
  auth: { username: 'admin', password: '123456' },

  method: 'post',
};

export const postAPI = async (url: string, data: any): Promise<any> => {
  const postConfig = {
    ...config,
    method: 'post',
  };
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getAPI = async (url: string): Promise<any> => {
  const getConfig = {
    ...config,
    method: 'get',
  };
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}`,
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
