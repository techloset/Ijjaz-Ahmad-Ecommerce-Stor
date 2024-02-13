
export type RootStateProduct = {
    redux: {
        products: [];
    };
}
export type CartItem = {
    [key: string]: any;
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
    category?: string,
    amounts?: number,
}
export type RootStateCart = {
    cart: {
        cart: CartItem[];
    };
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
    amount?: number,
    total_price?: number,
}

export type SingleProductState = {
    singleProduct: CartItem;
}
export type ProductState = {
    product: {
        isLoading: boolean;
        products: CartItem[];
        isError: boolean;
        categories: string[];
    };
}
export type SingleState = {
    singleProduct: CartItem;
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
