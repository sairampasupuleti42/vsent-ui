export namespace Inventory {
    export interface Product {
        id: number;
        name: string;
        image?: string;
    }
    export interface Variant {
        id: number;
        name: string;
        product:any;
        per_case?:string;
        price?: string;
        quantity?: string;
        cgst?: string;
        igst?: string;
        cess?: string;
        margin?: string;
    } 
}
