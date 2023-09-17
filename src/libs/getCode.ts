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
      }
      return
    }
    button.setAttribute('disabled', 'true')
  }
}
