# Mutalbe Struct Instances

Struct instances are immutalbe by default.
They can be made mutable with the same
`mut` keyword we've used before. For example,
instead of

```rust, noplayground
let thing = Widget {
  alfa: String::from("apple")
}
```

We'd use this

```rust, noplayground
    ↓↓↓
let mut thing = Widget {
  alfa: String::from("apple")
}
```
