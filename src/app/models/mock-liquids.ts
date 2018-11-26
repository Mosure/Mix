import { Liquid } from './liquid';
import { LiquidType } from './liquid';

export const LIQUIDS: Liquid[] = [
    { name: 'Sprite', type: LiquidType.Mixer, co2: true },
    { name: 'Coke', type: LiquidType.Mixer, co2: true },
    { name: 'Lemonade', type: LiquidType.Mixer, co2: true },
    { name: 'Cranberry Juice', type: LiquidType.Mixer, co2: true },
    { name: 'Unidentified Substance', type: LiquidType.Mixer, co2: true },
    { name: 'Vodka', type: LiquidType.Shotable, co2: false },
    { name: 'Rum', type: LiquidType.Shotable, co2: false },
    { name: 'Brandy', type: LiquidType.Shotable, co2: false },
    { name: 'Gin', type: LiquidType.Shotable, co2: false },
    { name: 'Whiskey', type: LiquidType.Shotable, co2: false },
];
