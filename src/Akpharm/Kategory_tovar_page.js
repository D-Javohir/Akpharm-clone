import axios from "axios";
import { useEffect, useState } from "react";
import Kategor_item from "./Kategor_item";
import './Kategor.css'
import './Partner.css'
const Kategory_tovar_page = () => {

    const [kate_tovar, setKate_tovar] = useState([])
    const [medis, setMedis] = useState([])
    const [drug, setDrug] = useState('')
    const [loader, setLoader] = useState(false)
    const [activ, setActiv]=useState('')
    useEffect(() => {
        GetKategor();
        GetTovar();

    }, [drug])
    const GetTovar = () => {

        setLoader(true)
        axios.get('https://api.akpharm.uz/api/v1/category-list/?lan=uz')
            .then(res4 => {
                setKate_tovar(res4.data);
                setLoader(false)
            })
    }
    const GetKategor = () => {

        let p = '';
        if (drug) {
            p = '&category=' + drug;
        }
        setLoader(true)
        axios.get(`https://api.akpharm.uz/api/v1/drug-list/?page=1&lan=uz` + p)

            .then(res5 => {
                setMedis(res5.data.results)
                setLoader(false)
            })

    }

    return (
        <>

          
           
            <div id="categor"  className="container pad_k">
                <div className="row ">
                    <div className="col-lg-3 col-md-3 col-sm-4 pad_0">
                        <ul>
                            <li onClick={()=> setDrug('')}

                             style={drug===''? {background:" #fff"}: {}}
                            >Barchasi</li>
                            {kate_tovar.map((item, index) => (
                                <li key={index}  onClick={() => {setDrug(item.slug); setActiv(item.name)}}
                                 style={item.name===activ? {background: "#fff"} : item.name===''?
                                {background: "transparent"} : {}
                                }
                                >{item.name}</li>

                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="row over_row">

                        {loader? <div className="loader"></div> : <>
                            {medis.map((item, index) => (
                                <Kategor_item key={index}
                                    image={item.image}
                                    span={item.manufacturer.name}
                                    name={item.name}
                                />
                            ))}
                            </>}
                        </div>
                    </div>
                </div>
            </div>
       
           
        </>
    );
}
export default Kategory_tovar_page;