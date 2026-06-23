export const scenario_desert_obsidianoath_13_01 = {
	"scenario_id": "desert_obsidianoath_13_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 모래사막, 잊혀진 왕국의 그림자가 드리워졌다.",
						"english": "An endless desert, where the shadow of a forgotten kingdom falls.",
						"japanese": "果てなく広がる砂漠、忘れられた王国の影が差す。",
						"chinese": "一望无际的沙漠，被遗忘王国的阴影笼罩。",
						"french": "Un désert infini, où plane l'ombre d'un royaume oublié.",
						"spanish": "Un desierto interminable, donde la sombra de un reino olvidado se posa.",
						"vietnamese": "Sa mạc trải dài vô tận, nơi bóng tối của vương quốc lãng quên phủ xuống.",
						"thai": "ทะเลทรายที่กว้างใหญ่ไร้ขอบเขต ที่ซึ่งเงาของอาณาจักรที่ถูกลืมทอดลงมา.",
						"hindi": "एक अंतहीन रेगिस्तान, जहाँ एक भूले हुए साम्राज्य की छाया पड़ती है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그 고대 왕국의 유적지인가? '영혼의 검'은 어디에…",
						"english": "Is this the ruin of the ancient kingdom? Where is the 'Sword of Souls'…?",
						"japanese": "ここが古代王国の遺跡か？「魂の剣」はどこに…",
						"chinese": "这里是那个古老王国的遗迹吗？'灵魂之剑'在哪里……",
						"french": "Est-ce là la ruine de l'ancien royaume ? Où est l'Épée des Âmes… ?",
						"spanish": "¿Es esta la ruina del reino antiguo? ¿Dónde está la 'Espada de las Almas'…?",
						"vietnamese": "Đây có phải là tàn tích của vương quốc cổ đại không? 'Thanh kiếm linh hồn' ở đâu…",
						"thai": "ที่นี่คือซากปรักหักพังของอาณาจักรโบราณหรือ? 'ดาบแห่งวิญญาณ' อยู่ที่ไหน...",
						"hindi": "क्या यह प्राचीन साम्राज्य का खंडहर है? 'आत्माओं की तलवार' कहाँ है…?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "드디어 오셨군요. 어서 오십시오. 사막이 당신을 기다렸습니다.",
						"english": "You've finally arrived. Welcome. The desert has been waiting for you.",
						"japanese": "ついにいらっしゃいましたね。ようこそ。砂漠があなたを待っていました。",
						"chinese": "您终于来了。欢迎。沙漠一直在等您。",
						"french": "Vous êtes enfin arrivé. Bienvenue. Le désert vous attendait.",
						"spanish": "Por fin has llegado. Bienvenido. El desierto te ha estado esperando.",
						"vietnamese": "Cuối cùng ngài cũng đến rồi. Chào mừng. Sa mạc đã chờ đợi ngài.",
						"thai": "ในที่สุดท่านก็มาถึง ยินดีต้อนรับ ทะเลทรายรอคอยท่านอยู่.",
						"hindi": "आप आखिर आ ही गए। स्वागत है। रेगिस्तान आपका इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 아미르?",
						"english": "You are Amir?",
						"japanese": "あなたがアミール？",
						"chinese": "你是阿米尔？",
						"french": "Vous êtes Amir ?",
						"spanish": "¿Eres Amir?",
						"vietnamese": "Ngài là Amir?",
						"thai": "ท่านคืออาเมียร์?",
						"hindi": "आप अमीर हैं?"
					}
				},
				{
					"content": {
						"korean": "예. 당신의 길잡이가 되어드릴 아미르입니다. 이 사막엔… 오래된 이야기가 잠들어있죠.",
						"english": "Yes. I am Amir, your guide. In this desert… ancient tales lie dormant.",
						"japanese": "はい。あなたの道案内となるアミールです。この砂漠には…古き物語が眠っています。",
						"chinese": "是的。我是阿米尔，您的向导。这片沙漠里……沉睡着古老的故事。",
						"french": "Oui. Je suis Amir, votre guide. Dans ce désert… de vieilles histoires sommeillent.",
						"spanish": "Sí. Soy Amir, tu guía. En este desierto… yacen historias antiguas.",
						"vietnamese": "Vâng. Tôi là Amir, người dẫn đường cho ngài. Trong sa mạc này… những câu chuyện cổ xưa đang ngủ yên.",
						"thai": "ใช่ครับ ผมคืออาเมียร์ ผู้นำทางของท่าน ในทะเลทรายแห่งนี้... เรื่องราวเก่าแก่มากมายหลับใหลอยู่.",
						"hindi": "हाँ। मैं अमीर हूँ, आपका मार्गदर्शक। इस रेगिस्तान में... प्राचीन कहानियाँ सुप्त हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 사막에는… 잊혀진 기사의 전설이 내려옵니다.",
						"english": "In this desert… the legend of a forgotten knight endures.",
						"japanese": "この砂漠には…忘れ去られた騎士の伝説が伝わっています。",
						"chinese": "在这片沙漠里……流传着被遗忘骑士的传说。",
						"french": "Dans ce désert… la légende d'un chevalier oublié perdure.",
						"spanish": "En este desierto… perdura la leyenda de un caballero olvidado.",
						"vietnamese": "Trong sa mạc này… truyền thuyết về một hiệp sĩ bị lãng quên vẫn tồn tại.",
						"thai": "ในทะเลทรายแห่งนี้... ตำนานของอัศวินที่ถูกลืมเลือนยังคงอยู่.",
						"hindi": "इस रेगिस्तान में... एक भूले हुए शूरवीर की किंवदंती कायम है।"
					}
				},
				{
					"content": {
						"korean": "잊혀진 기사?",
						"english": "The Forgotten Knight?",
						"japanese": "「忘れられた騎士？」",
						"chinese": "“被遗忘的骑士？”",
						"french": "« Le Chevalier Oublié ? »",
						"spanish": "¿El Caballero Olvidado?",
						"vietnamese": "Kỵ sĩ bị lãng quên?",
						"thai": "อัศวินที่ถูกลืม?",
						"hindi": "भूला हुआ शूरवीर?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "사랑하는 이를 잃고, 사막에 맹세한 기사. 그의 슬픔이 망령이 되어 떠돈다고 하죠.",
						"english": "A knight who lost his beloved and swore an oath to the desert. They say his sorrow became a specter, wandering aimlessly.",
						"japanese": "「愛する者を失い、砂漠に誓いを立てた騎士。彼の悲しみが亡霊となり、さまよっていると言われています。」",
						"chinese": "“一位失去了挚爱，并向沙漠立誓的骑士。据说他的悲伤化作亡灵，四处游荡。”",
						"french": "« Un chevalier qui a perdu son amour et a juré fidélité au désert. On dit que sa tristesse est devenue un spectre errant. »",
						"spanish": "Un caballero que perdió a su amada y juró lealtad al desierto. Se dice que su tristeza se convirtió en un espectro errante.",
						"vietnamese": "Một kỵ sĩ đã mất đi người yêu dấu và thề nguyện với sa mạc. Người ta nói nỗi buồn của anh ta đã biến thành một bóng ma lang thang.",
						"thai": "อัศวินผู้สูญเสียคนรักและสาบานตนต่อทะเลทราย ว่ากันว่าความเศร้าของเขากลายเป็นวิญญาณเร่ร่อน",
						"hindi": "एक शूरवीर जिसने अपने प्रिय को खो दिया और रेगिस्तान से कसम खाई। कहते हैं कि उसका दुख एक प्रेत बन गया है, जो भटक रहा है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "스산한 바람 소리와 함께, 희미한 망령의 그림자가 스쳐 지나갔다.",
						"english": "Along with the chilling sound of the wind, a faint shadow of a specter swept past.",
						"japanese": "「不気味な風の音と共に、かすかな亡霊の影が通り過ぎた。」",
						"chinese": "“伴随着阴森的风声，一个模糊的幽灵身影一闪而过。”",
						"french": "« Accompagnée du sifflement lugubre du vent, l'ombre pâle d'un spectre passa. »",
						"spanish": "Junto con el escalofriante sonido del viento, una débil sombra de un espectro pasó.",
						"vietnamese": "Cùng với tiếng gió lạnh lẽo, một bóng ma mờ ảo lướt qua.",
						"thai": "พร้อมกับเสียงลมที่น่าขนลุก เงาจางๆ ของภูตผีก็พัดผ่านไป",
						"hindi": "ठंडी हवा की आवाज के साथ, एक धुंधली प्रेत की परछाई गुजर गई।"
					}
				},
				{
					"content": {
						"korean": "…지금, 뭔가 지나가지 않았어?",
						"english": "...Did something just pass by?",
						"japanese": "「…今、何か通り過ぎなかったか？」",
						"chinese": "“……刚才，是不是有什么东西过去了？”",
						"french": "« ...Quelque chose ne vient-il pas de passer ? »",
						"spanish": "...¿No pasó algo ahora mismo?",
						"vietnamese": "...Vừa rồi, có thứ gì đó lướt qua phải không?",
						"thai": "...เมื่อกี้มีอะไรบางอย่างผ่านไปไม่ใช่เหรอ?",
						"hindi": "...क्या अभी कुछ गुजरा?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "글쎄요… 사막의 환영일지도요.",
						"english": "Well... it might just be a mirage of the desert.",
						"japanese": "「さあ…砂漠の幻影かもしれませんね。」",
						"chinese": "“嗯……也许只是沙漠的幻象吧。”",
						"french": "« Eh bien... ce n'est peut-être qu'un mirage du désert. »",
						"spanish": "Bueno... quizás sea solo un espejismo del desierto.",
						"vietnamese": "Chà... có thể chỉ là ảo ảnh của sa mạc thôi.",
						"thai": "เอ่อ... อาจจะเป็นภาพลวงตาในทะเลทรายก็ได้ครับ",
						"hindi": "खैर... शायद यह रेगिस्तान का एक मृगतृष्णा हो।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막의 유적들은… 그저 돌무더기가 아닙니다.",
						"english": "The ruins of the desert... are not just piles of stones.",
						"japanese": "「砂漠の遺跡は…ただの石の山ではありません。」",
						"chinese": "“沙漠中的遗迹……不仅仅是些石堆。”",
						"french": "« Les ruines du désert... ne sont pas que des tas de pierres. »",
						"spanish": "Las ruinas del desierto... no son solo montones de piedras.",
						"vietnamese": "Những tàn tích trên sa mạc... không chỉ là những đống đá.",
						"thai": "ซากปรักหักพังในทะเลทราย... ไม่ใช่แค่กองหินธรรมดา",
						"hindi": "रेगिस्तान के खंडहर... सिर्फ पत्थरों के ढेर नहीं हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔가?",
						"english": "Then what are they?",
						"japanese": "「では、何なんだ？」",
						"chinese": "“那是什么？”",
						"french": "« Alors, qu'est-ce que c'est ? »",
						"spanish": "¿Entonces qué son?",
						"vietnamese": "Vậy chúng là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या हैं?"
					}
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "파멸한 왕국의 비명, 잊혀진 자들의 속삭임이 이곳에 깃들어 있습니다.",
						"english": "The screams of a ruined kingdom, the whispers of the forgotten, reside here.",
						"japanese": "「滅びた王国の悲鳴、忘れ去られた者たちのささやきが、ここに宿っています。」",
						"chinese": "“这里寄宿着毁灭王国的哀嚎，以及被遗忘者的低语。”",
						"french": "« Les cris d'un royaume en ruines, les murmures des oubliés, résident ici. »",
						"spanish": "Los gritos de un reino arruinado, los susurros de los olvidados, residen aquí.",
						"vietnamese": "Tiếng thét của một vương quốc đã tàn, những lời thì thầm của những người bị lãng quên, đều ẩn chứa ở đây.",
						"thai": "เสียงกรีดร้องของอาณาจักรที่ล่มสลาย เสียงกระซิบของผู้ถูกลืมสถิตอยู่ที่นี่",
						"hindi": "एक बर्बाद साम्राज्य की चीखें, भूले हुए लोगों की फुसफुसाहटें यहां रहती हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "으스스하네…",
						"english": "Creepy...",
						"japanese": "「不気味だな…」",
						"chinese": "“真让人毛骨悚然……”",
						"french": "« Effrayant... »",
						"spanish": "Espeluznante...",
						"vietnamese": "Rợn người thật...",
						"thai": "น่าขนลุก...",
						"hindi": "डरावना..."
					}
				},
				{
					"content": {
						"korean": "진실을 찾으려는 자에겐 더욱 선명하게 들릴 겁니다.",
						"english": "To those who seek the truth, they will hear it even more clearly.",
						"japanese": "「真実を求める者には、もっとはっきりと聞こえるでしょう。」",
						"chinese": "“对于寻求真相的人来说，它们会听得更加清晰。”",
						"french": "« Pour ceux qui cherchent la vérité, cela résonnera encore plus clairement. »",
						"spanish": "Para aquellos que buscan la verdad, lo escucharán aún más claramente.",
						"vietnamese": "Với những ai tìm kiếm sự thật, họ sẽ nghe thấy rõ ràng hơn nữa.",
						"thai": "สำหรับผู้ที่แสวงหาความจริง พวกเขาจะได้ยินชัดเจนยิ่งขึ้น",
						"hindi": "जो सत्य की तलाश करते हैं, उन्हें यह और भी स्पष्ट सुनाई देगा।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "조심하십시오. 이곳은… 과거의 상처가 가장 깊은 곳입니다.",
						"english": "Be careful. This place... holds the deepest wounds of the past.",
						"japanese": "お気をつけください。ここは… 過去の傷が最も深い場所です。",
						"chinese": "请小心。这里…是过去伤痕最深的地方。",
						"french": "Soyez prudent. Cet endroit… porte les cicatrices les plus profondes du passé.",
						"spanish": "Tenga cuidado. Este lugar… guarda las heridas más profundas del pasado.",
						"vietnamese": "Hãy cẩn thận. Nơi này… là nơi vết thương quá khứ sâu nhất.",
						"thai": "ระวังให้ดี ที่นี่คือ... ที่ที่บาดแผลจากอดีตฝังลึกที่สุด",
						"hindi": "सावधान रहें। यह स्थान… अतीत के सबसे गहरे घाव समेटे हुए है।"
					}
				},
				{
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Bạn nói gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "왕국의 파멸은 단순한 몰락이 아니었습니다. 무언가에 의해… 산산조각 났죠.",
						"english": "The kingdom's downfall wasn't a mere collapse. It was... shattered into pieces by something.",
						"japanese": "王国の破滅は単なる滅亡ではなかった。何者かによって… 粉々に砕かれたのだ。",
						"chinese": "王国的毁灭并非简单的衰落。它被…某种力量撕成了碎片。",
						"french": "La chute du royaume ne fut pas un simple effondrement. Il fut… brisé en mille morceaux par quelque chose.",
						"spanish": "La ruina del reino no fue un simple colapso. Fue… destrozado en pedazos por algo.",
						"vietnamese": "Sự diệt vong của vương quốc không phải chỉ là một sự sụp đổ đơn thuần. Nó đã bị… xé nát thành từng mảnh bởi một thứ gì đó.",
						"thai": "การล่มสลายของอาณาจักรไม่ใช่แค่ความพินาศธรรมดา แต่มัน… แตกสลายเป็นเสี่ยง ๆ ด้วยน้ำมือบางสิ่ง",
						"hindi": "राज्य का पतन केवल एक साधारण गिरावट नहीं था। इसे… किसी चीज़ ने टुकड़े-टुकड़े कर दिया था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "깨진 룬 문자 조각을 본 것 같아…",
						"english": "I think I saw fragments of a broken rune…",
						"japanese": "割れたルーン文字の破片を見たような気がする…",
						"chinese": "我好像看到了破碎的符文碎片…",
						"french": "Il me semble avoir vu des fragments de rune brisée…",
						"spanish": "Me pareció ver fragmentos de una runa rota…",
						"vietnamese": "Hình như tôi thấy những mảnh rune bị vỡ…",
						"thai": "เหมือนเห็นเศษอักษรรูนที่แตกหัก…",
						"hindi": "मुझे लगता है मैंने टूटे हुए रूण अक्षरों के टुकड़े देखे…"
					}
				},
				{
					"content": {
						"korean": "갑자기 모래바람이 거세지며, 거대한 그림자가 앞을 가로막았다.",
						"english": "Suddenly, the sandstorm intensified, and a colossal shadow blocked our path.",
						"japanese": "突如、砂嵐が激しくなり、巨大な影が前方を遮った。",
						"chinese": "突然间，沙尘暴愈发猛烈，一道巨大的阴影挡住了去路。",
						"french": "Soudain, la tempête de sable s'intensifia, et une ombre colossale barra notre chemin.",
						"spanish": "De repente, la tormenta de arena se intensificó y una sombra colosal bloqueó nuestro camino.",
						"vietnamese": "Đột nhiên, bão cát dữ dội hơn, và một bóng đen khổng lồ chặn đường phía trước.",
						"thai": "ทันใดนั้น พายุทรายก็โหมกระหน่ำรุนแรงขึ้น และเงามหึมาก็บดบังเส้นทางเบื้องหน้า",
						"hindi": "अचानक, रेतीला तूफान तेज़ हो गया, और एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저것은…!",
						"english": "That's…!",
						"japanese": "あれは…！",
						"chinese": "那是…！",
						"french": "C'est… !",
						"spanish": "¡Eso es…!",
						"vietnamese": "Kia là…!",
						"thai": "นั่นมัน...!",
						"hindi": "यह तो…!"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간이여.",
						"english": "To come all this way… foolish human.",
						"japanese": "ここまで来るとは… 愚かな人間め。",
						"chinese": "竟然来到这里…愚蠢的人类。",
						"french": "Arriver jusqu'ici… stupide humain.",
						"spanish": "Llegar hasta aquí… estúpido humano.",
						"vietnamese": "Dám đến tận đây… loài người ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่ได้… มนุษย์ที่โง่เขลาเอ๋ย",
						"hindi": "इतनी दूर तक आने की हिम्मत की… मूर्ख मानव।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정체가 뭐야?",
						"english": "What are you?",
						"japanese": "何者だ？",
						"chinese": "你是什么人？",
						"french": "Qui es-tu ?",
						"spanish": "¿Qué eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 이 사막의 그림자. 잊혀진 맹세의 수호자.",
						"english": "I am the shadow of this desert. Guardian of forgotten vows.",
						"japanese": "私はこの砂漠の影。忘れられた誓いの守護者だ。",
						"chinese": "我是这片沙漠的影子。被遗忘誓言的守护者。",
						"french": "Je suis l'ombre de ce désert. Le gardien des serments oubliés.",
						"spanish": "Soy la sombra de este desierto. El guardián de los juramentos olvidados.",
						"vietnamese": "Ta là bóng đêm của sa mạc này. Kẻ bảo hộ lời thề bị lãng quên.",
						"thai": "ข้าคือเงามืดแห่งทะเลทรายนี้ ผู้พิทักษ์คำสาบานที่ถูกลืมเลือน",
						"hindi": "मैं इस रेगिस्तान की छाया हूँ। भूले हुए प्रणों का संरक्षक।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "저 자는… 잊혀진 기사의…!",
						"english": "That one… is the forgotten knight's…!",
						"japanese": "あれは… 忘れられた騎士の…！",
						"chinese": "那家伙是…被遗忘骑士的…！",
						"french": "C'est… le chevalier oublié… !",
						"spanish": "Ese… es del caballero olvidado…!",
						"vietnamese": "Kẻ đó… là của hiệp sĩ bị lãng quên…!",
						"thai": "นั่นมัน... ของอัศวินที่ถูกลืม...!",
						"hindi": "वह… भूले हुए शूरवीर का…!"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 과거를 들추려는가? 후회할 것이다.",
						"english": "Dare to unearth the past? You will regret it.",
						"japanese": "過去を暴こうとするのか？後悔するぞ。",
						"chinese": "你敢揭露过去吗？你会后悔的。",
						"french": "Oserez-vous déterrer le passé ? Vous le regretterez.",
						"spanish": "¿Te atreves a desenterrar el pasado? Te arrepentirás.",
						"vietnamese": "Dám khơi lại quá khứ à? Ngươi sẽ phải hối hận.",
						"thai": "กล้าขุดคุ้ยอดีตงั้นหรือ? เจ้าจะต้องเสียใจ",
						"hindi": "क्या तुम अतीत को कुरेदने की हिम्मत करते हो? तुम्हें पछताना पड़ेगा।"
					}
				},
				{
					"content": {
						"korean": "비켜!",
						"english": "Get out of my way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Écarte-toi !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자에 모든 것이 압도당했다.",
						"english": "Everything was overwhelmed by the massive shadow.",
						"japanese": "すべてが巨大な影に圧倒された。",
						"chinese": "一切都被巨大的影子吞噬了。",
						"french": "Tout fut submergé par l'ombre gigantesque.",
						"spanish": "Todo fue abrumado por la enorme sombra.",
						"vietnamese": "Mọi thứ đều bị bóng đen khổng lồ áp đảo.",
						"thai": "ทุกสิ่งถูกครอบงำด้วยเงาขนาดมหึมา",
						"hindi": "सब कुछ विशाल छाया से अभिभूत हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "너는 아직… 이 사막의 깊이를 모른다.",
						"english": "You still... don't know the depths of this desert.",
						"japanese": "お前はまだ…この砂漠の深さを知らない。",
						"chinese": "你还...不知道这片沙漠的深度。",
						"french": "Tu ne connais pas encore... les profondeurs de ce désert.",
						"spanish": "Tú aún... no conoces la profundidad de este desierto.",
						"vietnamese": "Ngươi vẫn chưa... biết được sự sâu thẳm của sa mạc này.",
						"thai": "เจ้ายัง...ไม่รู้ความลึกของทะเลทรายนี้",
						"hindi": "तुम अभी भी... इस रेगिस्तान की गहराई नहीं जानते।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어!",
						"english": "Ugh... I can't end it here!",
						"japanese": "くっ…ここで終わらせるわけにはいかない！",
						"chinese": "咳...不能在这里结束！",
						"french": "Ugh... Je ne peux pas en finir ici !",
						"spanish": "Ugh... ¡No puedo terminar aquí!",
						"vietnamese": "Khụ... Không thể kết thúc ở đây được!",
						"thai": "อึก...ฉันจะยอมแพ้ที่นี่ไม่ได้!",
						"hindi": "धत्त... मैं इसे यहाँ खत्म नहीं कर सकता!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…좌절하지 마십시오. 당신은 다시 일어설 수 있습니다.",
						"english": "...Do not despair. You can rise again.",
						"japanese": "...落胆しないでください。あなたは再び立ち上がれます。",
						"chinese": "...不要气馁。你能够再次站起来。",
						"french": "...Ne désespérez pas. Vous pouvez vous relever.",
						"spanish": "...No se desespere. Puede levantarse de nuevo.",
						"vietnamese": "...Đừng nản lòng. Bạn có thể đứng dậy một lần nữa.",
						"thai": "...อย่าท้อแท้ คุณลุกขึ้นยืนได้อีกครั้ง",
						"hindi": "...निराश मत होइए। आप फिर से उठ सकते हैं。"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 사라졌다. 그러나 그 공포는 사라지지 않았다.",
						"english": "The massive shadow vanished. But its terror remained.",
						"japanese": "巨大な影は消えた。しかし、その恐怖は消えなかった。",
						"chinese": "巨大的影子消失了。但那份恐惧并未消散。",
						"french": "L'ombre gigantesque a disparu. Mais sa terreur, elle, subsiste.",
						"spanish": "La enorme sombra desapareció. Pero su terror no.",
						"vietnamese": "Bóng đen khổng lồ đã biến mất. Nhưng nỗi kinh hoàng vẫn còn đó.",
						"thai": "เงาขนาดมหึมาหายไปแล้ว แต่ความหวาดกลัวนั้นยังคงอยู่",
						"hindi": "विशाल छाया गायब हो गई। लेकिन उसका आतंक नहीं मिटा।"
					}
				},
				{
					"content": {
						"korean": "…어리석군. 진실은… 더 고통스러울 텐데.",
						"english": "...Foolish. The truth... will be more painful.",
						"japanese": "…愚かだな。真実は…もっと苦痛だろうに。",
						"chinese": "...愚蠢。真相...只会更痛苦。",
						"french": "...Imbécile. La vérité... sera bien plus douloureuse.",
						"spanish": "...Qué ingenuo. La verdad... será aún más dolorosa.",
						"vietnamese": "...Thật ngốc. Sự thật... sẽ còn đau đớn hơn.",
						"thai": "...โง่เขลา ความจริง...มันจะเจ็บปวดยิ่งกว่า",
						"hindi": "...मूर्ख। सच... और भी दर्दनाक होगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What do you mean!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡¿Qué dices?!",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "คุณหมายความว่าอะไร!",
						"hindi": "तुम क्या कह रहे हो!"
					}
				},
				{
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "…승리했군요. 하지만… 아직 끝나지 않았습니다.",
						"english": "...You've won. But... it's not over yet.",
						"japanese": "…勝利したようだな。しかし…まだ終わってはいない。",
						"chinese": "...你赢了。但是...还没有结束。",
						"french": "...Vous avez gagné. Mais... ce n'est pas encore fini.",
						"spanish": "...Has ganado. Pero... aún no ha terminado.",
						"vietnamese": "...Ngươi đã thắng. Nhưng... mọi chuyện vẫn chưa kết thúc.",
						"thai": "...คุณชนะแล้ว แต่...มันยังไม่จบ",
						"hindi": "...तुम जीत गए। लेकिन... यह अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "아미르의 손에는 낡은 고대 기록 조각이 들려 있었다. 그것은 또 다른 비극의 시작을 알리는 듯했다.",
						"english": "Amir held a fragment of an ancient, worn record. It seemed to herald the beginning of another tragedy.",
						"japanese": "アミールの手には、古びた古代記録の断片が握られていた。それは、新たな悲劇の始まりを告げるかのようだった。",
						"chinese": "阿米尔手中拿着一块残破的古代记录。它似乎预示着另一场悲剧的开始。",
						"french": "Amir tenait un fragment d'un ancien registre usé. Il semblait annoncer le début d'une autre tragédie.",
						"spanish": "Amir sostenía un fragmento de un antiguo y gastado registro. Parecía anunciar el comienzo de otra tragedia.",
						"vietnamese": "Trong tay Amir là một mảnh ghi chép cổ xưa đã sờn rách. Nó dường như báo hiệu sự khởi đầu của một bi kịch khác.",
						"thai": "ในมือของอามีร์มีเศษบันทึกโบราณที่เก่าแก่ มันดูเหมือนจะเป็นการบอกถึงจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่",
						"hindi": "अमीर के हाथ में एक प्राचीन, जीर्ण-शीर्ण अभिलेख का एक टुकड़ा था। यह एक और त्रासदी की शुरुआत का संकेत देता लग रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막, 고대 왕국의 그림자가 드리워진 곳.",
			"모래바람은 잊혀진 맹세를 속삭이고…",
			"진실을 찾는 자와, 그것을 지키려는 미지의 존재가 충돌한다.",
			"불길한 예감 속, 모든 것의 시작점이 다가온다."
		],
		"english": [
			"The desert, where the shadow of an ancient kingdom looms.",
			"Sandstorms whisper forgotten vows…",
			"Seekers of truth clash with unknown guardians.",
			"Under an ominous premonition, the genesis of all approaches."
		],
		"japanese": [
			"砂漠、古き王国の影が差す場所。",
			"砂嵐は忘れられた誓いを囁き…",
			"真実を求める者と、それを守ろうとする未知の存在が衝突する。",
			"不吉な予感の中、すべての始まりが近づく。"
		],
		"chinese": [
			"沙漠，古老王国之影笼罩之地。",
			"沙尘暴低语着被遗忘的誓言……",
			"真理的追寻者与未知的守护者发生冲突。",
			"在不祥的预感中，万物的起点临近。"
		],
		"french": [
			"Le désert, où l'ombre d'un royaume antique plane.",
			"Les tempêtes de sable murmurent des serments oubliés…",
			"Ceux qui cherchent la vérité se heurtent à des êtres inconnus qui la protègent.",
			"Sous une prémonition sinistre, le point de départ de tout approche."
		],
		"spanish": [
			"El desierto, donde la sombra de un reino antiguo se cierne.",
			"Las tormentas de arena susurran promesas olvidadas…",
			"Los buscadores de la verdad chocan con seres desconocidos que la protegen.",
			"Bajo una premonición ominosa, el punto de partida de todo se acerca."
		],
		"vietnamese": [
			"Sa mạc, nơi bóng tối của vương quốc cổ đại bao trùm.",
			"Bão cát thì thầm những lời thề đã lãng quên…",
			"Người tìm kiếm sự thật và những thực thể bí ẩn bảo vệ nó xung đột.",
			"Trong điềm báo bất an, điểm khởi đầu của mọi thứ đang đến gần."
		],
		"thai": [
			"ทะเลทราย ที่ซึ่งเงาของอาณาจักรโบราณทอดยาว.",
			"พายุทรายกระซิบคำสาบานที่ถูกลืมเลือน...",
			"ผู้แสวงหาความจริงปะทะกับผู้พิทักษ์ที่ไม่รู้จัก.",
			"ภายใต้ลางร้าย จุดเริ่มต้นของทุกสิ่งกำลังใกล้เข้ามา."
		],
		"hindi": [
			"रेगिस्तान, जहाँ एक प्राचीन साम्राज्य की छाया मंडराती है。",
			"रेगिस्तानी तूफान भूले हुए वादों को फुसफुसाते हैं...",
			"सत्य के चाहने वाले और उसे बचाने वाले अज्ञात प्राणी टकराते हैं।",
			"एक अशुभ पूर्वाभास के तहत, सभी चीजों का आरंभिक बिंदु निकट आ रहा है।"
		]
	}
} as const;
