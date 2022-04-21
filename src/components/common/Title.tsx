import styled from '@emotion/styled';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Heading = styled.h1`
  font-size: 60px;
  font-weight: 700;
`;

const Title = ({ level = 1, children, style }: Props) => (
  <Heading
    as={`h${level}`}
    style={style}
  >
    {children}
  </Heading>
);

export default Title;