import { $ } from './selector'

export function getCode(path: string, isWrited: boolean) {
  const button: HTMLButtonElement | null = $('#export-button')
  const wrapperText = $('#is-copied')
  const finalUrl = `${location.origin}/${path}`

  if (button) {
    if (isWrited) {
      button.removeAttribute('disabled')
      button.onclick = () => {
        navigator.clipboard.writeText(finalUrl)
        wrapperText.style.display = 'block'

        setTimeout(() => {
          wrapperText.style.display = 'none'
        }, 2000)
      }
      return
    }
    button.setAttribute('disabled', 'true')
  }
}
