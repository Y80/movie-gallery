import '@/styles/header.scss';
import { useHistory } from 'react-router';

export default function Header() {
  const history = useHistory();

  return (
    <header>
      <span onClick={() => history.push('/home')}>🎬 电影画廊</span>
      {!history.location.pathname.startsWith('/search') && (
        <span onClick={() => history.push('/search')}>🔍 搜索 </span>
      )}
    </header>
  );
}
