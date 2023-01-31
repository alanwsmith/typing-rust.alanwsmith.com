# Step 2

When we want to use the value of the `String` we
don't access it directly. We get it from through
the variable.

For exaple, if we do:

```rust,noplayground
println!("alfa has {alfa}");
```

Rust sees the request for `alfa` and access
the variable to get the value it's bound to
and returns it for the output:

```rust,noplayground
alfa is apple
```

Here's what that looks like:

![Ownership 3](/images/ownership-3.png)

