fetch('https://7mbgnyp4ge.execute-api.us-east-1.amazonaws.com/prod/faigh')
  .then(response => response.text())
  .then(hitCount => document.getElementById('count').innerHTML= hitCount)
