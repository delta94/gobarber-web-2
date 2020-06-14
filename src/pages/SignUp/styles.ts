import styled from "styled-components";

import { appearFromLeft } from "../../styles/animations";

export const AnimationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation-name: ${appearFromLeft};
  animation-duration: 500ms;
`;
