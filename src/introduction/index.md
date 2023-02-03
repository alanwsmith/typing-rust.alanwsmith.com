# Welcome to Typing Rust

Hi. I'm Alan and I'm building this site to
learn Rust.

I've setup two interactive features of the site.
An example of the first one is below. It's
a "Step By Step" explination of code. The
steps add code along with an explanation
of what's changing.

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  println!("Hello, World");
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`],
  text: `<p>That code is a full program. It will compile, run, and output &quot;Hello, World&quot;</p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_r`],
  text: `<p>Well start all our code samples with a <code>main</code> function like the one shown here.</p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_c`],
  text: `<p>We'll use the <code>println!()</code> expression to output text from our programs. Here we add a line to print &quot;Hello, World&quot;.</p>`
},
]
</script>
