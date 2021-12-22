import React from 'react'
import Image from 'next/image';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_KEY,
  })

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'menu'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
  }

export async function getStaticProps({ params }) {

    const { items } = await client.getEntries({
        content_type: 'menu',
        'fields.slug': params.slug
    })

    return {
        props: { menu: items[0] }
    }

}

export default function MenuDetails({ menu }) {
    const { featuredImage, title, ingredients, description } = menu.fields

    return (
      <div className="menu-header">
        <div className="banner p-3">
          <img
            className="image"
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
          />

          <h2 className="text-uppercase fw-bolder">{title}</h2>
        </div>

        <div className="info p-3">
          <p>{documentToReactComponents(description)}</p>
          <h3>Ingredients: </h3>

          {ingredients.map(ing => (
            <span key={ing}> {ing}</span>
          ))}
           
        </div>
      

        <style jsx>{`
          .menu-header {
            width: 100%;
            margin-left: 100px;
          }

          @media (max-width: 576px) {
            .menu-header {
              width: 100%;
              margin: 0px 0px;
            }
          }
          .banner img {
            width: 350px !important;
            height: auto !important;
            border-radius: 25px !important;
            box-shadow: 6px 4px 6px #918f91;
            margin-bottom: 20px;
          }
          .info span {
            background: #c7a002;
            background-image: -webkit-linear-gradient(top, #c7a002, #5e4f01);
            background-image: -moz-linear-gradient(top, #c7a002, #5e4f01);
            background-image: -ms-linear-gradient(top, #c7a002, #5e4f01);
            background-image: -o-linear-gradient(top, #c7a002, #5e4f01);
            background-image: linear-gradient(to bottom, #c7a002, #5e4f01);
            -webkit-border-radius: 20;
            -moz-border-radius: 20;
            border-radius: 20px;
            -webkit-box-shadow: 6px 4px 3px #918f91;
            -moz-box-shadow: 6px 4px 3px #918f91;
            box-shadow: 6px 4px 3px #918f91;
            font-family: Courier New;
            color: #ffffff;
            font-size: 18px;
            padding: 8px 14px 10px 8px;
            text-decoration: none;
            margin: 0 10px 0 0;
          }
          .info span:hover {
            text-decoration: none;
          }
          .info h3 {
            font-family: "Times New Roman", Times, serif;
            font-size: 20px;
            letter-spacing: 0.4px;
            word-spacing: -1.6px;
            color: #000000;
            font-weight: 700;
            text-decoration: underline solid rgb(68, 68, 68);
            font-style: normal;
            font-variant: small-caps;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          @media (max-width: 576px) {
            .info span {
              font-size: 14px;
              height: 80px;
            }
          }
        `}</style>
      </div>
    );
}
