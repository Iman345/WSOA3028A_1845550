fetch("http://api.alquran.cloud/v1/ayah/262")
.then((r) => r.json())
.then((quran) => {
console.log(quran);
handleQuran(quran)
});

