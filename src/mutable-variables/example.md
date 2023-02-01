# Mutable Variables Example

We can more characters to a `String`
value with `.push_str()` if the
variable is mutable. Here's an example
that outputs:

```txt
alfa is apple
alfa is apple-pie
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("apple");
  println!("alfa is {alfa}");

  alfa.push_str("-pie");
  println!("alfa is {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
