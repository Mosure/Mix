
export class Liquid {
    name: string;
    type: LiquidType;
    co2: boolean;
    alcohol_percentage: number;
}

export enum LiquidType {
    Shotable = "SHOTABLE",
    Mixer = "MIXER",
    Syrup = "SYRUP"
}
