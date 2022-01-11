import './Carous_P.css'
const Carous_item = (props) => {

    return (
        <div className="col-lg-4">
            <div className="carous_item">
            <img src={props.images}/>
            <h4 >{props.name}</h4>

            </div>

        </div>


    );
}
export default Carous_item;