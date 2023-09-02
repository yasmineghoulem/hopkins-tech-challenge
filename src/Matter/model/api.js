import {
  POST,
} from 'shared/utils/api';
import {
  MATTER_URL,
} from '../enums';

export const matterApi = {
  fetchMatterList: (data) => POST(`/${MATTER_URL}`, data),
};