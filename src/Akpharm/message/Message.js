import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Partner.css'
import ReactPhoneInput from 'react-phone-input-2'
const Message = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    // Error input
    const [errorname, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorComment, setErrorComment] = useState(false);
    const [loader, setLoader] = useState(false)
 

    //truev fontVariantAlternate
 

    const CheckPost = () => {
        let b = true;

        if (name.length < 4) {

            setErrorName(true);
            b = false;
        }
        if (phone.length != 12) {

            setErrorPhone(true);
            b = false;
        }
        if (comment.length < 10) {

            setErrorComment(true)
            b = false
        }


        if (b) {
            setLoader(true)

            axios.post('https://api.akpharm.uz/api/v1/petition-post/?lan=uz', {

                full_name: name,
                phone: phone,
                text: comment,
            })
                .then(r => {
                    setLoader(false)

                 })
                .catch(e => { 
                    setLoader(true)

                })
         
        }

  
    }
   const [h, setH]=useState()
    return (

        
        <div id="message_scrol" className="container message_page">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-6 ">

                    <h3>Оставьте заявку и мы свяжемся с Вами </h3>

                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более
                        менее осмысленного текста</p>
                    <a href="#!"><img src="image/Call.png" alt="" />998 71 208 67 84</a><br />

                    <a href="#!"><img src="image/Location.png" alt="" /> ул. Буюк Ипак Йули, 60, офис 87</a>

                </div>
                {loader? <div className="loader"></div>:  <div className="col-lg-4 col-md-6 col-sm-6 justify-content-sm-between">
                    <span>Имя Фамилия</span><br />
                    <input type="text" onChange={(e) => { setName(e.target.value); setErrorName(false) }} /><br />
                    {errorname ? <div style={{ color: "red", fontSize: "12px" }}>Ismingizni kiritmadingiz</div> : ''}
                    <span>Номер телефона</span><br />
                    
                    <ReactPhoneInput
                        value={phone}
                        onChange={phone => {
                            if (phone.length > 3) {
                                setPhone(phone);
                            } else {
                                if (h == 1) {
                                    setPhone('+998');
                                    setH(2);
                                } else {
                                    setPhone('998');
                                    setH(1);
                                }
                            }

                        }}
                        inputExtraProps={{
                            required: true,
                            autoFocus: true
                        }}
                        country={"uz"}
                        onlyCountries={["uz"]}
                        masks={{ uz: ' (..) ...-..-..' }}
                        placeholder={'+998 (__) ___-__-__'}
                        autocomplete="off"
                        name="phone"
                    />
                    {errorPhone ? <div style={{ color: "red", fontSize: "12px" }}>Nomerni To'liq yozing</div> : ''}
                    <span>Что вас интересует</span><br />
                    <input type="text" className="message_input" onChange={(e) => { setComment(e.target.value); setErrorComment(false) }} /><br />
                    {errorComment ? <div style={{ color: "red", fontSize: "12px" }}>Komment kamida 10ta harfdan iborat bo'ishi kerak</div> : ''}

                    <button onClick={() => CheckPost()}>Отправить</button>
                </div>}
               

            </div>
        </div>
    );


}
export default Message;