export const scenario_forest_echoes_of_desire_01 = {
	"scenario_id": "forest_echoes_of_desire_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "pool_013"
	},
	"prologue": {
		"korean": [
			"숲에서 돌아온 자들. 그들은 병들었다.",
			"숲을 그리워하는 마음이 병이 되어 돌아왔다.",
			"마을은 혼란에 빠졌다. 불신과 분노가 피어났다.",
			"그리고 — 숲은 새로운 그림자를 드리우고 있었다."
		],
		"english": [
			"Those who returned from the forest. They were sick.",
			"Their longing for the forest returned as an illness.",
			"The village fell into chaos. Distrust and anger blossomed.",
			"And — the forest was casting new shadows."
		],
		"japanese": [
			"森から戻った者たち。彼らは病んでいた。",
			"森を慕う心が病となって戻ってきた。",
			"村は混乱に陥った。不信と怒りが芽生えた。",
			"そして — 森は新たな影を落としていた。"
		],
		"chinese": [
			"从森林归来的人们。他们病了。",
			"对森林的思念变成了疾病，随之归来。",
			"村庄陷入混乱。不信任和愤怒滋生。",
			"而——森林正投下新的阴影。"
		],
		"french": [
			"Ceux qui revinrent de la forêt. Ils étaient malades.",
			"Leur nostalgie de la forêt revint sous forme de maladie.",
			"Le village sombra dans le chaos. Méfiance et colère fleurirent.",
			"Et — la forêt projetait de nouvelles ombres."
		],
		"spanish": [
			"Aquellos que regresaron del bosque. Estaban enfermos.",
			"Su anhelo por el bosque regresó como una enfermedad.",
			"El pueblo cayó en el caos. La desconfianza y la ira florecieron.",
			"Y — el bosque proyectaba nuevas sombras."
		],
		"vietnamese": [
			"Những người trở về từ rừng. Họ đã mắc bệnh.",
			"Nỗi nhớ rừng trở thành bệnh tật và quay trở lại.",
			"Làng chìm trong hỗn loạn. Sự ngờ vực và giận dữ bùng lên.",
			"Và — khu rừng đang bao trùm những bóng đen mới."
		],
		"thai": [
			"ผู้ที่กลับมาจากป่า พวกเขาป่วย",
			"ความคิดถึงป่ากลับมาเป็นความเจ็บป่วย",
			"หมู่บ้านตกอยู่ในความสับสน ความไม่ไว้วางใจและความโกรธผลิบาน",
			"และ — ป่ากำลังทอดเงาใหม่"
		],
		"hindi": [
			"जंगल से लौटे हुए लोग। वे बीमार थे।",
			"जंगल के लिए उनकी लालसा बीमारी बनकर लौट आई।",
			"गाँव में अराजकता फैल गई। अविश्वास और क्रोध पनपा।",
			"और — जंगल नई परछाइयाँ डाल रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아온 자들의 마을. 불안과 불신이 가득했다.",
						"english": "The village of the returned. Filled with unease and distrust.",
						"japanese": "戻りし者たちの村。不安と不信が満ちていた。",
						"chinese": "归来者之村。充满不安与不信任。",
						"french": "Le village des revenants. Rempli de malaise et de méfiance.",
						"spanish": "El pueblo de los que regresaron. Lleno de inquietud y desconfianza.",
						"vietnamese": "Làng của những người trở về. Đầy rẫy bất an và ngờ vực.",
						"thai": "หมู่บ้านของผู้กลับมา เต็มไปด้วยความไม่สบายใจและความไม่ไว้วางใจ",
						"hindi": "लौटे हुए लोगों का गाँव। बेचैनी और अविश्वास से भरा हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "브라켄이 또 발작했대.",
						"english": "Bracken had another fit.",
						"japanese": "ブラッケンがまた発作を起こしたって。",
						"chinese": "布拉肯又发作了。",
						"french": "Bracken a encore fait une crise.",
						"spanish": "Bracken tuvo otro ataque.",
						"vietnamese": "Bracken lại lên cơn rồi.",
						"thai": "แบร็คเคนมีอาการชักอีกแล้ว",
						"hindi": "ब्रेकेन को फिर से दौरा पड़ा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "크윽... 숲으로 돌아가야 해...",
						"english": "Ugh... I must return to the forest...",
						"japanese": "くっ…森へ帰らねば…",
						"chinese": "呃...我必须回到森林...",
						"french": "Ugh... Je dois retourner à la forêt...",
						"spanish": "Ugh... Debo volver al bosque...",
						"vietnamese": "Ư... Tôi phải trở về rừng...",
						"thai": "อึก...ฉันต้องกลับไปที่ป่า...",
						"hindi": "उफ़... मुझे जंगल में वापस जाना होगा..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저들 때문에 병이 퍼지는 거야.",
						"english": "The illness is spreading because of them.",
						"japanese": "彼らのせいで病気が広まるんだ。",
						"chinese": "疾病正在因为他们而传播。",
						"french": "La maladie se propage à cause d'eux.",
						"spanish": "La enfermedad se está propagando por su culpa.",
						"vietnamese": "Bệnh tật lây lan vì bọn họ đấy.",
						"thai": "โรคนี้แพร่กระจายเพราะพวกเขา",
						"hindi": "बीमारी उनकी वजह से फैल रही है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니야... 숲은 날 부르고 있어.",
						"english": "No... The forest is calling me.",
						"japanese": "違う…森が私を呼んでいる。",
						"chinese": "不...森林在呼唤我。",
						"french": "Non... La forêt m'appelle.",
						"spanish": "No... El bosque me está llamando.",
						"vietnamese": "Không... Rừng đang gọi tôi.",
						"thai": "ไม่...ป่ากำลังเรียกหาฉัน",
						"hindi": "नहीं... जंगल मुझे बुला रहा है।"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "내 안에서... 숲의 소리가 들려.",
						"english": "Inside me... I hear the forest's voice.",
						"japanese": "私の中で…森の声が聞こえる。",
						"chinese": "在我体内...我听到了森林的声音。",
						"french": "En moi... J'entends la voix de la forêt.",
						"spanish": "Dentro de mí... Escucho la voz del bosque.",
						"vietnamese": "Bên trong tôi... Tôi nghe thấy tiếng rừng.",
						"thai": "ข้างในตัวฉัน...ฉันได้ยินเสียงของป่า",
						"hindi": "मेरे भीतर... मुझे जंगल की आवाज़ सुनाई देती है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리?",
						"english": "What's that sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Quel est ce bruit ?",
						"spanish": "¿Qué es ese sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "कैसी आवाज़?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "수많은 목소리가 섞여서... 웅얼거리는 듯해.",
						"english": "Many voices mixing... a muffled whisper.",
						"japanese": "沢山の声が混じり合って… ざわめいているようだ。",
						"chinese": "许多声音混杂在一起…… 好像在低语。",
						"french": "De nombreuses voix se mélangent... comme des marmonnements.",
						"spanish": "Innumerable voces mezclándose... parece un murmullo.",
						"vietnamese": "Nhiều giọng nói hòa vào nhau... cứ như đang thì thầm.",
						"thai": "เสียงมากมายปะปนกัน...เหมือนกำลังพึมพำ",
						"hindi": "कई आवाज़ें मिल रही हैं... जैसे कोई बड़बड़ा रहा हो।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그냥 환청이야.",
						"english": "Just an auditory hallucination.",
						"japanese": "ただの幻聴だ。",
						"chinese": "那只是幻听。",
						"french": "C'est juste une illusion.",
						"spanish": "Solo son alucinaciones.",
						"vietnamese": "Chỉ là ảo giác thôi.",
						"thai": "ก็แค่หูแว่วไปเอง",
						"hindi": "यह सिर्फ़ वहम है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "숲이... 나를 기다린대.",
						"english": "The forest... it's waiting for me.",
						"japanese": "森が… 私を待っているそうだ。",
						"chinese": "森林…… 好像在等我。",
						"french": "La forêt... elle m'attend.",
						"spanish": "El bosque... me está esperando.",
						"vietnamese": "Rừng... đang đợi ta.",
						"thai": "ป่า...กำลังรอฉันอยู่",
						"hindi": "जंगल... मेरा इंतज़ार कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "가지 마. 그건 함정이야.",
						"english": "Don't go. It's a trap.",
						"japanese": "行くな。それは罠だ。",
						"chinese": "别去。那是个陷阱。",
						"french": "N'y va pas. C'est un piège.",
						"spanish": "No vayas. Es una trampa.",
						"vietnamese": "Đừng đi. Đó là một cái bẫy.",
						"thai": "อย่าไปนะ นั่นมันกับดัก",
						"hindi": "मत जाओ। वो एक जाल है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "하지만 이 갈망... 멈출 수가 없어.",
						"english": "But this longing... I can't stop it.",
						"japanese": "だが、この渇望… 止められない。",
						"chinese": "但这种渴望…… 我无法停止。",
						"french": "Mais ce désir... je ne peux pas l'arrêter.",
						"spanish": "Pero este anhelo... no puedo detenerlo.",
						"vietnamese": "Nhưng khao khát này... ta không thể dừng lại.",
						"thai": "แต่ความปรารถนานี้...หยุดมันไม่ได้",
						"hindi": "लेकिन इस लालसा को... रोक नहीं सकता।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "내 모습이... 아니야.",
						"english": "That's... not me.",
						"japanese": "私の姿… じゃない。",
						"chinese": "那不是我的样子。",
						"french": "Ce n'est... pas moi.",
						"spanish": "Esa... no soy yo.",
						"vietnamese": "Đó... không phải là ta.",
						"thai": "นั่น...ไม่ใช่ฉัน",
						"hindi": "यह... मैं नहीं हूँ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야. 제정신이 아니군.",
						"english": "What nonsense. You're delusional.",
						"japanese": "何を言っているんだ。正気じゃないな。",
						"chinese": "你在说什么。你疯了吗？",
						"french": "Qu'est-ce que tu dis ? Tu n'es pas sain d'esprit.",
						"spanish": "¿Qué dices? No estás cuerdo.",
						"vietnamese": "Ngươi nói cái gì? Ngươi không tỉnh táo.",
						"thai": "พูดอะไรน่ะ ไม่ได้สติแล้ว",
						"hindi": "क्या बकवास है। तुम होश में नहीं हो।"
					}
				},
				{
					"content": {
						"korean": "거울에... 숲 속의 다른 내가 보여. 행복한 얼굴로.",
						"english": "In the mirror... another me in the forest appears. With a happy face.",
						"japanese": "鏡に… 森の中にいるもう一人の私が映る。幸せそうな顔で。",
						"chinese": "镜子里…… 出现了一个森林中的另一个我。带着幸福的笑容。",
						"french": "Dans le miroir... je vois un autre moi dans la forêt. Avec un visage heureux.",
						"spanish": "En el espejo... veo a otro yo en el bosque. Con una cara feliz.",
						"vietnamese": "Trong gương... ta thấy một ta khác trong rừng. Với gương mặt hạnh phúc.",
						"thai": "ในกระจก...มีฉันอีกคนอยู่ในป่า ด้วยใบหน้าที่มีความสุข",
						"hindi": "दर्पण में... मुझे जंगल में मेरा दूसरा रूप दिखता है। एक खुश चेहरे के साथ।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "선택의 고통은, 이제 또 다른 형상으로 뒤틀렸다.",
						"english": "The agony of choice has now twisted into another form.",
						"japanese": "選択の苦痛は、今、また別の姿に変貌した。",
						"chinese": "选择的痛苦，如今又扭曲成了另一种形态。",
						"french": "La douleur du choix s'est maintenant tordue en une autre forme.",
						"spanish": "El tormento de la elección se ha retorcido ahora en otra forma.",
						"vietnamese": "Nỗi đau của sự lựa chọn, giờ đây đã biến thành một hình dạng khác.",
						"thai": "ความเจ็บปวดของการเลือก...บัดนี้บิดเบี้ยวไปเป็นอีกรูปแบบหนึ่งแล้ว",
						"hindi": "पसंद का दर्द, अब एक और रूप में विकृत हो गया है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "날 쓰러뜨려도... 숲의 갈망은 너희 안에 새겨졌다.",
						"english": "Even if you strike me down... the forest's yearning is etched within you.",
						"japanese": "私を倒しても… 森の渇望はお前たちの中に刻まれた。",
						"chinese": "即使你们击败了我… 森林的渴望也已铭刻在你们心中。",
						"french": "Même si vous me battez... le désir ardent de la forêt est gravé en vous.",
						"spanish": "Aunque me derribéis... el anhelo del bosque está grabado en vosotros.",
						"vietnamese": "Dù các ngươi đánh bại ta... khát vọng của rừng đã khắc sâu vào các ngươi.",
						"thai": "แม้จะล้มข้าลง... แต่ความปรารถนาของป่าก็สลักอยู่ในตัวพวกเจ้าแล้ว",
						"hindi": "भले ही तुम मुझे हरा दो... जंगल की लालसा तुम्हारे भीतर अंकित हो चुकी है।"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "bracken",
					"content": {
						"korean": "...머릿속에서 웅얼거림이 잦아들었어.",
						"english": "...The murmuring in my head has subsided.",
						"japanese": "…頭の中のざわめきが静まった。",
						"chinese": "…脑海中的低语声平息了。",
						"french": "...Le murmure dans ma tête s'est calmé.",
						"spanish": "...El murmullo en mi cabeza ha disminuido.",
						"vietnamese": "...Những tiếng lẩm bẩm trong đầu đã lắng xuống.",
						"thai": "...เสียงกระซิบในหัวเงียบลงแล้ว",
						"hindi": "...मेरे सिर में फुसफुसाहट कम हो गई है।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "하지만... 완전히 사라지진 않아.",
						"english": "But... it hasn't completely disappeared.",
						"japanese": "だが… 完全には消え去っていない。",
						"chinese": "但是… 并没有完全消失。",
						"french": "Mais... ça n'a pas complètement disparu.",
						"spanish": "Pero... no ha desaparecido por completo.",
						"vietnamese": "Nhưng... nó không hoàn toàn biến mất.",
						"thai": "แต่... มันยังไม่หายไปไหน",
						"hindi": "लेकिन... यह पूरी तरह से गायब नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "선택의 그림자는 사라졌으나, 그 흔적은 남았다.",
						"english": "The shadow of choice has vanished, but its trace remains.",
						"japanese": "選択の影は消えたが、その痕跡は残った。",
						"chinese": "选择的阴影消失了，但它的痕迹依然存在。",
						"french": "L'ombre du choix a disparu, mais sa trace demeure.",
						"spanish": "La sombra de la elección se ha desvanecido, pero su rastro permanece.",
						"vietnamese": "Bóng tối của sự lựa chọn đã biến mất, nhưng dấu vết của nó vẫn còn.",
						"thai": "เงาของทางเลือกได้หายไปแล้ว แต่ร่องรอยของมันยังคงอยู่",
						"hindi": "पसंद की छाया गायब हो गई है, लेकिन उसका निशान बाकी है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없다면... 다른 길을 찾아야 했다.",
						"english": "If we couldn't go back... we had to find another path.",
						"japanese": "戻れないのなら… 別の道を探さなければならなかった。",
						"chinese": "如果无法回头… 我们就必须寻找另一条路。",
						"french": "Si nous ne pouvions pas revenir... nous devions trouver un autre chemin.",
						"spanish": "Si no podíamos volver... teníamos que encontrar otro camino.",
						"vietnamese": "Nếu không thể quay lại... chúng ta phải tìm một con đường khác.",
						"thai": "ถ้ากลับไปไม่ได้... ก็ต้องหาทางอื่น",
						"hindi": "अगर हम वापस नहीं जा सकते थे... तो हमें दूसरा रास्ता खोजना पड़ा।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "돌아온 자들이여... 너희의 선택이 그림자가 되어 날 만들었다.",
						"english": "Returnees... Your choices cast a shadow that created me.",
						"japanese": "戻りし者たちよ… お前たちの選択が影となり、私を創り出した。",
						"chinese": "归来者啊… 你们的选择化作阴影，创造了我。",
						"french": "Ô vous les revenus... Vos choix ont jeté une ombre qui m'a créé.",
						"spanish": "Vosotros, los que regresasteis... Vuestras elecciones crearon la sombra que me dio forma.",
						"vietnamese": "Những kẻ trở về... Lựa chọn của các ngươi đã hóa thành bóng tối tạo ra ta.",
						"thai": "ผู้กลับมาทั้งหลาย... ทางเลือกของพวกเจ้าได้กลายเป็นเงาที่สร้างข้าขึ้นมา",
						"hindi": "लौटने वाले... तुम्हारी पसंद ने एक ऐसी छाया बनाई जिसने मुझे बनाया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 병의 근원이냐?",
						"english": "Are you the source of this affliction?",
						"japanese": "お前がこの病の根源か？",
						"chinese": "你就是这病症的根源吗？",
						"french": "Es-tu la source de cette affliction ?",
						"spanish": "¿Eres la causa de esta aflicción?",
						"vietnamese": "Ngươi là nguồn gốc của căn bệnh này sao?",
						"thai": "เจ้าคือต้นตอของโรคร้ายนี้ใช่ไหม?",
						"hindi": "क्या तुम इस बीमारी का स्रोत हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "나는 너희의 갈망. 숲에 남은 자들을 향한 뒤틀린 질투.",
						"english": "I am your yearning. The twisted jealousy towards those who remained in the forest.",
						"japanese": "私はお前たちの渇望。森に残った者たちへの歪んだ嫉妬だ。",
						"chinese": "我就是你们的渴望。对留在森林里的人们扭曲的嫉妒。",
						"french": "Je suis votre désir ardent. La jalousie tordue envers ceux qui sont restés dans la forêt.",
						"spanish": "Soy vuestro anhelo. La retorcida envidia hacia los que permanecieron en el bosque.",
						"vietnamese": "Ta là khát khao của các ngươi. Nỗi ghen tị méo mó với những kẻ đã ở lại trong rừng.",
						"thai": "ข้าคือความปรารถนาของพวกเจ้า ความริษยาที่บิดเบี้ยวต่อผู้ที่อยู่ในป่า",
						"hindi": "मैं तुम्हारी लालसा हूँ। जंगल में बचे लोगों के प्रति विकृत ईर्ष्या।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "너희의 선택은... 영원한 그림자. 숲으로 돌아와라.",
						"english": "Your choice is... an eternal shadow. Return to the forest.",
						"japanese": "お前たちの選択は… 永遠の影。森へ戻ってこい。",
						"chinese": "你们的选择是… 永恒的阴影。回到森林里来吧。",
						"french": "Votre choix est... une ombre éternelle. Revenez à la forêt.",
						"spanish": "Vuestra elección es... una sombra eterna. Volved al bosque.",
						"vietnamese": "Lựa chọn của các ngươi là... một bóng tối vĩnh cửu. Trở về rừng đi.",
						"thai": "ทางเลือกของพวกเจ้าคือ... เงาชั่วนิรันดร์ จงกลับมายังป่า",
						"hindi": "तुम्हारी पसंद है... एक शाश्वत छाया। जंगल में लौट आओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절대... 돌아가지 않아!",
						"english": "Never... going back!",
						"japanese": "絶対…戻らない！",
						"chinese": "绝不...回去！",
						"french": "Je ne... reviendrai jamais !",
						"spanish": "¡Nunca... volveré!",
						"vietnamese": "Tuyệt đối... không trở lại!",
						"thai": "ไม่มีทาง... กลับไปเด็ดขาด!",
						"hindi": "कभी... वापस नहीं जाऊँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 속삭임은 더욱 강해졌다. 그 갈망이 모든 것을 집어삼킬 듯했다.",
						"english": "The forest's whispers grew stronger. Its craving seemed to devour everything.",
						"japanese": "森の囁きはさらに強くなった。その渇望がすべてを飲み込むようだった。",
						"chinese": "森林的低语愈发强烈。那渴望似乎要吞噬一切。",
						"french": "Les murmures de la forêt s'intensifièrent. Cette soif semblait tout dévorer.",
						"spanish": "Los susurros del bosque se hicieron más fuertes. Su ansia parecía devorarlo todo.",
						"vietnamese": "Lời thì thầm của rừng cây càng lúc càng mạnh. Khát khao đó dường như muốn nuốt chửng mọi thứ.",
						"thai": "เสียงกระซิบของป่าเข้มข้นขึ้น ความปรารถนานั้นราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "जंगल की फुसफुसाहट और तीव्र हो गई। उसकी लालसा सब कुछ निगलने वाली थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
