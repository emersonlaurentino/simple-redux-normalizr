# simple-redux-normalizr

## Get Started
```
npm install simple-redux-normalizr --save
```

## Example

```js
import { normalize, denormalize, getItem } from 'simple-redux-normalizr';

const arr = [
  { id: '32o8wafe', name: 'mark', company: 'facebook' },
  { id: 'oaiwefjo', name: 'musk', company: 'tesla' },
  { id: '3oij2e3c', name: 'jobs', company: 'apple' },
];

// {32o8wafe: Object, oaiwefjo: Object, 3oij2e3c: Object}
const normalized = normalize(arr, 'id');

// [Object, Object, Object]
const denormalized = denormalize(normalized);

// {id: "oaiwefjo", name: "musk", company: "tesla"}
const getFullObj = getItem(normalized, 'oaiwefjo');

// tesla
const getItemOfObj = getItem(normalized, 'oaiwefjo', 'company');
```
