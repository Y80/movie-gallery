import { useEffect, useState } from 'react';
import '@/styles/pagination.scss';

interface PaginationProps {
  current: number;
  total: number;
  setCurrent: (value: number) => void;
}

const PAGE_SIZE = 10;

export default function Pagination({
  current,
  total,
  setCurrent,
}: PaginationProps) {
  // API 限制 page 最大为 100
  const actuallyTotal = total > 1000 ? 1000 : total;
  const maxPage = Math.ceil(actuallyTotal / PAGE_SIZE);
  const [middlePageList, setMiddlePageList] = useState<number[]>([]);

  // 设置分页器中间的几个页码值
  useEffect(() => {
    let pageList: number[] = [];
    // pageList[0] 一定为 2，pageList[-1] 最大为 maxPage
    if (maxPage <= 2) {
      pageList = [];
    } else if (maxPage <= 7) {
      pageList = Array.from(Array(maxPage - 2)).map((item, idx) => idx + 2);
    } else {
      pageList = Array.from(Array(current - 1)).map((item, idx) => idx + 2);

      if (pageList.length && pageList[pageList.length - 1] === maxPage) {
        pageList.pop();
      }

      for (let index = 1; index <= 5; index++) {
        if (current + index < maxPage) {
          pageList.push(current + index);
        } else {
          break;
        }
      }
      if (pageList.length > 5) {
        if ([1, 2, 3, 4].includes(current)) {
          pageList = pageList.slice(0, 5);
        } else if (
          [maxPage, maxPage - 1, maxPage - 2, maxPage - 3].includes(current)
        ) {
          pageList = pageList.slice(-5);
        } else {
          const idx = pageList.findIndex((page) => page === current);
          pageList = pageList.slice(idx - 2, idx + 3);
        }
      }
    }

    setMiddlePageList(pageList);
  }, [current, actuallyTotal, maxPage]);

  return (
    <p className="pagination">
      <span className="total">共 {actuallyTotal} 条数据</span>
      <button onClick={() => setCurrent(1)} disabled={1 === current}>
        1
      </button>
      {middlePageList[0] && middlePageList[0] !== 2 && '...'}
      {middlePageList.map((page) => (
        <button
          key={page}
          disabled={page === current}
          onClick={() => setCurrent(page)}
        >
          {page}
        </button>
      ))}
      {middlePageList.length &&
        middlePageList[middlePageList.length - 1] !== maxPage - 1 &&
        '...'}
      {maxPage !== 1 && (
        <button
          onClick={() => setCurrent(maxPage)}
          disabled={maxPage === current}
        >
          {maxPage}
        </button>
      )}
    </p>
  );
}
