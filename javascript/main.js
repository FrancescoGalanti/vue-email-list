
var app = new Vue({
    el: '#app',
    data: {

       lista3: []
   },

   created(){
      // Reference to change the name of this in self to avoid scoping the window site in axios.get //
      const self = this;
      // calling ten times the axios.get //
      for (i = 0; i < 10 ; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // Methods inside get //
            .then(function (response) {
                // Testing the call API made with JASON //
                console.log(response)
                // reference using response.data.response //
                 self.item = response.data.response
                 // Testing //
                 console.log(self.item)
                 // Pushing the object email in lista3 //
                 self.lista3.push(self.item);
            })
            .catch(function (error) {
                alert(error);
            })
        }


    }

});
