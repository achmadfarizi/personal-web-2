
let myEmail = 'achmadfarizi99@gmail.com'

function myFunction(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let pnumber = document.getElementById('phone_number').value
    let subject = document.getElementById('subject').value
    let messasge = document.getElementById('message').value

    if(name == ''){
        alert('nama harus di isi')
    }

    if(email == ''){
        alert('email harus di isi')
    }

    if(pnumber == ''){
        alert('phone number harus di isi')
    }

    if(subject == ''){
        alert('subject harus di isi')
    }

    if(messasge == ''){
        alert('message harus di isi')
    }

    let a = document.createElement('a')
    a.href = `mailto:${myEmail}?subject=${subject} &body=Hello nama saya ${name}, ${subject}, ${messasge}, jika anda berkenan hubungi saya melalui no: ${pnumber} / email: ${email}`
    a.click()
}