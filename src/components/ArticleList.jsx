import Article from "./Article"
import data from '../data/blog'
import styles from "./styles/ArticleList.module.css"

export default function ArticleList() {

  return (

    <div className={styles.posts_container}>
        {
            data.posts.map(
                post=>{
                    return <Article key={post.id}  post={post}/>
                }
            )
        }
    </div>
  )
}
