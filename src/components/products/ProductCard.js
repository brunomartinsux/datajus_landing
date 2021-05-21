import React from 'react'

function ProductCard (props) {

    const {title, subtitle} = props

    return (
        <div className="product-card-container slide-in-left">
            {props.children}
            <h1 className="product-card-title">{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default ProductCard