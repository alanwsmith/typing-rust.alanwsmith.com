# Mutable Strings

Like the other Rust types, `String` variables are
immutalbe by default. They can be made mutable with
the same `mut` keyword as the other types as well.

We can do things like add more text to a `String`
if it's mutable. That can be done with the
method:

```rust,noplayground
.push_str("brown fox")
```

For example, this prints out

```txt
the quick brown fox
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("the quick ");
  alfa.push_str("brown fox");

  println!("{}", alfa);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
