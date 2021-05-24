import { FormEvent, useEffect, useState } from 'react';
import '@/styles/search.scss';
import { useHistory } from 'react-router';

export default function Search() {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [errorInfo, setErrorInfo] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputValue) {
      history.push(`/list/${inputValue}`);
    }
  }

  function handleInput(e: FormEvent<HTMLInputElement>) {
    setInputValue((e.target as HTMLInputElement).value);
  }

  useEffect(() => {
    if (/[^a-z\s\d]/i.test(inputValue)) {
      setErrorInfo('📣 仅英文搜索有效');
    } else {
      setErrorInfo('');
    }
  }, [inputValue]);

  return (
    <div className="search">
      <div className="search-box">
        <form onSubmit={handleSubmit} data-error={errorInfo}>
          <input
            type="text"
            value={inputValue}
            placeholder="请输入电影名称"
            onInput={handleInput}
          />
          <button type="submit">🔍</button>
        </form>
        <div className="search-histories" />
      </div>
    </div>
  );
}
