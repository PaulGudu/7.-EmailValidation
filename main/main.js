module.exports = function main(email, suffixes) {
  // Write your code here
  test = email.split('@');
  if (test[1]==suffixes[0]) {
  	return true;
  }else {
  	return false;
  }
};