// relo
function checklogin(){
    var sdt = document.getElementById("relo_input_user");
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var err_relo = document.getElementsByClassName("relo_err");
    for (let i = 0; i < err_relo.length; i++){
        err_relo[i].style.display = "none";
    }
    if (sdt.value != ""){                
        if (vnf_regex.test(sdt.value) == false){
            err_relo[0].style.display = "block";
            sdt.focus();
            return false;
        } 
    }else{
        err_relo[1].style.display = "block";
        sdt.focus();
        return false;
    }
    var mk = document.getElementById("relo_input_pass");
    if (mk.value!=""){        
        if (mk.value.length<8){
            err_relo[2].style.display = "block";
            mk.focus();
            return false;
        } 
    } 
    else{
        err_relo[3].style.display = "block";
        mk.focus();
        return false;
    }
    alert("Hiện tại chức năng đăng nhập đang bảo trì.\nVui lòng đăng nhập sau!");
    return true;
}
function checkregis(){
    var sdt = document.getElementById("relo_input_user");
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var err_relo = document.getElementsByClassName("relo_err");
    for (let i = 0; i < err_relo.length; i++){
        err_relo[i].style.display = "none";
    }
    if (sdt.value != ""){                
        if (vnf_regex.test(sdt.value) == false){
            err_relo[0].style.display = "block";
            sdt.focus();
            return false;
        } 
    }else{
        err_relo[1].style.display = "block";
        sdt.focus();
        return false;
    }
    var mk = document.getElementById("relo_input_pass");
    if (mk.value!=""){        
        if (mk.value.length<8){
            err_relo[2].style.display = "block";
            mk.focus();
            return false;
        } 
    } 
    else{
        err_relo[3].style.display = "block";
        mk.focus();
        return false;
    }
    var nmk = document.getElementById("relo_input_repass");
    if (nmk.value!=""){
        if (nmk.value!=mk.value){
            err_relo[4].style.display = "block";
            nmk.focus();
            return false;
        }
    }
    else{        
        err_relo[5].style.display = "block";
        nmk.focus();
        return false;
    }
    alert("Hiện tại chức năng đăng ký đang bảo trì.\nVui lòng đăng ký sau!");
    return true;
}
function not_login(){
    alert("Tín năng kết nối bằng mạng xã hội chưa khả dụng.\nVui lòng thử lại sau!");
}
function hiddenpass(){
    var x = document.getElementById("relo_input_pass");
    var y = document.getElementById("relo_input_repass");
    if (x.type === "password"){
        x.type = "text";
        y.type = "text";
    }
    else{
        x.type = "password";
        y.type = "password";
    }
}
// slide show 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("myslide");
    let slidelink = document.getElementsByClassName("slide_link");    
    let dots = document.getElementsByClassName("demo");
    let index = document.getElementsByClassName("slide_idd");
    if (n>=1 && n<=slides.length){        
        let i;
        if (n > slides.length) {slideIndex = n = 1}
        if (n < 1) {slideIndex = n = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            index[i].className = index[i].className.replace(" index_active", "");
        }
    
        if (n == 1){            
            for (let i = n + 4; i<=slidelink.length; i++){
                slidelink[i-1].style.display = "none";
            }        
        }
        if (n >= 2 && n <= slidelink.length - 2){
            for (i = 1; i < n; i++){
                slidelink[i-1].style.display = "none";
            }
            for (i = n + 3; i <= slidelink.length; i++){
                slidelink[i-1].style.display = "none";
            }
            for (i = n-1; i < n + 3; i++) {
                slidelink[i-1].style.display = "block";
            }
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        index[slideIndex-1].className += " index_active";
    }
}
// see more
function seemore(){
    let see = document.getElementById("seemore");
    let hide = document.getElementsByClassName("hide");
    see.style.display = "none";
    for (let i=0; i<hide.length; i++){
        hide[i].style.display = "block";
    }
}

function hide(){
    let see = document.getElementById("seemore");
    let hide = document.getElementsByClassName("hide");
    see.style.display = "block";
    for (let i=0; i<hide.length; i++){
        hide[i].style.display = "none";
    }
}
// check box
function checkbox(n){
    let x = document.getElementsByClassName("checkboxic");
    if (x[n].style.display == "none"){
        x[n].style.display = "block";
    }
    else{
        x[n].style.display = "none";
    }
}
// click seletion
function seletion(ct, n, path){
    var x = document.getElementsByClassName("proi_box"+ct);
    if ("proi_box"+ct == "proi_boxcolor"){
        change(n, path);
    }
    for (let i = 0; i<x.length; i++){
        x[i].style.border = "1px solid var(--border--color)";  
    }
    x[n].style.border = "2px solid red";
}
// change img
function change(n, path){
    var y = document.getElementsByClassName("proinfor_cimg");
    y[0].src = "./set/img/product/" + path;
}
// noti
function not_buy(){
    var x = document.getElementsByClassName("buy_in");
    var y = document.getElementsByClassName("notibuy");
    for (var i=0; i<x.length; i++){
        if (x[i].value==""){            
            y[0].style.display = "block";
            return false;
        }
    }
    y[0].style.display = "none";
    alert("Bạn đã mua hàng thành công!\nHàng lúc nào về thì chúng tôi không biết!");
    return true;
}
// out of stock
function out_of_stock(n){
    document.getElementsByClassName("out_stock")[n].style.display = "flex";
}
function close_oos(n){
    document.getElementsByClassName("out_stock")[n].style.display = "none";
}
window.onclick = function(event){
    var modal = document.getElementsByClassName("out_stock");
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
}