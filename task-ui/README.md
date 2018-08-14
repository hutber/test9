# Hutber Test 9

I have chosen to us [create-react-app](https://github.com/facebook/create-react-app) which I have not normally gone with having chosen previously to use my custom webpack choices. But the one benefit to doing tests is you get to build from scratch so here we go :D 

## Getting Started

Install commitizen

`npm install -g commitizen`

Install the hutber-conventional-changelog package.

`npm install --save-dev hutber-conventional-changelog`

Init commitizen configuration

`commitizen init hutber-conventional-changelog --save-dev --save-exact`


## Usage

`npm run commit`

I have added lint staged/commitizen/husky. This will run all tests on all staged files when you do a commit. This helps you catch smaller issues rather than a large check just before you do a push. Still I left all tests proper to run with the push.

## Prettier

I have added prettier in here as I am very big believer of it. I haven't seen many disadvantages to using this tbh. You can flexibility with the rules and I have hooked this to run automatically with my commitizen. 
