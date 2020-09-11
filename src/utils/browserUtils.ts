export function openBlank(url: string) {
  const a = window.document.createElement('a')
  a.target = '_blank'
  a.href = url
  a.rel = 'noopener noreferrer'
  a.click()
}
