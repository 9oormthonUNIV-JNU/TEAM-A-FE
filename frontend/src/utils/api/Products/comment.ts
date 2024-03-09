import { api } from '../../customAxios';
import { getAuthToken } from '../../tokenHandler';

const token = getAuthToken();
const headers = {
  Authorization: token,
};

export async function postFundingComment(data: any) {
  const result = await api.post('/comment', data, { headers });
  return result;
}
