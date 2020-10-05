import React from 'react'
import homescreen from '../homescreen.jpg'
import { Image } from '../styles/styled-components'
import '../styles/style.css'
const Main = () => {

    return (
        <div className='main'>
            <Image src={homescreen}>
                
            </Image>
        </div>
    )
}

export default Main