Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            titleClass: 'red'
        },
        methods: {
            changeColor: function(){
                this.titleClass = 'blue'
            }
        }
    }
);