import React from 'react'
import { useSelector } from 'react-redux'
import Singlecard from './Singlecard'
import { Row } from 'react-bootstrap'

const Section = () => {
const section =useSelector(state=>state)

  return (
   <>
   <h1  className='mt-3'>Editor's Choice</h1>

   <Row>

{section.map(s=>(
    <Singlecard  photo={s.photo} title={s.title} key={s.id}/>
))}



   </Row>
   
 


   </>
  )
}

export default Section