# Multiple Variables - Alternate Syntax

The alternate syntax uses multiple empty `{}`
curly bracket placeholders and the variables
outside the quotes as before. The first variable
goes into the first `{}`. The second variable
goes into the second `{}` and so on. 

It looks like this:

```rust
fn main() {
  let alfa = String::from("apple");
  let bravo = String::from("berry");
  let charlie = String::from("cherry");

  println!("{} {} {}", alfa, bravo, charlie);
}
```

which produces the same output:

```txt
apple berry cherry
```

