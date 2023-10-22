const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

let day;
console.log(new Date().getDay())

switch (new Date().getDay()) {
	case 1:
  day = "Poniedziałek";
	break;

	case 2:
	day = "Wtorek";
	break;
	
	case 3:
	day = "Środa";
	break;

	case 4:
	day = "Czwartek";
	break;

	case 5:
	day = "Piątek";
	break;

	case 6:
	day = "Sobota";
	break;

	case 0:
	day = "Niedziela";
}

currentDay.textContent = day.toLowerCase();

const fact = facts[Math.floor(Math.random()*facts.length)];
funFact.textContent = fact;