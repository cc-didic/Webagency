/* cette fonction permet de changer l'image du slider grade à son id */
function slider(imgid) {
    
 
    let img = document.getElementById(imgid);
 
    if (img.src.match('./asset/webagency_images/images/slider/bg1.jpg')){
 
        img.src = './asset/webagency_images/images/slider/bg2.jpg';

    }
    else {
 
        img.src = "./asset/webagency_images/images/slider/bg1.jpg";
 
    }
 
}