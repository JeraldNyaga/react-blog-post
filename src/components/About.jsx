import data from "../data/blog";
import styles from "./styles/About.module.css";

export default function About() {
	return (
		<section className={styles.about}>
			<img
				src={data.image}
				alt="A react Image"
				className={styles.image}
			/>
			<div className={styles.content}>
				<h2 className={styles.name}>{data.name}</h2>
				<p className={styles.text}>About: {data.about}</p>
			</div>
		</section>
	);
}
