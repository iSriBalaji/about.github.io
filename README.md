# Portfolio site

### First of all - **Thanks to Harrison Vijay** for accepting to use his code repo to rebuild this site.
*Courtesy* - https://github.com/harrisonvijay

### The site is hosted here <a href="https://isribalaji.in/" target="_blank">isribalaji.in</a>
### For reference:
Deployed using ubuntu os
used node version - v12.22.9 (nvm)
npm version - 8.5.1

### Installing the specific node(nvm) version
1. brew install nvm
2. **Edit the shell configuration file** - <code> ~/.zshrc </code>
<code> export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh </code>
3. source ~/.zshrc  # or the respective file for your shell
4. nvm install 12.22.9
5. nvm use 12.22.9

### Installing the specific npm version
1. npm install -g npm@8.5.1

### Procedure to update the site
- make the necessary changes
- git add -A
- git commit -m "commit message"
- git push -> push the site
- the above step will push the code to the main branch
- npm run deploy -> it will push the code to ghpages
- make sure to add the CNAME in the ghpage branch - isribalaji.in

##### video for reference - domain
https://www.youtube.com/watch?v=6Rto09ElUuY&ab_channel=GalekxyMedia
