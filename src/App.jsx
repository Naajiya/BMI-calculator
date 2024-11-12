import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'
import foldImga from './assets/bmiChart.jpg'


function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(0)
  const [status, setStatus] = useState('')

  const [invalidHeight, setInvalidheight] = useState(false)
  const [invalidWeight, setInvalidweight] = useState(false)

  const validateInput = (tag) => {
    console.log(tag);

    const { name, value } = tag
    console.log(name, value)

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name == 'height') {
        setHeight(value)
        setInvalidheight(false)
      }
      else if (name === 'weight') {
        setWeight(value)
        setInvalidweight(false)
      }
    } 
    
    else {
      if (name == 'height') {
        setInvalidheight(true)
      } else if (name === 'weight') {
        setInvalidweight(true)
      }
    }
    
    if (name == 'height') {
          setHeight(value)
          setInvalidheight(false)
        }
      else if (name === 'weight') {
        setWeight(value)
        setInvalidweight(false)
      }
  }


  const handlesubmit = (e) => {
    e.preventDefault()
    console.log('btn cllicek');
    if (height && weight) {
      console.log('button clicked')
      let meter = height / 100;
      let metersqr = meter * meter;
      let balance = Math.round(weight / metersqr)
      console.log(balance);

      setBmi(Math.round(weight / metersqr))

      if (balance < 18.5) {
        console.log('your are underweight');
        setStatus('You are Underweight')

      } else if (balance > 18.5 && balance < 24.9) {
        console.log('normal weight');
        setStatus('Normal Weight')

      } else if (balance > 25 && balance < 29.9) {
        console.log('over weight')
        setStatus('Over Weight')
      } else if (balance > 30) {
        console.log('obese');
        setStatus('Obese')

      }

    } else {
      alert('please enter ')
    }
  }



  return (
    <>
      <div className='container d-flex align-items-center justify-content-center' style={{ minHeight: '90vh' }}>
        <div className='row m-2border border-light p-2 bg-light rounded'>
          <div className='col-12 col-md-6 mb-3 ' >
            <img src={foldImga} className='img-fluid' style={{ height: '100%', width: '100%' }} alt="" />
          </div>
          <div className='col-12 col-md-6 d-flex border border-success' style={{ height: '100%', backgroundColor: 'white' }}>

            <div className='p-2'>
              <form>
                <h1 className='text-success'>BMI Calculator</h1>

                <TextField
                type='number'
                  name='height'
                  value={height || ""}
                  onChange={(e) => validateInput(e.target)}
                  className='w-80 m-2'
                  id="outlined-basic"
                  label="height(cm)"
                  variant="outlined"
                   />
                {
                  invalidHeight && <p>invalid data</p>
                }

                <TextField name='weight' type='number' value={weight} onChange={(e) => validateInput(e.target)} className='w-80 ' id="outlined-basic" label="weight(kg)" variant="outlined" /><br />
                {
                  invalidWeight && <p>invalid data</p>
                }
                <button type='submit' onClick={handlesubmit} className='btn btn-success p-1 m-3'>Calculate BMI</button>
                <h2 className='text-danger'>Your BMI :{bmi}</h2>

                
                  <div className='border border-dark p-2' style={{height:'60px'}}>
                    {status && <h4>{status}</h4>}
                  </div>

                
              </form>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
