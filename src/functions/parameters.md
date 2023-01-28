# Function Parameters

We can also send data to functions for
them to use. In order to do this we have
to let the functions know a few things.
To start with, those are:

1. That data will be coming in
2. What type of data it will be
3. A variable name to use to hold the incoming data

The way we do that is to assign a variable inside
the parenthesis after the function name. The format
is similar to what we've used to assigning variable
so far but we remove the `let`, `=`, and the value.

So instead of this:

```rust, noplayground
let alfa: i32 = 3
```

we'd pull out just this part:

```rust, noplayground
alfa: i32
```

To use that in a function named `widget` we'd write this:

```rust, noplayground
fn widget(alfa: i32) {
  println!("I am alfa");
}
```

---

TODO: Combine this with the next page since it doesn't
really make sense to show the incoming parameter
but not use it.
