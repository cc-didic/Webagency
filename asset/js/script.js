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

function picture(nbr_picture, id){

    if(id == "creation")
    {
        for(let i=0; i<nbr_picture; i++)
        {
            if(document.getElementById("id_"+i).className == "portfolio-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else if(document.getElementById("id_"+i).className == "corporate-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else{
                document.getElementById("id_"+i).hidden = false;
            }
        }
    }
    else if(id == "corporate")
    {
        for(let i=0; i<nbr_picture; i++)
        {
            if(document.getElementById("id_"+i).className == "portfolio-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else if(document.getElementById("id_"+i).className == "creation-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else{
                document.getElementById("id_"+i).hidden = false;
            }
        }
    }
    else if(id == "portfolio")
    {
        for(let i=0; i<nbr_picture; i++)
        {
            if(document.getElementById("id_"+i).className == "corporate-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else if(document.getElementById("id_"+i).className == "creation-picture")
            {
                document.getElementById("id_"+i).hidden = true;
            }
            else{
                document.getElementById("id_"+i).hidden = false;
            }
        }
    }
    else{
        for(let i=0; i<nbr_picture; i++)
        { 
            document.getElementById("id_"+i).hidden = false;
        }
    }
}