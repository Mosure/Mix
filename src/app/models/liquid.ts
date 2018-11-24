
export class Liquid {
    name: string;
    type: LiquidType;
    co2: boolean;
}

export enum LiquidType {
    Shotable = "SHOTABLE",
    Mixer = "MIXER",
}
