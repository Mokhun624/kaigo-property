import s from './index.module.scss';
import Image from 'next/image';

const StructureSection = () => {
  return (
    <section className={`${s.structure}`}>
      <div className={`${s.inner}`}>
        <h2 className={`${s.title}`}>
          リスクを軽減する
          <br className='pc-none' />
          カイゴプロパティの仕組み
        </h2>
        <div className={`${s.text}`}>
          金融機関と連携して、
          <br className='pc-none' />
          介護事業者の与信審査を実施。
          <br />
          破綻リスクの少ない優良な介護事業者が
          <br className='pc-none' />
          一括借り上げした物件を
          <p className={`${s.caption}`}>厳選してご紹介！</p>
        </div>
        <div className={`${s.content}`}>
          <div className={`${s.graph}`}>
            <Image
              src='/graph_structure.png'
              alt='リスクを軽減するカイゴプロパティの仕組み'
              width={100}
              height={100}
              sizes='100vw'
              objectFit='contain'
              className='sp-none'
            />
            <Image
              src='/graph_structure_sp.png'
              alt='リスクを軽減するカイゴプロパティの仕組み'
              width={100}
              height={100}
              sizes='100vw'
              objectFit='contain'
              className='pc-none'
            />
          </div>
          <div className={`${s.note}`}>
            賃貸人（オーナー）だけでなく、金融機関による与信審査を経た優良な介護事業者が長期間にわたり、物件を借り上げます。また万が一の解約があった場合も、バックアップ・オペレーター（次の賃借人候補法人）を準備しています。
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
