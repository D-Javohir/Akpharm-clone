const Footer=()=>{
    return(
        <footer>
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-3 col-md-12 text-center">
                    <div className="foter_logo">
                        <img src="image/LOGO_BLUE.png" alt="" />
                        <h5>998 71 <b>208 67 84</b> </h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 ">
                    <h6>О Компании</h6>
                    <p>О нас</p>
                    <p>Почему мы?</p>
                    <p>Наши преимущества</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                    <h6>Доп информация</h6>
                    <p>Как начать работать?</p>
                    <p>Отзывы клиентов</p>
                    <p>Партнеры Akpharm</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-12 ">
                    <h6>Контакты</h6>
                    <p><a href="#!"><img src="image/cal_silver.png" alt="" />998 71 208 67 84</a></p>
                    <p> <a href="#!"><img src="image/Locationsil.png" alt="" />ул. Буюк Ипак Йули, 60, офис 87</a>  </p>
                </div>
              

            </div>
            <hr/>
            <p className="text-center bio_up">© 2021 Akpharm Distribution. Все права защищены.</p>
        </div>
    </footer>
    );
}
export default Footer;