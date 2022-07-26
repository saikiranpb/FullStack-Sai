import React,{useState,useEffect} from 'react'
import Header from '../Common/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import '../../styles/Home.css'
import { useParams } from 'react-router-dom';
import '../../styles/Details.css'

export default function RestaurantDetails() {

  const [restaurant,setRestaurant]=useState({})
  let {rName}=useParams();

  useEffect(()=>{
    fetch(`http://localhost:8080/restaurant/details/${rName}`,{method:'GET'})
    .then(response=>response.json())
     .then(data=>setRestaurant(data.data[0]))
  },[])

  let{name,thumb,address,cost,Cuisine,contact_number}=restaurant;
  
  if(!contact_number){
    contact_number="not available"
  }
  const CuisineList=!(Cuisine===undefined) && Cuisine.length && <div>{Cuisine.map(item=><div className="cuisineName">{item.name}.</div>)}</div>
console.log(CuisineList)
  return (
    <div>
        <Header/>
                
        <div className='details'>
          <div className='tab img'>
            <img src={thumb} width="100%" height="350px"/>
          </div>
          <div className='tab'>
              <h2 className='Rname'>{name}</h2>
          </div>
          <div className='tab'>
              <Tabs>
                      <TabList className='tabName'>
                              <Tab>Overview</Tab>
                              <Tab>Contact</Tab>
                      </TabList>

                      <TabPanel className="tabPanel">
                          <div className="about">About the place</div>
                          <div className="head">Cuisine</div>
                          <div className="value"> {CuisineList}</div>
                          <div className="head">Average Cost</div>
                          <div className="value">&#8377; {cost}</div>
                      </TabPanel>
                      <TabPanel className="tabPanel">
                          <div className="head">Phone Number</div>
                          <div className="value">{contact_number}</div>
                          <div className="head">{name} </div>
                          <div className="value">{address}</div>
                      </TabPanel>
              </Tabs>
          </div> 
        </div>
    </div>
  )
}
