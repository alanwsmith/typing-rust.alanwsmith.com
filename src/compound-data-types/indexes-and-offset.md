# Indexes And Offsets

The name for the way these index numbers
work is "zero based index". The way I've
learned to think about them is as a
position offset.

We always start with the first item position.
If we want the value of that item it doesn't
require moving. That translates, to zero offset
from which means index of `0`.

The second number is one away from the start.
So, we access it with an index of `1`.

To get to the third number requires moving
two steps from the start. That gives us
and index of `2`

Regardless of the way you think about it,
working with zero based indexes can take
some time to get used to. Even folks
who've been programming for years screw it
up sometimes.
