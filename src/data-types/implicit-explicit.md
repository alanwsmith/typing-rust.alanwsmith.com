# Implicit And Explicit

In all our previous examples we've set the
type of our variable explicitly by adding
a `:` after the name along with the type
(e.g. `i32`). Rust has the ability to
guess the type of some varaibles so
that's not always necessary. When we do
that it's called an "implicit" type
assignment and it looks like this:

```rust, noplayground
let alfa = 7;
```

That turns our formula for defining
a variable into this:

1. The `let` keyword
2. The optional `mut` keyword
3. A name for the variable (e.g. `alfa`)
4. A `:` separator if we're explicitly setting the data type
5. An optional data type
6. The `=` sign
7. The value to bind to it (e.g. `7`)
8. A `;` the ends the definition

In this example, both `alfa` and `bravo`
have an `i32` type. Alfa is defined
explicity. Bravo is defined implicitly.

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa: i32 = 7;

  let bravo = 9;

  println!("Alfa {} - Bravo {}", alfa, bravo)

}
```

```rust, editable, CODE1

```
