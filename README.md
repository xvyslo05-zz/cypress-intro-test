# cypress-intro-test

This repo is for MageXo purposes only. It serves for proving capability working as a QA for MageXo.

## Requirements

- yarn (https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- git (https://git-scm.com/download/win)

## Setup

1. Fork and clone the repository. As USERLOGIN set your github user name.

```
git clone git@github.com:USERLOGIN/cypress-intro-test.git
cd cypress-intro-test
```

2. Install mandatory packages

```
yarn install
```

3. Cypress

```
yarn cypress run
```

OR

```
yarn cypress open
```

## Test description

### Forking

Do not forget to fork this repo before you star working and create a pull request when the work is done. Try to commit frequently.


### Test cases

- for each `.it()` create a step by step test case
- keep those test cases in `/test_cases` folder
- if you need to use pictures, keep them there as well

### Implementation

- use test fixtures, if able
- if you miss some fixture, feel free to add it
- even if your code doesnt work, dont delete it and push it with working code to your branch
- feel free to create your own functions and commands

### Bugs

- if you will encounter a bug, please report it in the `/test_bugs` folder
