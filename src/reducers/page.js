const initialState = []

// reducer นั้นเป็นฟังก์ชันที่รับพารามิเตอร์สองตัว
// คือสถานะก่อนหน้า (previous state) และอ็อบเจ็กต์ action
// ตัวอย่างเช่นถ้าเราจะเพิ่มหน้าวิกิใหม่ สถานะก่อนหน้าอาจเป็นหน้าวิกิทั้งหมด
// เมื่อ reducer ทำงานเสร็จจะเพิ่มวิกิใหม่มี่เราพึ่งสร้าง เข้าไปในสถานะก่อนหน้าซึ่งก็คือวิกิทั้งหมดที่มีอยู่ก่อน
// ในกรณีที่เราไม่มีสถานะก่อนหน้า เราบอก reducer ว่าให้ใช้ค่า initialState
// ซึ่งก็คืออาร์เรย์ว่างเปล่าเป็นสถานะตั้งต้น
// สำหรับ [] ใน pages reducer นี้หมายความว่า
// เริ่มต้นนั้นเราไม่มีหน้าวิกิอยู่ในระบบเลย
export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_PAGES_REQUEST':
    // จากเดิมเป็น action.pages
    // แต่ตอนนี้ก้อนอ็อบเจ็กต์ที่เข้ามาอยู่ในชื่อ payload แล้ว
      return []
    case 'LOAD_PAGES_SUCCESS':
      // จากเดิมเป็น action.pages
      // แต่ตอนนี้ก้อนอ็อบเจ็กต์ที่เข้ามาอยู่ในชื่อ payload แล้ว
      return action.payload
    case 'LOAD_PAGE_SUCCESS':
      return [action.payload]
    default:
      return state
  }
}
