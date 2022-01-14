import axios from "axios";
import { useState } from "react";

const ConPost = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const sentComment = () => {
        axios.post('https://api.akpharm.uz/api/v1/petition-post/?lan=uz', {
            full_name: name,
            phone: phone,
            text: comment,
        })
        .then(r=>{})
        .catch(e=>{})
    }
    return(<div>
        <h2>Post data</h2>
        <div>FISH</div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <div>telfon</div>
        <input type='text' value={phone} onChange={e=>setPhone(e.target.value)}/>
        <div>comment</div>
        <textarea  value={comment} onChange={e=>setComment(e.target.value)}></textarea>
        <button onClick={()=>sentComment()}>Yuborish</button>
    </div>)
}
export default ConPost;