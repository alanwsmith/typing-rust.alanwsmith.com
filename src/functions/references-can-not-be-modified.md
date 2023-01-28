# Function References Can't Be Modified By Default

TKTKTKT

This won't work by default. You have to do
the mutalbe version which is on the next
page.

#### SOURCE CODE

```rust
fn main() {

  let alfa = String::from("widget");

  attempt_change(&alfa);

}

fn attempt_change(value: &String) {
  value.push_str("update");
}
```

TODO: Show the error message.
