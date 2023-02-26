# Template Typescript Package

This is a template for a typescript package

## Table of contents

- [Features](#features)
- [Setup](#setup)
- [Test](#test)
- [Build](#build)
- [Deploy](#deploy)

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [TypeDoc](https://typedoc.org/)

## Setup

### Runtime Dependencies

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

### Install

```bash
#!/bin/bash
npm install // Install dependencies
npm install:clean // Clear dependencies then install
```

## Test

```bash
#!/bin/bash
npm run test
```

## Lint

```bash
#!/bin/bash
npm run lint
```

## Build

```bash
#!/bin/bash
npm run build:src // Build source
npm run build:docs // Build documentation
npm run build:docs:json // Build json documentation
npm run build // Build src, docs, and json
npm run build:clean // Delete existing artifacts and rebuild src, docs, and json
```

## Deploy

```bash
#!/bin/bash
npm run deploy
```
