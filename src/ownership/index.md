# Ownership

_NOTE: This is my understanding of how ownership
based on The Rust Book. I need to have it vetted
by someone who knows more about Rust._

---

A fundamental feature of Rust is that
every value has an "owner". When we bind
a value to a variable like this:

```rust,noplayground
let alfa = String::from("apple");
```

that variable becomes the owner of the value.
In the case that means `alfa` now owns the
`String` of "apple". You can think of an "owner"
like a wrapper around the value.

As long as a varible is owner of a value it
can use it. For example, if we call this
after setting `alfa` like we did above:

```rust,noplayground
println!("alfa is {alfa}");
```

it will output:

```txt
alfa is apple
```

becuase `alfa` owns the `String` made
from "apple".
