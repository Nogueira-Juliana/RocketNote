import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border: 0;
  border-radius: 10px;

  padding: 0 16px;
  margin-top: 16px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-weight: bold;

  &:disabled {
    opacity: 0.5;
  }
`