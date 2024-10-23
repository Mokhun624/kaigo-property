import s from './index.module.scss';
import Image from 'next/image';

const ReasonSection = () => {
  return (
    <section className={`${s.reason}`}>
      <div className={`${s.inner}`}>
        <h2 className={`${s.title}`}>
          介護施設<span className={`${s.small}`}>の</span>
          <br className={`pc-none`} />
          ヘルスケア不動産投資<span className={`${s.small}`}>が</span>
          <br />
          <span className={`${s.orange}`}>なぜ選ばれるのか？</span>
        </h2>
        <ul className={`${s.list}`}>
          <li className={`${s.item}`}>
            <div className={`${s.counter}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='43'
                viewBox='0 0 18 43'
              >
                <text
                  id='_1'
                  data-name='1'
                  transform='translate(9 32)'
                  fill='#fff'
                  fontSize='34'
                  fontFamily="DIN2014-Demi, 'DIN \32 014'"
                  fontWeight='300'
                  letterSpacing='0.05em'
                >
                  <tspan
                    x='-8.874'
                    y='0'
                  >
                    1
                  </tspan>
                </text>
              </svg>
            </div>
            <div className={`${s.illust}`}>
              <Image
                src='/reason_01.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                objectPosition='bottom'
                className='sp-none'
              />
              <Image
                src='/reason_01_sp.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                className='pc-none'
              />
            </div>
            <div className={`${s.text}`}>
              年間1000万円以上の
              <br />
              キャッシュフロー事例も。
            </div>
          </li>
          <li className={`${s.item}`}>
            <div className={`${s.counter}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='43'
                viewBox='0 0 18 43'
              >
                <text
                  id='_2'
                  data-name='2'
                  transform='translate(9 32)'
                  fill='#fff'
                  fontSize='34'
                  fontFamily="DIN2014-Demi, 'DIN \32 014'"
                  fontWeight='300'
                  letterSpacing='0.05em'
                >
                  <tspan
                    x='-8.874'
                    y='0'
                  >
                    2
                  </tspan>
                </text>
              </svg>
            </div>
            <div className={`${s.illust}`}>
              <Image
                src='/reason_02.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                className='sp-none'
              />
              <Image
                src='/reason_02_sp.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                className='pc-none'
              />
            </div>
            <div className={`${s.text}`}>
              各種介護サービスの
              <br />
              ７〜９割が保険適用。
            </div>
          </li>
          <li className={`${s.item}`}>
            <div className={`${s.counter}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='43'
                viewBox='0 0 18 43'
              >
                <text
                  id='_3'
                  data-name='3'
                  transform='translate(9 32)'
                  fill='#fff'
                  fontSize='34'
                  fontFamily="DIN2014-Demi, 'DIN \32 014'"
                  fontWeight='300'
                  letterSpacing='0.05em'
                >
                  <tspan
                    x='-8.874'
                    y='0'
                  >
                    3
                  </tspan>
                </text>
              </svg>
            </div>
            <div className={`${s.illust}`}>
              <Image
                src='/reason_03.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                objectPosition='0 26px'
                className='sp-none'
              />
              <Image
                src='/reason_03_sp.svg'
                alt='グラフ'
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
                className={`pc-none`}
              />
            </div>
            <div className={`${s.text}`}>
              2060年65歳以上の
              <br />
              人口割合は約4割に。
            </div>
          </li>
        </ul>
        <div className={`${s.subttl}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='33'
            height='94'
            viewBox='0 0 33 94'
          >
            <text
              id='REASON'
              transform='translate(8 47) rotate(90)'
              fill='#e26803'
              fontSize='26'
              fontFamily="DIN2014-Demi, 'DIN \32 014'"
              fontWeight='300'
            >
              <tspan
                x='-46.449'
                y='0'
              >
                REASON
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
