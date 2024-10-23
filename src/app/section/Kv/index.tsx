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
              width={100}
              height={100}
              sizes='100vw'
              objectFit='contain'
              className='sp-none'
            />
            <Image
              src='/caption_kv_sp.svg'
              alt='賢い人に選ばれる。ヘルスケア不動産投資。'
              width={100}
              height={100}
              sizes='100vw'
              objectFit='contain'
              className='pc-none'
            />
          </h1>
          <div className={`${s.scroll}`}>
            <Image
              src='/letter_scroll.svg'
              alt='Scroll'
              width={62}
              height={28}
            />
          </div>
        </div>
        <div className={`${s.banner}`}>
          <Image
            src='/banner_kv.jpg'
            alt='Top Image'
            width={100}
            height={100}
            sizes='100vw'
            objectFit='contain'
            className='sp-none'
          />
          <Image
            src='/banner_kv_sp.jpg'
            alt='Top Image'
            width={100}
            height={100}
            sizes='100vw'
            objectFit='contain'
            className='pc-none'
          />
        </div>
      </div>
    </>
  );
};

export default Kv;
