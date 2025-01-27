import React from 'react'
import GamesSection from './Sections/GamesSection'
import PostSection from './Sections/PostSection'
import AboutSection from './Sections/ProfileSection'
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f4f2ee' }}>

     
<Container className=" mt-4">

<Row className="gy-4">

    <Col lg={3} className="d-none d-lg-block">

    <AboutSection/>

    </Col>


    <Col lg={6}>

    <PostSection/>

    </Col>


    <Col lg={3} className="d-none d-lg-block">

    <GamesSection/>

    </Col>

</Row>

</Container>


    
   
  
    </div>
  )
}

export default HomePage
