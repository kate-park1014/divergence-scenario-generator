export const scenario_snowy_whisperwind_57_01 = {
	"scenario_id": "snowy_whisperwind_57_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 눈보라 속, 아무것도 보이지 않았다.",
						"english": "In the cold blizzard, nothing could be seen.",
						"japanese": "冷たい吹雪の中、何も見えなかった。",
						"chinese": "在冰冷的暴风雪中，什么也看不见。",
						"french": "Dans le froid blizzard, rien n'était visible.",
						"spanish": "En la fría ventisca, nada se podía ver.",
						"vietnamese": "Trong bão tuyết lạnh giá, không thấy gì cả.",
						"thai": "ท่ามกลางพายุหิมะอันหนาวเหน็บ ไม่มีสิ่งใดปรากฏ",
						"hindi": "ठंडे बर्फीले तूफ़ान में, कुछ भी दिखाई नहीं दे रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 어디지?",
						"english": "Where… am I?",
						"japanese": "ここ… はどこだ？",
						"chinese": "这里… 是哪里？",
						"french": "Où… suis-je ?",
						"spanish": "¿Dónde… estoy?",
						"vietnamese": "Đây… là đâu?",
						"thai": "ที่นี่… ที่ไหน?",
						"hindi": "यह… कहाँ है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길을 잃으셨나요? …이쪽으로.",
						"english": "Are you lost? …This way.",
						"japanese": "道に迷いましたか？ …こちらへ。",
						"chinese": "迷路了吗？ …这边请。",
						"french": "Vous êtes perdu ? …Par ici.",
						"spanish": "¿Estás perdido? …Por aquí.",
						"vietnamese": "Bạn lạc đường à? …Đi lối này.",
						"thai": "หลงทางหรือเปล่า? …ทางนี้",
						"hindi": "क्या आप रास्ता भटक गए हैं? …इधर।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "소녀의 안내로 도착한 곳은 얼어붙은 마을이었다. 모든 것이 멈춘 듯 고요했다.",
						"english": "Led by the girl, they arrived at a frozen village. Everything was silent, as if time had stopped.",
						"japanese": "少女の案内に従って到着した場所は、凍りついた村だった。全てが止まったように静まり返っていた。",
						"chinese": "在少女的引导下，他们来到了一座冰封的村庄。一切都寂静无声，仿佛时间停滞了。",
						"french": "Guidés par la jeune fille, ils arrivèrent dans un village gelé. Tout était silencieux, comme si le temps s'était arrêté.",
						"spanish": "Guiados por la chica, llegaron a un pueblo congelado. Todo estaba en silencio, como si el tiempo se hubiera detenido.",
						"vietnamese": "Theo sự dẫn dắt của cô gái, họ đến một ngôi làng đóng băng. Mọi thứ yên ắng như thể thời gian đã ngừng lại.",
						"thai": "เมื่อเด็กสาวนำทาง พวกเขามาถึงหมู่บ้านที่เยือกแข็ง ทุกสิ่งเงียบสงบราวกับหยุดนิ่ง",
						"hindi": "लड़की के मार्गदर्शन से, वे एक जमे हुए गाँव में पहुँचे। सब कुछ शांत था, मानो समय ठहर गया हो।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "너무나도… 차가운 평화. 그렇죠?",
						"english": "Such… a cold peace. Isn't it?",
						"japanese": "あまりにも… 冷たい平和。そうでしょう？",
						"chinese": "如此… 冰冷的和平。不是吗？",
						"french": "Une paix si… froide. N'est-ce pas ?",
						"spanish": "Una paz tan… fría. ¿Verdad?",
						"vietnamese": "Một sự bình yên… quá đỗi lạnh lẽo. Phải không?",
						"thai": "ช่าง… สันติอันหนาวเหน็บ. ใช่ไหม?",
						"hindi": "इतनी… ठंडी शांति। है ना?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이 마을은… 기억을 잃었어요.",
						"english": "This village… has lost its memories.",
						"japanese": "この村は… 記憶を失ったの。",
						"chinese": "这个村庄… 失去了记忆。",
						"french": "Ce village… a perdu ses souvenirs.",
						"spanish": "Este pueblo… ha perdido sus recuerdos.",
						"vietnamese": "Ngôi làng này… đã mất đi ký ức.",
						"thai": "หมู่บ้านนี้… สูญเสียความทรงจำไปแล้ว",
						"hindi": "इस गाँव ने… अपनी यादें खो दी हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기억을… 잃었다고?",
						"english": "Lost your memory...?",
						"japanese": "記憶を…失ったと？",
						"chinese": "失去记忆了…？",
						"french": "Perdu la mémoire...?",
						"spanish": "¿Perdiste la memoria...?",
						"vietnamese": "Mất trí nhớ...?",
						"thai": "ความทรงจำ...หายไป?",
						"hindi": "याददाश्त… खो दी?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네. 차가운 바람이 모든 것을 지웠죠. 비극조차도.",
						"english": "Yes. The cold wind erased everything. Even the tragedy.",
						"japanese": "ええ。冷たい風がすべてを消し去りました。悲劇すらも。",
						"chinese": "是的。寒风抹去了一切。甚至连悲剧也。",
						"french": "Oui. Le vent froid a tout effacé. Même la tragédie.",
						"spanish": "Sí. El viento frío lo borró todo. Incluso la tragedia.",
						"vietnamese": "Vâng. Gió lạnh đã xóa sạch mọi thứ. Ngay cả bi kịch.",
						"thai": "ใช่ ลมหนาวพัดพาไปทุกสิ่ง แม้แต่โศกนาฏกรรม",
						"hindi": "हाँ। ठंडी हवा ने सब कुछ मिटा दिया। त्रासदी भी।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 울음소리가 들리는 듯했다. 얼음 속에 갇힌 영혼들의 절규처럼.",
						"english": "A faint wailing seemed to echo. Like the cries of souls trapped in ice.",
						"japanese": "かすかな泣き声が聞こえるようだった。氷に囚われた魂たちの叫びのように。",
						"chinese": "仿佛听到了微弱的哭泣声。如同被困在冰中的灵魂的哀嚎。",
						"french": "Un faible gémissement semblait résonner. Comme les cris d'âmes piégées dans la glace.",
						"spanish": "Un débil lamento parecía resonar. Como los gritos de almas atrapadas en el hielo.",
						"vietnamese": "Một tiếng khóc yếu ớt dường như vang vọng. Như tiếng kêu gào của những linh hồn bị mắc kẹt trong băng.",
						"thai": "เสียงคร่ำครวญแผ่วเบาดูเหมือนจะสะท้อนก้อง เหมือนเสียงกรีดร้องของวิญญาณที่ติดอยู่ในน้ำแข็ง",
						"hindi": "एक धीमी सी रोने की आवाज़ सुनाई दी। जैसे बर्फ में फँसी आत्माओं की चीखें।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 얼음 조각들을 보세요. 고대의 룬 문자들이에요.",
						"english": "Look at these ice shards. They're ancient runic characters.",
						"japanese": "この氷の破片を見てください。古代のルーン文字です。",
						"chinese": "看这些冰块。它们是古老的符文文字。",
						"french": "Regardez ces éclats de glace. Ce sont des caractères runiques anciens.",
						"spanish": "Miren estos fragmentos de hielo. Son runas antiguas.",
						"vietnamese": "Hãy nhìn những mảnh băng này. Chúng là chữ rune cổ đại.",
						"thai": "ดูเศษน้ำแข็งพวกนี้สิ มันคืออักษรรูนโบราณ",
						"hindi": "इन बर्फीले टुकड़ों को देखें। ये प्राचीन रुनिक अक्षर हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do they mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que signifient-ils ?",
						"spanish": "¿Qué significan?",
						"vietnamese": "Chúng có nghĩa gì?",
						"thai": "มันหมายความว่ายังไง?",
						"hindi": "इनका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "…잊혀진 비극. 그리고, 강요된 평화에 대한 기록이죠.",
						"english": "...Forgotten tragedy. And a record of enforced peace.",
						"japanese": "…忘れ去られた悲劇。そして、強要された平和についての記録です。",
						"chinese": "……被遗忘的悲剧。以及关于被强加的和平的记录。",
						"french": "...Une tragédie oubliée. Et un témoignage d'une paix forcée.",
						"spanish": "...Una tragedia olvidada. Y un registro de una paz impuesta.",
						"vietnamese": "...Bi kịch bị lãng quên. Và là một ghi chép về nền hòa bình bị áp đặt.",
						"thai": "...โศกนาฏกรรมที่ถูกลืม และบันทึกเกี่ยวกับสันติภาพที่ถูกบังคับ",
						"hindi": "…भूली हुई त्रासदी। और थोपी गई शांति का एक रिकॉर्ड।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "강요된… 평화?",
						"english": "Enforced... peace?",
						"japanese": "強要された…平和だと？",
						"chinese": "被强加的…和平？",
						"french": "Une paix... forcée ?",
						"spanish": "¿Una paz... impuesta?",
						"vietnamese": "Hòa bình... bị áp đặt?",
						"thai": "สันติภาพ...ที่ถูกบังคับ?",
						"hindi": "थोपी गई… शांति?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 깊은 곳으로… 끌려가고 있어요.",
						"english": "We're being pulled... deeper.",
						"japanese": "もっと深い場所へ…引きずり込まれている。",
						"chinese": "我们正被…拖向更深处。",
						"french": "Nous sommes attirés... plus profondément.",
						"spanish": "Nos están arrastrando... más profundo.",
						"vietnamese": "Chúng ta đang bị kéo... sâu hơn.",
						"thai": "กำลังถูกดึงลงไป...ลึกกว่าเดิม",
						"hindi": "हमें… और गहराई में खींचा जा रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리가…?",
						"english": "We are...?",
						"japanese": "私たちが…？",
						"chinese": "我们…？",
						"french": "Nous...?",
						"spanish": "¿Nosotros...?",
						"vietnamese": "Chúng ta...?",
						"thai": "พวกเรา...?",
						"hindi": "हम…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이 땅의 슬픔이… 당신을 부르고 있어요.",
						"english": "The sorrow of this land... is calling to you.",
						"japanese": "この地の悲しみが…あなたを呼んでいる。",
						"chinese": "这片土地的悲伤…正在呼唤着你。",
						"french": "La tristesse de cette terre... vous appelle.",
						"spanish": "La tristeza de esta tierra... te está llamando.",
						"vietnamese": "Nỗi buồn của vùng đất này... đang gọi bạn.",
						"thai": "ความโศกเศร้าของดินแดนนี้...กำลังเรียกหาคุณ",
						"hindi": "इस भूमि का दुख… आपको बुला रहा है।"
					}
				},
				{
					"content": {
						"korean": "돌아갈 수 없다는 건가.",
						"english": "Can't go back?",
						"japanese": "戻れないのか。",
						"chinese": "无法回头了吗？",
						"french": "On ne peut pas revenir en arrière ?",
						"spanish": "¿No hay vuelta atrás?",
						"vietnamese": "Không thể quay lại sao?",
						"thai": "กลับไปไม่ได้แล้วเหรอ?",
						"hindi": "वापस नहीं जा सकते?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
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
						"korean": "…겨우 이것으로… 끝낼 수 있을 거라 생각하나?",
						"english": "...You think this is enough... to end it?",
						"japanese": "…たったこれしきで…終わらせられるとでも思うのか？",
						"chinese": "……就凭这点东西……就能结束吗？",
						"french": "...Tu penses que c'est suffisant... pour y mettre fin ?",
						"spanish": "...¿Crees que esto... será suficiente para acabar con todo?",
						"vietnamese": "...Ngươi nghĩ chỉ bằng chút này... là có thể kết thúc sao?",
						"thai": "...แค่นี้...คิดว่าจะจบได้งั้นรึ?",
						"hindi": "बस इससे... क्या तुम्हें लगता है कि यह खत्म हो जाएगा?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 얼음은… 다시 모든 것을 덮을 것이다.",
						"english": "This ice... will cover everything again.",
						"japanese": "この氷は…再び全てを覆い尽くすだろう。",
						"chinese": "这冰霜……会再次覆盖一切。",
						"french": "Cette glace... couvrira tout à nouveau.",
						"spanish": "Este hielo... lo cubrirá todo de nuevo.",
						"vietnamese": "Băng này... sẽ lại bao trùm mọi thứ.",
						"thai": "น้ำแข็งนี้...จะปกคลุมทุกสิ่งอีกครั้ง.",
						"hindi": "यह बर्फ... फिर से सब कुछ ढक लेगी।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡¿Qué dices?!",
						"vietnamese": "Nói cái gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "क्या बकवास है!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는… 반복되는 비극의 일부였을 뿐이에요.",
						"english": "He was... merely a part of a recurring tragedy.",
						"japanese": "彼は…繰り返される悲劇の一部に過ぎなかったのです。",
						"chinese": "他……不过是重复悲剧的一部分罢了。",
						"french": "Il n'était... qu'une partie d'une tragédie récurrente.",
						"spanish": "Él... solo era parte de una tragedia recurrente.",
						"vietnamese": "Hắn ta... chỉ là một phần của bi kịch lặp đi lặp lại.",
						"thai": "เขา...เป็นเพียงส่วนหนึ่งของโศกนาฏกรรมที่เกิดขึ้นซ้ำๆ.",
						"hindi": "वह... बस एक दोहराई जाने वाली त्रासदी का हिस्सा था।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 부름은 끝났지만, 더 깊은 얼음의 유적이 그들을 기다리고 있었다.",
						"english": "The cold summons ended, but deeper ice ruins awaited them.",
						"japanese": "冷たい呼び声は終わったが、より深き氷の遺跡が彼らを待っていた。",
						"chinese": "冰冷的召唤结束了，但更深层的冰之遗迹仍在等待着他们。",
						"french": "L'appel glacial était terminé, mais des ruines de glace plus profondes les attendaient.",
						"spanish": "La fría llamada terminó, pero ruinas de hielo más profundas los esperaban.",
						"vietnamese": "Tiếng gọi lạnh giá đã kết thúc, nhưng những tàn tích băng sâu hơn vẫn đang chờ đợi họ.",
						"thai": "เสียงเรียกอันเยือกเย็นสิ้นสุดลงแล้ว แต่ซากปรักหักพังน้ำแข็งที่ลึกกว่านั้นกำลังรอพวกเขาอยู่",
						"hindi": "ठंडी पुकार समाप्त हो गई थी, लेकिन गहरी बर्फ की खंडहर उनकी प्रतीक्षा कर रहे थे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 이 평화는… 깨지지 않는다.",
						"english": "Foolish. This peace... shall not be broken.",
						"japanese": "愚かだ。この平和は… 破られはしない。",
						"chinese": "愚蠢。这份和平… 不会破碎。",
						"french": "Insensé. Cette paix... ne sera pas brisée.",
						"spanish": "Necios. Esta paz... no se romperá.",
						"vietnamese": "Ngốc nghếch. Sự bình yên này... sẽ không bị phá vỡ.",
						"thai": "โง่เขลา ความสงบนี้... จะไม่ถูกทำลาย",
						"hindi": "मूर्ख। यह शांति… नहीं टूटेगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "포기하지 마세요. 기록은… 계속되어야 하니까요.",
						"english": "Don't give up. The record... must continue.",
						"japanese": "諦めないでください。記録は… 続けなければなりませんから。",
						"chinese": "不要放弃。记录… 必须继续。",
						"french": "N'abandonnez pas. Le registre... doit continuer.",
						"spanish": "No se rindan. El registro... debe continuar.",
						"vietnamese": "Đừng bỏ cuộc. Kỷ lục... phải được tiếp tục.",
						"thai": "อย่ายอมแพ้ บันทึก... ต้องดำเนินต่อไป",
						"hindi": "हार मत मानो। रिकॉर्ड… जारी रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 심장부, 거대한 그림자가 나타났다.",
						"english": "In the heart of ice, a giant shadow appeared.",
						"japanese": "氷の心臓部、巨大な影が現れた。",
						"chinese": "冰晶核心，巨大的身影出现了。",
						"french": "Au cœur de la glace, une ombre géante est apparue.",
						"spanish": "En el corazón del hielo, una sombra gigantesca apareció.",
						"vietnamese": "Trong lòng băng, một bóng đen khổng lồ xuất hiện.",
						"thai": "ณ ใจกลางน้ำแข็ง, เงามืดมหึมาปรากฏขึ้น.",
						"hindi": "बर्फीले हृदय में, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…누가 나의 고요함을 깨웠는가.",
						"english": "...Who awakened my serenity?",
						"japanese": "…誰が私の静寂を破ったのだ。",
						"chinese": "……谁唤醒了我的宁静？",
						"french": "...Qui a troublé ma sérénité ?",
						"spanish": "...¿Quién ha despertado mi calma?",
						"vietnamese": "...Kẻ nào đã phá vỡ sự tĩnh lặng của ta?",
						"thai": "...ผู้ใดปลุกความสงบของข้า?",
						"hindi": "किसने मेरी शांति भंग की?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 모든 슬픔의 근원인가?",
						"english": "Are you the source of all this sorrow?",
						"japanese": "お前がこの全ての悲しみの根源か？",
						"chinese": "你是这一切悲伤的根源吗？",
						"french": "Es-tu la source de toute cette tristesse ?",
						"spanish": "¿Eres la fuente de toda esta tristeza?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả nỗi buồn này sao?",
						"thai": "เจ้าคือต้นตอของความเศร้าโศกทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम इस सारे दुःख का स्रोत हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 자는… 잊혀진 광기의 수호자예요.",
						"english": "This one... is the guardian of forgotten madness.",
						"japanese": "この者は…忘れられた狂気の守護者です。",
						"chinese": "这个家伙……是遗忘疯狂的守护者。",
						"french": "Celui-ci... est le gardien de la folie oubliée.",
						"spanish": "Este... es el guardián de la locura olvidada.",
						"vietnamese": "Kẻ này... là người bảo hộ của sự điên loạn bị lãng quên.",
						"thai": "ผู้นี้...คือผู้พิทักษ์แห่งความบ้าคลั่งที่ถูกลืมเลือน.",
						"hindi": "यह... भूली हुई उन्माद का संरक्षक है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 평화를 모르는 어리석은 자들.",
						"english": "Fools who know not true peace.",
						"japanese": "真の平和を知らぬ愚か者どもめ。",
						"chinese": "不知真正和平的愚蠢之徒。",
						"french": "Imbéciles qui ne connaissent pas la vraie paix.",
						"spanish": "Necios que no conocen la verdadera paz.",
						"vietnamese": "Lũ ngu ngốc không biết đến hòa bình thực sự.",
						"thai": "พวกโง่เขลาที่ไม่รู้จักสันติสุขที่แท้จริง.",
						"hindi": "सच्चे शांति को न जानने वाले मूर्ख।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 몰아치는 설원, 차가운 침묵만이 감돌았다.",
			"모든 것이 얼어붙은 그곳에서, 한 영혼이 눈을 떴다.",
			"그리고 잊혀진 비극을 기억하는 소녀가 그를 기다리고 있었다.",
			"이것은, 얼어붙은 진실을 찾아 떠나는 여정의 서막이다."
		],
		"english": [
			"A snowstorm raged across the icy plains, only a cold silence lingered.",
			"In that place where everything was frozen, a soul awakened.",
			"And a girl who remembered a forgotten tragedy was waiting for him.",
			"This is the prelude to a journey to uncover the frozen truth."
		],
		"japanese": [
			"吹雪が荒れる雪原に、冷たい沈黙だけが漂っていた。",
			"全てが凍りついたその場所で、一つの魂が目覚めた。",
			"そして、忘れられた悲劇を記憶する少女が彼を待っていた。",
			"これは、凍てついた真実を探す旅の序幕である。"
		],
		"chinese": [
			"暴风雪肆虐的雪原上，只有冰冷的寂静。",
			"在万物冻结之地，一个灵魂睁开了双眼。",
			"而一个记得被遗忘悲剧的少女正在等待着他。",
			"这是寻找冰封真相之旅的序幕。"
		],
		"french": [
			"Dans l'étendue enneigée balayée par le blizzard, seul un silence glacial régnait.",
			"Là où tout était gelé, une âme s'éveilla.",
			"Et une jeune fille, se souvenant d'une tragédie oubliée, l'attendait.",
			"Ceci est le prélude d'un voyage à la recherche de la vérité gelée."
		],
		"spanish": [
			"En el campo nevado azotado por la ventisca, solo un frío silencio reinaba.",
			"En ese lugar donde todo estaba congelado, un alma despertó.",
			"Y una chica que recordaba una tragedia olvidada lo estaba esperando.",
			"Esto es el preludio de un viaje para encontrar la verdad congelada."
		],
		"vietnamese": [
			"Trong bão tuyết trên đồng tuyết, chỉ có sự im lặng lạnh giá bao trùm.",
			"Ở nơi mọi thứ đóng băng đó, một linh hồn đã tỉnh giấc.",
			"Và một cô gái nhớ về bi kịch bị lãng quên đang chờ đợi anh.",
			"Đây là khúc dạo đầu cho một cuộc hành trình đi tìm sự thật bị đóng băng."
		],
		"thai": [
			"บนทุ่งหิมะที่พายุหิมะโหมกระหน่ำ มีเพียงความเงียบงันอันหนาวเหน็บ",
			"ณ ที่ซึ่งทุกสิ่งเยือกแข็ง มีหนึ่งวิญญาณได้ตื่นขึ้น",
			"และเด็กสาวผู้จดจำโศกนาฏกรรมที่ถูกลืมกำลังรอเขาอยู่",
			"นี่คือบทนำของการเดินทางเพื่อค้นหาความจริงที่ถูกแช่แข็ง"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान से घिरे हिम क्षेत्र में, केवल एक ठंडी ख़ामोशी छाई थी。",
			"उस जगह, जहाँ सब कुछ जमा हुआ था, एक आत्मा जाग उठी।",
			"और एक लड़की, जिसे भूली हुई त्रासदी याद थी, उसका इंतज़ार कर रही थी।",
			"यह जमी हुई सच्चाई की तलाश में एक यात्रा की प्रस्तावना है।"
		]
	}
} as const;
