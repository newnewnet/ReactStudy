import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import Loading from '../loading.js'
import { Link} from 'react-router';

class Pages extends Component {

  static propTypes = {
     pages: PropTypes.array.isRequired,
     onReloadPages: PropTypes.func.isRequired
   }

  render() {
  
    return (
      <div>
        <button
         className='button'
         onClick={() => this.props.onReloadPages()}>
         Reload Pages
       </button>
       <Loading data={this.props.pages}>
         <table className='table'>
         <thead>
             <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {
              this.props.pages.map((page) => (
                <Page
                 key={page.id}
                 id={page.id}
                 title={page.title}/>
               ))
            }
           </tbody>
         </table>
        </Loading>
      </div>

    )
  }
}
// const Pages = ({
//   pages,
//   onReloadPages
// }) => (
//   <div>
//     <button
//       className='button'
//       onClick={() => onReloadPages()}>
//       Reload Pages
//     </button>
//     <hr />
//     <table className='table'>
//     <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           pages.map((page) => (
//             <Page
//               key={page.id}
//               id={page.id}
//               title={page.title} />
//           ))
//         }
//       </tbody>
//     </table>
//   </div>
// )
//
// // functional component ไม่ใช่คลาส
// // จึงไม่มีการนิยาม static จากภายใน
// // ต้องมาประกบร่างข้างนอกแทน
// Pages.propTypes = {
//   pages: PropTypes.array.isRequired,
//   onReloadPages: PropTypes.func.isRequired
// }


class Page extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    // เมื่อเราส่ง page เข้ามาจากภายนอกมันจึงปรากฎเป็น props ของคอมโพแนนท์
    // และเป็นค่าถาวรที่แก้ไขไม่ได้
    const { id, title } = this.props

    return (
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <Link to={{ pathname: `/pages/${id}` }}>Show</Link>
        </td>
      </tr>
    )
  }
}


export default Pages
