import s from './index.module.scss';
import Link from 'next/link';
import PropertyCard from '../../components/PropertyCard';

type Props = {
  target: boolean;
};

const ExampleSection = ({ target }: Props) => {
  return (
    <section
      className={`${s.example}`}
      id={target ? 'example' : ''}
    >
      <div className={`${s.inner}`}>
        <h2 className={`${s.title}`}>ご成約の物件例</h2>
        <div className={`${s.text}`}>
          ヘルスケア不動産に積極的な金融機関のご紹介も可能です。
          <br />
          詳しくはお問合せください。
        </div>
        <div className={`${s.listWrap}`}>
          <div className={`${s.list}`}>
            <PropertyCard
              address='大阪府茨木市豊川'
              imgPath='/map_01.jpg'
              table1='689,000,000円（税込）'
              table2={
                <>
                  大阪モノレール「豊川」駅 <br />
                  徒歩9分
                </>
              }
              table3='6.0%'
              table4='1135.84㎡（343.59坪）'
              table5='1441.59㎡（436.08坪）'
              table6='鉄骨造3階建'
              table7='53室'
              table8={
                <>
                  41,340,000円
                  <br />
                  （65,000円@室）
                </>
              }
              percent='5.52'
              income='41,340,000円'
              expenditure='▲3,300,000円'
              net='38,040,000円'
            />
            <PropertyCard
              address='大阪府大阪市東住吉区矢田'
              imgPath='/map_02.jpg'
              table1='731,610,000円（税込）'
              table2='大阪メトロ谷町線「喜連瓜破」駅　徒歩11分'
              table3='6.2%'
              table4='803.30㎡（242.99坪）'
              table5='1548.96㎡（468.56坪）'
              table6='鉄骨造4階建'
              table7='63室'
              table8={
                <>
                  45,360,000円
                  <br />
                  （60,000円@室）
                </>
              }
              percent='5.72'
              income='45,360,000円'
              expenditure='▲3,500,000円'
              net='41,860,000円'
            />
            <PropertyCard
              address='京都府宇治市神明石塚'
              imgPath='/map_03.jpg'
              table1='534,200,000円（税込）'
              table2={
                <>
                  JR奈良線「小倉」駅
                  <br />
                  徒歩8分
                </>
              }
              table3='6.2%'
              table4='720.57㎡（217.97坪）'
              table5='1132.60㎡（342.61坪）'
              table6='鉄骨造3階建'
              table7='46室'
              table8={
                <>
                  33,120,000円
                  <br />
                  （60,000円@室）
                </>
              }
              percent='5.67'
              income='33,120,000円'
              expenditure='▲2,820,000円'
              net='30,300,000円'
            />
          </div>
        </div>
        <div className={`${s.btnWrap}`}>
          <p className={`${s.cmt}`}>
            現在、投資可能な
            <br className='pc-none' />
            ヘルスケア不動産の情報を
            <br className='pc-none' />
            お届けします。
          </p>
          <Link
            href='/'
            className={`${s.btn}`}
          >
            物件詳細を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
