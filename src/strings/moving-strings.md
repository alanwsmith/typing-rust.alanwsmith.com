# Ownership And Moving

Every value in Rust has an "owner". For example, this
statement assigns a `String` with the value of `widget`
to the variable `alfa`. That makes `alfa` the owner
of the `String`.

```rust, noplayground
let alfa = String::from("widget");
```

If we create a new variable called `bravo` by binding
the value of `alfa` to it, the ownership of the `String`
passes from `alfa` to `bravo`. So this works and will output

```txt
alfa contains widget
bravo contains widget
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("widget");
  println!("alfa contains {alfa}");

  let bravo = alfa;
  println!("bravo contains {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
