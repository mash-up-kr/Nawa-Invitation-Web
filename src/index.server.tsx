/* External dependencies */
import http from 'http'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { ServerStyleSheet } from 'styled-components'

/* Internal dependencies */
import App from 'App'
import rootReducer, { rootSaga } from 'modules/reducers'
import PreloadContext from 'utils/preloadUtils'
import {
  getInvitationTitle,
  getInvitationDate,
  getInvitationTime,
  getInvitationplaceName,
  getInvitationOpenGraphImage,
} from 'modules/selectors/invitationSelector'

export interface PreloadContextProps {
  done: boolean
  promises: Promise<any>[]
}

const statsFile = path.resolve('./build/loadable-stats.json')

function createPage(root, tags) {
  return `<!DOCTYLE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>나와 초대장</title>
        <meta name="description" content="나만의 특별한 초대장 파트너" />
        <meta property="og:title" content="${tags.title}" />
        <meta property="og:site_name" content="나와 초대장" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="${tags.date} ▪ ${tags.time} ▪ ${tags.placeName}" />
        <meta property="og:image" content="${tags.ogImage}" />
        ${tags.styles}
        ${tags.links}
        ${tags.stylesFromComponents}
        <script>
          (function() {
            var w = window;
            if (w.ChannelIO) {
              return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
            }
            var ch = function() {
              ch.c(arguments);
            };
            ch.q = [];
            ch.c = function(args) {
              ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
              if (w.ChannelIOInitialized) {
                return;
              }
              w.ChannelIOInitialized = true;
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
              s.charset = 'UTF-8';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') {
              l();
            } else if (window.attachEvent) {
              window.attachEvent('onload', l);
            } else {
              window.addEventListener('DOMContentLoaded', l, false);
              window.addEventListener('load', l, false);
            }
          })();
          ChannelIO('boot', {
            "pluginKey": "2146f61e-2956-413b-bdda-c9e997fdaad8"
          });
        </script>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          ${root}
        </div>
        ${tags.scripts}
      </body>
    </html>
  `
}

const app = express()

const port = 3000

const serverRender = async (req, res) => {
  const context = {}
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise()

  const preloadContext: PreloadContextProps = {
    done: false,
    promises: [],
  }

  const extractor = new ChunkExtractor({ statsFile })

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  )
  ReactDOMServer.renderToStaticMarkup(jsx)
  store.dispatch(END as any)
  try {
    await sagaPromise
    await Promise.all(preloadContext.promises)
  } catch (e) {
    return res.status(500)
  }
  preloadContext.done = true

  const sheet = new ServerStyleSheet()
  const root = ReactDOMServer.renderToString(sheet.collectStyles(jsx))
  const stylesFromComponents = sheet.getStyleTags()

  const state = store.getState()
  const title = getInvitationTitle(state)
  const date = getInvitationDate(state)
  const time = getInvitationTime(state)
  const placeName = getInvitationplaceName(state)
  const ogImage = getInvitationOpenGraphImage(state)

  const stateString = JSON.stringify(state).replace(/</g, '\\u003c')
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`

  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags(),
    stylesFromComponents,
    title,
    date,
    time,
    placeName,
    ogImage,
  }

  return res.send(createPage(root, tags))
}

app.use(
  express.static(path.resolve('./build'), {
    index: false,
  }),
)
app.use(serverRender)

http.createServer(app).listen(port)
