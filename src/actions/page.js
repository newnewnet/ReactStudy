import { CALL_API } from 'redux-api-middleware'

export const loadPages = () => ({

  [CALL_API]: {
    endpoint: '/api/v1/pages',
    method: 'GET',
    types: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGES_FAILURE']
  }
})

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint: `/api/v1/pages/${id}`,
    method: 'GET',
    types: ['LOAD_PAGE_REQUEST', 'LOAD_PAGE_SUCCESS', 'LOAD_PAGE_FAILURE']
  }
})
