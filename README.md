# Bug report
I use [@material-ui/styles](https://material-ui.com/styles/basics/#material-ui-styles) in Next.js develop mode. And If I use  `makeStyles`, `createStyles` add styles to the elements, it will be useless when I refresh the page. After the HMR(after you type something in the source code), the style will be showed.

See the example in `pages/index.js`

# Environment
* next.js: 9.5.3
* Node: v12.18.2
* os: Windows10 1909