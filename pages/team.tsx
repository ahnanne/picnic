import { useState } from 'react';
import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import getRandomTeam from 'utils/getRandomTeam';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Popup = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  width: 100%;
  height: 340px;
  max-width: 500px;
  background-color: #fff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 8px;
  padding: 20px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: transparent;

  > span {
    font-size: 24px;
  }
`;

import Layout from '@/components/layout/Layout';

export default function Team() {
  const [ open, setOpen ] = useState(false);
  const [ memberInput, setMemberInput ] = useState('');
  const [ numberInput, setNumberInput ] = useState('1');
  const [ result, setResult ] = useState<any | null>(null); // TODO: 랜덤 팀 result 타입 정의

  // console.log(getRandomTeam({
  //   members: '안예인,홍길동,헬로키티,a님,b님,c님,d님',
  //   teamMemberNumber: 3,
  // }));

  return (
    <Layout title='팀 짜기'>
      <Container>
        {open && (
          <Popup>
            <CloseButton onClick={() => setOpen(false)}>
              <span
                role='presentation'
                title='닫기'
                aria-label='닫기'
              >&times;</span>
            </CloseButton>
            <Input
              id='members-input'
              label='인원 명단'
              value={memberInput}
              setValue={setMemberInput}
              subText={`쉼표(,)로 구분하여 입력 (예: '안예인,홍길동')`}
              style={{ marginTop: '20px' }}
            />
            <Input
              id='total-input'
              label='한 팀당 인원'
              value={numberInput}
              setValue={setNumberInput}
              subText='숫자만 입력 가능'
              style={{ marginTop: '20px' }}
            />
            <Button
              onClick={() => console.log('todo')}
              style={{ display: 'block', margin: '30px auto' }}
            >
              팀 짜기!
            </Button>
          </Popup>
        )}
        <p>팀 짜기가 고민 된다면!?</p>
        <Button
          onClick={() => setOpen(true)}
          style={{ marginTop: '20px' }}
        >
          랜덤으로 팀 짜기
        </Button>
      </Container>
    </Layout>
  );
}
