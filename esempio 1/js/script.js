Vue.config.devtools = true;
const app = new Vue (
    {
        el: '#root',
        data: {
            titleText: 'Titolo da vue js',
            subTitleText: 'Sottotitolo da vue js',
            message: 'Hello world'
        }
    }
);