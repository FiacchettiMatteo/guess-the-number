let outName = document.getElementById('box-name')
let outEmail = document.getElementById('box-email')
let outFeedback = document.getElementById('box-feedback')

let urlParam = new URLSearchParams(window.location.search)

outName.innerHTML = urlParam.get('fname')
outEmail.innerHTML = urlParam.get('email').toLowerCase()
outFeedback.innerHTML = urlParam.get('feedback')
