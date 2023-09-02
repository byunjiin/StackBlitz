import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>메뉴 주문하기</h1>

      <Link href="/start">
        <button>시작하기</button>
      </Link>
    </div>
  );
}
