import Link from 'next/link';
import { useState } from 'react';

const formatter = Intl.NumberFormat('ko-kr');

export function MenuItem({ name, price }) {
  const { count, setCount } = useState(1);
  const removeItem = () => {
    if (count <= 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };
  const addItem = () => {
    if (count >= 5) {
      return;
    }
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>{name}</div>
      <div>{formatter.format(price)}원</div>
      <div>
        <button onClick={removeItem}>-</button>
        <span>{count}</span>
        <button onClick={addItem}>+</button>
      </div>

      <div>합계 : {formatter.format(price * count)}원</div>
      <Link href="/done">
        <button>주문하기</button>
      </Link>
    </div>
  );
}
