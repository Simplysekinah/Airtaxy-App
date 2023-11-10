import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Admin = () => {
    const [file, setFile] = useState(null)
    const [pic, setpic] = useState([])
    const [location, setlocation] = useState('')
    const [hotels, sethotels] = useState('')
    const [apart, setapart] = useState('')
    const [uploadFlight, setuploadFlight] = useState(false)
    const [uploadhotel, setuploadhotel] = useState(false)
    const [uploadApart, setuploadApart] = useState(false)
    const [business, setbusiness] = useState(false)
    const [economy, seteconomy] = useState(false)
    const [first, setfirst] = useState(false)
    const [price, setprice] = useState('')
    const [pricep, setpricep] = useState('')
    const [pricef, setpricef] = useState('')
    const [seat, setseat] = useState('')
    const [seate, setseate] = useState('')
    const [seatf, setseatf] = useState('')
    const endpoint = "http://localhost:5002/airtaxy/admin"
    const endpoints = "http://localhost:5002/airtaxy/admin/getimage"
    const endpoint1 = "http://localhost:5002/airtaxy/admin/hotel"
    const endpoint2 = "http://localhost:5002/airtaxy/admin/getimage"


    const pickFile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result
            setFile(result)
        }
    }
    const uploadImage=()=>{
        // const uploadImage = () => {
            const details = { file,location,business, economy, first, price,pricef,pricep,seat,seate,seatf }
            console.log(file)
            axios.post(endpoint, details).then((result) => {
                console.log(result)
                toast.success(result.data.message)
            }).catch((error) => {
                console.log(error)
            })
        // }
    }

    useEffect(() => {
        axios.get(endpoints).then((response)=>{
            console.log(response)
            setpic(response.data.images)
            toast.success(response.data.message)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    const flights = ()=>{
        setuploadFlight(!uploadFlight)
    }
    const hotel=()=>{
        setuploadhotel(!uploadhotel)
    }
    const vacation=()=>{
        setuploadApart(!uploadApart)
    }

    const hotelImage=()=>{
        console.log(file)
        axios.post(endpoint1, { file,hotels }).then((result) => {
            console.log(result)
            toast.success(result.data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

    const uploadApartment=()=>{
        console.log(file)
            axios.post(endpoint2, { file,location }).then((result) => {
                console.log(result)
                toast.success(result.data.message)
            }).catch((error) => {
                console.log(error)
            })
    }
  return (
    <>
        <button onClick={flights} className='btn btn-success'>Flights</button>
        <button onClick={hotel} className='btn btn-primary'>Hotels</button>
        <button onClick={vacation} className='btn btn-secondary'>Apartments/Vacation</button>

        {uploadFlight &&
            <div className="container-fluid">
                <h2>Upload flight</h2>
                <input type="file" className='form-control' onChange={(e) => pickFile(e)} />
                <input type="text" className='form-control' onChange={(e)=>setlocation(e.target.value)} />
                <div>
                    <p>Available Class</p>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                         onClick={(e)=>{setbusiness(e.target.checked)
                            console.log(e.target.checked)}}
                            />
                        <label class="form-check-label" for="flexSwitchCheckChecked">Business Class</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        onClick={(e)=>{seteconomy(e.target.checked)
                            console.log(e.target.checked)}}
                        />
                        <label class="form-check-label" for="flexSwitchCheckChecked">Economy Class</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        onClick={(e)=>{setfirst(e.target.checked)
                            console.log(e.target.checked)}}
                        />
                        <label class="form-check-label" for="flexSwitchCheckChecked">First Class</label>
                    </div>
                </div>
                {
                    business?
                    <div>
                        <p>Number of seats in business class</p>
                        <input type="text" className='form-control' placeholder='Number of seats' onChange={(e)=>setseat(e.target.value)} />
                        <input type="text" className='form-control' onChange={(e)=>setprice(e.target.value)} placeholder='price' />
                    </div>:null
                }
                {
                    economy?
                    <div>
                        <p>Number of seats in economy class</p>
                        <input type="text" className='form-control' placeholder='Number of seats' onChange={(e)=>setseate(e.target.value)} />
                        <input type="text" className='form-control' onChange={(e)=>setpricep(e.target.value)} placeholder='price' />
                    </div>:null
                }
                {
                    first?
                    <div>
                        <p>Number of seats in first class</p>
                        <input type="text" className='form-control' placeholder='Number of seats' onChange={(e)=>setseatf(e.target.value)} />
                        <input type="text" className='form-control' onChange={(e)=>setpricef(e.target.value)} placeholder='price' />
                    </div>:null
                }
                <button className='btn btn-dark' onClick={uploadImage}>Upload</button>
            </div>
        }
        {uploadhotel&&
            <div className='container-fluid'>
                <h2>Upload hotel</h2>
                <input type="file" className='form-control' onChange={(e) => pickFile(e)} />
                <input type="text" className='form-control' onChange={(e)=>sethotels(e.target.value)} />
                <button className='btn btn-dark' onClick={hotelImage}>Upload</button>
            </div>
        }
        {uploadApart&&
            <div className='container-fluid'>
                <h2>Upload Apartments</h2>
                <input type="file" className='form-control' onChange={(e) => pickFile(e)} />
                <input type="text" className='form-control' onChange={(e)=>setapart(e.target.value)} />
                <button className='btn btn-dark' onClick={uploadApartment}>Upload</button>
            </div>
        }
        <ToastContainer/>
        {pic&&
            pic.map((index,id)=>(
                <div className='mx-auto container shadow-lg card p-5' key={id}>
                   
                    <img src={index.imageUrl} alt={`Image ${id}`}/>
                </div>
            ))

        }
        {/* <div className='mx-auto container shadow-lg card p-5'>
                {Images&&
                  Images.map((index, item) =>(
                    <img src={index.imageUrl}  />
                  ))
                }
            </div> */}
    </>
  )
}

export default Admin