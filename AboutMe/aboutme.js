var i=0;
var quotes = ["\"Cowards die many times before their deaths; The valiant never taste of death but once.\"",
"\"What we wish, we readily believe, and what we ourselves think, we imagine others think also.\"",
"\"Experience is the teacher of all things.\"",
"\"If you can fill the unforgiving minute, \n with sixty seconds’ worth of distance run, \n yours is the Earth and everything that’s in it, \n and—which is more—you’ll be a Man, my son!\"",
"\"In the end, it's not the years in your life that count. It's the life in your years.\"",
"\"Brevity is the soul of wit.\"",
"\" All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost.\""];
var index = Math.floor(Math.random() * quotes.length);

var j=0;
var mobquotes = ["\"Cowards die many times before their deaths; The valiant never taste of death but once.\"",
"\"What we wish, we readily believe, and what we ourselves think, we imagine others think also.\"",
"\"Experience is the teacher of all things.\"",
"\"If you can fill the unforgiving minute, \n with sixty seconds’ worth of distance run, \n yours is the Earth and everything that’s in it, \n and—which is more—you’ll be a Man, my son!\"",
"\"In the end, it's not the years in your life that count. It's the life in your years.\"",
"\"Brevity is the soul of wit.\"",
"\" All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost.\""];
var mobindex = Math.floor(Math.random() * quotes.length);

function typeWriter() {
  txt = quotes[index]
  if (i < txt.length) {
    document.getElementById("quoteblock").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

function mobTypeWriter() {
  txt = mobquotes[mobindex]
  if (j < txt.length) {
    document.getElementById("mobquoteblock").innerHTML += txt.charAt(j);
    j++;
    setTimeout(mobTypeWriter, 50);
  }
}

typeWriter();

mobTypeWriter();