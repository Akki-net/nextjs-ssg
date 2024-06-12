import React from 'react'

const fetchApi = async (uri) => {
    const res = await fetch(uri)
    return res.json()
}

async function page({ params }) {
    const post = await fetchApi(`https://dummyjson.com/posts/${params.id}`)

    return (
        <div>
            <h2>Content</h2>
            <p>{post.body}</p>
        </div>
    )
}

export async function generateStaticParams() {
    const { posts } = await fetchApi('https://dummyjson.com/posts')
    return posts.map(post => ({
        id: post.id.toString()
    }))
}

export default page