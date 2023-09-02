import Link from 'next/link';
import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={styles.container}>
      <h1>메뉴 주문하기</h1>
      <Link href="/start">
        <button className={styles.button}>시작하기</button>
      </Link>
    </div>
  );
}
