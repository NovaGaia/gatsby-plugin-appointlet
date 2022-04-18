import React from 'react'

function AppointletButton({ children, tag, ...props }) {
  const CustomTag = tag || 'button'
  const scheduling_page_URL = process.env.GATSBY_APPOINTLET_URL
  if (typeof document !== 'undefined') {
    const appointlet = new Appointlet(scheduling_page_URL)
    if (scheduling_page_URL === '' || scheduling_page_URL === undefined) {
      return (
        <span style={{ color: 'red' }}>
          Env var `GATSBY_APPOINTLET_URL` is undefined !
        </span>
      )
    }
    if (appointlet === null) {
      return <span style={{ color: 'red' }}>error on Appointlet</span>
    }
    return (
      <CustomTag {...props} onClick={() => appointlet.openModal()}>
        {children || 'Appointlet rendez-vous'}
      </CustomTag>
    )
  }
  return <span style={{ color: 'red' }}>error on Appointlet</span>
}

export default AppointletButton
