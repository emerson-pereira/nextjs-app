import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.page} m-4`}>
      <h1>Frontend app to represent a web app layout with</h1>

      <ul>
        <li>Header navigation</li>
        <li>Side navigation</li>
        <li>Stepped form filling</li>
      </ul>

      <Link href="/avisos">Ir à /avisos</Link>
    </div>
  );
}
