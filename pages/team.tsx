import { useState } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';

import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';

export default function Team() {
  return (
    <Container>
      <Head>
        <title>파이브스팟 봄소풍 - 팀 짜기</title>
      </Head>
      <Button
        href='/'
        style={{ width: '180px' }}
      >
        메인으로
      </Button>
      {/* TODO: nav */}
    </Container>
  );
}
