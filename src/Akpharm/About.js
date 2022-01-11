const About = () => {
    return (
        <div className="container ">
            <div id="o_kompani" className="row about_page">
                <div className="col-lg-7 col-md-6 image_busines">
                    <div className="image_busines">
                        <img src="image/doctor-nurse-discussing-digital-tablet.png" alt="" className="img_1" />
                        <img src="./image/team-doctors-smiling-conference-room.png" alt="" className="img_2" />
                    </div>

                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">

                    <div className="about_tex">
                        <h2>О компании</h2>
                        <p>Компания Akpharm – компания, в основе которой лежат доверительные, честные отношения с партнёрами
                            и сотрудниками. Мы строим свой бизнес, опираясь на ценности и традиции, которые не менялись с
                            основания компании. Нам важно разделять
                            свой успех с людьми, занимающимися общим с нами делом. Своё развитие мы видим в совместном
                            решении задач, которые встают перед нами и нашими клиентами.</p>
                        <div className="numbers d-flex justify-content-between">
                            <div>
                                <h4 id="number_charat">340</h4>
                                <span>Сотрудников</span>
                            </div>
                            <span className="ciziq"></span>
                            <div>
                                <h4 id="number_charat">180</h4>
                                <span>Поставщиков</span>
                            </div>
                            <span className="ciziq"></span>

                            <div className="text-center">
                                <h4 id="number_charat">600</h4>
                                <span>Клиентов</span>
                            </div>

                        </div>
                    </div>

                </div>
                
                <div className="col-lg-7 col-md-12 image_busines_2 ju">

                    <div className="image_busines_2 ">
                        <img src="image/doctor-nurse-discussing-digital-tablet.png" alt="" className="img_1 "/>
                        <img src="./image/team-doctors-smiling-conference-room.png" alt="" className="img_2"/>
                        </div>
                    </div>
                </div>

                <div className="row about_tex about_page_two">
                    <div className="col-lg-6">
                        <h2>Почему вы должны выбрать нас?</h2>
                        <p>Быть высокотехнологичной компанией, обеспечивать выгодное взаимодействие между производителем и
                            аптеками за счет проявления гибкости и предоставления исключительного сервиса, внося свой посильный
                            вклад в повышение качества Жизни населения
                            Узбекистана.
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="col-6">
                                <img src="image/Tick Square.png" alt=""/>
                                <h5>Собственная клиника</h5>
                                <p>Основана в 2003 году и ежегодно лечит более 1 000 пациентов </p>
                            </div>
                            <div className="col-6">
                                <img src="image/Tick Square.png" alt="icon"/>
                                <h5>Сеть аптек</h5>
                                <p>Более 150 аптек по Республике Узбекистан</p>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_image flex-column d-md-flex">
                            <div className="">
                                <img src="image/749 (image).png" alt="png"/>

                            </div>
                            <div className="">
                                <img src="image/873 (image).png" alt="png"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );              
}
 export default About;           