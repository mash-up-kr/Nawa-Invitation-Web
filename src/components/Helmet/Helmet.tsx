import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
}

const ReactHelmet: React.FC<Props> = ({ title }) => {
  return (
    <Helmet defaultTitle="나와 초대장">
      <title>{title}</title>
    </Helmet>
  )
}
export default ReactHelmet
