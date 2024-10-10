import s from './index.module.scss';
import Image from 'next/image';

const Kv = () => {
  return (
    <>
      <div className={`${s.kv}`}>
        <div className={`${s.inner}`}>
          <h1 className={`${s.caption}`}>
            <Image
              src='/caption_kv.svg'
              alt='賢い人に選ばれる。ヘルスケア不動産投資。'
              layout='fill'
            />
          </h1>
          <div className={`${s.scroll}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='62'
              height='28'
              viewBox='0 0 62 28'
            >
              <text
                id='Scroll'
                transform='translate(31 21)'
                fill='#151515'
                font-size='22'
                font-family="DIN2014-Bold, 'DIN \32 014'"
                font-weight='700'
                letter-spacing='0.05em'
              >
                <tspan
                  x='-30.173'
                  y='0'
                >
                  Scroll
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className={`${s.banner}`}>
        <Image
          src='/banner_kv.jpg'
          alt='Top Image'
          layout='fill'
        />
      </div>
    </>
  );
};

export default Kv;
