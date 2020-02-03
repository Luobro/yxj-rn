import _ from 'lodash';
import { BASE_URL } from './constants';
import superagent from 'superagent';

function parseRes (res) {
  if (res.statusCode !== 200) throw new Error('网络请求错误！');
  if (res.body.response_status !== 'success') throw new Error(`请求错误：${res.body.response_status}`);
  return res.body.info.data;
}

export const getPromotionList = (type, page) => superagent
  .get(`${BASE_URL}/Promotion/getTabList`)
  .query({ type, page })
  .then(parseRes);
