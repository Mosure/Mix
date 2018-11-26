import { Liquid } from './liquid';
import { LiquidType } from './liquid';

export const LIQUIDS: Liquid[] = [
    { name: 'sprite', type: LiquidType.Mixer, co2: true },
    { name: 'coke', type: LiquidType.Mixer, co2: true },
    { name: 'lemonade', type: LiquidType.Mixer, co2: true },
    { name: 'cranberry juice', type: LiquidType.Mixer, co2: true },
    { name: 'unidentified substance', type: LiquidType.Mixer, co2: true },
    { name: 'vodka', type: LiquidType.Shotable, co2: false },
    { name: 'rum', type: LiquidType.Shotable, co2: false },
    { name: 'brandy', type: LiquidType.Shotable, co2: false },
    { name: 'gin', type: LiquidType.Shotable, co2: false },
    { name: 'whiskey', type: LiquidType.Shotable, co2: false },
];
