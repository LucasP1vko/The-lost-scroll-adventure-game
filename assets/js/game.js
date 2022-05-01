const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(0)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerHTML = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    
      const button = document.createElement('button')
      button.innerHTML = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    
  })
}


function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= -2) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 0,
        text: '<h1>The Lost Scroll.</h1>' +
            '<h4>Text adventure game.</h4>',
        // need to implement input here to ask for user name
        options: [{
            text: '<h1>Begin quest</h1>',

            nextText: 1
        }, ]
    },
// game over screen
    {
        id: -1,

        text: '<h1>You died.</h1>',
        options: [{
            text: 'Try again. Lives left: ',
            nextText: -2
        }, ]
    },
    {
        id: 1,
        text: 'One night you woke up alone on cold rocky beach and you dont know where you are and how you got here.' +
            'The only thing you remember is that you were with your family on a ship to england and you went to sleep in your cabin.' +
            'The ship must have sunked when you were sleeping. ' +
            'You need to find your family. ' +
            'Its dark but you look around where to go:',
        options: [{
                text: 'Tall wall of rocks on front (climb)',

                nextText: 51,
               //  alert(`You have dropped off the wall and died.`)
            },
            {
                text: 'Complete darkness on your left (go left)',

                nextText: 52,
               //  alert(`Sea tide flooded the beach and you drowned.`)
            },
            {
                text: 'Barelly visible light in the distance on your right (go right)',
                nextText: 2,
            },
            {
                text: 'Stay here and wait for the day',

                nextText: 53,
               //  alert(`Sea tide flooded the beach and you drowned.`)
            },
        ]
    },

    // second question

    {
        id: 2,
        text: 'After long walk with last of your strenghts you arrived to the source of light. ' +
            'It appeared to be small camping campside on front of entrance to the cave covered with massive rock with some ancient mechanizm to move it. ' +
            'Beside fireplace was an old man with his dog. He look like he is a guardian of this entrance. ' +
            'What do you do?',
        options: [{
                text: 'Wait for daytime',

                nextText: -1,
               //  alert(`Sea tide flooded the beach and you drowned.`)
            },
            {
                text: 'Call him',
                nextText: 3,
            },
            {
                text: 'Walk to him',

                nextText: -1,
               //  alert(`The guard shot you without warning.`)

            },
            {
                text: 'Sneak to the camp.',

                nextText: -1,
               //  alert(`Guards dog sniffs you and you got shot.`)
            },
        ]
    },
    {
        id: 51,
        text: '<h1>You have dropped off the wall and died.</h1>',
        options: [{
                text: 'Try again. Lives left: ',

                nextText: 0,
            },
        ]
    },
]


startGame()