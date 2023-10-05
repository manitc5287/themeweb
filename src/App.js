import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Pages/Women/main/Main';
import Arrival from "./Pages/Women/Categories/New Arrivals/Arrival"
import Sale from './Pages/Women/Categories/Sale/Sale';
import Bra from './Pages/Women/Categories/Bras/Bra';
import Panties from './Pages/Women/Categories/Panties/Panties';
import Lingerie from './Pages/Women/Categories/Lingerie/Lingerie';
import Knitwear from './Pages/Women/Categories/Knitwear/Knitwear';
import Pajamas from './Pages/Women/Categories/Pajamas/Pajamas';
import Collection from './Pages/Women/Categories/Collection/Collection';
import Gifts from './Pages/Women/Categories/Gift/Gifts';
import SingleProduct from './Pages/Women/SingleProductPage/SingleProduct';
import Login from '../src/Component/Login-Register/Login';
import Cart from './Component/Cart/Cart';
import Wishlist from './Component/Wishlist/Wishlist';
import NavListings from './Pages/Women/Categories/NavListings/NavListings';
import ScrollToTop from './ScrollToTop';
import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='new-arrivals' element={<Arrival />}></Route>
        <Route path='sale' element={<Sale />}></Route>
        <Route path='category-bras' element={<Bra />}></Route>
        <Route path='category-panties' element={<Panties />}></Route>
        <Route path='category-lingerie' element={<Lingerie />}></Route>
        <Route path='category-knitwear' element={<Knitwear />}></Route>
        <Route path='category-pajamas' element={<Pajamas />}></Route>
        <Route path='collections' element={<Collection />}></Route>
        <Route path='category-gifts' element={<Gifts />}></Route>
        <Route path='single-product' element={<SingleProduct />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='wishlist' element={<Wishlist />}></Route>
        <Route path='women/Bra/:subcategory' element={<NavListings />}></Route>
        <Route path='women/panties/:subcategory' element={<NavListings />}></Route>
        <Route path='women/pajamas/:subcategory' element={<NavListings />}></Route>
        <Route path='women/collection/:subcategory' element={<NavListings />}></Route>
        <Route path='women/knitwear/:subcategory' element={<NavListings />}></Route>
        <Route path='women/lingerie/:subcategory' element={<NavListings />}></Route>
        <Route path='women/new-arrivals/:subcategory' element={<NavListings />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;

