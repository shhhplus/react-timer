# react-timer &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-timer/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-timer.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-timer) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-timer/master?token=FOCNEWKWBC)](https://codecov.io/gh/shhhplus/react-timer) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-timer/cd.yml)](https://github.com/shhhplus/react-timer/actions)

This react timer component is very easy!

## Install

```sh
npm install @shhhplus/react-timer --save
```

## How to use

### sync

```javascript
import Timer from '@shhhplus/react-timer';

const Demo = () => {
  const onElapsed = () => {
    console.log('...');
  };
  return <Timer interval={1000} onElapsed={onElapsed} />;
};
```

### async

```javascript
import Timer from '@shhhplus/react-timer';

const Demo = () => {
  const onElapsed = () => {
    console.log('...');
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  };
  return <Timer interval={1000} onElapsed={onElapsed} />;
};
```
