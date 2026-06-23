export const scenario_snowy_rimedirge_9_03 = {
	"scenario_id": "snowy_rimedirge_9_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"content": {
						"korean": "눈보라가 몰아치는 설원, 희미한 발자국만이 길을 안내했다.",
						"english": "In the blizzard-swept snowfield, only faint footprints guided the way.",
						"japanese": "吹雪の吹き荒れる雪原、かすかな足跡だけが道を示していた。",
						"chinese": "在暴风雪肆虐的雪原，只有模糊的脚印指引着道路。",
						"french": "Dans la plaine enneigée balayée par le blizzard, seules de faibles empreintes guidaient le chemin.",
						"spanish": "En el campo nevado azotado por la ventisca, solo débiles huellas guiaban el camino.",
						"vietnamese": "Trên cánh đồng tuyết bị bão tuyết càn quét, chỉ có những dấu chân mờ nhạt dẫn đường.",
						"thai": "ในทุ่งหิมะที่พายุหิมะโหมกระหน่ำ มีเพียงรอยเท้าจางๆ เท่านั้นที่นำทาง.",
						"hindi": "बर्फ़ीले तूफ़ान से घिरे बर्फीले मैदान में, केवल धुंधले पदचिह्न ही रास्ता दिखा रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 길의 끝을 아는 건 나뿐이야. 따라와.",
						"english": "Only I know the end of this path. Follow me.",
						"japanese": "この道の終わりを知っているのは私だけだ。ついて来い。",
						"chinese": "只有我才知道这条路的尽头。跟着我。",
						"french": "Seul moi connais la fin de ce chemin. Suis-moi.",
						"spanish": "Solo yo conozco el final de este camino. Sígueme.",
						"vietnamese": "Chỉ mình tôi biết cuối con đường này. Đi theo tôi.",
						"thai": "มีแค่ฉันเท่านั้นที่รู้จุดสิ้นสุดของเส้นทางนี้ ตามมา.",
						"hindi": "इस रास्ते का अंत केवल मैं जानता हूँ। मेरे पीछे आओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…날 도와줄 건가요?",
						"english": "...Will you help me?",
						"japanese": "…私を助けてくれるのですか？",
						"chinese": "…你会帮我吗？",
						"french": "…Vous allez m'aider ?",
						"spanish": "¿...Me ayudarás?",
						"vietnamese": "...Bạn sẽ giúp tôi chứ?",
						"thai": "...คุณจะช่วยฉันไหม?",
						"hindi": "...क्या तुम मेरी मदद करोगे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "물론이지. 이 지긋지긋한 미로에서 벗어나게 해줄게.",
						"english": "Of course. I'll get you out of this dreadful maze.",
						"japanese": "もちろん。このうんざりするような迷路から抜け出させてやるよ。",
						"chinese": "当然。我会让你摆脱这个该死的迷宫的。",
						"french": "Bien sûr. Je te sortirai de ce maudit labyrinthe.",
						"spanish": "Por supuesto. Te sacaré de este laberinto espantoso.",
						"vietnamese": "Tất nhiên rồi. Tôi sẽ đưa bạn thoát khỏi mê cung đáng sợ này.",
						"thai": "แน่นอน ฉันจะพาเธอออกจากเขาวงกตที่น่าเบื่อหน่ายนี้เอง.",
						"hindi": "बेशक। मैं तुम्हें इस भयानक भूलभुलैया से बाहर निकालूँगा।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "이쪽으로. 길이 보이지 않지만, 확신해.",
						"english": "This way. I can't see the path, but I'm certain.",
						"japanese": "こっちだ。道は見えないが、確信している。",
						"chinese": "这边走。虽然看不到路，但我很确定。",
						"french": "Par ici. Je ne vois pas le chemin, but j'en suis certain.",
						"spanish": "Por aquí. No veo el camino, pero estoy seguro.",
						"vietnamese": "Lối này. Tôi không thể thấy đường, nhưng tôi chắc chắn.",
						"thai": "ทางนี้ ฉันมองไม่เห็นทาง แต่ฉันแน่ใจ.",
						"hindi": "इधर से। रास्ता नहीं दिख रहा, लेकिन मुझे यकीन है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 지나쳤던 곳 같은데.",
						"english": "It feels like... we just passed this spot.",
						"japanese": "たった今…通り過ぎた場所のような気がする。",
						"chinese": "这地方…我们刚才好像经过了。",
						"french": "On dirait… qu'on vient de passer par ici.",
						"spanish": "Parece que... acabamos de pasar por aquí.",
						"vietnamese": "Hình như... chúng ta vừa đi qua chỗ này rồi.",
						"thai": "รู้สึกเหมือน... เราเพิ่งผ่านที่นี่มาเลย.",
						"hindi": "लगता है... हम अभी-अभी इस जगह से गुज़रे हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "귓가에 애잔하고 익숙한 멜로디가 희미하게 들려왔다. 소름 끼치도록.",
						"english": "A hauntingly familiar melody faintly echoed in my ears. Chillingly so.",
						"japanese": "耳元に哀切で聞き慣れたメロディーが微かに聞こえてきた。鳥肌が立つほどに。",
						"chinese": "耳边隐约传来哀婉又熟悉的旋律。令人毛骨悚然。",
						"french": "Une mélodie familière et mélancolique résonnait faiblement à mes oreilles. Étrangement.",
						"spanish": "Una melodía melancólica y familiar resonó débilmente en mis oídos. Escalofriantemente.",
						"vietnamese": "Một giai điệu quen thuộc và buồn bã khẽ vang lên bên tai. Rợn người.",
						"thai": "ท่วงทำนองที่คุ้นเคยและเศร้าสร้อยแว่วมาเบาๆ ที่ข้างหู อย่างน่าขนลุก",
						"hindi": "कानों में एक दर्दभरी और जानी-पहचानी धुन धुंधली सी सुनाई दी। रोंगटे खड़े कर देने वाली।"
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "착각일 거야. 이 미로는 네 기억을 왜곡시키지.",
						"english": "It must be a trick. This maze distorts your memories.",
						"japanese": "錯覚だろう。この迷宮は君の記憶を歪ませる。",
						"chinese": "应该是错觉。这迷宫会扭曲你的记忆。",
						"french": "Ce doit être une illusion. Ce labyrinthe déforme tes souvenirs.",
						"spanish": "Debe ser una ilusión. Este laberinto distorsiona tus recuerdos.",
						"vietnamese": "Chắc là ảo giác thôi. Mê cung này làm lệch lạc ký ức của cậu.",
						"thai": "คงเป็นการเข้าใจผิด เขาวงกตนี้บิดเบือนความทรงจำของเธอ",
						"hindi": "यह भ्रम होगा। यह भूलभुलैया तुम्हारी यादों को विकृत कर देती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억…?",
						"english": "Memories...?",
						"japanese": "記憶…？",
						"chinese": "记忆……？",
						"french": "Souvenirs...?",
						"spanish": "¿Recuerdos...?",
						"vietnamese": "Ký ức...?",
						"thai": "ความทรงจำ...?",
						"hindi": "यादें...?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐. 저 폐허를 넘으면 돼.",
						"english": "Look. Just get past those ruins.",
						"japanese": "見ろ。あの廃墟を越えればいい。",
						"chinese": "看。只要越过那片废墟就行了。",
						"french": "Regarde. Il suffit de traverser ces ruines.",
						"spanish": "Mira. Solo tienes que cruzar esas ruinas.",
						"vietnamese": "Nhìn kìa. Chỉ cần vượt qua đống đổ nát đó là được.",
						"thai": "ดูสิ แค่ข้ามซากปรักหักพังนั่นไปก็พอ",
						"hindi": "देखो। बस उन खंडहरों को पार करना है।"
					},
					"speaker": "finn",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여긴 아까 그 폐허잖아! 당신… 대체 누구야?",
						"english": "This is the same ruin as before! Who... who are you?",
						"japanese": "ここはさっきの廃墟じゃないか！あなた…一体誰なの？",
						"chinese": "这里不就是刚才那片废墟吗！你……你到底是谁？",
						"french": "Ce sont les mêmes ruines que tout à l'heure ! Qui... qui êtes-vous ?",
						"spanish": "¡Estas son las mismas ruinas de antes! ¿Quién... quién eres?",
						"vietnamese": "Đây là đống đổ nát hồi nãy mà! Ông... rốt cuộc là ai?",
						"thai": "นี่มันซากปรักหักพังเดิมนี่นา! คุณ… คุณเป็นใครกันแน่?",
						"hindi": "यह तो वही खंडहर है जो पहले था! तुम... तुम कौन हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "폐허 한구석, 낡고 오래된 리라가 얼어붙어 있었다. 이질적인 존재감.",
						"english": "In a corner of the ruins, an old, worn lyre lay frozen. An alien presence.",
						"japanese": "廃墟の片隅に、古びたライラが凍てついていた。異質な存在感。",
						"chinese": "废墟一角，一把老旧的里拉琴冻结着。异样的存在感。",
						"french": "Dans un coin des ruines, une vieille lyre usée était figée. Une présence étrange.",
						"spanish": "En un rincón de las ruinas, una lira vieja y gastada yacía congelada. Una presencia extraña.",
						"vietnamese": "Một góc đống đổ nát, một cây đàn lyre cũ kỹ đóng băng. Một sự hiện diện xa lạ.",
						"thai": "ที่มุมหนึ่งของซากปรักหักพัง พิณเก่าแก่ตัวหนึ่งแข็งตัวอยู่ สัมผัสถึงการมีอยู่ที่ไม่คุ้นเคย",
						"hindi": "खंडहर के एक कोने में, एक पुराना, घिसा-पिटा वीणा जमा हुआ था। एक अजनबी उपस्थिति।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기형적으로 슬픈 얼음 꽃들이 주위에 피어 있었다.",
						"english": "Abnormally sorrowful ice flowers bloomed around it.",
						"japanese": "周囲には、奇形的に悲しい氷の花々が咲き誇っていた。",
						"chinese": "周围开着畸形而悲伤的冰花。",
						"french": "Des fleurs de glace étrangement tristes fleurissaient autour d'elle.",
						"spanish": "Alrededor florecieron flores de hielo anormalmente tristes.",
						"vietnamese": "Xung quanh nở rộ những bông hoa băng buồn bã đến dị thường.",
						"thai": "มีดอกไม้น้ำแข็งที่เศร้าโศกผิดรูปบานสะพรั่งอยู่รอบๆ",
						"hindi": "उसके चारों ओर विकृत रूप से उदास बर्फ के फूल खिले हुए थे।"
					},
					"speaker": "narrator",
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "누구냐니? 널 구원해 줄 희망이지!",
						"english": "Who am I? I'm the hope that will save you!",
						"japanese": "誰かって？君を救う希望さ！",
						"chinese": "问我是谁？我是能拯救你的希望！",
						"french": "Qui je suis ? Je suis l'espoir qui te sauvera !",
						"spanish": "¿Quién soy? ¡Soy la esperanza que te salvará!",
						"vietnamese": "Ai ư? Ta là hy vọng sẽ cứu rỗi cậu đấy!",
						"thai": "ใครน่ะหรือ? ฉันคือความหวังที่จะช่วยเธอไงล่ะ!",
						"hindi": "मैं कौन हूँ? मैं वह आशा हूँ जो तुम्हें बचाएगी!"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 거짓말하고 있어!",
						"english": "You're... lying!",
						"japanese": "あなたは…嘘をついている！",
						"chinese": "你……你在说谎！",
						"french": "Vous... vous mentez !",
						"spanish": "¡Tú... estás mintiendo!",
						"vietnamese": "Ông đang... nói dối!",
						"thai": "คุณ… คุณกำลังโกหก!",
						"hindi": "तुम... झूठ बोल रहे हो!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이젠 내가 이끄는 대로만 움직여. 그게 편할 거야.",
						"english": "From now on, just move as I guide you. It'll be easier.",
						"japanese": "これからは、私が導くままに動け。それが楽だろう。",
						"chinese": "现在起，只要按我说的做就行了。那样会比较轻松。",
						"french": "À partir de maintenant, suis simplement mes indications. Ce sera plus facile.",
						"spanish": "De ahora en adelante, solo muévete como te guíe. Será más fácil.",
						"vietnamese": "Từ giờ, cứ hành động theo sự dẫn dắt của ta. Sẽ dễ dàng hơn thôi.",
						"thai": "ต่อจากนี้ แค่เคลื่อนไหวตามที่ฉันนำทาง จะสบายกว่านะ",
						"hindi": "अब से, बस वैसे ही चलो जैसे मैं तुम्हें रास्ता दिखाऊँ। यह आसान होगा।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 당신 꼭두각시가 아니야!",
						"english": "I'm not your puppet!",
						"japanese": "私はあなたの操り人形じゃない！",
						"chinese": "我不是你的傀儡！",
						"french": "Je ne suis pas ta marionnette !",
						"spanish": "¡No soy tu marioneta!",
						"vietnamese": "Tôi không phải con rối của anh!",
						"thai": "ฉันไม่ใช่หุ่นเชิดของแกนะ!",
						"hindi": "मैं तुम्हारी कठपुतली नहीं हूँ!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니긴. 벌써 몇 번째 반복인지도 잊었잖아?",
						"english": "Oh, really? You've already forgotten how many times this has repeated, haven't you?",
						"japanese": "まさか。もう何回目の繰り返しさえ忘れたんじゃない？",
						"chinese": "是吗。你已经忘了这是第几次重复了吧？",
						"french": "Vraiment ? Tu as déjà oublié combien de fois ça s'est répété, n'est-ce pas ?",
						"spanish": "¿Ah, sí? ¿Ya olvidaste cuántas veces se ha repetido esto?",
						"vietnamese": "Không à. Anh đã quên đây là lần lặp thứ mấy rồi sao?",
						"thai": "เหรอ. แกคงลืมไปแล้วว่าวนซ้ำมากี่ครั้งแล้วล่ะสิ?",
						"hindi": "सच में? तुम तो ये भी भूल गए कि ये कितनी बार दोहराया जा चुका है, है ना?"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "길은 다시 시작점으로 이어졌다. 끝없는 절망이었다.",
						"english": "The path led back to the beginning. Endless despair.",
						"japanese": "道は再び出発点へと続いた。終わりのない絶望だった。",
						"chinese": "道路再次回到了起点。无尽的绝望。",
						"french": "Le chemin menait de nouveau au point de départ. Un désespoir sans fin.",
						"spanish": "El camino llevó de nuevo al inicio. Desesperación infinita.",
						"vietnamese": "Con đường lại dẫn về điểm xuất phát. Một sự tuyệt vọng không hồi kết.",
						"thai": "เส้นทางนำกลับสู่จุดเริ่มต้น ความสิ้นหวังที่ไม่รู้จบ",
						"hindi": "रास्ता फिर से शुरुआत की ओर ले गया। अंतहीन निराशा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼… 탈출구는 없어…?",
						"english": "No… Is there no escape…?",
						"japanese": "だめだ…脱出口はないのか…？",
						"chinese": "不行…没有出口吗…？",
						"french": "Non… Il n'y a pas d'échappatoire… ?",
						"spanish": "No… ¿No hay salida…?",
						"vietnamese": "Không… Không có lối thoát sao…?",
						"thai": "ไม่นะ… ไม่มีทางออกเลยเหรอ…?",
						"hindi": "नहीं… क्या कोई रास्ता नहीं है…?"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "finn",
					"content": {
						"korean": "하하하! 영원히 여기 있을 운명이야!",
						"english": "Hahaha! You're destined to stay here forever!",
						"japanese": "ハハハ！永遠にここにいる運命だ！",
						"chinese": "哈哈哈！你注定永远留在这里！",
						"french": "Hahaha ! Tu es destiné à rester ici pour toujours !",
						"spanish": "¡Jajaja! ¡Estás destinado a quedarte aquí para siempre!",
						"vietnamese": "Hahaha! Ngươi định mệnh phải ở lại đây mãi mãi!",
						"thai": "ฮ่าฮ่าฮ่า! แกต้องอยู่ที่นี่ไปตลอดกาล!",
						"hindi": "हाहाहा! तुम्हारी किस्मत में हमेशा यहीं रहना लिखा है!"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 도착했군. 내가 너를 여기까지 이끌었다.",
						"english": "Finally arrived. I led you here.",
						"japanese": "ついに到着したな。私が貴様をここまで導いたのだ。",
						"chinese": "终于到了。是我把你引到这里来的。",
						"french": "Enfin arrivé. Je t'ai mené jusqu'ici.",
						"spanish": "Finalmente llegaste. Yo te traje hasta aquí.",
						"vietnamese": "Cuối cùng cũng đến rồi. Ta đã dẫn ngươi đến đây.",
						"thai": "ในที่สุดก็มาถึง ฉันนำแกมาที่นี่เอง",
						"hindi": "आखिरकार तुम आ ही गए। मैं तुम्हें यहीं तक लाया हूँ।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "핀… 당신…!",
						"english": "Finn… you…!",
						"japanese": "フィン…あなた…！",
						"chinese": "芬…你…！",
						"french": "Finn… toi… !",
						"spanish": "Finn… ¡tú…!",
						"vietnamese": "Finn… anh…!",
						"thai": "ฟิน… คุณ…!",
						"hindi": "फिन… तुम…!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "또 다른 어리석은 영혼이 이곳에 갇혔군.",
						"english": "Another foolish soul trapped here.",
						"japanese": "また愚かな魂がここに閉じ込められたな。",
						"chinese": "又一个愚蠢的灵魂被困在这里了。",
						"french": "Encore une âme insensée piégée ici.",
						"spanish": "Otra alma insensata atrapada aquí.",
						"vietnamese": "Lại thêm một linh hồn ngu ngốc bị mắc kẹt ở đây.",
						"thai": "มีวิญญาณโง่เขลาอีกดวงถูกขังที่นี่แล้ว",
						"hindi": "एक और मूर्ख आत्मा यहाँ फँस गई है।"
					}
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 미로는 영원해! {random_boss}님이 지배하는 세계!",
						"english": "This maze is eternal! A world ruled by {random_boss}!",
						"japanese": "この迷路は永遠だ！{random_boss}様が支配する世界！",
						"chinese": "这个迷宫是永恒的！{random_boss}大人统治的世界！",
						"french": "Ce labyrinthe est éternel ! Un monde régi par {random_boss} !",
						"spanish": "¡Este laberinto es eterno! ¡Un mundo gobernado por {random_boss}!",
						"vietnamese": "Mê cung này là vĩnh cửu! Một thế giới do {random_boss} ngự trị!",
						"thai": "เขาวงกตนี้เป็นนิรันดร์! โลกที่ถูกปกครองโดย {random_boss}!",
						"hindi": "यह भूलभुलैया शाश्वत है! एक दुनिया जिस पर {random_boss} का शासन है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 여기서 끝내겠어!",
						"english": "Shut up! I'll end this here!",
						"japanese": "黙れ！ここで終わらせてやる！",
						"chinese": "闭嘴！我在这里结束这一切！",
						"french": "Tais-toi ! J'en finirai ici !",
						"spanish": "¡Cállate! ¡Lo terminaré aquí!",
						"vietnamese": "Im đi! Tôi sẽ kết thúc chuyện này ở đây!",
						"thai": "หุบปาก! ฉันจะจบเรื่องนี้ที่นี่แห!",
						"hindi": "चुप रहो! मैं इसे यहीं खत्म करूँगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "finn",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라… 너의 모든 기억은… 나의 것이 될 것이다…",
						"english": "Give up... All your memories... will become mine...",
						"japanese": "諦めろ… お前の全ての記憶は… 私のものとなるだろう…",
						"chinese": "放弃吧… 你所有的记忆… 都将成为我的…",
						"french": "Abandonne... Tous tes souvenirs... deviendront miens...",
						"spanish": "Ríndete... Todos tus recuerdos... serán míos...",
						"vietnamese": "Hãy bỏ cuộc đi... Tất cả ký ức của ngươi... sẽ thuộc về ta...",
						"thai": "ยอมแพ้เสีย... ความทรงจำทั้งหมดของเจ้า... จะกลายเป็นของข้า...",
						"hindi": "हार मान लो… तुम्हारी सारी यादें… मेरी हो जाएंगी…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…절대 포기 안 해. 다시 돌아올 거야.",
						"english": "...I'll never give up. I'll be back.",
						"japanese": "…決して諦めない。必ず戻ってくる。",
						"chinese": "…我绝不放弃。我会再回来的。",
						"french": "...Je n'abandonnerai jamais. Je reviendrai.",
						"spanish": "...Nunca me rendiré. Volveré.",
						"vietnamese": "...Tôi sẽ không bao giờ bỏ cuộc. Tôi sẽ trở lại.",
						"thai": "...ฉันไม่มีวันยอมแพ้ ฉันจะกลับมาอีกครั้ง",
						"hindi": "…मैं कभी हार नहीं मानूंगा। मैं वापस आऊंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "멍청한 인간… 이 미로는… 기억으로 만들어진… 저주… 끄윽…",
						"english": "Foolish human... This maze... is made of memories... a curse... Urgh...",
						"japanese": "愚かな人間め… この迷宮は… 記憶から作られた… 呪い… ぐっ…",
						"chinese": "愚蠢的人类… 这迷宫… 是由记忆构成的… 诅咒… 呃…",
						"french": "Stupide humain... Ce labyrinthe... est fait de souvenirs... une malédiction... Urgh...",
						"spanish": "Estúpido humano... Este laberinto... está hecho de recuerdos... una maldición... Ugh...",
						"vietnamese": "Con người ngu ngốc... Mê cung này... được tạo ra từ ký ức... một lời nguyền... Khục...",
						"thai": "มนุษย์โง่เง่า... เขาวงกตนี้... สร้างจากความทรงจำ... คำสาป... อึก...",
						"hindi": "मूर्ख इंसान… यह भूलभुलैया… यादों से बनी है… एक श्राप… उफ़्फ़…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억…?",
						"english": "Memories...?",
						"japanese": "記憶…？",
						"chinese": "记忆…？",
						"french": "Souvenirs...?",
						"spanish": "¿Recuerdos...?",
						"vietnamese": "Ký ức...?",
						"thai": "ความทรงจำ...?",
						"hindi": "यादें…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설원의 눈보라가 잠시 멈췄다. 하지만 미로는 아직 끝나지 않았다.",
						"english": "The blizzard on the snowfield paused. But the maze isn't over yet.",
						"japanese": "雪原の吹雪が一時的に止んだ。しかし、迷宮はまだ終わっていない。",
						"chinese": "雪原上的暴风雪暂时停歇了。但是，迷宫还没有结束。",
						"french": "Le blizzard sur le champ de neige s'est calmé. Mais le labyrinthe n'est pas encore terminé.",
						"spanish": "La tormenta de nieve en el campo nevado se detuvo un momento. Pero el laberinto aún no ha terminado.",
						"vietnamese": "Cơn bão tuyết trên cánh đồng tuyết tạm dừng. Nhưng mê cung vẫn chưa kết thúc.",
						"thai": "พายุหิมะบนทุ่งน้ำแข็งหยุดชั่วคราว แต่เขาวงกตยังไม่สิ้นสุด",
						"hindi": "बर्फीले मैदान पर बर्फीला तूफान थम गया। लेकिन भूलभुलैया अभी खत्म नहीं हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어딘가에서, 멈췄던 노래가 다시 시작되려 하고 있었다.",
						"english": "Somewhere, the paused song was about to resume.",
						"japanese": "どこかで、止まっていた歌が再び始まろうとしていた。",
						"chinese": "在某个地方，停滞的歌声即将再次响起。",
						"french": "Quelque part, le chant interrompu était sur le point de reprendre.",
						"spanish": "En algún lugar, la canción que se había detenido estaba a punto de reanudarse.",
						"vietnamese": "Ở đâu đó, bài hát đã dừng lại sắp bắt đầu lại.",
						"thai": "ที่ไหนสักแห่ง เพลงที่หยุดไปกำลังจะเริ่มขึ้นอีกครั้ง",
						"hindi": "कहीं, रुका हुआ गाना फिर से शुरू होने वाला था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원의 미로, 끝없이 이어진 길.",
			"핀은 구원자처럼 나타났다. 탈출구를 안다고.",
			"그러나 발자국은 언제나 제자리였다.",
			"이 희망은, 대체 누구의 속삭임인가."
		],
		"english": [
			"A snowy maze, an endless path.",
			"Finn appeared like a savior. Claiming to know the way out.",
			"Yet, the footsteps always led back to the start.",
			"Whose whisper is this hope, after all?"
		],
		"japanese": [
			"雪原の迷路、果てしなく続く道。",
			"フィンは救世主のように現れた。脱出口を知っていると。",
			"しかし、足跡はいつも元の場所に戻っていた。",
			"この希望は、一体誰のささやきなのか。"
		],
		"chinese": [
			"雪原迷宫，无尽之路。",
			"芬恩如救世主般出现。声称知道出路。",
			"然而，足迹却总是在原地打转。",
			"这希望，究竟是谁的低语？"
		],
		"french": [
			"Un labyrinthe enneigé, un chemin sans fin.",
			"Finn apparut tel un sauveur. Prétendant connaître la sortie.",
			"Pourtant, les pas ramenaient toujours au point de départ.",
			"Cet espoir, de qui est-il le murmure, au fond ?"
		],
		"spanish": [
			"Un laberinto nevado, un camino sin fin.",
			"Finn apareció como un salvador. Afirmando saber la salida.",
			"Sin embargo, las huellas siempre regresaban al mismo lugar.",
			"Esta esperanza, ¿de quién es el susurro, después de todo?"
		],
		"vietnamese": [
			"Mê cung tuyết, con đường vô tận.",
			"Finn xuất hiện như một vị cứu tinh. Tuyên bố biết lối thoát.",
			"Tuy nhiên, những bước chân luôn trở lại vị trí cũ.",
			"Hy vọng này, rốt cuộc là lời thì thầm của ai?"
		],
		"thai": [
			"เขาวงกตหิมะ, เส้นทางที่ไม่มีที่สิ้นสุด.",
			"ฟินน์ปรากฏตัวราวกับผู้กอบกู้ อ้างว่ารู้ทางออก.",
			"แต่รอยเท้าก็วนเวียนอยู่กับที่เสมอ.",
			"ความหวังนี้ แท้จริงแล้วเป็นเสียงกระซิบของใครกัน?"
		],
		"hindi": [
			"बर्फीला भूलभुलैया, एक अंतहीन राह।",
			"फिन एक उद्धारकर्ता की तरह प्रकट हुआ। बाहर निकलने का रास्ता जानने का दावा करते हुए।",
			"फिर भी, पदचिह्न हमेशा वहीं के वहीं थे।",
			"यह आशा, आखिर किसकी फुसफुसाहट है?"
		]
	}
} as const;
