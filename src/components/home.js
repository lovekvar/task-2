import React from 'react'

function home() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-6'>
                <div style={{margin: "20% 5% 10% 5%"}}>
                    <h3>Case Resolution Platform</h3>
                    <p className='my-4 me-5'>Automating Litigation through Artificial Inteligence</p>
                    <button className='mt-3 px-4 py-1 btn-primary'>Know More</button>
                </div>
            </div>
            <div className='col-6'>
                <img className='mt-5 ms-5 relative-border'src={ require('../img/law_hammer.jpg')} alt="No preview available"  height="60%"/>
            </div>
        </div>
    </div>
  )
}

export default home;
