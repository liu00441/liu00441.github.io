
const imgs = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'
]

/*

<div class="gallery" id="gallery">
  <div class="photo">
    <div class="overlay" id="overlay">
      <img src="images/portfolio/i.jpg" id="bigger">
    </div>
      <div class="small">
        <img src="images/1.jpg" id="smallimg">
      </div>
  <div>
*/

const $gallery = document.getElementById('gallery')

const $photos = []

$photos.push(`<div class="gallery" id="gallery">`)
$photos.push(`<div class="photo">`)
$photos.push(`<div class="overlay" id="overlay">`)
$photos.push(`<img src="images/portfolio/1.jpg" id="bigger">`)
$photos.push(`</div>`)
for (const img of imgs) {
  $photos.push(`<div class="small">`)
  $photos.push(`<img src="images/portfolio/${img}.jpg" class="pic" id="${img}">`)
  $photos.push(`</div>`)
  $photos.push(`</div>`)
  $photos.push(`</div>`)
}

$gallery.innerHTML = $photos.join('')

const $thumbnail = document.querySelectorAll('.pic')

for (const $imgclick of $thumbnail) {
  $imgclick.addEventListener('click', function (e) {
    const overlay = document.getElementById('overlay')
    overlay.classList.add('show')

    const bigger = document.getElementById('bigger')
    const imgsrc = $imgclick.getAttribute('id')

    bigger.setAttribute('src', `images/portfolio/${imgsrc}.jpg`)
  })
}

const cover = document.getElementById('overlay')

cover.addEventListener('click', function (e) {
  cover.classList.remove('show')
})
