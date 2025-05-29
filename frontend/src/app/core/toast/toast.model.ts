export type ToastType = 'success' | 'info' | 'error' | 'warning';

export enum ToastTypes {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ToastMessage {
  message: string;
  type: ToastType;
}
