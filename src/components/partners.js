import React from 'react'

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
        <a target="_blank" rel="noopener noreferrer" href={img.href}>
          <img
            itemprop="image"
            alt="partners-logo"
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
