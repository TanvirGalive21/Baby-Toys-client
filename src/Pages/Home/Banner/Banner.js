import { Container, Typography } from '@material-ui/core';
import React from 'react';
import banner1 from '../../../images/banner/slider1.jpg'
import banner2 from '../../../images/banner/slider2.jpg'
import banner3 from '../../../images/banner/slider3.jpg'
import Carousel from 'react-material-ui-carousel';

const carouselData = [
    {
        img: banner1,
        titleText: 'Your Baby Deverves',
        slugText: 'The Best Care',
        textPosition: 'left'
    },
    {
        img: banner2,
        titleText: 'Keep a Baby',
        slugText: 'Soft Skin Safe',
        textPosition: 'right' 
    },
    {
        img: banner3,
        titleText: 'Your Child is in',
        slugText: 'Carering in Ypur Hand',
        textPosition: 'right'
    },
]
const Banner = () => {
    return (
        <Carousel
            animation="slide"
            indicators={false}
        >
            {
                carouselData.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};
const CarouselItem = ({ item }) => {
    const { img, titleText, slugText, textPosition } = item
    const bannerStyle = {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    }
    const slugStyle = {
        background: '#FC82BD',
        display: 'inline-block',
        borderLeft: '3px solid #F2184F',
        borderRight: '3px solid #F2184F',
        borderRadius: 40,
        padding: '0 20px',
        marginBottom: 10,
        fontSize: 'calc(2.5vmax + 20px)'
    }

    return (
        <section style={bannerStyle}>
            <Container style={{ textAlign: textPosition }}>
                <Typography style={{ fontSize: 'calc(5vmax + 40px)', color: 'skyBlue' }} variant="h1">{titleText}</Typography>
                <Typography variant="h3" style={slugStyle}>{slugText}</Typography>
                <Typography style={{ fontSize: 'calc(1vmax + 10px)' }} variant="body1">
                    Toys are the most favourite of kids. They always love to play with toys. <br />
                    We cannot find any kind who does not love toys.
                </Typography>
            </Container>
        </section>
    )
}
export default Banner;