var app = new Vue(
    {
        el: '#root',

        data:{
            contatore: 0,
            attivo: 'blu',
            immagini:[
               "img/image1.jpg",
               "img/image2.jpg", 
               "img/image3.jpg", 
               "img/image4.jpg"
            ]
        },
        methods:{
            destra: function(){
                this.contatore= this.contatore+1;
                if(this.contatore == this.immagini.length){
                    this.contatore=0;
                }
            },
            sinistra: function(){
                this.contatore= (this.contatore - 1);
                if(this.contatore < 0){
                    this.contatore = (this.immagini.length -1);
                }
            }
        }
    }
)