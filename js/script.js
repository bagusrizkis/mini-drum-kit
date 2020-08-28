function klik (e) {

    // memasukkan keycode tombol ayng diklik ke var sesuai dengan keycode yang ada di html dan dicari sesasui class dan audio
    let suara = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    let tombol = document.querySelector(`.tombol[data-key = "${e.keyCode}"]`)
    // console.log (suara)
    // console.log (tombol)
    
    // jika gak ada atau null data-key dengan keycode di html
    if (suara == null) return; // langsung return gak ngalakuin apa-apa

    // jika ada maka memainkan suara 
    suara.currentTime = 0 // agar tidak menunggu sampai detik terakhir untuk play
    suara.play() // memutar audio

    // nambahin class bunyi supaya css nya masuk
    tombol.classList.add('bunyi')
}

function hapusTransisi (e) {
    if (e.propertyName !== 'transform') return; // kalau bukan transform skip
    // console.log (e.propertyName)
    // console.log (this) // cek isi yang klik

    // calss yang tadi dimasukkin dihapus lagi
    this.classList.remove('bunyi')
}

const tombols = document.querySelectorAll('.tombol') // pilih semua calss tombol

// untuk setiap tombol yang waktu transisinya habis maka,
tombols.forEach(tombol => tombol.addEventListener('transitionend', hapusTransisi))

// ketika diklik tombol a sampai l
window.addEventListener('keydown', klik)


/**
 * Drum kit suara dan animasi
 * --------------------------
 * 1. ketika diklik maka ngelakuin :
 *      a. play suara tanpa jeda sampai audio berakhir
 *      b. nambahin class agar css bisa muncul (tambah efek transisi)
 * 2. ketika selesai klik:
 *      a. transisi selesai
 *      b. hapus class tadi agar balik semula
 */

/**
 * Gonta ganti tema
 * ----------------
 * 
 */

let tomboltema = document.querySelectorAll('.btn')
let warna = document.documentElement

// kamus warna
const mainBg = ['#458fba', '#4bbe81', '#d06e67']
const li1 = ['#4a99c7', '#50cb8a', '#df766e']
const li2 = ['#3e81a7', '#44ab74', '#bb635d'] 
const bs1 = ['#367091', '#388f61', '#9c534d']
const bs2 = ['#54aee3', '#5eeea1', '#ff8a81']
const li1Hov = ['#3e81a7', '#44ab74', '#bb635d']
const li2Hov = ['#4a99c7', '#50cb8a', '#df766e']
const bs1Hov = ['#367091', '#388f61', '#9c534d']
const bs2Hov = ['#54aee3', '#5eeea1', '#ff8a81']

// console.log (warna)

for (let i = 0; i < tomboltema.length; i++) [
    // console.log (tomboltema[i])
    tomboltema[i].addEventListener('click', function() {
        // console.log (this.getAttribute('data-color'))
        let j = Number(this.getAttribute('data-i'))

        // ganti warna
        warna.style.setProperty('--main-color', mainBg[j])
        warna.style.setProperty('--li-1', li1[j])
        warna.style.setProperty('--li-2', li2[j])
        warna.style.setProperty('--bs-1', bs1[j])
        warna.style.setProperty('--bs-2', bs2[j])
        warna.style.setProperty('--li-1k', li1Hov[j])
        warna.style.setProperty('--li-2k', li2Hov[j])
        warna.style.setProperty('--bs-1k', bs1Hov[j])
        warna.style.setProperty('--bs-2k', bs2Hov[j])
        // console.log (j)
    })
]