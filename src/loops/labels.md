# Labels

You can add labels like this (not useful
yet, but we'll see where they become
helpful on the next page)

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 1;

  'outter_loop: loop {

    println!("alfa is {}", alfa);

    if alfa >= 10 {
      break 'outter_loop;
    }

    alfa += 1;
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
