import request from 'axios';
import {ErrorType} from '../types/types';
import {HTTP_CODES} from '../utils/const';

import {toast} from 'react-toastify';


export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODES.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODES.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HTTP_CODES.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  }
};
