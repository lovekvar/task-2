import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Progress from './progress';
import Success from './success';

function Multi_step_form(props) {
    const material = [
        { topic: "address", question: "Where are you from?", description: "", options: ['Newyork', 'California', 'Texas', 'Florida', 'Illinois', 'Other']},
        { topic: "aboutCase", question: "Where's your case about?", description: "", options: ['Employment', 'Goods & Services', 'Housing & Rent', 'Accident & Injuries', 'Debt', 'Privacy & Defamation', 'Something else']},
        { topic: "caseSpecific", question: "What specifically?", description: "", options: ['Product', 'Service', 'Something else']},
        { topic: "aboutYou", question: "What best describes you?", description: "", options: ['Individual', 'Business', 'Freelancer']},
        { topic: "witness", question: "Do you have any Witnesses?", description: "These are people who were at the event and/or are willing to write or testify about it in court", options: ['Yes', 'No']},
        { topic: "strategy", question: "Do you already know what you need?", description: "There are few different options for handling your case. Let us know if you already have one in mind.", options: ['Send an official demand letter', 'File my case in court', 'Handle my entire case', 'Something else']},
        { topic: "", question: "We are analyzing your case details", description: "This will take a few seconds", options: [], progress_tag: ['Case type', 'Your jurisdiction', 'Witnesses', 'Requested service']},
        { topic: "contact", question: "Great! We can work on your case. How can we be in touch?", description: "Please provide atleast one of the following.", options: ['Phone & Email', 'Phone', 'Email']}
    ];
    const [data, setData] = useState({address: '', aboutCase: '', caseSpecific: '', aboutYou: '', witness: '', strategy: '', contact: '', phone: 0, email: ''});
    const [disable, setDisable] = useState(true);
    const [pageId, setPageId] = useState(0);
    const [prevIndex, setPrevIndex] = useState(100);
    const [nextClass, setNextClass] = useState('');

    const setPage = (index)=>{
      setPageId(index);
      setDisable(true);
      setNextClass('');
    }

    const fillField = (field, value, index)=> {
      let element = document.getElementById(`${field}-${prevIndex}`);
      if((prevIndex != index) && (element)){
        element.style.borderColor = 'black';
      }
      document.getElementById(`${field}-${index}`).style.borderColor = '#44DA44';
      setPrevIndex(index);
      setData(values => ({...values, [field]: value}));
      setDisable(false);
      setNextClass('next');
      // console.log(data);
    }

    const showHidden = (field, value, index)=>{
      fillField(field, value, index);
      if(index == 0){
        document.getElementById("phone").style.display = "none";
        document.getElementById("email").style.display = "none";
      }
    }

    const pageData = material[pageId];
    const progress = Math.floor((100*pageId)/6);

    const renderProgress = ()=>{
      if(progress < 100){
        return <div>
          <p className='text-center section-desc my-2'> Initial Assessment</p>
          <div className='d-flex justify-content-center mt-0'>
            <Progress completed={progress}></Progress>
          </div>
        </div>
      }
    }

    const renderDescription = (str)=>{
      if(str.length != 0)
         return <p className='text-center'>{pageData.description}</p>;
    }

    const renderOptions = (obj, page) =>{
      // console.log(obj.options.length);
      if(page == 7){
        return <div className="d-flex flex-wrap justify-content-evenly mt-5" style={{width: "75%"}}>
          {
            obj.options.map((option, index)=>{
              return <button  id={`${obj.topic}-${index}`} className='option my-2 px-3 py-2' onClick={(e)=> { showHidden(obj.topic, option, index); }} key={index}>{option}</button>
            })
          }
        </div>
      }
      else if(obj.options.length){
        return <div className="d-flex flex-wrap justify-content-evenly mt-5" style={{width: "75%"}}>
          {
            obj.options.map((option, index)=>{
              return <button id={`${obj.topic}-${index}`} className='option my-2 px-3 py-2' onClick={(e)=> { fillField(obj.topic, option, index); }} key={index}>{option}</button>
            })
          }
        </div>
      }
      else{
        setTimeout(()=>{
          const newPage = page + 1;
          setPage(newPage);
        }, obj.progress_tag.length * 1000);
        return <Success tag={obj.progress_tag}></Success>;
      }
    }

    const renderNext = (page)=>{
      if(page < 6){
        return <div className='d-flex justify-content-center my-5'>
          <button className={`px-5 py-2 ${nextClass}`} disabled={disable} onClick={()=>{ next(pageId); }}>Next</button>
        </div>
      }
      else if(page == 7){
        return <form onSubmit={handleSubmit} className='mt-5'>
          <div className='d-flex justify-content-center my-4 phone' id='phone'>
            <div className='d-flex flex-column phone'>
              <input type="number" className='phone hidden-form' name= "phone"  value={data.phone} onChange={(e)=>{ fillField(e.target.name, e.target.value); }} maxLength = "12" minLength="11"/>
              <div className='hint-text phone'>We'll be happy to get your phone to discuss your case if nedded.</div>
            </div>
          </div>
          <div className='d-flex justify-content-center my-4 email' id="email">
            <div className='d-flex flex-column email'>
              <input type="email" className='email hidden-form' name= "email" value={data.email} onChange={(e)=>{ fillField(e.target.name, e.target.value); }}/>
              <div className='hint-text email'>We'll be using your email to share relevant information and updates on your case.</div>
            </div>
          </div>
          <div className='d-flex justify-content-center mb-5'>
            <button className={`px-5 py-2 ${nextClass}`} disabled={disable} type='submit'>Submit</button>
          </div>
        </form>
      }
    }

    const next = (page)=>{
      const newPage = page + 1;
      // console.log(newPage);
      if(newPage <= 8){
        setPage(newPage);
        // const url = window.location.origin + '/form/' + newPage;
        // window.location.replace(url);
      }
    }
    const handleSubmit = (event)=> {
      console.log(data);
      event.preventDefault(); 
      let  url = 'http://localhost:4000/api/save';
      fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <div className='container'>
      { renderProgress(progress) }
      <div className='d-flex justify-content-center mt-5'>
        <img src={ require('../img/face.jfif')} alt="No Preview" height="70"/>
      </div>
      <h3 className='text-center mt-3'>{pageData.question}</h3>
      {  renderDescription(pageData.description) }
      <div className='d-flex justify-content-center mt-3'>
        { renderOptions(pageData, pageId) }
      </div>
      { renderNext(pageId) }
    </div>
  )
}

export default Multi_step_form;
