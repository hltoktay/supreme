import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'

function CardMenu({ category }) {

  const { title, slug, thumbnail } = category.fields

  return (
    <main>
      <div className="col">
        <div className="card shadow-sm">
          <div className="featured">
            <Image
              src={'https:' + thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
            />
          </div>

          <div className="content">
            <Link href={'/categories/' + slug}>
              <div className="card-body info text-uppercase" style={{ cursor: 'pointer' }}>
                <h2>{title}</h2>
              </div>
            </Link>
          </div>

        </div>
      </div>
  
    </main>
    )
}



export default CardMenu;