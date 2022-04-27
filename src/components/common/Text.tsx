import styled from '@emotion/styled';

const P = styled.p`
  font-size: 24px;
  margin-top: 30px;
`;

type Props = {
  children: React.ReactNode;
};

const Text = ({ children }: Props) => <P>{children}</P>;

export default Text;