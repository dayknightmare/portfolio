{
    new Vue({
        el: ".app",
        data: {
            letters: '',
            words: [
                ' Pythoninsta',
                ' Web developer',
                ' Mobile developer',
                ' Back-end developer',
                ' full-stack developer',
            ],
            lefter: 0,
            maxin: 0
        },
    
        created() {
            this.changeWords(0)
            this.maxin = document.querySelector(".compass__content").scrollWidth

            document.querySelector("body").addEventListener("wheel", this.scrollEl);
        },
    
        methods: {
            async delay(ms) {
                return new Promise(resolve  => {
                    setTimeout(() => {
                        resolve(2)
                    }, ms)
                })
            },
    
            async changeWords(index) {
                for (let i of this.words[index]){
                    this.letters += i
                    await this.delay(125)
                }
    
                await this.delay(600)
                let p = Array.from(this.words[index])
    
                for (let i of this.words[index]){
                    p.pop()
                    this.letters = p.join('')
                    await this.delay(50)
                }
                await this.delay(600)
    
                if (index == this.words.length - 2){
                    index = -1
                }
    
                this.changeWords(index + 1)
            },

            scrollEl(e) {
                let top = document.querySelector(".compass__long").getBoundingClientRect().top
                let el = document.querySelector("#scroller")

                if (window.innerWidth < 680) {
                    return
                }

                if ((e.deltaY < 0 && this.lefter <= (el.offsetWidth + 40)) || Math.abs(top) - 20 > el.offsetHeight) {
                    document.querySelector("body").style.overflow = "auto"
                    return
                }

                if (top <= 0 && this.maxin > this.lefter) {
                    document.querySelector("body").style.overflow = "hidden"
                    el.scrollLeft += e.deltaY
                }
                else {
                    document.querySelector("body").style.overflow = "auto"
                }
            },

            moveHorizontal(e) {
                this.maxin = e.target.scrollWidth
                this.lefter = e.target.scrollLeft + e.target.offsetWidth + 40
            },
    
            scrollToElementCell(id) {
                let el = document.querySelector("#" + id)
                el.scrollIntoView({behavior: "smooth", block: "start"})
            },

            scrollToElementPage(id) {
                let el = document.querySelector(`#${id}`).getBoundingClientRect().top + window.scrollY - 75
                window.scrollTo(0, el);
            },

            changeText(title, text, id) {
                text = `<h3>${title}</h3><br>${text}` 
    
                document.querySelector(`#${id} .context`).innerHTML = text
            }
        },
    })
}