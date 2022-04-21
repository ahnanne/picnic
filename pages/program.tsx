import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import fivespotLogo from '../public/logo.png';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import GradientText from '@/components/common/GradientText';

const LogoBox = styled.div`
  width: 300px;
  margin-bottom: 20px;
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>파이브스팟 봄소풍</title>
      </Head>
      <FlexBox>
        <Title level={1}>
          <LogoBox>
            <Image
              src={fivespotLogo}
              alt='파이브스팟 로고'
            />
          </LogoBox>
          🌼
          <GradientText
            startColor='#9867f0'
            endColor='#F36E33'
            style={{ display: 'inline', margin: '0 10px' }}
          >
            파이브스팟 봄소풍
          </GradientText>
          🌼
        </Title>
      </FlexBox>
    </Container>
  );
}
