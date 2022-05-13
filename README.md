# Home page HTML integration for Super App

<div id="header" align="center">
  <img src="img/mockup-superapp-both.png" alt="Mise en situation du site web SuperApp en vue sur un Mac" width="500" />
</div>


## Process

### Analyse
- Analyse the wireframe : cut out the model desktop and mobile (body, margins, elements, content...) with Adobe Xd
- Retrieve the content : graphic identity (colors, fonts, icons), download medias
- Analyse elements in detail : analyse differences between mobile and desktop wireframe

### Tools choices
- Client does'nt need to administrate the website : don't need CMS
- The client only wants a simple showcase site
- I choose to code with simple HTML / CSS using the text editor Visual Studio Code and Prepros as a local server.

> Later i'll install PostCSS to use plugins and automatize my tasks : 
> minimize css code, prettify html, check the accessibility, optimize medias...

### Web Integration Method
- Create a repository in GitHub to share the project with client
- Optimize medias with Photoshop
- Think about the structure to build a correct HTML file. <a href="https://validator.w3.org/">Check the code with W3C Markup HTML Validator</a>
- Create the style file after finishing the HTML. Start building in responsive mode (mobile-first). Adapt the few responsive rules fast. <a href="https://jigsaw.w3.org/css-validator/">Check the code with W3C Markup CSS Validator</a>

#### Sustainability rules
- Check the code with the <a href="https://github.com/cnumr/GreenIT-Analysis">Green-IT plugin</a> in web browser.

#### Accessiblity rules
- Check all HTML code with <a href="https://www.accede-web.com/en/guidelines/html-css/"> Accede Web rules </a>

#### Optimize the CSS files
- Optimize the CSS file with <a href="https://autoprefixer.github.io/">Autoprefixer</a> and minify with <a href="https://prepros.io/">Prepros</a>





