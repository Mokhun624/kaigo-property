// import Image from 'next/image';
// import styles from './page.module.scss';
import Kv from './section/kv';
import ReasonSection from './section/reason';

export default function Home() {
  return (
    <main>
      <Kv />
      <ReasonSection />
    </main>
  );
}
