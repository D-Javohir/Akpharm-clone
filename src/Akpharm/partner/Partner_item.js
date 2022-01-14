
import '../style/Partner.css'
const Partner_item = (props) => {
    return (

        <div className="col-lg-3 col-md-3 col-sm-3 col-6 mb text-center">
            <img className="images_logo" src={props.image} alt="" />
        </div>

    );
}
export default Partner_item;