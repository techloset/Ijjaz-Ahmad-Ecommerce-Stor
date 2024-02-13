
export type rootStateProduct = {
    redux: {
        products: [];
    };
}
export type cartItem = {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
    category?: string,
    amounts?: number,
}
export type singleproductState = {
    singleProduct: cartItem;
}
export type rootStateCart = {
    cart: {
        cart: cartItem[];
    };
}
export type rootStateSingle = {
    redux: {
        products: [];
    };
    singleProduct: singleproductState;
}
export type cartState = {
    cart: cartItem[];
    total_amount: number,
    amount?: number,
    total_price?: number,
}


export type productState = {
    product: {
        isLoading: boolean;
        products: cartItem[];
        isError: boolean;
        categories: string[];
    };
}
export type singleState = {
    singleProduct: cartItem;
    loading: boolean;
    error: string | null;
}
export type blogCardProps = {
    img: string
}
export type clientCardProps = {
    title: string,
    img: string,
}
export type dealCardProps = {
    title: string,
    img: string,
    des: string,
}
