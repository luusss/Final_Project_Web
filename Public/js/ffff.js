var app = new Vue({
    el: '#luusss',
    data: {
      luusss: []
    },
    mounted() {
      var self = this
      $.ajax({
        url: '/luusss',   // ← 依你後端實際 API
        method: 'GET',
        success: function (data) {
          self.luusss = data
        }
      })
    }
  })
  












/*const { createApp, ref } = Vue;

var luusssApp=createApp({
    data(){
        return{
            luusss: []
        }
    }
}).mount("#luusss");

/*$.ajax({
    url: "/luusss",
    method: "get",
    dataType: "json",
    success: (result) => {
      console.log(result);     // ← 用來確認真的有資料
      app.luusss = result;     // ← 塞進 Vue
    }
  });*/
  /*var app = new Vue({
    el: '#luusss',
    data: {
      luusss: []
    }
  })
  
  
  $.ajax({
    success: function (data) {
      app.luusss = data
    }
  })*/

  