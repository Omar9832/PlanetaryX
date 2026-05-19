declare module 'expo-barcode-generator' {
  import * as React from 'react';

  export interface BarcodeProps {
    value: string;
    type?: 'code128' | 'code39' | 'ean13' | 'upc';
    width?: number;
    height?: number;
  }

  export const Barcode: React.FC<BarcodeProps>;
}
