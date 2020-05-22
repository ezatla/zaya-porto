import React, { useState, useEffect } from "react"

const url = `/.netlify/functions/instagram`

// custom Hook
function useInstagram() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts
}

const Instagram = () => {
  const gramz = useInstagram()
  return (
    <div>
      Hi From instagram
      {gramz.map(gram => (
        <a href={gram.url} key={gram.id}>
          <img src={gram.display_url} alt={gram.caption} />
        </a>
      ))}
    </div>
  )
}

export default Instagram
