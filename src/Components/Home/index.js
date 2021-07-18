import React from 'react'
import Categories from '../Categories';
import Products from '../Products';
import { productData } from '../Products/data';

import { Container, Content,Banner   } from './HomeElements';


function Home() {
    
        return (
            <div>
            <Container>
                <Banner>
                    

                </Banner>
                <Content>
                
                </Content>
                
            </Container>
            <Categories></Categories>
            <Products heading='-AUCTIONS OF THE DAY-' data={productData} />
            
            </div>
        )
    
}
 
export default Home


