// import Image from 'next/image';
// import styles from './page.module.scss';
import Kv from './section/Kv';
import ReasonSection from './section/Reason';
import ExampleSection from './section/Example';
import AttentionSection from './section/Attention';
import FeaturesSection from './section/Features';
import StructureSection from './section/Structure';

export default function Home() {
  return (
    <main>
      <Kv />
      <ReasonSection />
      <ExampleSection />
      <AttentionSection />
      <FeaturesSection />
      <StructureSection />
      <ExampleSection />
    </main>
  );
}
