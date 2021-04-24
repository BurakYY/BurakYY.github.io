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

    var element = []
    var colorList = []

    var butonlar = document.getElementById("butonlar");

    if(seviye == "kolay"){
        var boyut = 81;
        colorList = getRandomColor(boyut);
    }
    else if(seviye == "orta"){
        var boyut = 256;
        colorList = getRandomColor(boyut);
    }
    else if(seviye == "zor"){
        var boyut = 625;
        colorList = getRandomColor(boyut);
    }

    document.getElementById("oyunismi").remove();
    document.getElementById("oyunaciklama").remove();
    document.getElementById("zorlukMenu").remove();

    x = setInterval(timer,1000);
    document.getElementById("sure").style.display = "inline";
    document.getElementById("puan").style.display = "inline";
    document.getElementById("bulunacak").style.display = "inline";


    var bulunacak_renk = document.createElement("button");
    bulunacak_renk.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
    bulunacak_renk.style.padding = "20px";
    bulunacak_renk.style.marginLeft = "5px";
    bulunacak_renk.style.marginTop = "5px";
    bulunacak_renk.style.borderRadius = "4px";
    document.getElementById("bulunacak_renk").appendChild(bulunacak_renk);
    
    /*
    for(i = 0; i<boyut ; i++){
        var color = colorList[i];
        element[i] = document.createElement("button");
        element[i].id = color
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
    */
    var count = 0;
    for(i = 0; i<Math.sqrt(boyut) ; i++){
        var row = document.createElement("div");
        for(j = 0; j<Math.sqrt(boyut) ; j++){
            var color = colorList[count];
            element[count] = document.createElement("button");
            element[count].id = color
            element[count].style.backgroundColor = color;
            element[count].style.padding = "20px";
            element[count].style.marginLeft = "5px";
            element[count].style.marginTop = "5px";
            element[count].style.borderRadius = "4px";
            element[count].onclick = function() {
                kontrol(this.style.backgroundColor,bulunacak_renk,element);
            };
            row.appendChild(element[count]);
            count++;
        }
        butonlar.appendChild(row);
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
    else if(zaman == 9){
        document.getElementById("kalan_zaman").style.color = "#FF0000";
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