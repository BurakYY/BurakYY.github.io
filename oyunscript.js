function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function kontrol(renk){
    alert(renk);
}

function add(seviye) {
    //Create an input type dynamically.   
    var element = []
    //Assign different attributes to the element. 
    //element.type = type;
    //element.value = type; // Really? You want the default value to be the type string?
    //element.name = type; // And the name too?

    if(seviye == "kolay"){
        var boyut = 81;
    }
    else if(seviye == "orta"){
        var boyut = 256;
    }
    else if(seviye == "zor"){
        var boyut = 625;
    }

    var foo = document.getElementById("butonlar");
    var kaldir1 = document.getElementById("oyunismi");
    var kaldir2 = document.getElementById("oyunaciklama");
    var kaldir3 = document.getElementById("zorlukMenu");
    kaldir1.remove();
    kaldir2.remove();
    kaldir3.remove();
    
    for(i = 0; i<boyut ; i++){
        var color = getRandomColor();
        element[i] = document.createElement("button");
        element[i].id = color
        //element[i].style.backgroundColor = getRandomColor();
        element[i].style.backgroundColor = color;
        element[i].style.padding = "20px";
        element[i].style.marginLeft = "5px";
        element[i].style.marginTop = "5px";
        element[i].style.borderRadius = "4px";
        element[i].onclick = function() {
            kontrol(this.style.backgroundColor);
        };
        foo.appendChild(element[i]);
    }
}

document.getElementById("kolay").onclick = function() {
    add("kolay");
};

document.getElementById("orta").onclick = function() {
    add("orta");
};

document.getElementById("zor").onclick = function() {
    add("zor");
};