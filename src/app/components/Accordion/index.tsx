import s from './index.module.scss';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState, ReactNode } from 'react';

Modal.setAppElement('.graphModal');

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
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${s.accordionItem} u-accordion u_${index}`}>
        <div className={`${s.number} number`}>
          <Image
            src={'/letter_' + index + '.svg'}
            alt={index.toString()}
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
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
                width={100}
                height={100}
                sizes='100vw'
                objectFit='contain'
              />
              <div className='pc-none graphModal'>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`${s.openBtn}`}
                >
                  <Image
                    src='/icn_search.svg'
                    alt=''
                    width={100}
                    height={100}
                    sizes='100vw'
                    objectFit='contain'
                  />
                </button>
                <Modal isOpen={modalIsOpen}>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className='closeBtn'
                  ></button>
                  <div className='graph-inner'>
                    <Image
                      src={graphPath}
                      alt=''
                      width={100}
                      height={100}
                      sizes='100vw'
                      objectFit='contain'
                    />
                  </div>
                </Modal>
              </div>
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
