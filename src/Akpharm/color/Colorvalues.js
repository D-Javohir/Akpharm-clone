import Square from "./Square";
import React, { useState } from "react"
import Inputs from "./Inputs";
// import Modal from "./Modal";

const Colorvalues = () => {

    const [colorvalue, setcolorvalue] = useState('')
    return (<>
        <div className=" d-flex justify-content-center align-items-center">
            <Square
                colorvalue={colorvalue}
            />
            <Inputs
                colorvalue={colorvalue}
                setcolorvalue={setcolorvalue}
            />
            {/* <Modal/> */}

        </div>

    </>);
}
export default Colorvalues;