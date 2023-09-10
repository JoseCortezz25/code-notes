export const useBase64 = () => {
  const transformToBase64 = (stringHTML = '', result: any) => {
    const encode = window.btoa(stringHTML)

    result(encode, stringHTML)
  }

  const getAllHashed = ({ html, css, js }: {html: string, css: string, js: string}) => {
    const $html = window.btoa(html)
    const $css = window.btoa(css)
    const $js = window.btoa(js)

    return `${$html}---${$css}---${$js}`
  }

  const getBase64ToString = (array = []) =>
    array.map((string: string, index: number) => {
      const toTransform = index === 0 ? string.slice(1) : string
      return window.atob(toTransform)
    })

  return { transformToBase64, getAllHashed, getBase64ToString }
}
