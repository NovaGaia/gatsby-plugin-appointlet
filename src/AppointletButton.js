import React from 'react'

function AppointletButton({ children, tag, ...props }) {
  const CustomTag = tag || 'button'
  const scheduling_page_URL = process.env.GATSBY_APPOINTLET_URL
  let appointlet = null
  try {
    eval(Appointlet)
  } catch (e) {
    console.error(e)
    return <span style={{ color: 'red' }}>error on Appointlet</span>
  }
  appointlet = new Appointlet(scheduling_page_URL)
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

export default AppointletButton
