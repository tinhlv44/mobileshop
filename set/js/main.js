// check
function check_tel(tel){
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return vnf_regex.test(tel.value);
}

// relo
function checklogin(){
    var tel = document.getElementById("relo_input_user");
    var err_relo = document.getElementsByClassName("relo_err");
    for (let i = 0; i < err_relo.length; i++){
        err_relo[i].style.display = "none";
    }
    if (tel.value != ""){                
        if (!check_tel(tel)){
            err_relo[0].style.display = "block";
            tel.focus();
            return false;
        } 
    }else{
        err_relo[1].style.display = "block";
        tel.focus();
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
    presen_modal("Hiện tại chức năng đăng nhập đang bảo trì.<br>Vui lòng đăng nhập sau!");
    return true;
}
function checkregis(){
    var tel = document.getElementById("relo_input_user");
    var err_relo = document.getElementsByClassName("relo_err");
    for (let i = 0; i < err_relo.length; i++){
        err_relo[i].style.display = "none";
    }
    if (tel.value != ""){                
        if (!check_tel(tel)){
            err_relo[0].style.display = "block";
            tel.focus();
            return false;
        } 
    }else{
        err_relo[1].style.display = "block";
        tel.focus();
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
    presen_modal("Hiện tại chức năng đăng ký đang bảo trì.<br>Vui lòng đăng ký sau!");
    return true;
}
function presen_modal(content){
    var presen = document.getElementById("click_modal");
    presen.style.display = "flex";
    presen.innerHTML = "\
        <div class='modal_box'>\
            <span class='modalbox_close'>&times;</span>\
            <h3 class='modalbox_heading'>Thông báo</h3>\
            <p class='modalbox_ct'></p>\
        </div>"
    document.getElementsByClassName("modalbox_ct")[0].innerHTML = content;
    document.getElementsByClassName("modalbox_close")[0].onclick = function(){
        presen.style.display = "none";
    }
    window.onclick = function(event){
        if (event.target == presen){
            presen.style.display = "none";
        }
    }
}
function not_login(){
    presen_modal("Tín năng kết nối bằng mạng xã hội chưa khả dụng.<br>Vui lòng thử lại sau!");
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
// click seletion
function seletion(ct, n, path){
    var x = document.getElementsByClassName("proi_box"+ct);
    if ("proi_box"+ct == "proi_boxcolor"){
        change(path);
    }
    for (let i = 0; i<x.length; i++){
        x[i].style.border = "1px solid var(--border--color)";  
    }
    x[n].style.border = "2px solid red";
}
// change img
function change(path){
    var y = document.getElementsByClassName("proinfor_cimg");
    y[0].src = "./set/img/product/" + path;
}
// noti
function not_buy(){
    var x = document.getElementsByClassName("buy_in");
    var y = document.getElementsByClassName("notibuy");
    for (var i=0; i<x.length; i++){
        if (i!=2 && i!=4 && x[i].value==""){            
            y[0].style.display = "block";
            x[i].focus();
            return false;
        }
    }
    if (!check_tel(x[1])){
        y[0].innerHTML = "Số điện thoại không hợp lệ!"
        y[0].style.display = "block";
        x[1].focus();
        return false;
    } 
    y[0].style.display = "none";
    presen_modal("Bạn đã mua hàng thành công!<br>Hàng lúc nào về thì chúng tôi không biết!");
    return true;
}
function out_of_stock(){
    presen_modal("Chưa có hàng bạn ơi!");
}
function not_promotion(){
    presen_modal("Hiện chưa có thông tin khuyến mãi.");
}
function go_home(){
    presen_modal("Vui lòng quay về trang chủ!");
}
function end_stock(){
    presen_modal("Đã hết hàng.");
}

// hide product
function hide_mb(){
    var mbstyle = document.getElementsByClassName("product_type");
    for (let i=0; i<mbstyle.length; i++){
        mbstyle[i].style.display = "none";
    }
}
function presen_type(type){
    hide_mb();
    document.getElementById("type_" + type).style.display = "block";
}

// buy
function buying_stock(){
    var presen = document.getElementById("click_modal");
    presen.style.display  = "flex";
    presen.innerHTML = "\
            <div class='buying'>\
                <ul class='buy_list'>\
                    <li class='buy_item'>\
                        <h3 class='buy_heading'>Thông tin khách hàng</h3>\
                    </li>\
                    <li class='buy_item notibuy'>\
                        <p class='buy_noti'>Bạn vui lòng điền đầy đử thông tin và chính xác để nhận hàng.</p>\
                    </li>\
                    <li class='buy_item'>\
                        <p class='forcus'>*</p><input type='text' class='buy_in' placeholder='Họ và tên'>\
                    </li>\
                    <li class='buy_item'>\
                        <p class='forcus'>*</p><input type='text' class='buy_in' placeholder='Số điện thoại'>\
                    </li>\
                    <li class='buy_item'>\
                        <input type='text' class='buy_in' placeholder='Email'>\
                    </li>\
                    <li class='buy_item'>\
                        <p class='forcus'>*</p><input type='text' class='buy_in' placeholder='Địa chỉ nhận hàng (Vui lòng ghi rõ ràng)'>\
                    </li>\
                    <li class='buy_item'>\
                        <input type='text' class='buy_in' placeholder='Yêu cầu khác'>\
                    </li>\
                    <li class='buy_item'><button class='btn btn_green buy_btn' onclick='not_buy()'>Mua hàng</button></li>\
                </ul>\
                <span class='modalbox_close close_buy'>&times;</span>\
            </div>";
    document.getElementsByClassName("modalbox_close")[0].onclick = function(){
        presen.style.display = "none";
    }
    window.onclick = function(event){
        if (event.target == presen){
            presen.style.display = "none";
        }
    }
}
function clear_stock(){
    var check = document.getElementsByClassName("not_check");
    var pcart = document.getElementsByClassName("pcart_list")[0];
    let i;
    for (i=0; i<check.length; i++){
        while (check[i].checked === true){
            pcart.removeChild(document.getElementsByClassName("pcart_item")[i]);
        }
    }
    if (i==0) {        
        document.getElementsByClassName("pcart_hollow")[0].style.display = "flex";
        document.getElementsByClassName("pcart_prot")[0].style.display = "none";
        document.getElementById("cart_icon").style.display = "none";
    }
}

// add_cart
cnt = 0;
function add_cart(n){
    document.getElementsByClassName("pcart_hollow")[0].style.display = "none";
    document.getElementsByClassName("pcart_prot")[0].style.display = "flex";
    document.getElementById("cart_icon").style.display = "block";
    var cart = document.getElementById("cart");
    cart.innerHTML = cart.innerHTML + "<li class='pcart_item'>\
                                            <div class='pcart_checkbox'>\
                                                <label for='c"+cnt+"' class='checkbox_box'>\
                                                    <input type='checkbox' class='not_check' id='c"+cnt+"'>\
                                                    <i class='checkboxic fa-solid fa-check' ></i>\
                                                </label>\
                                            </div>\
                                            <img src='' alt='' class='pcart_img' id='cimg'>\
                                            <div class='pcart_infor'>\
                                                <h3 class='pcart_name' id='cname'></h3>\
                                                <div class='pcart_coin'>\
                                                    <div class='ccoinpre' id='cpre' style='font-size: 16px;'></div>\
                                                    <div class='ccoinpast' id='cpast' style='font-size: 16px;'></div>\
                                                    <!-- <div class='pcart_ram' style='font-size: 16px;'>6G/128G</div>--> \
                                                </div>\
                                            </div>\
                                        </li>   ";
    document.getElementById("cimg").src = document.getElementsByClassName("prot_img")[n].src;
    document.getElementById("cname").innerHTML = document.getElementsByClassName("prot_heading")[n].innerHTML;
    document.getElementById("cpre").innerHTML = document.getElementsByClassName("coinpre")[n].innerHTML;                               
    document.getElementById("cpast").innerHTML = document.getElementsByClassName("coinpast")[n].innerHTML;
    document.getElementById("cimg").id = '';
    document.getElementById("cname").id = '';
    document.getElementById("cpre").id = '';
    document.getElementById("cpast").id = '';
    cnt += 1;
}
function add_cart2(){
    document.getElementsByClassName("pcart_hollow")[0].style.display = "none";
    document.getElementsByClassName("pcart_prot")[0].style.display = "flex";
    document.getElementById("cart_icon").style.display = "block";
    var cart = document.getElementById("cart");
    cart.innerHTML = cart.innerHTML + "<li class='pcart_item'>\
                                            <div class='pcart_checkbox'>\
                                                <label for='c"+cnt+"' class='checkbox_box'>\
                                                    <input type='checkbox' class='not_check' id='c"+cnt+"'>\
                                                    <i class='checkboxic fa-solid fa-check' ></i>\
                                                </label>\
                                            </div>\
                                            <img src='' alt='' class='pcart_img' id='cimg'>\
                                            <div class='pcart_infor'>\
                                                <h3 class='pcart_name' id='cname'></h3>\
                                                <div class='pcart_coin'>\
                                                    <div class='ccoinpre' id='cpre' style='font-size: 16px;'></div>\
                                                    <div class='ccoinpast' id='cpast' style='font-size: 16px;'></div>\
                                                    <!-- <div class='pcart_ram' style='font-size: 16px;'>6G/128G</div>--> \
                                                </div>\
                                            </div>\
                                        </li>   ";
    document.getElementById("cimg").src = document.getElementsByClassName("proinfor_cimg")[0].src;
    document.getElementById("cname").innerHTML = document.getElementsByClassName("proinfor_heading")[0].innerHTML;
    document.getElementById("cpre").innerHTML = document.getElementsByClassName("coinpre")[0].innerHTML;                               
    document.getElementById("cpast").innerHTML = document.getElementsByClassName("coinpast")[0].innerHTML;
    document.getElementById("cimg").id = '';
    document.getElementById("cname").id = '';
    document.getElementById("cpre").id = '';
    document.getElementById("cpast").id = '';
    cnt += 1;
}