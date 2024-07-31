/* eslint-disable react/no-unescaped-entities */

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function buttonPage() {
  return (
    <>
      <div className="mb-5">
        <Link href="/" className="font-bold text-red-400">
          홈으로 이동
        </Link>
      </div>
      <div>
        <Button variant="default" size="default">
          variant="default"
        </Button>
      </div>
      <div>
        <Button variant="destructive" size="icon">
          variant="destructive"
        </Button>
      </div>
      <div>
        <Button variant="outline" size="lg">
          variant="outline"
        </Button>
      </div>
      <div>
        <Button variant="secondary" size="sm">
          variant="secondary"
        </Button>
      </div>
      <div>
        <Button variant="ghost">variant="ghost"</Button>
      </div>
      <div>
        <Button variant="link">variant="link"</Button>
      </div>
      <div>
        <Button defaultValue="variant">defaultVariants</Button>
      </div>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        기다리셈!
      </Button>
      <div>
        <Button variant="violet" size="customSize">
          커스텀
        </Button>
      </div>
    </>
  );
}
