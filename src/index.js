import './style/style.scss'

let $ = function (selector) {
  return document.querySelectorAll(selector)
}

let page = {
  init: function () {
    let self = this
    self.windowHeight = window.innerHeight
    self.curPage = document.body.scrollTop / self.windowHeight
    self.view()
    self.listen()
  },
  view: function () {
    let self = this
  },
  listen: function () {
    let self = this
    let isScroll = false
    window.addEventListener('mousewheel', (e) => {
      // console.log(e)
      // console.log(e.deltaY)
      // console.log(e.wheelDelta)
      if (!isScroll) {
        isScroll = true
        if (e.deltaY > 0 || e.wheelDelta < 0) {
          // self.curPage = self.curPage + (self.curPage === 3 ? 0 : 1)
          self.curPage = 1
        } else {
          // self.curPage = self.curPage - (self.curPage === 0 ? 0 : 1)
          self.curPage = -1
        }
        // document.body.scrollTop = self.windowHeight * self.curPage
        self.scrollSection(self.windowHeight * self.curPage, 500)
        setTimeout(() => {
          isScroll = false
        }, 1000)
      }
      // console.log(document.body.clientHeight)
      // console.log(document.body.offsetHeight)
      // console.log(document.body.scrollHeight)
    })
  },
  scrollSection: function (height, duration) {
    let gap = 20,
        step = height * gap / duration,
        counter = 0,
        interval = setInterval(() => {
          if (counter >= duration / gap) {
            clearInterval(interval)
          } else {
            window.scrollBy(0, step)
            counter++
          }
        }, gap)
  }
}

page.init()