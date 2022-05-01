import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

const CustomInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #bebebe;
  border-radius: 8px;
  margin-top: 8px;
  padding: 0 10px;
`;

const SubText = styled.p`
  color: #999;
  font-size: 12px;
  font-style: italic;
  margin-top: 4px;
`;

type Props = {
  id: string;
  label: string;
  value: string;
  setValue: (v: string) => void;
  subText?: string;
  style?: React.CSSProperties;
};

const Input = ({ id, label, value, setValue, subText, style }: Props) => (
  <Wrap style={style}>
    <Label htmlFor={id}>{label}</Label>

    <CustomInput
      type='text'
      id={id}
      name={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <SubText>{subText}</SubText>
  </Wrap>
);

export default Input;
