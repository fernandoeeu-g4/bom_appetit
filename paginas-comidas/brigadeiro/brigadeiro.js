var vm = new Vue ({
    el: '#app',
    data: {
        vendedores: [],
        foto: "https://api.adorable.io/avatars/285/abott@adorable.png",
        nome: "",
        inputBusca: ""
    },
    created: function () {
        this.renderItem();
    },
    methods: {
        renderItem: function () {
            this.status = 'Loading...';
            var vm = this;
            axios.get('https://next.json-generator.com/api/json/get/NyF7tCfvB')
            .then(function (response) {
                vm.vendedores = response.data.vendedores_array;
                vm.nome = vendedores.nome;
                url = "../../pagina-vendedores/" + vendedores.nome;
                //foto = this.vendedores.foto;
            })
            .catch(function(error) {
                vm.status = "An error ocurred" + error;
            })
        }
    }
})