import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InputForm } from './input_form';

export default function InputPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/" className="font-bold text-red-400">
          홈으로 이동
        </Link>
      </div>
      <div className="mb-8">
        <Input type="email" placeholder="Email을 입력하십쇼" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      <div className="mb-8">
        <Input disabled type="email" placeholder="Email" />
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div>
        <InputForm />
      </div>
    </>
  );
}
