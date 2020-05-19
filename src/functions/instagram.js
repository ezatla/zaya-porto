require("isomorphic-fetch")

const url = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"1534872938","first":6}`

async function getPosts() {
  const data = await fetch(url).then(res => res.json())
  console.log(data)
  return data
}
