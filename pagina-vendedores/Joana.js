var app = new Vue ({
    el: '#app',
    data: {
        nome: "Joana Souza",
        tipo_brigadeiro: "vazio",
        quantidade_brigadeiro: 0,
        mensagem_share: "",
        valor_brigadeiro: 1,
        valor_total: 0, 
        link: "https://api.whatsapp.com/send?phone=55091984346208&text=" + this.mensagem_share,
        count: 0
    },
    created: function() {
        this.renderItem();
        
    },
    computed: {
        
    },
    methods: {
        renderItem: function() {
            var app = this;
            this.mensagem_share =  "Olá, "+this.nome+". Gostaria de "+ this.quantidade_brigadeiro +" brigadeiro(s) de " + this.tipo_brigadeiro + ". O total seria R$"+ this.valor_total +". Vamos nos encontrar?";
        }
    }
    
})

