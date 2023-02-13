import axios from "axios";
import * as commonConfig from "src/config/common";
import { apiAddress, prodApiAddress } from "src/config/endPoint";

// NOTE: 현재 개발 서버에만 api 통신이 가능하기 때문에 동일한 api로 세팅
const baseURL = commonConfig.developMode ? apiAddress : prodApiAddress;
const devParams = commonConfig.developMode
  ? {
      devKey: "p624c140-306f-11eb-adc1-0242ac120002",
      // devId: "dev-do@naver.com",
      // devUid: 3,
    }
  : {};

const axiosCreateObj = {
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 20000,
};

const request = axios.create(axiosCreateObj);

/**
 *
 * @param {*} url - string
 * @param {*} data - object
 * @returns response data
 */
export const requestPost = async (url, data) => {
  const requestData = await request.post(url, {
    ...devParams,
    ...data,
    uid: data.uid ? data.uid : -1,
  });
  console.log(url, data, requestData);
  return requestData;
};

export default request;
