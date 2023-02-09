# Causing panic!() Errors

`panic!()` errors can be caused by tring to do 
something the program can't handle like the
way we tried to access an index larger than 
the available values in a `Vec`. We can 
also trigger them directly by using
the `panic!()` expression.

For example, this code will compile and run:

```rust
fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
}
```

Adding a panic line causes a crash:

```rust
fn main() {
  let _alfa = String::from("apple");
  panic!("break here");
}
```







