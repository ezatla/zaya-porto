require("isomorphic-fetch")

// This is serverless file where front-end hits the below link to get posts

const url = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"1534872938","first":12}`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  // first see if we have cache in 30min
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts
  }
  // else fetch the posts if cache is emtpy
  const data = await fetch(url).then(res => res.json())
  const posts = slimUpPosts(data)
  // setting cache posts & time
  cache.lastFetch = Date.now()
  cache.posts = posts
  console.log(posts)
  return posts
}

// Getting data we want only
function slimUpPosts(response) {
  const slimPosts = response.data.user.edge_owner_to_timeline_media.edges.map(
    edge => ({
      display_url: edge.node.display_url,
      url: `https://instagram.com/p/${edge.node.shortcode}`,
      id: edge.node.id,
      caption: edge.node.edge_media_to_caption.edges[0].node.text,
    })
  )
  return slimPosts
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts()
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(posts),
  })
}
