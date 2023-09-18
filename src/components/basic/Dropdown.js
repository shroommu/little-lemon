import styled from "styled-components";

const BaseDropdown = styled.select`
  padding: 2px;
`;

export default function Dropdown({ children, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return <BaseDropdown onChange={handleChange}>{children}</BaseDropdown>;
}
