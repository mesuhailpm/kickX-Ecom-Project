import React from 'react'
import products from '../../lib/products'
import styles from '../../Style Modules/ClientProducts.module.css'

const ClientProducts = () => {
    console.log(products.shoes[0])
        const {details, images, name, price, maxPrice, sizes, description} = products.shoes[0]
  return (
    <div>ClientProducts
        {products.shoes.length},
{products.shirts.length}
        <div className={styles.card}>
            <img src={images[0]} alt="" />
            <div className={styles.information}>
                <p className={styles.name}>{name}</p>
                <div className={styles.priceSection}>

                    <p>
                    {`₹ ${price}`}
                    </p>
                    <span>
                    {`₹ ${maxPrice}`}
                    </span>

                </div>

            </div>
        </div>

    </div>
  )
}

export default ClientProducts