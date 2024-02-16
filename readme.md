# Roman Numeral Converter

This project is a simple web application that converts decimal numbers to Roman numerals.

## Files

- `script.js`: This is the main JavaScript file that contains the logic for the conversion.

## How it works

The application uses a JavaScript object to map Roman numerals to their corresponding decimal values. The `convertToRoman` function takes a decimal number as input and converts it to a Roman numeral.

The function checks if the input is a valid number and within the range 1-3999. If the input is valid, it iterates over the Roman numeral map, subtracting the decimal value of the largest possible Roman numeral from the input number until the number is 0. The corresponding Roman numeral is added to the result string each time its value is subtracted from the number.

The result is then displayed on the webpage.

## Usage

To use the application, enter a decimal number in the input field and click the 'Convert' button. The corresponding Roman numeral will be displayed.

## Limitations

The application can only convert numbers in the range 1-3999

## Future Improvements
- Improve the user interface.