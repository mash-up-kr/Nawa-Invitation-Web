/* External dependencies */
import React, { useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import _ from 'lodash'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import Map from 'elements/Map'
import SVGIcon from 'elements/SVGIcon'
import TextCarousel from 'elements/TextCarousel'
import WithNewline from 'hocs/WithNewline'
import InvitationModel from 'models/Invitation'
import MapModel from 'models/Map'
import UserAgentService from 'services/UserAgentService'
import { openBlank } from 'utils/browserUtils'
import { getDate, getTime } from 'utils/dateUtils'
import styled from './Invitation.module.scss'

interface InvitationProps {
  invitation: InvitationModel
  invitationId: string
}

const cx = classNames.bind(styled)

function Invitation({ invitation, invitationId }: InvitationProps) {
  const { map } = invitation

  const handleClickAppDownload = useCallback(() => {
    if (UserAgentService.isAndroidDevice()) {
      openBlank('https://play.google.com/store/apps/details?id=com.mashup.nawainvitation')
    } else {
      alert('안드로이드 기기만 다운로드 가능합니다.')
    }
  }, [])

  const mapSection = useMemo(() => {
    if (_.isNil(map)) return null

    const { latitude, longitude } = map as MapModel

    return (
      <div className={cx('content-section', 'map-section')}>
        <div className={cx('content-info-title')}>
          <SVGIcon name="map" />
          <p>주소</p>
        </div>
        <div className={cx('info-content')}>
          {UserAgentService.isPhone() ? (
            <a href={`kakaomap://look?p=${latitude},${longitude}`} target="_blank" rel="noopener noreferrer">
              <Map map={map as MapModel} placeName={invitation.placeName} />
            </a>
          ) : (
            <Map map={map as MapModel} placeName={invitation.placeName} />
          )}
        </div>
      </div>
    )
  }, [map, invitation.placeName])

  const imageSection = useMemo(() => {
    if (_.isEmpty(invitation.images)) {
      return null
    }

    return (
      <div className={cx('content-section')}>
        <div className={cx('content-info-title')}>
          <SVGIcon name="image" />
          <p>이미지</p>
        </div>
        <div className={cx('info-content')}>
          {invitation.images.map(({ id, url }) => (
            <div key={id} className={cx('image')}>
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    )
  }, [invitation.images])

  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={invitation.mainImage} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('template-description')}>
          <TextUnderline className={cx('title')}>{invitation.title}</TextUnderline>
          <p className={cx('description')}>
            <WithNewline>{invitation.contents}</WithNewline>
          </p>
        </article>
        <article className={cx('template-content')}>
          <div className={cx('content-section')}>
            <div className={cx('info-top-bar')}>
              <TextUnderline className={cx('info-top-title')}>모임 정보</TextUnderline>
              <p>{invitation.description}</p>
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
                <div className={cx('info-content')}>
                  <TextCarousel content={invitation.placeName} />
                </div>
              </div>
            </div>
          </div>
          {mapSection}
          {imageSection}
        </article>
      </section>
      <footer>
        <p className={cx('footer-title')}>
          편리하게 사용하셨다면,
          <br />
          구글앱스토어에서
          <br />
          '나와 초대장'을 직접 다운받아보세요!
        </p>
        <div className={cx('footer-buttons')}>
          <div className={cx('footer-button', 'app-download')}>
            <div onClick={handleClickAppDownload}>
              <SVGIcon className={cx('footer-icon')} name="app-download" />
            </div>
          </div>
          <div className={cx('footer-button', 'get-more')}>
            <Link to="/">
              <SVGIcon className={cx('footer-icon')} name="get-more" />
            </Link>
          </div>
        </div>
        <div className={cx('introduction-member')}>
          <p className={cx('introduction-main-title')}>만든 이</p>
          <div className={cx('introduction-section')}>
            <p className={cx('introduction-sub-title')}>안드로이드 개발</p>
            <p className={cx('introduction-content')}>이두한,이진성,신초희,유현선</p>
          </div>
          <div className={cx('introduction-section')}>
            <p className={cx('introduction-sub-title')}>웹 개발</p>
            <p className={cx('introduction-content')}>윤대용,최진영</p>
          </div>
          <div className={cx('introduction-section')}>
            <p className={cx('introduction-sub-title')}>백앤드 개발</p>
            <p className={cx('introduction-content')}>김재현,권수연</p>
          </div>
          <div className={cx('introduction-section')}>
            <p className={cx('introduction-sub-title')}>UX/UI 디자인</p>
            <p className={cx('introduction-content')}>고은이,전다영</p>
          </div>
        </div>
      </footer>
      <Link to={`/comments/${invitationId}`} className={cx('go-comment-button')}>
        댓글 달기
      </Link>
    </div>
  )
}

export default React.memo(Invitation)
