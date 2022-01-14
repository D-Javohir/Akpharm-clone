import {Route, Routes} from 'react-router-dom'
import Akpharm_site from '../akpharmpage/Akpharm_site';
import Kategory_tovar from '../kategor/Kategory_tovar';

const Routers=()=>{
    return(
     <Routes>
         <Route path={"/"} element={<Akpharm_site/>}/>
         <Route path={"/Kategory"} element={<Kategory_tovar/>}/>
     </Routes>
    );
}
export default Routers;