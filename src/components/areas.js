import React from 'react'

function Areas() {
  return (
    <div className='container'>
        <h3 className='text-primary text-decoration-underline my-4'>Legal Areas</h3>
        <div className="d-flex justify-content-around my-5">
            <div className="part_30 bs1">
                <div className="mx-3 pb-4 px-3">
                    <img className='my-3' src={ require('../img/tourism.jfif')} alt="NO PREVIEW" height="80vh"/>
                    <h5 className='section-head my-3'>Tourism Law</h5>
                    <p className='section-desc pb-3'>We help frustrated holiday-makers in case of travel defects of any kind of enforce reduction claims against travel companies.</p>
                    <a href="/form" className="text-decoration-none"><b>Know More</b></a>
                </div>
            </div>
            <div className="part_30 bs1">
                <div className="mx-3 pb-4 px-3">
                    <img className='my-3' src={ require('../img/house.png')} alt="NO PREVIEW" height="80vh"/>
                    <h5 className='section-head my-3'>Tenancy Law</h5>
                    <p className='section-desc pb-3'>We help tenants to enforce their rights in the case of rent control, rent increases, defects in the apartment, deposit reclaim.</p>
                    <a href="/" className="text-decoration-none"><b>Know More</b></a>
                </div>
            </div>
            <div className="part_30 bs1">
                <div className="mx-3 pb-4 px-3">
                    <img className='my-3' src={ require('../img/traffic.png')} alt="NO PREVIEW" height="80vh"/>
                    <h5 className='section-head my-3'>Traffic Law</h5>
                    <p className='section-desc pb-3'>We support customers in all cases related to traffic law, for example traffic accident, traffic offense, driving license, criminal offenses.</p>
                    <a href="/" className="text-decoration-none"><b>Know More</b></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Areas;
