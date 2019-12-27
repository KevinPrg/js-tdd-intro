const capitalizeFirstLetters = input => {
  if (input === "") {
    return "";
  }
  if (input.length === 1) {
    return input.charAt(0).toUpperCase();
  }
  if (input.length > 1) {
    return input
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  }
};

module.exports = capitalizeFirstLetters;
