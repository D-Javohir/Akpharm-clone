import About from "../about/About";
import Carous_P from "../carousel/Carous_P";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Message from "../message/Message";
import Partner from "../partner/Partner";
import Popular from "../popular/Popular";
import Section_one from "../sectionOne/Section_one";
import Section_three from "../sectionThree/Section_three";

const Akpharm_site = () => {
    return (
        <>
            <Main />
            <About />
            <Section_one />
            <Section_three />
            <Carous_P />
            <Popular />
            <Partner />
            <Message />
            <Footer />
        </>
    );
}
export default Akpharm_site;