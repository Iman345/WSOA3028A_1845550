fetch("http://api.alquran.cloud/v1/ayah/262")
.then((r) => r.json())
.then((quran) => {
console.log(quran);
handleQuran(quran)
});

const handleQuran = (quranDetails) => {
document.querySelector("p").innerText = quranDetails;
};