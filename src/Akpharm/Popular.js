import React, { useEffect, useState } from "react";
import axios from "axios"
import Popular_item from "./Popular_item";
const Popular = () => {

    const [mypop, setMypop] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        GetPopular()
    }, [])
    const GetPopular = () => {

        setLoader(true)

        axios.get('https://api.akpharm.uz/api/v1/review-list/?lan=uz')
            .then(res1 => {
                setMypop(res1.data)

                setLoader(false)
            })

    }
    return (
        <section className="section_one section_popular">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Отзывы наших клиентов</h2>

                    </div>

                </div>


                <div className="row">

                    {loader ? <div className="loader"></div> : <>
                        {mypop.map((item, index) => (
                            <Popular_item key={index}
                                name={item.author}
                                comment={item.comment}
                                img1={item.image}
                                workplace={item.workplace}
                            >


                            </Popular_item>
                        ))}

                    </>}
                </div>





            </div>
        </section>
    );
}
export default Popular;