This project was started from scratch, following this tutorial: https://www.valentinog.com/blog/webpack-tutorial/

React was then implemented using Webpack & Babel: https://www.valentinog.com/blog/react-webpack-babel/

Redux was also implemented following this tutorial: https://www.valentinog.com/blog/redux/ 

To learn TypeScript, I used this video tutorial series, taking notes and then tried implementing what I had learned in the previous two tutorials and re-writing the code in TypeScript: https://www.youtube.com/watch?v=WBPrJSw7yQA 

If you are interested, you can read the notes that I took on these, and on further subjects, by viewing the study.notes.txt file in the repository.

## Currently implementations and technologies used:
- Webpack, from scratch (Webpack is a static module bundler for JavaScipt applications)
- Babel (A toolchain that compiles EMCAScript2015+ to backwards compatible versions of JavaScript). It can also compile .jsx to .js
- Typescript (Type checker, which compiles to JavaScript)
- Scss (CSS preprocessor, all .scss files compile to one style.css file)
- React + dev tools
- Redux + dev tools


## Next steps: 
- Create backend API / web service that reads, writes, and deletes records from an SQL database. 
- Finish React Tutorials
- Look into imtegrating Jest
- Implement Linting (ESLint & Prettier)
- Profile.Backend folder also contains a VS 2017 ASP.NET project, which (will eventually) utilize XUnit Testing, Swagger, API implementation, and SQL Database integration. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

If tests had been implemented, this would work. However this currently just echo's an error message telling the user that no tests exist yet.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The solution compiles .scss files into one style.css file, compiles all typescript into one app.bundle.js file - minified and with source maps. It also adds a single index.html file to the dist folder and adds a link to the style.css file in it. 

### `npm run build:dev`
Much like npm run build, but it builds the app with unminified code.<br>