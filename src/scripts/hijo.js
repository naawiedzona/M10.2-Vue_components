export default {
    data(){
        return{
            numero: 0
        }
    },
    methods:{
        sumarClick(){
            this.numero++
        }
    },
    props:['title']
}