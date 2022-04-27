import Head from 'next/head';

import Container from '@/components/common/Container';
import GNB from '@/components/common/GNB';

type Props = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Layout = ({ title, children, style }: Props) => (
  <Container style={style}>
    <GNB />
    <Head>
      <title>파이브스팟 봄소풍 - {title}</title>
    </Head>
    {children}
  </Container>
);

export default Layout;