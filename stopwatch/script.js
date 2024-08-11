let time = {
    milli: 0,
    sec: 0,
    min: 0
}
let timer, mil = 0, s = 0, m = 0, flag_count = 1;
let is_play = false;

const play_pause = document.getElementById("start");
const stopwatch = document.getElementById("time");
const play_pause_icon = document.getElementById("play_pause_icon");
play_pause.addEventListener("click", () => {
    if (is_play) {
        is_play = !is_play;
        play_pause_icon.setAttribute("src", "play.svg")
        window.clearInterval(timer)
        stopwatch.setAttribute("class","blink")
    }
    else {
        stopwatch.removeAttribute("class")
        timer = window.setInterval(() => {

            if (time.milli == 99) {
                time.milli = 0;
                time.sec++
                if (time.sec == 60) {
                    time.sec = 0;
                    time.min++
                }
            }
            time.milli++
            mil = time.milli < 10 ? '0' + time.milli : time.milli;
            s = time.sec < 10 ? '0' + time.sec : time.sec;
            m = time.min < 10 ? '0' + time.min : time.min;
            //  console.log(`${time.min}:${s}.${time.milli}`)
            stopwatch.innerText = `${m}:${s}.${mil}`
        }, 10);
        is_play = !is_play;
        play_pause_icon.setAttribute("src", "pause.svg")

    }
})

document.getElementById("flag").addEventListener("click", () => {
    let tile = document.createElement("div")
    tile.setAttribute("class", "item")
    let count = document.createElement("p")
    let flag_time = document.createElement("p")
    count.innerText = flag_count++;
    flag_time.innerText = `${m}:${s}.${mil}`
    tile.append(count)
    tile.append(flag_time)
    document.getElementById("track").appendChild(tile)
    tile.scrollIntoView()
})
document.getElementById("reset").addEventListener("click", () => {
    stopwatch.removeAttribute("class")
    time.milli=0
    time.min=0
    time.sec=0
    flag_count=0
    stopwatch.innerText = "00:00.00"
    document.getElementById("track").innerHTML=null
    is_play?window.clearInterval(timer):null
    is_play = false
    play_pause_icon.setAttribute("src", "play.svg")
})