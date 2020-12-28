import React from 'react';
import { connect } from 'react-redux';
import { filterStories } from '../selectors/filters';

import StoryList from './StoryList';
import FilterPage from './filterPage';
import Footer from './Footer';

const DashboardPage = props => (
  <div>
    <FilterPage heading="Timeline" />
    <StoryList stories={props.stories} />
    
  </div>
);

const mapStateToProp = state => ({
  stories: filterStories(state.stories, state.filters)
});

export default connect(mapStateToProp);
