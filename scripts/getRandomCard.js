function getRandomCard(thisCard, chosenCards, cardCondition, cards) {
	if(thisCard > 3) {
		return;
	}

    let bool = true;
	let randomIndex;

    // Вибираємо випадкову карту, перевіряючи, чи вона ще не була вибрана
    while (bool) {
		randomIndex = Math.floor(Math.random() * cards.length);
		if (!chosenCards.includes(randomIndex)) {
			chosenCards.push(randomIndex);
			condition = Math.floor(Math.random() * 2);
			if(condition == 0) {
				cardCondition.push("normal");
			}else if(condition == 1) {
				cardCondition.push("inversed");
			}
			bool = false;
		}
    }
	
    // Встановлюємо вибрану карту на сторінку
    const cardImg = document.getElementById(`img_card${thisCard}`);
    cardImg.src = cards[randomIndex].get_imageURL();
	cardImg.style.display = "flex";
	const description = document.getElementById(`description_card${thisCard}`);
	if(cardCondition[thisCard] == "normal") {
		switch(thisCard) {
			case 0: description.innerText = chosenCards[thisCard].get_description("past", "normal"); break;
			case 1: description.innerText = chosenCards[thisCard].get_description("present", "normal"); break;
			case 0: description.innerText = chosenCards[thisCard].get_description("future", "normal"); break;
		}
	}
	if(cardCondition[thisCard] == "inversed") {
		cardImg.style.transform = "scaleX(-1)";
		switch(thisCard) {
			case 0: description.innerText = chosenCards[thisCard].get_description("past", "inversed"); break;
			case 1: description.innerText = chosenCards[thisCard].get_description("present", "inversed"); break;
			case 0: description.innerText = chosenCards[thisCard].get_description("future", "inversed"); break;
		}
	}
}