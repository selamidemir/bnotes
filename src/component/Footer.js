import React from 'react';
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <Container fluid className='bg-light border-top fixed-bottom p-3'> { /* position-absolute bottom-0 end-0 py-4 */ }
      <div className='text-center '>Developed By Selami Demir | <a href="https://github.com/selamidemir">Github</a> | <a href="https://netbilio.com">Netbilio</a></div>
    </Container>
  )
}

export default Footer;