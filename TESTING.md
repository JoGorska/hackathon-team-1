# Testing

## Validator testing

### HTML Validation

- No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.

[Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2F)

[Quiz page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2Fquiz.html)

[Contact](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2Fcontact.html)


## CSS

- No errors were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator: 

[Home page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[Quiz page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2Fquiz.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[Contact](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjogorska.github.io%2Fhackathon-team-1%2Fcontact.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- The CSS validator shows the multiple warning regardless the use of webkit and clip property. However, everything works perfectly well without any issues.


## Javascript

tested with JSHint

- No errors in form-validation.js - report [here](documentation/form-validation.pdf)

- no errors in nav.js - report [here](documentation/nav.pdf)
- report for quiz can be found [here](documentation/quiz.pdf) it shows that there is one unused variable, but it could not be avoided as data was fetched from external file as async function.