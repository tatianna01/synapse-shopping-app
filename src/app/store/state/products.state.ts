export interface Product {
    id: number;
    icon: string;
    name: string;
    quality: string;
    quantity: number;
    cost: number;
}
export interface ProductsStateModel {
    products: Product[];
}

export const productsState: ProductsStateModel = {
    products: [
        {
            id: 1,
            icon: 'assets/images/boot.png',
            name: 'The Chelsea Boot',
            quality: 'Black',
            quantity: 1,
            cost: 235
        },
        {
            id: 2,
            icon: 'assets/images/backpack.png',
            name: 'The Twill Snap Backpack',
            quality: 'Reverse Denim + Black leather',
            quantity: 1,
            cost: 65
        },
        {
            id: 3,
            icon: 'assets/images/tote.png',
            name: 'The Twill Zip Tote',
            quality: 'Reverse Denim + Black leather',
            quantity: 1,
            cost: 48
        },
    ]
}