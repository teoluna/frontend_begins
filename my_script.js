function calculate() {

  var mainbox = {
    boxone: {
      a: document.getElementById("pole1")
    },
    boxtwo: {
      b: document.getElementById("pole2")
    },
  };

  var a = mainbox.boxone.a.value;
  var b = mainbox.boxtwo.b.value;

  console.log(a);
  console.log(b);
  console.log(mainbox.boxone.a.value + mainbox.boxtwo.b.value);

  var fora = parseInt(a);
  var forb = parseInt(b);

  var result = fora + forb;

  alert(result);
}
