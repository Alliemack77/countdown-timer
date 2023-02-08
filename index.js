// set the date we are counting down to 
const countDownDate = new Date('Mar 18, 2023 08:00:00').getTime()

// update the count down every second
const x = setInterval(() => {

    // get todays date
    const now = new Date().getTime()

    // get the distance between now and the count down date
    const distance = countDownDate - now

    // find the distance in days, hours, mins, & secs
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the result
    document.getElementById('countdown-clock').innerHTML = `
    
        <p>${days} days</p>
        <p>${hours} hours</p> 
        <p>${minutes} minutes</p>
        <p>${seconds} seconds</p>
    `
})