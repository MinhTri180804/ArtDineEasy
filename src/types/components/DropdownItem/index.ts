import { ComponentType } from 'react';

export interface IDropdownItem {
  ImageRight?: string | ComponentType<React.SVGProps<SVGSVGElement>>;
  content: string;
  value: string | number;
}
