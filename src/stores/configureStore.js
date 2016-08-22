import { createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  // วิธีการสร้าง store คือการเรียก createStore
  // โดยผ่าน reducer ตัวบนสุดหรือตัวที่เรารวม reducer ทุกตัวเข้าด้วยกัน
  // เราจะได้ store กลับออกมาเป็นผลลัพธ์
  const store = createStore(rootReducer)


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
