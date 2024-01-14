import React from 'react';
import { useParams,Link } from "react-router-dom";
import { Color } from 'three';


function Thanks(props){
    const params = useParams();
    return (
        <section><div>
             <p p class="sucess">You Successfully registerd</p>
            <p>Thankyou so much {params.salute}  {params.firstname} {params.lastname}!</p>
            <p>Your age is  {params.age} old.</p>
            <p>Your address is  {params.address}.  </p>
            <p>Your country is  {params.country}.</p>
            </div>
            <div>
            <Link className='linkstyle' to="/">Back</Link>
            </div>
        </section>
    )
}
export default Thanks;