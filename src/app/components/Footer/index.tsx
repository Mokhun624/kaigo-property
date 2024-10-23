import s from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={`${s.footer}`}>
      <div className={`${s.inner}`}>
        <div className={`${s.logo}`}>
          <Image
            src='/logo_white.svg'
            alt='Top Image'
            layout='fill'
          />
        </div>
        <ul className={`${s.navi}`}>
          <li className={`${s.navi__item}`}>
            <Link href='#features'>ヘルスケア不動産投資の特長</Link>
          </li>
          <li className={`${s.navi__item}`}>
            <Link href='#example'>ご紹介の物件例</Link>
          </li>
          <li className={`${s.navi__item}`}>
            <Link href='/company'>会社概要</Link>
          </li>
          <li className={`${s.navi__item}`}>
            <Link href='/'>お問い合わせ</Link>
          </li>
          <li className={`${s.navi__item}`}>
            <Link href='/'>プライバシーポリシー</Link>
          </li>
        </ul>
        <div className={`${s.copyright}`}>© KAIGO PROPERTY,INC.All Right Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
