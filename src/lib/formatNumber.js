export const formatNumber = (number, decimals = 2, chunk = false, percentage = false) => {
    if (
        number === "" ||
        number === "undefined" ||
        (number && Number.isNaN(number))
    ) {
        return null;
    }

    // Convert the input number to a string with the desired precision
    number = Number(number).toFixed(decimals);

    if (percentage) {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%";
    }

    if (chunk) {
        let suffix = "";
        if (number >= 1000000000000) {
            number /= 1000000000000;
            suffix = "T";
        } else if (number >= 1000000000) {
            number /= 1000000000;
            suffix = "B";
        } else if (number >= 1000000) {
            number /= 1000000;
            suffix = "M";
        } else if (number >= 1000) {
            number /= 1000;
            suffix = "K";
        }

        return parseFloat(number).toFixed(decimals) + suffix;
    }

    if (number.includes(".")) {
        const [wholeNumber, decimalPart] = number.split(".");
        return (
            wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "." +
            decimalPart.padEnd(decimals, "0")
        );
    }

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
