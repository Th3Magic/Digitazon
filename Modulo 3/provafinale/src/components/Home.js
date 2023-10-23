import { useState, useEffect } from 'react'
import Product from "./Product"
import Header from './Header'
import NavBar from './NavBar'

export default function Home() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function get() {
            let productsResponse = await fetch("https://dummyjson.com/products")
            productsResponse = await productsResponse.json()
            setProducts(productsResponse.products)
            let categoriesResponse = await fetch("https://dummyjson.com/products/categories")
            categoriesResponse = await categoriesResponse.json()
            setCategories(categoriesResponse)
        }
        get()
    }, [])

    useEffect(() => {
        let newTotalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        setTotalPrice(newTotalPrice)
    }, [cart])

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (categories.indexOf(searchQuery.toLowerCase()) > -1) {
            async function get() {
                let productsByCategory = await fetch("https://dummyjson.com/products/category/" + searchQuery)
                productsByCategory = await productsByCategory.json()
                setSearchResults(productsByCategory.products)
            }
            get()
        } else {
            let filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setSearchResults(filteredProducts)
        }
    }, [searchQuery, products, categories])

    function increaseQuantity(item) {
        let updatedCart = cart.map(product => {
            if (item.id === product.id) {
                item.quantity += 1;
            }
            return product
        })
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    function decreaseQuantity(item) {
        if (item.quantity === 1) {
            let updatedCart = cart.filter(product => item.id !== product.id)
            setCart(updatedCart)
            localStorage.clear()
        } else {
            let updatedCart = cart.map(product => {
                if (item.id === product.id && item.quantity > 1) {
                    item.quantity -= 1
                }
                return product
            })
            setCart(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    }

    return (
        <>
            <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <NavBar categories={categories} setSearchQuery={setSearchQuery} />
            <div className='home'>
                {searchQuery === '' ? <div className="home__row">
                    {products.map(product => <Product product={product} cart={cart} setCart={setCart} />)}
                </div> : searchResults.map(product => <Product product={product} cart={cart} setCart={setCart} />)}
                {totalPrice > 0 && <div className='cart'>
                    <h2>Cart</h2>
                    {cart.map(item =>
                        <div className="item">
                            <h3>{item.title}</h3>
                            <img src={item.thumbnail} alt="" />
                            <button onClick={() => increaseQuantity(item)}>+</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => decreaseQuantity(item)}>-</button>
                            <span>{item.price * item.quantity}$</span>
                        </div>)}
                    <br></br>
                    <div class="cart-total">
                        <span>Total: {totalPrice}$</span>
                        <button className='checkout'>Checkout</button>
                    </div>
                </div>}
            </div>
        </>
    )
}
