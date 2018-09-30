# Masmovil phone catalog app [![Build Status](https://travis-ci.com/polesskiy-dev/masmovil-phones.svg?branch=master)](https://travis-ci.com/polesskiy-dev/masmovil-phones)

[See Live demo on heroku]()

## Few words about dev features

    [ ] Deploy on Heroku
    [ ] Dockerazing
    [ ] Internationalization EN/ES
    [ ] Theme switching
    [ ] Unit tests
    [ ] API docs
    [x] Travis

## About implementation
[react-create-app](https://github.com/facebook/create-react-app) for rapid front-end development with some *eslint airbnb config* enhancement.
[reactstrap](https://reactstrap.github.io/) as a design & components system for fancy look.
I'm not plan to use old bootstrap grid, instead let's utilize modern grids. 

## Client implementation
### Project structure
     
Let's keep component code/styles/tests in folders with appropriate name:
````
└── Popup
    ├── Popup.css
    ├── Popup.js
    └── Popup.spec.js
````

#### common folders
* `helpers` - util functions
* `selectors` - reusable store selectors
* `ducks` - action constants + action creators + reducer + epic combined in duck files 
     
#### components 
* `containners` - connected to store container components
* `layout` - reusable components for page layout e.g. <Footer/>, <Header/>
* `utils` - just reusable components which you can't imagine place

and other folders by business rules, it can be `forms`, `hocs`.

#### styles
* `common-styles` folder
Let's follow [7-1 sass pattern](https://sass-guidelin.es/#the-7-1-pattern)

## Code conventions

### file naming

File name should have 
* `PascalCase` if file exports: class, component
* `snake-case` if file exports: function, object, map, list

### variable/class/component/function naming

Is the hardest part of programming
