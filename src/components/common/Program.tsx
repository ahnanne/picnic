import styled from '@emotion/styled';

import Image, { StaticImageData } from 'next/image';
import Title from '@/components/common/Title';

type Props = {
  backgroundImage: StaticImageData;
  mainTitle: string;
  subTitle: string;
  children: React.ReactNode;
};

const GameRule = styled.div`
`;

const ImageWrap = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  word-break: keep-all;

  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 34px;
    margin-top: 20px;
    text-align: right;
  }
`;

const Program = ({
  backgroundImage,
  mainTitle,
  subTitle,
  children,
}: Props) => (
  <>
    <ImageWrap>
      <Image
        src={backgroundImage}
        alt=''
        placeholder='blur'
        style={{ opacity: .7 }}
      />
      <TitleWrap>
        <Title level={1}>
          {mainTitle}
        </Title>
        <Title level={2}>
          {subTitle}
        </Title>
      </TitleWrap>
    </ImageWrap>
    <GameRule>
      {children}
    </GameRule>
  </>
);

export default Program;