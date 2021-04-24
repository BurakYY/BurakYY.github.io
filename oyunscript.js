function getRandomColor(num) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var listColor = []
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        listColor.push(color);
        color = '#';
    }
    return listColor;
}

var skor = 0;

function kontrol(renk,aranan_renk,arr){
    //alert(renk+" "+aranan_renk)
    if(renk == aranan_renk.style.backgroundColor){
        skor++;
        document.getElementById("kazanilan_puan").innerHTML = skor;
        var colorList = getRandomColor(arr.length);
        aranan_renk.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
        for(i = 0; i<arr.length ; i++){
            arr[i].style.backgroundColor = colorList[i];
        }
    }
}

var x;

function add(seviye) {
    //Create an input type dynamically.   
    var element = []
    var colorList = []
    //Assign different attributes to the element. 
    //element.type = type;
    //element.value = type; // Really? You want the default value to be the type string?
    //element.name = type; // And the name too?

    var butonlar = document.getElementById("butonlar");

    if(seviye == "kolay"){
        var boyut = 81;
        butonlar.style.width = "450px";
        colorList = getRandomColor(boyut);
    }
    else if(seviye == "orta"){
        var boyut = 256;
        butonlar.style.width = "790px";
        colorList = getRandomColor(boyut);
    }
    else if(seviye == "zor"){
        var boyut = 625;
        butonlar.style.width = "1230px";
        colorList = getRandomColor(boyut);
    }

    var kaldir1 = document.getElementById("oyunismi");
    var kaldir2 = document.getElementById("oyunaciklama");
    var kaldir3 = document.getElementById("zorlukMenu");
    kaldir1.remove();
    kaldir2.remove();
    kaldir3.remove();

    x = setInterval(timer,1000);
    var sure = document.getElementById("sure");
    sure.style.display = "inline";
    var puan = document.getElementById("puan");
    puan.style.display = "inline";
    var bulunacak = document.getElementById("bulunacak");
    bulunacak.style.display = "inline";


    var bulunacak_renk = document.createElement("button");
    bulunacak_renk.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
    bulunacak_renk.style.padding = "20px";
    bulunacak_renk.style.marginLeft = "5px";
    bulunacak_renk.style.marginTop = "5px";
    bulunacak_renk.style.borderRadius = "4px";
    document.getElementById("bulunacak_renk").appendChild(bulunacak_renk);
    
    for(i = 0; i<boyut ; i++){
        var color = colorList[i];
        element[i] = document.createElement("button");
        element[i].id = color
        //element[i].style.backgroundColor = getRandomColor();
        element[i].style.backgroundColor = color;
        element[i].style.padding = "20px";
        element[i].style.marginLeft = "5px";
        element[i].style.marginTop = "5px";
        element[i].style.borderRadius = "4px";
        element[i].onclick = function() {
            kontrol(this.style.backgroundColor,bulunacak_renk,element);
        };
        butonlar.appendChild(element[i]);
    }

}

var zaman = 59;

function timer(){
    document.getElementById("kalan_zaman").innerHTML = zaman;
    if(zaman == 0){
        clearInterval(x)
        document.getElementById("butonlar").remove();
        document.getElementById("sure").remove();
        document.getElementById("puan").remove();
        document.getElementById("bulunacak").remove();
        document.getElementById("end_game").style.display = "block";
        document.getElementById("puan_sonuc").style.display = "block";
        document.getElementById("tekrar_oyna").style.display = "inline";
        document.getElementById("oyun_sonu_skor").innerHTML = skor;
    }
    
    zaman--;
}

function tekrar(){
    location.reload();
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