//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

const KEY = 'kYVBiAHWwzn15IbcpfkVukYaeED5dOFT87Mfstyv'

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=kYVBiAHWwzn15IbcpfkVukYaeED5dOFT87Mfstyv&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type ==='video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').display = 'none'
        }
        
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}