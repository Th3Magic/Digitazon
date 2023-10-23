import React from "react"
import { Link } from 'react-router-dom'

export default function Product({ product, cart, setCart }) {

    function addToCart() {
        let temp = JSON.parse(JSON.stringify(cart))
        let existingItem = temp.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            temp.push({ ...product, quantity: 1 })
        }
        setCart(temp)
        localStorage.setItem('cart', JSON.stringify(temp))
    }

    return (
        <div className="product">
            <div className="product__info">
                <Link to={`/product/${product.id}`} className="link" >{product.title}</Link>
            </div>

            <img src={product.thumbnail} alt="" />
            <p className="product__price">
                <span>$</span>
                <strong>{product.price}</strong>
            </p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}