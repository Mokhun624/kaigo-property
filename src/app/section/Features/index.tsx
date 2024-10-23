'use client';
import s from './index.module.scss';
import Image from 'next/image';
import AccordionItem from '../../components/Accordion';

const FeaturesSection = () => {
  return (
    <section
      className={`${s.features}`}
      id='features'
    >
      <div className={`${s.inner}`}>
        <h2 className={`${s.title}`}>
          超高齢化社会に求められる介護施設。
          <br />
          <span className={`${s.large}`}>
            「ヘルスケア不動産投資」<span className={`${s.small}`}>の</span>
            <br className={`${s.br}`} />
            3つの特長。
          </span>
          <span className={`${s.bar}`}>
            <Image
              src='/title_bar.svg'
              alt=''
              width={100}
              height={100}
              objectFit='contain'
            />
          </span>
        </h2>
        <div className={`${s.list}`}>
          <AccordionItem
            index={1}
            text={
              <>
                新築・築浅<span className={'small'}>で</span>
                <br />
                NOI利回り6％超<span className={'small'}>を</span>実現
                <span className={'asterisk'}>※</span>
              </>
            }
            note='※利回りは物件よって異なります。'
            imgPath='/feature_01.svg'
            topContent={
              <>
                1棟借上賃貸借契約（マスターリース契約）で、
                <br />
                通常はオーナーの手間＆コストになるはずの
                <br />
                <p>
                  <span>「管理費用」</span>が<span>事業主負担</span>になります。
                </p>
              </>
            }
            graphPath='/graph_01.png'
            explanation='当社と金融機関で連携して審査した介護施設の運営会社による、1棟借上賃貸借契約（マスターリース契約）となります。そのため、入退去に伴う費用や建物管理（BM費）や修繕費用は、運営会社の負担となります。また、不動産管理会社に委託するプロパティマネジメント（PM費）も不要です。物件オーナーの負担が少ないため、表面利回りと実質利回りの差が小さくなり、高いNOIを実現します。'
          />
          <AccordionItem
            index={2}
            text={
              <>
                賃借人<span className={'small'}>の</span>介護事業者
                <span className={'small'}>が</span>
                <br />
                盤石<span className={'small'}>な</span>事業運営<span className={'small'}>を</span>
                実現
              </>
            }
            imgPath='/feature_02.svg'
            topContent={
              <>
                介護事業者は、入居者からの入居費と
                <br className='pc-none' />
                国からの介護報酬によって、
                <p>
                  <span>安定した事業運営</span>が<span>可能。</span>
                </p>
              </>
            }
            btmContent={
              <>
                事業収入の大半が <br className='pc-none' />
                <span>保険適用サービス</span>であることで
                <p>
                  <span>安定的な経営</span>が<span>実現！</span>
                </p>
              </>
            }
            graphPath='/graph_02.png'
            explanation='介護事業者は、入居者より受領する家賃、食費、共益費以外にも、各種介護サービスの提供に対する対価として、介護報酬を国保連に請求することができます。物件の家賃原資が入居者と国保連へ分散化することで、家賃滞納等のリスクも限定的に。介護事業者の安定した事業運営は、オーナーの不動産投資の安定性に大きく寄与します。'
          />
          <AccordionItem
            index={3}
            text={
              <>
                続く高齢化社会<span className={'small'}>で</span>
                <br />
                成長<span className={'small'}>が</span>見込めるヘルスケア市場
              </>
            }
            imgPath='/feature_03.svg'
            topContent={
              <>
                2045年まで高齢者は増え続けて、
                <p>
                  <span>介護施設のニーズ</span>が<span>高まります。</span>
                </p>
                その後も、総人口減少に対しての比率は
                <br className='pc-none' />
                高くなり続ける見込みです。
              </>
            }
            graphPath='/graph_03.png'
            explanation='すでに突入している超高齢化社会。それでも2045年まで高齢者人口は増え続けると予想されております。その後も人口に占める高齢者の割合は増え続け、2060年には、2.5人に1人が65歳以上、4人に1人が75歳以上になると予想されています。そのため、介護施設への入居率は高い水準で推移することが期待されます。'
          />
        </div>
        <div className={`${s.subttl}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='33'
            height='118'
            viewBox='0 0 33 118'
          >
            <text
              id='FEATURES'
              transform='translate(8 59) rotate(90)'
              fill='#fff'
              fontSize='26'
              fontFamily="DIN2014-Demi, 'DIN \32 014'"
              fontWeight='300'
            >
              <tspan
                x='-58.903'
                y='0'
              >
                FEATURES
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
