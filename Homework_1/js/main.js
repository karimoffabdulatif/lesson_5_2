function submit() {
    // Textarea matnini olish
    var textAreaValue = document.getElementById("textarea").value
    // Izlash uchun so'zni olish
    var inputWord = document.getElementById("searchInput").value
    // Izlash
    if (textAreaValue.includes(inputWord)) {
        document.getElementById("natija").innerHTML = "'" + inputWord + "' so'zi matnda mavjud";
    } else {
        document.getElementById("natija").innerHTML = "'" + inputWord + "' so'zi matnda mavjud emas";
    }
}