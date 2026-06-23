export const scenario_forest_chloris_7_02 = {
	"scenario_id": "forest_chloris_7_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
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
					"content": {
						"korean": "겹겹이 쌓인 나뭇가지 사이로 빛 한 줄기조차 허락되지 않는 곳. 길은 끊없이 이어졌다.",
						"english": "A place where not even a sliver of light pierces through the dense canopy. The path stretched endlessly.",
						"japanese": "幾重にも重なる枝の間から、一筋の光さえ許されない場所。道は果てしなく続いていた。",
						"chinese": "枝叶层层叠叠，连一丝光线都无法穿透之地。道路无尽延伸。",
						"french": "Un endroit où pas même une lueur de lumière ne traverse le feuillage dense. Le chemin s'étendait à l'infini.",
						"spanish": "Un lugar donde ni un rayo de luz se abría paso entre las densas ramas. El camino se extendía sin fin.",
						"vietnamese": "Nơi ánh sáng không thể xuyên qua những tán cây rậm rạp. Con đường vẫn kéo dài vô tận.",
						"thai": "สถานที่ที่แสงแม้เพียงน้อยนิดก็ไม่อาจส่องผ่านกิ่งไม้ที่หนาทึบ ทางยังคงทอดยาวไม่สิ้นสุด",
						"hindi": "एक ऐसी जगह जहाँ घनी शाखाओं के बीच से प्रकाश की एक किरण भी नहीं गुजर पाती। रास्ता अंतहीन फैला था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 제자리잖아… 돌고 돌아 여기라고?",
						"english": "Back here again... After all that, I'm just back to square one?",
						"japanese": "またここか… 結局、振り出しに戻っただけだと？",
						"chinese": "又回到这里了……绕了一圈还是这儿？",
						"french": "Encore ici... Après tout ça, je suis revenu au point de départ ?",
						"spanish": "¿Otra vez aquí...? ¿Dar vueltas para terminar en el mismo sitio?",
						"vietnamese": "Lại chỗ này nữa rồi... Quay đi quay lại vẫn là đây ư?",
						"thai": "กลับมาที่เดิมอีกแล้ว... วนไปวนมาก็ยังที่นี่หรือไง?",
						"hindi": "फिर से यहीं... घूम-फिरकर यहीं वापस आ गया?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장, 미로에 갇힌 기분이야.",
						"english": "Damn it, I feel like I'm trapped in a maze.",
						"japanese": "くそ、まるで迷路に閉じ込められた気分だ。",
						"chinese": "该死，感觉被困在迷宫里了。",
						"french": "Bon sang, j'ai l'impression d'être piégé dans un labyrinthe.",
						"spanish": "Maldita sea, me siento atrapado en un laberinto.",
						"vietnamese": "Chết tiệt, cứ như bị mắc kẹt trong mê cung vậy.",
						"thai": "ให้ตายสิ ฉันรู้สึกเหมือนถูกขังอยู่ในเขาวงกต",
						"hindi": "धिक्कार है, मुझे लगता है कि मैं एक भूलभुलैया में फंसा हुआ हूँ।"
					},
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"speaker": "fern",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길을 잃으셨나요? 제가 도와드릴 수 있습니다.",
						"english": "Are you lost? I can help you.",
						"japanese": "道に迷われましたか？私がお手伝いできます。",
						"chinese": "你迷路了吗？我可以帮你。",
						"french": "Vous êtes perdu ? Je peux vous aider.",
						"spanish": "¿Se ha perdido? Puedo ayudarle.",
						"vietnamese": "Bạn bị lạc đường à? Tôi có thể giúp bạn.",
						"thai": "คุณหลงทางหรือเปล่า? ฉันช่วยคุณได้นะ",
						"hindi": "क्या आप रास्ता भटक गए हैं? मैं आपकी मदद कर सकता हूँ।"
					},
					"speaker": "fern"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "걱정 마세요. 숲의 약초꾼인 저는 이 길을 누구보다 잘 압니다.",
						"english": "Don't worry. As the forest's herbalist, I know this path better than anyone.",
						"japanese": "ご心配なく。森の薬草師である私が、この道を誰よりもよく知っています。",
						"chinese": "别担心。作为森林的药草师，我比任何人都了解这条路。",
						"french": "Ne vous inquiétez pas. En tant qu'herboriste de la forêt, je connais ce chemin mieux que quiconque.",
						"spanish": "No se preocupe. Como herbolario del bosque, conozco este camino mejor que nadie.",
						"vietnamese": "Đừng lo. Là người hái thuốc của rừng, tôi biết con đường này rõ hơn bất cứ ai.",
						"thai": "ไม่ต้องห่วง ในฐานะนักสมุนไพรแห่งป่า ฉันรู้จักเส้นทางนี้ดีกว่าใครๆ",
						"hindi": "चिंता मत करो। जंगल के जड़ी-बूटी विक्रेता के रूप में, मैं इस रास्ते को किसी और से बेहतर जानता हूँ।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말 출구로 가는 길 맞아? 뭔가 이상해…",
						"english": "Is this really the way out? Something feels off...",
						"japanese": "本当に出口への道なの？なんだかおかしい…",
						"chinese": "这真的是通往出口的路吗？感觉有点不对劲……",
						"french": "C'est vraiment la sortie ? Il y a quelque chose d'étrange...",
						"spanish": "¿De verdad es el camino de salida? Algo no me cuadra...",
						"vietnamese": "Đây thực sự là đường ra sao? Có gì đó không đúng...",
						"thai": "นี่คือทางออกจริงเหรอ? รู้สึกแปลกๆ...",
						"hindi": "क्या यह वाकई बाहर निकलने का रास्ता है? कुछ अजीब लग रहा है..."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 겁니다. 숲의 진정한 의지를.",
						"english": "You will soon learn the true will of the forest.",
						"japanese": "間もなく知ることになるでしょう。森の真の意思を。",
						"chinese": "你很快就会明白，森林真正的意志。",
						"french": "Vous apprendrez bientôt la véritable volonté de la forêt.",
						"spanish": "Pronto conocerás la verdadera voluntad del bosque.",
						"vietnamese": "Ngươi sẽ sớm biết được ý chí thật sự của khu rừng.",
						"thai": "คุณจะได้รู้ในไม่ช้า... เจตจำนงที่แท้จริงของป่า",
						"hindi": "आप जल्द ही जंगल की सच्ची इच्छा जान जाएंगे।"
					},
					"speaker": "fern",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "눈앞에서 작은 나비가 사라졌다. 갈림길. 익숙한 풍경이었다.",
						"english": "A small butterfly vanished before my eyes. A fork in the path. A familiar scene.",
						"japanese": "目の前で小さな蝶が消えた。分かれ道。見慣れた風景だった。",
						"chinese": "一只小蝴蝶在眼前消失了。分岔路。熟悉的景象。",
						"french": "Un petit papillon disparut sous mes yeux. Un carrefour. Un paysage familier.",
						"spanish": "Una pequeña mariposa desapareció ante mis ojos. Una encrucijada. Un paisaje familiar.",
						"vietnamese": "Một con bướm nhỏ biến mất trước mắt. Ngã rẽ. Một khung cảnh quen thuộc.",
						"thai": "ผีเสื้อตัวน้อยหายไปต่อหน้าต่อตา ทางแยก ภาพที่คุ้นเคย",
						"hindi": "एक छोटी तितली मेरी आँखों के सामने गायब हो गई। एक काँटा। एक परिचित दृश्य।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴… 아까 지나온 곳이잖아! 또 속인 거야?",
						"english": "This is... where we just came from! Are you tricking me again?",
						"japanese": "ここ… さっき通った場所じゃないか！また騙したの？",
						"chinese": "这里… 不是刚才经过的地方吗！又骗我？",
						"french": "C'est... l'endroit d'où nous venons ! Encore une fois, tu m'as trompé ?",
						"spanish": "Esto es... ¡por donde acabamos de pasar! ¿Me engañaste de nuevo?",
						"vietnamese": "Đây... không phải là nơi vừa đi qua sao! Lại lừa tôi à?",
						"thai": "นี่มัน... ที่ที่เราเพิ่งผ่านมานี่! หลอกฉันอีกแล้วเหรอ?",
						"hindi": "यह वही जगह है... जहाँ से हम अभी-अभी आए हैं! क्या तुम मुझे फिर से धोखा दे रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥미로운 반응이군요. 길은 항상 변합니다.",
						"english": "An interesting reaction. The path always changes.",
						"japanese": "興味深い反応ですね。道は常に変化します。",
						"chinese": "有趣的反应。路途总是变化的。",
						"french": "Une réaction intéressante. Le chemin change toujours.",
						"spanish": "Una reacción interesante. El camino siempre cambia.",
						"vietnamese": "Một phản ứng thú vị. Con đường luôn thay đổi.",
						"thai": "ปฏิกิริยาที่น่าสนใจ เส้นทางเปลี่ยนแปลงเสมอ",
						"hindi": "एक दिलचस्प प्रतिक्रिया। रास्ता हमेशा बदलता रहता है।"
					},
					"speaker": "fern",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "당신이 말한 출구는 대체 어디야? 어디로 가는 길인데!",
						"english": "Where is the exit you spoke of? Where does this path lead?",
						"japanese": "あなたが言った出口は一体どこなの？どこへ行く道なの！",
						"chinese": "你说的出口到底在哪里？这条路通向哪里！",
						"french": "Où est la sortie dont tu parlais ? Où mène ce chemin !",
						"spanish": "¿Dónde está la salida de la que hablaste? ¿Adónde lleva este camino?",
						"vietnamese": "Lối ra mà ngươi nói rốt cuộc ở đâu? Con đường này dẫn đi đâu!",
						"thai": "ทางออกที่คุณพูดถึงอยู่ที่ไหนกันแน่? เส้นทางนี้นำไปที่ไหน!",
						"hindi": "जिस निकास के बारे में तुमने बताया था, वह कहाँ है? यह रास्ता कहाँ जाता है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "깊이 들어갈수록, 답은 명확해집니다.",
						"english": "The deeper you go, the clearer the answer becomes.",
						"japanese": "深く進むほど、答えは明確になります。",
						"chinese": "越是深入，答案就越是清晰。",
						"french": "Plus vous avancez, plus la réponse devient claire.",
						"spanish": "Cuanto más te adentras, más clara se vuelve la respuesta.",
						"vietnamese": "Càng đi sâu, câu trả lời càng rõ ràng.",
						"thai": "ยิ่งลึกเข้าไปเท่าไร คำตอบก็ยิ่งชัดเจนขึ้นเท่านั้น",
						"hindi": "जितना गहरा जाओगे, उत्तर उतना ही स्पष्ट होता जाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 덩굴의 잔해가 길을 막고 있었다. 흡수된 식물들의 고통이 느껴졌다.",
						"english": "The remnants of a giant vine blocked the path. The agony of absorbed plants could be felt.",
						"japanese": "巨大な蔓の残骸が道を塞いでいた。吸収された植物たちの苦痛が感じられた。",
						"chinese": "巨大的藤蔓残骸挡住了去路。能感觉到被吸收植物的痛苦。",
						"french": "Les vestiges d'une vigne gigantesque bloquaient le chemin. On pouvait sentir l'agonie des plantes absorbées.",
						"spanish": "Los restos de una gigantesca enredadera bloqueaban el camino. Se podía sentir la agonía de las plantas absorbidas.",
						"vietnamese": "Tàn tích của một dây leo khổng lồ chặn đường. Cảm nhận được sự đau đớn của những thực vật bị hấp thụ.",
						"thai": "ซากเถาวัลย์ยักษ์ขวางทางอยู่ สัมผัสได้ถึงความเจ็บปวดของพืชที่ถูกดูดซับ",
						"hindi": "एक विशाल बेल के अवशेष रास्ते को रोके हुए थे। अवशोषित पौधों की पीड़ा महसूस की जा सकती थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건 미로가 아니야… 갇힌 거야. 영원히 여기서 돌게 될 거라고!",
						"english": "This isn't a maze... I'm trapped. I'll be stuck here forever!",
						"japanese": "これは迷路じゃない… 閉じ込められたんだ。永遠にここで彷徨うことになる！",
						"chinese": "这不是迷宫… 我被困住了。会永远在这里打转的！",
						"french": "Ce n'est pas un labyrinthe... Je suis piégé. Je vais rester coincé ici pour toujours !",
						"spanish": "Esto no es un laberinto... Estoy atrapado. ¡Voy a dar vueltas aquí para siempre!",
						"vietnamese": "Đây không phải mê cung... Tôi bị mắc kẹt rồi. Sẽ mãi mãi loanh quanh ở đây thôi!",
						"thai": "นี่ไม่ใช่เขาวงกต... ฉันติดกับแล้ว ฉันจะต้องวนเวียนอยู่ที่นี่ตลอดไป!",
						"hindi": "यह कोई भूलभुलैया नहीं है... मैं फँस गया हूँ। मैं यहाँ हमेशा के लिए भटकता रहूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "영원히… 나쁘지 않지 않습니까? 이 숲의 일부가 되는 것.",
						"english": "Forever... isn't that bad? Becoming a part of this forest.",
						"japanese": "永遠に… 悪くないでしょう？この森の一部になること。",
						"chinese": "永远… 难道不好吗？成为这片森林的一部分。",
						"french": "Pour toujours... n'est-ce pas si mal ? Devenir une partie de cette forêt.",
						"spanish": "Para siempre... ¿no es tan malo? Convertirse en parte de este bosque.",
						"vietnamese": "Mãi mãi... không tệ sao? Trở thành một phần của khu rừng này.",
						"thai": "ตลอดไป... ไม่แย่หรอกหรือ? การได้เป็นส่วนหนึ่งของป่านี้",
						"hindi": "हमेशा के लिए... क्या यह बुरा नहीं है? इस जंगल का हिस्सा बनना।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 처음부터 우리를 속일 생각이었어!",
						"english": "You intended to deceive us from the very beginning!",
						"japanese": "あなたは最初から私たちを騙すつもりだった！",
						"chinese": "你从一开始就打算欺骗我们！",
						"french": "Tu avais l'intention de nous tromper dès le début !",
						"spanish": "¡Tú tenías la intención de engañarnos desde el principio!",
						"vietnamese": "Ngươi đã có ý định lừa dối chúng ta ngay từ đầu!",
						"thai": "คุณตั้งใจจะหลอกลวงเราตั้งแต่แรก!",
						"hindi": "तुमने हमें शुरुआत से ही धोखा देने का इरादा किया था!"
					},
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "…제 역할은 여기까지입니다.",
						"english": "…My role ends here.",
						"japanese": "…私の役目はここまでです。",
						"chinese": "…我的职责到此为止。",
						"french": "…Mon rôle s'arrête ici.",
						"spanish": "…Mi papel termina aquí.",
						"vietnamese": "…Vai trò của tôi kết thúc ở đây.",
						"thai": "…หน้าที่ของฉันสิ้นสุดลงเพียงเท่านี้",
						"hindi": "…मेरी भूमिका यहीं समाप्त होती है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 속삭임이 더욱 강해졌다. 혼란스러운 멜로디가 광기로 변하고 있었다.",
						"english": "The forest's whispers grew louder. The chaotic melody was turning into madness.",
						"japanese": "森の囁きはさらに強くなった。混乱した旋律は狂気へと変わっていった。",
						"chinese": "森林的低语愈发强烈。混乱的旋律正逐渐变为疯狂。",
						"french": "Les murmures de la forêt s'intensifièrent. La mélodie chaotique se transformait en folie.",
						"spanish": "Los susurros del bosque se hicieron más fuertes. La melodia caótica se estaba convirtiendo en locura.",
						"vietnamese": "Tiếng thì thầm của rừng cây ngày càng lớn. Giai điệu hỗn loạn đang dần biến thành điên cuồng.",
						"thai": "เสียงกระซิบของป่ายิ่งดังขึ้น ท่วงทำนองที่วุ่นวายกำลังกลายเป็นความบ้าคลั่ง",
						"hindi": "जंगल की फुसफुसाहट और तेज़ हो गई। अराजक धुन पागलपन में बदल रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "좌절해라. 분노해라. 그 모든 감정이 숲의 영양분이 될지니.",
						"english": "Despair. Rage. All those emotions will become nourishment for the forest.",
						"japanese": "絶望しろ。怒れ。その全ての感情が森の栄養となるだろう。",
						"chinese": "绝望吧。愤怒吧。所有这些情感都将成为森林的养分。",
						"french": "Désespérez. Enragez-vous. Toutes ces émotions deviendront la nourriture de la forêt.",
						"spanish": "Desespera. Enfurece. Todas esas emociones se convertirán en alimento para el bosque.",
						"vietnamese": "Tuyệt vọng đi. Tức giận đi. Tất cả những cảm xúc đó sẽ trở thành dưỡng chất cho khu rừng.",
						"thai": "จงสิ้นหวัง จงโกรธเกรี้ยว อารมณ์เหล่านั้นทั้งหมดจะกลายเป็นอาหารบำรุงป่า",
						"hindi": "निराश हो। क्रोधित हो। वे सभी भावनाएँ जंगल के लिए पोषण बन जाएँगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝까지 속을 수는 없어. 다시 돌아갈 거야!",
						"english": "...I can't be fooled forever. I'm going back!",
						"japanese": "…最後まで騙されてたまるか。戻るぞ！",
						"chinese": "…我不能一直被骗下去。我要回去！",
						"french": "...Je ne peux pas être dupe éternellement. Je retourne !",
						"spanish": "...No puedo seguir siendo engañado. ¡Volveré!",
						"vietnamese": "...Không thể bị lừa mãi được. Tôi sẽ quay lại!",
						"thai": "...จะถูกหลอกตลอดไปไม่ได้หรอก! ฉันจะกลับไป!",
						"hindi": "...कब तक बेवकूफ बनता रहूंगा? मैं वापस जाऊंगा!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 뿌리가 길을 막았다. 눈앞에 나타난 건… 이 숲의 수호자였다.",
						"english": "A giant root blocked the path. What appeared before me was… the guardian of this forest.",
						"japanese": "巨大な根が道を塞いだ。目の前に現れたのは…この森の守護者だった。",
						"chinese": "巨大的树根挡住了去路。出现在眼前的…是这片森林的守护者。",
						"french": "Une racine gigantesque bloquait le chemin. Ce qui apparut devant moi était… le gardien de cette forêt.",
						"spanish": "Una raíz gigante bloqueó el camino. Lo que apareció ante mí fue… el guardián de este bosque.",
						"vietnamese": "Một rễ cây khổng lồ chặn đường. Thứ xuất hiện trước mắt tôi là… người bảo vệ khu rừng này.",
						"thai": "รากไม้ขนาดยักษ์ขวางทาง สิ่งที่ปรากฏต่อหน้าคือ… ผู้พิทักษ์แห่งป่านี้",
						"hindi": "एक विशाल जड़ ने रास्ता रोक दिया। जो मेरे सामने प्रकट हुआ वह… इस जंगल का संरक्षक था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 벗어나려 할수록, 숲은 더 깊이 잠식한다.",
						"english": "Fools… The more you try to escape, the deeper the forest engulfs you.",
						"japanese": "愚かな者たちめ… 逃れようとするほど、森はより深く侵食する。",
						"chinese": "愚蠢的家伙… 越是想要逃离，森林就会侵蚀得越深。",
						"french": "Fous… Plus vous essayez de vous échapper, plus la forêt vous engloutit profondément.",
						"spanish": "Necios… Cuanto más intentáis escapar, más profundamente os envuelve el bosque.",
						"vietnamese": "Đồ ngốc… Càng cố gắng thoát ra, khu rừng càng nhấn chìm các ngươi sâu hơn.",
						"thai": "พวกโง่เง่า… ยิ่งพยายามหนีเท่าไหร่ ป่าก็จะยิ่งกลืนกินพวกเจ้าลึกขึ้นเท่านั้น",
						"hindi": "मूर्खों… जितना तुम भागने की कोशिश करोगे, जंगल तुम्हें उतना ही गहरा निगलेगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜! 더 이상 속지 않아!",
						"english": "Get out of my way! I won't be fooled anymore!",
						"japanese": "どけ！もう二度と騙されない！",
						"chinese": "让开！我不会再被骗了！",
						"french": "Écarte-toi ! Je ne me laisserai plus tromper !",
						"spanish": "¡Quítate de mi camino! ¡No me engañarás más!",
						"vietnamese": "Tránh ra! Ta sẽ không bị lừa nữa!",
						"thai": "หลีกไป! ฉันจะไม่ถูกหลอกอีกแล้ว!",
						"hindi": "मेरे रास्ते से हट जाओ! मैं अब और मूर्ख नहीं बनूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무의미한 저항… 너희는 결국 숲의 일부가 될 것이다.",
						"english": "Meaningless resistance… You will eventually become part of the forest.",
						"japanese": "無意味な抵抗… お前たちは結局、森の一部となるだろう。",
						"chinese": "毫无意义的抵抗… 你们终将成为森林的一部分。",
						"french": "Résistance inutile… Vous finirez par faire partie de la forêt.",
						"spanish": "Resistencia inútil… Eventualmente te convertirás en parte del bosque.",
						"vietnamese": "Sự phản kháng vô nghĩa… Các ngươi cuối cùng sẽ trở thành một phần của khu rừng.",
						"thai": "การต่อต้านที่ไร้ความหมาย… ในที่สุดพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "अर्थहीन प्रतिरोध… तुम अंततः जंगल का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 조화는 아직 멀었다.",
						"english": "…Is this all you've got? True harmony is still far off.",
						"japanese": "…この程度か。真の調和はまだ遠い。",
						"chinese": "…就这点本事吗？真正的和谐还很遥远。",
						"french": "…N'est-ce que cela ? La vraie harmonie est encore lointaine.",
						"spanish": "…¿Esto es todo lo que tienes? La verdadera armonía aún está lejos.",
						"vietnamese": "…Chỉ có vậy thôi sao. Sự hòa hợp thực sự vẫn còn xa vời.",
						"thai": "…แค่นี้เองเหรอ? ความกลมกลืนที่แท้จริงยังอีกไกล",
						"hindi": "…क्या बस इतना ही? सच्चा सामंजस्य अभी बहुत दूर है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조화? 그건 그저 파멸일 뿐이야!",
						"english": "Harmony? That's just destruction!",
						"japanese": "調和？それはただの破滅だ！",
						"chinese": "和谐？那只是毁灭罢了！",
						"french": "Harmonie ? Ce n'est que destruction !",
						"spanish": "¿Armonía? ¡Eso es solo destrucción!",
						"vietnamese": "Hòa hợp? Đó chỉ là sự hủy diệt!",
						"thai": "ความกลมกลืน? นั่นมันแค่การทำลายล้าง!",
						"hindi": "सामंजस्य? वह तो बस विनाश है!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 수호자 뒤로 새로운 길이 열렸다. 하지만 여전히 불안한 숲의 속삭임이 들려왔다.",
						"english": "A new path opened behind the fallen guardian. But the uneasy whispers of the forest still lingered.",
						"japanese": "倒れた守護者の後ろに新たな道が開けた。しかし、依然として不安な森の囁きが聞こえてきた。",
						"chinese": "倒下的守护者身后开辟了一条新路。但森林不安的低语依然回荡。",
						"french": "Un nouveau chemin s'ouvrit derrière le gardien tombé. Mais les murmures inquiétants de la forêt persistaient.",
						"spanish": "Un nuevo camino se abrió detrás del guardián caído. Pero los inquietantes susurros del bosque aún persistían.",
						"vietnamese": "Một con đường mới mở ra phía sau người bảo vệ đã ngã xuống. Nhưng những tiếng thì thầm bất an của rừng cây vẫn còn vương vấn.",
						"thai": "เส้นทางใหม่เปิดออกเบื้องหลังผู้พิทักษ์ที่ล้มลง แต่เสียงกระซิบอันไม่สบายใจของป่ายังคงได้ยินอยู่",
						"hindi": "गिरे हुए संरक्षक के पीछे एक नया रास्ता खुल गया। लेकिन जंगल की बेचैन फुसफुसाहट अभी भी बनी हुई थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 거짓말쟁이다. 아름다운 미소 뒤에 독을 숨긴 채.",
			"길은 끝없이 이어지고, 발걸음은 제자리로 돌아왔다.",
			"…누군가 속삭인다. '이 길을 아는 자가 있다고.'",
			"과연 그 길은 구원일까, 더 깊은 미궁으로의 초대일까?"
		],
		"english": [
			"The forest is a liar. Hiding poison behind a beautiful smile.",
			"The path stretched endlessly, yet my steps led me back to where I began.",
			"...Someone whispers. \"Someone knows this path.\"",
			"Is that path salvation, or an invitation to a deeper labyrinth?"
		],
		"japanese": [
			"森は嘘つきだ。美しい笑顔の裏に毒を隠している。",
			"道は果てしなく続き、足取りは元に戻った。",
			"…誰かが囁く。「この道を知る者がいると。」",
			"果たしてその道は救いか、それともより深き迷宮への誘いか？"
		],
		"chinese": [
			"森林是个骗子。美丽的笑容背后藏着毒。",
			"道路无尽延伸，我的脚步却回到了原地。",
			"……有人低语。“有人知道这条路。”",
			"那条路究竟是救赎，还是通往更深迷宫的邀请？"
		],
		"french": [
			"La forêt est une menteuse. Elle cache son poison derrière un beau sourire.",
			"Le chemin s'étendait à l'infini, mais mes pas me ramenaient toujours au point de départ.",
			"...Quelqu'un murmure. \"Quelqu'un connaît ce chemin.\"",
			"Ce chemin est-il le salut, ou une invitation vers un labyrinthe plus profond ?"
		],
		"spanish": [
			"El bosque es un mentiroso. Oculta veneno tras una hermosa sonrisa.",
			"El camino se extendía sin fin, pero mis pasos regresaban al mismo lugar.",
			"...Alguien susurra. \"Hay quien conoce este camino.\"",
			"¿Será ese camino la salvación o una invitación a un laberinto más profundo?"
		],
		"vietnamese": [
			"Rừng là kẻ dối trá. Giấu thuốc độc sau nụ cười xinh đẹp.",
			"Con đường trải dài vô tận, nhưng bước chân tôi lại trở về nơi bắt đầu.",
			"...Ai đó thì thầm. \"Có người biết con đường này.\"",
			"Liệu con đường đó là sự cứu rỗi, hay lời mời gọi vào một mê cung sâu hơn?"
		],
		"thai": [
			"ป่าคือคนโกหก ซ่อนพิษไว้เบื้องหลังรอยยิ้มที่สวยงาม",
			"หนทางทอดยาวไม่สิ้นสุด แต่ก้าวเท้าของฉันกลับมาที่เดิม",
			"...มีใครบางคนกระซิบ \"มีผู้รู้เส้นทางนี้\"",
			"เส้นทางนั้นคือทางรอด หรือคำเชิญชวนสู่เขาวงกตที่ลึกกว่ากันแน่?"
		],
		"hindi": [
			"जंगल एक झूठा है। एक सुंदर मुस्कान के पीछे जहर छिपा रहा है।",
			"रास्ता अनंत तक फैला था, फिर भी मेरे कदम मुझे वहीं वापस ले आए जहाँ से मैंने शुरू किया था।",
			"...कोई फुसफुसाता है। \"कोई है जो यह रास्ता जानता है।\"",
			"क्या वह रास्ता मुक्ति है, या एक गहरे भूलभुलैया का निमंत्रण?"
		]
	}
} as const;
