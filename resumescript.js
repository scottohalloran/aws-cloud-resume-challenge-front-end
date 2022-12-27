fetch('https://awsresumeapi-tf.scottohallorancv.com/faigh')
  .then(response => response.text())
  .then(hitCount => document.getElementById('count').innerHTML= hitCount)
