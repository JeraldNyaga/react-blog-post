/* eslint-disable react/prop-types */

import styles from "./styles/Article.module.css"

export default function Article({ post }) {
	return (
		<article className={styles.post_card}>
			<h2 className={styles.post_title}>{post.title}</h2>
			<p className={styles.post_meta}>
				{post.date} • {post.minutes} min read
			</p>
			<p className={styles.post_preview}>{post.preview}</p>
		</article>
	);
}
