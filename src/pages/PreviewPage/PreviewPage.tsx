/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import Map from 'elements/Map'
import SVGIcon from 'elements/SVGIcon'
import MapModel from 'models/Map'
import styled from './PreviewPage.module.scss'
import characterImage from 'assets/images/character.png'

const cx = classNames.bind(styled)

function PreviewPage() {
  const map = {
    addressName: '서울특별시 서초구 서초4동',
    roadAddress: '서초대로73길 38',
    latitude: 37.500651,
    longitude: 127.024547,
  }

  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={characterImage} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('template-description')}>
          <TextUnderline className={cx('title')}>모각코하러 모이자!</TextUnderline>
          <p className={cx('description')}>나의모임에 초대된 감자 친구들! 우리는 엄청난 서비스를 만들 수 있을꺼야!</p>
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
                <div className={cx('info-content')}>11월 27일</div>
              </div>
              <div className={cx('info', 'time-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="time" />
                  </div>
                  <p>모임 시간</p>
                </div>
                <div className={cx('info-content')}>오후 12시</div>
              </div>
              <div className={cx('info', 'location-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="location" />
                  </div>
                  <p>모임 장소</p>
                </div>
                <div className={cx('info-content')}>잠실 1동</div>
              </div>
            </div>
          </div>
          <div className={cx('content-section')}>
            <div className={cx('content-info-title')}>
              <SVGIcon name="map" />
              <p>주소</p>
            </div>
            <div className={cx('info-content')}>
              <Map map={map as MapModel} placeName="잠실 1동" />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default PreviewPage
