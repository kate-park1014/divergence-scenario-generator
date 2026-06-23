export const scenario_forest_luminaflutter_35_01 = {
	"scenario_id": "forest_luminaflutter_35_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 나무들이 하늘을 덮은 숲. 고요했지만, 뭔가 불편했다.",
						"english": "A forest where giant trees covered the sky. It was quiet, yet something felt unsettling.",
						"japanese": "巨大な木々が空を覆う森。静かだったが、何か落ち着かなかった。",
						"chinese": "巨树遮天蔽日的森林。宁静却令人不安。",
						"french": "Une forêt où des arbres géants couvraient le ciel. C'était calme, mais quelque chose était dérangeant.",
						"spanish": "Un bosque donde árboles gigantes cubrían el cielo. Estaba tranquilo, pero algo inquietaba.",
						"vietnamese": "Một khu rừng nơi những cây cổ thụ che phủ cả bầu trời. Yên tĩnh nhưng có gì đó bất an.",
						"thai": "ป่าที่ต้นไม้ใหญ่ปกคลุมท้องฟ้า. สงบเงียบ แต่รู้สึกไม่สบายใจ.",
						"hindi": "विशाल वृक्षों से ढका एक जंगल। शांत था, फिर भी कुछ असहज था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "소문으로만 듣던 세계수 숲이군.",
						"english": "So this is the World Tree Forest I've only heard rumors about.",
						"japanese": "噂に聞いていた世界樹の森か。",
						"chinese": "这就是传闻中的世界树之森啊。",
						"french": "C'est donc la Forêt de l'Arbre-Monde dont je n'avais entendu que des rumeurs.",
						"spanish": "Así que este es el Bosque del Árbol del Mundo del que solo había oído rumores.",
						"vietnamese": "Đây là Rừng Cây Thế Giới mà tôi chỉ nghe nói qua lời đồn.",
						"thai": "นี่คือป่าต้นไม้โลกที่ได้ยินแต่ข่าวลือสินะ.",
						"hindi": "तो यह वही विश्व वृक्ष वन है जिसके बारे में मैंने सिर्फ अफवाहें सुनी थीं।"
					}
				},
				{
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "...오지 말았어야 했는데.",
						"english": "...I shouldn't have come.",
						"japanese": "...来るべきではなかった。",
						"chinese": "...我真不该来。",
						"french": "...Je n'aurais pas dû venir.",
						"spanish": "...No debería haber venido.",
						"vietnamese": "...Lẽ ra tôi không nên đến.",
						"thai": "...ไม่น่ามาเลย.",
						"hindi": "...मुझे नहीं आना चाहिए था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どちら様ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién es usted?",
						"vietnamese": "Anh/Chị là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "아이비. 여기서 식물을 연구하는 사람이에요.",
						"english": "Ivy. I'm a researcher studying plants here.",
						"japanese": "アイビー。ここで植物を研究している者です。",
						"chinese": "艾薇。我是这里研究植物的人。",
						"french": "Ivy. Je suis une chercheuse qui étudie les plantes ici.",
						"spanish": "Ivy. Soy una investigadora de plantas aquí.",
						"vietnamese": "Ivy. Tôi là người nghiên cứu thực vật ở đây.",
						"thai": "ไอวี่. ฉันเป็นนักวิจัยพืชที่นี่.",
						"hindi": "आइवी। मैं यहाँ पौधों पर शोध करने वाली एक व्यक्ति हूँ।"
					}
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "요즘 숲이 이상해요. 기분 나쁜 소문들이 떠돌고.",
						"english": "The forest is strange these days. Unpleasant rumors are spreading.",
						"japanese": "最近、森がおかしいです。嫌な噂が広まっていて。",
						"chinese": "最近森林很奇怪。不好的谣言四处流传。",
						"french": "La forêt est étrange ces derniers temps. De mauvaises rumeurs circulent.",
						"spanish": "El bosque está raro últimamente. Circulan rumores desagradables.",
						"vietnamese": "Gần đây khu rừng thật lạ. Những tin đồn xấu đang lan truyền.",
						"thai": "ช่วงนี้ป่าแปลกไป มีข่าวลือไม่ดีแพร่สะพัด",
						"hindi": "आजकल जंगल अजीब है। बुरी अफवाहें फैल रही हैं。"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "저도 길을 잃은 나방을 봤어요. 환영인 줄 알았는데.",
						"english": "I also saw a lost moth. I thought it was an illusion.",
						"japanese": "私も迷った蛾を見ました。幻かと思ったのに。",
						"chinese": "我也看到了一只迷路的飞蛾。我还以为是幻觉呢。",
						"french": "J'ai aussi vu un papillon de nuit perdu. Je croyais que c'était une illusion.",
						"spanish": "Yo también vi una polilla perdida. Creí que era una ilusión.",
						"vietnamese": "Tôi cũng thấy một con bướm đêm lạc. Cứ tưởng là ảo ảnh.",
						"thai": "ฉันก็เห็นผีเสื้อกลางคืนหลงทาง คิดว่าเป็นภาพลวงตา",
						"hindi": "मैंने भी एक भटकी हुई पतंगिया देखी। मुझे लगा यह एक भ्रम है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "환영이 아닐 거예요. 이 숲의 생명체들이... 변하고 있어요.",
						"english": "It won't be an illusion. The creatures of this forest... are changing.",
						"japanese": "幻ではないでしょう。この森の生き物たちが…変わっています。",
						"chinese": "那不会是幻觉。这片森林的生物们……正在发生变化。",
						"french": "Ce ne sera pas une illusion. Les créatures de cette forêt... changent.",
						"spanish": "No será una ilusión. Las criaturas de este bosque... están cambiando.",
						"vietnamese": "Không phải ảo ảnh đâu. Sinh vật trong khu rừng này... đang thay đổi.",
						"thai": "คงไม่ใช่ภาพลวงตาหรอก สิ่งมีชีวิตในป่านี้...กำลังเปลี่ยนไป",
						"hindi": "यह भ्रम नहीं होगा। इस जंगल के जीव... बदल रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "이 숲은 원래 이렇지 않았어요.",
						"english": "This forest wasn't like this originally.",
						"japanese": "この森は元々こんなじゃなかった。",
						"chinese": "这片森林原本不是这样的。",
						"french": "Cette forêt n'était pas comme ça à l'origine.",
						"spanish": "Este bosque no era así originalmente.",
						"vietnamese": "Khu rừng này vốn không như vậy.",
						"thai": "ป่านี้ไม่เคยเป็นแบบนี้มาก่อน",
						"hindi": "यह जंगल पहले ऐसा नहीं था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떻게 달라졌는데요?",
						"english": "How has it changed?",
						"japanese": "どう変わったんですか？",
						"chinese": "怎么不一样了？",
						"french": "Comment a-t-il changé ?",
						"spanish": "¿Cómo ha cambiado?",
						"vietnamese": "Thay đổi như thế nào ạ?",
						"thai": "มันเปลี่ยนไปยังไง?",
						"hindi": "यह कैसे बदल गया?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "나무들이 마치… 조각된 것처럼 변하고 있어요. 살아있는 게 아니라, 전시물처럼.",
						"english": "The trees are changing as if... carved. Not alive, but like exhibits.",
						"japanese": "木々がまるで…彫刻されたように変わっています。生きているのではなく、展示物のように。",
						"chinese": "树木仿佛……被雕刻了一样。不是活的，更像是展品。",
						"french": "Les arbres changent comme s'ils... étaient sculptés. Pas vivants, mais comme des expositions.",
						"spanish": "Los árboles están cambiando como si... hubieran sido tallados. No vivos, sino como exhibiciones.",
						"vietnamese": "Cây cối đang thay đổi như thể... bị điêu khắc vậy. Không phải sinh vật sống, mà như vật trưng bày.",
						"thai": "ต้นไม้กำลังเปลี่ยนไปราวกับ...ถูกแกะสลัก ไม่ใช่สิ่งมีชีวิต แต่เหมือนของจัดแสดง",
						"hindi": "पेड़ ऐसे बदल रहे हैं जैसे... तराशे गए हों। जीवित नहीं, बल्कि प्रदर्शनियों की तरह।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "전시물…?",
						"english": "Exhibits...?",
						"japanese": "展示物…？",
						"chinese": "展品……？",
						"french": "Des expositions...?",
						"spanish": "¿Exposiciones...?",
						"vietnamese": "Vật trưng bày...?",
						"thai": "ของจัดแสดง...?",
						"hindi": "प्रदर्शनियाँ...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "그리고 이상한 목소리도 들려요. 아름답지만, 사람을 홀리는 소리.",
						"english": "And I hear strange voices. Beautiful, but enchanting voices.",
						"japanese": "そして、奇妙な声も聞こえます。美しいけれど、人を惑わす声。",
						"chinese": "而且还能听到奇怪的声音。很美，却又魅惑人心。",
						"french": "Et j'entends aussi des voix étranges. Belles, mais des voix qui ensorcellent.",
						"spanish": "Y también oigo voces extrañas. Hermosas, pero voces que hechizan a la gente.",
						"vietnamese": "Và tôi cũng nghe thấy những giọng nói kỳ lạ. Đẹp đẽ, nhưng là giọng nói mê hoặc lòng người.",
						"thai": "และฉันก็ได้ยินเสียงแปลกๆ ด้วย สวยงาม แต่เป็นเสียงที่หลอกล่อผู้คน",
						"hindi": "और मुझे अजीब आवाजें भी सुनाई देती हैं। सुंदर, लेकिन मनमोहक आवाजें।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "여기서 보는 모든 것을 믿지 마세요.",
						"english": "Don't believe everything you see here.",
						"japanese": "ここで見るもの全てを信じないでください。",
						"chinese": "不要相信你在这里看到的一切。",
						"french": "Ne croyez pas tout ce que vous voyez ici.",
						"spanish": "No creas todo lo que ves aquí.",
						"vietnamese": "Đừng tin tất cả những gì bạn thấy ở đây.",
						"thai": "อย่าเชื่อทุกสิ่งที่คุณเห็นที่นี่",
						"hindi": "यहाँ जो कुछ भी आप देखते हैं उस पर विश्वास न करें।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환영인가요?",
						"english": "Is it an illusion?",
						"japanese": "幻ですか？",
						"chinese": "是幻觉吗？",
						"french": "Est-ce une illusion ?",
						"spanish": "¿Es una ilusión?",
						"vietnamese": "Là ảo ảnh sao?",
						"thai": "มันเป็นภาพลวงตาหรือเปล่า?",
						"hindi": "क्या यह एक भ्रम है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "환영이 아니면서, 환영 같은 것들이에요.",
						"english": "Not illusions, but like them.",
						"japanese": "幻ではない、幻のようなものだ。",
						"chinese": "不是幻影，却似幻影。",
						"french": "Pas des illusions, mais elles en ont l'aspect.",
						"spanish": "No son ilusiones, pero lo parecen.",
						"vietnamese": "Không phải ảo ảnh, nhưng lại giống thế.",
						"thai": "ไม่ใช่ภาพลวงตา แต่ก็เหมือนกัน",
						"hindi": "भ्रम नहीं, पर भ्रम जैसे।"
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "무슨 소리죠?",
						"english": "What do you mean?",
						"japanese": "何のことだ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "진실을 파헤치려 할수록… 더 깊은 공포에 빠질 거예요.",
						"english": "The more you seek the truth... the deeper you'll sink into terror.",
						"japanese": "真実を追うほど… 深い恐怖に落ちるだろう。",
						"chinese": "越是探寻真相… 就会陷入更深的恐惧。",
						"french": "Plus vous creuserez la vérité… plus vous plongerez dans l'horreur.",
						"spanish": "Mientras más busques la verdad... más profundo caerás en el terror.",
						"vietnamese": "Càng tìm sự thật… càng chìm sâu vào kinh hoàng.",
						"thai": "ยิ่งค้นหาความจริง... ยิ่งตกสู่ความกลัวลึกซึ้งขึ้น",
						"hindi": "जितना सच खोजोगे... उतना ही गहरे खौफ में डूबोगे।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "이제 돌아갈 수 없어요.",
						"english": "We can't go back now.",
						"japanese": "もう引き返せない。",
						"chinese": "回不去了。",
						"french": "Impossible de faire demi-tour.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không thể quay lại.",
						"thai": "กลับไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हट सकते।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…대체 무슨 일이 벌어지고 있는 거죠?",
						"english": "...What in the world is going on?",
						"japanese": "…一体何が起きているんだ？",
						"chinese": "…究竟发生了什么？",
						"french": "…Que se passe-t-il, bon sang ?",
						"spanish": "...¿Qué está pasando aquí?",
						"vietnamese": "...Chuyện gì đang xảy ra thế này?",
						"thai": "...เกิดอะไรขึ้น?",
						"hindi": "…आखिर क्या चल रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "이 숲은… 우리를 먹이로 삼으려는 것 같아요.",
						"english": "This forest... I think it wants to prey on us.",
						"japanese": "この森… 俺たちを餌にしようとしてるみたいだ。",
						"chinese": "这片森林… 好像想把我们当成食物。",
						"french": "Cette forêt... elle veut nous dévorer.",
						"spanish": "Este bosque... parece que nos quiere de presa.",
						"vietnamese": "Khu rừng này… dường như muốn ăn thịt chúng ta.",
						"thai": "ป่านี้... ดูเหมือนจะต้องการเราเป็นเหยื่อ",
						"hindi": "यह जंगल… हमें अपना भोजन बनाना चाहता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "먹이…?",
						"english": "Prey...?",
						"japanese": "餌…？",
						"chinese": "食物…？",
						"french": "Nourriture...?",
						"spanish": "¿Alimento...?",
						"vietnamese": "Mồi…?",
						"thai": "อาหาร...?",
						"hindi": "भोजन…?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "조심해요. 저 위에… '그것'이 기다리고 있어요.",
						"english": "Watch out. Up ahead... 'It' is waiting.",
						"japanese": "気をつけろ。あそこに… 'それ'が待ってる。",
						"chinese": "小心。上面… '那个东西'在等着。",
						"french": "Attention. Là-haut… 'il' nous attend.",
						"spanish": "Cuidado. Arriba... 'Eso' espera.",
						"vietnamese": "Cẩn thận. Ở trên… 'Thứ đó' đang đợi.",
						"thai": "ระวัง. ข้างบน... 'มัน' กำลังรออยู่",
						"hindi": "होशियार रहो। ऊपर… 'वो' इंतजार कर रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 겨우 이 정도라니. 아직 너희는 내 컬렉션의 일부일 뿐.",
						"english": "Hmph... Is that all? You're still just a part of my collection.",
						"japanese": "フン… この程度か。お前たちはまだ私のコレクションの一部に過ぎない。",
						"chinese": "哼… 就这点本事吗？你们不过是我收藏品的一部分。",
						"french": "Hm... C'est tout ce que vous avez ? Vous ne faites encore que partie de ma collection.",
						"spanish": "Mmm... ¿Eso es todo? Todavía sois solo una parte de mi colección.",
						"vietnamese": "Hừm... Chỉ có thế thôi sao? Các ngươi vẫn chỉ là một phần trong bộ sưu tập của ta.",
						"thai": "ฮึ่ม... แค่นี้เองเหรอ? พวกเจ้ายังคงเป็นเพียงส่วนหนึ่งของคอลเลกชันของข้าเท่านั้น.",
						"hindi": "हम्म... बस इतना ही? तुम अभी भी मेरे संग्रह का सिर्फ एक हिस्सा हो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "컬렉션…? 대체 무슨 소리지?",
						"english": "Collection...? What does that even mean?",
						"japanese": "コレクション…？一体どういう意味だ？",
						"chinese": "收藏品…？那到底是什么意思？",
						"french": "Collection...? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Colección...? ¿Qué significa eso?",
						"vietnamese": "Bộ sưu tập...? Rốt cuộc là ý gì?",
						"thai": "คอลเลกชัน...? หมายความว่าอะไรกันแน่?",
						"hindi": "संग्रह...? इसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "곧 알게 될 거다. 이 숲의 진정한 의미를.",
						"english": "You'll find out soon enough. The true meaning of this forest.",
						"japanese": "すぐに分かるだろう。この森の真の意味を。",
						"chinese": "你们很快就会明白。这片森林真正的意义。",
						"french": "Vous le découvrirez bien assez tôt. La véritable signification de cette forêt.",
						"spanish": "Pronto lo descubriréis. El verdadero significado de este bosque.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Ý nghĩa thực sự của khu rừng này.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า. ความหมายที่แท้จริงของป่าแห่งนี้.",
						"hindi": "तुम्हें जल्द ही पता चलेगा। इस जंगल का असली मतलब।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 쓰러졌다. 그러나 숲의 속삭임은 멈추지 않았다.",
						"english": "The unknown enemy fell. But the whispers of the forest did not cease.",
						"japanese": "正体不明の敵は倒れた。しかし、森の囁きは止まらなかった。",
						"chinese": "身份不明的敌人倒下了。然而，森林的低语并未停止。",
						"french": "L'ennemi inconnu est tombé. Mais les murmures de la forêt ne se sont pas tus.",
						"spanish": "El enemigo desconocido cayó. Pero los susurros del bosque no cesaron.",
						"vietnamese": "Kẻ địch vô danh đã gục ngã. Nhưng tiếng thì thầm của rừng vẫn không ngừng.",
						"thai": "ศัตรูที่ไม่รู้จักล้มลง. แต่เสียงกระซิบของป่าก็ยังไม่หยุดนิ่ง.",
						"hindi": "अज्ञात शत्रु गिर गया। लेकिन जंगल की फुसफुसाहट नहीं रुकी।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진실을 향한 탐험은, 이제 시작일 뿐이었다.",
						"english": "The exploration for truth had only just begun.",
						"japanese": "真実を求める探求は、まだ始まったばかりだった。",
						"chinese": "对真相的探索，才刚刚开始。",
						"french": "La quête de la vérité ne faisait que commencer.",
						"spanish": "La exploración en busca de la verdad, apenas había comenzado.",
						"vietnamese": "Cuộc thám hiểm tìm kiếm sự thật, chỉ mới bắt đầu.",
						"thai": "การสำรวจเพื่อค้นหาความจริง เพิ่งจะเริ่มต้นขึ้นเท่านั้น.",
						"hindi": "सत्य की खोज अभी शुरू ही हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "오지 마요! 여긴… 함정이에요!",
						"english": "Stay back! It's... a trap here!",
						"japanese": "来るな！ここは… 罠だ！",
						"chinese": "别过来！这里是… 个陷阱！",
						"french": "Ne venez pas ! C'est… un piège !",
						"spanish": "¡No vengáis! ¡Esto es… una trampa!",
						"vietnamese": "Đừng đến! Đây là… cái bẫy!",
						"thai": "อย่ามา! ที่นี่... กับดัก!",
						"hindi": "मत आना! यहाँ… जाल है!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 숲의 심장에서 나타났다.",
						"english": "A giant shadow appeared from the forest's heart.",
						"japanese": "巨大な影が森の中心から現れた。",
						"chinese": "一个巨大的影子从森林之心显现。",
						"french": "Une ombre gigantesque surgit du cœur de la forêt.",
						"spanish": "Una sombra gigante apareció desde el corazón del bosque.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ trung tâm khu rừng.",
						"thai": "เงาขนาดยักษ์ปรากฏจากใจกลางป่า",
						"hindi": "जंगल के दिल से एक विशाल परछाई उभरी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "ivy",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔구나. 나의 새로운 전시물이여.",
						"english": "You've arrived. My new exhibit.",
						"japanese": "来たか。我が新たな展示物よ。",
						"chinese": "你来了。我的新展品。",
						"french": "Vous voilà. Ma nouvelle exposition.",
						"spanish": "Has llegado. Mi nueva exposición.",
						"vietnamese": "Ngươi đã đến rồi. Vật trưng bày mới của ta.",
						"thai": "เจ้ามาแล้วสินะ. นิทรรศการใหม่ของข้า.",
						"hindi": "तुम आ गए। मेरी नई प्रदर्शनी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you arrange all of this?",
						"japanese": "この全てを仕組んだのはお前か？",
						"chinese": "这一切都是你安排的吗？",
						"french": "C'est vous qui avez tout orchestré ?",
						"spanish": "¿Tú has orquestado todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนจัดฉากทั้งหมดนี้หรือ?",
						"hindi": "क्या यह सब तुमने ही किया है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 숲의 진정한 아름다움을 보여줄 시간이다.",
						"english": "It's time to reveal the true beauty of this forest.",
						"japanese": "この森の真の美しさを見せる時が来た。",
						"chinese": "是时候展现这片森林真正的美丽了。",
						"french": "Il est temps de révéler la véritable beauté de cette forêt.",
						"spanish": "Es hora de mostrar la verdadera belleza de este bosque.",
						"vietnamese": "Đã đến lúc để lộ vẻ đẹp thực sự của khu rừng này.",
						"thai": "ได้เวลาเผยความงามที่แท้จริงของป่าแห่งนี้แล้ว.",
						"hindi": "इस जंगल की सच्ची सुंदरता दिखाने का समय आ गया है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자에 의해 모든 것이 뒤덮였다.",
						"english": "Everything was engulfed by an unknown shadow.",
						"japanese": "全てが正体不明の影に覆われた。",
						"chinese": "一切都被未知的阴影所笼罩。",
						"french": "Tout fut englouti par une ombre inconnue.",
						"spanish": "Todo fue cubierto por una sombra desconocida.",
						"vietnamese": "Mọi thứ đều bị bao phủ bởi một bóng tối vô danh.",
						"thai": "ทุกสิ่งถูกปกคลุมด้วยเงาที่ไม่อาจระบุได้.",
						"hindi": "सब कुछ एक अज्ञात छाया से ढक गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아름다운 절망이로군. 역시 최고의 재료야.",
						"english": "Beautiful despair. Truly the finest material.",
						"japanese": "美しい絶望だな。やはり最高の材料だ。",
						"chinese": "美丽的绝望。果然是最好的素材。",
						"french": "Beau désespoir. Vraiment le meilleur matériau.",
						"spanish": "Hermosa desesperación. Realmente el mejor material.",
						"vietnamese": "Nỗi tuyệt vọng đẹp đẽ. Quả là nguyên liệu tuyệt vời nhất.",
						"thai": "ความสิ้นหวังที่งดงาม. ช่างเป็นวัตถุดิบที่ดีที่สุดจริงๆ.",
						"hindi": "सुंदर निराशा। वास्तव में बेहतरीन सामग्री।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이대로 끝낼 순 없어!",
						"english": "...Can't end it like this!",
						"japanese": "…このままでは終われない！",
						"chinese": "…不能就这样结束！",
						"french": "...Je ne peux pas finir comme ça !",
						"spanish": "...¡No puedo terminar así!",
						"vietnamese": "...Không thể kết thúc như thế này!",
						"thai": "...จะจบแบบนี้ไม่ได้!",
						"hindi": "...मैं इसे ऐसे ख़त्म नहीं कर सकता!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계수 숲. 태고의 존재가 잠든 땅.",
			"겉모습은 아름다웠지만, 모든 것이 뒤틀려 있었다.",
			"이상한 소문. 섬뜩한 환영.",
			"숲은 속삭였다. 진실을 파헤치라고.",
			"그러나 그 속삭임은, 덫의 유혹이었다."
		],
		"english": [
			"World Tree Forest. Land where ancient beings slumber.",
			"Beautiful on the surface, but everything was distorted.",
			"Strange rumors. Chilling apparitions.",
			"The forest whispered. Unearth the truth.",
			"But that whisper was the lure of a trap."
		],
		"japanese": [
			"世界樹の森。太古の存在が眠る地。",
			"外見は美しかったが、すべてが歪んでいた。",
			"奇妙な噂。不気味な幻影。",
			"森は囁いた。真実を暴けと。",
			"しかしその囁きは、罠の誘惑だった。"
		],
		"chinese": [
			"世界树之森。远古存在沉睡之地。",
			"表面美丽，但一切都已扭曲。",
			"奇怪的谣言。阴森的幻影。",
			"森林低语。挖掘真相。",
			"然而那低语，却是陷阱的诱惑。"
		],
		"french": [
			"La Forêt de l'Arbre-Monde. Terre où les êtres antiques sommeillent.",
			"En apparence magnifique, mais tout était déformé.",
			"Étranges rumeurs. Visions glaçantes.",
			"La forêt chuchotait. Déterre la vérité.",
			"Mais ce murmure était l'attrait d'un piège."
		],
		"spanish": [
			"Bosque del Árbol del Mundo. Tierra donde duermen seres ancestrales.",
			"Su apariencia era hermosa, pero todo estaba retorcido.",
			"Rumores extraños. Visiones espeluznantes.",
			"El bosque susurraba. Desentierra la verdad.",
			"Pero ese susurro era la seducción de una trampa."
		],
		"vietnamese": [
			"Rừng Cây Thế Giới. Vùng đất nơi những thực thể cổ xưa đang ngủ say.",
			"Vẻ ngoài xinh đẹp, nhưng mọi thứ đều bị bóp méo.",
			"Tin đồn lạ lùng. Ảo ảnh rợn người.",
			"Rừng thì thầm. Hãy khám phá sự thật.",
			"Nhưng lời thì thầm đó, là sự cám dỗ của một cái bẫy."
		],
		"thai": [
			"ป่าต้นไม้โลก. ดินแดนที่สิ่งมีชีวิตโบราณหลับใหล.",
			"รูปลักษณ์ภายนอกสวยงาม แต่ทุกสิ่งบิดเบี้ยว.",
			"ข่าวลือแปลก ๆ. ภาพหลอนน่าขนลุก.",
			"ป่ากระซิบ. ให้ค้นหาความจริง.",
			"แต่เสียงกระซิบนั้น, คือกับดักล่อลวง."
		],
		"hindi": [
			"विश्व वृक्ष वन। वह भूमि जहाँ प्राचीन जीव सोए हुए हैं।",
			"ऊपर से सुंदर, पर सब कुछ विकृत था।",
			"अजीब अफवाहें। भयानक प्रेत।",
			"जंगल फुसफुसाया। सत्य को उजागर करो।",
			"लेकिन वह फुसफुसाहट, एक जाल का प्रलोभन थी।"
		]
	}
} as const;
