var app = new Vue ({
    el: '#app',
    data: {
        nome: "Joana Souza",
        tipo_brigadeiro: "vazio",
        quantidade_brigadeiro: "0",
        mensagem_share: "",
        link: "https://api.whatsapp.com/send?phone=55091984346208&text=" + this.mensagem_share,
        count: 0
    },
    created: function() {
        this.renderItem();
    },
    methods: {
        renderItem: function() {
            var app = this;
            this.mensagem_share =  "Gostaria de "+ this.quantidade_brigadeiro +" brigadeiro(s) de " + this.tipo_brigadeiro + ".";
        }
    }
    
})