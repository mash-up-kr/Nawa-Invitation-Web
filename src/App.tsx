/* External dependencies */
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

/* Internal dependencies */
import Helmet from 'components/Helmet'
import { HomePage, ErrorPage, InvitationPage, PreviewPage } from 'pages'
import ErrorHandler from 'components/ErrorHandler'
import ScrollToTop from 'components/ScrollToTop'
import { GlobalStyle } from 'styles/global-styles'
import 'app.scss'

function App() {
  return (
    <BrowserRouter>
      <Helmet title="나와 초대장" />
      <ErrorHandler>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/preview/:templateId" component={PreviewPage} />
            <Route exact path="/:invitationId" component={InvitationPage} />
            <Route component={ErrorPage} />
          </Switch>
        </ScrollToTop>
      </ErrorHandler>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
