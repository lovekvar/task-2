import React from 'react'

function multi-step-from() {
    const material = [
        { question: "Where are you from?", description: "", options: ['Newyork', 'California', 'Texas', 'Florida', 'Illinois', 'Other']},
        { question: "Where's your case about?", description: "", options: ['Employment', 'Goods & Services', 'Housing & Rent', 'Accident & Injuries', 'Debt', 'Privacy & Defamation', 'Something else']},
        { question: "What specifically?", description: "", options: ['Product', 'Service', 'Something else']},
        { question: "What best describes you?", description: "", options: ['Individual', 'Business', 'Freelancer']},
        { question: "Do you have any Witnesses?", description: "These are people who were at the event and/or are willing to write or testify about it in court", options: ['Yes', 'No']},
        { question: "Do you already know what you need?", description: "There are few different options for handling your case. Let us know if you already have one in mind.", options: ['Send an official demand letter', 'File my case in court', 'Handle my entire case', 'Something else']},
        { question: "We are analyzing your case details", description: "This will take a few seconds", options: [], progress: ['Case type', 'Your jurisdiction', 'Witnesses', 'Requested service']},
        { question: "Great! We can work on your case. How can we be in touch?", description: "Please provide atleast one of the following.", options: ['Phone & Email', 'Phone', 'Email']}
    ]
  return (
    <div>
      
    </div>
  )
}

export default multi-step-from
