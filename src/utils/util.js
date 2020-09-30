/* export function download (urls) {
  const intervalId = setInterval(() => {
    const url = urls.pop()
    const el = document.createElement('a')
    el.style.display = 'none'
    el.href = url
    document.body.appendChild(el)
    el.click()
    document.body.removeChild(el)
    if (urls.length === 0) {
      clearInterval(intervalId)
    }
  }, 500)
} */
export function download (url) {

}
