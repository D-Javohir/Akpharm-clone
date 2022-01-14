import React, { useState, useEffect } from 'react';
import ReactPhoneInput from "react-phone-input-2";


const PhoneInput = (props) => {
    const [phone, setPhone] = useState('');
    const [phoneuz, setPhoneuz] = useState('');

    const [h, setH] = useState(1);

    return (<>
        <label className="mt-3">Kz phone number</label>

        <ReactPhoneInput
            value={phone}
            onChange={phone => {
                if (phone.length > 1) {
                    setPhone(phone);
                } else {
                    if (h == 1) {
                        setPhone('+7');
                        setH(2);
                    } else {
                        setPhone('7');
                        setH(1);
                    }
                }
                console.log(phone);
            }}
            inputExtraProps={{
                name: "phone",
                required: true,
                autoFocus: true
            }}
            country={"kz"}
            onlyCountries={["kz"]}
            masks={{ kz: ' (...) ...-..-..' }}
            placeholder={'+7 (___) ___-__-__'}
            autocomplete="off"
            name="phone"
            disabled={props.disabledInput ? props.disabledInput : false}
            inputClass={props.inputClass ? props.inputClass : ''}
        />
        <label className="mt-3">Uz phone number</label>
        <ReactPhoneInput
            value={phoneuz}
            onChange={phoneuz => {
                if (phoneuz.length > 3) {
                    setPhoneuz(phoneuz);
                } else {
                    if (h == 1) {
                        setPhoneuz('+998');
                        setH(2);
                    } else {
                        setPhoneuz('998');
                        setH(1);
                    }
                }
                console.log(phoneuz);
            }}
            inputExtraProps={{
                name: "Uz phone number",
                required: true,
                autoFocus: true
            }}
            country={"uz"}
            onlyCountries={["uz"]}
            masks={{ uz: ' (..) ...-..-..' }}
            placeholder={'+998 (__) ___-__-__'}
            autocomplete="off"
            name="phone"
            disabled={props.disabledInput ? props.disabledInput : false}
            inputClass={props.inputClass ? props.inputClass : ''}
        />
    </>);
}
export default PhoneInput;