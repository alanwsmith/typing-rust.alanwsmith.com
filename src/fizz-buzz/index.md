# Fizz Buzz

Not sure I'm goint to put Fizz 
Buzz in here or not, but one 
idea might be to do different
versions of it showing different
approaches. 

### SOURCE CODE

```rust, EXAMPLE1
fn main() {
  for count in 1..=20 {
    if count % 3 == 0 {
      if count % 5 == 0 {
        println!("FizzBuzz");
      } else {
        println!("Fizz");
      }
    } else if count % 5 == 0 {
      println!("Buzz");
    } else {
      println!("{}", count);
    }
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```

