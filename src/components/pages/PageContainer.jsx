/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 * @flow
 */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLOR_PALETTE } from 'constants/colors';

import FooterLink from './links/FooterLink';
import RawContentContainer from './RawContentContainer';

const Wrapper = styled.div`
  margin-bottom: 10rem;
  user-select: initial;
`;
const ContentContainer = styled(RawContentContainer)`
  display: flex;
  justify-content: space-between;
`;
const fixedBottomMixin = css`
  bottom: 0;
  height: 10rem;
  margin: 0;
  position: fixed;
  width: 100%;
  z-index: -1;
`;
const Footer = styled.div`
  align-items: center;
  background: ${COLOR_PALETTE.blue.normal};
  color: white;
  display: flex;
  ${fixedBottomMixin}
`;

type Props = {|
  children?: React.Element<*>,
|};
const PageContainer = ({ children }: Props) => (
  <Wrapper>
    <div>
      {children}
    </div>
    <Footer>
      <ContentContainer>
        <span>{'Copyright © 2017 Luciano Graziani. Todos los derechos reservados.'}</span>
        <span>
          {'Distribuído bajo licencia '}
          <FooterLink href="https://github.com/lgraziani2712/codimo/blob/master/LICENSE" text="MIT" />
          {'.'}
        </span>
      </ContentContainer>
    </Footer>
  </Wrapper>
);

export default PageContainer;
