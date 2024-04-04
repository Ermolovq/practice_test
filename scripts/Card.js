class Card{
	constructor(name, image_url) {
		this.name = name;
		this.image_url = image_url;
		
		// Стандартні значення карт при її створенні
		this.descriptionNormal_past = "Past description: <br>card " + name;
		this.descriptionNormal_present = "Present description: <br>card " + name;
		this.descriptionNormal_future = "Future description: <br>card " + name;
		this.descriptionInversed_past = "Past description: card " + name + " (inversed)";
		this.descriptionInversed_present = "Present description: card " + name + " (inversed)";
		this.descriptionInversed_future = "Future description: card " + name + " (inversed)";
	}
	
	set_name(name) {
		this.name = name;
	}
	get_name() {
		return this.name;
	}
	
	set_imageURL(url) {
		this.image_url = url;
	}
	get_imageURL() {
		return this.image_url;
	}
	
	// Встановлюємо опис карти у відповідності до її часу та положення
	set_description(tense, condition, description) {
		if (condition === "normal") {
			switch(tense) {
				case "past":
					this.descriptionNormal_past = description;
					break;
				case "present":
					this.descriptionNormal_present = description;
					break;
				case "future":
					this.descriptionNormal_future = description;
					break;
			}
		} else if (condition === "inversed") {
			switch (tense) {
				case "past":
					this.descriptionInversed_past = description;
					break;
				case "present":
					this.descriptionInversed_present = description;
					break;
				case "future":
					this.descriptionInversed_future = description;
					break;
			}
		}
	}
	
	// Отримуємо опис карти у відповідності до її часу та положення
	get_description(tense, condition) {
		if (condition === "normal") {
			switch(tense) {
				case "past":
					return this.descriptionNormal_past;
					break;
				case "present":
					return this.descriptionNormal_present;
					break;
				case "future":
					return this.descriptionNormal_future;
					break;
			}
		} else if (condition === "inversed") {
			switch (tense) {
				case "past":
					return this.descriptionInversed_past;
					break;
				case "present":
					return this.descriptionInversed_present;
					break;
				case "future":
					return this.descriptionInversed_future;
					break;
			}
		}
	}
}