const { createApp, ref } = Vue;

var luusssApp=createApp({
    data(){
        return{
            luusss: []
        }
    }
}).mount("#luusss");

$.ajax({
    url: "/luusss",
    method: "get",
    dataType: "json",
    success: (result) => {
      console.log(result);     // ← 用來確認真的有資料
      app.luusss = result;     // ← 塞進 Vue
    }
  });

