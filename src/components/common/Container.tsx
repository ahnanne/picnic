import styled from '@emotion/styled';

const Section = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ children, style }: Props) => <Section style={style}>{children}</Section>;

export default Container;