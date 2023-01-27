# Nested Loops

Nested loops (one inside of another one) are
where labels become useful.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 1;

  'outter_loop: loop {
    let mut bravo = 1;

    'inner_loop: loop {

      if bravo == 4 {
        break 'inner_loop;
      }

      if alfa == 5 {
        break 'outter_loop;
      }

      println!("alfa {} bravo {}", alfa, bravo);

      bravo += 1;

    }

    alfa += 1;
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
