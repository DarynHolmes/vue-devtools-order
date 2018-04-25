# Vue Devtools - Issue with order of mutations

Run with: npm run serve

Load up Vue DevTools

Click the button called `Add Error`

In the console, the logger shows us that `addError` was called before `removeError`.

The Vue DevTools shows this order in reverse. This makes it difficult to "time travel" with the dev tools.


It appears that the Dev Tools are not using enough precision when ordering by time.


