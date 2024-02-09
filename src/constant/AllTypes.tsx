export type ProductType = {
    title: string;
    price: number;
    image: string;
    description: string;
    id: number;
    category: string;

}
export type RootStateProduct = {
    redux: {
        products: [];
    };
}
export type RootStateCart = {
    cart: {
        cart: CartItem[];
    };
}
export type CartItem = {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
    category: string,
    amounts: number,
}

export type RootStateSingle = {
    redux: {
        products: [];
    };
    singleProduct: SingleProductState;
}
export type CartState = {
    cart: CartItem[];
    total_amount: number,
    amount: number,
    total_price: number,
}

export type SingleProductState = {
    singleProduct: ProductType;
}
export type ProductState = {
    product: {
        isLoading: boolean;
        products: ProductType[];
        isError: boolean;
        categories: string[];
    };
}
export type SingleState = {
    singleProduct: Record<string, any>;
    loading: boolean;
    error: string | null;
}
export type BlogCardProps = {
    img: string
}
export type ClientCardProps = {
    title: string,
    img: string,
}
export type DealCardProps = {
    title: string,
    img: string,
    des: string,
}
export type CartProductAdd = {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
    category: string,
    amounts: 1
}