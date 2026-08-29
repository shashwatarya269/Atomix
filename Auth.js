// ⚛️ ATOMIX MULTI-ACCOUNT LOGIN SYSTEM


// ========================================
// SIGNUP
// ========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    
    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document
            .getElementById("signupEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("signupPassword")
            .value;

        const confirmPassword = document
            .getElementById("confirmPassword")
            .value;

        const message = document.getElementById("message");


        // Password length
        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters!";

            return;
        }


        // Password confirmation
        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match!";

            return;
        }


        // Get existing accounts
        let accounts =
            JSON.parse(localStorage.getItem("atomixAccounts")) || [];


        // Check duplicate email
        const accountExists = accounts.some(
            user => user.email === email
        );


        if (accountExists) {

            message.textContent =
                "An account with this email already exists!";

            return;
        }


        // Create new account
        const newUser = {
            email: email,
            password: password
        };


        // Add account to the array
        accounts.push(newUser);


        // Save all accounts
        localStorage.setItem(
            "atomixAccounts",
            JSON.stringify(accounts)
        );


        message.textContent =
            "Account created successfully! 🚀";


        // Go to login
        setTimeout(function () {

            window.location.href = "login.html";

        }, 1200);

    });
}



// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");


        // Get all accounts
        const accounts =
            JSON.parse(localStorage.getItem("atomixAccounts")) || [];


        // Find matching account
        const user = accounts.find(function (account) {

            return (
                account.email === email &&
                account.password === password
            );

        });


        // No matching account
        if (!user) {

            message.textContent =
                "Incorrect email or password!";

            return;
        }


        // Login successful
        localStorage.setItem(
            "atomixLoggedIn",
            "true"
        );

        localStorage.setItem(
            "atomixCurrentUser",
            user.email
        );


        message.textContent =
            "Login successful! 🚀";


        // Return to Atomix
        setTimeout(function () {

            window.location.href = "./";
            
        }, 1000);

    });
}
