# With Redux Wrapper + Easy-Peasy Example

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use easy-peasy that also works with the universal rendering approach from Next.js.

This example is widely inspired from the [official redux-wrapper example](https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper) maintained by Next.js (February, 2021)

## How to use

Clone this repo, install dependencies and you're all set:

```bash
yarn install
yarn dev
```

## Notes

`TODO: explain the example`

## TODO's

* Generic state reconciliation during hydration using `jsondiffpatch` and the `initialState` ?
* Use `persist()`
