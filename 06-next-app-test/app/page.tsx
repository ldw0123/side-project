import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="text-2xl mb-6">shadcn/ui</div>
      <div className="mb-2">
        <Link href="/button" className="font-bold text-red-400">
          button 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/input" className="font-bold text-red-400">
          input 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/combobox" className="font-bold text-red-400">
          combobox 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/todos" className="font-bold text-red-400">
          todos 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/signup" className="font-bold text-red-400">
          signup 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/chartblock" className="font-bold text-red-400">
          chartblock 페이지 이동
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/pagination" className="font-bold text-red-400">
          pagination 페이지 이동
        </Link>
      </div>
    </>
  );
}
