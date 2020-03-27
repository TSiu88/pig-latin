# _Pig Latin Translator_

#### _Specification and String Manipulation Exercise, 01.23.2020_

#### By _**Tiffany Siu and Jason McGrady**_

## Description

_This program practiced BDD by creating specifications for the program first before coding.  It will convert a sentence inputted into Pig Latin using the rules for Pig Latin.

## Setup/Installation Requirements

### Requirements to Run

* _Web Browser_

### Instructions

*This page may be viewed by:*

1. Clone the [repository](https://github.com/TSiu88/pig-latin.git) from my [GitHub page](https://github.com/TSiu88)
2. Open the **index.html** file in any web browser.

## Other Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _JQuery 3.4.1_
* _Bootstrap 4.4.1_
* _Markdown_

## Specifications

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Example Input: 3
  * Example Output: 3
* The program adds "way" to single-letter words beginning with a vowel.
  * Example Input: i
  * Example Output: iway
* The program adds "way" to multi-letter words beginning with a vowel.
  * Example Input: open
  * Example Output: openway
* The program takes the single consonant from the beginning of the word and adds to the end with "ay"
  * Example Input: latin
  * Example Output: atinlay
* The program takes all consecutive consonants from the beginning of the word and adds them to the end with "ay"
  * Example Input: translator
  * Example Output: anslatortray
* The program takes beginning consonants and if it contains "q", also take the "u" after it and add them to the end with "ay"
  * Example Input: squeal
  * Example Output: ealsquay
* The program takes words beginning with "y" and adds to the end with "ay"
  * Example Input: yellow
  * Example Output: ellowyay
* The program takes multiple-word sentences and translates using the previous rules correctly
  * Example Input: hi how are you?
  * Example Output: ihay owhay areway ouyay?

## Known Bugs

_There are currently no known bugs in this program_

## Support and contact details

_If there are any question or concerns please contact me at my [email](mailto:tsiu88@gmail.com). Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu, Jason McGrady_**
