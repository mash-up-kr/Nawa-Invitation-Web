/* External dependencies */
import React, { useState, useCallback } from 'react'
import Immutable from 'immutable'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

/* Internal dependencies */
import Comment from 'components/Comment'
import CommentModel from 'models/Comment'
import styles from './CommentList.module.scss'
import TextUnderline from 'elements/TextUnderline'
import WithNewline from 'hocs/WithNewline'
import NoComment from 'assets/images/no_comment.png'
import Modal from 'elements/Modal/Modal'

interface commentListProps {
  invitationId: string
  comments: Immutable.List<CommentModel>
  mainImage: string
  contents: string
  createComment: Function
}

const cx = classNames.bind(styles)

function CommentList({ invitationId, comments, mainImage, contents, createComment }: commentListProps) {
  const [form, setForm] = useState({
    userName: '',
    content: '',
  })

  const [showModal, setShowModal] = useState(false)

  const initForm = useCallback(() => {
    setForm({
      userName: '',
      content: '',
    })
  }, [])

  const onChage = useCallback(
    e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    },
    [form],
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (!form.userName || !form.content) {
        return
      }
      createComment(form)
      initForm()
    },
    [createComment, form, initForm],
  )

  const onOpenModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const onCheck = useCallback(() => {
    onOpenModal()
  }, [onOpenModal])

  const onCancel = useCallback(() => {
    onCloseModal()
  }, [onCloseModal])

  const onConfirm = useCallback(
    e => {
      onCloseModal()
      onSubmit(e)
    },
    [onCloseModal, onSubmit],
  )

  return (
    <div className={cx('comment-list-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={mainImage} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('comment-list-description')}>
          <TextUnderline className={cx('title')}>댓글을 입력해주세요.</TextUnderline>
          <p className={cx('description')}>
            <WithNewline>{contents}</WithNewline>
          </p>
        </article>
        <article className={cx('comment-list-content')}>
          {comments.size ? (
            <ul>
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ul>
          ) : (
            <div className={cx('no-comment-wrapper')}>
              <img src={NoComment} alt="no_comment" className={cx('no-comment-img')} />
              <p className={cx('no-comment-content')}>초대장에 첫 댓글을 남겨주세요.</p>
            </div>
          )}
        </article>
      </section>
      <div className={cx('new-comment')}>
        <form>
          <input type="text" name="userName" value={form.userName} placeholder="이름을 입력해주세요" onChange={onChage} />
          <input type="text" name="content" value={form.content} placeholder="댓글을 입력해주세요" onChange={onChage} />
          <button type="button" onClick={onCheck}>
            댓글 입력하기
          </button>
          <Modal className={cx('check-comment-modal')} show={showModal} onCancel={onCancel} onConfirm={onConfirm}>
            <TextUnderline className={cx('title')}>잠시만요!</TextUnderline>
            <p className={cx('description')}>댓글은 작성 후</p>
            <p className={cx('description')}>수정, 삭제할 수 없어요.</p>
            <p className={cx('description')}>입력 내용은 확인하셨나요?</p>
          </Modal>
        </form>
      </div>
      <Link to={`/${invitationId}`} className={cx('go-invitation-button')} />
    </div>
  )
}

export default React.memo(CommentList)
