import Link from 'next/link';
export default function DonePage() {
  return (
    <div>
      <h1>주문 완료</h1>

      <p>주문이 완료되었습니다.</p>

      <Link href="/">
        <button>처음으로</button>
      </Link>
    </div>
  );
}
