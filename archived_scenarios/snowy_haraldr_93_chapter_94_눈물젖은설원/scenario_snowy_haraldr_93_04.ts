export const scenario_snowy_haraldr_93_04 = {
	"scenario_id": "snowy_haraldr_93_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"content": {
						"korean": "뿔피리 소리가 바람을 타고 흘렀다. 슬픔인지, 분노인지 알 수 없었다.",
						"english": "The horn's sound drifted on the wind. Was it sorrow, or anger? It was unclear.",
						"japanese": "角笛の音が風に乗って流れた。悲しみなのか、怒りなのか、分からなかった。",
						"chinese": "号角声随风飘荡。是悲伤，还是愤怒？无从得知。",
						"french": "Le son de la corne flottait dans le vent. Était-ce de la tristesse, ou de la colère ? Impossible de savoir.",
						"spanish": "El sonido del cuerno flotó en el viento. ¿Era tristeza, o ira? Era incierto.",
						"vietnamese": "Tiếng tù và trôi theo gió. Không thể biết đó là nỗi buồn hay sự phẫn nộ.",
						"thai": "เสียงแตรลอยมาตามลม ไม่รู้ว่าเป็นความเศร้าหรือความโกรธ.",
						"hindi": "सींग की आवाज़ हवा में बह गई। क्या यह दुख था, या क्रोध? पता नहीं चला।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하랄드르의 뿔피리 소리가 심상치 않아.",
						"english": "Haraldr's horn sounds ominous.",
						"japanese": "ハラルドルの角笛の音が尋常じゃない。",
						"chinese": "哈拉尔德的号角声很不寻常。",
						"french": "Le son de la corne de Haraldr est de mauvais augure.",
						"spanish": "El cuerno de Haraldr suena ominoso.",
						"vietnamese": "Tiếng tù và của Haraldr không bình thường.",
						"thai": "เสียงแตรของ Haraldr ฟังดูไม่ปกติ.",
						"hindi": "हेराल्ड्र के सींग की आवाज़ अशुभ लग रही है।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "…왔군. 이 근처 얼음에 새겨진 문양들, 봤나?",
						"english": "...You're here. Did you see the symbols carved in the ice nearby?",
						"japanese": "…来たな。この辺りの氷に刻まれた文様、見たか？",
						"chinese": "……你来了。看到这附近冰上刻的符文了吗？",
						"french": "...Te voilà. As-tu vu les symboles gravés dans la glace, ici ?",
						"spanish": "…Has llegado. ¿Viste los símbolos grabados en el hielo aquí cerca?",
						"vietnamese": "…Đã đến rồi. Ngươi đã thấy những hoa văn khắc trên băng gần đây chưa?",
						"thai": "…มาแล้วสินะ เห็นสัญลักษณ์ที่สลักอยู่บนน้ำแข็งแถวนี้ไหม?",
						"hindi": "...आ गए तुम। क्या तुमने आस-पास बर्फ में खुदे हुए प्रतीकों को देखा?"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "고대 문양?",
						"english": "Ancient symbols?",
						"japanese": "古代の文様？",
						"chinese": "古老符文？",
						"french": "Des symboles anciens ?",
						"spanish": "¿Símbolos antiguos?",
						"vietnamese": "Hoa văn cổ đại?",
						"thai": "สัญลักษณ์โบราณ?",
						"hindi": "प्राचीन प्रतीक?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그래. 그 문양이 뜻하는 바를 알게 되면, 너는 '강함의 끝'에 대해 다시 생각하게 될 거다.",
						"english": "Yes. When you understand what those symbols mean, you'll rethink 'the limits of strength.'",
						"japanese": "ああ。その文様が意味するところを知れば、お前は「強さの果て」について考え直すことになるだろう。",
						"chinese": "是的。当你了解那些符文的含义时，你会重新思考“力量的极限”。",
						"french": "Oui. Quand tu comprendras ce que ces symboles signifient, tu repenseras aux 'limites de la force'.",
						"spanish": "Sí. Cuando entiendas lo que significan esos símbolos, reconsiderarás 'los límites de la fuerza'.",
						"vietnamese": "Đúng vậy. Khi ngươi biết được ý nghĩa của những hoa văn đó, ngươi sẽ phải suy nghĩ lại về 'giới hạn của sức mạnh'.",
						"thai": "ใช่ เมื่อรู้ความหมายของสัญลักษณ์เหล่านั้น เจ้าจะต้องคิดใหม่เรื่อง 'ขีดจำกัดของความแข็งแกร่ง'.",
						"hindi": "हाँ। जब तुम उन प्रतीकों का अर्थ समझोगे, तो तुम 'शक्ति की सीमाओं' के बारे में फिर से सोचोगे।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 문양들… 고대 바이킹 전사들의 '굶주린 영혼'을 봉인하는 마법이군.",
						"english": "These symbols... they're magic to seal the 'hungry souls' of ancient Viking warriors.",
						"japanese": "この文様…古のヴァイキング戦士たちの「飢えた魂」を封印する魔法か。",
						"chinese": "这些符文……是用来封印古老维京战士“饥饿灵魂”的魔法啊。",
						"french": "Ces symboles... c'est une magie pour sceller les 'âmes affamées' des anciens guerriers vikings.",
						"spanish": "Estos símbolos... son magia para sellar las 'almas hambrientas' de los antiguos guerreros vikingos.",
						"vietnamese": "Những hoa văn này… là ma thuật phong ấn 'linh hồn đói khát' của các chiến binh Viking cổ đại.",
						"thai": "สัญลักษณ์เหล่านี้... เป็นเวทมนตร์สำหรับผนึก 'ดวงวิญญาณกระหาย' ของนักรบไวกิ้งโบราณ.",
						"hindi": "ये प्रतीक... प्राचीन वाइकिंग योद्धाओं की 'भूखी आत्माओं' को सील करने का जादू हैं।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "굶주린 영혼?",
						"english": "Hungry souls?",
						"japanese": "飢えた魂？",
						"chinese": "饥饿的灵魂？",
						"french": "Des âmes affamées ?",
						"spanish": "¿Almas hambrientas?",
						"vietnamese": "Linh hồn đói khát?",
						"thai": "วิญญาณผู้หิวโหย?",
						"hindi": "भूखी आत्माएँ?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그래. 강함에 미쳐 영원히 싸울 운명에 묶인 자들.",
						"english": "Yes. Those bound by fate to endlessly fight, driven mad by power.",
						"japanese": "ああ。強さに魅入られ、永遠に戦う運命に縛られた者たちだ。",
						"chinese": "是的。那些为力量疯狂，注定永远战斗的人。",
						"french": "Oui. Ceux liés par le destin à combattre sans fin, rendus fous par la puissance.",
						"spanish": "Sí. Aquellos atados por el destino a luchar sin cesar, enloquecidos por el poder.",
						"vietnamese": "Phải. Những kẻ bị số phận trói buộc phải chiến đấu không ngừng, điên cuồng vì sức mạnh.",
						"thai": "ใช่แล้ว ผู้ที่ถูกพันธนาการด้วยโชคชะตาให้ต่อสู้ไม่รู้จบ คลุ้มคลั่งเพราะความแข็งแกร่ง.",
						"hindi": "हाँ। वे जो शक्ति के मोह में पागल होकर, हमेशा के लिए लड़ने के लिए भाग्य से बंधे हैं।"
					}
				},
				{
					"content": {
						"korean": "하랄드르와 무슨 관계인데?",
						"english": "What's their connection to Háráldur?",
						"japanese": "ハラルドゥルと何か関係があるのか？",
						"chinese": "这和哈拉尔德有什么关系？",
						"french": "Quel est leur lien avec Háráldur ?",
						"spanish": "¿Qué relación tienen con Háráldur?",
						"vietnamese": "Chúng có liên quan gì đến Háráldur?",
						"thai": "พวกเขาเกี่ยวข้องอะไรกับฮารัลเดอร์?",
						"hindi": "उनका हराल्डुर से क्या संबंध है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "아직은… 알 수 없다. 하지만 이 문양, 하랄드르의 뿔피리 소리와 어딘가 닮았군.",
						"english": "Not yet... I can't tell. But this symbol, it somehow resembles the sound of Háráldur's horn.",
						"japanese": "まだ…分からない。だがこの文様、ハラルドゥルの角笛の音とどこか似ているな。",
						"chinese": "还无法…知晓。但这图案，与哈拉尔德的号角声有几分相似。",
						"french": "Pas encore... je ne peux pas dire. Mais ce symbole, il ressemble étrangement au son du cor d'Háráldur.",
						"spanish": "Todavía no... no puedo decirlo. Pero este símbolo, se parece de alguna manera al sonido del cuerno de Háráldur.",
						"vietnamese": "Chưa... không thể biết được. Nhưng biểu tượng này, nó có nét gì đó giống với tiếng tù và của Háráldur.",
						"thai": "ยัง... บอกไม่ได้ แต่สัญลักษณ์นี้ คล้ายกับเสียงแตรของฮารัลเดอร์บางอย่าง.",
						"hindi": "अभी तक... मैं नहीं बता सकता। लेकिन यह प्रतीक, यह हराल्डुर के सींग की आवाज से कुछ मिलता-जुलता है।"
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
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "해독했다. 이 룬 문양… 하랄드르의 것이었어.",
						"english": "Deciphered. This runic symbol... it was Háráldur's.",
						"japanese": "解読した。このルーン文字…ハラルドゥルのものだった。",
						"chinese": "已破译。这个符文…是哈拉尔德的。",
						"french": "Déchiffré. Ce symbole runique... c'était celui d'Háráldur.",
						"spanish": "Descifrado. Este símbolo rúnico... era de Háráldur.",
						"vietnamese": "Đã giải mã. Ký hiệu rune này... là của Háráldur.",
						"thai": "ถอดรหัสแล้ว สัญลักษณ์รูนนี้...เป็นของฮารัลเดอร์.",
						"hindi": "हल कर लिया। यह रनिक प्रतीक... हराल्डुर का था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하랄드르의 것이라고?",
						"english": "Háráldur's?",
						"japanese": "ハラルドゥルのだと？",
						"chinese": "是哈拉尔德的？",
						"french": "Celui d'Háráldur ?",
						"spanish": "¿De Háráldur?",
						"vietnamese": "Của Háráldur ư?",
						"thai": "ของฮารัลเดอร์เหรอ?",
						"hindi": "हराल्डुर का?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 이 문양은 그가 얼마나 강함에 집착했는지, 그 끝없는 싸움이 무엇을 봉인했는지 보여준다.",
						"english": "Yes. This symbol shows how obsessed he was with strength, and what his endless battles sealed away.",
						"japanese": "ああ。この文様は、彼がいかに強さに執着し、その果てなき戦いが何を封印したのかを示している。",
						"chinese": "是的。这个图案显示了他对力量的痴迷，以及他无尽的战斗封印了什么。",
						"french": "Oui. Ce symbole montre à quel point il était obsédé par la force, et ce que ses batailles sans fin ont scellé.",
						"spanish": "Sí. Este símbolo muestra cuán obsesionado estaba con la fuerza, y lo que sus batallas interminables sellaron.",
						"vietnamese": "Phải. Biểu tượng này cho thấy anh ta đã ám ảnh với sức mạnh đến mức nào, và những trận chiến không hồi kết của anh ta đã phong ấn điều gì.",
						"thai": "ใช่แล้ว สัญลักษณ์นี้แสดงให้เห็นว่าเขาหมกมุ่นอยู่กับความแข็งแกร่งเพียงใด และการต่อสู้ไม่รู้จบของเขาได้ผนึกอะไรไว้.",
						"hindi": "हाँ। यह प्रतीक दिखाता है कि वह शक्ति के प्रति कितना जुनूनी था, और उसकी अंतहीन लड़ाइयों ने क्या सील कर दिया था।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 하랄드르는…",
						"english": "Then Háráldur...",
						"japanese": "ではハラルドゥルは…",
						"chinese": "那么哈拉尔德…",
						"french": "Alors Háráldur...",
						"spanish": "Entonces Háráldur...",
						"vietnamese": "Vậy thì Háráldur...",
						"thai": "ถ้าอย่างนั้นฮารัลเดอร์...",
						"hindi": "तो हराल्डुर..."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그는 이미 오래전, 자신마저 봉인한 전사였다. '강함의 끝'을 찾아 헤매다 결국 자신을 가둔 자.",
						"english": "He was a warrior who, long ago, sealed even himself. One who sought the 'end of strength' only to trap himself.",
						"japanese": "彼は遥か昔、自分自身をも封印した戦士だった。『強さの果て』を求めて彷徨い、結局自分を閉じ込めた者だ。",
						"chinese": "他是一位很久以前，甚至连自己都封印了的战士。一个追寻‘力量的尽头’，最终却将自己困住的人。",
						"french": "C'était un guerrier qui, il y a longtemps, s'était même scellé lui-même. Un homme qui cherchait la 'fin de la force' pour finir par s'emprisonner.",
						"spanish": "Fue un guerrero que, hace mucho tiempo, se selló incluso a sí mismo. Uno que buscó el 'fin de la fuerza' solo para atraparse a sí mismo.",
						"vietnamese": "Anh ta là một chiến binh đã tự phong ấn chính mình từ rất lâu rồi. Một kẻ lang thang tìm kiếm 'tận cùng của sức mạnh' nhưng cuối cùng lại tự giam cầm bản thân.",
						"thai": "เขาคือนักรบที่ผนึกแม้กระทั่งตัวเองไปเมื่อนานมาแล้ว ผู้ที่แสวงหา 'จุดสิ้นสุดของความแข็งแกร่ง' แต่กลับขังตัวเองไว้ในที่สุด.",
						"hindi": "वह एक ऐसा योद्धा था जिसने बहुत पहले खुद को भी सील कर दिया था। वह जिसने 'शक्ति का अंत' खोजने की कोशिश की, लेकिन अंततः खुद को फंसा लिया।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "자네, 더 이상 나아가지 않는 게 좋을 거다.",
						"english": "You'd do well not to go any further.",
						"japanese": "君、これ以上進まない方がいい。",
						"chinese": "你最好不要再往前了。",
						"french": "Vous feriez bien de ne pas aller plus loin.",
						"spanish": "Sería mejor que no avanzaras más.",
						"vietnamese": "Ngươi, tốt nhất là đừng đi xa hơn nữa.",
						"thai": "เจ้า อย่าไปไกลกว่านี้จะดีกว่า.",
						"hindi": "तुम आगे न बढ़ो तो बेहतर होगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 와서?",
						"english": "Now?",
						"japanese": "今さら？",
						"chinese": "现在才来？",
						"french": "Maintenant ?",
						"spanish": "¿Ahora?",
						"vietnamese": "Giờ mới đến à?",
						"thai": "ตอนนี้เหรอ?",
						"hindi": "अब?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하랄드르는 '강함의 끝'이 무엇인지 보여줄 거야. 그건 자네가 감당할 수 없을지도 모른다.",
						"english": "Haraldr will show you what the 'pinnacle of strength' truly is. It may be more than you can bear.",
						"japanese": "ハラルドルが『強さの極限』とは何かを見せてくれるだろう。それは君が耐えられないものかもしれない。",
						"chinese": "哈拉尔德会让你见识‘力量的终极’。那也许是你无法承受的。",
						"french": "Haraldr te montrera ce qu'est le 'summum de la force'. Cela pourrait bien être au-delà de ce que tu peux supporter.",
						"spanish": "Haraldr te mostrará qué es el 'límite de la fuerza'. Puede que sea algo que no puedas soportar.",
						"vietnamese": "Haraldr sẽ cho ngươi thấy 'đỉnh cao của sức mạnh' là gì. Ngươi có thể không chịu đựng nổi đâu.",
						"thai": "ฮาราลด์จะแสดงให้เจ้าเห็นว่า 'จุดสูงสุดแห่งความแข็งแกร่ง' คืออะไร บางทีเจ้าอาจจะรับมันไม่ไหวก็ได้",
						"hindi": "हेरल्ड तुम्हें 'शक्ति की चरम सीमा' दिखाएगा। हो सकता है तुम इसे सहन न कर पाओ。"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "두렵지 않아. 진실을 알기 전까지 멈추지 않아.",
						"english": "I'm not afraid. I won't stop until I know the truth.",
						"japanese": "恐れない。真実を知るまで、止まらない。",
						"chinese": "我无所畏惧。不查明真相，我绝不会停下。",
						"french": "Je n'ai pas peur. Je ne m'arrêterai pas avant de connaître la vérité.",
						"spanish": "No tengo miedo. No me detendré hasta conocer la verdad.",
						"vietnamese": "Ta không sợ. Ta sẽ không dừng lại cho đến khi biết được sự thật.",
						"thai": "ข้าไม่กลัว ข้าจะไม่หยุดจนกว่าจะรู้ความจริง",
						"hindi": "मैं डरता नहीं। मैं सच जानने से पहले नहीं रुकूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…좋아. 결국엔 자네도 알게 되겠지. 강함의 끝에서 기다리는 것이 무엇인지.",
						"english": "...Fine. You'll find out eventually. What awaits you at the end of strength.",
						"japanese": "…いいだろう。いずれ君も知ることになる。強さの果てに何が待っているのかを。",
						"chinese": "…好吧。终有一天你也会明白。在力量的尽头，究竟等待着什么。",
						"french": "...Bien. Tu finiras par le savoir toi aussi. Ce qui t'attend au bout de la force.",
						"spanish": "...De acuerdo. Al final, tú también lo sabrás. Lo que te espera al final de la fuerza.",
						"vietnamese": "...Được thôi. Cuối cùng, ngươi cũng sẽ biết. Điều gì đang chờ đợi ở tận cùng sức mạnh.",
						"thai": "…เอาเถอะ ในที่สุดเจ้าก็จะรู้ สิ่งที่รอคอยอยู่ ณ จุดสิ้นสุดแห่งความแข็งแกร่ง",
						"hindi": "...ठीक है। आखिरकार तुम भी जान जाओगे। शक्ति के अंत में क्या इंतज़ार कर रहा है।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 심장부, 거대한 그림자가 나타났다.",
						"english": "In the frozen core, a colossal shadow appeared.",
						"japanese": "凍てついた心臓部、巨大な影が現れた。",
						"chinese": "在冰封的核心深处，一道巨大的黑影显现。",
						"french": "Au cœur gelé, une ombre colossale apparut.",
						"spanish": "En el corazón helado, una sombra gigantesca apareció.",
						"vietnamese": "Trong tâm điểm băng giá, một bóng đen khổng lồ hiện ra.",
						"thai": "ในใจกลางที่เยือกแข็ง เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "जमे हुए हृदय में, एक विशालकाय छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔군. '강함'을 쫓는 어리석은 자여.",
						"english": "...So, you've come. You fool who chases 'strength'.",
						"japanese": "…来たか。『強さ』を追う愚かな者よ。",
						"chinese": "…来了吗。追逐‘力量’的愚蠢之人。",
						"french": "...Te voilà. Toi, l'insensé qui poursuis la 'force'.",
						"spanish": "...Has llegado. Tonto que persigue la 'fuerza'.",
						"vietnamese": "...Ngươi đã đến. Kẻ ngốc theo đuổi 'sức mạnh'.",
						"thai": "…มาแล้วสินะ เจ้าคนโง่ที่ไล่ตาม 'ความแข็งแกร่ง'",
						"hindi": "...तो तुम आ गए। शक्ति का पीछा करने वाले मूर्ख।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 하랄드르의 굶주린 영혼인가?",
						"english": "Are you Haraldr's ravenous soul?",
						"japanese": "お前がハラルドルの飢えた魂か？",
						"chinese": "你就是哈拉尔德饥饿的灵魂吗？",
						"french": "Es-tu l'âme affamée d'Haraldr ?",
						"spanish": "¿Eres el alma hambrienta de Haraldr?",
						"vietnamese": "Ngươi là linh hồn đói khát của Haraldr sao?",
						"thai": "เจ้าคือวิญญาณที่หิวกระหายของฮาราลด์หรือ?",
						"hindi": "क्या तुम हेरल्ड की भूखी आत्मा हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "굶주림? 그래. 끝없는 싸움만이 나를 존재하게 한다. 너 또한 그 끝을 보러 왔는가?",
						"english": "Hunger? Yes. Only endless battle allows me to exist. Have you also come to see its end?",
						"japanese": "飢え？そうだ。終わりのない戦いだけが私を存在させる。お前もその終わりを見に来たのか？",
						"chinese": "饥饿？没错。只有无尽的战斗才能让我存在。你也是来看它的终结吗？",
						"french": "Faim ? Oui. Seule une bataille sans fin me permet d'exister. Es-tu aussi venu voir sa fin ?",
						"spanish": "¿Hambre? Sí. Solo la batalla interminable me permite existir. ¿Tú también has venido a ver su final?",
						"vietnamese": "Đói khát? Phải. Chỉ có chiến đấu không ngừng mới giúp ta tồn tại. Ngươi cũng đến để xem kết cục đó sao?",
						"thai": "ความหิวกระหาย? ใช่ มีเพียงการต่อสู้อันไม่รู้จบเท่านั้นที่ทำให้ข้าดำรงอยู่ เจ้าก็มาเพื่อดูจุดจบนั้นหรือ?",
						"hindi": "भूख? हाँ। केवल अंतहीन युद्ध ही मुझे अस्तित्व में रखता है। क्या तुम भी उसका अंत देखने आए हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "널 막겠다.",
						"english": "I'll stop you.",
						"japanese": "お前を止める。",
						"chinese": "我会阻止你。",
						"french": "Je t'arrêterai.",
						"spanish": "Te detendré.",
						"vietnamese": "Ta sẽ ngăn ngươi.",
						"thai": "ข้าจะหยุดเจ้า",
						"hindi": "मैं तुम्हें रोकूंगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국 나약함이… 강함을 꺾는군. 하지만 굶주림은… 사라지지 않아.",
						"english": "Ugh... So weakness... ultimately defeats strength. But this hunger... it won't vanish.",
						"japanese": "ぐっ…結局、弱さが…強さを打ち破るのか。だが、飢えは…消えぬ。",
						"chinese": "咳…终究是弱小…击败了强大。但是这份饥饿…它不会消失。",
						"french": "Urgh… La faiblesse… finit par vaincre la force. Mais cette faim… elle ne disparaîtra pas.",
						"spanish": "Ugh... Así que la debilidad... al final derrota a la fuerza. Pero esta hambre... no desaparecerá.",
						"vietnamese": "Khụ... Cuối cùng, sự yếu đuối... lại đánh bại sức mạnh. Nhưng cơn đói này... sẽ không biến mất.",
						"thai": "อึก… สุดท้ายแล้วความอ่อนแอ… ก็เอาชนะความแข็งแกร่งได้ แต่ความหิวกระหายนี้… มันไม่หายไป",
						"hindi": "उफ़... तो कमज़ोरी... आखिर शक्ति को हरा देती है। लेकिन यह भूख... यह मिटेगी नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝없는 싸움은 끝났어.",
						"english": "The endless battle is over.",
						"japanese": "終わりなき戦いは終わった。",
						"chinese": "无尽的战斗结束了。",
						"french": "Le combat sans fin est terminé.",
						"spanish": "La batalla interminable ha terminado.",
						"vietnamese": "Trận chiến bất tận đã kết thúc.",
						"thai": "การต่อสู้ที่ไม่มีที่สิ้นสุดได้จบลงแล้ว",
						"hindi": "अंतहीन लड़ाई खत्म हो गई है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 사라졌지만, 그 굶주림의 잔재는 여전히 설원에 남아있었다. 하랄드르의 진실은… 아직 다 밝혀지지 않았다. 뿔피리는 다시 침묵했다.",
						"english": "The shadow vanished, but the remnants of its hunger still lingered in the snowfields. The truth of Haraldr… had yet to be fully revealed. The horn fell silent once more.",
						"japanese": "影は消え去ったが、その飢えの残滓は依然として雪原に残っていた。ハラルドルの真実は…まだ完全に明らかになっていなかった。角笛は再び沈黙した。",
						"chinese": "阴影消失了，但其饥饿的残余仍然滞留在雪原。哈拉尔德的真相……尚未完全揭示。号角再次沉寂。",
						"french": "L'ombre s'est évanouie, mais les vestiges de sa faim persistaient encore dans les champs de neige. La vérité sur Haraldr… n'avait pas encore été entièrement révélée. La corne retomba une fois de plus dans le silence.",
						"spanish": "La sombra se desvaneció, pero los restos de su hambre aún perduraban en los campos nevados. La verdad de Haraldr… aún no se había revelado por completo. El cuerno volvió a silenciarse.",
						"vietnamese": "Bóng tối tan biến, nhưng tàn dư của cơn đói vẫn còn vương vấn trên cánh đồng tuyết. Sự thật về Haraldr… vẫn chưa được tiết lộ hoàn toàn. Chiếc tù và lại im lặng một lần nữa.",
						"thai": "เงาได้หายไปแล้ว แต่เศษซากของความหิวกระหายยังคงหลงเหลืออยู่ในทุ่งหิมะ ความจริงของฮาราลเดอร์… ยังไม่ถูกเปิดเผยทั้งหมด แตรเขาสัตว์กลับสู่ความเงียบอีกครั้ง",
						"hindi": "छाया गायब हो गई, लेकिन उसकी भूख के अवशेष अभी भी बर्फ के मैदानों में lingering थे। हरलदर की सच्चाई… अभी तक पूरी तरह से सामने नहीं आई थी। सींग एक बार फिर खामोश हो गया।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 힘. 네 '강함'은 여기까지인가.",
						"english": "Insignificant power. Is this the extent of your 'strength'?",
						"japanese": "くだらない力。お前の「強さ」はここまでか。",
						"chinese": "微不足道的力量。你的“强大”就到此为止了吗？",
						"french": "Puissance insignifiante. Est-ce là l'étendue de ta « force » ?",
						"spanish": "Poder insignificante. ¿Es esta la extensión de tu \"fuerza\"?",
						"vietnamese": "Sức mạnh tầm thường. \"Sức mạnh\" của ngươi chỉ đến đây thôi sao?",
						"thai": "พลังอันไร้ค่า 'ความแข็งแกร่ง' ของเจ้ามีแค่นี้หรือ",
						"hindi": "तुच्छ शक्ति। क्या तुम्हारी 'ताकत' यहीं तक है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ終わってない！",
						"chinese": "还没结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Vẫn chưa kết thúc!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와라. 네가 '강함의 끝'을 볼 때까지.",
						"english": "Return. Until you witness the 'end of strength'.",
						"japanese": "また来い。「強さの果て」を見るまで。",
						"chinese": "再来吧。直到你看到“力量的尽头”。",
						"french": "Reviens. Jusqu'à ce que tu sois témoin de la « fin de la force ».",
						"spanish": "Regresa. Hasta que presencies el \"fin de la fuerza\".",
						"vietnamese": "Quay lại đi. Cho đến khi ngươi chứng kiến 'cái kết của sức mạnh'.",
						"thai": "กลับมาอีกครั้ง จนกว่าเจ้าจะได้เห็น 'จุดสิ้นสุดของความแข็งแกร่ง'",
						"hindi": "वापस आओ। जब तक तुम 'शक्ति का अंत' नहीं देख लेते।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"하랄드르의 뿔피리, 그 애조 띤 선율.",
			"단순한 바람 소리가 아니었다.",
			"이바르는 말했다. 얼어붙은 룬 문양들이 고대 전사의 굶주린 영혼을 가둔 봉인이라고.",
			"강함의 끝을 시험하는 자, 하랄드르. 그의 진실이 얼음 속에서 깨어난다."
		],
		"english": [
			"Haraldr's horn, a mournful melody.",
			"It was no mere wind.",
			"Ivarr said the frozen runes sealed the hungry souls of ancient warriors.",
			"Haraldr, who tests the limits of strength. His truth awakens in the ice."
		],
		"japanese": [
			"ハラルドルの角笛、その哀愁を帯びた旋律。",
			"単なる風の音ではなかった。",
			"イヴァルは言った。凍りついたルーン文字は、古の戦士たちの飢えた魂を閉じ込めた封印だと。",
			"強さの果てを試す者、ハラルドル。彼の真実が氷の中で目覚める。"
		],
		"chinese": [
			"哈拉尔德的号角，那悲伤的旋律。",
			"不仅仅是风声。",
			"伊瓦尔说，那些冰冻的符文是囚禁古老战士饥饿灵魂的封印。",
			"挑战力量极限之人，哈拉尔德。他的真相在冰中苏醒。"
		],
		"french": [
			"La corne de Haraldr, sa mélodie mélancolique.",
			"Ce n'était pas un simple vent.",
			"Ivarr dit que les runes gelées scellaient les âmes affamées d'anciens guerriers.",
			"Haraldr, celui qui met à l'épreuve les limites de la force. Sa vérité s'éveille dans la glace."
		],
		"spanish": [
			"El cuerno de Haraldr, su melodía lúgubre.",
			"No era un simple viento.",
			"Ivarr dijo que las runas congeladas sellaban las almas hambrientas de antiguos guerreros.",
			"Haraldr, quien prueba los límites de la fuerza. Su verdad despierta en el hielo."
		],
		"vietnamese": [
			"Tiếng tù và của Haraldr, giai điệu ai oán ấy.",
			"Đó không chỉ là tiếng gió đơn thuần.",
			"Ivarr nói rằng các ký tự rune đóng băng là phong ấn giam giữ linh hồn đói khát của các chiến binh cổ đại.",
			"Haraldr, người thử thách giới hạn của sức mạnh. Sự thật của hắn thức tỉnh trong băng giá."
		],
		"thai": [
			"เสียงแตรของ Haraldr ท่วงทำนองอันโศกเศร้า.",
			"ไม่ใช่แค่เสียงลมธรรมดา.",
			"Ivarr กล่าวว่าอักษรรูนที่เยือกแข็งคือผนึกที่กักขังดวงวิญญาณกระหายของนักรบโบราณ.",
			"Haraldr ผู้ทดสอบขีดจำกัดแห่งความแข็งแกร่ง ความจริงของเขาตื่นขึ้นในน้ำแข็ง."
		],
		"hindi": [
			"हेराल्ड्र का सींग, उसकी दुखद धुन।",
			"यह केवल हवा की आवाज़ नहीं थी।",
			"इवार ने कहा कि जमे हुए रूण प्राचीन योद्धाओं की भूखी आत्माओं को कैद करने वाली मुहरें थीं।",
			"हेराल्ड्र, जो शक्ति की सीमाओं का परीक्षण करता है। उसकी सच्चाई बर्फ में जागृत होती है।"
		]
	}
} as const;
