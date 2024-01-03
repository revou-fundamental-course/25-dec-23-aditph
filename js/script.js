function area(){
    let x = document.getElementById("input-base").value,
        y = document.getElementById("input-height").value,
        z = parseInt(x) * parseInt(y) / 2;
    alert("Area of Triangle = 1/2 * "+ x + " * " + y + " = " + z);
}
function parimeter(){
    let x = document.getElementById("input-s1").value,
        y = document.getElementById("input-s2").value,
        z = document.getElementById("input-s3").value,
        pari = parseInt(x) + parseInt(y) + parseInt(z);
    alert("Parimeter of Triangle = "+ x + " + " + y + " + " + z + " = " + pari);
}