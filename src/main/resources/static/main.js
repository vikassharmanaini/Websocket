let stompclient = null;
function showMassage(response) {
    $('#mass').prepend('<table><tr><td> <b>'+response.name+'</b> </td><td>:</td><td> '+response.massage+' </td></tr></table>')
}
function sendMassage() {
    let jsonobj = {
        name  : localStorage.getItem("name"),
        massage : $("#in").val()
    }
    console.log(JSON.stringify(jsonobj));
    stompclient.send("/message/message",{},JSON.stringify(jsonobj))
}
$(document).ready(e=>{
    // console.log("hi");
    $("#lg").click(()=>{
        if ($('name').val != null || $('name').val != "") {
            $("#login").addClass('hide')
            $('#msgform').removeClass('hide')
            $('#msgform').addClass('block')
            let  name = $("#name").val();
            localStorage.setItem("name",name);
            connect();  
        }
       
        // alert("mas");
    })
    $("#sub").click(()=>{
        sendMassage();
    })
})
function connect(){
    let socket = new SockJS("/server")
    stompclient = Stomp.over(socket)
    // console.log("hh");
        stompclient.connect({},function (frame) {
    //   console.log("fame connected "+frame);  
      stompclient.subscribe('/msg/return',function (response){
        console.log("hot-start");
        showMassage(JSON.parse(response.body))
      })
    })
}
