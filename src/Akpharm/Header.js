
import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className=" sal " id="header_scrol">
            <div className="container">
                <div className="row">

                    <nav className="d-flex  align-items-center">

                        <div id="logo"><Link to={"/"} className="logo_icon"><img
                            src="image/Group 10085.png" alt="logo" id="logo" /></Link></div>

                        <div id="logo1"><a href="#main_page_scrol" className="logo_icon"><img
                            src="image/LOGO_BLUE.png" alt="logo" id="logo1" /></a></div>


                        <div className="one_ul">
                            <ul className="d-flex justify-content-between">
                                <li><a href="#o_kompani">О компании</a></li>
                                <li><a href="#categor">Категории товаров</a></li>
                                <li><a href="#partner_scrol">Партнеры</a></li>
                                <li><a href="#message_scrol">Контакты</a></li>
                                <li><a href="#message_scrol" className="a_end btn btn-light ">Оставить
                                    заявку</a></li>
                            </ul>
                        </div>


                        <div className="ul_two">
                           
                            <div className="dropdown">
                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Menu
                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#o_kompani">О компании </a>
                                    <a className="dropdown-item" href="#categor">Категории товаров</a>
                                    <a className="dropdown-item" href="#partner_scrol">Партнеры</a>
                                    <a className="dropdown-item" href="#message_scrol">Контакты</a>

                                </div>
                            </div>
                        </div>


                    </nav>
                </div>
            </div>

        </header>
    );
}
export default Header;