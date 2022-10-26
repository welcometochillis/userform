import React, { UseState } from "react";

import "../app.css";
import { db } from "../firebase";

const contact = () => {
    const [name,setName]= UseState("");
    const [surname,setSurname]= UseState("");
    const [email,setEmail]= UseState("");
    const [age,setAge]= UseState("");
    const [gender,setGender]= UseState("");
    const [bloodgroup,setBloodGroup]= UseState("");
    const [medicaldetails,setMedicalDetails]= UseState("");


    const [loader , setLoader]=UseState(false);
    const handlesumbit = (e) =>{
      e.preventDeault();
      setLoader(true);

      db.collection('contacts').add({
        name:name,
        surname:surname,
        email:email,
        age:age,
        gender:gender,
        bloodgroup:bloodgroup,
        medicaldetails:medicaldetails
        
      })
      .then(()=>{
        alert(
          'information has been submitted'
          );
          setLoader(false)
      })
      .catch((error)=>{
        alert(error.message);
        setLoader(false);
      });
      setName("");
      setEmail("");
      setSurname("");
      setAge("");
      setGender("");
      setBloodGroup("");
      setMedicalDetails("");
      
    };


  return (
    <form className='form'>
        <h1>I care Registeraion form</h1>
        

        <label>Name</label>
        <input 
        placeholder='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <label>Surname</label>
        <input 
        placeholder='surname'
        value={surname}
        onChange={(e)=>setSurname(e.target.value)}
        />
 
        <label>Email</label>
        <input placeholder='email@xyz.com'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      
        <label>Age</label>
        <input placeholder='Age'
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>

        <label>Gender</label>
        <input placeholder='M/F/Others'
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <label>BloodGroup</label>
        <input placeholder='Blood Group'
        value={bloodgroup}
        onChange={(e)=>setBloodGroup(e.target.value)}
        />

        <label>MedicalDetails </label>
        <textarea placeholder='details'
        value={medicaldetails}
        onChange={(e)=>setMedicalDetails(e.target.value)}
        ></textarea>

        <button type='sumbit' style={{ background: loader ?
           "#ccc" :"rgb(2,2,110)"}}>Sumbit</button>
    </form>
  )
}

export default contact