# What Doesn't Happen

Next we'll complete our expression with this:

```rust,noplayground
let bravo = alfa;
```

Becasue `alfa` became the owner of our `String` value
when we did this:

```rust,noplayground
let alfa = String::from("apple");
```

It's natural to think `bravo` would become
the owner of `alfa` when we completed our
expression with `let bravo = alfa;`

If that were the case, we'd get something
that looks like this:

![Ownership 5](/images/ownership-5.png)

We would then be able to get at our `String`
value from both `alfa` and `bravo`. (`alfa`
would be direct and `bravo` would go through
`alfa`).

But, that's not what happens.
