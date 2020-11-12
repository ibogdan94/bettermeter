import React, {FC} from 'react';

import Carousel from './Carousel';
import Tabs from './Tabs';
import Filters from './Filters';

const MainPage: FC = (): JSX.Element => {
  return (
    <div className="container main-container">
      <Filters />
      <Tabs />
      <Carousel />
    </div>
  );
};

export default MainPage;
