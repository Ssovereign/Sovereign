class NotVerifiedAccount {
    constructor (notVerifiedUsername, notVerifiedPassword, notVerifiedConfirmedPassword) {
        this.notVerifiedUsername = notVerifiedUsername;
        this.notVerifiedPassword = notVerifiedPassword;
        this.notVerifiedConfirmedPassword = notVerifiedConfirmedPassword;
    }

    verifyPassword(firstPassword, secondPassword) {
        if(firstPassword === secondPassword) {
            return;
        } else {
            this.passwordNotMatching.innerHTML = 'testezigdgjd';
        }
    }
}

const passwordNotMatching = document.getElementById('test123');
const signUpButton = document.getElementById('signup-button');
const notVerifiedAccount1 = new NotVerifiedAccount('shedir', 'abcdefg', 'abcdeff');

/*
addAccount(username, password) {

}

redirection() {

} */

signUpButton.addEventListener('click', e => {
    //verifyUsername(username.innerText);
    notVerifiedAccount1.verifyPassword(this.notVerifiedPassword, this.notVerifiedConfirmedPassword);
   //addAccount();
    //redirection();
})