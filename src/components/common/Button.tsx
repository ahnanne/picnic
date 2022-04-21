import styled from '@emotion/styled';
import Link from 'next/link';

const BASE_COLOR = '#f0eb67';
const SUB_COLOR = '#ff9467';

const CustomButton = styled.button`
  position: relative;
  width: 300px;
  padding: 16px;
  border: none;
  border-bottom: 5px solid ${SUB_COLOR};
  border-radius: 10px;
  /* background: ${BASE_COLOR}; */
  background: linear-gradient(to right, ${BASE_COLOR} 0%, ${SUB_COLOR} 51%, ${BASE_COLOR} 100%);
  background-size: 200% auto;
  color: #fafafa;
  font-size: 20px;
  font-weight: 400;
  /* text-shadow: 0 -1px 0 rgba(0,0,0,0.3); */
  outline: none;
  cursor: pointer;
  transition-property: background, color;
  transition-duration: 0.5s;
  &:hover {
    /* background: ${BASE_COLOR + '90'}; */
    border-bottom-color: ${BASE_COLOR + '60'};
    color: #eee;
    background-position: right center;
  }
  &:active {
    bottom: -3px;
    border-bottom: 2px solid ${BASE_COLOR + '90'};
    /* background: ${BASE_COLOR + '60'}; */
    color: ${BASE_COLOR + '30'};
  }
`;

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button = ({ href, onClick, children, style }: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        passHref
      >
        <CustomButton style={style}>
          {children}
        </CustomButton>
      </Link>
    );
  }

  if (onClick) {
    return (
      <CustomButton
        onClick={onClick}
        style={style}
      >
        {children}
      </CustomButton>
    );
  }

  return null;
};

export default Button;