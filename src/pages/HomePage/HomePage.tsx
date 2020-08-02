/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'
import { RouteComponentProps } from 'react-router-dom'

/* Internal dependencies */
//import CommentListContainer from 'containers/CommentListContainer'
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
    <div className={cx('homepage-wrapper')}>
      <div className={cx('main-wrapper')}>
        <PopAnimation duration={1.5} />
        <InvitationContainer templateId={templateId} />
      </div>
    </div>
  )
}

export default HomePage
