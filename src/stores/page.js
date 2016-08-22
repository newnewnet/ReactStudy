state = {
  page: {
    title: '',
    content: ''
  }
}

// ฟังก์ชันนี้จะรับอ็อบเจ็กต์ของ action เข้ามา ยังจำหน้าตามันได้ไหมครับ
// หน้าตาประมาณนี้ไง { type: 'CREATE_PAGE_SUCCESS', data: ... }
export default (action) => {
  // ตรวจสอบว่า action เป็นชนิดไหนแล้วจึงเปลี่ยนแปลงสถานะของ page ตาม action นั้น
  switch(action.type) {
    case 'CREATE_PAGE_SUCCESS':
      // ส่งค่ากลับเป็นสถานะใหม่ของ page
  }
