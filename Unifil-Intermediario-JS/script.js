const input = document.getElementById("date-input")
const output = document.getElementById("output")

const one_second = 1000
const one_minute = one_second * 60
const one_hour = one_minute * 60
const one_day = one_hour * 24
const one_month = one_day * 30
const one_year = one_month * 12

function calculateRemainingTime(refenceDate, todayDate) {
    
    let timeLeft = refenceDate - todayDate

    let yearsLeft = 0
    while (timeLeft > one_year) {
        yearsLeft++
        timeLeft -=  one_year

    }

    let monthsLeft = 0
    while (timeLeft > one_month) {
        monthsLeft++
        timeLeft -= one_month
    }

    let daysLeft = 0
    while (timeLeft > one_day) {
        daysLeft++
        timeLeft -= one_day
    }

    let hoursLeft = 0
    while (timeLeft > one_hour) {
        hoursLeft++
        timeLeft -= one_hour
    }

    let minutesLeft = 0
    while (timeLeft > one_minute) {
        minutesLeft++
        timeLeft -= one_minute
    }

    let secondsLeft = 0
    while (timeLeft > one_second) {
        secondsLeft++
        timeLeft -= one_second
    }

    return {
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    }
}

function textBuilder(remainingTime) {
    let result = []
    
    if (remainingTime.yearsLeft > 0) {
        result.push(`${remainingTime.yearsLeft > 1 ? "years" : "year"}`)
    }

    if (remainingTime.monthsLeft > 0) {
        result.push(`${remainingTime.monthsLeft > 1 ? "months" : "month"}`)
    }

    if (remainingTime.daysLeft > 0) {
        result.push(`${remainingTime.daysLeft > 1 ? "days" : "day"}`)
    }

    if (remainingTime.hoursLeft > 0) {
        result.push(`${remainingTime.hoursLeft > 1 ? "hours" : "hour"}`)
    }

    if (remainingTime.minutesLeft > 0) {
        result.push(`${remainingTime.minutesLeft > 1 ? "minutes" : "minute"}`)
    }

    if (remainingTime.secondsLeft > 0) {
        result.push(`${remainingTime.secondsLeft > 1 ? "seconds" : "second"}`)
    }

}

const dataReferencia = new Date("2028", "01", "01").getTime()
const dataHoje = new Date().getTime()

let resultado = calculateRemainingTime(dataReferencia, dataHoje)
console.log(resultado)

