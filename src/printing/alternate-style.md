# Alternate Style

There will be times when we need to use
an alternate syntax for printing. Instead of this:

```rust, noplayground
println!("alfa is {alfa}");
```

the alternate style uses an empty set of `{}`
curly brackets inside the quotes with 
the variable name outside them and separated
by a comma like this:

```rust, noplayground
println!("alfa is {}", alfa);
```

A full program looks like this:

```rust,noplayground
fn main() {
  let alfa = String::from("apple");
  println!("alfa is {}", alfa);
}
```

which outputs:

```txt
alfa is apple
```


---

#### TODO

- add note about why that change is necessary



