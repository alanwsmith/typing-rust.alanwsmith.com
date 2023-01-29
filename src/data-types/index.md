# Data Types

Rust has "types". Each one defines a different
kind of data. Every value in Rust has to be
one of those types. For example,
numbers without decimal points are `i32` types.

One way to think about it is like asking someone
what kind of dog they have.

```txt
What kind of dog is Charlie?

A golden retriever
```

We can ask similar questions about data:

```txt
What type of variable is alfa?

An i32
```

The "type" of a value is what
you'd used to answer a question about what kind of
thing it is. For example, if you were asking someone
about their dog:

```txt
What kind of dog is Charlie?

A golden retriever
```

And, in a similar manner when discussing a Rust program:

```txt
What type of variable is alfa?

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
