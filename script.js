const app = new Vue({
    el: '.app',
    data: {
        accord: '',
        active: '',
        letters: '',
        words: [
            'Programador',
            'Pythoninsta',
            'Desenvolvedor web',
            'Desenvolvedor mobile',
        ]
    },

    created() {
        window.addEventListener("scroll", this.changeSelectedItem)
        this.changeWords(0)
    },

    methods: {
        async delay(ms){
            return new Promise(resolve  => {
                setTimeout(() => {
                    resolve(2)
                }, ms)
            })
        },

        async changeWords(index){
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

            if (index == this.words.length - 1){
                index = -1
            }

            this.changeWords(index + 1)
        },

        openAccord(id) {
            let acs = document.querySelectorAll('div.accordItem');
            let buttons = document.querySelectorAll('button.accord')

            for (let i of acs){
                if (i.id == this.accord){
                    i.classList.remove('active');
                    i.classList.add('indel');

                    setTimeout(function () {
                        i.classList.remove('indel');
                    }, 601)

                }
            }

            for (let i of buttons){
                i.classList.remove('halfboard')
            }

            if (id != this.accord){
                this.accord = id
                document.querySelector(`#${id}`).classList.add('inopen')
                document.querySelector(`#${id}-b`).classList.add('halfboard')

                setTimeout(function () {

                    document.querySelector(`#${id}`).classList.add('active')
                }, 10)

                setTimeout(function () {
                    document.querySelector(`#${id}`).classList.remove('inopen')

                }, 601)

            }

            else{
                this.accord = ''
                document.querySelector(`#${id}-b`).classList.remove('halfboard')

            }
        },

        changeSelectedItem(e){
            let iknow = document.querySelector("#iknow");            
            let projects = document.querySelector("#projects");            
            let moshi = document.querySelector("#moshi");            

            if (window.pageYOffset < iknow.offsetTop - 150){
                this.active = "orewa"
            }

            else if (window.pageYOffset < projects.offsetTop - 150){
                this.active = "iknow"
            }

            else if (window.pageYOffset < moshi.offsetTop - 650){
                this.active = "projects"
            }

            else{
                this.active = "moshi"
            }

            let p = document.querySelectorAll('div.hopeproject')

            for (i of p){
                if (i.offsetTop - 400 <= window.pageYOffset){
                    i.classList.add('view')
                }
                else{
                    i.classList.remove('view') 
                }
            }
        },

        smoothDirection(id){
            
            let p = document.querySelector(`#${id}`).offsetTop
            window.scrollTo(0, p - 75);
            
        }
    }
})