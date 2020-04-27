export const rightLinks = [
  {
    key: 'signIn',
    text: 'Sign In',
    to: '/sign-in',
  },
  {
    key: 'signUp',
    text: 'Sign Up',
    to: '/sign-up'
  }
];

export const leftLinks = [
  {
    key: 'games',
    text: 'Games',
    to: '/games',
    subCategories: [
      {
        key: 'quizzes',
        text: 'Quizzes',
        to: '/quizzes',
      },
      {
        key: 'puzzles',
        text: 'Puzzles',
        to: '/puzzles',
      },
      {
        key: 'wordGames',
        text: 'Word Games',
        to: '/word-games',
      },
      {
        key: 'pubQuiz',
        text: 'Pub Quizzes',
        to: '/pub-quiz',
      }
    ]
  },
  {
    key: 'categories',
    text: 'Categories',
    to: '/categories',
    subCategories: [
      {
        key: 'geography',
        text: 'Geography',
        to: '/category/geography',
      },
      {
        key: 'sports',
        text: 'Sports',
        to: '/category/sports',
      },
    ]
  },
];
