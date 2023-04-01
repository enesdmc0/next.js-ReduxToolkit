import AddBasketButton from '@/components/add-basket-button';
import Link from "next/link";
import {store} from "@/stores";
import {fetchProducts} from '@/stores/productsStore';

const Home = async () => {
    const {payload: products} = await store.dispatch(fetchProducts());

  if (!products.length) {
    return <h1>No products!</h1>
  }
  return (
    <>
      <h1>Home page</h1>
      <div className="products-wrapper">
        {products.map(product => (
            <div key={product.id} className="product">
              <h4 className="product.title">{product.title}</h4>
              <p>{product.price}</p>
              <AddBasketButton product={product} />
              <Link href={`/products/${product.id}`}>See detail</Link>
            </div>
        ))}
      </div>
    </>
  )
}

export default Home