import s from './index.module.scss';

import Image from 'next/image';
import { useState, ReactNode } from 'react';

type Props = {
  index: number;
  text: ReactNode | string;
  imgPath: string;
  note?: ReactNode | string;
  topContent: ReactNode | string;
  btmContent?: ReactNode | string;
  graphPath: string;
  explanation: ReactNode | string;
};

const AccordionItem = ({
  index,
  text,
  imgPath,
  note,
  topContent,
  btmContent,
  graphPath,
  explanation,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${s.accordionItem} u-accordion u_${index}`}>
        <div className={`${s.number}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='60'
            viewBox='0 0 26 60'
          >
            <text
              id='_1'
              data-name='1'
              transform='translate(13 45)'
              fill='#fff'
              fontSize='47'
              fontFamily="DIN2014-Demi, 'DIN \32 014'"
              fontWeight='300'
            >
              <tspan
                x='-12.267'
                y='0'
              >
                {index}
              </tspan>
            </text>
          </svg>
        </div>
        <div className={`${s.head}`}>
          <div className={`${s.text}`}>
            {text}
            {note && <p className={`${s.note}`}>{note}</p>}
          </div>
          <div className={`${s.icon}`}>
            <Image
              src={imgPath}
              alt=''
              width={100}
              height={100}
              sizes='100vw'
              objectFit='contain'
            />
          </div>
        </div>
        <div
          className={`${s.content}`}
          style={{ height: isOpen ? 'auto' : 0 }}
        >
          <div className={`${s.inner}`}>
            <div className={`${s.title}`}>その理由は？</div>
            <div className={`${s.top}`}>{topContent}</div>
            <div className={`${s.graph}  u-graph`}>
              <Image
                src={graphPath}
                alt=''
                layout='fill'
              />
            </div>
            {btmContent && <div className={`${s.btm}`}>{btmContent}</div>}
            <div className={`${s.explanation}`}>
              <div className={`${s.title}`}>解説</div>
              <div className={`${s.content}`}>{explanation}</div>
            </div>
          </div>
        </div>
        <button
          className={`${s.button} ${isOpen ? s.open : ''}`}
          type='button'
          onClick={toggleAccordion}
        >
          {isOpen ? '閉じる' : 'その理由は？'}
        </button>
      </div>
    </>
  );
};

export default AccordionItem;
