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
        { topic: "", question: "Great! We can work on your case. How can we be in touch?", description: "Please provide atleast one of the following.", options: ['Phone & Email', 'Phone', 'Email']}
    ];
    const [data, setData] = useState({address: '', aboutCase: '', caseSpecific: '', aboutYou: '', witness: '', strategy: ''});
    const [disable, setDisable] = useState(true);
    const [pageId, setPageId] = useState(0);
    const fillField = (field, value)=> {
      setData(values => ({...values, [field]: value}));
      setDisable(false);
      // console.log(field);
      // console.log(value);
      console.log(data);
    }

    const pageData = material[pageId];
    const progress = Math.floor((100*pageId)/6);

    const renderProgress = ()=>{
      if(progress < 100){
        return <div>
          <p className='text-center my-2'> Initial Assessment</p>
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
      if(obj.options.length){
        return <div className="d-flex flex-wrap justify-content-evenly mt-5" style={{width: "75%"}}>
          {
            obj.options.map((option, index)=>{
              return <button className= 'btn-outline-success my-2 px-3 py-2' onClick={(e)=> { fillField(obj.topic, option); }} key={index}>{option}</button>
            })
          }
        </div>
      }
      else{
        setTimeout(()=>{
          const newPage = page + 1;
          // const url = window.location.origin + '/form/' + newPage;
          // window.location.replace(url);
          setPageId(newPage);
          setDisable(true);
        }, obj.progress_tag.length * 1000);
        return <Success tag={obj.progress_tag}></Success>;
      }
    }
    const renderNext = (page)=>{
      if(page < 6){
        return <div className='d-flex justify-content-center my-5'>
          <button className='px-5 py-2' disabled={disable} onClick={()=>{ next(pageId); }}>Next</button>
        </div>
      }
      else if(page == 7){
        return <div className='d-flex justify-content-center my-5'>
          <button className='px-5 py-2' disabled={disable} onClick={handleSubmit}>Submit</button>
        </div>
      }
    }
    const next = (page)=>{
      const newPage = page + 1;
      // console.log(newPage);
      if(newPage <= 8){
        setPageId(newPage);
        setDisable(true);
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
