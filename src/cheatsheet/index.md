# Cheatsheet

TODO: Figure out where to put this in the
book.

---

Here's the high level:

#### Create An Immutable Variable

```rust, noplayground
let alfa = String::from("apple");
```

#### Create A Mutable Variable

```rust, noplayground
let mut alfa = String::from("apple");
```

#### Create A Struct

```rust, noplayground
struct Widget {
  alfa: String,
  bravo: String
}
```

#### Create A Function With No Arguments Or Return Value

```rust, noplayground
fn widget() {
  println!("this is widget");
}
```

#### Create A Function That Has One Argument Reference But No Return Value

```rust, noplayground
fn widget(thing: &String) {
  println!("widget to {}", thing);
}
```

#### Create A Function With Two Arguments But No Return Value

```rust, noplayground
fn widget(thing1: &String, thing2: &String) {
  println!(
    "widget got {} and {}",
    thing1,
    thing2
  );
}
```

#### Create A Function With A Return Value But No Arguments

```rust, noplayground
fn widget() -> String {
  let alfa = String::from("apple");
  alfa
}
```

#### Create A Function With A Return Value And An Argument Reference

```rust, noplayground
fn widget(thing: &String) -> String {
  println!("widget got {}", thing);
  let alfa = String::from("apple");
  alfa
}
```

#### Create A Function That Takes A Mutable Reference Argument

```rust, noplayground
fn widget(thing: &mut String) {
  thing.push_str("additional characters")
}

```

####

```rust, noplayground

```

####

```rust, noplayground

```

####

```rust, noplayground

```
