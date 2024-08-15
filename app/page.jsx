
import TopicsList from '@/components/TopicsList';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <TopicsList />
      <h2 className="text-red-700 font-bold p-1">Map with Markers</h2>
      <Map />
    </div>
  );
}
