import { Liquid } from './liquid';

export class Pump {
    id: number;
    liquid: Liquid;
    volume: number;
    level: number;
    hasCheckValve: boolean;
    enabled: boolean;
}
