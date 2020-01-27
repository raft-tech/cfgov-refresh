//  Adding additional transactions for upcoming recurrences
//  If user selects recurring, then application needs to check
//  from the startDate for the rest of the 90 day window for the other dates:
//  example:  a paycheck begins on Friday, January 17, 2020
//  the beginning balance start date is 01/15/2020
//  the app needs to calculate the

// problems with 30 day calendar
//  *  some months are 31 days.  With a 30 day calendar
//  the user will not even cover one month
//  *  with existing test data, the user has an ok cash flow
//  during the first month and half of the second.  They do not
//  see any problems until the end of the second month.
//  * consider 90 days:  issues, that would end the period in the middle of the month
//  * consider 3 full months plus the additional days added from the starter month
