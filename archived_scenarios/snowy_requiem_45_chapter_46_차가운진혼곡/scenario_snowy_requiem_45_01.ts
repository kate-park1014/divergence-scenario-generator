export const scenario_snowy_requiem_45_01 = {
	"scenario_id": "snowy_requiem_45_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세상은 혹한에 잠식되어간다.",
			"온기를 잃어가는 시간, 모든 것이 멈춰버릴 때까지.",
			"잊혀진 예언이 속삭인다.",
			"파멸의 시작을, 피할 수 없는 비극의 서막을."
		],
		"english": [
			"The world succumbs to a bitter cold.",
			"As warmth fades, until everything halts.",
			"A forgotten prophecy whispers.",
			"The dawn of ruin, an inescapable tragedy's prelude."
		],
		"japanese": [
			"世界は酷寒に蝕まれていく。",
			"温もりを失う時間、全てが止まるまで。",
			"忘れ去られた予言が囁く。",
			"破滅の始まり、避けられぬ悲劇の序幕を。"
		],
		"chinese": [
			"世界正被严寒侵蚀。",
			"失去温暖的时光，直到万物停滞。",
			"被遗忘的预言低语着。",
			"毁灭的开端，一场无法避免的悲剧序幕。"
		],
		"french": [
			"Le monde est envahi par un froid mordant.",
			"Le temps perd sa chaleur, jusqu'à ce que tout s'arrête.",
			"Une prophétie oubliée murmure.",
			"L'aube de la ruine, le prélude à une tragédie inévitable."
		],
		"spanish": [
			"El mundo es devorado por un frío amargo.",
			"El tiempo pierde su calidez, hasta que todo se detenga.",
			"Una profecía olvidada susurra.",
			"El amanecer de la ruina, el preludio de una tragedia ineludible."
		],
		"vietnamese": [
			"Thế giới đang bị giá rét nuốt chửng.",
			"Thời gian mất dần hơi ấm, cho đến khi mọi thứ ngưng đọng.",
			"Một lời tiên tri bị lãng quên thì thầm.",
			"Khởi đầu của sự hủy diệt, khúc dạo đầu cho bi kịch không thể tránh khỏi."
		],
		"thai": [
			"โลกกำลังถูกความหนาวเหน็บกัดกิน.",
			"เวลาที่ไออุ่นเลือนหายไป จนกว่าทุกสิ่งจะหยุดนิ่ง.",
			"คำพยากรณ์ที่ถูกลืมเลือนกระซิบ.",
			"จุดเริ่มต้นแห่งหายนะ, โหมโรงสู่โศกนาฏกรรมที่ไม่อาจหลีกเลี่ยง."
		],
		"hindi": [
			"दुनिया भीषण ठंड में समाती जा रही है।",
			"गर्माहट खोता समय, जब तक सब कुछ थम न जाए।",
			"एक भूली हुई भविष्यवाणी फुसफुसाती है।",
			"विनाश की शुरुआत, एक अपरिहार्य त्रासदी की प्रस्तावना।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "끝없는 눈보라가 휘몰아쳤다. 세상은 점차 온기를 잃어가고 있었다.",
						"english": "An endless blizzard raged. The world was steadily losing its warmth.",
						"japanese": "終わりのない吹雪が吹き荒れた。世界は次第に温もりを失いつつあった。",
						"chinese": "无尽的暴风雪肆虐。世界逐渐失去温暖。",
						"french": "Un blizzard incessant faisait rage. Le monde perdait progressivement sa chaleur.",
						"spanish": "Una tormenta de nieve interminable se desató. El mundo perdía su calidez poco a poco.",
						"vietnamese": "Bão tuyết vô tận hoành hành. Thế giới dần mất đi hơi ấm.",
						"thai": "พายุหิมะไม่มีที่สิ้นสุดโหมกระหน่ำ โลกค่อยๆ สูญเสียความอบอุ่นไป.",
						"hindi": "अंतहीन बर्फीला तूफ़ान आया। दुनिया धीरे-धीरे अपनी गर्माहट खो रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이 예언은 진실이에요. 이제 시작일 뿐이죠.",
						"english": "...This prophecy is true. It's only the beginning.",
						"japanese": "…この予言は真実よ。まだ始まったばかりなの。",
						"chinese": "……这个预言是真的。这只是个开始。",
						"french": "...Cette prophétie est vraie. Ce n'est que le début.",
						"spanish": "...Esta profecía es cierta. Es solo el principio.",
						"vietnamese": "...Lời tiên tri này là thật. Đây chỉ mới là khởi đầu thôi.",
						"thai": "...คำพยากรณ์นี้เป็นจริง นี่เพิ่งจะเริ่มต้นเท่านั้น.",
						"hindi": "...यह भविष्यवाणी सच है। यह तो बस शुरुआत है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 예언이야?",
						"english": "What prophecy?",
						"japanese": "何の予言だ？",
						"chinese": "什么预言？",
						"french": "Quelle prophétie ?",
						"spanish": "¿Qué profecía?",
						"vietnamese": "Lời tiên tri gì cơ?",
						"thai": "คำพยากรณ์อะไร?",
						"hindi": "कौन सी भविष्यवाणी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것이 얼어붙는 시간. 남은 온기가 얼마 없다고 경고하고 있어요.",
						"english": "A time when everything freezes. It warns that little warmth remains.",
						"japanese": "全てが凍りつく時。残された温もりはもう少ないと警告しているの。",
						"chinese": "万物冰封之时。它警告说，剩余的温暖所剩无几。",
						"french": "Un temps où tout gèle. Il avertit qu'il reste peu de chaleur.",
						"spanish": "Un tiempo en el que todo se congela. Advierte que queda poca calidez.",
						"vietnamese": "Thời khắc mọi thứ đóng băng. Nó cảnh báo rằng hơi ấm còn lại chẳng bao nhiêu.",
						"thai": "เวลาที่ทุกสิ่งแข็งตัว มันเตือนว่าเหลือไออุ่นอยู่น้อยเต็มทีแล้ว.",
						"hindi": "जब सब कुछ जम जाता है। यह चेतावनी दे रहा है कि थोड़ी सी ही गर्माहट बची है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록에 따르면… 특정 시각마다 온기를 잃는 저주가 발동한다고 해요.",
						"english": "Records say... a warmth-draining curse activates at certain times.",
						"japanese": "記録によると…特定の時刻ごとに温もりを失う呪いが発動するそうよ。",
						"chinese": "根据记载……每到特定时刻，就会启动一个失去温暖的诅咒。",
						"french": "Selon les registres... une malédiction qui dérobe la chaleur s'active à des heures précises.",
						"spanish": "Según los registros... una maldición que quita el calor se activa a horas específicas.",
						"vietnamese": "Theo ghi chép... một lời nguyền tước đi hơi ấm sẽ kích hoạt vào những thời điểm nhất định.",
						"thai": "ตามบันทึกแล้ว... คำสาปที่ทำให้สูญเสียความอบอุ่นจะทำงานในเวลาที่กำหนด.",
						"hindi": "रिकॉर्ड के अनुसार... एक शाप जो गर्माहट छीन लेता है, खास समय पर सक्रिय होता है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "특정 시각마다? 정말이야?",
						"english": "At specific times? Really?",
						"japanese": "特定の時刻ごとに？本当か？",
						"chinese": "每到特定时刻？真的吗？",
						"french": "À des heures précises ? Vraiment ?",
						"spanish": "¿A horas específicas? ¿De verdad?",
						"vietnamese": "Vào những thời điểm nhất định sao? Thật ư?",
						"thai": "ในเวลาที่กำหนด? จริงเหรอ?",
						"hindi": "खास समय पर? सच में?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 땅은 서서히 죽어가요. 멈추지 않으면… 영원히 얼어붙겠죠.",
						"english": "This land is slowly dying. If we don't stop it... it will freeze forever.",
						"japanese": "この地は徐々に死んでいます。止めなければ…永遠に凍りつくでしょう。",
						"chinese": "这片土地正在慢慢死去。如果我们不阻止它……它将永远被冰封。",
						"french": "Cette terre se meurt lentement. Si nous n'agissons pas... elle gèlera à jamais.",
						"spanish": "Esta tierra está muriendo lentamente. Si no lo detenemos... se congelará para siempre.",
						"vietnamese": "Vùng đất này đang chết dần. Nếu không ngăn chặn... nó sẽ đóng băng vĩnh viễn.",
						"thai": "ดินแดนนี้กำลังจะตายลงช้าๆ หากไม่หยุดยั้ง... มันจะถูกแช่แข็งไปตลอดกาล",
						"hindi": "यह भूमि धीरे-धीरे मर रही है। अगर हम इसे नहीं रोकते... तो यह हमेशा के लिए जम जाएगी।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "막아야 해.",
						"english": "We must stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn chặn.",
						"thai": "ต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 혹한 속에서 온기를 찾으려 할수록… 파멸에 가까워진다고 해요.",
						"english": "The more we seek warmth in this bitter cold... the closer we get to ruin, they say.",
						"japanese": "この極寒の中で温もりを求めれば求めるほど…破滅に近づくと言われています。",
						"chinese": "他们说，在这严寒中越是寻求温暖……就越是接近毁灭。",
						"french": "On dit que plus on cherche de chaleur dans ce froid glacial... plus on s'approche de la ruine.",
						"spanish": "Dicen que cuanto más buscamos calor en este frío gélido... más nos acercamos a la ruina.",
						"vietnamese": "Người ta nói rằng càng tìm kiếm hơi ấm trong cái giá lạnh này... càng đến gần sự hủy diệt.",
						"thai": "ยิ่งแสวงหาความอบอุ่นท่ามกลางความหนาวเหน็บนี้มากเท่าไหร่... ก็ยิ่งเข้าใกล้หายนะมากขึ้นเท่านั้น ว่ากันว่าอย่างนั้น",
						"hindi": "कहते हैं, इस भीषण ठंड में जितनी ज़्यादा गर्माहट की तलाश करेंगे... उतनी ही बर्बादी के करीब पहुँचेंगे।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 말이야? 온기를 찾아야 하잖아.",
						"english": "What does that mean? We need to find warmth.",
						"japanese": "どういう意味だ？ 温もりを見つけなければならないのに。",
						"chinese": "那是什么意思？我们不是应该寻找温暖吗？",
						"french": "Que veux-tu dire ? On doit trouver de la chaleur, non ?",
						"spanish": "¿Qué significa eso? Necesitamos encontrar calor.",
						"vietnamese": "Ý đó là sao? Chúng ta phải tìm hơi ấm chứ.",
						"thai": "นั่นหมายความว่าอะไร? เราต้องหาความอบอุ่นไม่ใช่เหรอ?",
						"hindi": "इसका क्या मतलब है? हमें तो गर्माहट ढूंढनी है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "예언은 모순적이죠. 하지만… 부디 조심하세요.",
						"english": "Prophecies are contradictory. But... please be careful.",
						"japanese": "予言は矛盾しています。ですが…どうか気をつけてください。",
						"chinese": "预言总是充满矛盾。但是……请务必小心。",
						"french": "Les prophéties sont contradictoires. Mais... s'il vous plaît, soyez prudent.",
						"spanish": "Las profecías son contradictorias. Pero... por favor, ten cuidado.",
						"vietnamese": "Lời tiên tri mâu thuẫn lắm. Nhưng... xin hãy cẩn thận.",
						"thai": "คำทำนายนั้นขัดแย้งกัน แต่... โปรดระมัดระวัง",
						"hindi": "भविष्यवाणियाँ विरोधाभासी होती हैं। लेकिन... कृपया सावधान रहें।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "세상의 온기는 점점 더 희미해졌다.",
						"english": "The world's warmth grew increasingly faint.",
						"japanese": "世界の温もりは次第に薄れていった。",
						"chinese": "世界的温暖越来越微弱了。",
						"french": "La chaleur du monde s'est progressivement estompée.",
						"spanish": "El calor del mundo se desvaneció cada vez más.",
						"vietnamese": "Hơi ấm của thế giới ngày càng mờ nhạt.",
						"thai": "ความอบอุ่นของโลกค่อยๆ จางหายไป",
						"hindi": "दुनिया की गर्माहट धीरे-धीरे कम होती गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "시간이 얼마 남지 않았어요. 예언의 끝이 보여요.",
						"english": "There isn't much time left. I see the end of the prophecy.",
						"japanese": "時間があまり残されていません。予言の終わりが見えます。",
						"chinese": "时间不多了。我看到了预言的结局。",
						"french": "Il ne reste plus beaucoup de temps. Je vois la fin de la prophétie.",
						"spanish": "No queda mucho tiempo. Veo el final de la profecía.",
						"vietnamese": "Không còn nhiều thời gian nữa. Tôi thấy được kết thúc của lời tiên tri.",
						"thai": "เหลือเวลาไม่มากแล้ว ฉันเห็นจุดจบของคำทำนาย",
						"hindi": "समय बहुत कम बचा है। मुझे भविष्यवाणी का अंत दिख रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "돌아갈 수 없다는 거야?",
						"english": "You mean we can't go back?",
						"japanese": "戻れないということか？",
						"chinese": "你的意思是回不去了吗？",
						"french": "Tu veux dire qu'on ne peut pas revenir en arrière ?",
						"spanish": "¿Quieres decir que no podemos volver?",
						"vietnamese": "Ý anh là không thể quay lại sao?",
						"thai": "หมายความว่ากลับไปไม่ได้แล้วเหรอ?",
						"hindi": "क्या तुम कहना चाहते हो कि हम वापस नहीं जा सकते?"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…되돌릴 수 없을 거예요. 이미 시작된 비극이니까.",
						"english": "...It can't be undone. It's a tragedy that has already begun.",
						"japanese": "…元には戻せないでしょう。すでに始まった悲劇ですから。",
						"chinese": "……无法挽回了。因为这已是一场开始的悲剧。",
						"french": "...On ne pourra pas revenir en arrière. C'est une tragédie qui a déjà commencé.",
						"spanish": "...No se podrá deshacer. Es una tragedia que ya ha comenzado.",
						"vietnamese": "...Không thể quay lại được. Vì đó là bi kịch đã bắt đầu rồi.",
						"thai": "...มันแก้ไขไม่ได้แล้ว เพราะมันเป็นโศกนาฏกรรมที่เริ่มต้นไปแล้ว",
						"hindi": "...इसे बदला नहीं जा सकता। यह एक त्रासदी है जो पहले ही शुरू हो चुकी है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈춰야 해. 어떻게든.",
						"english": "We have to stop it. Somehow.",
						"japanese": "止めなければならない。何としても。",
						"chinese": "必须阻止。无论如何。",
						"french": "Il faut l'arrêter. Par tous les moyens.",
						"spanish": "Debemos detenerlo. De alguna manera.",
						"vietnamese": "Phải ngăn chặn. Bằng mọi cách.",
						"thai": "ต้องหยุดมันให้ได้ ไม่ว่าจะด้วยวิธีใดก็ตาม",
						"hindi": "हमें इसे रोकना होगा। किसी भी तरह से।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "헛된 저항. 온기는 이미 사라졌다.",
						"english": "Futile resistance. The warmth is already gone.",
						"japanese": "無駄な抵抗だ。温もりはもう消えた。",
						"chinese": "徒劳的反抗。温暖已然消逝。",
						"french": "Résistance vaine. La chaleur a déjà disparu.",
						"spanish": "Resistencia inútil. El calor ya se ha ido.",
						"vietnamese": "Chống cự vô ích. Hơi ấm đã biến mất rồi.",
						"thai": "การต่อต้านที่ไร้ผล ความอบอุ่นได้หายไปแล้ว",
						"hindi": "व्यर्थ का प्रतिरोध। गर्माहट पहले ही जा चुकी है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 포기 못 해. 다시 돌아올 거야.",
						"english": "...Can't give up yet. I'll be back.",
						"japanese": "…まだ諦めない。必ず戻ってくる。",
						"chinese": "……我还没放弃。我会再回来的。",
						"french": "...Je ne peux pas encore abandonner. Je reviendrai.",
						"spanish": "...Todavía no puedo rendirme. Volveré.",
						"vietnamese": "...Chưa thể bỏ cuộc. Ta sẽ trở lại.",
						"thai": "...ยังไม่ยอมแพ้ จะกลับมาอีกครั้ง",
						"hindi": "...अभी हार नहीं मान सकता। मैं वापस आऊँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧 모든 것이 멈출 것이다. 너희도, 세상도.",
						"english": "Soon everything will cease. You, and the world.",
						"japanese": "間もなく全てが止まるだろう。お前たちも、世界も。",
						"chinese": "很快一切都将停止。你们，以及这个世界。",
						"french": "Bientôt tout s'arrêtera. Vous, et le monde.",
						"spanish": "Pronto todo se detendrá. Vosotros, y el mundo.",
						"vietnamese": "Chẳng mấy chốc mọi thứ sẽ ngừng lại. Ngươi, và cả thế giới.",
						"thai": "อีกไม่นานทุกสิ่งจะหยุดลง ทั้งพวกเจ้าและโลกใบนี้",
						"hindi": "जल्द ही सब कुछ थम जाएगा। तुम भी, और दुनिया भी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는 얼음 조각처럼 산산이 부서졌다.",
						"english": "The shadow shattered into fragments like ice.",
						"japanese": "「影は氷の破片のように粉々に砕け散った。」",
						"chinese": "“影子像冰块一样碎裂开来。”",
						"french": "« L'ombre se brisa en fragments comme de la glace. »",
						"spanish": "« La sombra se hizo pedazos como fragmentos de hielo. »",
						"vietnamese": "Cái bóng vỡ tan tành như mảnh băng.",
						"thai": "เงาแตกกระจายราวกับเศษน้ำแข็ง",
						"hindi": "परछाई बर्फ के टुकड़ों की तरह बिखर गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "「…終わったのか？」",
						"chinese": "“……结束了吗？”",
						"french": "« ...C'est fini ? »",
						"spanish": "« ¿...Se acabó? »",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하나의 존재가 사라졌지만… 예언은 아직 끝나지 않았어요.",
						"english": "One being has vanished... but the prophecy isn't over yet.",
						"japanese": "「一つの存在は消えたが…予言はまだ終わっていない。」",
						"chinese": "“一个存在消失了……但预言还没有结束。”",
						"french": "« Un être a disparu... mais la prophétie n'est pas encore terminée. »",
						"spanish": "« Un ser ha desaparecido... pero la profecía aún no ha terminado. »",
						"vietnamese": "Một sinh vật đã biến mất... nhưng lời tiên tri vẫn chưa kết thúc.",
						"thai": "สิ่งมีชีวิตหนึ่งหายไปแล้ว...แต่คำพยากรณ์ยังไม่สิ้นสุด",
						"hindi": "एक अस्तित्व मिट गया है... पर भविष्यवाणी अभी खत्म नहीं हुई।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저주는 계속될 거예요. 파멸은… 더 깊이 숨어있을 뿐이죠.",
						"english": "The curse will continue. Ruin is... merely hidden deeper.",
						"japanese": "「呪いは続くだろう。破滅は…ただ深く隠れているだけだ。」",
						"chinese": "“诅咒将继续。毁灭……只是隐藏得更深了。”",
						"french": "« La malédiction continuera. La ruine est... simplement cachée plus profondément. »",
						"spanish": "« La maldición continuará. La ruina... solo está oculta más profundamente. »",
						"vietnamese": "Lời nguyền sẽ tiếp diễn. Sự hủy diệt... chỉ là ẩn sâu hơn thôi.",
						"thai": "คำสาปจะยังคงดำเนินต่อไป ความพินาศ...เพียงแต่ซ่อนเร้นลึกลงไปเท่านั้น",
						"hindi": "शाप जारी रहेगा। विनाश... बस और गहराई से छिपा हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "싸움은 끝났지만, 혹한의 시간은 계속되었다. 더 깊은 절망 속으로.",
						"english": "The battle ended, but the time of bitter cold continued. Into deeper despair.",
						"japanese": "「戦いは終わったが、酷寒の時は続いた。より深い絶望の中へ。」",
						"chinese": "“战斗结束了，但严寒的时代仍在继续。走向更深的绝望。”",
						"french": "« La bataille prit fin, mais le temps du froid glacial perdura. Vers un désespoir plus profond. »",
						"spanish": "« La batalla terminó, pero el tiempo del frío glacial continuó. Hacia una desesperación más profunda. »",
						"vietnamese": "Trận chiến đã kết thúc, nhưng thời khắc lạnh giá vẫn tiếp diễn. Chìm sâu hơn vào tuyệt vọng.",
						"thai": "การต่อสู้สิ้นสุดลง แต่ช่วงเวลาแห่งความหนาวเหน็บยังคงดำเนินต่อไป สู่ความสิ้นหวังที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "लड़ाई खत्म हो गई, पर भीषण ठंड का समय जारी रहा। गहरे निराशा में।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 자가… 예언 속의 그 그림자예요. 기록되지 않은 이름의 존재.",
						"english": "This one... it's the shadow from the prophecy. The being of an unrecorded name.",
						"japanese": "「こいつが…予言の影だ。記録にない名の存在。」",
						"chinese": "“此人……就是预言中的那个影子。一个未被记载之名的存在。”",
						"french": "« C'est lui... l'ombre de la prophétie. L'être au nom oublié. »",
						"spanish": "« Este... es la sombra de la profecía. El ser de un nombre no registrado. »",
						"vietnamese": "Kẻ này... chính là cái bóng trong lời tiên tri. Sinh vật không tên được ghi chép.",
						"thai": "นี่คือ...เงาในคำพยากรณ์ ผู้มีนามที่มิได้ถูกบันทึกไว้",
						"hindi": "यह... वही परछाई है भविष्यवाणी में। एक अज्ञात नाम का अस्तित्व।"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "up",
					"speaker": "eira",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "거대한 그림자가 서서히 형체를 드러냈다.",
						"english": "The colossal shadow slowly revealed its form.",
						"japanese": "「巨大な影がゆっくりと姿を現した。」",
						"chinese": "“巨大的影子缓缓显露了形体。”",
						"french": "« L'ombre colossale révéla lentement sa forme. »",
						"spanish": "« La sombra colosal reveló lentamente su forma. »",
						"vietnamese": "Cái bóng khổng lồ từ từ hiện hình.",
						"thai": "เงายักษ์ค่อยๆ เผยรูปร่างออกมา",
						"hindi": "विशाल परछाई ने धीरे-धीरे अपना रूप दिखाया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "온기를 갈망하는 자들… 어리석군.",
						"english": "Those who yearn for warmth... foolish.",
						"japanese": "「温もりを渇望する者たち…愚かだな。」",
						"chinese": "“那些渴望温暖的人……真是愚蠢。”",
						"french": "« Ceux qui aspirent à la chaleur... quelle folie. »",
						"spanish": "« Aquellos que anhelan calor... qué necios. »",
						"vietnamese": "Những kẻ khao khát hơi ấm... thật ngu ngốc.",
						"thai": "ผู้โหยหาความอบอุ่น...ช่างโง่เขลา",
						"hindi": "जो गर्मी की लालसा रखते हैं... मूर्ख।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 혹한을 만들었나!",
						"english": "Did you create this bitter cold?!",
						"japanese": "「お前がこの酷寒を生み出したのか！」",
						"chinese": "“是你制造了这场严寒吗！”",
						"french": "« C'est toi qui as créé ce froid glacial ! »",
						"spanish": "« ¿Tú creaste este frío glacial?! »",
						"vietnamese": "Ngươi đã tạo ra cái lạnh thấu xương này ư!",
						"thai": "เจ้าสร้างความหนาวเหน็บนี้ขึ้นมาหรือ!",
						"hindi": "क्या तुमने यह भीषण ठंड बनाई है!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없는 흐름이다. 너희도 곧 얼어붙을 것이다.",
						"english": "It's an unstoppable flow. You too will soon freeze.",
						"japanese": "「止められぬ流れだ。お前たちもじき凍りつくだろう。」",
						"chinese": "“这是不可阻挡的洪流。你们也很快就会被冻结。”",
						"french": "« C'est un flux imparable. Vous aussi, vous allez bientôt geler. »",
						"spanish": "« Es un flujo imparable. Vosotros también os congelaréis pronto. »",
						"vietnamese": "Đây là dòng chảy không thể ngăn cản. Các ngươi cũng sẽ sớm đóng băng thôi.",
						"thai": "นี่คือกระแสที่ไม่อาจหยุดยั้งได้ พวกเจ้าก็จะแข็งตายในไม่ช้า",
						"hindi": "यह एक अथक प्रवाह है। तुम भी जल्द ही जम जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	]
} as const;
