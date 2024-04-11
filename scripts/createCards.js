// Створення карт

let card1 = new Card("КІБЕР МОНАХ", "images/card_1.png");
card1.set_description("past", "normal", "Опис першої карти в минулому часі, не перевернута.");
card1.set_description("present", "normal", "Опис першої карти в теперішньому часі, не перевенута.");
card1.set_description("future", "normal", "Опис першої карти в майбутньому часі, не перевенута.");
card1.set_description("past", "inversed", "Опис першої карти в минулому часі, перевенута.");
card1.set_description("present", "inversed", "Опис першої карти в теперішньому часі, перевенута");
card1.set_description("future", "inversed", "Опис першої карти в майбутньому часі, перевенута");

let card2 = new Card("КІБЕР ВІРУС", "images/card_2.png");
card2.set_description("past", "normal", "Опис другої карти в минулому часі, не перевернута.");
card2.set_description("present", "normal", "Опис другої карти в теперішньому часі, не перевенута.");
card2.set_description("future", "normal", "Опис другої карти в майбутньому часі, не перевенута.");
card2.set_description("past", "inversed", "Опис другої карти в минулому часі, перевенута.");
card2.set_description("present", "inversed", "Опис другої карти в теперішньому часі, перевенута");
card2.set_description("future", "inversed", "Опис другої карти в майбутньому часі, перевенута");

let card3 = new Card("КВАНТОВИЙ ІМПЕРАТОР", "images/card_3.png");
card3.set_description("past", "normal", "Опис третьої карти в минулому часі, не перевернута.");
card3.set_description("present", "normal", "Опис третьої карти в теперішньому часі, не перевенута.");
card3.set_description("future", "normal", "Опис третьої карти в майбутньому часі, не перевенута.");
card3.set_description("past", "inversed", "Опис третьої карти в минулому часі, перевенута.");
card3.set_description("present", "inversed", "Опис третьої карти в теперішньому часі, перевенута");
card3.set_description("future", "inversed", "Опис третьої карти в майбутньому часі, перевенута");

let card4 = new Card("КІБЕР МОТОЦИКЛ", "images/card_4.png");
card4.set_description("past", "normal", "Опис четвертої карти в минулому часі, не перевернута.");
card4.set_description("present", "normal", "Опис четвертої карти в теперішньому часі, не перевенута.");
card4.set_description("future", "normal", "Опис четвертої карти в майбутньому часі, не перевенута.");
card4.set_description("past", "inversed", "Опис четвертої карти в минулому часі, перевенута.");
card4.set_description("present", "inversed", "Опис четвертої карти в теперішньому часі, перевенута");
card4.set_description("future", "inversed", "Опис четвертої карти в майбутньому часі, перевенута");

let card5 = new Card("TECHMANCER", "images/card_5.png");
card5.set_description("past", "normal", "Опис п'ятої карти в минулому часі, не перевернута.");
card5.set_description("present", "normal", "Опис п'ятої карти в теперішньому часі, не перевенута.");
card5.set_description("future", "normal", "Опис п'ятої карти в майбутньому часі, не перевенута.");
card5.set_description("past", "inversed", "Опис п'ятої карти в минулому часі, перевенута.");
card5.set_description("present", "inversed", "Опис п'ятої карти в теперішньому часі, перевенута");
card5.set_description("future", "inversed", "Опис п'ятої карти в майбутньому часі, перевенута");

let card6 = new Card("АЛГОРИТМ МАГ", "images/card_6.png");
card6.set_description("past", "normal", "Опис п'ятої карти в минулому часі, не перевернута.");
card6.set_description("present", "normal", "Опис п'ятої карти в теперішньому часі, не перевенута.");
card6.set_description("future", "normal", "Опис п'ятої карти в майбутньому часі, не перевенута.");
card6.set_description("past", "inversed", "Опис п'ятої карти в минулому часі, перевенута.");
card6.set_description("present", "inversed", "Опис п'ятої карти в теперішньому часі, перевенута");
card6.set_description("future", "inversed", "Опис п'ятої карти в майбутньому часі, перевенута");

let card7 = new Card("НЕОНОВИЙ ВІДБЛИСК", "images/card_7.png");
card7.set_description("past", "normal", "Опис п'ятої карти в минулому часі, не перевернута.");
card7.set_description("present", "normal", "Опис п'ятої карти в теперішньому часі, не перевенута.");
card7.set_description("future", "normal", "Опис п'ятої карти в майбутньому часі, не перевенута.");
card7.set_description("past", "inversed", "Опис п'ятої карти в минулому часі, перевенута.");
card7.set_description("present", "inversed", "Опис п'ятої карти в теперішньому часі, перевенута");
card7.set_description("future", "inversed", "Опис п'ятої карти в майбутньому часі, перевенута");

let card8 = new Card("ГЛЮК СИМУЛЯЦІЇ", "images/card_8.png");
card8.set_description("past", "normal", "Опис п'ятої карти в минулому часі, не перевернута.");
card8.set_description("present", "normal", "Опис п'ятої карти в теперішньому часі, не перевенута.");
card8.set_description("future", "normal", "Опис п'ятої карти в майбутньому часі, не перевенута.");
card8.set_description("past", "inversed", "Опис п'ятої карти в минулому часі, перевенута.");
card8.set_description("present", "inversed", "Опис п'ятої карти в теперішньому часі, перевенута");
card8.set_description("future", "inversed", "Опис п'ятої карти в майбутньому часі, перевенута");

const cards = [card1, card2, card3, card4, card5, card6, card7, card8]; // Створення списку доступних карт