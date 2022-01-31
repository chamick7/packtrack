import React from 'react'

import Header from '../../components/menu/header.component'
import FirstHome from '../../components/้home/first-home.component'
import SecondHome from '../../components/้home/second-home.component'
import ThirdHome from '../../components/้home/third-home.component'
import FourHome from '../../components/้home/four-home.component'
import FiveHome from '../../components/้home/five-home.component'
import Footer from '../../components/menu/footer.component'

const HomePage = () => {
    return (
        <>
        <Header/>
        <div>
            <div><FirstHome /><SecondHome /><ThirdHome /><FourHome /><FiveHome /><Footer /></div>
        </div>
        </>
    )
}

export default HomePage
