import { getShoppingCart } from "../utilities/fakedb";

const cartProdutsLoder=async()=>{
const lodedProduct = await fetch ('products.json');
const products= await lodedProduct.json();

const storedcart = getShoppingCart();

const savedCart = [];

for ( const id in storedcart){
const addedProduct = products.find(pd=> pd.id===id);
if(addedProduct){
    const quantity = storedcart[id];
    addedProduct.quantity=quantity;
    savedCart.push(addedProduct)
}

}
return savedCart ;
}
export default cartProdutsLoder;