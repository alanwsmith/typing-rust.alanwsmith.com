# Functions That Take Arguments And Have Return Values

```txt
call widget next
widget got apple
charlie is berry
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("call widget next");

  let charlie = widget(alfa);
  println!("charlie is {charlie}");
}

fn widget(input: String) -> String {
  println!("widget got {input}");

  let bravo = String::from("berry");
  bravo
}
```

### CODE RUNNER

```rust, editable, CODE1

```
