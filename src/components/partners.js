import React from 'react'
// import DtuImg from '../img/dtu.png'
// import CseImg from '../img/cse.jpg'
// import FondenImg from '../img/fonden.png'
// import TicketButlerImg from '../img/ticketbutler.png'
// import TinyRhinoImg from '../img/tiny-rhino.png'
import data from '../../pagesData'

const Partners = ({ images }) => (
  <section>
    <div
      style={{
        display: 'flex',
        background: '#fff',
        zIndex: '1',
        flexFlow: 'row wrap',
        width: '100%',
        justifyContent: 'space-around',
        padding: '32px',
      }}
    >
      {images.map(img => (
        <a target="_blank" href={img.href}>
          <img
            style={{
              objectFit: 'contain',
              maxHeight: '80px',
              maxWidth: '192px',
              padding: '16px',
              filter: 'grayscale(100%)',
            }}
            src={img.src}
          />
        </a>
      ))}
    </div>
  </section>
)

export default Partners
