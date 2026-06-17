export const scenario_snowy_anya_3_01 = {
	"scenario_id": "snowy_anya_3_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라가 모든 것을 집어삼켰다.",
			"사방이 얼음. 길은 사라졌다.",
			"그때, 저 멀리서 푸른 빛이 아른거렸다.",
			"희망일까. 아니면… 또 다른 절망일까."
		],
		"english": [
			"The blizzard swallowed everything.",
			"Ice everywhere. The path vanished.",
			"Then, a blue light flickered in the distance.",
			"Is it hope? Or... another despair?"
		],
		"japanese": [
			"吹雪がすべてを飲み込んだ。",
			"四方は氷。道は消えた。",
			"その時、遠くで青い光が揺らめいた。",
			"希望か。それとも…新たな絶望か。"
		],
		"chinese": [
			"暴风雪吞噬了一切。",
			"四处皆冰。道路消失。",
			"此时，远处闪烁着一丝蓝光。",
			"是希望吗？抑或是……另一种绝望？"
		],
		"french": [
			"Le blizzard a tout englouti.",
			"De la glace partout. Le chemin avait disparu.",
			"Alors, une lumière bleue scintilla au loin.",
			"Est-ce l'espoir ? Ou... un autre désespoir ?"
		],
		"spanish": [
			"La tormenta de nieve lo engulló todo.",
			"Hielo por todas partes. El camino desapareció.",
			"Entonces, una luz azul parpadeó a lo lejos.",
			"Es esperanza? O... otra desesperación?"
		],
		"vietnamese": [
			"Bão tuyết đã nuốt chửng mọi thứ.",
			"Băng giá khắp nơi. Con đường biến mất.",
			"Rồi, một ánh sáng xanh nhấp nháy từ xa.",
			"Là hy vọng? Hay... một nỗi tuyệt vọng khác?"
		],
		"thai": [
			"พายุหิมะกลืนกินทุกสิ่ง",
			"น้ำแข็งทุกหนแห่ง หนทางหายไป",
			"ทันใดนั้น แสงสีน้ำเงินก็ริบหรี่อยู่ไกลๆ",
			"นี่คือความหวังหรือ? หรือว่า...ความสิ้นหวังอีกครั้ง"
		],
		"hindi": [
			"बर्फीले तूफान ने सब कुछ निगल लिया।",
			"चारों ओर बर्फ़। रास्ता गायब हो गया।",
			"तभी, दूर से एक नीली रोशनी टिमटिमाई।",
			"क्या यह आशा है? या... एक और निराशा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "혹독한 설원. 한 치 앞도 보이지 않는 눈보라가 몰아쳤다.",
						"english": "A harsh snowfield. A blizzard raged, blinding everything.",
						"japanese": "過酷な雪原。一寸先も見えない吹雪が荒れ狂った。",
						"chinese": "严酷的雪原。暴风雪肆虐，伸手不见五指。",
						"french": "Un champ de neige impitoyable. Un blizzard aveuglant faisait rage.",
						"spanish": "Un campo de nieve implacable. Una tormenta de nieve ciega arreciaba.",
						"vietnamese": "Cánh đồng tuyết khắc nghiệt. Bão tuyết hoành hành, che khuất mọi thứ.",
						"thai": "ทุ่งหิมะอันโหดร้าย พายุหิมะโหมกระหน่ำจนมองไม่เห็นสิ่งใด",
						"hindi": "एक कठोर बर्फीला मैदान। एक बर्फीला तूफ़ान भयंकर रूप से चला, सब कुछ अंधा कर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장, 길을 잃었어….",
						"english": "Damn, I'm lost...",
						"japanese": "くそっ、道に迷った…。",
						"chinese": "该死，我迷路了……",
						"french": "Merde, je suis perdu...",
						"spanish": "Maldita sea, me he perdido...",
						"vietnamese": "Chết tiệt, mình lạc rồi...",
						"thai": "ให้ตายสิ, ฉันหลงทางแล้ว...",
						"hindi": "धिक्कार है, मैं खो गया हूँ..."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마! 저 빛을 봐!",
						"english": "Don't give up! Look at that light!",
						"japanese": "あきらめるな！あの光を見ろ！",
						"chinese": "别放弃！看那道光！",
						"french": "N'abandonne pas ! Regarde cette lumière !",
						"spanish": "¡No te rindas! ¡Mira esa luz!",
						"vietnamese": "Đừng bỏ cuộc! Nhìn ánh sáng kia kìa!",
						"thai": "อย่ายอมแพ้! ดูแสงนั่นสิ!",
						"hindi": "हार मत मानो! उस रोशनी को देखो!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "절망 속에서 희미하게 아른거리는 푸른 빛. 그 안에서 어딘가 서글픈 감정이 느껴졌다.",
						"english": "A faint blue light flickered in the despair. A mournful feeling emanated from it.",
						"japanese": "絶望の中でかすかに揺らめく青い光。その中に、どこか物悲しい感情が感じられた。",
						"chinese": "绝望中，一抹蓝光依稀闪烁。从中感受到了一丝悲伤。",
						"french": "Une faible lumière bleue vacillait dans le désespoir. Un sentiment mélancolique s'en dégageait.",
						"spanish": "Una tenue luz azul parpadeaba en la desesperación. Una sensación melancólica emanaba de ella.",
						"vietnamese": "Một ánh sáng xanh mờ ảo nhấp nháy trong tuyệt vọng. Một cảm giác buồn bã nào đó tỏa ra từ nó.",
						"thai": "แสงสีน้ำเงินริบหรี่ในความสิ้นหวัง สัมผัสได้ถึงความรู้สึกเศร้าสร้อยบางอย่างจากแสงนั้น",
						"hindi": "निराशा में एक धुँधली नीली रोशनी टिमटिमा रही थी। उसमें कहीं उदासी की भावना महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…가자. 저 빛이 우리를 인도할 거다.",
						"english": "...Let's go. That light will guide us.",
						"japanese": "…行こう。あの光が私たちを導くだろう。",
						"chinese": "……走吧。那道光会指引我们的。",
						"french": "...Allons-y. Cette lumière nous guidera.",
						"spanish": "...Vamos. Esa luz nos guiará.",
						"vietnamese": "...Đi thôi. Ánh sáng đó sẽ dẫn lối chúng ta.",
						"thai": "...ไปกันเถอะ แสงนั้นจะนำทางเรา",
						"hindi": "...चलो। वह रोशनी हमें रास्ता दिखाएगी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "빛이 점점 선명해진다. 따라가야 해.",
						"english": "The light is getting clearer. We must follow it.",
						"japanese": "光がだんだん鮮明になる。ついていかねば。",
						"chinese": "光芒越来越清晰。我们必须跟上去。",
						"french": "La lumière devient plus claire. Nous devons la suivre.",
						"spanish": "La luz se vuelve más clara. Debemos seguirla.",
						"vietnamese": "Ánh sáng càng lúc càng rõ. Chúng ta phải đi theo.",
						"thai": "แสงสว่างขึ้นเรื่อยๆ เราต้องตามไป",
						"hindi": "रोशनी और साफ़ हो रही है। हमें उसका पीछा करना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "대장님, 너무 위험해요! 어디로 가는 건가요?",
						"english": "Captain, it's too dangerous! Where are we going?",
						"japanese": "隊長、危険すぎます！どこへ向かっているのですか？",
						"chinese": "队长，太危险了！我们这是要去哪儿？",
						"french": "Capitaine, c'est trop dangereux ! Où allons-nous ?",
						"spanish": "¡Capitán, es demasiado peligroso! ¿Adónde vamos?",
						"vietnamese": "Đội trưởng, nguy hiểm quá! Chúng ta đang đi đâu vậy?",
						"thai": "หัวหน้าครับ อันตรายเกินไป! เราจะไปไหนกันครับ?",
						"hindi": "कैप्टन, यह बहुत खतरनाक है! हम कहाँ जा रहे हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "모른다. 하지만 저 빛은… 길 잃은 이를 외면하지 않을 것 같군.",
						"english": "I don't know. But that light... it doesn't seem to turn away from those who are lost.",
						"japanese": "分からない。だが、あの光は…道に迷った者を見捨てないだろう。",
						"chinese": "我不知道。但那束光……它似乎不会抛弃迷途之人。",
						"french": "Je ne sais pas. Mais cette lumière... elle ne semble pas abandonner ceux qui sont perdus.",
						"spanish": "No lo sé. Pero esa luz... no parece dar la espalda a los perdidos.",
						"vietnamese": "Tôi không biết. Nhưng ánh sáng đó... dường như sẽ không bỏ rơi những người lạc lối.",
						"thai": "ไม่รู้สิ แต่แสงนั้น... ดูเหมือนจะไม่หันหลังให้กับผู้หลงทาง",
						"hindi": "मुझे नहीं पता। लेकिन वह रोशनी... ऐसा लगता है कि वह रास्ता भटके हुओं से मुँह नहीं मोड़ेगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 바람이 더욱 거세졌다. 푸른 빛이 더욱 강렬하게 깜빡였다.",
						"english": "The bitter wind grew fiercer. The blue light flickered more intensely.",
						"japanese": "酷寒の風はさらに激しくなった。青い光は一層強く瞬いた。",
						"chinese": "凛冽的寒风愈发猛烈。蓝色的光芒闪烁得更加强烈。",
						"french": "Le vent glacial redoubla de violence. La lumière bleue clignotait plus intensément.",
						"spanish": "El viento gélido se hizo más fuerte. La luz azul parpadeaba con más intensidad.",
						"vietnamese": "Gió lạnh càng trở nên dữ dội. Ánh sáng xanh nhấp nháy càng mạnh mẽ.",
						"thai": "ลมหนาวจัดทวีความรุนแรงขึ้น แสงสีน้ำเงินกะพริบถี่ขึ้น",
						"hindi": "कड़कड़ाती हवा और तेज़ हो गई। नीली रोशनी और तेज़ी से टिमटिमा रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧이다. 어딘가에… 안전한 곳이 있을 거야.",
						"english": "Soon. Somewhere... there must be a safe place.",
						"japanese": "もうすぐだ。どこかに…安全な場所があるはずだ。",
						"chinese": "快了。在某个地方……一定会有个安全之所。",
						"french": "Bientôt. Quelque part... il doit y avoir un endroit sûr.",
						"spanish": "Pronto. En algún lugar... debe haber un lugar seguro.",
						"vietnamese": "Sắp rồi. Ở đâu đó... sẽ có một nơi an toàn.",
						"thai": "ใกล้แล้ว... ที่ไหนสักแห่ง... ต้องมีที่ปลอดภัย",
						"hindi": "जल्द ही। कहीं न कहीं... एक सुरक्षित जगह होगी।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "대장님… 저 빛, 어쩐지 따뜻하게 느껴져요.",
						"english": "Captain... that light, it feels somehow warm.",
						"japanese": "隊長…あの光、なんだか暖かく感じます。",
						"chinese": "队长……那束光，总觉得很温暖。",
						"french": "Capitaine... cette lumière, elle me semble étrangement chaude.",
						"spanish": "Capitán... esa luz, de alguna manera se siente cálida.",
						"vietnamese": "Đội trưởng... ánh sáng đó, sao lại ấm áp lạ thường.",
						"thai": "หัวหน้าครับ... แสงนั้น... รู้สึกอบอุ่นยังไงไม่รู้",
						"hindi": "कैप्टन, वह रोशनी, मुझे किसी तरह गर्म महसूस हो रही है।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래… 우리를 이끌어 줄 거야.",
						"english": "Yes... it will guide us.",
						"japanese": "ああ…我々を導いてくれるだろう。",
						"chinese": "是的……它会指引我们的。",
						"french": "Oui... elle nous guidera.",
						"spanish": "Sí... nos guiará.",
						"vietnamese": "Phải... nó sẽ dẫn lối chúng ta.",
						"thai": "ใช่... มันจะนำทางเราไปเอง",
						"hindi": "हाँ... वह हमें रास्ता दिखाएगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 이어진 빙하 절벽. 돌아갈 길은 이미 사라졌다.",
						"english": "Endless glacial cliffs. The way back is already gone.",
						"japanese": "果てしなく続く氷河の崖。戻る道はもう消えた。",
						"chinese": "无尽的冰川峭壁。归路已断。",
						"french": "Des falaises glaciaires infinies. Le chemin du retour a déjà disparu.",
						"spanish": "Acantilados glaciares interminables. El camino de regreso ya desapareció.",
						"vietnamese": "Vách đá băng hà kéo dài vô tận. Con đường quay về đã không còn.",
						"thai": "หน้าผาธารน้ำแข็งที่ทอดยาวไม่มีที่สิ้นสุด ทางกลับได้หายไปแล้ว",
						"hindi": "अंतहीन हिमनद चट्टानें। वापसी का रास्ता पहले ही जा चुका है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기서 멈출 순 없어. 우리에겐… 돌아갈 곳이 있어.",
						"english": "We can't stop here. We have... a place to return to.",
						"japanese": "ここで立ち止まるわけにはいかない。我々には…帰る場所がある。",
						"chinese": "我们不能停在这里。我们有……一个要回去的地方。",
						"french": "Nous ne pouvons pas nous arrêter ici. Nous avons... un endroit où retourner.",
						"spanish": "No podemos detenernos aquí. Tenemos... un lugar al que regresar.",
						"vietnamese": "Không thể dừng lại ở đây. Chúng ta có... nơi để trở về.",
						"thai": "เราหยุดอยู่ตรงนี้ไม่ได้ เรามี... ที่ที่ต้องกลับไป",
						"hindi": "हम यहाँ रुक नहीं सकते। हमारे पास... लौटने की एक जगह है।"
					}
				},
				{
					"content": {
						"korean": "대장님… 저 빛을… 계속 믿어야 할까요?",
						"english": "Captain... should we keep trusting that light?",
						"japanese": "隊長…あの光を…信じ続けるべきでしょうか？",
						"chinese": "队长……我们还要继续相信那束光吗？",
						"french": "Capitaine... devons-nous continuer à croire en cette lumière ?",
						"spanish": "Capitán... ¿debemos seguir confiando en esa luz?",
						"vietnamese": "Đội trưởng... chúng ta có nên tiếp tục tin vào ánh sáng đó không?",
						"thai": "หัวหน้าครับ... เราควรจะ... เชื่อในแสงนั้นต่อไปดีไหม?",
						"hindi": "कैप्टन... क्या हमें उस रोशनी पर... भरोसा करते रहना चाहिए?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 저 빛만이… 유일한 희망이다.",
						"english": "Yes. That light alone... is our only hope.",
						"japanese": "ああ。あの光だけが…唯一の希望だ。",
						"chinese": "是的。只有那束光……才是唯一的希望。",
						"french": "Oui. Cette lumière seule... est notre seul espoir.",
						"spanish": "Sí. Esa luz... es nuestra única esperanza.",
						"vietnamese": "Phải. Chỉ có ánh sáng đó... là hy vọng duy nhất.",
						"thai": "ใช่ แสงนั้น... คือความหวังเดียวของเรา",
						"hindi": "हाँ। वह रोशनी ही... हमारी एकमात्र उम्मीद है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빛이 멈춰 선 곳. 거대한 얼음 동굴에서 정체 모를 그림자가 나타났다.",
						"english": "Where light ends, an unknown shadow emerged from the colossal ice cave.",
						"japanese": "光が止まる場所。巨大な氷の洞窟から正体不明の影が現れた。",
						"chinese": "光止之处。一道不明的黑影从巨大的冰洞中浮现。",
						"french": "Là où la lumière s'arrête, une ombre inconnue émergea de l'immense caverne de glace.",
						"spanish": "Donde la luz se detiene, una sombra desconocida emergió de la gigantesca cueva de hielo.",
						"vietnamese": "Nơi ánh sáng dừng lại, một bóng đen vô danh hiện ra từ hang băng khổng lồ.",
						"thai": "ณ ที่ที่แสงหยุดลง เงามืดนิรนามปรากฏขึ้นจากถ้ำน้ำแข็งขนาดมหึมา",
						"hindi": "जहां रोशनी रुकती है, एक अज्ञात छाया विशाल बर्फ की गुफा से निकली।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 이 혹한의 땅에 발을 들이는가.",
						"english": "How dare you… tread upon this frozen land.",
						"japanese": "敢えて…この極寒の地に足を踏み入れるか。",
						"chinese": "竟敢…踏足这苦寒之地。",
						"french": "Comment osez-vous… fouler cette terre gelée.",
						"spanish": "¿Cómo osas… pisar esta tierra gélida?",
						"vietnamese": "Ngươi… dám đặt chân lên vùng đất băng giá này sao.",
						"thai": "เจ้า… กล้าเหยียบย่างเข้ามาในดินแดนอันหนาวเหน็บนี้หรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस जमी हुई भूमि पर कदम रखने की।"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "비켜라! 우리는 길을 찾는 중이다!",
						"english": "Out of the way! We're seeking a path!",
						"japanese": "退け！我々は道を探しているのだ！",
						"chinese": "让开！我们正在寻找出路！",
						"french": "Dégage ! Nous cherchons notre chemin !",
						"spanish": "¡Apártate! ¡Estamos buscando un camino!",
						"vietnamese": "Tránh ra! Chúng ta đang tìm đường!",
						"thai": "หลีกไป! พวกเรากำลังหาทางอยู่!",
						"hindi": "रास्ता छोड़ो! हम रास्ता ढूंढ रहे हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 길은… 너희의 무덤이다.",
						"english": "The path of {random_boss}… is your grave.",
						"japanese": "{random_boss}の道は…お前たちの墓場だ。",
						"chinese": "{random_boss}的道路…就是你们的坟墓。",
						"french": "Le chemin de {random_boss}… est votre tombe.",
						"spanish": "El camino de {random_boss}… es vuestra tumba.",
						"vietnamese": "Con đường của {random_boss}… chính là nấm mồ của các ngươi.",
						"thai": "เส้นทางของ {random_boss}… คือหลุมฝังศพของพวกเจ้า",
						"hindi": "{random_boss} का मार्ग… तुम्हारी कब्र है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "피할 수 없어. 싸워야 한다!",
						"english": "No escape. We must fight!",
						"japanese": "逃げられない。戦うしかない！",
						"chinese": "无可回避。必须一战！",
						"french": "Impossible d'y échapper. Il faut se battre !",
						"spanish": "No hay escape. ¡Debemos luchar!",
						"vietnamese": "Không thể tránh được. Phải chiến đấu thôi!",
						"thai": "หนีไม่พ้น ต้องสู้!",
						"hindi": "बच नहीं सकते। हमें लड़ना होगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음 조각처럼 부서졌다. 푸른 빛이 다시 길을 열었다.",
						"english": "The colossal shadow shattered like ice. A blue light reopened the path.",
						"japanese": "巨大な影が氷の破片のように砕け散った。青い光が再び道を開いた。",
						"chinese": "巨大的黑影如冰块般破碎。一道蓝光再次打开了通路。",
						"french": "L'ombre colossale se brisa comme de la glace. Une lumière bleue rouvrit le chemin.",
						"spanish": "La sombra colosal se hizo añicos como el hielo. Una luz azul reabrió el camino.",
						"vietnamese": "Bóng đen khổng lồ vỡ tan như băng. Một luồng sáng xanh lại mở ra con đường.",
						"thai": "เงามืดมหึมาแตกสลายราวกับน้ำแข็ง แสงสีน้ำเงินเปิดทางอีกครั้ง",
						"hindi": "विशाल छाया बर्फ की तरह बिखर गई। नीली रोशनी ने फिर से रास्ता खोल दिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 끝없는 길….",
						"english": "Foolish… an endless path….",
						"japanese": "愚かな…終わりのない道…。",
						"chinese": "愚蠢…无尽之路…。",
						"french": "Insensés… un chemin sans fin….",
						"spanish": "Necios… un camino sin fin….",
						"vietnamese": "Ngốc nghếch… con đường vô tận….",
						"thai": "โง่เขลา… เส้นทางที่ไม่มีที่สิ้นสุด…",
						"hindi": "मूर्ख… एक अंतहीन रास्ता…।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고? 아직 멀었단 말인가.",
						"english": "…What? Not over yet?",
						"japanese": "…何だと？まだ遠いというのか。",
						"chinese": "…什么？还没结束吗。",
						"french": "…Quoi ? Pas encore fini ?",
						"spanish": "¿Qué? ¿Todavía no ha terminado?",
						"vietnamese": "…Cái gì? Vẫn chưa xong sao?",
						"thai": "…อะไรนะ? ยังไม่จบอีกหรือ",
						"hindi": "…क्या? अभी तक खत्म नहीं हुआ?"
					},
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래도… 한 걸음 나아갔어. 빛을 따라가자.",
						"english": "Still… we've advanced a step. Let's follow the light.",
						"japanese": "しかし…一歩進んだ。光を追おう。",
						"chinese": "即使如此…我们前进了一步。跟着光走吧。",
						"french": "Pourtant… nous avons avancé d'un pas. Suivons la lumière.",
						"spanish": "Aún así… hemos avanzado un paso. Sigamos la luz.",
						"vietnamese": "Dù sao… chúng ta cũng đã tiến thêm một bước. Hãy theo ánh sáng.",
						"thai": "ถึงอย่างนั้น… เราก็ก้าวหน้าไปอีกหนึ่งก้าว ตามแสงไปเถอะ",
						"hindi": "फिर भी… हम एक कदम आगे बढ़े हैं। रोशनी का पीछा करें।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "희미한 빛을 따라, 탐험대는 또 다시 눈보라 속으로 향했다.",
						"english": "Following the faint light, the expedition once again ventured into the blizzard.",
						"japanese": "かすかな光を追って、探検隊は再び吹雪の中へと向かった。",
						"chinese": "循着微弱的光芒，探险队再次深入暴风雪之中。",
						"french": "Suivant la faible lumière, l'expédition s'aventura de nouveau dans le blizzard.",
						"spanish": "Siguiendo la tenue luz, la expedición se adentró una vez más en la ventisca.",
						"vietnamese": "Theo ánh sáng lờ mờ, đoàn thám hiểm lại một lần nữa tiến vào bão tuyết.",
						"thai": "คณะสำรวจตามแสงเลือนราง มุ่งหน้าสู่พายุหิมะอีกครั้ง",
						"hindi": "मंद रोशनी का पीछा करते हुए, अभियान दल एक बार फिर बर्फीले तूफान में चला गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 칼날이 모든 것을 얼렸다. 탐험대는 쓰러졌다.",
						"english": "The bitter blade froze all. The expedition fell.",
						"japanese": "酷寒の刃が全てを凍らせた。探検隊は倒れた。",
						"chinese": "酷寒之刃冻结了一切。探险队倒下了。",
						"french": "La lame glaciale gela tout. L'expédition succomba.",
						"spanish": "La hoja gélida congeló todo. La expedición cayó.",
						"vietnamese": "Lưỡi dao băng giá đóng băng mọi thứ. Đoàn thám hiểm đã gục ngã.",
						"thai": "คมดาบเยือกแข็งแช่แข็งทุกสิ่ง คณะสำรวจล้มลง.",
						"hindi": "बर्फीली धार ने सब कुछ जमा दिया। अभियान दल गिर गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "절망 속에서… 영원히 잠들어라.",
						"english": "In despair... sleep forever.",
						"japanese": "絶望の中で… 永遠に眠れ。",
						"chinese": "在绝望中… 永远沉睡吧。",
						"french": "Dans le désespoir... dors à jamais.",
						"spanish": "En la desesperación... duerme para siempre.",
						"vietnamese": "Trong tuyệt vọng... ngủ vĩnh viễn đi.",
						"thai": "ในความสิ้นหวัง... หลับใหลชั่วนิรันดร์.",
						"hindi": "निराशा में... हमेशा के लिए सो जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어. 우리는 돌아가야 해….",
						"english": "Ugh... it's not over yet. We must return...",
						"japanese": "くっ… まだ… 終わってない。私たちは戻らなきゃ…。",
						"chinese": "呃… 还没… 结束。我们必须回去…。",
						"french": "Urgh... ce n'est pas encore fini. Nous devons revenir...",
						"spanish": "Uf... aún no ha terminado. Debemos regresar...",
						"vietnamese": "Khụ... vẫn chưa... kết thúc. Chúng ta phải quay về...",
						"thai": "อึก... ยังไม่... จบ เราต้องกลับไป...",
						"hindi": "उफ़... अभी... ख़त्म नहीं हुआ। हमें वापस जाना होगा..."
					},
					"emotion": "angry",
					"speaker": "bran"
				}
			],
			"id": 15
		}
	]
} as const;
