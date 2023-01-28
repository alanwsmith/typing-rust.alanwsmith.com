# Function References

You can pass values by reference so the
functions don't take ownership.

TKTKTK The act of using a reference is
called borrowing.

#### SOURCE CODE

```rust, editable, EXAMPLE1
fn main() {

  let alfa = String::from("apple");

  widget(&alfa);

  println!("alfa {}", alfa)

}

fn widget(incoming: &String) {
  println!("incoming: {}", incoming)
}


```

### CODE RUNNER

```rust, editable, CODE1

```
