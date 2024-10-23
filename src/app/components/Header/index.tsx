import s from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <header className={`${s.header}`}>
      <div className={`${s.inner}`}>
        <div className={`${s.logoWrap}`}>
          <Link
            href='/'
            className={`${s.logo}`}
          >
            <Image
              src='/logo_black.svg'
              alt='Top Image'
              layout='fill'
            />
          </Link>
        </div>
        <ul className={`${s.navi}`}>
          <li className={`${s.item}`}>
            <Link href='#features'>
              ヘルスケア
              <br className={`pc-none`} />
              不動産投資の特長
            </Link>
          </li>
          <li className={`${s.item}`}>
            <Link href='#example'>ご紹介の物件例</Link>
          </li>
          <li className={`${s.item}`}>
            <Link href='/about'>物件詳細を見る</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Footer;
