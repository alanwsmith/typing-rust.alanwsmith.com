# Constants In The Global Scope

Here's the previous example we used to
demonstrate a constant.

```rust, noplayground
fn main() {
  const ALFA: i32 = 100;
  println!("Alfa {ALFA}");
}
```

The `const` and `println!()` statements are
inbetween the `{` and `}` of the `main()` function.
The terminology used for this is to say
those statements are in the main()
function's "scope".

Scope is like a one-way wrapper where:

1. Anything that's in a surround scope can be
   be accessed by what's inside the inner scope, but
2. Anything inside the scope can't be accessed by
   anything outside of it.

The `main()` function's scope is clearly delimited by
the `{` and `}`. There's another scope surrounding it
in our program that's invisible. It's what's called the
"global" scope. It begins at the start of the source code
and goes all the way to the end encompassing everything
in between.

What this means is that we can move the assignment for our
`ALFA` constant above the definition of the `main()`
function like this:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
const ALFA: i32 = 100;

fn main() {
  println!("Alfa {ALFA}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
