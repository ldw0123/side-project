import Link from 'next/link';
import AccordionComponent from '@/components/ui/\baccordion/accordionComponent';
import { ChartPage } from '../components/ui/chart/chartPage';

export default function Home() {
  return (
    <>
      <div className="text-3xl font-bold">메인 페이지</div>
      <div>
        <AccordionComponent />
        <div className="text-orange-400 mt-5">
          <Link href="/flexlayout">레이아웃 페이지 이동</Link>
        </div>
        <div className="text-orange-400 mt-5">
          <Link href="/cytoscape">그래프 페이지 이동</Link>
        </div>
        <ChartPage />
      </div>
    </>
  );
}
