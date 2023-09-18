import React from 'react'

import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const ProfilePage = (): JSX.Element => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default withPageAuthRequired(ProfilePage)
