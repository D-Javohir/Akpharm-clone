import React, { useEffect, useState } from "react";
import axios from "axios"
import '../style/Partner.css'
import Partner_item from "./Partner_item";

const Partner = () => {

    const [myPartner, setMyPartner] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        MyPartner()
    }, [])
    const MyPartner = () => {
        setLoader(true)
        axios.get('https://api.akpharm.uz/api/v1/manufacturer-list/?per_page=8&ordering=is_home&lan=uz')
            .then(res3 => {
                setMyPartner(res3.data.results)
                setLoader(false)
            })
    }
    return (
        <section id="partner_scrol" className="partner_page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="partner_p">
                            <h3>30+ партнеров</h3>
                            <p>На сегодняшний день мы успешно сотрудничаем с более чем 300 партнерами по всему миру.</p>
                            <a href="#!">Все партнеры</a>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 partner_blok">
                        <div className="row">

                            {loader ? <div className="loader"></div> : <>
                                {myPartner.map((item, index) => (
                                    <Partner_item
                                        key={index}

                                        image={item.logo}
                                    >

                                    </Partner_item>
                                ))}</>}


                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Partner;