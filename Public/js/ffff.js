// 建立一個新的 Vue 實例，並將它掛載到 id 為 'luusss' 的 HTML 元素上
var app = new Vue({
    el: '#luusss', // Vue 控制的範圍，對應 HTML 中 id="luusss" 的元素 '#'= id 
    data: {
      luusss: []   // 用來存放從後端 API 取得的資料
    },
    mounted() {     // Vue 的生命週期函式之一，元件掛載完成後會自動執行
      var self = this  // 保存 Vue 實例的參考，方便在回呼函式中使用
      // 使用 jQuery 的 AJAX 方法向後端請求資料
      $.ajax({
        url: '/luusss',   // ← 依你後端實際 API
        method: 'GET',    // HTTP 方法，這裡是 GET，用來取得資料
        success: function (data) {  // 當請求成功時執行的回呼函式   
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

  