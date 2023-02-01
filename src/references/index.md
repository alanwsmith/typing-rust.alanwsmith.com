# References

References offer a way to access a value
from multiple variables without changing
ownership. They're made by putting the
`&` symbol in front of the original
variable that holds the value.

For example, this:

```rust,noplayground
  let alfa  = String::from("apple");
  let bravo = alfa;
```

Becomes this:

```rust,noplayground
  let alfa  = String::from("apple");
  let bravo = &alfa;
```
