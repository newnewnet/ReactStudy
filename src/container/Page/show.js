import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'

import ShowPage from '../../components/page/show.js'

 
const   getPageById = (state, id) => {
    return state.pages.find((page) => page.id === +id) || { title: '', content: '' }
  }

class ShowPageContainer extends Component {

  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }


  
  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage, params: { id } } = this.props
  // โหลดเพจตาม ID ที่ปรากฎบน URL
    onLoadPage(id)
  }

  render() {
    const { id, title, content } = this.props.page
    console.log(this.props.page)
    return (
      <ShowPage
        id={id}
        title={title}
        content={content} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // เลือกเพจด้วย ID
  page: getPageById(state, ownProps.params.id)
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
)(ShowPageContainer)
