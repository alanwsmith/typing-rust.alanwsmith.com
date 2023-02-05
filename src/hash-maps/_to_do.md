# Hash Maps

They aren't in the prelude. They must
be added with `use std::collections::HashMap;`
to make them available.

From the book

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

let team_name = String::from("Blue");
let score = scores.get(&team_name).copied().unwrap_or(0);

println!("score {score}")
```

NOTE: Tried to setup the value with a string
like this but it got an error:

```rust,noplayground
scores.insert(String::from("Blue"), 10);
```

I think that's because `.copied()` is for `i32`.
Overall, need to walk through that style syntax.

---

`String` keys and values get moved into the
hashmap.

It's possible to use `references` with
`lifetimes`

---

Overwriting a value (from the book)

```rust
use std::collections::HashMap;

let mut widget = HashMap::new();

widget.insert(String::from("alfa"), 3);
widget.insert(String::from("alfa"), 7);

println!("{:?}", widget)
```

---

Only add a values if it doesn't alrady
exist.

```rust
use std::collections::HashMap;

let mut widget = HashMap::new();

widget.entry(String::from("alfa")).or_insert(3);
widget.entry(String::from("alfa")).or_insert(7);

println!("{:?}", widget)
```

---

This is from the book. Need to better
understand it (and maybe come up with
a refined example)

```rust
use std::collections::HashMap;

let text = "hello world wonderful world";

let mut map = HashMap::new();

for word in text.split_whitespace() {
  let count = map.entry(word).or_insert(0);
  *count += 1;
}

println!("{:?}", map);
```
