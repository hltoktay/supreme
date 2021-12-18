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
        <div style={{marginLeft: '100px'}}>
            <div className="banner">
                <Image
                    src={'https:' + featuredImage.fields.file.url}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />

                <h2>{ title }</h2>
            </div>

            <div className="info">
            <p>{ documentToReactComponents(description) }</p>
            <h3>Ingredients: </h3>
             
             {ingredients.map(ing => (
             <span key={ing}> { ing }</span>
             ))}
            </div>


            <style jsx>{`
            .banner {
                width: 400px;
            }
                .info span:after{ 
                    content: ", ";
                }
                .info span:last-child::after {
                    content: ".";
                }
            `}</style>
        </div>
    )
}
