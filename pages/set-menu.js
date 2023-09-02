import { MenuItem } from '../components';
import Link from 'next/link';

export default function SetMenuPage() {
  return (
    <div>
      <ul>
        <li>
          <MenuItem name="햄버거 세트" price={2900 + 1000} />
        </li>
        <li>
          <MenuItem name="치즈햄버거 세트" price={2900 + 500 + 1000} />
        </li>
        <li>
          <MenuItem name="불고기기햄버거 세트" price={2900 + 800 + 1000} />
        </li>
        <li>
          <MenuItem name="새우우햄버거 세트" price={2900 + 900 + 1000} />
        </li>
      </ul>
      <div>
        <Link href="/start">
          <button>뒤로 가기</button>
        </Link>
      </div>
      <div>
        <Link href="/">
          <button>처음으로</button>
        </Link>
      </div>
    </div>
  );
}
