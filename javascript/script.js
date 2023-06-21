// ini adalah code untuk menghitung hasil konversi dari suhu celsius ke fahrenheit
function convertToCelsius() {

    // variabel ini untuk menyimpan data yang diinputkan oleh user melalui input field
    var celsius = parseFloat(document.getElementById('inputCelsius').value);

    // variabel ini untuk menyimpan data hasil konversi
    var fahrenheit = (celsius * 9/5) + 32;

    // code untuk menampilkan hasil konversi ke dalam input field
    document.getElementById('result').value = fahrenheit;
    
    // code untuk menampilkan cara kalkulasinya
    document.getElementById('cara').value = celsius + '°C * (9/5) + 32 = ' + fahrenheit + '°F';
}

// code ini untuk me-reset/mengosongkan input field
function resetInput() {
    document.getElementById('inputCelsius').value = '';
    document.getElementById('result').value = '';
    document.getElementById('cara').value = '';
}