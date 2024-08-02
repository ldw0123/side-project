import Link from 'next/link';
import { ComboboxPopover } from './combobox_popover';
import { ComboboxDropdownMenu } from './combobox_dropdown';
import { ComboBoxResponsive } from './coombobox_responsive';
import { ComboboxForm } from './combobox_form';

export default function ComboboxPage() {
  return (
    <>
      <div className="mb-2">
        <Link href="/" className="font-bold text-red-400">
          홈으로 이동
        </Link>
      </div>
      <div className="mb-10 font-bold text-red-400">
        <Link href="/combobox/default">Combobox Dropdown으로 이동</Link>
      </div>
      <div className="mb-10">
        <p className="text-blue-400">Popover</p>
        <ComboboxPopover />
      </div>
      <div className="mb-10">
        <p className="text-blue-400">Dropdown menu</p>
        <ComboboxDropdownMenu />
      </div>
      <div className="mb-10">
        <p className="text-blue-400">Responsive</p>
        <ComboBoxResponsive />
      </div>
      <div className="mb-10">
        <p className="text-blue-400">Form</p>
        <ComboboxForm />
      </div>
    </>
  );
}
