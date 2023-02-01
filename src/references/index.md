# References

References offer a way to access a value
from multiple variables without changing
ownership. They're made by putting the
`&` symbol in front of the original
variable that holds the value.

For example this code moves ownership of the
`String` on the `bravo = alfa` line.

```rust,noplayground
  let alfa  = String::from("apple");
  let bravo = alfa;
```

If we tried to access `alfa` after doing
that we'd get the `borrow of moved value`
error.

Adding the `&` like this means the
value isn't moved to `bravo` and
that `alfa` retains ownership.

```rust,noplayground
  let alfa  = String::from("apple");
  let bravo = &alfa;
```

We can now use the value from
both variables.
