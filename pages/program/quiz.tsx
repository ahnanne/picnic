import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import Program from '@/components/common/Program';
import Title from '@/components/common/Title';
import olaf from '@/assets/olaf.jpg';

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

/** https://sblog.i-scream.co.kr/lyn0430/9219?sso=ok  */
const Quiz = () => (
  <Layout title='체육시간'>
    <Container>
      <Program
        backgroundImage={olaf}
        mainTitle='몸으로 말해요'
        subTitle='주제를 몸으로 표현하여 다음 사람에게 전달하고, 마지막 사람이 정답을 맞히는 놀이'
      >
        <Title
          level={3}
          style={{ fontSize: '30px', marginTop: '30px' }}
        >
          게임 규칙
        </Title>
        <GameRule>
          <ol>
            <li>
              <Text>
                한 팀의 팀원들은 모두 앞으로 나와주세요.
              </Text>
            </li>

            <li>
              <Text>
                맨 첫 번째 사람을 제외한 나머지 팀원은 모두 뒤돌아 있어주세요.
              </Text>
            </li>

            <li>
              <Text>
                첫 번째 사람은 랜덤으로 제시어를 뽑습니다.
              </Text>
            </li>

            <li>
              <Text>
                첫 번째 사람은 두 번째 사람을 톡톡 친 뒤, 해당 제시어를 오직 비언어적으로만 표현해서 상대에게 전달합니다.
              </Text>
            </li>

            <li>
              <Text>
                두 번째 사람도 마찬가지로 세 번째 사람에게 제시어를 전달합니다. 세 번째 사람도 마찬가지!
              </Text>
            </li>

            <li>
              <Text>
                마지막 사람은 제시어가 무엇인지 알아맞혀야 합니다.
              </Text>
            </li>
          </ol>
        </GameRule>
      </Program>
    </Container>
  </Layout>
);

export default Quiz;