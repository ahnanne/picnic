import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 80px;
  padding: 20px;
`;

const Menu = styled.span(({ isCurrent }: { isCurrent: boolean }) => ({
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 700,
  marginRight: '24px',
  color: isCurrent ? '#ff9467' : '#1a1a1a',
}));

type MenuType = { href: string; label: string; };

const menuList: Array<MenuType> = [
  {
    href: '/',
    label: '메인',
  },
  {
    href: '/team',
    label: '팀 짜기',
  },
  {
    href: '/program/introduce',
    label: '자기소개',
  },
  {
    href: '/program/song',
    label: '음악시간',
  },
  {
    href: '/program/drawing',
    label: '미술시간',
  },
  {
    href: '/program/quiz',
    label: '체육시간',
  },
];

const GNB = () => {
  const router = useRouter();

  return (
    <Nav>
      {menuList.map(({ href, label }, idx) =>
        <Link
          key={idx}
          href={href}
          passHref
        >
          <Menu isCurrent={href === router.pathname}>
            {label}
          </Menu>
        </Link>,
      )}
    </Nav>
  );
};

export default GNB;