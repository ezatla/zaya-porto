import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import 'lazysizes';

import styled from "styled-components"

/* 
image sample usage: 
  <div>{
    allImages.map(image =>  {
      return (
        <div key={image.node.id}>
          <img
            data-sizes="auto"
            data-src={image.node.urls.small_s3}
            data-srcset={`${image.node.urls.regular} 300w,
            ${image.node.urls.regular} 600w,
            ${image.node.urls.full} 900w`} className="lazyload" />
        </div>
      )
    })
  }</div> 
*/

// Slice Posts
const slicePosts = (posts, start, end) => {
  if (!posts) return
  return posts.slice(start, end)
}


const Unsplash = () => {
  // configure collection id and other configs in `gatsby-config`
  const data = useStaticQuery(graphql`
    query {
      allUnsplashPhoto(filter: {user: {username: {eq: "jakobowens1"}}}, limit: 12) {
        edges {
          node {
            id
            urls {
              full
              regular
              small_s3
            }
            links {
              html
            }
            user {
              username
              name
            }
          }
        }
      }
    }
  `);
  const allImages = data.allUnsplashPhoto.edges;
  console.log('unsplash Data', data);
  return (
    <PostsWrapper>
      <div className="two_column">
        {slicePosts(allImages, 0, 2).map(image => (
          <div className='image_wrapper' key={image.node.id}>
            <span className="user">{image.node.user.username}</span>
            <a href={image.node.links.html} target="_blank" rel="noopener noreferrer">
              <img
                data-sizes="auto"
                data-src={image.node.urls.small_s3}
                data-srcset={`${image.node.urls.regular} 300w,
                ${image.node.urls.regular} 600w,
                ${image.node.urls.full} 900w`} className="lazyload image_item" alt={image.node.user.name} />
            </a>
          </div>
        ))}
      </div>
      <div className="three_column">
        {slicePosts(allImages, 2, 5).map(image => (
          <div className='image_wrapper' key={image.node.id}>
            <span className="user">{image.node.user.username}</span>
            <a href={image.node.links.html} target="_blank" rel="noopener noreferrer">
              <img
                data-sizes="auto"
                data-src={image.node.urls.small_s3}
                data-srcset={`${image.node.urls.regular} 300w,
               ${image.node.urls.regular} 600w,
               ${image.node.urls.full} 900w`} className="lazyload image_item" alt={image.node.user.name} />
            </a>
          </div>
        ))}
      </div>

      <div className="one_column">
        {slicePosts(allImages, 5, 6).map(image => (
          <div className='image_wrapper' key={image.node.id}>
            <span className="user">{image.node.user.username}</span>
            <a href={image.node.links.html} target="_blank" rel="noopener noreferrer">
              <img
                data-sizes="auto"
                data-src={image.node.urls.small_s3}
                data-srcset={`${image.node.urls.regular} 300w,
               ${image.node.urls.regular} 600w,
               ${image.node.urls.full} 900w`} className="lazyload image_item" alt={image.node.user.name} />
            </a>
          </div>
        ))}
      </div>

      <div className="four_column">
        {slicePosts(allImages, 5, 10).map(image => (
          <div className='image_wrapper' key={image.node.id}>
            <span className="user">{image.node.user.username}</span>
            <a href={image.node.links.html} target="_blank" rel="noopener noreferrer">
              <img
                data-sizes="auto"
                data-src={image.node.urls.small_s3}
                data-srcset={`${image.node.urls.regular} 300w,
               ${image.node.urls.regular} 600w,
               ${image.node.urls.full} 900w`} className="lazyload image_item" alt={image.node.user.name} />
            </a>
          </div>
        ))}
      </div>

      <div className="two_column">
        {slicePosts(allImages, 10, 12).map(image => (
          <div className='image_wrapper' key={image.node.id}>
            <span className="user">{image.node.user.username}</span>
            <a href={image.node.links.html} target="_blank" rel="noopener noreferrer">
              <img
                data-sizes="auto"
                data-src={image.node.urls.small_s3}
                data-srcset={`${image.node.urls.regular} 300w,
                ${image.node.urls.regular} 600w,
                ${image.node.urls.full} 900w`} className="lazyload image_item" alt={image.node.user.name} />
            </a>
          </div>
        ))}
      </div>
    </PostsWrapper>
  )
}

// styles
const PostsWrapper = styled.div`
  padding-top: 3rem;
  .__react_modal_image__caption {
    font-size: 14px;
  }
  .__react_modal_image__icon_menu {
    padding: 4px;
  }
  .__react_modal_image__header {
    z-index: 999;
  }
  & > div{
    padding-bottom: 1px;
  }

  & .image_wrapper{
    position: relative;
    padding-top: 50%;
    height: 100%;
    width: 100%;
    display: block;
    max-height: 600px;

    &:hover .user{
      opacity: 1;
      transform: translateY(-1rem);
    }
        
    @media only screen and (max-width: 668px){
      padding-top: 100%;
    }

    & .image_item{
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      padding: 2px;
    }
  }
 
  & .user{
    position: absolute;
    bottom: 0;
    left: 0.688rem;
    z-index: 1;
    opacity: 0;
    transform: translateY(2rem);
    transition: all 0.2s ease-in-out;
    font-size: 0.688rem;
  }

  & .one_column {

    & img {
      width: 100vw;
    }
  }

  & .two_column {
    display: flex;
    align-items: baseline;
    overflow: hidden;

    & .image_wrapper{
      @media only screen and (min-width: 668px){
        padding-top: 35%;
      }
    }

    & div {
      max-height: 600px;
      overflow: hidden;
    }
  }

  & .three_column {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
  & .four_column {
    display: flex;

    & div {
      /* min-width: 450px !important; */
    }
  }

  .four_column{
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  @media all and (max-width: 668px) {
    .two_column,
    .three_column,
    .four_column {
      flex-wrap: wrap;
    }
  }
`

export default Unsplash