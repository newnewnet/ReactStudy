
import styles from './theme/elements.scss'

import React, { Component } from 'react';
import { render } from 'react-dom';
import routes from './route'
import Root from './container/Root'
import { AppContainer } from 'react-hot-loader'

// render(
//   <div>
//     <Root />
//   </div>, document.getElementById('app'));

  const rootEl = document.getElementById('app')

  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl
  )

  if (module.hot) {
    // เมื่อไหร่ก็ตามที่โค๊ดภายใต้ Root รวมถึง subcomponent ภายใต้ Root
    // มีการเปลี่ยนแปลง ให้ทำ HMR ด้วย Root ตัวใหม่
    // ที่เราตั้งชื่อให้ว่า NextRootApp
    module.hot.accept('./container/Root', () => {
      const NextRootApp = require('./container/Root').default

      render(
        <AppContainer>
           <NextRootApp />
        </AppContainer>,
        rootEl
      );
    });
  }
