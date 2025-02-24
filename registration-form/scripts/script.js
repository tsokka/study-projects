window.onload = function () {
    let inputFullName = document.getElementById('full-name');
    inputFullName.onkeydown = function (event) {
        if (event.key >= '0' && event.key <= '9') {
            event.preventDefault();
        }
    };

    let inputUserName = document.getElementById('username');
    inputUserName.onkeydown = function (event) {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    };

    let checkbox = document.getElementById('checkbox');
    checkbox.onchange = function () {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    };

    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputRepeatPassword = document.getElementById('repeat-password');
    let form = document.getElementById('form');


    form.onsubmit = function (event) {
        event.preventDefault();
        if (!inputFullName.value) {
            alert('Заполните поле Full Name');
            return;
        }
        if (!inputUserName.value) {
            alert('Заполните поле Your username');
            return;
        }
        if (!inputEmail.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if (!inputPassword.value) {
            alert('Заполните поле Password');
            return;
        }
        if (!inputRepeatPassword.value) {
            alert('Заполните поле Repeat Password');
            return;
        }
        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Ошибка: Пароли не совпадают!');
            return;
        }
        if (!checkbox.checked) {
            alert('Ошибка: Вы должны согласиться с условиями!');
            return;
        }
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('btn-ok').focus();
    };

    inputPassword.onchange = function () {
        if (inputPassword.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов')
        }
    };

    // let inputs = form.querySelectorAll('.form-input');
    document.getElementById('btn-ok').onclick = function (event) {
        document.getElementById('popup').style.display = 'none';
        // inputs.forEach(input => {
        //     input.value = "";
        // })
        form.reset();
        checkbox.checked = false;
        switchToLogInPage();
    };

    let buttonOk = document.getElementById('popup');
    buttonOk.onkeydown = function (event) {
        if (event.key === 'Enter') {
            document.getElementById('popup').style.display = 'none';
        }
    };

    function switchToLogInPage() {
        document.getElementsByTagName('title')[0].innerText = 'HomeWorks Log In';
        document.getElementById('registration-title').innerText = 'Log in to the system';
        document.getElementById('full-name-group').remove();
        document.getElementById('email-group').remove();
        document.getElementById('repeat-password-group').remove();
        document.getElementById('checkbox-block').remove();
        document.getElementById('account').remove();
        let button = document.getElementsByClassName('btn')[0];
        form.onsubmit = null;
        button.innerText = 'Sign In';
        button.onclick = function () {
            if (!inputUserName.value) {
                alert('Заполните поле Your username');
                return;
            }
            if (!inputPassword.value) {
                alert('Заполните поле Password');
            } else {
                alert('Добро пожаловать, ' + inputUserName.value + '!')
            }
        }
    }

    document.getElementById('account').onclick = function (event) {
        switchToLogInPage();
    };

}