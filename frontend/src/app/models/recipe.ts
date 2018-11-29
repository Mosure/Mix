import { Liquid } from './liquid';

export class Recipe {
    id: string;
    name: string;
    components: Component[];
}

export class Component {
    liquid: Liquid;
    milliliters: number;
}
