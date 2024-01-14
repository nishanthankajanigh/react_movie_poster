import React from 'react';
import {useNavigate} from 'react-router-dom';


function NameForm(props){

    const navigate = useNavigate();

    function goToThanks(e){
        let salute = document.getElementById('salute').value;
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let age = document.getElementById('age').value;
        let address= document.getElementById('address').value;
        let country= document.getElementById('country').value;
   
        
        e.preventDefault();
        console.log("Thank you user!");
        navigate(`/thanks/${salute}/${firstname}/${lastname}/${age} /${address}/:${country}`);
    }


    
    return (

        <>
       
            <h2>Registration</h2>
          
        <form className='RegiForm' onSubmit={goToThanks}>
            <section class="formimage">
            <div class="row">
            <div class="col-25"> 
                <label>Salutation  </label>
                </div>
                <div class="col-75">
                <input type="text" id="salute"   onChange={props.handleChange}/> 
                </div>
                </div>

                <div class="row">
                 <div class="col-25"> 
                <label>First Name: </label>
                </div>
                <div class="col-75">
                <input type="text" id="firstname"   onChange={props.handleChange}/> 
                </div>
                </div>

                <div class="row">
                <div class="col-25"> 
                <label>Last Name: </label>
                </div>
                <div class="col-75">
                <input type="text" id="lastname"   onChange={props.handleChange}/> 
                </div>
                </div>


                <div class="row">
                <div class="col-25"> 
                <label>Age </label>
                </div>
                <div class="col-75">
                <input type="text" id="age"   onChange={props.handleChange}/> 
                </div>
                </div>

                <div class="row">
                <div class="col-25"> 
                <label>Address: </label>
                </div>
                <div class="col-75">
                <input type="text" id="address"   onChange={props.handleChange}/> 
                </div>
                </div>


                <div class="row">
                <div class="col-25"> 
                <label>Country </label>
                </div>
                <div class="col-75">
                <input type="text" id="country"   onChange={props.handleChange}/> 
                </div>
                </div>

            <input type="submit" value="Submit" class="submitbutton" />
            </section>
        </form>
        
        
        </>
    )
}


export default NameForm;