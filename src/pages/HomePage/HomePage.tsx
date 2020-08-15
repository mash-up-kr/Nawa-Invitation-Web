/* External dependencies */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import classNames from 'classnames/bind'

/* Internal dependencies */
import PopAnimation from 'components/PopAnimation'
import InvitationContainer from 'containers/InvitationContainer'
import styles from './HomePage.module.scss'

interface RouterProps {
  templateId: string
}

const cx = classNames.bind(styles)

function HomePage({ match }: RouteComponentProps<RouterProps>) {
  const { templateId } = match.params

  return (
    <>
      <Helmet>
        <title>Invitation</title>
        <meta name="description" content="Nawa invitation" />
      </Helmet>
      <div className={cx('homepage-wrapper')}>
        <div className={cx('main-wrapper')}>
          <PopAnimation duration={1.5} />
          <InvitationContainer templateId={templateId} />
        </div>
      </div>
    </>
  )
}

export default HomePage
