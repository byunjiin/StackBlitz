import { MenuItem } from '../components';

export default function SinglesPage() {
  return (
    <div>
      <ul>
        <li>
          <MenuItem name="햄버거" price={2900} />
        </li>
        <li>
          <MenuItem name="치즈햄버거" price={2900 + 500} />
        </li>
        <li>
          <MenuItem name="불고기기햄버거" price={2900 + 800} />
        </li>
        <li>
          <MenuItem name="새우우햄버거" price={2900 + 900} />
        </li>
      </ul>
      <div>
        <button>뒤로 가기</button>
      </div>
      <div>
        <button>처음으로 </button>
      </div>
    </div>
  );
}
