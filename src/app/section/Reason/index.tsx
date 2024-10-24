'use client';
import s from './index.module.scss';
import Image from 'next/image';
import { GetWindowSize } from '../../hooks/GetWindowSize';

const ReasonSection = () => {
  const { width } = GetWindowSize();
  const spFlag = width <= 850;
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
              <Image
                src='/letter_1.svg'
                alt='1'
                width={spFlag ? 4.515 : 7.31}
                height={spFlag ? 14.49 : 23.46}
                objectFit='contain'
                objectPosition='bottom'
              />
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
                src='/reason_01_sp.png'
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
              <Image
                src='/letter_2.svg'
                alt='2'
                width={spFlag ? 8.86 : 14.35}
                height={spFlag ? 14.68 : 23.77}
                objectFit='contain'
                objectPosition='bottom'
              />
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
              <Image
                src='/letter_3.svg'
                alt='3'
                width={spFlag ? 9.155 : 14.82}
                height={spFlag ? 14.87 : 24.07}
                objectFit='contain'
                objectPosition='bottom'
              />
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
            width='18.408'
            height='88.946'
            viewBox='0 0 18.408 88.946'
          >
            <path
              id='パス_574'
              data-name='パス 574'
              d='M-31.187,0l-3.822-7.774a4.684,4.684,0,0,0,3.25-4.81c0-3.562-2.47-5.356-6.6-5.356h-6.11V0h3.016V-7.28h3.484L-34.515,0Zm-10.27-9.88v-5.434h2.886c2.548,0,3.8.7,3.8,2.73s-1.248,2.7-3.8,2.7Zm12.87-8.06V0h11V-2.6h-7.982V-7.982h7.2v-2.6h-7.2v-4.732h7.982V-17.94ZM-13.429,0l1.222-3.718h6.474L-4.511,0h3.2l-6.24-17.94h-2.86L-16.653,0Zm4.446-13.572,2.392,7.254h-4.784Zm21.346-1.664c-1.274-1.976-3.276-2.938-6.136-2.938-4.212,0-5.98,2.262-5.98,4.966,0,3.042,1.95,4.706,5.408,5.434,3.12.676,3.926,1.56,3.926,2.99,0,1.3-.78,2.392-3.25,2.392a4.8,4.8,0,0,1-4.186-1.95L-.221-2.7C1.261-.7,3.419.234,6.487.234c4.316,0,6.11-2.47,6.11-5.148,0-3.224-1.872-4.576-5.486-5.356-2.5-.546-3.848-1.222-3.848-2.938,0-1.508,1.092-2.34,2.938-2.34a4.183,4.183,0,0,1,3.874,1.95Zm15.99,7.41v-2.288c0-5.642-2.7-8.06-6.734-8.06-4,0-6.708,2.418-6.708,8.06v2.288c0,5.642,2.7,8.06,6.708,8.06C25.649.234,28.353-2.184,28.353-7.826ZM17.927-10.114c0-3.874,1.3-5.434,3.692-5.434s3.718,1.56,3.718,5.434v2.288c0,3.874-1.326,5.434-3.718,5.434s-3.692-1.56-3.692-5.434ZM41.561-17.94V-5.59L34.177-17.94h-2.6V0h2.912V-12.194L41.8,0h2.678V-17.94Z'
              transform='translate(0.234 44.473) rotate(90)'
              fill='#e26803'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
