const Kategor_item=(props)=>{
    return(
     <div className="col-lg-4 col-md-6 col-sm-12 border_item">
      <div className="crad_img">
          <div className="card_img">
              <img src={props.image}></img>
          </div>
          <div className="text_name">
              <h4>{props.span}</h4>
              <h3>{props.name}</h3>
          </div>
      </div>
     </div>
    );
}
export default Kategor_item;