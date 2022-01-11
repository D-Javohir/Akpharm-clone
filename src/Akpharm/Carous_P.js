import React, { useEffect } from 'react'
import { useState } from 'react';
import './Carous_P.css'
import axios from "axios";
// import Carous_item from './Carous_item';
import { Link } from 'react-router-dom';
import './Kategor.css'

import Slider from "react-slick";

const Carous_P = () => {

    const [myArr, setMyArr] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetData()
    }, [])

    const GetData = () => {
        setLoading(true);
        axios.get('https://api.akpharm.uz/api/v1/category-list/?lan=uz')
            .then(res => {
                setMyArr(res.data);
                setLoading(false);

            })
    }

    console.log(myArr);



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background:"blue",borderRadius:"10px", position: "absolute", right: "30%", transform: 'scale(1.3)' }}



                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background:"blue",borderRadius:"10px", position: "absolute", left: "30%", zIndex: "1000", transform: 'scale(1.3)' }}
                onClick={onClick}
            />
        );
    }

    const [imageindx, setimageIndx] = useState(0)

    const SliderSettings = {

        centerMode: true,
        centerPadding: 0,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setimageIndx(next),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <>
            <section id={'categor'}>
                <div className="container-flued flues">
                    <div className="row">
                        <div className="col-12">
                            <h2>Akpharmdagi mahsulotlar katalogi</h2>
                        </div>

                    </div>
                    <div className="carous_bb">
                        {loading ? <div className="loader"></div> : <>
                            <Slider {...SliderSettings} >

                                {myArr.map((item, index) => (
                                    <div className={index === imageindx ? "slide slideActive" : "slide"}>
                                        <img src={item.image}></img>
                                        <Link className="linksss" to={"/Kategory"}>{item.name}</Link>
                                    </div>
                                ))}

                            </Slider>
                        </>}
                    </div>


                    <div className="row mt-5 mb-2">
                        <div className="col-12 text-center">
                            <Link className="links_but" to={"/Kategory"}>Barcha maxsulotlar</Link>
                        </div>
                    </div>




                </div>
            </section>
        </>
    );
}
export default Carous_P;