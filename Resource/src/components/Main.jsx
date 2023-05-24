import React from 'react'
import { useSelector } from 'react-redux'
import Singlecard from './Singlecard'
import { Row } from 'react-bootstrap'

const Main = () => {
  const main =useSelector(state=>state)
  return (
   
<>
<h1 className='mt-3' style={{color:'black'}}>Latest Post</h1>




<Row>

{main.map(p=>(
  <Singlecard photo={p.photo} title={p.title} key={p.id} />
))}


</Row>

</>


  )
}

export default Main