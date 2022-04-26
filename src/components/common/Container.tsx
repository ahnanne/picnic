import styled from '@emotion/styled';

const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => <Section>{children}</Section>;

export default Container;