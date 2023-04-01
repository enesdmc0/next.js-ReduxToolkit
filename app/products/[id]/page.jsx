import AddBasketButton from '@/components/add-basket-button';
import {store} from "@/stores";
import {fetchProduct} from '@/stores/productsStore';

const ProductDetailPage = async ({params: {id}}) => {
    await store.dispatch(fetchProduct(id))
    const { product } = store.getState().products;
    //const {payload: product} = await store.dispatch(getProduct(id));

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <AddBasketButton product={product}/>
        </div>
    );
};

export default ProductDetailPage;
