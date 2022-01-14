import Moment from 'react-moment';
const MomentComp = () => {
    const  t='1976-04-19T12:59-0500'
    return(<div>

<Moment format="HH:mm:ss-m YYYY/MM/DD ">
                {t}
            </Moment>
    </div>);
}
export default MomentComp;