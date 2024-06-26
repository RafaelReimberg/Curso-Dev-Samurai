        // Elemento do HTML
        const inputEl = document.querySelector("#password");
        const upperCaseCheckEl = document.querySelector("#uppercase-check");
        const numberCheckEl = document.querySelector("#number-check");
        const symbolCheckEl = document.querySelector("#symbol-check");
        const securityIndcatorBarEl = document.querySelector("#security-indicator-bar");

        let passwordLength = 16;

        // função que irá gerar a senha com os caracteres
        function generatePassword() {
            let chars = "abcdefghjkmnpqrstuvwxyz";

            const upperCaseChars = "AVCDEFGHJKLMNPQRSTUVWXYZ";
            const numberChars = "123456789";
            const symbolChars = "?!@&*()[]";

            if (upperCaseCheckEl.checked) {
                chars += upperCaseChars;
            }

            if (numberCheckEl.checked) {
                chars += numberChars;
            }

            if (symbolCheckEl.checked) {
                chars += symbolChars;
            }


            let password = "";

            for (let i = 0; i < passwordLength; i++) {
                const randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1)
            };

            inputEl.value = password;
            // console.log(password);

            calculateQuality();
            calculateFontSize();
        };

        // função irá calcular a qualidade da senha.
        function calculateQuality() {
            // 20% -> critico => 100% algo safe
            // 64/64 = 1 => 100%

            // A*P1 + B*P2 + C*P3 + D*P4= 100
            // T*P1 + M*P2 + N*P3 + S*P4= 100
            // 25 + 25 + 25 + 25 = 100
            // T*0.25 + M*0.15 + N*0.25 + S*0.35 = 100

            const percent = Math.round(
                (passwordLength / 64) * 25 +
                (upperCaseCheckEl.checked ? 15 : 0) +
                (numberCheckEl.checked ? 25 : 0) +
                (symbolCheckEl.checked ? 35 : 0)
            );

            // console.log(percent);

            securityIndcatorBarEl.style.width = `${percent}%`;

            if (percent > 65) {
                // safe
                securityIndcatorBarEl.classList.remove("critical");
                securityIndcatorBarEl.classList.remove("warning");
                securityIndcatorBarEl.classList.add("safe");
            } else if (percent > 50) {
                // warning
                securityIndcatorBarEl.classList.remove("critical");
                securityIndcatorBarEl.classList.remove("safe");
                securityIndcatorBarEl.classList.add("warning");
            } else {
                //critical
                securityIndcatorBarEl.classList.remove("safe");
                securityIndcatorBarEl.classList.remove("warning");
                securityIndcatorBarEl.classList.add("critical");
            }

            if (percent >= 100) {
                securityIndcatorBarEl.classList.add("completed");
            } else {
                securityIndcatorBarEl.classList.remove("completed");
            }
        };

        // função para calcular a quantidade de caractere da senha
        function calculateFontSize() {
            if (passwordLength > 45) {
                inputEl.classList.remove("font-sm");
                inputEl.classList.remove("font-xs");
                inputEl.classList.add("font-xxs");
            } else if (passwordLength > 32) {
                inputEl.classList.remove("font-sm");
                inputEl.classList.add("font-xs");
                inputEl.classList.remove("font-xxs");
            } else if (passwordLength > 22) {
                inputEl.classList.add("font-sm");
                inputEl.classList.remove("font-xs");
                inputEl.classList.remove("font-xxs");
            } else {
                inputEl.classList.remove("font-sm");
                inputEl.classList.remove("font-xs");
                inputEl.classList.remove("font-xxs");
            }
        };

        // função para fazer a copia da senha usando o elemento input.
        function copy() {
            navigator.clipboard.writeText(inputEl.value);
        };

        const passwordLengthEl = document.querySelector("#password-length");
        passwordLengthEl.addEventListener("input", function () {
            passwordLength = passwordLengthEl.value;
            document.querySelector('#password-length-text').innerText = passwordLength;
            // console.log(passwordLength);
            generatePassword();
        });
        upperCaseCheckEl.addEventListener('click', generatePassword);
        numberCheckEl.addEventListener('click', generatePassword);
        symbolCheckEl.addEventListener('click', generatePassword);

        document.querySelector("#copy-1").addEventListener("click", copy);
        document.querySelector("#copy-2").addEventListener("click", copy);
        document.querySelector("#renew").addEventListener("click", generatePassword);

        generatePassword();
