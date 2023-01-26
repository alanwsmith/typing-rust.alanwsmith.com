# Tuple Indexes

Getting values out of a tuple is done
by using the varaible's name followed
by a dot and the "index" number for
the position of the value we're after.

For example:

```rust, noplayground
alfa.3
```

The index position represents a counter
that starts at the beginning of the tuple
and goes up one for each position. The
way Rust works, that first number starts
with zero instead of one. So, the
first position is `0`, the second position
is `1`, etc...

The way I've learned to think about this is
as an offset. We always start at the first
position. If the value we want is in the
first position no offset is required. That
means the index is `0`. The second number is
one away from the start. So, we access it
with an index of `2`.

If you haven't worked with this type of index
before it can take some time to get used to.
Even folks who've been programming for
years still screw it up sometimes.
