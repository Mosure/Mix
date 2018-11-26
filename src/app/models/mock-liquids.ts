import { Liquid } from './liquid';
import { LiquidType } from './liquid';

export const LIQUIDS: Liquid[] = [
    { name: 'Sprite', type: LiquidType.Mixer, co2: true, alcohol_percentage: 0 },
    { name: 'Coke', type: LiquidType.Mixer, co2: true, alcohol_percentage: 0 },
    { name: 'Lemonade', type: LiquidType.Mixer, co2: true, alcohol_percentage: 0 },
    { name: 'Cranberry Juice', type: LiquidType.Mixer, co2: true, alcohol_percentage: 0 },
    { name: 'Unidentified Substance', type: LiquidType.Mixer, co2: true, alcohol_percentage: 0 },
    { name: 'Vodka', type: LiquidType.Shotable, co2: false, alcohol_percentage: 40 },
    { name: 'Rum', type: LiquidType.Shotable, co2: false, alcohol_percentage: 40 },
    { name: 'Brandy', type: LiquidType.Shotable, co2: false, alcohol_percentage: 40 },
    { name: 'Gin', type: LiquidType.Shotable, co2: false, alcohol_percentage: 40 },
    { name: 'Whiskey', type: LiquidType.Shotable, co2: false, alcohol_percentage: 40 },
];
