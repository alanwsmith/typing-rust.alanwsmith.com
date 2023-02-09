# .push_str()

One way to change a mutable `String` is with
`.push_str()`. It adds content
onto the end of an existing string. For example,
this adds "pie" to the end of the "apple"
`String`

```rust,noplayground
let mut alfa = String::from("apple");
alfa.push_str("pie");
```
