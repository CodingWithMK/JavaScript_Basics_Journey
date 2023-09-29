// If hour is between 6am and 12 pm: Good morning.
// If it is between 12pm and 6pm: Good afternoon.
// Otherwise, Good evening.


let hour = 13;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');

else if (hour >= 12 && hour < 18) 
    console.log ('Good Afternoon');

else
    console.log("Good Evening");

// If you deal with only one statement then get rid of the curly braces to keep the code more clear!
