# Turning Off Warnings

This code produce the two warnings and one
error on the previous page.

```rust, noplayground
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

All we care about right now is the error message.
Rust provides as way to suppress warnings (TODO:
find the name of these things, "directives", maybe?)

There are several directives available. (TODO:
link to the other directives). The one we're  
interested in right now is `#[allow(unused)]`

(TODO: Update based on the one with the `!`
as well and talk about the difference i.e.
`#![allow(unused)]`

It's applied like this. Give it a shot
to see the error message.

#### SOURCE

```rust, noplayground, EXAMPLE1
#[allow(unused)]
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
