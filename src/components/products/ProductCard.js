import React from 'react'

function ProductCard (props) {

    const {title, subtitle} = props

    return (
        <div className="product-card-container">
            {props.children}
            <h1 className="product-card-title">{title}</h1>
            <a>{subtitle}</a>
        </div>
    )
}

export default ProductCard