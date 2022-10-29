import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Progress from './progress';

function Success(props) {
    const n = props.tag.length;
    const [time, setTime] = useState(0);
    const run = ()=>{
        setTime((time + 20));
    };
    const positive = (e)=>{
        if(e >= 0)
            return e;
        return 0;
    }
    useEffect(()=>{
        let id = setInterval(run, 200);
        setTimeout(()=>{
            clearTimeout(id);
        }, (n*1000));
    }, []);
    const setProgress = (index)=>{
        let a = positive(time - 100*index); 
        console.log(a, index);
        return a;
    }
  return (
    <div className='d-flex flex-column'>
        {
            props.tag.map((tag, index)=>{
                return <div key={index}>
                    <p className='text-center my-2' key={index}>{tag}</p>
                    <div className='d-flex justify-content-center mt-0' key={n+index}>
                        <Progress completed={setProgress(index)}></Progress>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Success;
