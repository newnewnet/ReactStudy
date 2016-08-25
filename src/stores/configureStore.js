import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

export default () => {

  const middlewares = [thunk, apiMiddleware]
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )


  if (module.hot) {
  // เมื่อใดที่โค๊ดใน reducer เปลี่ยนแปลงเราแค่ HMR มัน
  // จำได้ไหมครับในตอนต้นที่ผมบอกว่าเราแยก state ไปไว้ใน store
  // แล้วแยกวิะีการเปลี่ยน state ไปไว้ใน reducer
  // เพราะต้องการให้ทุกครั้งที่แก้โค๊ด reducer แล้ว webpack จะ HMR เฉพาะ reducer
  // โดย state ปัจจุบันยังคงอยู่
  System.import('../reducers').then(nextRootReducer =>
    store.replaceReducer(nextRootReducer.default)
  )
}


  return store
}
