let darkmode = localStorage.getItem('darkmode')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById('theme-switch')
  console.log('Theme switch button:', themeSwitch)

  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode')
      darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
  } 
})