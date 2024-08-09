'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Post {
  id: number;
  body: string;
}

export default function PaginationDemo() {
  const rowsPerPage = 10; // 페이지 당 행의 수
  const [data, setData] = useState<Post[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = res.data;
      console.log(38, data);
    } catch (error) {
      console.error('Error fetching data!', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="flex justify-center mb-4 text-lg font-bold">Pagination</p>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
