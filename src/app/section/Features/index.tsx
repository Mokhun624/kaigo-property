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
            width='18.408'
            height='114.764'
            viewBox='0 0 18.408 114.764'
          >
            <path
              id='パス_590'
              data-name='パス 590'
              d='M-56.927-17.94V0h3.016V-7.566h7.2v-2.6h-7.2v-5.148h7.982V-17.94Zm13.65,0V0h11V-2.6h-7.982V-7.982h7.2v-2.6h-7.2v-4.732h7.982V-17.94ZM-28.119,0-26.9-3.718h6.474L-19.2,0H-16l-6.24-17.94H-25.1L-31.343,0Zm4.446-13.572,2.392,7.254h-4.784Zm7.046-4.368v2.626h5.174V0h3.016V-15.314h5.148V-17.94Zm25.9,0V-7.254c0,3.432-1.222,4.862-3.692,4.862S1.885-3.822,1.885-7.254V-17.94H-1.131V-7.254C-1.131-1.976,1.6.234,5.577.234s6.708-2.21,6.708-7.514V-17.94ZM29.523,0,25.7-7.774a4.684,4.684,0,0,0,3.25-4.81c0-3.562-2.47-5.356-6.6-5.356h-6.11V0h3.016V-7.28h3.484L26.2,0ZM19.253-9.88v-5.434h2.886c2.548,0,3.8.7,3.8,2.73s-1.248,2.7-3.8,2.7Zm12.87-8.06V0h11V-2.6H35.139V-7.982h7.2v-2.6h-7.2v-4.732h7.982V-17.94Zm25.48,2.7c-1.274-1.976-3.276-2.938-6.136-2.938-4.212,0-5.98,2.262-5.98,4.966,0,3.042,1.95,4.706,5.408,5.434,3.12.676,3.926,1.56,3.926,2.99,0,1.3-.78,2.392-3.25,2.392a4.8,4.8,0,0,1-4.186-1.95L45.019-2.7C46.5-.7,48.659.234,51.727.234c4.316,0,6.11-2.47,6.11-5.148,0-3.224-1.872-4.576-5.486-5.356-2.5-.546-3.848-1.222-3.848-2.938,0-1.508,1.092-2.34,2.938-2.34a4.183,4.183,0,0,1,3.874,1.95Z'
              transform='translate(0.234 56.927) rotate(90)'
              fill='#fff'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
