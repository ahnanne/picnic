import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import fivespotLogo from '../public/logo.png';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import GradientText from '@/components/common/GradientText';
import Button from '@/components/common/Button';

const LogoBox = styled.div`
  width: 300px;
  margin: 0 auto 20px;
`;

const FlexBox = styled.div`
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
      <FlexBox style={{ width: '100%', height: '100%', flexFlow: 'column' }}>
        <Title
          level={1}
          style={{ marginBottom: '100px' }}
        >
          <LogoBox>
            <Image
              src={fivespotLogo}
              alt='파이브스팟 로고'
              placeholder='blur'
            />
          </LogoBox>
          🌼
          <GradientText
            startColor='#f3b933'
            endColor='#F36E33'
            style={{ display: 'inline', margin: '0 10px' }}
          >
            파이브스팟 봄소풍
          </GradientText>
          🌼
        </Title>
        <FlexBox style={{ marginTop: '40px' }}>
          <Button
            href='/team'
            style={{ marginRight: '10px' }}
          >
            팀 짜기
          </Button>
          <Button href='/program/song'>
            프로그램
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
