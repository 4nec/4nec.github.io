umur = prompt("Masukan umur anda?")
if(umur > 16){
    alert("Anda telah bisa membuat KTP");
}else{
    alert("Anda belum bisa membuat KTP");
}

//Usia dengan konfirm
usia = confirm("Apakah anda sudah 17 tahun?")
if(usia){
    alert("Anda sudah bisa membuat KTP");
}else{
    alert("Anda belum bisa membuat KTP");
}

let bilangan;
bilangan = prompt("Masukan bilangan berapa saja...");
if(bilangan % 2 == 0){
    alert("Bilangan genap");
}else{
    alert("Bilangan ganjil");
}

let nama;
let nilai;
nama = prompt("Masukan nama anda?");
nilai = prompt("Masukan nilai anda?");
if(nilai >= 90){
    alert(nama + " Anda lulus dengan nilai " + nilai + " dan mendapatkan grade A");
}else if(nilai >= 80){
    alert(nama + " Anda lulus dengan nilai " + nilai + " dan mendapatkan grade B");
}else if(nilai >= 70){
    alert(nama + " Anda lulus dengan nilai " + nilai + " dan mendapatkan grade C");
}else if(nilai >= 60){
    alert(nama + " Anda lulus dengan nilai " + nilai + " dan mendapatkan grade D");
}else if(nilai >= 50){
    alert(nama + " Anda lulus dengan nilai " + nilai + " dan mendapatkan grade E");
}else{
    alert(nama + " Anda tidak lulus dengan nilai " + nilai);
}

var i

let i = 1
while(i <= 10){
    console.log(i);
    i++;
    for(i = 1; i <= 10; i++){
        console.log(i);
    }
}

// Menentukan bilangan genap dan ganjil dari 1-10.
let i = 0
while(i < 10){
    i++;
    if(i % 2 == 0){
        console.log(i + " adalah bilangan genap");
    }else{
        console.log(i + " adalah bilangan ganjil");
    }
}
