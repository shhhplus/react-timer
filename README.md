# react-timer &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-timer/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-timer.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-timer)

## Introduction

This react timer component is very easy!

## Install

`npm install @shhhplus/react-timer --save`

## How to use

### sync

```javascript
import { useCallback } from 'react';
import Timer from '@shhhplus/react-timer';

const Demo = () => {
  const onElapsed = useCallback(() => {
    console.log('...');
  });
  return <Timer interval={1000} onElapsed={onElapsed} />;
};
```

### async

```javascript
import { useCallback } from 'react';
import Timer from '@shhhplus/react-timer';

const Demo = () => {
  const onElapsed = useCallback(() => {
    console.log('...');
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  });
  return <Timer interval={1000} onElapsed={onElapsed} />;
};
```
