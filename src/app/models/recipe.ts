
export class Recipe {
    id: string;
    name: string;
    components: Component[];
}

export class Component {
    liquid: string;
    amount: number;
    units: Units;
}

export enum Units {
    Milliliters = 'mL',
    Shot = 'shot'
}
