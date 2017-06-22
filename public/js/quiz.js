let userScore = 0;

$(document).ready (() => {
  $("#submit").click ((event) => {
    const q1A = $('input[name=Q1]:checked').val();
    const q2A = $('input[name=Q2]:checked').val();
    const q3A = $('input[name=Q3]:checked').val();
    const q4A = $('input[name=Q4]:checked').val();
    if (q1A === "A1") {
      userScore += 1;
    }
    if (q2A === "A2") {
      userScore += 1;
    }
    if (q3A === "A2") {
      userScore += 1;
    }
    if (q4A === "A3") {
      userScore += 1;
    }
    alert("You got a score of " + userScore/4*100 + "%");
    userScore = 0;

  });

});
