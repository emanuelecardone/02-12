Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {

        },
        methods: {
            saluta: function(nome){
                alert('Ciao' + ' ' + nome);
            }
        }
    }
);