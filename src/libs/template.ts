import { $ } from './selector'
import { useBase64 } from './useBase64'
import { htmlEditor, cssEditor, jsEditor } from './monacoEditor'
import { getCode } from './getCode'
import type { CodeTemplate } from './downloadCode'

const { getAllHashed } = useBase64()

export const initializer = () => {
  handlerText()
}

export const getCodeFromTemplate = (): CodeTemplate => {
  const html = htmlEditor.getValue()
  const css = cssEditor.getValue()
  const js = jsEditor.getValue()

  return { html, css, js }
};

function handlerText() {
  const html = htmlEditor.getValue()
  const css = cssEditor.getValue()
  const js = jsEditor.getValue()
  const hashedCode = getAllHashed({ html, css, js })
  history.replaceState(null, null, `/${hashedCode}`)
  const isWritted = html !== '' || css !== '' || js !== ''
  getCode(hashedCode, isWritted)

  const htmlForPreview = createTemplate({ html, css, js })
  $('iframe').setAttribute('srcdoc', htmlForPreview)
}

htmlEditor.onDidChangeModelContent(handlerText)
cssEditor.onDidChangeModelContent(handlerText)
jsEditor.onDidChangeModelContent(handlerText)

function createTemplate({ html = '', css = '', js = '' }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>
        ${js}
      </script>
    </body>
    </html>
  `;
};
