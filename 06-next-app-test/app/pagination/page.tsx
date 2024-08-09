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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Post {
  id: number;
  body: string;
}

export default function PaginationPage() {
  const rowsPerPage = 10; // 페이지 당 행의 수
  const [data, setData] = useState<Post[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = res.data;
      console.log(data);
      setData(data);
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(startIndex, endIndex).map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="text-left">{item.id}</TableCell>
                <TableCell className="text-left">{item.body}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setStartIndex(0);
                setEndIndex(10);
              }}
              className="cursor-pointer"
            >
              1
            </PaginationLink>
            <PaginationLink
              onClick={() => {
                setStartIndex(10);
                setEndIndex(20);
              }}
              className="cursor-pointer"
            >
              2
            </PaginationLink>
            <PaginationLink
              onClick={() => {
                setStartIndex(20);
                setEndIndex(30);
              }}
              className="cursor-pointer"
            >
              3
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={
                endIndex === 100
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage); // 10
                setEndIndex(endIndex + rowsPerPage); // 10 + 10 = 20
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
