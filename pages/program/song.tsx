import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import Program from '@/components/common/Program';
import jyp from '@/assets/jyp.jpg';

const Container = styled.div`
  padding: 40px;
`;

const Text = styled.p`
  font-size: 24px;
`;


const Song = () => (
  <Layout title='음악시간'>
    <Container>
      <Program
        backgroundImage={jyp}
        mainTitle='무슨 노래일까요?'
        subTitle='노래 1초 듣고 제목 알아맞히기'
      >
        <Text>
          주제: 2010년대 히트곡
        </Text>
      </Program>
    </Container>
  </Layout>
);

export default Song;