# Scratchpad

NOTE: These are in reverse order of how they were
created so I don't have to keep scrolling down

TODO: Come up with the list of things you can do
for references:

immutable - immutable
mutable - immutable
mutable - mutable

and that you can't do

immutable - mutable

## Immutable -> Immutable

```rust
fn main() {
  let alfa = String::from("apple");
  widget(&alfa);
  println!("alfa is {alfa}")
}

fn widget(value: &String) {
  println!("widget got {value}")
}
```

## Mutable -> Mutable

```rust
fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(value: &mut String) {
  value.push_str("-pie")
}
```

## Mutable -> Immutable

```rust
fn main() {
  let mut alfa = String::from("apple");
  widget(&alfa);
  println!("alfa is {alfa}")
}

fn widget(value: &String) {
  println!("widget got {value}")
}
```

## Immutable -> Mutable (will crash)

```rust
fn main() {
  let alfa = String::from("apple");
  widget(&mut alfa);
}

fn widget(value: &mut String) {
  println!("widget got {value}")
}
```

---

## This crashes as expected because it's not a reference

```rust
fn main() {
  let alfa = String::from("apple");
  widget(alfa);
  println!("alfa is {alfa}")
}

fn widget(value: String) {
  println!("widget got {value}")
}
```


---

Other situaltions:

combinging mutalbe and immutable 
references. 





