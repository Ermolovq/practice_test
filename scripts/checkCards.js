function checkCards(thisCard) {
	let bool = false;
	if(thisCard > 3){
		shakePhone.style.display = "none";
		mainButton.style.display = "flex";
		mainButton.innerText = "Дізнатися";
		mainButton.onclick = function() {
			if(bool == false) {
				description_card1.style.display = "flex";
				description_card2.style.display = "flex";
				description_card3.style.display = "flex";
				
				name_card1.style.display = "flex";
				name_card2.style.display = "flex";
				name_card3.style.display = "flex";
				
				mainButton.innerText = "Сховати";
				bool = true;
			} else {
				description_card1.style.display = "none";
				description_card2.style.display = "none";
				description_card3.style.display = "none";
				
				name_card1.style.display = "none";
				name_card2.style.display = "none";
				name_card3.style.display = "none";
				
				mainButton.innerText = "Дізнатися";
				bool = false;
			}
		}
	}
}