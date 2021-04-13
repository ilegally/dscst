import axios, { AxiosError } from 'axios';

import { API_URL } from '../../config';
import { LikePayload, Response } from '../../interfaces';

export async function like(
   template_id: string,
   api_key: string
): Promise<Response<LikePayload>> {
   return axios
      .post<Response<LikePayload>>(
         API_URL + 'template/' + template_id + '/like',
         {},
         {
            headers: {
               'x-api-key': api_key,
            },
         }
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => ({
         success: false,
         status: err.response?.status,
         message: err.message,
      }));
}
