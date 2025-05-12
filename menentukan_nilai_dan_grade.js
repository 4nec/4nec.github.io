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