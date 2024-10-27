# Oct 25
## 8:13 pm

Creating a portfolio site. To add stuff to my resume.

started off by making a nix flake for npm. then Ran the following command to get the following output.



```
npx create-react-app portfolio-app --template typescript
```

This gave me the following output:
```
Need to install the following packages:



create-react-app@5.0.1
Ok to proceed? (y) y

npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated fstream@1.0.12: This package is no longer supported.
npm warn deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in /home/josh/Code/Personal-Site/portfolio-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


added 1314 packages in 2m

259 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 30 packages, removed 1 package, and changed 2 packages in 19s

263 packages are looking for funding
  run `npm fund` for details

We detected TypeScript in your project (src/App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using npm...


removed 1 package, and audited 1343 packages in 9s

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Git commit not created Error: Command failed: git commit -m "Initialize project using Create React App"
    at genericNodeError (node:internal/errors:984:15)
    at wrappedFn (node:internal/errors:538:14)
    at checkExecSyncError (node:child_process:891:11)
    at execSync (node:child_process:963:15)
    at tryGitCommit (/home/josh/Code/Personal-Site/portfolio-app/node_modules/react-scripts/scripts/init.js:62:5)
    at module.exports (/home/josh/Code/Personal-Site/portfolio-app/node_modules/react-scripts/scripts/init.js:350:25)
    at [eval]:3:14
    at runScriptInThisContext (node:internal/vm:209:10)
    at node:internal/process/execution:118:14
    at [eval]-wrapper:6:24 {
  status: 128,
  signal: null,
  output: [ null, null, null ],
  pid: 38646,
  stdout: null,
  stderr: null
}
Removing .git directory...

Success! Created portfolio-app at /home/josh/Code/Personal-Site/portfolio-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd portfolio-app
  npm start

Happy hacking!
npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice To update run: npm install -g npm@10.9.0
npm notice
```


probably also need to configure helix for typescript. better look that up.


according to this source.
https://github.com/helix-editor/helix/wiki/Language-Server-Configurations

this is how i install typescript
### TypeScript
typescript-language-server
https://github.com/typescript-language-server/typescript-language-server

typescript-language-server depends on typescript. Both packages can be installed via npm:

npm install -g typescript typescript-language-server
To configure type language server, add a tsconfig.json or jsconfig.json to the root of your project.

Here's an example that disables type checking in JavaScript files.

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "checkJs": false
  },
  "exclude": ["node_modules"]
}
Biome
Biome is a fast and efficient toolchain for web development that formats and lints code, supporting JavaScript, TypeScript, JSX, and JSON, with over 190 rules and high compatibility with existing tools like Prettier.

npm install --save-dev --save-exact @biomejs/biome
Follow the official instructions on how to configure Biome for Helix.

ESLint
Important

@4.10 is broken. You can:

downgrade to v4.8
Await this PR
Await this feature
Install the LSP:
npm i -g vscode-langservers-extracted
Add this to your languages.toml
Install ESL for your project/repo


## 8:23pm

getting this error


```
  
npm install -g typescript typescript-language-server

```



                                                                                                                                                            │
[josh@nixos:~/Code/Personal-Site]$ npm install -g typescript                                                                                                 │
npm error code ENOENT                                                                                                                                        │
npm error syscall mkdir                                                                                                                                      │
npm error path /nix/store/dcdc33kdjdhjnzg6rkmd0cx4kpwl8cac-nodejs-20.17.0/lib/node_modules/typescript                                                        │
npm error errno -2                                                                                                                                           │
npm error enoent ENOENT: no such file or directory, mkdir '/nix/store/dcdc33kdjdhjnzg6rkmd0cx4kpwl8cac-nodejs-20.17.0/lib/node_modules/typescript'           │
npm error enoent This is related to npm not being able to find a file.                                                                                       │
npm error enoent                                                                                                                                             │
npm error A complete log of this run can be found in: /home/josh/.npm/_logs/2024-10-26T02_23_12_537Z-debug-0.log                                             │
                                                                                                                                                             │


## 8:47 pm

finally got the basic react file to load. don't think i have any coding linters or autocompletion for helix. But let's run with it this is how we learn!


i think for the sake of speed i'll follow a tutorial. that way i don't have to make a wireframe. 

also the whole nix vs npm theme is kinda annoying. 

i mean they are conflicting with each other. i can't install packages with npm i have to install it with npm and then put it in my flake and then do nix develop?

and i have to put it in manually to my understanding. 

i must be doing something wrong. cuz i'm not seeing the glory of nix. 

## 9:04 pm

switching to vite and javascript for simplicity
```
 npm create vite@latest
Need to install the following packages:
create-vite@5.5.4
Ok to proceed? (y)


> npx
> create-vite

✔ Project name: … react-portfolio
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /home/josh/Code/Personal-Site/react-portfolio...

Done. Now run:

  cd react-portfolio
  npm install
  npm run dev
 
  ```
## 9:10 pm 
somehow i did end up installing everything i need for javascript autocompletion


learning about css modules. if two css modules have the same name how to do it so they don't overwrite each other.
  

  renamed app.css to app.module.css


  i need to send everthing to git


## 10:00 pm

continued with the tutorial. i was hoping to have the basics up tonight so i could add all my own stuff over the weekend. looks
like that's not happening.


## 10:12 pm

i think i need to sit down and learn javascript again

# Oct 27
## 12:13 am

just starting back into coding this website. only about 10 minutes into a 2 hr tutorial.
tomorrow is going to be an all day marathon.



## 12:17 am

actually 32 minutes in

i think after making this with the tutorial, i should make a figma and website from scratch.

