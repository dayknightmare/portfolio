const app = new Vue({
    el: '.app',
    data: {
        accord: ''
    },

    methods: {
        openAccord(id) {
            let acs = document.querySelectorAll('div.accordItem');

            for (let i of acs){
                i.classList.remove('active')
            }
            if (id != this.accord){
                this.accord = id
                document.querySelector(`#${id}`).classList.add('active')
            }
            else{
                this.accord = ''
            }
        }
    }
})