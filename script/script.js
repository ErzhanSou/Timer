const time = document.querySelector('.timer__time')
const startBtn = document.querySelector('.timer__start')
const pauseBtn = document.querySelector('.timer__pause')
const stopBtn = document.querySelector('.timer__stop')
const intervalBtn = document.querySelector('.timer__interval')
const circleTime = document.querySelector('.timer__time1')
const allRemove = document.querySelector('.results__btn')
const cir3 = document.querySelector('.cir3')
const cir2 = document.querySelector('.cir2')
const cir1 = document.querySelector('.cir1')


let hour = 0
let minute = 0
let seconds = 0
let milliseconds = 0
let isStarted = true
let isStarted2 = true
let startTimer = null
let startTimerCircle = null
let srt = null
let count = 1
let arr = []

const timerStart = (timers, strTime) => {
    if (isStarted) {
        strTime = setInterval(() => {
            timers.innerText = `${zeroAdder(hour)}:${zeroAdder(minute)}:${zeroAdder(seconds)}:${zeroAdderInMm(milliseconds)}`
            milliseconds++
            if (milliseconds === 100) {
                milliseconds = 0
                seconds++
            }
            if (seconds === 59) {
                seconds = 0
                minute++
            }
            if (minute === 59) {
                minute = 0
                hour++
            }
        }, 10)
    } isStarted = false
    srt = strTime
}

const stopperTimer = () => {
    clearInterval(srt)
    isStarted = true
    hour = 0
    minute = 0
    seconds = 0
    milliseconds = 0
}


startBtn.addEventListener('click', () => {
    if (isStarted){
        timerStart(time, startTimer)
    } isStarted = false
    isStarted2 = false
})


pauseBtn.addEventListener('click', () => {
    clearInterval(srt)
    isStarted = true
    isStarted2 = true
})


stopBtn.addEventListener('click', () => {
    stopperTimer()
    time.innerText = '00:00:00:00'
    circleTime.innerText = '00:00:00:00'
})


intervalBtn.addEventListener('click', () => {
    addUlLiElementsForInterval(time, cir3)
})

intervalBtn.addEventListener('click', () => {
    addUlLiElementsForInterval(circleTime, cir2)
})
intervalBtn.addEventListener('click', () => {
    counter(cir1)
})
intervalBtn.addEventListener('click', () => {
    if (isStarted2) {
        timerStart(circleTime, startTimerCircle)
    }
    remove()
    isStarted2 = false
    isStarted = false
})

const remove = () => {
    allRemove.innerText = 'Сброс'
    allRemove.style.color = '#d2d2d2';
    allRemove.style.background = '#9b5823'
    allRemove.removeEventListener('click', addUlLiElementsForInterval)
    allRemove.removeEventListener('click', counter)
    allRemove.addEventListener('click', () => {
        document.location.reload()
    })
}

const zeroAdder = (num) => num < 10 ? `0${num}` : num
const zeroAdderInMm = (num) => num < 10 ? `0${num}` : num
const counter = (div) => {
    const number = document.createElement('p')
    div.appendChild(number)
    number.innerText = String(count++)
    number.style.color = '#f5f5f5'
    number.style.marginTop = '10px'
    number.appendChild(number)
}

const addUlLiElementsForInterval = (times, div) => {
    const p = document.createElement('p')
    div.appendChild(p)
    p.innerText = `${times.innerText}`
    p.style.color = '#f5f5f5'
    p.style.marginTop = '10px'
    p.appendChild(p)
}

const saveToArr = () => {
    arr = arr.concat(addUlLiElementsForInterval)
}