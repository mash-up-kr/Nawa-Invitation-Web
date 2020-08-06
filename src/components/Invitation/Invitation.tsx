/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import KakaoMap from 'elements/KakaoMap'
import SVGIcon from 'elements/SVGIcon'
import InvitationModel from 'models/Invitation'
import { getDate, getTime } from 'utils/dateUtils'
import styled from './Invitation.module.scss'

interface InvitationProps {
  invitation: InvitationModel
}

const cx = classNames.bind(styled)

function Invitation({ invitation }: InvitationProps) {
  const simplePlaceName = invitation.kakaoMap.placeName.split(' ')[0]
  const { kakaoMap } = invitation

  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src="/images/character.png" alt="nothing" />
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
                <div className={cx('info-content')}>{simplePlaceName}</div>
              </div>
            </div>
          </div>
          <div className={cx('content-section')}>
            <div className={cx('content-info-title')}>
              <SVGIcon name="map" />
              <p>주소</p>
            </div>
            <div className={cx('info-content')}>
              <KakaoMap kakaoMap={kakaoMap} />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default React.memo(Invitation)
