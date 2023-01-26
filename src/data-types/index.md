# Data Types

Rust's design requires every value have a
"type" assigned to. The "type" of a value is what
you'd used to answer a question about what kind of
thing it is. For example, if you were asking someone
about their dog:

```txt
What kind of dog is Charlie?

A golden retriever
```

And, in a similar manner when discussing a Rust program:

```txt
What type of varaible is alfa?

A number with a decimal point
```

Except we wouldn't use the term "a number with a
decimal point". We'd use `f32`. That's what Rust
uses to set the type of a value to a "floating-point
number" (which is a number that has a decimal point
compared to an "integer" which doesn't).

As we saw in the previous chapter, types are assigned
to variables when they are created. We used `i32`
in the prior examples for integers. We could have used
`f32` for floating-point numbers just as easily:

For example:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa: f32 = 3.4;

  println!("Value {}", alfa);

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
