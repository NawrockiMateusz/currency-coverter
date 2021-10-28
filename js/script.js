{
    const selectCurrency = (currency) => {
        switch (currency) {
            case "pln":
                return 1;
            case "eur":
                return 4.6;
            case "usd":
                return 3.95;
            case "gbp":
                return 5.44;
        }
    }

    const calculateResult = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyOnElement = document.querySelector(".js-currencyOn");

        return (amountElement.value * selectCurrency(currencyFromElement.value)) / selectCurrency(currencyOnElement.value);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const resultElement = document.querySelector(".js-result");

            const result = calculateResult();
            resultElement.innerText = `Po przewalutowaniu otrzymasz: ${result.toFixed(2)}`
        });
    }

    init();
}