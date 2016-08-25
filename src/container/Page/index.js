import React, { Component,PropTypes } from 'react'
import fetch from 'isomorphic-fetch'

import Pages  from '../../components/page/page.js'
import { loadPages } from '../../actions/page';
import {connect} from 'react-redux';


 class PagesContainer extends Component {

  // state = {
  //   pages: []
  // }

  static propTypes = {
   pages: PropTypes.array.isRequired,
   onLoadPages: PropTypes.func.isRequired
  }

  onReloadPages = () => {
    // fetch('/api/v1/pages')
    //   .then((response) => response.json())
    //   .then((pages) => this.setState({ pages }))
    this.props.onLoadPages()
  }

  // shouldComponentUpdate(_nextProps, nextState) {
  //   // return JSON.stringify(this.state.pages) !== JSON.stringify(nextState.pages) ;
  //   return this.props.pages !== _nextProps.pages;
  // }


  componentWillUpdate(){
    // console.log('22222')
  }

  // PagesContainer เป็น Container Component
  // มันมีสมองเลยรู้จักวิธีการดึงข้อมูลจากเซิร์ฟเวอร์
   componentWillMount() {
    this.onReloadPages();
  }

  // componentDidMount() {
  //   this.onReloadPages();
  // }

  render() {
    console.log(this.props.pages)
    return <Pages pages={this.props.pages} onReloadPages={this.onReloadPages}/>
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

// ส่ง dispatch ของ store เข้าไปให้เรียกใช้
// อยาก dispatch อะไรไปให้ reducer ก็สอยเอาตามปรารถนาเลยครับ
// const mapDispatchToProps = (dispatch) => ({
//   onLoadPages() {
//     // เมื่อเรียก this.props.onLoadPages
//     // loadPages ที่เป็น action creator จะโดนปลุกขึ้นมาทำงาน
//     // จากนั้นจะ return ก้อนอ็อบเจ็กต์ของ action
//     // ส่งเข้าไปใน dispatch
//     // store.dispatch จะไปปลุก reducer ให้มาจัดการกับ action ที่เกี่ยวข้อง
//     dispatch(loadPages())
//   }
// })

// วิธีใช้ connect สังเกตนะครับส่งสองฟังก์ชันคือ
// mapStateToProps และ mapDispatchToProps เข้าไปใน connect
// จะได้ฟังก์ชันใหม่ return กลับมา
// แล้วเราก็ส่ง PagesContainer ที่เป้นคอมโพแนนท์ที่ต้องการเชื่อมต่อกับ store
// เข้าไปในฟังก์ชันใหม่นี้อีกที
// มันคือ Higher-order function นั่นเอง
export default connect(
  mapStateToProps,
  {onLoadPages: loadPages}
)(PagesContainer)

// export default PagesContainer;
