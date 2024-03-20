import axios from 'axios';

export interface CustomAxiosResponse {
  code: number;
  data: object;
  msg: string;
}

// export interface Post {
//   (url: string, data: object): Promise<AxiosResponse<CustomAxiosResponse>>;
// }

declare module 'axios' {
  export interface AxiosRequestConfig {
    loading?: object | boolean;
  }

  export interface AxiosInstance {
    get(url: string, config?: AxiosRequestConfig): Promise<CustomAxiosResponse>;
    post(url: string, data: any, config?: AxiosRequestConfig): Promise<CustomAxiosResponse>;
  }
}
