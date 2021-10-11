# cypress-intro-test

This repo is for MageXo purposes only. It serves for proving capability working as a QA for MageXo.

## Requirements

- yarn
- git

## Setup

1. Clone the repository

```
git clone git@github.com:xvyslo05/cypress-intro-test.git
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

### Branching

Do not forget to branch out from the `master` branch. Use your `firstName` as a branch name.

- commit frequently
- create a pull request

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
