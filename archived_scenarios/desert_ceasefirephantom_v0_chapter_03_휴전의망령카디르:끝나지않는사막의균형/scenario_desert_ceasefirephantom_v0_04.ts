export const scenario_desert_ceasefirephantom_v0_04 = {
	"scenario_id": "desert_ceasefirephantom_v0_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Donkey": {
			"name": {
				"korean": "당키",
				"english": "Donkey",
				"japanese": "ドンキー",
				"chinese": "唐基",
				"french": "Donkey",
				"spanish": "Donkey",
				"vietnamese": "Donkey",
				"thai": "ดอนกี้",
				"hindi": "डंकी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b034791-7d67-4730-0730-3e1ea3e48c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7e4c81be-8c78-41fe-7692-6277d4bb0800/public"
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
					"emotion": "base",
					"content": {
						"korean": "끝없는 사막, 또 다른 부족 간의 전투가 벌어졌다.",
						"english": "Endless desert, another tribal battle ensued.",
						"japanese": "果てしない砂漠で、またもや部族間の戦いが勃発した。",
						"chinese": "无尽的沙漠中，部落间又爆发了一场战斗。",
						"french": "Désert sans fin, une nouvelle bataille tribale a éclaté.",
						"spanish": "Desierto infinito, otra batalla tribal estalló.",
						"vietnamese": "Sa mạc bất tận, một trận chiến bộ lạc khác lại xảy ra.",
						"thai": "ทะเลทรายอันกว้างใหญ่ การต่อสู้ระหว่างเผ่าพันธุ์ปะทุขึ้นอีกครั้ง",
						"hindi": "अंतहीन रेगिस्तान, जनजातियों के बीच एक और युद्ध छिड़ गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "또 싸움이야? 지겹지도 않나.",
						"english": "Another fight? Aren't they tired of it?",
						"japanese": "また戦いか？飽きもせず。",
						"chinese": "又打起来了？不觉得腻吗？",
						"french": "Encore un combat ? Ils ne s'en lassent jamais ?",
						"spanish": "¿Otra pelea? ¿No se cansan?",
						"vietnamese": "Lại đánh nhau à? Không chán sao?",
						"thai": "สู้กันอีกแล้วเหรอ? ไม่เบื่อกันบ้างเลยหรือไง",
						"hindi": "फिर से लड़ाई? क्या वे थकते नहीं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "저기, 누가 끼어있어!",
						"english": "Look, someone's caught in the middle!",
						"japanese": "おい、誰か巻き込まれてるぞ！",
						"chinese": "喂，有人被卷进去了！",
						"french": "Hé, quelqu'un est pris au milieu !",
						"spanish": "¡Oye, alguien está atrapado ahí!",
						"vietnamese": "Nhìn kìa, có người bị kẹt ở giữa!",
						"thai": "เฮ้ย มีใครบางคนติดอยู่ในนั้น!",
						"hindi": "देखो, कोई फंसा हुआ है!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Donkey",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐아앙! 살려줘요! 저랑 상관없는 싸움인데!",
						"english": "Hwaaang! Help me! This fight has nothing to do with me!",
						"japanese": "うわーん！助けて！私には関係ない戦いなのに！",
						"chinese": "呜哇！救命啊！这战斗跟我没关系啊！",
						"french": "Hwaaang ! Au secours ! Cette bagarre n'a rien à voir avec moi !",
						"spanish": "¡Hwaaang! ¡Ayúdenme! ¡Esta pelea no tiene nada que ver conmigo!",
						"vietnamese": "Hức hức! Cứu tôi với! Cuộc chiến này không liên quan gì đến tôi cả!",
						"thai": "ฮือออ! ช่วยด้วย! การต่อสู้ครั้งนี้ไม่เกี่ยวกับฉันเลย!",
						"hindi": "ह्वांग! मुझे बचाओ! इस लड़ाई से मेरा कोई लेना-देना नहीं है!"
					},
					"emotion": "sad",
					"speaker": "Donkey"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당키? 저 순박한 당나귀가 왜 여기에?",
						"english": "Donkey? Why is that innocent donkey here?",
						"japanese": "ドンキー？あの素朴なロバがなぜここに？",
						"chinese": "驴子？那只朴实的驴子为什么会在这里？",
						"french": "Donkey ? Pourquoi cet âne innocent est-il ici ?",
						"spanish": "¿Burro? ¿Por qué está aquí ese burro inocente?",
						"vietnamese": "Lừa? Sao con lừa ngây thơ đó lại ở đây?",
						"thai": "ดองกี้? ทำไมเจ้าลาผู้น่าสงสารถึงมาอยู่ที่นี่?",
						"hindi": "गधा? वह मासूम गधा यहां क्यों है?"
					}
				},
				{
					"content": {
						"korean": "구해야 해! 너무 위험해 보여!",
						"english": "We have to save him! He's in grave danger!",
						"japanese": "助けなければ！彼は絶体絶命の危機にいる！",
						"chinese": "必须救他！他身处险境！",
						"french": "Il faut le sauver ! Il est en grand danger !",
						"spanish": "¡Tenemos que salvarlo! ¡Está en grave peligro!",
						"vietnamese": "Phải cứu anh ta! Anh ta đang gặp nguy hiểm trầm trọng!",
						"thai": "ต้องช่วยเขา! เขากำลังตกอยู่ในอันตรายร้ายแรง!",
						"hindi": "हमें उसे बचाना होगा! वह गंभीर खतरे में है!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Donkey",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제 괜찮아, 당키. 무슨 일이야?",
						"english": "It's okay now, Dunkey. What happened?",
						"japanese": "もう大丈夫だよ、ダンキー。どうしたの？",
						"chinese": "现在没事了，当奇。怎么回事？",
						"french": "Ça va maintenant, Dunkey. Qu'est-ce qui s'est passé ?",
						"spanish": "Ya está bien, Dunkey. ¿Qué pasó?",
						"vietnamese": "Không sao đâu, Dunkey. Có chuyện gì vậy?",
						"thai": "ไม่เป็นไรแล้ว ดังกี้ เกิดอะไรขึ้น?",
						"hindi": "अब ठीक है, डंकी। क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"speaker": "Donkey",
					"emotion": "sad",
					"content": {
						"korean": "흑… 흑… 싸움이 나기 직전에요…",
						"english": "H-h-huh... Just before the fight broke out...",
						"japanese": "うぅ…うぅ…戦いが始まる直前に…",
						"chinese": "呜…呜…就在战斗爆发前…",
						"french": "H-h-hmm... Juste avant que le combat n'éclate...",
						"spanish": "U-u-uh... Justo antes de que estallara la pelea...",
						"vietnamese": "Hức... hức... Ngay trước khi cuộc chiến nổ ra...",
						"thai": "ฮึก... ฮึก... ก่อนที่การต่อสู้จะเริ่มขึ้น...",
						"hindi": "उह... उह... लड़ाई शुरू होने से ठीक पहले..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이상한 속삭임이 들렸어요. '싸워라, 더 분노해라'…",
						"english": "I heard strange whispers. 'Fight, be angrier'...",
						"japanese": "奇妙なささやきが聞こえたんです。『戦え、もっと怒れ』って…",
						"chinese": "我听到了奇怪的低语。‘战斗吧，更愤怒吧’…",
						"french": "J'ai entendu d'étranges chuchotements. 'Bats-toi, sois plus en colère'...",
						"spanish": "Escuché susurros extraños. 'Lucha, enójate más'...",
						"vietnamese": "Tôi nghe thấy những tiếng thì thầm kỳ lạ. 'Chiến đấu đi, hãy giận dữ hơn nữa'...",
						"thai": "ฉันได้ยินเสียงกระซิบแปลกๆ 'จงสู้ จงโกรธยิ่งขึ้นไปอีก'...",
						"hindi": "मैंने अजीब फुसफुसाहट सुनी। 'लड़ो, और अधिक क्रोधित हो जाओ'..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "Donkey"
				},
				{
					"type": "speech",
					"content": {
						"korean": "속삭임? 누가?",
						"english": "Whispers? Who?",
						"japanese": "ささやき？誰が？",
						"chinese": "低语？谁？",
						"french": "Des chuchotements ? Qui ça ?",
						"spanish": "¿Susurros? ¿Quién?",
						"vietnamese": "Thì thầm? Ai?",
						"thai": "เสียงกระซิบเหรอ? ใคร?",
						"hindi": "फुसफुसाहट? कौन?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "몰라요! 그냥 머릿속에… 갑자기 막 화가 치밀어 오르면서…",
						"english": "I don't know! Just in my head... Suddenly, I just got so angry...",
						"japanese": "分からないんです！ただ頭の中に…急に怒りがこみ上げてきて…",
						"chinese": "我不知道！只是在我脑海里…突然之间，我就变得很愤怒…",
						"french": "Je ne sais pas ! Juste dans ma tête... Soudainement, une colère immense m'a envahi...",
						"spanish": "¡No lo sé! Sólo en mi cabeza... De repente, me puse tan furioso...",
						"vietnamese": "Không biết! Chỉ là trong đầu tôi... Đột nhiên tôi cảm thấy tức giận tột độ...",
						"thai": "ฉันไม่รู้! แค่ในหัวฉัน... จู่ๆ ฉันก็โกรธมากเลย...",
						"hindi": "मुझे नहीं पता! बस मेरे दिमाग में... अचानक, मुझे बहुत गुस्सा आ गया..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "Donkey"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누군가 갈등을 부추겼다고?",
						"english": "Someone instigated the conflict?",
						"japanese": "誰かが争いを煽ったと？",
						"chinese": "有人煽动了冲突？",
						"french": "Quelqu'un a attisé le conflit ?",
						"spanish": "¿Alguien instigó el conflicto?",
						"vietnamese": "Ai đó đã kích động mâu thuẫn?",
						"thai": "มีใครบางคนยุยงให้เกิดความขัดแย้งเหรอ?",
						"hindi": "किसी ने संघर्ष को उकसाया?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Donkey",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "갑자기 다들 서로를 죽일 듯이… 변했어요. 전조 같은 게 있었어요.",
						"english": "Suddenly, everyone changed... as if they wanted to kill each other. There were omens.",
						"japanese": "突然、みんながお互いを殺し合うかのように…変わってしまったんです。前兆のようなものがありました。",
						"chinese": "突然间，大家变得好像要互相残杀一样…有前兆的。",
						"french": "Soudain, tout le monde a changé... comme s'ils voulaient s'entretuer. Il y a eu des signes avant-coureurs.",
						"spanish": "De repente, todos cambiaron... como si quisieran matarse unos a otros. Hubo presagios.",
						"vietnamese": "Đột nhiên, mọi người đều thay đổi... như thể muốn giết lẫn nhau. Có những điềm báo trước.",
						"thai": "จู่ๆ ทุกคนก็เปลี่ยนไป... เหมือนจะฆ่ากันเองเลย มีลางบอกเหตุบางอย่างค่ะ",
						"hindi": "अचानक, सब बदल गए... जैसे वे एक-दूसरे को मार डालना चाहते हों। कुछ अपशकुन थे।"
					},
					"type": "speech",
					"speaker": "Donkey"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "전조라니?",
						"english": "Omens?",
						"japanese": "前兆だと？",
						"chinese": "前兆？",
						"french": "Des signes avant-coureurs ?",
						"spanish": "¿Presagios?",
						"vietnamese": "Điềm báo trước?",
						"thai": "ลางบอกเหตุอะไร?",
						"hindi": "अपशकुन?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Donkey",
					"type": "speech",
					"content": {
						"korean": "하늘이 이상하게 번쩍이고… 모래가 피처럼 붉게 물들고… 전 정말 무서웠어요.",
						"english": "The sky flashed strangely... The sand turned blood-red... I was really scared.",
						"japanese": "空が奇妙に閃いて…砂が血のように赤く染まって…私、本当に怖かったんです。",
						"chinese": "天空奇怪地闪烁着…沙子变成了血红色…我真的很害怕。",
						"french": "Le ciel a clignoté étrangement... Le sable est devenu rouge sang... J'ai eu vraiment peur.",
						"spanish": "El cielo destelló extrañamente... La arena se tiñó de rojo sangre... Estaba realmente asustada.",
						"vietnamese": "Bầu trời lóe sáng một cách kỳ lạ... Cát nhuốm màu đỏ như máu... Tôi thực sự sợ hãi.",
						"thai": "ท้องฟ้ากะพริบแปลกๆ... ทรายกลายเป็นสีแดงเหมือนเลือด... ฉันกลัวจริงๆ ค่ะ",
						"hindi": "आकाश अजीब तरह से चमक रहा था... रेत खून की तरह लाल हो गई... मैं सच में डर गई थी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 조작하고 있단 말인가…?",
						"english": "So someone is manipulating things...?",
						"japanese": "誰かが操作しているということか…？",
						"chinese": "是有人在操纵吗…？",
						"french": "Donc quelqu'un manipule les choses... ?",
						"spanish": "¿Entonces alguien está manipulando las cosas...?",
						"vietnamese": "Vậy là có ai đó đang thao túng mọi chuyện...?",
						"thai": "มีใครบางคนกำลังบงการอยู่เหรอ...?",
						"hindi": "तो कोई चीज़ों में हेरफेर कर रहा है...?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"spot": [
						2,
						7
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하! 정확히 들었구나, 하찮은 당나귀.",
						"english": "Haha! You heard right, you petty donkey.",
						"japanese": "はは！その通りだ、つまらないロバめ。",
						"chinese": "哈哈！你听得没错，卑微的蠢驴。",
						"french": "Haha ! Tu as bien entendu, misérable âne.",
						"spanish": "¡Jaja! Has oído bien, insignificante burro.",
						"vietnamese": "Haha! Ngươi nghe đúng rồi đấy, con lừa hèn mọn.",
						"thai": "ฮ่าฮ่า! เจ้าได้ยินถูกต้องแล้ว เจ้าลาโง่เง่าเอ๊ย",
						"hindi": "हाहा! तुमने ठीक सुना, तुच्छ गधे।"
					}
				},
				{
					"content": {
						"korean": "네가… 그 속삭임의 주범이야?",
						"english": "You... you're behind the whispers?",
						"japanese": "お前が…その囁きの元凶か？",
						"chinese": "你…你就是那些耳语的幕后黑手？",
						"french": "Tu... tu es la cause de ces murmures ?",
						"spanish": "¿Tú... eres el cerebro detrás de los susurros?",
						"vietnamese": "Ngươi… ngươi là kẻ chủ mưu của những lời thì thầm đó ư?",
						"thai": "เจ้า… เป็นต้นเหตุของเสียงกระซิบงั้นรึ?",
						"hindi": "तुम... तुम ही उन फुसफुसाहटों के पीछे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "갈등은 이 세계의 균형을 유지하는 법. 너희가 알 필요는 없다.",
						"english": "Conflict maintains the balance of this world. You don't need to know.",
						"japanese": "争いはこの世界の均衡を保つもの。お前たちが知る必要はない。",
						"chinese": "冲突是维持这个世界平衡的方式。你们无需知晓。",
						"french": "Le conflit maintient l'équilibre de ce monde. Vous n'avez pas besoin de savoir.",
						"spanish": "El conflicto mantiene el equilibrio de este mundo. No necesitáis saberlo.",
						"vietnamese": "Xung đột duy trì sự cân bằng của thế giới này. Các ngươi không cần biết.",
						"thai": "ความขัดแย้งรักษาสมดุลของโลกนี้ พวกเจ้าไม่จำเป็นต้องรู้หรอก",
						"hindi": "संघर्ष इस दुनिया का संतुलन बनाए रखता है। तुम्हें जानने की ज़रूरत नहीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "흐아앙! 저자가… 저자가 저를 속였어요!",
						"english": "Waaah! He... he tricked me!",
						"japanese": "うわーん！あいつが…あいつが僕を騙したんだ！",
						"chinese": "呜哇！他…他骗了我！",
						"french": "Ouah ! Il... il m'a trompé !",
						"spanish": "¡Aaah! ¡Él... él me engañó!",
						"vietnamese": "Oaaah! Hắn ta… hắn ta đã lừa tôi!",
						"thai": "โอ๊ย! เขา... เขาหลอกฉัน!",
						"hindi": "वाह! उसने... उसने मुझे धोखा दिया!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "Donkey"
				},
				{
					"duration_ms": 400,
					"speaker": "Donkey",
					"type": "direction",
					"action": "exit",
					"direction": "down"
				},
				{
					"content": {
						"korean": "당키를 내버려 둬! 네놈의 짓이었군!",
						"english": "Leave Donkey alone! It was your doing!",
						"japanese": "ドンキーを放っておけ！お前の仕業だったのか！",
						"chinese": "放过小驴！原来是你在搞鬼！",
						"french": "Laisse Donkey tranquille ! C'était ton œuvre !",
						"spanish": "¡Deja a Burro en paz! ¡Fue tu culpa!",
						"vietnamese": "Để Donkey yên! Đây là việc của ngươi!",
						"thai": "ปล่อยเจ้าดองกี้ไป! เป็นฝีมือของแกนี่เอง!",
						"hindi": "गधे को अकेला छोड़ दो! यह तुम्हारी करतूत थी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "당키의 증언은 사막의 모든 갈등이 인위적임을 드러냈다.",
						"english": "Donkey's testimony revealed that all conflicts in the desert were artificial.",
						"japanese": "ドンキーの証言は、砂漠のあらゆる紛争が人為的なものであることを明らかにした。",
						"chinese": "小驴的证词揭示了沙漠中所有的冲突都是人为的。",
						"french": "Le témoignage de Donkey a révélé que tous les conflits dans le désert étaient artificiels.",
						"spanish": "El testimonio de Burro reveló que todos los conflictos en el desierto eran artificiales.",
						"vietnamese": "Lời khai của Donkey đã tiết lộ rằng tất cả các xung đột ở sa mạc đều là nhân tạo.",
						"thai": "คำให้การของดองกี้เผยให้เห็นว่าความขัดแย้งทั้งหมดในทะเลทรายนั้นเป็นสิ่งประดิษฐ์",
						"hindi": "गधे की गवाही से पता चला कि रेगिस्तान में सभी संघर्ष कृत्रिम थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 게 조작된 거였어…",
						"english": "Everything was manipulated...",
						"japanese": "全てが仕組まれていたのか…",
						"chinese": "一切都被操纵了…",
						"french": "Tout était manipulé...",
						"spanish": "Todo fue manipulado...",
						"vietnamese": "Mọi thứ đều bị thao túng…",
						"thai": "ทุกอย่างถูกบงการ...",
						"hindi": "सब कुछ हेरफेर किया गया था..."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼 우리가 싸워온 모든 것들이… 의미 없었다는 거야?",
						"english": "So everything we've fought for... was meaningless?",
						"japanese": "じゃあ、僕たちが戦ってきたこと全てが…無意味だったってこと？",
						"chinese": "那么我们为之奋斗的一切…都毫无意义吗？",
						"french": "Alors tout ce pour quoi nous nous sommes battus... était-il sans signification ?",
						"spanish": "¿Entonces todo por lo que hemos luchado... fue inútil?",
						"vietnamese": "Vậy mọi thứ chúng ta đã chiến đấu… đều vô nghĩa ư?",
						"thai": "แล้วทุกสิ่งที่เราต่อสู้มา... มันไร้ความหมายงั้นหรือ?",
						"hindi": "तो हमने जिसके लिए लड़ाई लड़ी... वह सब व्यर्थ था?"
					}
				},
				{
					"content": {
						"korean": "아니. 진실을 알았다는 게 의미 있어. 이제 진짜 적을 알았으니까.",
						"english": "No. Knowing the truth has meaning. Now we know the real enemy.",
						"japanese": "いや。真実を知ったことに意味がある。これで本当の敵が分かったんだから。",
						"chinese": "不。知道真相才有意义。现在我们知道了真正的敌人。",
						"french": "Non. Connaître la vérité a un sens. Maintenant nous connaissons le véritable ennemi.",
						"spanish": "No. Conocer la verdad tiene sentido. Ahora conocemos al verdadero enemigo.",
						"vietnamese": "Không. Biết được sự thật là có ý nghĩa. Bây giờ chúng ta đã biết kẻ thù thật sự.",
						"thai": "ไม่ การรู้ความจริงมีความหมาย ตอนนี้เรารู้จักศัตรูที่แท้จริงแล้ว",
						"hindi": "नहीं। सच जानने का मतलब है। अब हमें असली दुश्मन का पता चल गया है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 사막의 거짓된 균형을 깨야 해.",
						"english": "We must break this desert's false balance.",
						"japanese": "この砂漠の偽りの均衡を破らなければならない。",
						"chinese": "我们必须打破这个沙漠的虚假平衡。",
						"french": "Nous devons briser le faux équilibre de ce désert.",
						"spanish": "Debemos romper este falso equilibrio del desierto.",
						"vietnamese": "Chúng ta phải phá vỡ sự cân bằng giả tạo này của sa mạc.",
						"thai": "เราต้องทำลายสมดุลที่ผิดพลาดของทะเลทรายนี้",
						"hindi": "हमें इस रेगिस्तान के झूठे संतुलन को तोड़ना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래바람이 더욱 거세졌다. 이 길의 끝은 파멸일 수도 있었다.",
						"english": "The sandstorm grew fiercer. This path could lead to ruin.",
						"japanese": "砂嵐はさらに激しさを増した。この道の先は破滅かもしれない。",
						"chinese": "沙尘暴愈发猛烈。这条路的尽头可能是毁灭。",
						"french": "La tempête de sable s'intensifiait. Ce chemin pourrait mener à la ruine.",
						"spanish": "La tormenta de arena se hizo más intensa. Este camino podría llevar a la ruina.",
						"vietnamese": "Cơn bão cát càng lúc càng dữ dội. Con đường này có thể dẫn đến sự hủy diệt.",
						"thai": "พายุทรายรุนแรงขึ้น เส้นทางนี้อาจนำไปสู่ความหายนะ",
						"hindi": "रेत का तूफान और तेज हो गया। यह रास्ता विनाश की ओर ले जा सकता था।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크큭… 나 하나 쓰러뜨린다고… 끝날 것 같나?",
						"english": "Heh heh... You think defeating just me... will end it?",
						"japanese": "ククッ…私一人を倒したところで…終わると思うか？",
						"chinese": "呵呵…你以为打倒我一个…就能结束吗？",
						"french": "Hahaha... Tu crois qu'en me battant... tout va finir ?",
						"spanish": "Je je... ¿Creéis que al derribarme a mí... acabará todo?",
						"vietnamese": "Khặc khặc... Ngươi nghĩ đánh bại một mình ta... là sẽ kết thúc ư?",
						"thai": "คิกคิก... คิดว่าล้มข้าได้คนเดียวแล้ว... มันจะจบงั้นหรือ?",
						"hindi": "हाहाहा... तुम्हें लगता है कि मुझे एक को हराने से... यह सब खत्म हो जाएगा?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 시스템은 너희가 생각하는 것보다… 훨씬 거대해…",
						"english": "This system is far more vast... than you imagine...",
						"japanese": "このシステムは、お前たちが思っているよりも…はるかに巨大だ…",
						"chinese": "这个系统远比你们想象的…更加庞大…",
						"french": "Ce système est bien plus vaste... que vous ne l'imaginez...",
						"spanish": "Este sistema es mucho más vasto... de lo que imagináis...",
						"vietnamese": "Hệ thống này còn... khổng lồ hơn... các ngươi nghĩ nhiều...",
						"thai": "ระบบนี้... ใหญ่โตกว่า... ที่พวกเจ้าคิดนัก...",
						"hindi": "यह प्रणाली तुम जितना सोचते हो उससे... कहीं अधिक विशाल है..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What are you talking about!?",
						"japanese": "何を言ってるんだ！？",
						"chinese": "你在说什么！？",
						"french": "Qu'est-ce que tu racontes !?",
						"spanish": "¡¿Qué estás diciendo?!",
						"vietnamese": "Ngươi nói cái gì!?",
						"thai": "แกพูดอะไร!?",
						"hindi": "क्या बक रहे हो!?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…그 보이지 않는 손이… 너희의 '평화'를 조작하고 있어…",
						"english": "...That unseen hand... is manipulating your 'peace'...",
						"japanese": "…その見えざる手が…お前たちの「平和」を操っている…",
						"chinese": "……那只看不见的手……正在操纵你们的“和平”……",
						"french": "...Cette main invisible... manipule votre «paix»...",
						"spanish": "...Esa mano invisible... está manipulando vuestra \"paz\"...",
						"vietnamese": "...Bàn tay vô hình đó... đang thao túng 'hòa bình' của các ngươi...",
						"thai": "...มือที่มองไม่เห็นนั้น... กำลังบงการ 'สันติภาพ' ของพวกเจ้าอยู่...",
						"hindi": "...वह अदृश्य हाथ... तुम्हारी 'शांति' को हेरफेर कर रहा है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "분명 쓰러뜨렸는데, 어째서 더 혼란스러워지는 걸까.",
						"english": "We definitely defeated them, so why does it feel even more confusing?",
						"japanese": "確かに倒したはずなのに、どうしてより混乱するのだろうか。",
						"chinese": "明明已经打倒了，为什么反而更混乱了呢。",
						"french": "Nous les avons clairement vaincus, alors pourquoi est-ce encore plus déroutant ?",
						"spanish": "Claramente los derrotamos, ¿entonces por qué se siente aún más confuso?",
						"vietnamese": "Rõ ràng là đã đánh bại rồi, vậy mà sao lại càng thêm hỗn loạn thế này.",
						"thai": "กำจัดได้แล้วแท้ๆ ทำไมถึงรู้สึกสับสนยิ่งกว่าเดิมกันนะ",
						"hindi": "हमने निश्चित रूप से उन्हें हरा दिया, फिर भी यह और भ्रमित करने वाला क्यों लग रहा है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막의 진정한 지배자는 아직 모습을 드러내지 않았다.",
						"english": "The true ruler of the desert has not yet revealed themselves.",
						"japanese": "砂漠の真の支配者は、まだ姿を現していない。",
						"chinese": "沙漠真正的统治者尚未现身。",
						"french": "Le véritable souverain du désert ne s'est pas encore manifesté.",
						"spanish": "El verdadero gobernante del desierto aún no se ha revelado.",
						"vietnamese": "Kẻ thống trị thực sự của sa mạc vẫn chưa lộ diện.",
						"thai": "ผู้ปกครองที่แท้จริงของทะเลทรายยังไม่ปรากฏตัว",
						"hindi": "रेगिस्तान का सच्चा शासक अभी सामने नहीं आया है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래… 아직 끝나지 않았어.",
						"english": "Yes... it's not over yet.",
						"japanese": "そう… まだ終わってない。",
						"chinese": "是的… 还没结束。",
						"french": "Oui... ce n'est pas encore fini.",
						"spanish": "Sí... aún no ha terminado.",
						"vietnamese": "Đúng vậy... vẫn chưa kết thúc.",
						"thai": "ใช่... มันยังไม่จบ",
						"hindi": "हाँ… अभी ख़त्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "하하하! 어리석은 저항은 여기까지다.",
						"english": "Hahahaha! This foolish resistance ends here.",
						"japanese": "ハハハ！愚かな抵抗はここまでだ。",
						"chinese": "哈哈哈！愚蠢的抵抗到此为止。",
						"french": "Hahaha ! Cette résistance insensée s'arrête ici.",
						"spanish": "¡Jajajaja! Esta estúpida resistencia termina aquí.",
						"vietnamese": "Hahaha! Sự kháng cự ngu xuẩn này chấm dứt tại đây.",
						"thai": "ฮ่าฮ่าฮ่า! การต่อต้านที่โง่เขลาสิ้นสุดลงแค่นี้แหละ",
						"hindi": "हाहाहा! यह मूर्खतापूर्ण प्रतिरोध यहीं समाप्त होता है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 포기 못 해…!",
						"english": "Ugh... I can't give up yet...!",
						"japanese": "くっ… まだ諦められない…！",
						"chinese": "呃… 我还不能放弃…！",
						"french": "Ugh... Je ne peux pas encore abandonner...!",
						"spanish": "Ugh... ¡No puedo rendirme aún...!",
						"vietnamese": "Ư… Tôi vẫn chưa thể từ bỏ…!",
						"thai": "อึก... ข้ายังยอมแพ้ไม่ได้...!",
						"hindi": "उफ़... मैं अभी हार नहीं मान सकता...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 순환 속에서… 너희는 영원히 고통받을 것이다.",
						"english": "In this cycle... you shall suffer eternally.",
						"japanese": "この循環の中で… お前たちは永遠に苦しむだろう。",
						"chinese": "在这个循环中… 你们将永远受苦。",
						"french": "Dans ce cycle... vous souffrirez éternellement.",
						"spanish": "En este ciclo... sufriréis eternamente.",
						"vietnamese": "Trong vòng tuần hoàn này... các ngươi sẽ phải chịu đựng vĩnh viễn.",
						"thai": "ในวัฏจักรนี้... พวกเจ้าจะต้องทนทุกข์ตลอดไป",
						"hindi": "इस चक्र में... तुम अनंत काल तक पीड़ित रहोगे।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"spot": [
						5,
						8
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 기어들어 오는군. 어리석은 것들.",
						"english": "Still crawling in, are we? Fools.",
						"japanese": "まだ這い寄ってくるのか。愚かな奴らめ。",
						"chinese": "还在往里爬吗？愚蠢的东西。",
						"french": "Vous rampez toujours ici. Imbéciles.",
						"spanish": "¿Todavía os arrastráis aquí? Tontos.",
						"vietnamese": "Vẫn còn bò vào đây à. Lũ ngu xuẩn.",
						"thai": "ยังคงคืบคลานเข้ามาอีกหรือ? พวกโง่เง่า",
						"hindi": "अभी भी रेंगते हुए आ रहे हो। मूर्ख प्राणी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 이상 속지 않아. 네놈이 모든 갈등을 조작하고 있었지!",
						"english": "I won't be fooled again. You were manipulating all the conflicts!",
						"japanese": "もう騙されない。お前がすべての対立を操っていたんだ！",
						"chinese": "我不会再上当了。你一直在操纵所有的冲突！",
						"french": "Je ne me laisserai plus berner. Tu manipulais tous les conflits !",
						"spanish": "No me engañarás más. ¡Estabas manipulando todos los conflictos!",
						"vietnamese": "Ta sẽ không bị lừa nữa. Ngươi đã thao túng mọi xung đột!",
						"thai": "ข้าจะไม่ถูกหลอกอีกแล้ว แกเป็นคนบงการความขัดแย้งทั้งหมด!",
						"hindi": "मैं अब और धोखा नहीं खाऊंगा। तुम ही सभी संघर्षों को हेरफेर कर रहे थे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 그저 시스템의 일부. 이 사막의 '균형'을 유지할 뿐.",
						"english": "I am merely part of the system. Just maintaining this desert's 'balance'.",
						"japanese": "私はただシステムの一部。この砂漠の「均衡」を保つだけだ。",
						"chinese": "我只是系统的一部分。仅仅是为了维持这片沙漠的“平衡”。",
						"french": "Je ne suis qu'une partie du système. Je ne fais que maintenir l'«équilibre» de ce désert.",
						"spanish": "Solo soy parte del sistema. Simplemente mantengo el \"equilibrio\" de este desierto.",
						"vietnamese": "Ta chỉ là một phần của hệ thống. Chỉ để duy trì 'cân bằng' của sa mạc này.",
						"thai": "ข้าเป็นเพียงส่วนหนึ่งของระบบ แค่รักษาสมดุลของทะเลทรายแห่งนี้",
						"hindi": "मैं तो बस एक प्रणाली का हिस्सा हूँ। इस रेगिस्तान का 'संतुलन' बनाए रखता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 저항은 결국 무의미한 순환에 불과하다.",
						"english": "Your resistance is ultimately just a meaningless cycle.",
						"japanese": "お前たちの抵抗は、結局無意味な循環に過ぎない。",
						"chinese": "你们的抵抗终究只是毫无意义的循环。",
						"french": "Votre résistance n'est, au final, qu'un cycle insignifiant.",
						"spanish": "Vuestra resistencia es, en última instancia, solo un ciclo sin sentido.",
						"vietnamese": "Sự kháng cự của các ngươi rốt cuộc cũng chỉ là một vòng luẩn quẩn vô nghĩa.",
						"thai": "การต่อต้านของพวกเจ้าเป็นเพียงวัฏจักรที่ไร้ความหมายเท่านั้น",
						"hindi": "तुम्हारा प्रतिरोध अंततः एक अर्थहीन चक्र मात्र है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래폭풍이 몰고 온 것은 비극이었다.",
			"또 다시 터져버린 부족 간의 싸움.",
			"그리고 그 한가운데, 순박한 희생양이 떨고 있었다.",
			"모든 갈등 뒤에 숨겨진 진실이 모습을 드러내기 시작한다."
		],
		"english": [
			"The sandstorm brought tragedy.",
			"Another tribal conflict erupted.",
			"And in its midst, an innocent sacrifice trembled.",
			"The truth hidden behind all conflicts begins to reveal itself."
		],
		"japanese": [
			"砂嵐がもたらしたのは悲劇だった。",
			"またしても部族間の争いが勃発した。",
			"そしてその真ん中で、無垢な生贄が震えていた。",
			"全ての対立の裏に隠された真実が姿を現し始める。"
		],
		"chinese": [
			"沙尘暴带来的是悲剧。",
			"部落间的战争再次爆发。",
			"而在这其中，一个无辜的牺牲品在颤抖。",
			"隐藏在所有冲突背后的真相开始浮出水面。"
		],
		"french": [
			"La tempête de sable a apporté la tragédie.",
			"Un nouveau conflit tribal éclata.",
			"Et au milieu, un innocent bouc émissaire tremblait.",
			"La vérité cachée derrière tous les conflits commence à se révéler."
		],
		"spanish": [
			"La tormenta de arena trajo la tragedia.",
			"Otra lucha tribal estalló.",
			"Y en medio, un inocente chivo expiatorio temblaba.",
			"La verdad oculta tras todos los conflictos empieza a revelarse."
		],
		"vietnamese": [
			"Cơn bão cát đã mang đến bi kịch.",
			"Một cuộc xung đột bộ lạc khác lại nổ ra.",
			"Và giữa đó, một vật tế vô tội đang run rẩy.",
			"Sự thật ẩn giấu đằng sau mọi xung đột bắt đầu hé lộ."
		],
		"thai": [
			"พายุทรายนำมาซึ่งโศกนาฏกรรม",
			"การต่อสู้ระหว่างเผ่าพันธุ์ปะทุขึ้นอีกครั้ง",
			"และท่ามกลางนั้น เหยื่อผู้บริสุทธิ์กำลังสั่นเทา",
			"ความจริงที่ซ่อนอยู่เบื้องหลังความขัดแย้งทั้งหมดเริ่มปรากฏขึ้น"
		],
		"hindi": [
			"रेत के तूफान ने त्रासदी ला दी।",
			"जनजातियों के बीच फिर से लड़ाई छिड़ गई।",
			"और उसके बीच, एक मासूम बलि का बकरा कांप रहा था।",
			"सभी संघर्षों के पीछे छिपा सच सामने आने लगता है।"
		]
	}
} as const;
