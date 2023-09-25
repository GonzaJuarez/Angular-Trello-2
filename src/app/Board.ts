import {Column} from "./Column";

export interface Board{
    name: string;
    id: number;
    columns: Column[];
}
