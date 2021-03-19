import React from 'react'
import './products.css'
import IconActivity from '../../Icons/activity'
import ProductCard from './ProductCard'
import IconUsers from '../../Icons/users'
import IconCheck from '../../Icons/check-square'

import JSON from './productstext'

function Products () {



    return(
            <div id="prd-container" className="prd-container">
                <div className="prd-list">
                    <ProductCard title={JSON.produto1.titulo} subtitle={JSON.produto1.subtitulo}>
                        <IconUsers/>
                    </ProductCard>
                    <ProductCard title={JSON.produto2.titulo} subtitle={JSON.produto2.subtitulo}>
                        <IconActivity/>
                    </ProductCard>
                    <ProductCard title={JSON.produto3.titulo} subtitle={JSON.produto3.subtitulo} >
                        <IconCheck/>
                    </ ProductCard>
                </div>
            </div>

    )
}

export default Products