import styled from '@emotion/styled';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  padding: 40px;
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => <Section>{children}</Section>;

export default Container;