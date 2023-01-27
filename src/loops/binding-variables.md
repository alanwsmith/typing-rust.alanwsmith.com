# Binding Values

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 1;

  let bravo = loop {
    println!("alfa is {}", alfa);

    if alfa == 10 {
      break alfa;
    }

    alfa += 1;
  };

  println!("bravo is {}", bravo);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
