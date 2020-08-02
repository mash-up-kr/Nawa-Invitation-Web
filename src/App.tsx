/* External dependencies */
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

/* Internal dependencies */
import { HomePage } from 'pages'
import { GlobalStyle } from 'styles/global-styles'
import 'app.scss'

function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Mash-up Invitation" defaultTitle="Mash-up Invitation">
        <meta name="description" content="The invitation app" />
      </Helmet>
      <Switch>
        <Route exact path="/:templateId" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
