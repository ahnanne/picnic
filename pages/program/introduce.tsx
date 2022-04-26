import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import Program from '@/components/common/Program';
import bonobono from '@/assets/bonobono.jpg';

const Container = styled.div`
  padding: 40px;
`;

const GameRule = styled.div`
  ol {
    list-style-type: decimal;
    width: 100%;

    > li {
      margin-top: 16px;
      margin-left: 20px;
    }
  }
`;

const Text = styled.p`
  font-size: 24px;
`;


const Introduce = () => (
  <Layout title='자기소개'>
    <Container>
      <Program
        backgroundImage={bonobono}
        mainTitle='저는 누구일까요?'
        subTitle='누구를 소개하는 내용인지 알아맞히기'
      >
        <GameRule>
          <ol>
            <li>
              <Text>
                나는 쉬는 날 _____하는 걸 좋아한다.
              </Text>
            </li>

            <li>
              <Text>
                죽기 전 마지막 한끼로 ______을 먹겠다.
              </Text>
            </li>

            <li>
              <Text>
                _____만큼은 누구보다 잘 할 자신이 있다.
              </Text>
            </li>

            <li>
              <Text>
                내 MBTI는 ____ 이다.
              </Text>
            </li>

            <li>
              <Text>
                나에 대한 TMI를 하나 말하자면, _______
              </Text>
            </li>
          </ol>
        </GameRule>
      </Program>
    </Container>
  </Layout>
);

export default Introduce;