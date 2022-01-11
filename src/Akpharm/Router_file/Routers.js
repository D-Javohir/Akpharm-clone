import {Route, Routes} from 'react-router-dom'
import Akpharm_site from '../Akpharm_site';
import Kategory_tovar from '../Kategory_tovar';
// import ComPost from '../ComPost';
// import Tables from '../Table/Tables';
// import Timer from '../Timer';
// import Savol from '../../Savoljavob/Savol';
// import Questns from '../../Savoljavob/Questns';
const Routers=()=>{
    return(
     <Routes>

         <Route path={"/"} element={<Akpharm_site/>}/>
         <Route path={"/Kategory"} element={<Kategory_tovar/>}/>
    

         
         {/* <Route path={"/post"} element={<ComPost/>}/> */}
         {/* <Route path={"/table"} element={< Tables/>}/> */}
         {/* <Route path={"/packeges"} element={< Timer/>}/> */}
         {/* <Route path={"/savol"} element={< Savol/>}/>\
         <Route path={"/quest"} element={<Questns/>}/> */}

         

     </Routes>
    );
}
export default Routers;