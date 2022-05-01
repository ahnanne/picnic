import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const CustomInput = styled.input`
  width: 20px;
  height: 20px;
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
  checked: boolean;
  handleChecked: () => void;
  subText?: string;
  style?: React.CSSProperties;
};

const CheckBox = ({ id, label, checked, handleChecked, subText, style }: Props) => (
  <>
    <Wrap style={style}>
      <Label htmlFor={id}>{label}</Label>

      <CustomInput
        type='checkbox'
        id={id}
        name={id}
        checked={checked}
        onChange={handleChecked}
      />
    </Wrap>
    <SubText>{subText}</SubText>
  </>
);

export default CheckBox;
