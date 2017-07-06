
const ProjectsConst = {
  projects: [[{
    title: 'WDI Final Project',
    name: 'pcBuilderApp',
    summary: 'pcBuilderApp is an app which makes it simpler to design and build a computer, removing the guesswork of choosing parts.',
    pageContent: {
      paragraphs: [
'pcBuilderApp is a tool aimed at PC gamers, enthusiasts and beginner home-builders that checks PC component compatibility. It is meant to be easier to use than competitors, which are often layers of forms that are hard to navigate. With each part you choose, the form filters out any incompatible parts with virtually seamless updates.',

'I chose this product because I have had trouble with these services in the past and from a novices point of view, hard to navigate. I have a good knowledge of consumer hardware, I figured I should do something that\'s interesting to me.',

'I handed in the second iteration, I think I exceeded my initial plans with the form functionality. With some work on the UI and seeded data it could be really cool.',

'It was an exploration of the relational database and some of the packages available for AngularJS.'],
      techs: [
        'Ruby on Rails',
        'PostgreSQL',
        'AngularJS',
        'AngularJWT authentication'
      ],
      links: [
        {
          text: 'Front-end Github',
          url: 'https://github.com/LBoyle/wdi-project-4-frontend'
        },
        {
          text: 'Back-end Github',
          url: 'https://github.com/LBoyle/wdi-project-4-api'
        },
        {
          text: 'Heroku',
          url: 'not working'
        }
      ],
      colabs: []
    }
  },{
    title: 'WDI Group Project',
    name: 'What\'s your Beef?',
    summary: 'What\'s your Beef is an app directed at both vegans and non-vegans who can share vegan versions of popular recipes.',
    pageContent: {
      paragraphs: [
'What\'s your Beef is an app directed at both vegans and non-vegans who can share their own vegan versions of various recipes.',

'Users not logged in can view recipes by cuisine category. Once registered they can create, update and delete recipes.',

`The user flow is to choose a cuisine category, then a recipe, from here they can view the Chef profile page and all their recipes across all categories.
Once logged in users are redirected to their account page where they can post recipes, view and edit their recipes and account details.`,
// for some reason the above paragraph is broken in normal ''

'The profile page is not accessible until the user has posted a recipe.'],
      techs: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'AngularJS',
        'Bcrypt and AngularJWT authentication',
        'Mocha, Chai, Supertest for back-end TDD'
      ],
      links: [
        {
          text: 'GitHub',
          url: 'https://github.com/Sunnyg23/wdi-group-project'
        },
        {
          text: 'Heroku',
          url: 'https://veganchef-lboyle.herokuapp.com'
        }
      ],
      colabs: [
        {
          name: 'Danai',
          url: 'https://github.com/danainanou'
        },
        {
          name: 'Dave',
          url: 'https://github.com/DaveMitten'
        },
        {
          name: 'Sunny',
          url: 'https://github.com/Sunnyg23'
        }
      ]
    }
  },{
    title: 'WDI First Project',
    name: 'Othello',
    summary: 'This is Othello, a board game with black and white pieces in which you enclose your enemies piece to take it.',
    pageContent: {
      paragraphs: [
'Othello is a highly strategic game where you take enemy pieces by flanking them with your own. Originally given the name Reversi when it was invented, it was rebranded as Othello by Mattel.',

'I modified the function that checks wether a move is valid, then repeated it for every square on the board to find the moves that will score highest. At the moment, it doesn\'t think at all, it just finds the best move and takes it, an aggressive strategy. It only looks at the board at that time.',

'An experienced player could beat or trap it.',

'In the long run I plan to modify it further to predict a few moves ahead and attempt to minimize the player\'s moves, rather than just scoring as high as possible every turn.'],
      techs: ['jQuery'],
      links: [
        {
          text: 'GitHub',
          url: 'https://github.com/LBoyle/wdi-project-1'
        },
        {
          text: 'Heroku',
          url: 'https://infinite-meadow-13142.herokuapp.com/'
        }
      ],
      colabs: []
    }
  }],[{
    title: 'Codezoners Final Project',
    name: 'TwitPol',
    summary: 'Twitter visualization map displaying the results of sentiment analysis on tweets concerning Brexit.',
    pageContent: {
      paragraphs: [
'This was my first proper group project, it collected tweets that matched topics like "Brexit" or "Remain" from within the UK if a location was provided, performed sentiment analysis on the body then saved the location and sentiment score to our database.',

'We then sent the results in a JSON to the front-end to display them over a map. We also displayed the numbers for and against.',

'On the last night before the result, it had, by chance, predicted 52% to 48% for, much to our dismay, though we disregarded it because of the results turned out to be nonsense.',

'It proved very difficult to accurately gauge sentiment for or against anything, the tweets were far from computer-readable. What we displayed in the end was whether people talking about it were writing in a positive or negative manner.'],
      techs: [
        'Flask',
        'MongoDB',
        'Twitter API',
        'VaderSentiment',
        'p5.js',
        'leaflet.js'
      ],
      links: [
        {
          text: 'GitHub',
          url: 'https://github.com/LBoyle/TwitPol'
        }
      ],
      colabs: [
        {
          name: 'Karen',
          url: 'https://github.com/lagerrabbit'
        },
        {
          name: 'Faraz Sayed',
          url: 'https://github.com/nanoBorg88'
        }
      ]
    }
  }]]
};


// empty: {
//   title: '',
//   summary: '',
//   pageContent: {
//     paragraphs: ``,
//     techs: ``,
//     links: [
//       {
//         text: '',
//         url: ''
//       }
//     ]
//   }

angular
  .module('lbpf')
  .constant('ProjectsConst', ProjectsConst);
