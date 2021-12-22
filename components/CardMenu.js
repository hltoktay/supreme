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
              src={"https:" + thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
            />
          </div>

          <div className="content">
            <Link href={"/categories/" + slug}>
              <div
                className="card-body info text-uppercase"
                style={{ cursor: "pointer" }}
              >
                <h4>{title}</h4>
              </div>
            </Link>
                
          <div>
            <a href="/online" class="btn btn-outline-warning w-100">
              Order Now!
            </a>
          </div>
          </div>
      


        </div>
      </div>

      <style jsx>
        {`
          .card {
            position: relative;
            background: white;
            max-width: 500px;
            margin: 20px auto;
            box-shadow: 0px 0px 30px 2px #000;
          }
          .card:hover {
            box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.2),
              -1px -1px 7px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </main>
  );
}



export default CardMenu;