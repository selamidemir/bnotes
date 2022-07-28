import React from 'react';
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <Container fluid className='bg-light  border-top fixed-bottom p-3'> { /* position-absolute bottom-0 end-0 py-4 */ }
      <div className='text-center '>Selami Demir</div>
    </Container>
  )
}

export default Footer;