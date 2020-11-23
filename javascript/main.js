/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {

     lista3: []
   },

   created(){

      const self = this;

       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then(function (response) {

            self.data = response.data;

            self.data.forEach((item) => {
              self.lista3.push(item)
            });

         })

          .catch(function (error) {
          // handle error
          console.log(error);
         });


      },

});


// const list = [7,8,9]
// const list2 = ["a","b","c"]
//
//
// var newArray = list.map((e, i) => e + list2[i]);
// console.log(newArray);
