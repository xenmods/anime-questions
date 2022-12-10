const falsebtn = document.getElementById('falsebtn')
const truebtn = document.getElementById('truebtn')
const questionbtn = document.getElementById('questionbtn')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer')
const scoreElement = document.getElementById('scoretext')
let correctanswer = ""

changequestion()

falsebtn.addEventListener('click', changeanswer)
falsebtn.param = 'False'
truebtn.addEventListener('click', changeanswer)
truebtn.param = 'True'
questionbtn.addEventListener('click', changequestion)


async function changeanswer(choice) {
    userchoice = choice.currentTarget.param
    console.log(`User choice is: ${String(userchoice.toLowerCase())}`)
    console.log(`Correct choice is: ${String(correctanswer.toLowerCase())}`)
    if (String(userchoice.toLowerCase()) == String(correctanswer.toLowerCase())) {
        falsebtn.style.display = 'none';
        truebtn.style.display = 'none';
        currentscore = Number(scoreElement.innerHTML.replace("Score: ", ""))
        console.log(currentscore)
        scoreElement.innerHTML = `Score: ${currentscore + 1}`
        answerElement.innerHTML = 'Correct!'
    }
    else {
        falsebtn.style.display = 'none';
        truebtn.style.display = 'none';
        answerElement.innerHTML = 'Wrong :('
    }
}

async function changequestion() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const res = await fetch('https://opentdb.com/api.php?amount=1&category=31&type=boolean', config)
    const data = await res.json()
    questionElement.innerHTML = data['results'][0]['question']
    falsebtn.style.display = "";
    truebtn.style.display = "";
    answerElement.innerHTML = "";
    correctanswer = data.results[0].correct_answer
  }

// async function getanswer() {
//     answerElement.innerHTML = answer
// }