export interface ICoreResponse<T> {
  message: string;
  result: T;
  status: number;
}
