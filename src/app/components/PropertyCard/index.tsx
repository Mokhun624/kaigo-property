import s from './index.module.scss';
import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  address: ReactNode | string;
  imgPath: string;
  table1: ReactNode | string;
  table2: ReactNode | string;
  table3: ReactNode | string;
  table4: ReactNode | string;
  table5: ReactNode | string;
  table6: ReactNode | string;
  table7: ReactNode | string;
  table8: ReactNode | string;
  percent: string;
  income: string;
  expenditure: string;
  net: string;
};

const PropertyCard = ({
  address,
  imgPath,
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
  table8,
  percent,
  income,
  expenditure,
  net,
}: Props) => {
  return (
    <div className={`${s.propertyCard}`}>
      <div className={`${s.mapImg}`}>
        <Image
          src={imgPath}
          alt='マップのイラスト'
          width={100}
          height={100}
          sizes='100vw'
          objectFit='contain'
        />
      </div>
      <div className={`${s.detail}`}>
        <div className={`${s.address}`}>{address}</div>
        <table className={`${s.table}`}>
          <tbody>
            <tr>
              <th>売買価格</th>
              <td>{table1}</td>
            </tr>
            <tr>
              <th>交通</th>
              <td>{table2}</td>
            </tr>
            <tr>
              <th>表面利回り</th>
              <td>{table3}</td>
            </tr>
            <tr>
              <th>敷地面積</th>
              <td>{table4}</td>
            </tr>
            <tr>
              <th>延床面積</th>
              <td>{table5}</td>
            </tr>
            <tr>
              <th>構造・規模</th>
              <td>{table6}</td>
            </tr>
            <tr>
              <th>居室数</th>
              <td>{table7}</td>
            </tr>
            <tr>
              <th>年間賃料</th>
              <td>{table8}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${s.noi}`}>
        <div className={`${s.noiTitle}`}>【参考NOI利回り】</div>
        <div className={`${s.noiContent}`}>
          <div className={`${s.noiYield}`}>
            <div className={`${s.text}`}>
              実際実現した
              <br />
              NOI利回り
            </div>
            <div className={`${s.value}`}>
              <span>{percent}</span>%
            </div>
          </div>
          <div className={`${s.cashFlow}`}>
            <div className={`${s.title}`}>NETキャッシュフロー</div>
            <table className={`${s.table}`}>
              <tbody>
                <tr>
                  <th>収入 :</th>
                  <td>{income}</td>
                </tr>
                <tr>
                  <th>支出 :</th>
                  <td>{expenditure}</td>
                </tr>
                <tr>
                  <th>NET :</th>
                  <td>{net}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
