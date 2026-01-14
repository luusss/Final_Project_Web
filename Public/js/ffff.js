// 建立一個新的 Vue 實例，並將它掛載到 id 為 'luusss' 的 HTML 元素上
var app = new Vue({
    el: '#luusss',
    data: {
      luusss: []   // 用來存放從後端 API 取得的資料
    },
    mounted() {
      var self = this
      $.ajax({
        url: '/luusss',   // ← 依你後端實際 API
        method: 'GET',    // HTTP 方法，這裡是 GET，用來取得資料
        success: function (data) {
          self.luusss = data  // 將取得的資料存入 Vue 的 data.luusss，畫面會自動更新
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

  