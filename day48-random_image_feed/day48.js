const container = document.querySelector('.container')
const rows = 3

const imgLib = [
    'img/ahmet-yuksek-1E3gWJFOXms-unsplash.jpg',
    'img/alex-he-RVvI1EGRvDo-unsplash.jpg',
    'img/branislav-rodman-J0CHC4s1BEA-unsplash.jpg',
    'img/hanvin-cheong-LyVspOBhQwc-unsplash.jpg',
    'img/jonny-gios-26AyuIfRrrA-unsplash.jpg',
    'img/lens-by-benji-SUPX5avakwA-unsplash.jpg',
    'img/mathias-reding-4MmTrFvvO1k-unsplash.jpg',
    'img/max-ovcharenko-Lz6c-2wMtVU-unsplash.jpg',
    'img/micah-sammie-chaffin-G07ZfY3dr2Y-unsplash.jpg'
]

imgLib.sort(() => Math.random() - 0.5)

for(let i = 0; i < rows*2; i++) {
    const img = document.createElement('img')
    img.src = imgLib[i]
    container.appendChild(img)
}
