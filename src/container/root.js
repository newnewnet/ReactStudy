import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/configureStore'
import routes from '../route'

export default class App extends Component {
  render() {
    return (
      // เนื่องจากมีหลายคอมโพแนนท์ที่เรียก connect ได้
      // เราจึงครอบ Provider ไว้รอบ routes
      // เพราะเรารู้ว่าที่ตรงนี้คือคอมโพแนนท์บนสุดแล้ว
      // เมื่อคอมโพแนนท์ต่างๆภายใต้นี้เข้าถึง connect
      // จะอ้างอิงถึง store ได้ทันที
      <Provider store={configureStore()} key='provider'>
        {routes()}
      </Provider>
    )
  }
}
