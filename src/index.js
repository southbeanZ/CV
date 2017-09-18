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
        // console.log(window.innerHeight)
        // window.scrollBy(0, window.innerHeight)
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
    let gap = 10,
        coe = height > 0 ? 1 : -1,
        step = Math.ceil(height * gap / duration),
        counter = 0
    if (step % 2) {
      step += (step > 0 ? 1 : -1)
    }
    let interval = setInterval(() => {
        let dist = height - counter * step
        window.scrollBy(0, coe * step < coe * dist ? step : dist)
        counter++
        if (coe * dist <= coe * step) {
          clearInterval(interval)
        }
    }, gap)
  }
}

page.init()