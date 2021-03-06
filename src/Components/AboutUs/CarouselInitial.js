import React, { useState, useEffect } from 'react';
import NTF from '../../assets/about/NFT.svg'
import ArrowLeft from '../../assets/about/ArrowLetf.png'
import ArrowRigth from '../../assets/about/ArrowRigth.png'
import Magic from '../../assets/about/Magic.png'
import Monster from '../../assets/Moster.png'
import {
    ArrowCarousel,
    ImagNFT,
    ContainerCarousel,
} from './styles'

export function CarouselInitial() {
    const poster = [Magic, Monster];
    const [n, setN] = useState(0)
    const [position, setPosition] = useState(true)

    function carousel() {
        if (n === 0) {
            setN(1)
        } else if (n === 1) {
            setN(0)
        }
    }
    const route = window.location.pathname
    

    useEffect(()=>{
        route ==='/contact' ? setPosition(true) : setPosition(false)
    }, [route])
    

    return (
        <div>
            <ImagNFT Position={position} >
                <img src={NTF} alt="nfc" />
            </ImagNFT>

            <ContainerCarousel>
                <ArrowCarousel onClick={carousel}>
                    <img src={ArrowLeft} alt="arrow Left" />
                    <img src={ArrowRigth} alt="arrow Rigth" />
                </ArrowCarousel>

                <img src={poster[n]} alt="magic" />
            </ContainerCarousel>
        </div>
    )
}