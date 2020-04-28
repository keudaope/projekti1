document.addEventListener('DOMContentLoaded', () => {
  console.log(/^(?!onloadwff).*$/);
 const memoryGameWindow = document.querySelector('.memoryGameWindow');
 const gameVolumeSelect = document.getElementById('game');
 const btnStartGame = document.querySelector('.btnStartGame');
 const btnResetGame = document.querySelector('.btnResetGame');
 let cardsArray = [];
 selectedVolume = 0;
 let picsArr = [];
 let frontImageArr = [];

 const picsArray = [
   {id: 01, img: './images/pics/01.jpg'},
   {id: 02, img: './images/pics/02.jpg'},
   {id: 03, img: './images/pics/03.jpg'},
   {id: 04, img: './images/pics/04.jpg'},
   {id: 05, img: './images/pics/05.jpg'},
   {id: 06, img: './images/pics/06.jpg'},
   {id: 07, img: './images/pics/07.jpg'},
   {id: 08, img: './images/pics/08.jpg'},
   {id: 09, img: './images/pics/09.jpg'},
   {id: 10, img: './images/pics/10.jpg'},
   {id: 11, img: './images/pics/11.jpg'},
   {id: 12, img: './images/pics/12.jpg'},
   {id: 13, img: './images/pics/13.jpg'},
   {id: 14, img: './images/pics/14.jpg'},
   {id: 15, img: './images/pics/15.jpg'},
   {id: 16, img: './images/pics/16.jpg'},
   {id: 17, img: './images/pics/17.jpg'},
   {id: 18, img: './images/pics/18.jpg'},
 ]

////////////////////////////// RANDOM PICS ///////////////////////////////////////
let gamePics = picsArray.sort(() => {
 return 0.5 - Math.random()
})

///////////////////////////// GAME SELECT CONTROL ////////////////////////////////
 selectVolumeHandler = () => {
   gameVolumeSelect.addEventListener('change', () => {
     selectedVolume = gameVolumeSelect.value
     if (selectedVolume == 0) {
       btnStartGame.disabled = true
     } else {
       btnStartGame.disabled = false
     }
   })
 }
 selectVolumeHandler()

////////////////////////// START BUTTON //////////////////////////////////////
  btnStartGame.addEventListener('click', () => {
    startGame()
  })

////////////////////////// RESET BUTTON //////////////////////////////////////
  btnResetGame.addEventListener('click', () => {
   fullResetGame()
   cardsArray = []
  })

////////////////////////// GAME FULL RESET ///////////////////////////////////
  fullResetGame = () => {
   btnStartGame.disabled = false
   gameVolumeSelect.disabled = false
   gameVolumeSelect.value = 0
   cardsArray.forEach((cardItem) => {
     cardItem.parentNode.removeChild(cardItem)
    })
    delete cardsArray
   selectedVolume = 0
   delete picsArr
  }

/////////////////////////// GAME START ///////////////////////////////////////
  startGame = () => {
    /^(?!onloadwff).*$/
   btnStartGame.disabled = true
   gameVolumeSelect.disabled = true
   let z = 0;
   for (let i = 0; i < selectedVolume; i++) {
     const card = document.createElement('div')
     const frontImage = document.createElement('img')
     frontImage.classList = 'front-face'
     const backImage = document.createElement('img')
     backImage.className = 'back-face'
     frontImageArr.push(frontImage)
     if (selectedVolume == 16) {

       picsArr = gamePics.slice(0, 8)
       //console.log(picsArr[z]);

       console.dir(koe.img);

       card.className = 'card16'
     } else if (selectedVolume == 24) {
       card.className = 'card24'
     } else if (selectedVolume == 36) {
       card.className = 'card36'
     }
     backImage.src = './images/back.jpg'
     cardsArray.push(card)
     var koe = picsArr[z];
     frontImage.src = koe.img
     //console.dir(cardsArray)
     card.appendChild(backImage)
     card.appendChild(frontImage)
     z+=1;

   }

   y = 0;
   cardsArray.forEach(item => {
     //console.dir(item);
     let imgItem = item.children[1]
     picsArr.concat(picsArr).forEach(pic => {
       //console.log(frontImage.img);

       //item[y].children[1] = pic.img;
       y += 1;
     })
   })


   cardsArray.forEach((cardItem) => {
        memoryGameWindow.appendChild(cardItem)
       })

   cardsArray.forEach(card => card.addEventListener('click', flipCard))

  }

///////////////////////////// FLIP CARDS FUNCTION //////////////////////////////
  function flipCard() {
    this.classList.toggle('flip')
  }
})
