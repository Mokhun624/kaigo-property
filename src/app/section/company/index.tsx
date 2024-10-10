import s from './index.module.scss';
// import Image from 'next/image';

const Company = () => {
  return (
    <>
      <div className={`${s.company}`}>
        <div className={`${s.inner}`}>
          <h1 className={`${s.title}`}>
            <span className={`${s.ja}`}>会社概要</span>
            <span className={`${s.en}`}>COMPANY</span>
          </h1>
          <table className={`${s.table}`}>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社カイゴプロパティ</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  530-0015大阪府大阪市北区中崎西2-2-1
                  <br />
                  東梅田八千代ビル3階
                </td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>高橋 宏文</td>
              </tr>
              <tr>
                <th>宅建業免許番号</th>
                <td>XXXXXX-XXXXXXXXXXX</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  ・ヘルスケア不動産の売買仲介
                  <br />
                  ・不動産に関するコンサルティング業務
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Company;
