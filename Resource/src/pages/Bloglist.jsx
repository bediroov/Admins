import React from 'react'
import {  Row } from 'react-bootstrap'
import Singlecard from '../components/Singlecard'
import { useSelector } from 'react-redux'


const Bloglist = () => {
const title =useSelector(state=>state)

  return (

<>


<Row>

{title.map(i=>(

<Singlecard  photo={i.photo} title={i.title} key={i.id}/> 


))}



</Row>

</>
  
  )
}

export default Bloglist