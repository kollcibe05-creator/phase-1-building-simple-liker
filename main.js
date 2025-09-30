// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll('.like-glyph')
function likeManipulation () {
hearts.forEach(heart  => heart.addEventListener('click', () => {
toggleButton()
}))}

function serverCall() {
  mimicServerCall()
  .then( () => {console.log('success')
   likeManipulation()}
  ) 
  .catch(setTimeout(() => {
    document.getElementsByClassName('hidden').className = 'none'},3000))

}
function toggleButton() {
hearts.classList.toggle('activated-heart')
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
