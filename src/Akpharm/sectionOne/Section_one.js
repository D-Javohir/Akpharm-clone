const Section_one = () => {
    const myArr = [
        {
            name: 'Широкий ассортимент',
            text: "majority have suffered alteration in words which don't look even have slightly randomised ",
            icon: './image/bell(1).png'
        },
        {
            name: 'Много лет опыта',
            text: "majority have suffered alteration in words which don't look even have slightly randomised ",
            icon: './image/layers.png'
        },
        {
            name: '13 филиалов по стране',
            text: "majority have suffered alteration in words which don't look even have slightly randomised ",
            icon: './image/mail(3).png'
        },
        {
            name: 'Доступные цены',
            text: "majority have suffered alteration in words which don't look even have slightly randomised ",
            icon: './image/Group 7550.png'
        }
    ]
    return (

        <section className="section_one">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Наши Преимущества</h2>
                    </div>
                </div>

                <div className="row">
                    {myArr.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="iconoc text-center">
                                <img src={item.icon} alt="" />
                                <h6>{item.name}</h6>
                                <p>{item.text}
                                </p>

                            </div>
                        </div>
                    ))}


                </div>
                
            </div>

        </section>
    );
}
export default Section_one;