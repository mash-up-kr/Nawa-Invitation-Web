/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import Map from 'elements/Map'
import SVGIcon from 'elements/SVGIcon'
import MapModel from 'models/Map'
import { getTemplateInfo } from 'utils/templateUtils'
import { getDate, getTime } from 'utils/dateUtils'
import styled from './Preview.module.scss'

interface PreviewProps {
  templateId: string
}

const cx = classNames.bind(styled)

function Preview({ templateId }: PreviewProps) {
  const map = {
    addressName: '서울특별시 광진구 자양동 73-2',
    roadAddress: '서울 광진구 능동로 10',
    latitude: 37.528834,
    longitude: 127.069851,
  }
  const { backgroundImageUrl, subTitle } = getTemplateInfo(templateId)
  const now = new Date()

  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={backgroundImageUrl} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('template-description')}>
          <TextUnderline className={cx('title')}>Mash-Up 모이자!</TextUnderline>
          <p className={cx('description')}>
            나의 모임에 초대된 mash-up친구들!
            <br />
            한강으로 놀러가자!
          </p>
        </article>
        <article className={cx('template-content')}>
          <div className={cx('content-section')}>
            <div className={cx('info-top-bar')}>
              <TextUnderline className={cx('info-top-title')}>모임 정보</TextUnderline>
              <p>{subTitle}</p>
            </div>
            <div className={cx('infos')}>
              <div className={cx('info', 'date-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="calendar" />
                  </div>
                  <p>모임 날짜</p>
                </div>
                <div className={cx('info-content')}>{getDate(now)}</div>
              </div>
              <div className={cx('info', 'time-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="time" />
                  </div>
                  <p>모임 시간</p>
                </div>
                <div className={cx('info-content')}>{getTime(now)}</div>
              </div>
              <div className={cx('info', 'location-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="location" />
                  </div>
                  <p>모임 장소</p>
                </div>
                <div className={cx('info-content')}>뚝섬유원지역</div>
              </div>
            </div>
          </div>
          <div className={cx('content-section')}>
            <div className={cx('content-info-title')}>
              <SVGIcon name="map" />
              <p>주소</p>
            </div>
            <div className={cx('info-content')}>
              <Map map={map as MapModel} placeName="뚝섬유원지역" />
            </div>
          </div>
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
            <div>
              <SVGIcon className={cx('footer-icon')} name="app-download" />
            </div>
          </div>
          <div className={cx('footer-button', 'get-more')}>
            <div>
              <SVGIcon className={cx('footer-icon')} name="get-more" />
            </div>
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
    </div>
  )
}

export default Preview
