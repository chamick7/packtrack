import React from 'react'

import Header from '../../components/menu/header.component'
import FirstHome from '../../components/้home/first-home.component'
import SecondHome from '../../components/้home/second-home.component'

const HomePage = () => {
    return (
        <>
        <Header/>
        <div>
            <div><FirstHome /><SecondHome /></div>
        </div>
        </>
    )
}

export default HomePage
