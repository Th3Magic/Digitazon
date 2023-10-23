import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [mainImage, setMainImage] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        async function get() {
            let response = await fetch("https://dummyjson.com/products/" + productId)
            response = await response.json()
            setProduct(response)
            setMainImage(product.thumbnail)
        }
        get()
    }, [productId, product.thumbnail])

    return (
        <>
            <button className='back-btn' onClick={() => navigate("/")}>
                🔙
            </button>
            <title>{product.title}</title>
            <section id="product-info">
                <div class="item-image-parent">
                    <div class="item-list-vertical">
                        {product.images && product.images.map((image, i) =>
                            <div class="thumb-box">
                                <img src={image} alt="thumbnail" onClick={() => setMainImage(product.images[i])} />
                            </div>)}
                    </div>
                    <div class="item-image-main">
                        <img src={mainImage} alt="" />
                    </div>
                </div>
                <div class="item-info-parent">
                    <div class="main-info">
                        <h4>{product.title}</h4>
                        <div class="star-rating">
                            <div className='stars'>
                                {product.rating && Array(Math.floor(product.rating))
                                    .fill()
                                    .map((_, i) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                            <p>Price: <span id="price">${product.price}</span></p>

                        </div>
                        <div class="select-items">
                            <div class="change">
                                <label><b>Customize:</b></label><br />
                                <select>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>
                            </div>
                            <div class="description">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <div className='other'>

            </div>
        </>
    )
}