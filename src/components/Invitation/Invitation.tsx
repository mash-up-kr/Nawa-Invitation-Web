/* External dependencies */
import React, { useMemo } from 'react'
import classNames from 'classnames/bind'
import _ from 'lodash'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import Map from 'elements/Map'
import SVGIcon from 'elements/SVGIcon'
import InvitationModel from 'models/Invitation'
import MapModel from 'models/Map'
import { getDate, getTime } from 'utils/dateUtils'
import CharacterImg from 'assets/images/character.png'
import styled from './Invitation.module.scss'

interface InvitationProps {
  invitation: InvitationModel
}

const cx = classNames.bind(styled)

function Invitation({ invitation }: InvitationProps) {
  const { map } = invitation

  const mapSection = useMemo(
    () => (
      <div className={cx('content-section')}>
        <div className={cx('content-info-title')}>
          <SVGIcon name="map" />
          <p>주소</p>
        </div>
        <div className={cx('info-content')}>
          <Map map={map as MapModel} placeName={invitation.placeName} />
        </div>
      </div>
    ),
    [invitation.placeName, map],
  )

  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={CharacterImg} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('template-description')}>
          <TextUnderline className={cx('title')}>{invitation.title}</TextUnderline>
          <p className={cx('description')}>{invitation.contents}</p>
        </article>
        <article className={cx('template-content')}>
          <div className={cx('content-section')}>
            <div className={cx('info-top-bar')}>
              <TextUnderline className={cx('info-top-title')}>모임 정보</TextUnderline>
              <p>"마! 엉아다! 집합해라~&#x1F60E;?"</p>
            </div>
            <div className={cx('infos')}>
              <div className={cx('info', 'date-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="calendar" />
                  </div>
                  <p>모임 날짜</p>
                </div>
                <div className={cx('info-content')}>{getDate(invitation.time)}</div>
              </div>
              <div className={cx('info', 'time-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="time" />
                  </div>
                  <p>모임 시간</p>
                </div>
                <div className={cx('info-content')}>{getTime(invitation.time)}</div>
              </div>
              <div className={cx('info', 'location-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="location" />
                  </div>
                  <p>모임 장소</p>
                </div>
                <div className={cx('info-content')}>{invitation.placeName}</div>
              </div>
            </div>
          </div>
          {_.isNil(map) || mapSection}
        </article>
      </section>
    </div>
  )
}

export default React.memo(Invitation)
