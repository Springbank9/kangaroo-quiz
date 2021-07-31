function scoreQuiz()
{
    var correct = 0;
    if (window.document.the_form.question1.checked == true) {
        correct = correct + 1;
    } else {
        window.document.the_form.question1.checked = true;
    }
    if (window.document.the_form.question2.checked == true)
    {
        correct = correct + 1;
    } else {
        window.document.the_form.question2.checked = true;
    }
    if (window.document.the_form.question3.checked == false) {
        correct = correct + 1;
    } else {
        window.document.the_form.question3.checked = false;
    }
    alert("You got " + correct + "answers right! The correct answers are now shown.");
}