import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import CheckBox from '@/components/common/CheckBox';
import Title from '@/components/common/Title';

import getRandomTeam, { TeamType } from 'utils/getRandomTeam';
import JSConfetti from 'js-confetti';

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
  min-height: 340px;
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

const ResultBox = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding: 20px;
  font-size: 18px;
  line-height: 24px;

  & dl {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
  }

  & dt {
    font-weight: 700;
  }
  & dt:not(:first-of-type) {
    margin-top: 14px;
  }
`;

export default function Team() {
  const [ open, setOpen ] = useState(false);
  const [ memberInput, setMemberInput ] = useState('');
  const [ numberInput, setNumberInput ] = useState('1');
  const [ isFair, setIsFair ] = useState(false);
  const [ result, setResult ] = useState<Array<TeamType> | null>(null);
  
  const jsConfettiRef = useRef<JSConfetti>();

  const init = () => {
    setMemberInput('');
    setNumberInput('1');
    setResult(null);
    setIsFair(false);
  };

  const handleConfetti = useCallback(() => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti({
        emojis: [ '🦄', '🌈', '⚡️', '🧡', '✨', '💫', '🌸' ],
        confettiRadius: 10,
        emojiSize: 30,
        confettiNumber: 60,
      });
    }
  }, [ jsConfettiRef ]);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  // console.log(getRandomTeam({
  //   members: 'a,b,c,d,e,f,g,h',
  //   teamMemberNumber: 7,
  //   isFair: true,
  // }));
  // console.log(getRandomTeam({
  //   members: 'a,b,c,d,e,f,g,h,i,j,k,l,m',
  //   teamMemberNumber: 4,
  //   isFair: true,
  // }));
  // console.log(getRandomTeam({
  //   members: 'a,b,c,d,e,f,g,h,i,j,k,l,m,n',
  //   teamMemberNumber: 4,
  //   isFair: true,
  // }));

  return (
    <Layout title='팀 짜기'>
      <Container>
        {open && (
          <Popup>
            <CloseButton
              onClick={() => {
                init();
                setOpen(false);
              }}
            >
              <span
                role='presentation'
                title='닫기'
                aria-label='닫기'
              >&times;</span>
            </CloseButton>
            {result ? (
              <>
                <ResultBox>
                  <Title
                    level={1}
                    style={{ fontSize: '20px', marginBottom: '10px' }}
                  >축하드립니다^^🎉</Title>
                  <dl>
                    {result.map(({ teamName, members }, idx) =>
                      <React.Fragment key={idx}>
                        <dt>
                          {teamName}
                        </dt>
                        <dd>
                          {members.map(({ name }) => name).join(', ')}
                        </dd>
                      </React.Fragment>,
                    )}
                  </dl>
                </ResultBox>
                <Button
                  onClick={init}
                  style={{ display: 'block', margin: '0 auto' }}
                >다시 짜기!</Button>
              </>
            ) : (
              <>
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
                <CheckBox
                  id='is-fair'
                  label='인원 고르게 나누기'
                  checked={isFair}
                  handleChecked={() => {
                    setIsFair(!isFair);
                  }}
                  subText='설정하신 한 팀당 인원과 다를 수 있습니다.'
                  style={{ marginTop: '20px' }}
                />
                <Button
                  onClick={() => {
                    const res = getRandomTeam({
                      members: memberInput,
                      teamMemberNumber: Number(numberInput),
                      isFair,
                    });

                    setResult(res);
                    handleConfetti();
                  }}
                  style={{ display: 'block', margin: '30px auto' }}
                >
                  팀 짜기!
                </Button>
              </>
            )}
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
