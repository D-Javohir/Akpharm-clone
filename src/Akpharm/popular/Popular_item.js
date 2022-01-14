const Popular_item = (props) => {
    return (
        
            <div className="col-lg-4 col-md-4">
                <img src={props.img1} alt="" className="popul" />
                <div className="popular">

                    <p>{props.comment}</p>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4>{props.name}</h4>
                            <span>{props.workplace}</span>
                        </div>
                        <div><img src="./image/starts.png" alt="" /></div>
                    </div>


                </div>
            </div>
     

    );
}
export default Popular_item;