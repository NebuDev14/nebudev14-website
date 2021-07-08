import Link from 'next/link';
import blogPostStyles from '../styles/BlogPost.module.css';

function BlogPost({blog}) {
    return (
        <div className={blogPostStyles.blogPost}>
            <div>
                <Link href={`/posts/${blog.slug}`}>
                    <a className={blogPostStyles.blogTitle}>{blog.title}</a>
                </Link>
                <div className={blogPostStyles.date}>{blog.date}</div>
            </div>
        </div>
    );
}

export default BlogPost;