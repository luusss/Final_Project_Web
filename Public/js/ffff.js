const { createApp, ref } = Vue;

var luusssApp=createApp({
    data(){
        return{
            luusss: []
        }
    }
}).mount("#luusss");


$.ajax({
    url:"/luusss",
    method:"get",
    dataType:"json",
    success: (result)=>{
        luusssApp.luusss = result;
    }
})


