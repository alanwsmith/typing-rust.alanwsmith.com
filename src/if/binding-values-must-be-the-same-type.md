# Must Be The Same Type

TODO: Put in note earlier about calling the
branches `arms`

Using an `if/else` expression to determine a
variable to bind directly to a variable requires
both the `if` arm and the `else` arm to provide
the same type. So you can have two `i32` values
like this:

```rust, noplayground
let alfa = true;
let bravo = if alfa { 1 } else { 0 };
```

or two `bool` values like this:

```rust, noplayground
let alfa = true;
let bravo = if alfa { true } else { false };
```

but you can't mix them like this which will
give an error:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = true;
  let bravo = if true { 1 } else { false };

  println!("bravo is {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
