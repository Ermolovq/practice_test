function checkCards(thisCard) {
	let bool = false;
	if (thisCard > 3) {
		if (device == "desktop") {
			down_button.innerText = "Дізнатися";
			down_button.onclick = function() {
				if (bool == false) {
					description_card1.style.display = "flex";
					description_card2.style.display = "flex";
					description_card3.style.display = "flex";
					bool = true;
				} else {
					description_card1.style.display = "none";
					description_card2.style.display = "none";
					description_card3.style.display = "none";
					bool = false;
				}
			}
		} else if (device == "phone") {
		
		}
	}
}