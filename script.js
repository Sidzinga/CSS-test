
$(".warning").hide()
$(".click").click(()=>{
$(".warning").toggle()

})

$('.showhide-nav').click(()=>{
    $("#title").toggle()
   $(".nav-paragraph").toggle()
})

$("#dark-light").click(()=>{

$(".nav-bar").toggleClass("light")

})