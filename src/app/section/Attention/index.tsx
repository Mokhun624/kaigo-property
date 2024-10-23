import s from './index.module.scss';
import Image from 'next/image';

const AttentionSection = () => {
  return (
    <section className={`${s.attention}`}>
      <div className={`${s.inner}`}>
        <div className={`${s.content}`}>
          <div className={`${s.inner}`}>
            <div className={`${s.caption}`}>
              介護施設<span className={`${s.small}`}>の</span>ヘルスケア不動産投資
              <span className={`${s.small}`}>
                が、
                <br className='pc-none' />
              </span>
              <span className={`${s.large}`}>注目されている理由。</span>
            </div>
            <div className={`${s.text}`}>
              介護施設のヘルスケア不動産投資は、高齢化社会による需要増加と長期賃貸契約による安定収益が魅力です。高齢者人口の増加に伴い、介護施設の必要性が高まり、安定した需要が見込めます。さらに、介護施設はテナントの入れ替えが少なく、運営管理も安定しているため、投資リスクが低減、年間1000万円以上のキャッシュフローの事例も。政府や自治体からの補助金や支援もあり、長期的に魅力的な投資先として注目されています。
            </div>
            <div className={`${s.image}`}>
              <Image
                src='/img_attention.png'
                alt='マップのイラスト'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttentionSection;
