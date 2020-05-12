$('button').on('click', function () {

    let pwLength = parseInt(prompt('How long do you want your password to be?'));
    console.log(pwLength);


    let userPw = [];

    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var specialChar = ['/', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+'];

    if (!pwLength) {
        alert('Please select a number between 8 and 128');
        pwLength = prompt('How long do you want your password to be?');
    }
    else if (pwLength > 128 || pwLength < 8) {
        alert('Sorry password must be between 8 & 128 characters');
        pwLength = prompt('How long do you want your password to be?');
    } else {

        let uppersConfirm = confirm('Do you want your password to contain uppercase letters?');
        let lowersConfirm = confirm('Do you want your password to contain lowercase letters?');
        let numbersConfirm = confirm('Do you want your password to contain numbers?');
        let specialCharConfirm = confirm('Do you want your password to contain special characters?');


        if (uppersConfirm) {
            userPw = userPw.concat(upperCase);
        }
         if (lowersConfirm) {
            userPw = userPw.concat(lowerCase);
        }
         if (numbersConfirm) {
            userPw = userPw.concat(nums)
        }
         if (specialCharConfirm) {
            userPw = userPw.concat(specialChar)
        };


        console.log(userPw);

        for (var i = 0; i < pwLength; i++) {

            let randompW = userPw[Math.floor(Math.random() * userPw.length)]
            $('.pwDisplay').append(randompW);

        }

    }

});
