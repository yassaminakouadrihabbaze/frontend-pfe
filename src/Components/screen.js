import React, { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap';
import ProductService from './../services/products';
import Header from './Header';
import ProductsElements from './Products';
import { ProductButton, ProductCard, ProductImg, ProductInfo, ProductPrice, ProductTitle } from './Products/ProductsElements';

function Screen(props) {
    const [products, setProducts] = useState([]);
    const [FilterdProducts, setFilterdProducts] = useState([]);

    useEffect(async () => {
        await ProductService.getAll().then(res => {
            const _products = res.data;
            setProducts(_products);
            if (props.category === null)
                setFilterdProducts(_products);
            else
                setFilterdProducts(_products.map.filter((el) => { return el.category_id === props.category }))
        });
    }, [])

    return (
        <div>

            {FilterdProducts.map((product, index) => <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductPrice>current price:{product.prix}</ProductPrice>
                    <ProductButton>Show more details</ProductButton>
                </ProductInfo>
            </ProductCard>

            )}
            <Pagination></Pagination>


        </div>
    )
}

export default Screen
