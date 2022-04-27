import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import Program from '@/components/common/Program';
import Title from '@/components/common/Title';
import Text from '@/components/common/Text';
import art from '@/assets/art.jpg';

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

/** https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=2010smart&logNo=221090831764 */
const Drawing = () => (
  <Layout title='미술시간'>
    <Container>
      <Program
        backgroundImage={art}
        mainTitle='그림 이어그리기'
        subTitle='팀원들과 함께 그림 완성시키기'
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
                제시어를 맞출 팀원 1명을 뽑아주세요. 이 팀원은 그림이 완성될 때까지 뒤를 돌아보고 있어야 합니다.
              </Text>
            </li>

            <li>
              <Text>
                나머지 팀원들은 제시어를 보고, 한 명씩 돌아가면서 화이트보드에 5초 간 제시어를 나타내는 그림을 그려주세요.
              </Text>
            </li>

            <li>
              <Text>
                뒤돌아있던 팀원은 그림을 보고 5초 내에 제시어가 무엇일지 알아맞혀야 합니다.
              </Text>
            </li>
          </ol>
        </GameRule>
      </Program>
    </Container>
  </Layout>
);

export default Drawing;