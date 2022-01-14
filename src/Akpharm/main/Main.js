import Header from "./Header";

const Main = () => {
    return (
        <>
            <main id="main_page_scrol" className="main-page">
                <div className="opacitybac">

                    <div className="container-fluid">
                        <div className="row">
                            <Header />
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-10 text-center ">
                                <h1 className="main_text">Дистрибьюторская компания, с которой приятно работать в сотрудничестве!
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            
        </>
    );
}
export default Main;