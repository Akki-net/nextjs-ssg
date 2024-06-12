import React from 'react'
import Link from 'next/link'

const fetchApi = async (uri) => {
    const res = await fetch(uri)
    return res.json()
}

async function page() {
    const { posts } = await fetchApi('https://dummyjson.com/posts')
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default page