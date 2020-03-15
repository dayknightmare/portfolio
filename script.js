const app = new Vue({
    el: '.app',
    data: {
        accord: ''
    },

    methods: {
        openAccord(id) {
            let acs = document.querySelectorAll('div.accordItem');

            for (let i of acs){
                if (i.id == this.accord){
                    i.classList.remove('active');
                    i.classList.add('indel');
                    setTimeout(function () {
                        i.classList.remove('indel');
                    }, 301)

                }
            }
            if (id != this.accord){
                this.accord = id
                document.querySelector(`#${id}`).classList.add('inopen')
                setTimeout(function () {

                    document.querySelector(`#${id}`).classList.add('active')
                }, 10)
                setTimeout(function () {
                    document.querySelector(`#${id}`).classList.remove('inopen')

                }, 301)

            }
            else{
                this.accord = ''
            }
        }
    }
})