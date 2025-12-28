import Article from "./Article";
import styles from "./styles/ArticleList.module.css";
import { useRef, useEffect } from "react";

export default function ArticleList({ dataPosts }) {
	const bottomRef = useRef(null);
	const hasMounted = useRef(false);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [dataPosts]);

	return (
		<div className={styles.posts_container}>
			{dataPosts.map((post) => (
				<Article key={post.id} post={post} />
			))}
			<div ref={bottomRef} />
		</div>
	);
}
