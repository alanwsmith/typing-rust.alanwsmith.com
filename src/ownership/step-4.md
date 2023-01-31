# Step 4

TODO: Can variables have owners? And does
this page use the right language?

---

Let's look at what _does_ happen starting with
a review of Step 3 where we had:

1. The `alfa` variable has been created
2. The `String::from("apple")` value has
   been created and bound to `alfa` making the
   variable its owner
3. We've made the first half of the expression
   to bind `alfa` to `bravo`

Our illustration looks like this:

![Ownership 4](/images/ownership-4.png)

And here's how we complete the expression:

```rust,noplayground
let bravo = alfa;
```

That assignment doesn't make `bravo` the
owner of `alfa`. Instead the value that's
insdie `alfa` gets moved into `bravo` and
`bravo` becomes the owner.

![Ownership 6](/images/ownership-6.png)
