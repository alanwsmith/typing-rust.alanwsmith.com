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
number" (which is the same thing as a number that
has a decimal point).

Types are assigned to variables when they are created
by adding a colon after the name followed by the type.
For example:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa: f32 = 3.4;
  println!("Value {alfa}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```

We can ask "What kind of variable is `alfa`?" This is the
same thing as asking "What type of variable is `alfa`?"
Speaking generically, `7` is a number which makes `alfa`
a number. Rust gets a little more specific than that though.

Rust is what's known as a "statically typed language".
All we need to know about for now is that each
value we use in our programs must have "a type" assigned
to it.

Types themselves are things like "numbers with decimal
points", "numbers without decimal points", "single
characters", and "strings of characters".

Except we don't use those names. For example, the "type"
for a variable whose value is "a number with a
decimal point" is `f32`. There's a few different ways
to phrse it. If we use they name `alfa` for a variable

-

The phrasing can take some
getting used to.

A standard way to say that is
"the variable of type f32".

thea variable has a type of "a number with a decimal
points", we way it has a type

a varaible
whose value is a number with a decimal point

Instead of "a number
with a decimal point", a va

A varaible whose value
is a number with a decimal point is an `f32`.

A few of the types that Rust provides cover numbers with
decimal points, numbers without decimal points, single
characters and strings of characters.

Types are assigned to variables by adding a colon
followed by the id of the type to make the variable.

1. The `let` keyword
2. An optional `mut` keyword
3. The name to use (e.g. `alfa`)
4. The `=` sign
5. The value to bind to it (e.g. `7`)
