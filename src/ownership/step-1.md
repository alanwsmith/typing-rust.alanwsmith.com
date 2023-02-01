# Step 1

Let's go through the process of creating a variable
and binding a value to it to get a better understading
of ownership. We'll start off by splitting this
line in half:

```rust, noplayground
let alfa = String::from("apple");
```

The `let alfa` on the left side of our equal sign
is what's responsible for creating the variable
with our specified name.

![Ownership 1](/images/ownership-1.png)

Adding in the `String::from("apple")` to complete
the expression creates the value, binds it to
`alfa`, and makes `alfa` its owner in the process.

![Ownership 2](/images/ownership-2.png)
