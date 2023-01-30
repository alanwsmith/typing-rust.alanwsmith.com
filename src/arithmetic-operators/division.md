# Division Operator

When used with `i32` type values the `/`
operator for division works differently
than you might expect. For example,
dividing `9` by `2` on a calculator
yields `4.5`. Since `i32` values don't
have decimal points we only get the
portion on the left side.

Running this will output:

```txt
alfa is 4
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 9 / 2;
  println!("alfa is {}", alfa);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
