
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
                            <ul className="d-flex ">
                                <li><a className="aaaa" onclick="dropdowns()">О компании <img
                                    src="image/Stroke 1.png" alt="" /></a>
                                    <div id="drop" className="flex-column dropdown_menu">
                                        <a onclick="dropdowns()" href="#categor">Категории товаров</a><br />
                                        <a onclick="dropdowns()" href="#partner_scrol">Партнеры</a><br />
                                        <a onclick="dropdowns()" href="#message_scrol">Контакты</a>

                                    </div>
                                </li>
                                <li><a href="#message_scrol" className="a_end aends">Оставить заявку</a></li>

                            </ul>
                        </div>


                    </nav>
                </div>
            </div>

        </header>
    );
}
export default Header;