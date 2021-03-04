import React from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Header from './BT1Header'
import BT1Laptop from './BT1Laptop'
import BT1ProductList from './BT1ProductList'
import BT1Promotion from './BT1Promotion'


export default function BaiTapLayOut1() {
    return (
        <div>
            {/* Header  */}
            <BT1Header/>
            <BT1Carousel/>
            <BT1ProductList></BT1ProductList>
            <BT1Laptop/>
            <BT1Promotion/>
        </div>
    )
}
