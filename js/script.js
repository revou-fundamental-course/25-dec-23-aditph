function area() {
    const base = parseInt(document.getElementById("input-base").value);
    const height = parseInt(document.getElementById("input-height").value);

    if (isNaN(base) || isNaN(height) || base < 0 || height < 0 || base == "" || height == "") {
        alert("INPUT TIDAK VALID!");
        return false;
    }

    const area = (base * height) / 2;
    alert(`Area of Triangle = 1/2 * ${base} * ${height} = ${area}`);
}

function parimeter(){
    const side1 = parseInt(document.getElementById("input-s1").value);
    const side2 = parseInt(document.getElementById("input-s2").value);
    const side3 = parseInt(document.getElementById("input-s3").value);

        if (isNaN(side1) || isNaN(side2) || isNaN(side3)|| side1 < 0 || side2 < 0 ||side3 < 0 || side1 == "" || side2 == ""|| side3 == "" ) {
            alert("INPUT TIDAK VALID!");
            return false;
        }

    const parimeter = side1 + side2 + side3;
    alert(`Parimeter of Triangle = ${side1} + ${side2} + ${side3} = ${parimeter}`);
}