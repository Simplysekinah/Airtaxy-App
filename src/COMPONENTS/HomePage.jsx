import React,{useState,useEffect} from 'react'
import air from '../Images/pic.jfif'
import logo from '../Images/Logo.png'
import {HiMenuAlt1} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import leg from '../Images/legs.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingsuccessful, fetchingPost, fetcingFailed } from './Redux/Slice'
import { hotelImages } from './Service/Hotelimg'


const HomePage = () => {
    const dispatch = useDispatch()
    const {allpost, isfetching, fetcherror,isHotel,allHotel,Hotelerror} = useSelector((state)=> state.airway)
    console.log(allpost);
    console.log(allHotel);
    console.log(isfetching);
    const [img1, setimg1] = useState([])
    const [hotelimage, sethotelimage] = useState([])
    const endpoint = "http://localhost:5002/airtaxy/admin/getimage"
    const endpoint1 = "http://localhost:5002/airtaxy/admin/hotelimage"
    useEffect(() => {
        axios.get(endpoint).then((response)=>{
            console.log(response.message)
            console.log(response.data)
            dispatch(fetchingsuccessful(response.data.images))
            setimg1(response.data.images)
            console.log(setimg1)
        }).catch((error)=>{
            console.log(error)
            dispatch(fetcingFailed(error))
        })
    }, [])

    useEffect(() => {
        hotelImages(dispatch)
    }, [])
     useEffect(() => {
      
       console.log(allpost);
     }, [allpost])

     useEffect(() => {
      
        console.log(allHotel);
      }, [allHotel])
     
    const ApiImage=(hotels)=>{
        let counter = 0
        return allHotel.map((element,index)=>{
            if (element.hotels === hotels) {
                if (counter < 1) {
                    counter ++
                    return(
                        <div className='long-img' key={index}>
                            <img className='small-img img-fluid' src={element.imageUrl}/>
                        </div>
                    )
                }
            }
        })
    }
    
  return (
    <>
        <div className='container-fluid'>
            <div className='container-fluid home-up'>
                    <div><img className='air' src={air} alt="" /></div>
                    <div><img src={logo} alt="" /></div>
                    {/* <HiMenuAlt1/> */}
                    <HiMenuAlt1 className='icon1'/>
            </div>
            <div className='container d-flex div-inp'>
                <div className='div-inp2'>
                     <div className='icon-div'><FiSearch className='icon2'/></div>
                    <input type="text" placeholder='search' className='inp-home' />
                </div>
                   
            </div>
            <br />
            <div className='container'>
                <div className='middle'>
                    <div className='middle-p'>The journey of a thousand miles begins with a single step.  </div>
                    <div className=''>
                        <img src={leg} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='trending'>Trending flight deals</div>

                </div>
                <div className='img-div1'>
                    <div className='d-flex gap-4 img-div'>
                        {allpost &&
                            allpost.map((index,id)=>(
                            <div className='long-img' key={id}>
                                {/* <div>{index.imageUrl}</div> */}
                                <img className='small-img img-fluid' src={index.imageUrl}/>
                            </div>
                        ))
                        }
                    </div>
                </div>
                
            </div>
            <div>
                <div>
                    Hotels
                </div>
                <div className='img-div1'>
                    <div className='d-flex gap-4 img-div'>
                        <div>{ApiImage('Abuja hotel')}</div>
                        <div>{ApiImage('Dubai hotel')}</div>
                        <div>{ApiImage('United Kingdom hotel')}</div>
                        <div>{ApiImage('United State of America hotel')}</div>
                        <div>{ApiImage('Canada hotel')}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage