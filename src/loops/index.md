# Loops

Moving this back in the stack since while and
for loops are much more common

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = 1;

  loop {
    println!("alfa is {}", alfa);

    if alfa == 10 {
      break;
    }

    alfa += 1;
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
