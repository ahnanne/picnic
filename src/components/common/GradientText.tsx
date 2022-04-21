import styled from '@emotion/styled';

const fontSize = {
  sm: 12,
  md: 14,
  lg: 24,
} as const;

type GradientTextProps = {
  startColor: string;
  endColor: string;
  size?: keyof typeof fontSize;
};

type Props = GradientTextProps & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Text = styled.p(({
  startColor,
  endColor,
  size,
}: GradientTextProps) => ({
  background: `-webkit-linear-gradient(-70deg, ${startColor} 0%,${endColor} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text', 
  fontSize: size ? fontSize[size] + 'px' : 'inherit',
  color: 'transparent',
}));

const GradientText = ({
  startColor,
  endColor,
  size,
  children,
  style,
}: Props) => (
  <Text
    startColor={startColor}
    endColor={endColor}
    size={size}
    style={style}
  >
    {children}
  </Text>
);

export default GradientText;