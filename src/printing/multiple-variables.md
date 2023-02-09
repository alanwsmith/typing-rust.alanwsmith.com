# Multiple Variables

Multiple variables can be printing in
the same `println!()` expression by
adding more `{}` curly brackets with 
the desired variable names in them. 

For example, here's a program that
creates three variables and prints
them:

```rust, noplayground
fn main() {
  let alfa = String::from("apple");
  let bravo = String::from("berry");
  let charlie = String::from("cherry");

  println!("{alfa} {bravo} {charlie}");
}
```

The output is:

```txt
apple berry cherry
```






