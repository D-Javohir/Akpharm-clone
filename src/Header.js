import React, { useState } from 'react'
import './Header.css'
const Header = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const minute = d.getMinutes();
    const hour = d.getHours();
    const secund = d.getSeconds();

    const [s, setS] = useState(0);
    const [dd, setDD] = useState(0);
    const [f, setF] = useState(0);
    const [yoshi, setYoshi] = useState();
    const [oyi, setOyi]=useState();
    const [kuni, setKuni]=useState(0)
    console.log(secund);
    
    const MyFunc = () => {
        
        setKuni((year - f)*365+((30*dd)-(30-s)))
      
        setOyi(((year - f)*12)-dd)
        setYoshi(year - f)
    }
    return (
        <div>
            <div className={'Input_block'}>
                <div className={'Text_h1'}>
                    <h1>
                        Tug'ilganizdan buyon qancha vaqt sarflaganingizni bilib oling!
                    </h1>
                    <p>Buning uchun siz tug'ilgan kun, oy va yilingizni sonlarda kiriting.

                    </p>
                </div>
                <div className={'inputs'}>
                    <input placeholder="tug'ilgan kun" onChange={(e) => setS(e.target.value)}></input>

                </div>
                <div className={'inputs'}>
                    <input placeholder="oy" onChange={(e) => setDD(e.target.value)}></input>
                </div>
                <div className={'inputs'}>
                    <input placeholder='yil' onChange={(e) => setF(e.target.value)}></input>

                </div>
                <div className={'Button_B'}>
                    <button onClick={() => MyFunc()}>Hisobla</button>
                </div>
            </div>
            <div className={'Input_block Inputs_B'}>
                <div className={'Text_h1'}>
                    <p>
                        Siz hozir {yoshi} yoshdasiz va sizda
                    </p>
                </div>
                <div className={'resul'}>
                    <h3>{kuni}</h3>
                    <p>kun</p>
                </div>
                <div className={'resul'}>
                    <h3>{oyi+1}</h3>
                    <p>oy</p>

                </div>
                <div className={'resul'}>
                    <h3>{year}</h3>
                    <p>soat</p>

                </div>
                <div className={'resul'}>
                    <h3>{year}</h3>
                    <p>minut</p>

                </div>

            </div>
        </div>
    );
}
export default Header;