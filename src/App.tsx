/* External dependencies */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Internal dependencies */
import { HomePage, ErrorPage, InvitationPage, PreviewPage } from 'pages'
import ErrorHandler from 'components/ErrorHandler'
import ScrollToTop from 'components/ScrollToTop'
import { GlobalStyle } from 'styles/global-styles'
import 'app.scss'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
