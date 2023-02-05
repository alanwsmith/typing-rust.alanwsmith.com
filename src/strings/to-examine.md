# To Examine

---

Truncate strings:

```rust
let mut alfa = String::from("apple");

alfa.truncate(2);

println!("alfa is {alfa}");
```

---

Pop - removes the last value and returns it.
(Seems to return it into a Some/None option)

```rust
let mut alfa = String::from("apple");

let bravo = alfa.pop();

match bravo {
  Some(value) => {
    println!("alfa {alfa} bravo {value}");
  }
  None => {
    println!("alfa {alfa} bravo is None");
  }
}
```

---

There's `.remove()` but it talks about a byte
position which seems like not the happy
path way to go. Same with `.remove_matches()`,
`.insert()`, and `.insert_matches()`

---

`.len()` - Returns the length of this String, in
bytes, not chars or graphemes. In other words,
it might not be what a human considers the length
of the string.

---

`.is_empty() - Returns true if this String has a
length of zero, and false otherwise.

---

`.clear()` - Truncates this String, removing all
contents.

---

`.chars()`

Returns an iterator over the chars of a string slice.

It’s important to remember that char represents a
Unicode Scalar Value, and might not match your
idea of what a ‘character’ is. Iteration over
grapheme clusters may be what you actually want.
This functionality is not provided by Rust’s standard
library, check crates.io instead.

---

`.split_whitespace()`

Splits a string slice by whitespace.

The iterator returned will return string slices that are sub-slices of the original string slice, separated by any amount of whitespace.

‘Whitespace’ is defined according to the terms of the Unicode Derived Core Property White_Space. If you only want to split on ASCII whitespace instead, use split_ascii_whitespace.

---

`.lines(&self)`

---

.contains

---

.find()

Returns the byte index of the first character of this string slice that matches the pattern.

Returns None if the pattern doesn’t match.

---

.rfind()

Returns the byte index for the first character of the last match of the pattern in this string slice.

Returns None if the pattern doesn’t match.

---

.split and .rsplit

An iterator over substrings of this string slice, separated by characters matched by a pattern.

The pattern can be a &str, char, a slice of chars, or a function or closure that determines if a character matches.

---

.split_inclusive

---

.split_terminator

---

.splitn and .rsplitn

---

.split_once and .rsplit_once

---

.matches

---

.matches_indices

---

.trim

Returns a string slice with leading and trailing whitespace removed.

---

.trim_matches

---

.strip_prefix

Returns a string slice with the prefix removed.

If the string starts with the pattern prefix, returns substring after the prefix, wrapped in Some. Unlike trim_start_matches, this method removes the prefix exactly once.

If the string does not start with prefix, returns None.

---

is_ascii(&self)

Checks if all characters in this string are within the ASCII range.

---

eq_ignore_ascii_case

---

make_ascii_uppercase

---

.replace()

Replaces all matches of a pattern with another string.

replace creates a new String, and copies the data from this
string slice into it. While doing so, it attempts to find
matches of a pattern. If it finds any, it replaces them with
the replacement string slice.

---

.to_lowercase()

---

.repeat()

Creates a new String by repeating a string n times.
