export default function getPasswordMessage(password){
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCase = /(?=.*[!@#$%^&*])/g
    var message = '';
    var mixes = []
    var cases = []
    if (password.length < 10) {
        message = 'Must be at least 10 characters long! '
    }

    if (!password.match(lowerCase)) {
        cases.push('lowercase')
    }
    if (!password.match(upperCase)) {
        cases.push('uppercase')
    }
    if (cases.length == 1) {
        message += "Please include at least one " + cases[0] + " letter"
    } else if (cases.length == 2) {
        message += "Please include at least one " + cases[0] + ", " + cases[1] + " letter"
    }

    if (!password.match(numbers)) {
        mixes.push('number')
    }
    if (!password.match(specialCase)) {
        mixes.push('symbol')
    }
    if (mixes.length > 0) {
        if (cases.length == 0) {
            message += "Please include at least one " + mixes.join(", ") + "."
        } else {
            message += ", " + mixes.join(", ") + "."
        }
    } else {
        if (cases.length !== 0) {
            message += '.'
        }
    }
    var replacement = ' and'
    message = message.replace(/,([^,]*)$/, replacement + '$1')

    return message
}