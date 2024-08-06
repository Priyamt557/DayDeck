import React from 'react'

import BlogHeader from '../components/BlogHeader'
import BlogContent from '../components/BlogContent'

const Blog = ({ isDarkMode }) => {
    return (
        <div>
            <BlogHeader isDarkMode={isDarkMode} />
            <BlogContent isDarkMode={isDarkMode} />
        </div>
    )
}

export default Blog