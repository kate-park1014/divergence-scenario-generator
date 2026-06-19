export const scenario_modern_whisper_6_04 = {
	"scenario_id": "modern_whisper_6_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"밤은 깊어지고, 도시는 악몽으로 물들었다.",
			"정체 모를 비명이 귓가를 맴돌고.",
			"그림자 속, 누군가 모든 것을 지켜보고 있었다.",
			"미스터리는 깊어지고, 공포는 현실이 된다."
		],
		"english": [
			"Night deepens, the city steeped in nightmare.",
			"Unidentifiable screams linger in the air.",
			"In the shadows, someone watched everything.",
			"The mystery deepens, fear becomes reality."
		],
		"japanese": [
			"夜は深まり、都市は悪夢に染まった。",
			"正体不明の悲鳴が耳元をかすめる。",
			"影の中、誰かがすべてを見つめていた。",
			"謎は深まり、恐怖は現実となる。"
		],
		"chinese": [
			"夜色渐浓，城市笼罩在噩梦之中。",
			"不明尖叫声萦绕耳畔。",
			"暗影之中，有人在注视着一切。",
			"谜团渐深，恐惧变为现实。"
		],
		"french": [
			"La nuit s'épaissit, la ville baignée de cauchemar.",
			"Des cris inconnus résonnent à nos oreilles.",
			"Dans l'ombre, quelqu'un observait tout.",
			"Le mystère s'épaissit, la peur devient réalité."
		],
		"spanish": [
			"La noche se cierne, la ciudad sumida en pesadillas.",
			"Gritos desconocidos resuenan en el aire.",
			"En las sombras, alguien observaba todo.",
			"El misterio se profundiza, el miedo se vuelve realidad."
		],
		"vietnamese": [
			"Đêm dần buông, thành phố chìm trong ác mộng.",
			"Những tiếng hét không rõ nguồn gốc cứ văng vẳng bên tai.",
			"Trong bóng tối, có kẻ đang theo dõi mọi thứ.",
			"Bí ẩn ngày càng sâu, nỗi sợ hãi trở thành hiện thực."
		],
		"thai": [
			"รัตติกาลลึกซึ้ง เมืองถูกย้อมด้วยฝันร้าย",
			"เสียงกรีดร้องที่ไม่รู้จักยังคงก้องอยู่ในหู",
			"ในเงามืด มีใครบางคนกำลังเฝ้าดูทุกสิ่ง",
			"ความลึกลับยิ่งลึกซึ้ง ความกลัวกลายเป็นจริง"
		],
		"hindi": [
			"रात गहरी हो रही है, शहर दुःस्वप्न में डूब गया।",
			"अज्ञात चीखें कानों में गूंज रही हैं।",
			"छाया में, कोई सब कुछ देख रहा था।",
			"रहस्य गहराता जा रहा है, डर हकीकत बन रहा है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "밤이 깊어지자, 도시의 공기는 더욱 차가워졌다.",
						"english": "As night deepened, the city's air grew colder.",
						"japanese": "夜が深まるにつれ、街の空気はさらに冷たくなった。",
						"chinese": "夜色渐深，城市的空气也愈发冰冷。",
						"french": "À mesure que la nuit tombait, l'air de la ville devenait plus froid.",
						"spanish": "A medida que la noche se hacía más profunda, el aire de la ciudad se volvió más frío.",
						"vietnamese": "Khi đêm dần buông, không khí thành phố càng thêm lạnh lẽo.",
						"thai": "เมื่อค่ำคืนลึกซึ้ง อากาศในเมืองก็ยิ่งหนาวเย็นลง",
						"hindi": "रात गहराने के साथ, शहर की हवा और ठंडी हो गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "하아… 어제 꿈자리가 뒤숭숭했어. 계속 비명 소리가…",
						"english": "Ugh... I had a disturbing dream last night. Screams, endlessly...",
						"japanese": "はぁ…昨日は嫌な夢を見たよ。ずっと悲鳴が…",
						"chinese": "唉…我昨晚做了个噩梦。一直有尖叫声…",
						"french": "Pfff... J'ai fait un rêve perturbant hier soir. Des cris, sans fin...",
						"spanish": "Uf... Anoche tuve un sueño inquietante. Gritos, sin parar...",
						"vietnamese": "Haizz... Đêm qua tôi gặp ác mộng. Cứ có tiếng la hét...",
						"thai": "ฮ่า...เมื่อคืนฝันไม่ดีเลย มีแต่เสียงกรีดร้อง...",
						"hindi": "उफ़... कल रात मैंने एक परेशान करने वाला सपना देखा। चीखें, लगातार..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도… 잠을 제대로 못 잤어. 머리가 다 아파.",
						"english": "Me too... I couldn't sleep properly. My head hurts.",
						"japanese": "私も…まともに眠れなかった。頭が痛いよ。",
						"chinese": "我也是…没睡好。头都疼了。",
						"french": "Moi aussi... Je n'ai pas bien dormi. J'ai mal à la tête.",
						"spanish": "Yo también... No pude dormir bien. Me duele la cabeza.",
						"vietnamese": "Tôi cũng vậy... Không ngủ được. Đầu tôi đau quá.",
						"thai": "ฉันก็ด้วย...นอนไม่หลับเลย ปวดหัวไปหมดแล้ว",
						"hindi": "मैं भी... ठीक से सो नहीं पाया। मेरा सिर दर्द कर रहा है।"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "다들 같은 소리를 듣는군요. 저도 밤새 녹음했어요.",
						"english": "So everyone's hearing the same thing. I recorded it all night too.",
						"japanese": "皆さん、同じ音を聞いているんですね。私も一晩中録音しました。",
						"chinese": "看来大家都听到了同样的声音。我也录音了一整夜。",
						"french": "Donc tout le monde entend la même chose. J'ai aussi enregistré ça toute la nuit.",
						"spanish": "Así que todos están escuchando lo mismo. Yo también lo grabé toda la noche.",
						"vietnamese": "Vậy là mọi người đều nghe thấy cùng một âm thanh. Tôi cũng đã ghi âm cả đêm.",
						"thai": "ทุกคนได้ยินเสียงเดียวกันเลยสินะคะ ฉันก็อัดเสียงไว้ทั้งคืนเหมือนกัน",
						"hindi": "तो सब एक ही बात सुन रहे हैं। मैंने भी पूरी रात रिकॉर्ड किया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 소리… 단순한 꿈이 아닌 것 같아요.",
						"english": "This sound... It doesn't seem like just a dream.",
						"japanese": "この音…ただの夢じゃないみたい。",
						"chinese": "这声音…好像不是简单的梦。",
						"french": "Ce bruit... Ça ne semble pas être qu'un simple rêve.",
						"spanish": "Este sonido... No parece ser solo un sueño.",
						"vietnamese": "Âm thanh này... Có lẽ không chỉ là một giấc mơ đơn thuần.",
						"thai": "เสียงนี้...ดูเหมือนจะไม่ใช่แค่ความฝันธรรมดา",
						"hindi": "यह आवाज... यह सिर्फ एक सपना नहीं लगता।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "녹음된 파일입니다. 한번 들어보시죠. (이어폰을 건넨다)",
						"english": "Here's the recorded file. Take a listen. (Offers earphones)",
						"japanese": "録音されたファイルです。一度聞いてみてください。(イヤホンを渡す)",
						"chinese": "这是录音文件。听听看吧。(递过耳机)",
						"french": "Voici le fichier enregistré. Écoutez. (Tend des écouteurs)",
						"spanish": "Aquí está el archivo grabado. Escúchenlo. (Ofrece auriculares)",
						"vietnamese": "Đây là file ghi âm. Mời nghe thử. (Đưa tai nghe)",
						"thai": "นี่คือไฟล์ที่บันทึกไว้ ลองฟังดูสิ (ยื่นหูฟังให้)",
						"hindi": "यह रिकॉर्ड की गई फ़ाइल है। एक बार सुनिए। (ईयरफ़ोन देता है)"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "재생되는 소리는 명확하지 않았지만, 듣는 이의 심장을 찢는 듯했다.",
						"english": "The sound was unclear, yet it felt like it was tearing the listener's heart.",
						"japanese": "再生される音は不明瞭だったが、聞く者の心臓を抉るようだった。",
						"chinese": "播放的声音并不清晰，却像是要撕裂听者的心脏。",
						"french": "Le son était indistinct, mais il semblait déchirer le cœur de celui qui l'entendait.",
						"spanish": "El sonido no era claro, pero sentí que desgarraba el corazón del oyente.",
						"vietnamese": "Âm thanh phát ra không rõ ràng, nhưng như xé nát trái tim người nghe.",
						"thai": "เสียงที่ดังขึ้นไม่ชัดเจน แต่ราวกับกำลังฉีกหัวใจของผู้ฟัง",
						"hindi": "बजने वाली आवाज़ स्पष्ट नहीं थी, फिर भी ऐसा लग रहा था जैसे यह सुनने वाले के दिल को चीर रही हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "으윽… 다시 들으니 더 역겹네.",
						"english": "Ugh… Hearing it again, it's even more sickening.",
						"japanese": "うぅ…また聞くと、さらに吐き気がする。",
						"chinese": "呃…再听一遍，更恶心了。",
						"french": "Beurk… L'entendre à nouveau, c'est encore plus répugnant.",
						"spanish": "Ugh… Escucharlo de nuevo, es aún más asqueroso.",
						"vietnamese": "Ư… Nghe lại, càng ghê tởm hơn.",
						"thai": "อึก… ฟังอีกครั้ง มันน่าขยะแขยงกว่าเดิม",
						"hindi": "उफ़… इसे दोबारा सुनकर, यह और भी घृणित लगता है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "정말 꿈이 아니었잖아! 대체 이 소리의 정체가 뭐야?",
						"english": "It really wasn't a dream! What is the true nature of this sound?",
						"japanese": "本当に夢じゃなかった！一体この音の正体は何だ？",
						"chinese": "这真的不是梦！这声音到底是什么？",
						"french": "Ce n'était vraiment pas un rêve ! Quelle est la nature de ce son ?",
						"spanish": "¡Realmente no fue un sueño! ¿Cuál es la verdadera naturaleza de este sonido?",
						"vietnamese": "Thật sự không phải là mơ! Rốt cuộc âm thanh này là gì?",
						"thai": "ไม่ใช่ฝันจริงๆ! ตกลงเสียงนี้คืออะไรกันแน่?",
						"hindi": "यह सच में सपना नहीं था! इस आवाज़ की असलियत क्या है?"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분석 중입니다만… 공간의 왜곡과 함께 발생하고 있어요. {random_boss} 주변에서요.",
						"english": "Analyzing… It's occurring with spatial distortion. Around {random_boss}.",
						"japanese": "分析中ですが…空間の歪みと共に発生しています。{random_boss}の周辺で。",
						"chinese": "正在分析中…它伴随着空间扭曲而发生。在{random_boss}周围。",
						"french": "Analyse en cours… Cela se produit avec une distorsion spatiale. Autour de {random_boss}.",
						"spanish": "Analizando… Está ocurriendo con una distorsión espacial. Cerca de {random_boss}.",
						"vietnamese": "Đang phân tích… Nó đang xảy ra cùng với sự biến dạng không gian. Xung quanh {random_boss}.",
						"thai": "กำลังวิเคราะห์… มันเกิดขึ้นพร้อมกับการบิดเบือนของอวกาศ รอบๆ {random_boss}",
						"hindi": "विश्लेषण किया जा रहा है… यह स्थानिक विकृति के साथ उत्पन्न हो रहा है। {random_boss} के आस-पास।"
					},
					"speaker": "echo",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "또 비명 소리에 깼어. 이제 잠조차 사치가 됐어.",
						"english": "Woke up to screams again. Sleep itself has become a luxury.",
						"japanese": "また悲鳴で目が覚めた。もう眠りさえ贅沢になった。",
						"chinese": "又被尖叫声吵醒了。现在连睡觉都成了奢望。",
						"french": "Encore réveillé par des cris. Le sommeil est devenu un luxe.",
						"spanish": "Otra vez me despertaron los gritos. Incluso dormir se ha convertido en un lujo.",
						"vietnamese": "Lại tỉnh giấc vì tiếng hét. Giờ đây, ngay cả giấc ngủ cũng trở thành xa xỉ.",
						"thai": "ตื่นเพราะเสียงกรีดร้องอีกแล้ว ตอนนี้แม้แต่การนอนก็กลายเป็นเรื่องฟุ่มเฟือย",
						"hindi": "फिर से चीखों से जाग गया। अब नींद भी एक विलासिता बन गई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대체 언제까지 이럴 거야? 이대로 가다간 미쳐버릴 것 같아.",
						"english": "How long will this last? At this rate, I feel like I'll go mad.",
						"japanese": "一体いつまでこんな状態が続くんだ？このままだと、気が狂いそうだ。",
						"chinese": "这到底要持续到什么时候？这样下去，我感觉自己要疯了。",
						"french": "Combien de temps cela va-t-il durer ? À ce rythme, j'ai l'impression que je vais devenir fou.",
						"spanish": "¿Hasta cuándo durará esto? A este paso, siento que voy a enloquecer.",
						"vietnamese": "Rốt cuộc thì chuyện này sẽ kéo dài đến bao giờ? Cứ thế này, tôi nghĩ mình sẽ phát điên mất.",
						"thai": "มันจะนานแค่ไหนกันแน่? ถ้าเป็นแบบนี้ต่อไปฉันคงจะบ้าตาย",
						"hindi": "यह कब तक चलेगा? इस तरह से तो, मुझे लगता है मैं पागल हो जाऊँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "이 소리는… 과거의 비극과 연결되어 있는 것 같아요. 아주 오래된 고통의 흔적.",
						"english": "This sound… it seems connected to a past tragedy. Traces of very old suffering.",
						"japanese": "この音は…過去の悲劇と繋がっているようです。とても古い苦痛の痕跡。",
						"chinese": "这个声音…似乎与过去的悲剧有关。非常古老的痛苦痕迹。",
						"french": "Ce son… il semble lié à une tragédie passée. Des traces d'une très ancienne souffrance.",
						"spanish": "Este sonido… parece estar conectado a una tragedia pasada. Rastros de un sufrimiento muy antiguo.",
						"vietnamese": "Âm thanh này… dường như có liên quan đến một bi kịch trong quá khứ. Dấu vết của nỗi đau rất xa xưa.",
						"thai": "เสียงนี้… ดูเหมือนจะเชื่อมโยงกับโศกนาฏกรรมในอดีต ร่องรอยของความเจ็บปวดที่เก่าแก่มาก",
						"hindi": "यह आवाज़… ऐसा लगता है कि यह अतीत की किसी त्रासदी से जुड़ी हुई है। बहुत पुराने दर्द के निशान।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "이 비명은 특정 주파수와 공명합니다. 무언가를 깨우고 있어요.",
						"english": "These screams resonate with a specific frequency. They are awakening something.",
						"japanese": "この悲鳴は特定の周波数と共鳴します。何かを覚醒させている。",
						"chinese": "这些尖叫声与特定的频率共鸣。它们正在唤醒某种东西。",
						"french": "Ces cris résonnent avec une fréquence spécifique. Ils réveillent quelque chose.",
						"spanish": "Estos gritos resuenan con una frecuencia específica. Están despertando algo.",
						"vietnamese": "Tiếng hét này cộng hưởng với một tần số cụ thể. Chúng đang đánh thức thứ gì đó.",
						"thai": "เสียงกรีดร้องเหล่านี้สอดคล้องกับความถี่เฉพาะ พวกมันกำลังปลุกบางสิ่งบางอย่างให้ตื่นขึ้น",
						"hindi": "ये चीखें एक विशिष्ट आवृत्ति के साथ गूँजती हैं। वे कुछ जगा रहे हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "비명 소리는 이제 낮에도 환청처럼 들려왔다.",
						"english": "The screams now echoed like hallucinations even during the day.",
						"japanese": "悲鳴はもう昼間でも幻聴のように聞こえてきた。",
						"chinese": "尖叫声现在即使在白天也像幻听一样传来。",
						"french": "Les cris résonnaient maintenant comme des hallucinations même en plein jour.",
						"spanish": "Los gritos ahora resonaban como alucinaciones incluso durante el día.",
						"vietnamese": "Tiếng hét giờ đây vọng lại như ảo giác ngay cả vào ban ngày.",
						"thai": "เสียงกรีดร้องตอนนี้ดังเหมือนภาพหลอนแม้ในตอนกลางวัน",
						"hindi": "चीखें अब दिन में भी मतिभ्रम की तरह सुनाई देती थीं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 이상은… 못 버티겠어. 이 소리가 날 잡아먹으려 해.",
						"english": "I can't… endure this anymore. This sound is trying to devour me.",
						"japanese": "もうこれ以上は…耐えられない。この音が私を食い尽くそうとしている。",
						"chinese": "我再也…受不了了。这声音想把我吞噬。",
						"french": "Je ne peux plus… supporter ça. Ce son essaie de me dévorer.",
						"spanish": "Ya no puedo… soportarlo. Este sonido está tratando de devorarme.",
						"vietnamese": "Tôi không thể… chịu đựng thêm được nữa. Âm thanh này đang cố nuốt chửng tôi.",
						"thai": "ฉันไม่สามารถ…ทนได้อีกต่อไปแล้ว เสียงนี้กำลังจะกลืนกินฉัน",
						"hindi": "मैं और… बर्दाश्त नहीं कर सकता। यह आवाज़ मुझे निगलने की कोशिश कर रही है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "우리가 여기까지 온 게 실수였을까… 돌아가야 해.",
						"english": "Was it a mistake to come this far? We should go back.",
						"japanese": "ここまで来たのは間違いだったのか… 戻らなければ。",
						"chinese": "我们走到这里是不是个错误……该回去了。",
						"french": "Était-ce une erreur de venir jusqu'ici ? Nous devrions rentrer.",
						"spanish": "Fue un error llegar hasta aquí? Deberíamos volver.",
						"vietnamese": "Đến đây có phải là một sai lầm không... Chúng ta phải quay lại thôi.",
						"thai": "ที่เรามาถึงตรงนี้เป็นความผิดพลาดหรือเปล่า... เราควรกลับไป",
						"hindi": "क्या इतनी दूर आना हमारी गलती थी...? हमें वापस जाना होगा।"
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어요. 이 소리의 근원에 닿기 전까진.",
						"english": "We can't go back. Not until we reach the source of this sound.",
						"japanese": "戻れません。この音の根源に辿り着くまでは。",
						"chinese": "我们回不去了。除非找到这声音的源头。",
						"french": "Nous ne pouvons pas rentrer. Pas avant d'atteindre la source de ce son.",
						"spanish": "No podemos volver. No hasta que alcancemos el origen de este sonido.",
						"vietnamese": "Chúng ta không thể quay lại. Cho đến khi chạm tới nguồn gốc của âm thanh này.",
						"thai": "เรากลับไม่ได้ จนกว่าจะถึงต้นกำเนิดของเสียงนี้",
						"hindi": "हम वापस नहीं जा सकते। जब तक हम इस आवाज़ के स्रोत तक नहीं पहुँच जाते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 악몽이 시작된 곳… 저 너머에 있어요.",
						"english": "The place where all nightmares began... it's beyond there.",
						"japanese": "すべての悪夢が始まった場所… その先にあります。",
						"chinese": "所有噩梦开始的地方……就在那边。",
						"french": "L'endroit où tous les cauchemars ont commencé... c'est au-delà.",
						"spanish": "El lugar donde comenzaron todas las pesadillas... está más allá.",
						"vietnamese": "Nơi mọi ác mộng bắt đầu... nó ở phía bên kia.",
						"thai": "ที่ที่ฝันร้ายทั้งหมดเริ่มต้น... อยู่เลยจากที่นั่นไป",
						"hindi": "वो जगह जहाँ सभी बुरे सपने शुरू हुए... वो वहाँ से आगे है।"
					},
					"speaker": "echo",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하하… 어리석은 것들. 너희의 비명도 곧 나의 일부가 될 것이다!",
						"english": "Khahahaha... You fools. Your screams will soon become part of me!",
						"japanese": "クハハハ…愚かな者たちめ。お前たちの悲鳴も、いずれ私の糧となるだろう！",
						"chinese": "哈哈哈……愚蠢的家伙们。你们的尖叫很快也将成为我的一部分！",
						"french": "Khahahaha... Bande d'idiots. Vos cris feront bientôt partie de moi !",
						"spanish": "¡Jajajaja... Tontos. Vuestros gritos pronto serán parte de mí!",
						"vietnamese": "Khahaha... Lũ ngu ngốc. Tiếng hét của các ngươi cũng sẽ sớm trở thành một phần của ta!",
						"thai": "คิกๆๆๆ... เจ้าพวกโง่เขลา เสียงกรีดร้องของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า!",
						"hindi": "खाहahaha... तुम मूर्खों। तुम्हारी चीखें भी जल्द ही मेरा हिस्सा बन जाएंगी!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 비명 소리가 탐험대를 집어삼켰다.",
						"english": "Unidentifiable screams engulfed the expedition team.",
						"japanese": "正体不明の悲鳴が、探検隊を飲み込んだ。",
						"chinese": "身份不明的尖叫声吞噬了探险队。",
						"french": "Des cris indéfinissables ont englouti l'équipe d'exploration.",
						"spanish": "Gritos inidentificables engulleron al equipo de exploración.",
						"vietnamese": "Những tiếng hét không rõ nguồn gốc đã nuốt chửng đội thám hiểm.",
						"thai": "เสียงกรีดร้องที่ระบุไม่ได้กลืนกินทีมสำรวจไป",
						"hindi": "अज्ञात चीखों ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기서 끝낼 순 없어… 아직 할 일이 남았어…",
						"english": "It can't end here... There's still work to be done...",
						"japanese": "ここで終わらせるわけにはいかない…まだやるべきことが残っている…",
						"chinese": "不能在这里结束……还有事情没做完……",
						"french": "Ça ne peut pas se terminer ici... Il reste encore des choses à faire...",
						"spanish": "No puede terminar aquí... Todavía me queda algo por hacer...",
						"vietnamese": "Không thể kết thúc ở đây được... Vẫn còn việc phải làm...",
						"thai": "จะมาจบลงที่นี่ไม่ได้... ยังมีสิ่งที่ต้องทำอยู่...",
						"hindi": "यह यहाँ खत्म नहीं हो सकता... अभी बहुत कुछ करना बाकी है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "다시… 한번… 더 높은 주파수를 찾아야 합니다.",
						"english": "Again... once more... we must find a higher frequency.",
						"japanese": "もう一度…さらに…より高い周波数を見つけなければなりません。",
						"chinese": "再来……一次……必须找到更高的频率。",
						"french": "Encore... une fois... nous devons trouver une fréquence plus élevée.",
						"spanish": "De nuevo... una vez más... debemos encontrar una frecuencia más alta.",
						"vietnamese": "Lại một lần nữa... chúng ta phải tìm một tần số cao hơn.",
						"thai": "อีกครั้ง... อีกครา... เราต้องค้นหาความถี่ที่สูงกว่า",
						"hindi": "फिर... एक बार... हमें एक उच्च आवृत्ति ढूंढनी होगी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지독한 비명 소리가 공간을 가득 채운다. 그 중심에, 정체 모를 그림자가 서 있었다.",
						"english": "A horrendous scream fills the space. At its center, an unknown shadow stood.",
						"japanese": "悍ましい悲鳴が空間を満たす。その中心に、正体不明の影が立っていた。",
						"chinese": "刺耳的尖叫声充满了空间。在它的中心，站着一个不明身份的影子。",
						"french": "Un hurlement horrible emplit l'espace. En son centre, une ombre inconnue se tenait.",
						"spanish": "Un grito horrible llena el espacio. En su centro, una sombra desconocida permanecía.",
						"vietnamese": "Một tiếng hét kinh hoàng tràn ngập không gian. Ở trung tâm của nó, một bóng hình không rõ danh tính đứng đó.",
						"thai": "เสียงกรีดร้องอันน่าสยดสยองเต็มไปหมด ณ ใจกลางนั้น มีเงาลึกลับยืนอยู่",
						"hindi": "एक भयानक चीख अंतरिक्ष में भर गई। उसके केंद्र में, एक अज्ञात छाया खड़ी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크하하… 나의 비명 소리를 들은 자들. 너희도 악몽에 잠식될 것이다!",
						"english": "Hahaha... Those who heard my scream. You too shall be consumed by nightmares!",
						"japanese": "クハハ… 我の悲鳴を聞いた者たちよ。お前たちも悪夢に侵食されるだろう！",
						"chinese": "哈哈哈……听到了我的尖叫声的人。你们也会被噩梦吞噬！",
						"french": "Hahaha... Ceux qui ont entendu mon cri. Vous aussi serez consumés par les cauchemars !",
						"spanish": "Jajaja... Aquellos que escucharon mi grito. ¡Vosotros también seréis consumidos por las pesadillas!",
						"vietnamese": "Khà khà... Những kẻ đã nghe thấy tiếng hét của ta. Các ngươi cũng sẽ bị ác mộng nuốt chửng!",
						"thai": "คุคคุค… พวกที่ได้ยินเสียงกรีดร้องของข้า พวกเจ้าก็จะถูกความฝันร้ายกลืนกินเช่นกัน!",
						"hindi": "हाहाहा... जिन्होंने मेरी चीख सुनी। तुम भी बुरे सपनों से घिर जाओगे!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 이 비명의 근원이었나!",
						"english": "You... were the source of this scream!",
						"japanese": "お前が… この悲鳴の根源だったのか！",
						"chinese": "你……就是这尖叫声的源头！",
						"french": "Toi... tu étais la source de ce cri !",
						"spanish": "¡Tú... eras el origen de este grito!",
						"vietnamese": "Ngươi... chính là nguồn gốc của tiếng hét này!",
						"thai": "เจ้า... คือต้นกำเนิดของเสียงกรีดร้องนี้เอง!",
						"hindi": "तुम... इस चीख के स्रोत थे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비명의 주파수가… 극에 달했습니다. 이 자가 모든 것을 흡수하고 있어요.",
						"english": "The scream's frequency... has reached its peak. This being is absorbing everything.",
						"japanese": "悲鳴の周波数が… 極限に達しました。こいつが全てを吸収しています。",
						"chinese": "尖叫声的频率……已经达到了极限。这个家伙正在吸收一切。",
						"french": "La fréquence du cri... a atteint son paroxysme. Cet être absorbe tout.",
						"spanish": "La frecuencia del grito... ha alcanzado su pico. Este ser lo está absorbiéndolo todo.",
						"vietnamese": "Tần số của tiếng hét... đã đạt đến cực điểm. Kẻ này đang hấp thụ mọi thứ.",
						"thai": "ความถี่ของเสียงกรีดร้อง... ถึงขีดสุดแล้ว หมอนี่กำลังดูดกลืนทุกสิ่ง",
						"hindi": "चीख की आवृत्ति... अपने चरम पर पहुँच गई है। यह प्राणी सब कुछ सोख रहा है।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시의 모든 절규가 나에게 속삭인다. 이제 너희도 그 일부가 될 것이다.",
						"english": "All the screams of this city whisper to me. Now you too shall become a part of it.",
						"japanese": "この都市の全ての絶叫が私に囁く。今やお前たちもその一部となるだろう。",
						"chinese": "这座城市所有的尖叫都在对我低语。现在你们也将成为其中的一部分。",
						"french": "Tous les cris de cette ville me chuchotent. Maintenant, vous aussi en ferez partie.",
						"spanish": "Todos los gritos de esta ciudad me susurran. Ahora vosotros también formaréis parte de ello.",
						"vietnamese": "Mọi tiếng kêu gào của thành phố này thì thầm với ta. Giờ đây các ngươi cũng sẽ trở thành một phần của nó.",
						"thai": "เสียงกรีดร้องทั้งหมดของเมืองนี้กระซิบกับข้า ตอนนี้พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของมันเช่นกัน",
						"hindi": "इस शहर की सभी चीखें मुझसे फुसफुसाती हैं। अब तुम भी इसका एक हिस्सा बनोगे।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "으윽… 끝…이 아니다… 이 비명은… 영원히…",
						"english": "Ugh... This isn't... the end... This scream... will last... forever...",
						"japanese": "うぐっ… 終わり…ではない… この悲鳴は… 永遠に…",
						"chinese": "呃……还没……结束……这尖叫声……将……永远……",
						"french": "Ugh... Ce n'est... pas la fin... Ce cri... est... éternel...",
						"spanish": "Ugh... Esto no... es el fin... Este grito... es... eterno...",
						"vietnamese": "Ư... chưa... kết thúc... Tiếng hét này... sẽ... vĩnh viễn...",
						"thai": "อึก... ยังไม่... จบ... เสียงกรีดร้องนี้... จะ... อยู่ตลอดไป...",
						"hindi": "उफ़... यह... अंत नहीं है... यह चीख... हमेशा... रहेगी..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자는 비명과 함께 사라졌다. 하지만 공간을 가득 채웠던 비명 소리는 잔상처럼 남아있었다.",
						"english": "The unknown shadow vanished with a scream. But the scream that filled the space lingered like an afterimage.",
						"japanese": "正体不明の影は悲鳴と共に消え去った。しかし、空間を満たしていた悲鳴は残像のように残っていた。",
						"chinese": "不明身份的影子伴随着尖叫声消失了。但是，充满空间的尖叫声却像残影一样留了下来。",
						"french": "L'ombre inconnue disparut avec un cri. Mais le hurlement qui avait rempli l'espace persistait comme une image rémanente.",
						"spanish": "La sombra desconocida desapareció con un grito. Pero el grito que llenaba el espacio persistió como una imagen residual.",
						"vietnamese": "Bóng hình không rõ danh tính biến mất cùng với tiếng hét. Nhưng tiếng hét lấp đầy không gian vẫn còn đọng lại như một dư ảnh.",
						"thai": "เงาลึกลับหายไปพร้อมกับเสียงกรีดร้อง แต่เสียงกรีดร้องที่เคยเต็มพื้นที่ยังคงค้างอยู่ราวกับภาพติดตา",
						"hindi": "अज्ञात छाया एक चीख के साथ गायब हो गई। लेकिन अंतरिक्ष में भरी हुई चीख एक अवशेष की तरह बनी रही।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "끝난 건가…? 근데 왜 이렇게… 허전하지.",
						"english": "Is it over...? But why do I feel so... empty.",
						"japanese": "終わったのか…？でも、どうしてこんなに…虚しいんだ。",
						"chinese": "结束了吗……？但为什么我如此……空虚呢。",
						"french": "C'est fini...? Mais pourquoi est-ce que je me sens si... vide.",
						"spanish": "¿Se acabó...? Pero, ¿por qué me siento tan... vacío?",
						"vietnamese": "Kết thúc rồi sao...? Nhưng sao lại... trống rỗng thế này.",
						"thai": "จบลงแล้วงั้นเหรอ...? แต่ทำไมถึงรู้สึก...ว่างเปล่าจัง",
						"hindi": "क्या यह खत्म हो गया है...? लेकिन मुझे इतना... खाली क्यों लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "비명 소리는 잠시 멎었지만… 완전히 사라진 건 아닙니다. 주파수가 아직 남아있어요.",
						"english": "The screams have ceased for now... but they haven't vanished completely. The frequency still lingers.",
						"japanese": "悲鳴は一時的に止みましたが…完全に消えたわけではありません。周波数はまだ残っています。",
						"chinese": "尖叫声暂时停止了……但并未完全消失。频率仍然存在。",
						"french": "Les cris ont cessé un instant... mais ils n'ont pas complètement disparu. La fréquence est toujours là.",
						"spanish": "Los gritos cesaron por un momento... pero no han desaparecido del todo. La frecuencia aún persiste.",
						"vietnamese": "Tiếng hét tạm thời ngừng lại... nhưng chưa biến mất hoàn toàn. Tần số vẫn còn.",
						"thai": "เสียงกรีดร้องเงียบลงชั่วขณะ... แต่ยังไม่หายไปไหน ความถี่นั้นยังคงอยู่",
						"hindi": "चीखें कुछ पल के लिए थम गई हैं... लेकिन वे पूरी तरह से गायब नहीं हुई हैं। आवृत्ति अभी भी बची हुई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "밤의 그림자는 여전히 도시를 감싸고 있었다. 악몽은… 아직 끝나지 않았다.",
						"english": "The shadows of night still enveloped the city. The nightmare... isn't over yet.",
						"japanese": "夜の影は依然として都市を包み込んでいた。悪夢は…まだ終わっていない。",
						"chinese": "夜晚的阴影依然笼罩着城市。噩梦……尚未结束。",
						"french": "Les ombres de la nuit enveloppaient toujours la ville. Le cauchemar... n'est pas encore terminé.",
						"spanish": "Las sombras de la noche seguían envolviendo la ciudad. La pesadilla... aún no ha terminado.",
						"vietnamese": "Bóng đêm vẫn bao trùm thành phố. Ác mộng... vẫn chưa kết thúc.",
						"thai": "เงาแห่งรัตติกาลยังคงโอบล้อมเมืองอยู่ ฝันร้าย...ยังไม่จบลง",
						"hindi": "रात की परछाइयां अभी भी शहर को घेरे हुए थीं। बुरा सपना... अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
