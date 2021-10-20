# TDP-Visualisation-Dashboard


## Tailwind 
Repo does not include necessary node modules due to size, so in order to work with Tailwind on your machine you will need to install the dependencies. The dependencies are already detailed in package.json, so to install them make sure you're in the root project folder and enter the command:

``npm install``

But in case that doesn't work, the usual way is first to install the basic version of Tailwind on your machine:

``npm install tailwindcss``

The project also relies on DaisyUI, to install simply enter:
``npm i daisyui``

If you have made any changes to the css in index.html you will need to rebuild the purged Tailwind CSS file:

``npm run build-css``

You can see the result in /public. Tailwind removes all unused utility classes to minimise file size. 

The VSCode extension Tailwind CSS Intellisense is useful if you want to edit the CSS. It provides autosuggestions of the utility classes when typing.
