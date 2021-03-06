"use strict";

var pointCheck = function pointCheck(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') return false;
  if (start > end) return false;
  return true;
};

var lengthCheck = function lengthCheck(length) {
  if (length < 0) return false;
  return true;
};

var stringCheck = function stringCheck(start, end) {
  if (typeof start !== 'number' && typeof end !== 'number') return false;
  if (start >= end) return false;
  if (start <= 0) return false;
  return true;
};

// Numbers
// If args are not supplied, 0 and 100 are used
exports.randomInt = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  var result = pointCheck(min, max);
  if (result) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
};

// If args are not supplied, 0 and 1 are used
exports.randomFloat = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100.0 : arguments[1];

  var result = pointCheck(min, max);
  if (result) {
    return Math.random() * (max - min) + min;
  }
  return false;
};

// Strings
// If args are not supplied, 1 and 16 are used
exports.randomString = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

  var result = pointCheck(min, max);
  if (result) {
    var resultString = '';
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < exports.randomInt(min, max); i++) {
      resultString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return resultString;
  }
  return false;
};

exports.randomCharacter = function () {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return alphabet[exports.randomInt(0, alphabet.length - 1)];
};

// Colors
exports.randomRgbColor = function () {
  return { 'r': exports.randomInt(0, 255),
    'g': exports.randomInt(0, 255),
    'b': exports.randomInt(0, 255) };
};

// Month
// if start and end are not supplied, 0 and 12 will be used
exports.randomMonth = function () {
  var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var end = arguments.length <= 1 || arguments[1] === undefined ? 11 : arguments[1];

  if (start > end || end > 12 || start < 0 || end < 0) {
    return 'Start and end should be ints from 0 to 12';
  }
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[exports.randomInt(start, end)];
};

// Country
exports.randomCountry = function () {
  var allCountries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo,  the Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea,  Democratic People\'s Republic of', 'Korea,  Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao,  People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia,  The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia,  Federated States of', 'Moldova,  Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan,  Province of China', 'Tajikistan', 'Tanzania,  United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];
  return allCountries[exports.randomInt(0, allCountries.length - 1)];
};

// Names
// if gender is not supplied a random one will be chosen
exports.randomName = function (gender) {
  var name = undefined;
  var maleNames = ['Russell', 'Chase', 'Rafael', 'Mason', 'Francisco', 'Abraham', 'Brandon', 'Ronan', 'Andre', 'Axel', 'Ruben', 'Graham', 'Edgar', 'Nicolas', 'Zachary', 'Major', 'Prince', 'Bryce', 'Lance', 'Chance', 'Remington', 'Emerson', 'Jaime', 'Phoenix', 'Alejandro', 'Jaiden', 'Calvin', 'Greyson', 'Nehemiah', 'Anderson', 'Brayan', 'Cullen', 'Asher', 'Brycen', 'Omar', 'Lincoln', 'Zaiden', 'Reed', 'Owen', 'Tony', 'Gustavo', 'Braeden', 'Brantley', 'Zachariah', 'Luis', 'Quinn', 'Jax', 'King', 'Malik', 'Cristian', 'Braylen', 'Moises', 'Dallas', 'Kendrick', 'Jameson', 'Hugo', 'Alijah', 'Seth', 'Scott', 'Nikolas', 'Cohen', 'Justin', 'Zayden', 'Levi', 'Casey', 'Jacoby', 'Mauricio', 'Abel', 'Titus', 'Adriel', 'Skyler', 'Josiah', 'Felix', 'Corey', 'Pierce', 'Erick', 'Shawn', 'Kristopher', 'Mekhi', 'Lukas', 'Holden', 'Orlando', 'Antonio', 'Tate', 'Peter', 'Jared', 'Matteo', 'Derek', 'Blake', 'Gage', 'Curtis', 'Ian', 'Steven', 'Henry', 'Sam', 'Jett', 'Erik', 'Cruz', 'Dominic', 'Edward', 'Bennett', 'Rory', 'Troy', 'Simon', 'Brenden', 'Weston', 'Jayden', 'Dominick', 'Julius', 'Arjun', 'Ronald', 'Bruce', 'Ryder', 'Karter', 'Gabriel', 'Max', 'Albert', 'Alfredo', 'Bryan', 'Bryant', 'Javier', 'Maverick', 'Fabian', 'Preston', 'Raymond', 'Marcus', 'Hayden', 'Juan', 'Beckett', 'Dalton', 'Nolan', 'Cameron', 'Alberto', 'Messiah', 'Brayden', 'Payton', 'Harrison', 'Aidan', 'Maxwell', 'Jamison', 'Sean', 'Trenton', 'Chandler', 'Andres', 'Bradley', 'Jimmy', 'Logan', 'Brody', 'Kaleb', 'Jayce', 'Brock', 'Keith', 'Mitchell', 'Malcolm', 'Emilio', 'Kason', 'Zion', 'Kyle', 'Cesar', 'Alan', 'Ezra', 'Collin', 'Ernesto', 'Devon', 'Larry', 'Caleb', 'Victor', 'Marco', 'Noah', 'Reece', 'Marshall', 'Benjamin', 'Pablo', 'Travis', 'Lorenzo', 'Donovan', 'Jesus', 'August', 'Everett', 'Armani', 'Raul', 'Eli', 'Jamari', 'Ari', 'Tucker', 'Jorge', 'Royce', 'Conner', 'Taylor', 'Caiden', 'Gael', 'Adrian', 'Emmanuel', 'Israel', 'Tyler', 'Kobe', 'Aiden', 'Jose', 'Malachi', 'Arturo', 'Peyton', 'Issac', 'Maximiliano', 'Colin', 'Uriel', 'Drake', 'Dillon', 'Brendan', 'Beau', 'Alexander', 'Dakota', 'Landen', 'Marcos', 'Oscar', 'Izaiah', 'Jake', 'Milo', 'Elias', 'Tristan', 'Nico', 'Jase', 'Cade', 'Grady', 'Braylon', 'Diego', 'Charlie', 'Roberto', 'Joel', 'Garrett', 'Joe', 'Rocco', 'Jaylen', 'Jack', 'Xander', 'Cyrus', 'Tanner', 'Miguel', 'Nathan', 'Eduardo', 'Wesley', 'Oliver', 'Kingston', 'Arthur', 'Avery', 'Phillip', 'Kai', 'Colby', 'Jackson', 'Aden', 'Desmond', 'Rodrigo', 'Santiago', 'Leonel', 'Leland', 'Elijah', 'Ricardo', 'Darren', 'Ryker', 'Angel', 'Mohamed', 'Paxton', 'Isaiah', 'Charles', 'Robert', 'Joaquin', 'Jordan', 'Kade', 'Evan', 'Warren', 'Landon', 'Jaxon', 'Kamden', 'Sebastian', 'Kolton', 'Quentin', 'George', 'Dustin', 'Bentley', 'Grant', 'Anthony', 'Dylan', 'Adam', 'Johnny', 'Amari', 'Hector', 'Waylon', 'Brady', 'Dexter', 'Ryan', 'Kenneth', 'Emiliano', 'Edwin', 'Jace', 'Grayson', 'Johan', 'Jacob', 'Alex', 'Enrique', 'Enzo', 'Richard', 'Julian', 'Wyatt', 'Nathaniel', 'Darius', 'Damien', 'Rowan', 'Jeremy', 'Pedro', 'Walker', 'Drew', 'Myles', 'Colten', 'Keaton', 'Mateo', 'Jayson', 'Ismael', 'Fernando', 'Rhys', 'Ryland', 'Allen', 'Cayden', 'Ali', 'Donald', 'Miles', 'Johnathan', 'Kameron', 'Alexis', 'Gunner', 'Rylan', 'Ashton', 'Walter', 'Jason', 'Samuel', 'Finnegan', 'Parker', 'Amir', 'Corbin', 'Frank', 'Jude', 'Manuel', 'Sergio', 'Patrick', 'Mathew', 'Sullivan', 'Porter', 'Riley', 'Jaden', 'Finn', 'Maurice', 'Clayton', 'Cash', 'Ty', 'Elliott', 'Knox', 'Lawrence', 'Trent', 'Declan', 'Jesse', 'Caden', 'Daniel', 'Connor', 'Hudson', 'Martin', 'Joseph', 'Damian', 'Luke', 'Leonardo', 'Julio', 'Devin', 'Zackary', 'Camden', 'Thomas', 'Jaxson', 'Gerardo', 'James', 'Ayden', 'Giovanni', 'Kaiden', 'Dean', 'Noel', 'Roman', 'Joshua', 'Emmett', 'Cody', 'Randy', 'Landyn', 'Braxton', 'Brennan', 'Leo', 'Christian', 'Dawson', 'Kasen', 'Ricky', 'Paul', 'Alec', 'Braden', 'Gary', 'Hunter', 'Angelo', 'Kellan', 'Dane', 'Jonas', 'Colton', 'Jakob', 'Brooks', 'Gunnar', 'Timothy', 'Ethan', 'Jeremiah', 'Michael', 'Leon', 'Colt', 'Andrew', 'Eric', 'Cooper', 'Griffin', 'Carter', 'Maximilian', 'Archer', 'Liam', 'Theodore', 'Jasper', 'Jerry', 'Spencer', 'Cole', 'Vincent', 'Trevor', 'Maddox', 'Jonathan', 'Luca', 'William', 'Shane', 'Gregory', 'Keegan', 'Braydon', 'Armando', 'Kayden', 'Esteban', 'Romeo', 'Carlos', 'Isaac', 'Kevin', 'Kellen', 'Kaden', 'Mark', 'Lane', 'Austin', 'Mario', 'Tristen', 'Iker', 'Zander', 'Matthew', 'Lucas', 'Chris', 'Tyson', 'Karson', 'Zane', 'Josue', 'Jay', 'Maximus', 'Saul', 'David', 'Danny', 'Jonah', 'Ibrahim', 'Bryson', 'Marvin', 'Carson', 'Silas', 'Ivan', 'Sawyer', 'Louis', 'Atticus', 'Davis', 'River', 'Gideon', 'John', 'Dennis', 'Xavier', 'Brian', 'Micah', 'Barrett', 'Dante', 'Kyler', 'Derrick', 'Andy', 'Ezekiel', 'Trey', 'Aaron', 'Elliot', 'Jeffrey', 'Adan', 'Reid', 'Cason', 'Damon', 'Christopher', 'Nicholas', 'Gavin', 'Philip', 'Emanuel', 'Orion', 'Ramon', 'Eddie', 'Easton', 'Stephen'];
  var femaleNames = ['Makenna', 'Arielle', 'Reagan', 'Isla', 'Serenity', 'Bianca', 'Makenzie', 'Maggie', 'Charlotte', 'Kaylie', 'Nora', 'Isabel', 'Nylah', 'Camille', 'Melanie', 'Bristol', 'Tatiana', 'Cassandra', 'Ada', 'Jade', 'Kinley', 'Kelly', 'Fiona', 'Audrina', 'Autumn', 'Dylan', 'Allyson', 'Aniya', 'Victoria', 'Maya', 'Priscilla', 'Julianna', 'Christina', 'Alana', 'Kamila', 'Alyson', 'Kaylin', 'Kate', 'Marissa', 'Emery', 'Summer', 'Hannah', 'Skylar', 'Harmony', 'Anabelle', 'Emma', 'Jennifer', 'Cadence', 'Melissa', 'Adalyn', 'Catherine', 'Aylin', 'Mariana', 'Natasha', 'Norah', 'Serena', 'Gracie', 'Raelyn', 'Lucille', 'Talia', 'Lexi', 'Laura', 'Leslie', 'Danica', 'Caroline', 'Ivy', 'Jocelyn', 'Joy', 'Mckenzie', 'Megan', 'Kenzie', 'Ariana', 'Savanna', 'Eliza', 'Aaliyah', 'Quinn', 'Brianna', 'Zoe', 'Reese', 'Ruby', 'Kyleigh', 'Alessandra', 'Amy', 'Cheyenne', 'Alison', 'Paisley', 'Sierra', 'Kiley', 'Kelsey', 'Gabrielle', 'Iris', 'Joanna', 'Lily', 'Lana', 'Carolina', 'Alyssa', 'Lorelei', 'Danielle', 'Sydney', 'Keira', 'Perla', 'Emilee', 'Rose', 'Rylee', 'Sarah', 'Sofia', 'Julissa', 'Raelynn', 'Aniyah', 'Melany', 'Ella', 'Angelique', 'Carmen', 'Annabelle', 'Olive', 'Laila', 'Karina', 'Bella', 'Emilia', 'Gianna', 'Madeleine', 'Avery', 'Cecilia', 'Savannah', 'Vera', 'Annabella', 'Jacqueline', 'Ariel', 'Dakota', 'Valentina', 'Alexia', 'Carly', 'Sadie', 'Ashley', 'Kyla', 'Alaina', 'Lilian', 'Miracle', 'Kiara', 'Sasha', 'Lilliana', 'Margaret', 'Lucy', 'Layla', 'Eliana', 'Aubrey', 'Evelyn', 'Jimena', 'Courtney', 'Juliana', 'Malia', 'Ellie', 'Catalina', 'Emily', 'Dayana', 'Aubree', 'Brooklynn', 'Brooke', 'Camilla', 'Mila', 'Holly', 'Amari', 'Kaelyn', 'Sloane', 'Rebecca', 'Nayeli', 'Rylie', 'Leah', 'Rebekah', 'Claire', 'Lilyana', 'Ashlynn', 'Miriam', 'Makayla', 'Breanna', 'Tiana', 'Kara', 'Kaydence', 'Miranda', 'Amanda', 'Nia', 'Vanessa', 'Kailyn', 'Fernanda', 'Jayda', 'Phoebe', 'Macie', 'Brielle', 'Alexandra', 'Piper', 'Maliyah', 'Marilyn', 'Lena', 'Elle', 'Karla', 'Anaya', 'Gabriela', 'Madison', 'Ryleigh', 'Sienna', 'Angela', 'Baylee', 'Kendra', 'Leilani', 'Alejandra', 'Vivian', 'Karen', 'Helen', 'Brynlee', 'Erin', 'Lillian', 'Zariah', 'Valeria', 'Sophia', 'Celeste', 'Abigail', 'Kali', 'Elise', 'Parker', 'Isabella', 'Mariah', 'Ava', 'Macy', 'Veronica', 'Madelynn', 'Callie', 'Daisy', 'Jayleen', 'Grace', 'Ana', 'Finley', 'Alina', 'Aliyah', 'Anastasia', 'Kailey', 'Tessa', 'Charlie', 'Cora', 'Amber', 'Itzel', 'Eloise', 'Delilah', 'Paige', 'Skye', 'Londyn', 'Joselyn', 'Ruth', 'Penelope', 'Michaela', 'Josie', 'Gemma', 'Lila', 'Gabriella', 'Evangeline', 'Jaliyah', 'Daniela', 'Tiffany', 'Lydia', 'Kendall', 'Jaelyn', 'Lacey', 'Camryn', 'Kadence', 'Yaretzi', 'Genevieve', 'Kylee', 'Amelia', 'Naomi', 'Esther', 'Brylee', 'Shelby', 'Hayden', 'Anya', 'Violet', 'Eden', 'Daphne', 'Kimberly', 'Georgia', 'Mia', 'Caylee', 'Rowan', 'Rachel', 'Maci', 'Hanna', 'Paola', 'Alanna', 'Heidi', 'Mckinley', 'Genesis', 'Eva', 'Willow', 'Mikaela', 'Mallory', 'Kyra', 'Alayna', 'Haven', 'Angelina', 'Averie', 'Maria', 'Jillian', 'Adrianna', 'Jayla', 'Lyla', 'Hazel', 'Gia', 'Elliana', 'Madisyn', 'Chelsea', 'Ashlyn', 'Angie', 'Jazmin', 'Hope', 'Payton', 'Alexis', 'Addison', 'Aurora', 'Mckenna', 'Destiny', 'Lexie', 'Melody', 'Cali', 'Nadia', 'Lilly', 'Allison', 'Danna', 'Emely', 'Lauren', 'Selena', 'Brinley', 'Riley', 'Hadley', 'Jada', 'Tenley', 'Kiera', 'Brittany', 'Taylor', 'Juliette', 'Noelle', 'Elena', 'Fatima', 'Alexa', 'Jordyn', 'Viviana', 'Sara', 'Harper', 'Liliana', 'Mackenzie', 'Estrella', 'Jayden', 'Crystal', 'Lillie', 'Kamryn', 'Caitlyn', 'Jasmine', 'Brooklyn', 'Kayleigh', 'Adeline', 'Delaney', 'Adelaide', 'Eleanor', 'Angel', 'Marley', 'Janelle', 'Luna', 'Alexandria', 'Jordan', 'Kayla', 'Imani', 'Jazmine', 'Tatum', 'Isabelle', 'Annie', 'London', 'Harley', 'Amiyah', 'Adalynn', 'Aubrie', 'Kassidy', 'Katelyn', 'Lindsey', 'Nicole', 'Morgan', 'Stephanie', 'Alicia', 'Arianna', 'Journey', 'Teagan', 'Jessica', 'Stella', 'Clara', 'Miley', 'Monica', 'Raegan', 'Lucia', 'Kira', 'Kennedi', 'Giselle', 'Ainsley', 'Myla', 'Haylee', 'Abby', 'Charlee', 'Rosalie', 'Jane', 'Chloe', 'Natalia', 'Sarai', 'Sage', 'Camila', 'Madilyn', 'Michelle', 'April', 'Izabella', 'Andrea', 'Addisyn', 'Natalie', 'Mary', 'Addyson', 'June', 'Dulce', 'Adriana', 'Ximena', 'Nina', 'Trinity', 'Katelynn', 'Juliet', 'Arya', 'Briana', 'Faith', 'Jaylah', 'Peyton', 'Caitlin', 'Arabella', 'Brynn', 'Molly', 'Elaina', 'Gracelyn', 'Cynthia', 'Scarlett', 'Samantha', 'Jasmin', 'Haley', 'Elisa', 'Elsie', 'Francesca', 'Cassidy', 'Bridget', 'Madalyn', 'Anna', 'Lilah', 'Scarlet', 'Lola', 'Adelyn', 'Bailey', 'Paris', 'Kaitlyn', 'Guadalupe', 'Jenna', 'Leila', 'Logan', 'Kinsley', 'Athena', 'Kylie', 'Skyler', 'Josephine', 'Katherine', 'Katie', 'Kathryn', 'Audrey', 'Nevaeh', 'Erica', 'Julia', 'Madelyn', 'Olivia', 'Diana', 'Khloe', 'Esmeralda', 'Allie', 'Emerson', 'Heaven', 'Aileen', 'Angelica', 'Liana', 'Jazlyn', 'Aria', 'Cameron', 'Alondra', 'Kennedy', 'Kenley', 'Braelyn', 'Briella', 'Mikayla', 'Mya', 'Vivienne', 'Lia', 'Madeline', 'Jamie', 'Daniella', 'Elizabeth', 'Alice', 'Zoey', 'Julie', 'Adelynn', 'Amaya', 'Valerie', 'Sabrina', 'Presley', 'Hayley', 'Janiyah', 'Lyric', 'Sophie', 'Alivia', 'Ayla', 'Giuliana', 'Nyla', 'Aleah', 'Hailey', 'Maddison', 'Kaylee', 'Johanna', 'Bethany'];
  var selectedGender = gender || (exports.randomInt(1, 2) === 1 ? 'male' : 'female');
  if (selectedGender === 'male') {
    name = maleNames[exports.randomInt(0, maleNames.length - 1)];
  } else {
    name = femaleNames[exports.randomInt(0, femaleNames.length - 1)];
  }
  return name;
};

// Bool
exports.randomBool = function () {
  return exports.randomElement([true, false]);
};

// Arrays
exports.randomElement = function (array) {
  if (array) {
    return array[exports.randomInt(0, array.length - 1)];
  }
  return false;
};

exports.randomArrayString = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];
  var length = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

  var resultLength = lengthCheck(length);
  var result = stringCheck(min, max);
  if (result && resultLength) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(exports.randomString(min, max));
    }
    return arr;
  }
  return false;
};

exports.randomArrayInt = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
  var length = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

  var resultLength = lengthCheck(length);
  var result = pointCheck(min, max);
  if (result && resultLength) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(exports.randomInt(min, max));
    }
    return arr;
  }
  return false;
};

exports.randomArrayFloat = function () {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
  var length = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

  var resultLength = lengthCheck(length);
  var result = pointCheck(min, max);
  if (resultLength && result) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(exports.randomFloat(min, max));
    }
    return arr;
  }
  return false;
};

exports.randomArrayChar = function () {
  var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

  var resultLength = lengthCheck(length);
  if (resultLength) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(exports.randomCharacter());
    }
    return arr;
  }
  return false;
};

exports.randomArrayBool = function () {
  var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

  var resultLength = lengthCheck(length);
  if (resultLength) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(exports.randomBool());
    }
    return arr;
  }
  return false;
};

exports.randomObject = function () {
  var obj = {};
  obj.string = exports.randomString();
  obj.bool = exports.randomBool();
  obj.int = exports.randomInt();
  obj.func = function () {
    return 1;
  };
  return obj;
};

exports.randomArrayObj = function () {
  var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

  var tempArr = [length];
  for (var i = 0; i < length; i++) {
    tempArr[i] = exports.randomObject();
  }
  return tempArr;
};
