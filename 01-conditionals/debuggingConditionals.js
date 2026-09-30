/*fix the issue!

The customer must be 18 or older AND subscribed.*/

function isEligible(age, isSubscribed) {
  if (age > 18 || isSubscribed === true) {
    return true;
  }

  return false;
}
