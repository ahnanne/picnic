import Head from 'next/head';

import Container from '@/components/common/Container';
import GNB from '@/components/common/GNB';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => (
  <Container>
    <GNB />
    <Head>
      <title>파이브스팟 봄소풍 - {title}</title>
    </Head>
    {children}
  </Container>
);

export default Layout;