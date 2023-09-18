import styled from "styled-components";

const BaseInput = styled.input`
  padding: 2px;
  font-family: Karla;
`;

export default function Input({
  type,
  value,
  onChange,
  className,
  placeholder,
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <BaseInput
      type={type}
      value={value}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
    />
  );
}
