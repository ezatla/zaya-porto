import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ModalImage from "react-modal-image"
import Loading from "./loading"

const url = `/.netlify/functions/instagram`

// // custom Hook
// function useInstagram() {
//   const [posts, setPosts] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setLoading(false)
//         setPosts(data)
//       })
//   }, [])
//   return [posts, loading]
// }

// Slice Posts
const slimupPosts = (posts, start, end) => {
  if (!posts) return
  return posts.slice(start, end)
}

const Instagram = () => {
  const [gramz, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setPosts(data)
      })
  }, [])

  if (loading) return <p>loadinggg</p>
  // const gramz = useInstagram()
  return (
    <PostsWrapper>
      <div className="two_column">
        {slimupPosts(gramz, 0, 2).map(gram => (
          <ModalImage
            showRotate
            hideZoom
            key={gram.id}
            small={gram.display_resources}
            large={gram.display_url}
            alt={gram.caption}
          />

          // <a href={gram.url} key={gram.id}>
          //   <img src={gram.display_url} alt={gram.caption} />
          // </a>
        ))}
      </div>

      <div className="three_column">
        {slimupPosts(gramz, 2, 5).map(gram => (
          <ModalImage
            showRotate
            hideZoom
            key={gram.id}
            small={gram.display_resources}
            large={gram.display_url}
            alt={gram.caption}
          />
        ))}
      </div>

      <div className="four_column">
        {slimupPosts(gramz, 12, 16).map(gram => (
          <ModalImage
            showRotate
            hideZoom
            key={gram.id}
            small={gram.display_resources}
            large={gram.display_url}
            alt={gram.caption}
          />
        ))}
      </div>

      <div className="three_column">
        {slimupPosts(gramz, 9, 12).map(gram => (
          <ModalImage
            showRotate
            hideZoom
            key={gram.id}
            small={gram.display_resources}
            large={gram.display_url}
            alt={gram.caption}
          />
        ))}
      </div>

      <div className="one_column">
        {slimupPosts(gramz, 17, 18).map(gram => (
          // <a href={gram.url} key={gram.id}>
          //   <img src={gram.display_url} alt={gram.caption} />
          // </a>
          <ModalImage
            showRotate
            hideZoom
            key={gram.id}
            small={gram.display_resources}
            large={gram.display_url}
            alt={gram.caption}
          />
        ))}
      </div>
    </PostsWrapper>
  )
}

// styles

const PostsWrapper = styled.div`
  .__react_modal_image__caption {
    font-size: 14px;
  }
  .__react_modal_image__icon_menu {
    padding: 4px;
  }
  .__react_modal_image__header {
    z-index: 999;
  }
  & .one_column {
    padding: 2px;

    & img {
      width: 100vw;
    }
  }

  & .two_column {
    display: flex;

    & div img {
      padding: 1px 2px;
    }
  }

  & .three_column {
    display: flex;
    & div img {
      padding: 1px 2px;
    }
  }
  & .four_column {
    display: flex;

    & div {
      /* min-width: 450px !important; */
    }
    & div img {
      padding: 1px;
    }
  }

  @media all and (max-width: 668px) {
    .two_column,
    .three_column,
    .four_column {
      flex-wrap: wrap;
    }
  }
`
export default Instagram
