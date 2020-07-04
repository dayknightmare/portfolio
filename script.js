const app = new Vue({
    el: '.app',
    data: {
        accord: '',
        active: '',
    },

    created() {
        window.addEventListener("scroll", this.changeSelectedItem)
    },

    methods: {
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