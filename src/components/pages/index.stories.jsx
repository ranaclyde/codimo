/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { MemoryRouter as Router } from 'react-router-dom';

import { storiesOf } from 'test/storybook-facades';

import PageContainer from './PageContainer';
import MenuBar from './MenuBar';
import Loading from './Loading';

const PageContent = styled.div`
  background-color: green;
  height: 1700px;
`;
const MenuContainer = styled.div`
  margin: 0 auto;
  padding: calc(25% - 52px) 0;
  width: 80%;
`;
const routes = [{
  exact: true,
  game: '#maze',
  title: 'Easy',
  children: [{
    path: 'first',
    title: 'First game',
  }],
}, {
  exact: true,
  game: '#maze',
  title: 'Intermidiate',
  children: [{
    path: 'second',
    title: 'Second game',
  }],
}];

storiesOf('components.pages', module)
  .add('PageContainer render', () => (
    <PageContainer>
      <PageContent />
    </PageContainer>
  ))
  .add('MenuBar render', () => (
    <MenuContainer>
      <Router>
        <MenuBar routes={routes} />
      </Router>
    </MenuContainer>
  ))
  .add('Loading render', () => (<Loading />));
