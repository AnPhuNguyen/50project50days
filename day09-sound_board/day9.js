const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const btns = document.querySelectorAll('.btn')

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        stopSongs()

        const sound = sounds[index]
        const sd = document.getElementById(sound)
        // console.log(sd)
        sd.play()
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
