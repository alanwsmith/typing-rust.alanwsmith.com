# Passing Values In Functions

passing a variable into a function works
the same way as assigning it to a new variable.

this throws an error:

```rust
fn main() {

  let alfa = String::from("apple");

  widget(alfa);

  println!("alfa {}", alfa);

}

fn widget(incoming: String) {
  println!("Got {}", incoming)
}
```

TKTKTKT - Talk about how integers can work

this is okay:

```rust
fn main() {

  let alfa = 7;

  widget(alfa);

  println!("alfa {}", alfa);

}

fn widget(incoming: i32) {
  println!("Got {}", incoming)
}
```

---

You can pass a string and get one back
if you want to do that.

But check out references next. Maybe don't
get into passing back right now and just
focus on references.
