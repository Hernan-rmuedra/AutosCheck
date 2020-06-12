var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        dataKar: carsDataJson,
        kar: ["0", "usado", "automatic", "manual"]


    },
    computed: {
        filterCars() {
            return this.dataKar.docs.filter(value => {
                return (this.kar.includes(value.kilometros.toString()) ||
                        this.kar.includes(value.kilometros == 0 ? "nuevo" : "usado")) &&
                    this.kar.includes(this.isManual(value) ? "manual" : "automatic");
            })
        }
    },


    methods: {

        isManual(car) {
            var index = car.caracteristicas.findIndex(e => e.caracteristica == "Transmisión")
            return car.caracteristicas[index].valor == "Manual"
        }

    },


})