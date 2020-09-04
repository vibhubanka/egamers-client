import { FC, ComponentClass } from 'react';

export type ModalPayload = Partial<{
  heading: string;
  component: FC | ComponentClass;
  props: any;
  centered: boolean;
  disableOutsideClick: boolean;
  closeBtn: boolean;
  onClose: Function;
}>;
