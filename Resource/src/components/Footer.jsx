import React from 'react'
// import imageone from "../assets/img/logo-light (1).svg"

const Footer = () => {
  return (
   <>
    <div className="Footer">

<div className="boxone">
  {/* <img className='mt-3' src={imageone} alt="" /> */}
</div>

<div className="boxtwo mt-5">

<nav>
  <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">Author Details</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Contact</a></li>
      
      
  </ul>
  </nav>
</div>

<div className="boxthree mt-5">



<i className="fa-brands fa-facebook ms-3"></i>
<i className="fa-brands fa-skype ms-3"></i>
<i className="fa-brands fa-instagram ms-3"></i>
<i className="fa-brands fa-twitter ms-3"></i>
<i className="fa-brands fa-wpressr ms-3"></i>
<i className="fa-brands fa-tiktok ms-3"></i>
</div>


<div className="boxfour mt-5">
<h5 style={{color:"white"}}>© 2023 neeon. All Rights Reserved by RadiusTheme</h5>
</div>


  </div>
   
   </>
  )
}

export default Footer