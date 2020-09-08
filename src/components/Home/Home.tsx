/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import SVGIcon, { Size } from 'elements/SVGIcon'
import Helmet from 'components/Helmet'
import style from 'components/Home/Home.module.scss'
import ImgLogo from 'assets/img_logo.png'
import ImgMain from 'assets/images/homeImg/img_main.png'
import ImgLine from 'assets/images/homeImg/img_line.png'
import ImgInviteIcon from 'assets/images/homeImg/img_inviteicon.png'
import ImgCharacterChoice from 'assets/images/homeImg/img_characterchoice.png'
import ImgMakeInvite from 'assets/images/homeImg/img_makeinvite.png'
import ImgOnlineInvite from 'assets/images/homeImg/img_onlineinvite.png'
import ImgChat from 'assets/images/homeImg/img_chat.png'
import ImgReminder from 'assets/images/homeImg/img_reminder.png'

const cx = classNames.bind(style)

function Home() {
  return (
    <>
      <Helmet title="나와 초대장" />
      <div className={cx('home')}>
        <header className={cx('hearder-cover')}>
          <div className={cx('header-wrapper')}>
            <img src={ImgLogo} alt="nawa-logo" />
            <p className={cx('header-title')}>나만의 특별한 초대장 파트너</p>
            <img src={ImgMain} alt="img-main" />
            <button className={cx('app-download-button')}>앱 다운로드</button>
          </div>
        </header>
        <section>
          <article className={cx('article-intro')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>기존 초대장 앱은 격식있고 딱딱해요</p>
              <img src={ImgLine} alt="img-line" />
              <p className={cx('article-title-down')}>재미있고 쉽게 만들고 싶어요</p>
            </div>
          </article>
          <article className={cx('article-invite')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>쉽고 간편하게</p>
              <p className={cx('article-title-down')}>일상에서 재미있게</p>
              <p className={cx('article-description')}>친구들과, 지인들과의 만남을 나와 초대장으로 더욱 특별하게 만들어보세요</p>
              <img src={ImgInviteIcon} alt="img-invite-icon" />
            </div>
          </article>
          <article className={cx('article-character-choice')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>나를 보여주는</p>
              <p className={cx('article-title-down')}>캐릭터 선택</p>
              <p className={cx('article-description')}>
                다양한 약속 유형 캐릭터를 선택해 초대장을 더욱 특별하게 만들 수 있습니다
              </p>
              <img src={ImgCharacterChoice} alt="img-charactor-choice" />
            </div>
          </article>
          <article className={cx('article-make-invite')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>원하는 구성으로</p>
              <p className={cx('article-title-down')}>마음대로 완성</p>
              <p className={cx('article-description')}>
                날짜, 시간, 장소뿐만 아니라 초대말까지 원하는 내용으로 초대장을 채울 수 있습니다
              </p>
              <img src={ImgMakeInvite} alt="img-make-invite" />
            </div>
          </article>
          <article className={cx('article-online-invite')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>오프라인은 물론</p>
              <p className={cx('article-title-down')}>온라인 초대까지</p>
              <p className={cx('article-description')}>
                온라인 모임 초대장 제작이 어려우셨나요? 나와 초대장은 온라인 초대가 가능합니다
              </p>
              <img src={ImgOnlineInvite} alt="img-online-invite" />
            </div>
          </article>
          <article className={cx('article-chat')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>댓글을 통해</p>
              <p className={cx('article-title-down')}>마음을 표현</p>
              <p className={cx('article-description')}>
                초대장을 받으면 댓글 기능을 통해 초대된 사람들끼리 소통을 할 수 있습니다
              </p>
              <img src={ImgChat} alt="img-chat" />
            </div>
          </article>
          <article className={cx('article-reminder')}>
            <div className={cx('article-wrapper')}>
              <p className={cx('article-title-up')}>알람으로 초대장</p>
              <p className={cx('article-title-down')}>일정 리마인드</p>
              <p className={cx('article-description')}>
                일정을 잊을까 불안하신가요? 나와 초대장은 일정 알람을 통해 리마인드 시켜줍니다
              </p>
              <img src={ImgReminder} alt="img-reminder" />
            </div>
          </article>
        </section>
        <footer className={cx('footer-tech')}>
          <p className={cx('footer-title')}>MEMBER</p>
          <div className={cx('footer-container-wrapper')}>
            <div className={cx('footer-container')}>
              <p className={cx('footer-container-title')}>Android Developer</p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/koba1mobile" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>이두한</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/dlwls5201" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>이진성</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/godjoy" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>신초희</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/sunny0529" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>유현선</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
            </div>
            <div className={cx('footer-container')}>
              <p className={cx('footer-container-title')}>Web Developer</p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/danivelop" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>윤대용</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/joi0104" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>최진영</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
            </div>
            <div className={cx('footer-container')}>
              <p className={cx('footer-container-title')}>Backend Developer</p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/JaeHyeonKim19" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>김재현</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://github.com/kwonsye" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>권수연</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
            </div>
            <div className={cx('footer-container')}>
              <p className={cx('footer-container-title')}>UX/UI designer</p>
              <p className={cx('footer-container-member')}>
                <a href="https://flygoeun.tistory.com" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>고은이</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
              <p className={cx('footer-container-member')}>
                <a href="https://uxdlab.tistory.com" target="_blank" rel="noopener noreferrer">
                  <div className={cx('footer-member-wrapper')}>
                    <p>전다영</p>
                    <SVGIcon className={cx('member-link-icon')} name="link" size={Size.Normal} />
                  </div>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
