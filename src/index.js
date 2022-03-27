// // Your code here
// const maintitle = document.getElementById('films')
// //const title = document.getElementsByClassName('film item')
// const runtime = document.getElementById('runtime')
// const showtime = document.getElementById('showtime')
// const description = document.getElementById('film-info')
// const capacity = document.getElementById('ticket-num')
// const poster = document.getElementById('poster')


// const flatdango = async () => {
//     let req = await fetch('http://localhost:3000/films')
//     let res = await req.json()
//     console.log('fetch is running')
//     res.forEach((el) => {
//         //STEP 1: create a side bar for movie titles
//         x=0 // need to separate each li on click maybe with a counter
//         btn = document.createElement('button')
//         btn.innerHTML = el.title
//         maintitle.appendChild(btn)

//         //STEP 2: When title on side bar is clicked,
//         //show title,runtime,showtime, desc,etc.
//         maintitle.addEventListener('click',() => {
//             console.log('clicked')
//             // title.innerHTML = el.title
//             // runtime.innerHTML = el.runtime
//             // showtime.innerHTML = el.showtime
//             // description.innerHTML = el.description
//             // capacity.innerHTML = el.tickets_sold
//             // poster.setAttribute('src',el.poster)
//         })
        

//         title.innerHTML = el.title
//         runtime.innerHTML = el.runtime
//         showtime.innerHTML = el.showtime
//         description.innerHTML = el.description
//         capacity.innerHTML = el.tickets_sold
//         poster.setAttribute('src',el.poster)

        

//         //STEP 3: When title on side bar is clicked, buy tickets
//         let buy = document.getElementById('buy-ticket')
//         buy.addEventListener('click', () => {
//             console.log('btn clicked')
//             //let ticketsRemaining = el.tickets_sold
//             if(capacity.innerHTML < el.tickets_sold && capacity !== 0){
//             --capacity.innerHTML
//             }
//         })
        




//     })  
  
// }
// flatdango()









const mainTitle = document.getElementById('films')
const title = document.getElementsByClassName('film item')
const runtime = document.getElementById('runtime')
const showtime = document.getElementById('showtime')
const description = document.getElementById('film-info')
const capacity = document.getElementById('ticket-num')
const poster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const buybtn = document.getElementById('buy-ticket')

const request = async () => {
    let req = await fetch('http://localhost:3000/films/1')
    let res = await req.json()
    console.log('async is running')

    
    // const btn = document.createElement = ('button')
    // btn.innerHTML = res.title

    // mainTitle.appendChild(btn)
    mainTitle.innerHTML = res.title

    
    mainTitle.addEventListener('click',() => {    
        movieTitle.innerHTML = res.title
        showtime.innerHTML = res.showtime
        runtime.innerHTML = res.runtime
        description.innerHTML = res.description
        capacity.innerHTML = res.capacity
        poster.src = res.poster

        buybtn.addEventListener('click',() => {
            if (--capacity.innerHTML > res.capacity || capacity.innerHTML>-1){
                return capacity.innerHTML
            }
            else return alert('OUT OF STOCK')

        })


})
    
}
request()