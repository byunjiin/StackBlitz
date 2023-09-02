import Link from 'next/link';
import { useState } from 'react';
import styles from './MenuItem.module.css';

const formatter = Intl.NumberFormat('ko-kr');
export function MenuItem({ name, price }) {
  const [count, setCount] = useState(1);
  const removeItem = () => {
    if (count <= 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };
  const addItem = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div className={styles.price}>{formatter.format(price)}원</div>
      <div>
        <button onClick={removeItem}>-</button>
        <span>{count}</span>
        <button onClick={addItem}>+</button>
      </div>
      {count > 1 && (
        <div className={styles.price}>
          합계 : {formatter.format(price * count)}원
        </div>
      )}
      <Link href="/done">
        <button>주문하기</button>
      </Link>
    </div>
  );
}
