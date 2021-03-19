<template>
     <div id="padre">
        <p>Componente padre</p>
        <Hijo v-for="hijo in hijos" :title="hijo.title" v-bind:key="hijo.id"></Hijo>
    </div>
</template>
<script>
// import aqui
import Hijo from "./Hijo.vue"
export default {
    data () {
        return {
           hijos: [
               {
                   id: "1",
                   title: "Item1"
               },
               {
                   id: "2",
                   title: "Item2"
               },
               {
                   id: "3",
                   title: "Item3"
               }
           ] 
        }
    },
    components: {
        Hijo
    }
}
</script>
<!--EL JAVASCRIPT NO FUNCIONA PERO LA RUTA ESTA BIEN, NO ENTIENDO POR QUE-->
<!--<script src="./../scripts/padre.js"></script>-->
<style src="./../styles/padre.css" scoped></style>
