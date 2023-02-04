# Strings

Create a string with text you already
know:

```rust,noplayground
let alfa = String::from("apple");
```

---

Create an empty string. Probably want
to make it mutable so you can add
stuff to it.

```rust,noplayground
let mut alfa = String::new();
```

Add text

```rust,noplayground
alfa.push_str("pie");
```

---

Adding a single character with `.push()`

```rust,noplayground
alfa.push("s");
```

---

Concationation -

Use `format!()` which is like `println!()`
but it makes a new string instead of printing
to output.

```rust
let alfa = String::from("apple");
let bravo = String::from("berry");

let charlie = format!("{}{}", alfa, bravo);

println!("{alfa} {bravo} {charlie}");
```

at some point put in the details about using
`+` and how ownership works. This is for
a later chapter. For now just stick with
`format!()`. Note that ownership of
`alfa` gets moved to `charlie` so it
can't be used in the `println!()`

```rust
let alfa = String::from("apple");
let bravo = String::from("berry");

let charlie = alfa + &bravo;

println!("{bravo} {charlie}");
```

---

Iterating over a string with `.chars()`

```rust
let alfa = String::from("apple");

for character in alfa.chars() {
  println!("character is {character}");
}

println!("alfa is {alfa}");
```

TODO: Go over why `&alfa[0..4]` is tricky
because with UTF-8 that's 2 characters
in Russian.

---

Strings are always valid UTF-8
