export const scenario_snowy_skuld_22_05 = {
	"scenario_id": "snowy_skuld_22_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_107"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 심장부는 영원한 밤이었다. 끊긴 룬 문자가 드러났다.",
						"english": "The heart of the glacier was eternal night. Broken runes were revealed.",
						"japanese": "氷河の核心は永遠の夜だった。途切れたルーン文字が現れた。",
						"chinese": "冰川之心是永恒的夜晚。断裂的符文显现出来。",
						"french": "Le cœur du glacier était une nuit éternelle. Des runes brisées furent révélées.",
						"spanish": "El corazón del glaciar era noche eterna. Runas rotas fueron reveladas.",
						"vietnamese": "Trái tim sông băng là đêm vĩnh cửu. Những ký tự rune đứt đoạn hiện ra.",
						"thai": "ใจกลางธารน้ำแข็งคือราตรีอันเป็นนิรันดร์ อักษรรูนที่ขาดวิ่นได้ปรากฏขึ้น",
						"hindi": "ग्लेशियर का हृदय शाश्वत रात्रि था। टूटे हुए रन प्रकट हुए।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 룬이… 우리가 찾는 건가?",
						"english": "These runes… are they what we seek?",
						"japanese": "このルーンが… 我々が探しているものか？",
						"chinese": "这些符文… 是我们要找的吗？",
						"french": "Ces runes… sont-elles ce que nous cherchons ?",
						"spanish": "¿Estas runas… son lo que buscamos?",
						"vietnamese": "Những ký tự rune này… là thứ chúng ta đang tìm ư?",
						"thai": "รูนพวกนี้… คือสิ่งที่เราตามหาอยู่หรือ?",
						"hindi": "क्या ये रन… वही हैं जिनकी हमें तलाश है?"
					}
				},
				{
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "이 안에서… 수많은 맹세가 들려와요.",
						"english": "From within… I hear countless vows.",
						"japanese": "この中から… 無数の誓いが聞こえてくる。",
						"chinese": "从这里面… 我听到了无数的誓言。",
						"french": "De l'intérieur… j'entends d'innombrables vœux.",
						"spanish": "Desde aquí… escucho incontables promesas.",
						"vietnamese": "Từ bên trong này… tôi nghe thấy vô số lời thề.",
						"thai": "จากข้างในนี้… ฉันได้ยินคำสาบานมากมาย",
						"hindi": "भीतर से… मुझे अनगिनत प्रतिज्ञाएँ सुनाई देती हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "룬은 기억이에요. 잊혀서는 안 될 이름들.",
						"english": "Runes are memories. Names that must not be forgotten.",
						"japanese": "ルーンは記憶。忘れ去られてはならない名前。",
						"chinese": "符文是记忆。是不能被遗忘的名字。",
						"french": "Les runes sont des souvenirs. Des noms qui ne doivent pas être oubliés.",
						"spanish": "Las runas son recuerdos. Nombres que no deben ser olvidados.",
						"vietnamese": "Rune là ký ức. Là những cái tên không được phép lãng quên.",
						"thai": "รูนคือความทรงจำ ชื่อที่ไม่ควรถูกลืม",
						"hindi": "रन यादें हैं। ऐसे नाम जिन्हें भुलाया नहीं जाना चाहिए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "근데 왜 빙하가 이걸 막는 거지?",
						"english": "But why is the glacier blocking this?",
						"japanese": "しかし、なぜ氷河がこれを阻んでいる？",
						"chinese": "可为什么冰川要阻碍它呢？",
						"french": "Mais pourquoi le glacier bloque-t-il cela ?",
						"spanish": "¿Pero por qué el glaciar está bloqueando esto?",
						"vietnamese": "Nhưng tại sao sông băng lại ngăn chặn điều này?",
						"thai": "แต่ทำไมธารน้ำแข็งถึงขัดขวางมัน?",
						"hindi": "लेकिन ग्लेशियर इसे क्यों रोक रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은… 때로 너무 고통스러워서.",
						"english": "The truth… is sometimes too painful.",
						"japanese": "真実は… 時としてあまりに苦痛だから。",
						"chinese": "真相… 有时太过痛苦。",
						"french": "La vérité… est parfois trop douloureuse.",
						"spanish": "La verdad… a veces es demasiado dolorosa.",
						"vietnamese": "Sự thật… đôi khi quá đau đớn.",
						"thai": "ความจริง… บางครั้งก็เจ็บปวดเกินไป",
						"hindi": "सत्य… कभी-कभी बहुत पीड़ादायक होता है।"
					},
					"speaker": "hild",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저는 의례자. 망자의 약속을 기억하는 자.",
						"english": "I am the Ritualist. One who remembers the promises of the dead.",
						"japanese": "私は儀式者。死者の約束を記憶する者。",
						"chinese": "我是仪式者。铭记逝者之诺之人。",
						"french": "Je suis le Ritueliste. Celui qui se souvient des promesses des morts.",
						"spanish": "Soy el Ritualista. Quien recuerda las promesas de los muertos.",
						"vietnamese": "Tôi là Người Nghi Lễ. Người ghi nhớ lời hứa của người đã khuất.",
						"thai": "ข้าคือผู้ประกอบพิธี ผู้จดจำคำสัญญาของคนตาย",
						"hindi": "मैं अनुष्ठानिक हूँ। मृतकों के वादों को याद रखने वाला।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이 룬에… 누군가의 이름이 새겨져 있다는 거야?",
						"english": "So, someone's name is engraved on these runes?",
						"japanese": "では、このルーンに… 誰かの名前が刻まれていると？",
						"chinese": "那么，这些符文上… 刻着某个人的名字吗？",
						"french": "Alors, le nom de quelqu'un est gravé sur ces runes ?",
						"spanish": "¿Entonces el nombre de alguien está grabado en estas runas?",
						"vietnamese": "Vậy là… tên của ai đó được khắc trên những ký tự rune này ư?",
						"thai": "ถ้างั้น… ชื่อของใครบางคนถูกสลักอยู่บนรูนพวกนี้หรือ?",
						"hindi": "तो, इन रन पर… किसी का नाम खुदा हुआ है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "그래요. 이 한기 속에서 제가 그 이름을 불러줘야 해요.",
						"english": "Yes. In this chill, I must call out that name.",
						"japanese": "ええ。この寒気の中で私がその名を呼ばねばなりません。",
						"chinese": "是的。在这寒意中，我必须呼唤那个名字。",
						"french": "Oui. Dans ce froid, je dois prononcer ce nom.",
						"spanish": "Sí. En este frío, debo pronunciar ese nombre.",
						"vietnamese": "Đúng vậy. Trong sự lạnh lẽo này, tôi phải gọi tên đó lên.",
						"thai": "ใช่แล้ว ในความหนาวเย็นนี้ ข้าต้องเรียกชื่อนั้น",
						"hindi": "हाँ। इस ठंडक में, मुझे उस नाम को पुकारना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "룬이 거의 완성되었어요. 이제… 마지막 조각만.",
						"english": "The runes are almost complete. Now… just the last piece.",
						"japanese": "ルーンはほぼ完成しました。あとは… 最後の破片だけ。",
						"chinese": "符文几乎完成了。现在… 只差最后一块。",
						"french": "Les runes sont presque complètes. Maintenant… juste la dernière pièce.",
						"spanish": "Las runas están casi completas. Ahora… solo la última pieza.",
						"vietnamese": "Các ký tự rune đã gần hoàn thành rồi. Giờ chỉ còn… mảnh cuối cùng thôi.",
						"thai": "รูนเกือบจะสมบูรณ์แล้ว ตอนนี้… เหลือแค่ชิ้นสุดท้าย",
						"hindi": "रन लगभग पूरे हो चुके हैं। अब… बस आखिरी टुकड़ा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "대체 어떤 이름이길래 이렇게 빙하가 거부하는 거야?",
						"english": "What name is so powerful it makes the glacier resist?",
						"japanese": "一体どんな名が、これほど氷河に拒まれるというのか？",
						"chinese": "究竟是何名讳，竟引得冰川如此抗拒？",
						"french": "Quel nom peut bien faire ainsi résister le glacier ?",
						"spanish": "¿Qué clase de nombre es ese para que el glaciar lo rechace así?",
						"vietnamese": "Tên gì mà khiến sông băng từ chối dữ vậy?",
						"thai": "ชื่ออะไรกันแน่ ที่ทำให้ธารน้ำแข็งปฏิเสธถึงเพียงนี้?",
						"hindi": "आखिर ऐसा कौन सा नाम है कि ग्लेशियर इसे ऐसे मना कर रहा है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "두려워하고 있어요… 다시 불리는 것을.",
						"english": "It fears... being called again.",
						"japanese": "恐れている… 再び呼ばれることを。",
						"chinese": "它恐惧着… 再次被呼唤。",
						"french": "Il craint… d'être appelé à nouveau.",
						"spanish": "Teme… ser llamado de nuevo.",
						"vietnamese": "Nó sợ… bị gọi tên lần nữa.",
						"thai": "มันหวาดกลัว... ที่จะถูกเรียกอีกครั้ง",
						"hindi": "यह डर रहा है... कि इसे फिर से बुलाया जाएगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "(룬을 맞추며) 스쿌드… 이 이름이군요.",
						"english": "(Aligning the runes) Skjold… This is the name.",
						"japanese": "(ルーンを合わせながら) スキョル… この名前だ。",
						"chinese": "(校准符文) 斯乔尔德… 原来是这个名字。",
						"french": "(Alignant les runes) Skjold… C'est ce nom.",
						"spanish": "(Alineando las runas) Skjold… Ese es el nombre.",
						"vietnamese": "(Điều chỉnh rune) Skjold… Đây là cái tên.",
						"thai": "(ปรับรูน) สคยอลด์... นี่คือชื่อนั้น",
						"hindi": "(रून्स को संरेखित करते हुए) स्कोल्ड... यही नाम है।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(단호하게) 스쿌드!",
						"english": "(Resolutely) Skjold!",
						"japanese": "(断固として) スキョル！",
						"chinese": "(坚定地) 斯乔尔德！",
						"french": "(Fermement) Skjold !",
						"spanish": "(Con determinación) ¡Skjold!",
						"vietnamese": "(Kiên quyết) Skjold!",
						"thai": "(เด็ดเดี่ยว) สคยอลด์!",
						"hindi": "(दृढ़ता से) स्कोल्ड!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하 전체가 격렬히 진동했다. 거대한 얼음 틈새로 음성이 울려 퍼진다.",
						"english": "The entire glacier vibrated violently. A voice echoed through the massive ice crevices.",
						"japanese": "氷河全体が激しく震動した。巨大な氷の隙間から声が響き渡る。",
						"chinese": "整个冰川剧烈颤抖。一个声音从巨大的冰缝中回荡。",
						"french": "Le glacier entier vibra violemment. Une voix résonna à travers les immenses crevasses de glace.",
						"spanish": "Todo el glaciar vibró violentamente. Una voz resonó a través de las enormes grietas de hielo.",
						"vietnamese": "Toàn bộ sông băng rung chuyển dữ dội. Một giọng nói vang vọng qua những kẽ nứt băng khổng lồ.",
						"thai": "ธารน้ำแข็งทั้งหมู่วิบริตอย่างรุนแรง เสียงสะท้อนผ่านรอยแยกน้ำแข็งขนาดมหึมา",
						"hindi": "पूरा ग्लेशियर हिंसक रूप से काँपा। विशाल बर्फ की दरारों से एक आवाज गूँज उठी।"
					}
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그 이름을, 어찌 아느냐.",
						"english": "…How do you know that name?",
						"japanese": "…その名を、どうして知っている？",
						"chinese": "…汝何得知此名？",
						"french": "…Comment connais-tu ce nom ?",
						"spanish": "…¿Cómo sabes ese nombre?",
						"vietnamese": "…Làm sao ngươi biết cái tên đó?",
						"thai": "...เจ้าได้ชื่อนั้นมาได้อย่างไร",
						"hindi": "...तुम वह नाम कैसे जानते हो?"
					}
				},
				{
					"content": {
						"korean": "(충격) 이 빙하가… 스쿌드라고?",
						"english": "(Shocked) This glacier… is Skjold?",
						"japanese": "(衝撃) この氷河が… スキョルだと？",
						"chinese": "(震惊) 这座冰川… 竟是斯乔尔德？",
						"french": "(Choqué) Ce glacier… est Skjold ?",
						"spanish": "(Impactado) ¿Este glaciar… es Skjold?",
						"vietnamese": "(Sốc) Sông băng này… là Skjold ư?",
						"thai": "(ตกใจ) ธารน้ำแข็งนี้...คือสคยอลด์รึ?",
						"hindi": "(हैरान) यह ग्लेशियर... स्कोल्ड है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "잊힌 이름은… 다시 잠들 뿐. 너희는 알지 못한다.",
						"english": "The forgotten name… merely sleeps again. You do not know.",
						"japanese": "忘れられた名は… ただ再び眠るだけ。お前たちは知りえない。",
						"chinese": "被遗忘的名字… 只是再次沉睡。你们一无所知。",
						"french": "Le nom oublié… ne fait que s'endormir à nouveau. Vous ignorez.",
						"spanish": "El nombre olvidado… solo vuelve a dormir. Vosotros no sabéis.",
						"vietnamese": "Cái tên bị lãng quên… chỉ lại chìm vào giấc ngủ. Các ngươi không hề hay biết.",
						"thai": "ชื่อที่ถูกลืม… ก็แค่หลับใหลไปอีกครั้ง เจ้าไม่รู้หรอก",
						"hindi": "भूला हुआ नाम… बस फिर से सो जाता है। तुम नहीं जानते।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 당신을 다시 기억하게 할 거야!",
						"english": "No… I will make them remember you again!",
						"japanese": "いいえ… あなたを再び思い出させてみせる！",
						"chinese": "不… 我会让他们再次记住你！",
						"french": "Non… je les ferai se souvenir de vous à nouveau !",
						"spanish": "No… ¡haré que te recuerden de nuevo!",
						"vietnamese": "Không… Tôi sẽ khiến họ nhớ lại bạn!",
						"thai": "ไม่… ฉันจะทำให้พวกเขาจดจำคุณอีกครั้ง!",
						"hindi": "नहीं… मैं उन्हें तुम्हें फिर से याद दिलाऊँगा!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는… 당신의 이름을 잊지 않을 거예요.",
						"english": "We… will not forget your name.",
						"japanese": "私たちは… あなたの名前を忘れません。",
						"chinese": "我们… 不会忘记你的名字。",
						"french": "Nous… n'oublierons pas votre nom.",
						"spanish": "Nosotros… no olvidaremos tu nombre.",
						"vietnamese": "Chúng tôi… sẽ không quên tên của bạn.",
						"thai": "พวกเรา… จะไม่ลืมชื่อของคุณ",
						"hindi": "हम… आपका नाम नहीं भूलेंगे।"
					},
					"speaker": "hild",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "나는… 스쿌드. 망각의 바다에 가라앉은 맹세.",
						"english": "I am… Skjold. A vow sunken in the sea of oblivion.",
						"japanese": "我は… スキョル。忘却の海に沈みし誓い。",
						"chinese": "我是… 斯乔尔德。沉入遗忘之海的誓言。",
						"french": "Je suis… Skjold. Un vœu englouti dans la mer de l'oubli.",
						"spanish": "Yo soy… Skjold. Una promesa hundida en el mar del olvido.",
						"vietnamese": "Ta là… Skjold. Một lời thề chìm sâu trong biển quên lãng.",
						"thai": "ข้าคือ... สคยอลด์ คำสาบานที่จมดิ่งลงสู่ทะเลแห่งความหลงลืม",
						"hindi": "मैं... स्कोल्ड हूँ। विस्मृति के सागर में डूबी एक प्रतिज्ञा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 배였어… 룬이 말해주고 있었어.",
						"english": "You were a ship… the runes were telling me.",
						"japanese": "あなたは船だった… ルーンがそう語っていた。",
						"chinese": "你曾是一艘船… 符文告诉我了。",
						"french": "Tu étais un navire… les runes me le disaient.",
						"spanish": "Eras un barco… las runas me lo estaban diciendo.",
						"vietnamese": "Ngươi là một con thuyền… các rune đã nói cho ta biết.",
						"thai": "เจ้าเป็นเรือ... รูนกำลังบอกข้า",
						"hindi": "तुम एक जहाज थे... रून्स मुझे बता रहे थे।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잊힌 이름이 제자리를 찾자, 빙하의 폭풍이 잦아들었다.",
						"english": "As the forgotten name found its place, the glacier's storm subsided.",
						"japanese": "忘れられた名前がその場所を見つけると、氷河の嵐は収まった。",
						"chinese": "遗忘的名字归位后，冰川的风暴平息了。",
						"french": "Quand le nom oublié retrouva sa place, la tempête du glacier s'apaisa.",
						"spanish": "Cuando el nombre olvidado encontró su lugar, la tormenta del glaciar amainó.",
						"vietnamese": "Khi cái tên bị lãng quên tìm thấy vị trí của mình, cơn bão của sông băng đã lắng xuống.",
						"thai": "เมื่อชื่อที่ถูกลืมกลับมาอยู่ถูกที่ พายุของธารน้ำแข็งก็สงบลง",
						"hindi": "जैसे ही भूला हुआ नाम अपनी जगह पर आया, ग्लेशियर का तूफान थम गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 진실은… 또 다른 심연을 예고하는 듯했다.",
						"english": "Yet the truth… seemed to herald another abyss.",
						"japanese": "しかし真実は… また別の深淵を予兆しているようだった。",
						"chinese": "然而真相… 似乎预示着另一个深渊。",
						"french": "Pourtant, la vérité… semblait annoncer un autre abysse.",
						"spanish": "Sin embargo, la verdad… parecía presagiar otro abismo.",
						"vietnamese": "Tuy nhiên, sự thật… dường như báo trước một vực thẳm khác.",
						"thai": "ทว่าความจริง… กลับเหมือนจะเป็นลางบอกถึงห้วงลึกอื่น",
						"hindi": "किंतु सत्य… किसी और अतल गर्त का संकेत दे रहा था।"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "그의 이름은 이제… 다시 기억될 거예요.",
						"english": "His name will now… be remembered again.",
						"japanese": "彼の名前は今… 再び記憶されるでしょう。",
						"chinese": "他的名字现在… 将再次被铭记。",
						"french": "Son nom sera maintenant… à nouveau rappelé.",
						"spanish": "Su nombre ahora… será recordado de nuevo.",
						"vietnamese": "Tên anh ấy bây giờ… sẽ được nhớ lại một lần nữa.",
						"thai": "ชื่อของเขา… จะถูกจดจำอีกครั้งแล้ว",
						"hindi": "उसका नाम अब… पुनः याद किया जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"스쿌드라는 이름이 빙하를 잠재웠다.",
			"거대한 선체의 흔적이 이제 명확히 드러났다.",
			"오랜 망각 끝에 다시 불린 이름.",
			"그것은 정령의 분노가 아니었다.",
			"깊은 슬픔과… 홀로 남겨진 자의 고독이었다."
		],
		"english": [
			"The name Skjoldr quieted the glacier.",
			"The traces of the colossal hull now clearly revealed.",
			"A name called again after long oblivion.",
			"It was not the wrath of spirits.",
			"Deep sorrow and… the solitude of one left behind."
		],
		"japanese": [
			"スキョルドという名が氷河を鎮めた。",
			"巨大な船体の痕跡が今、明確に現れた。",
			"長い忘却の果てに再び呼ばれた名。",
			"それは精霊の怒りではなかった。",
			"深い悲しみと… 取り残された者の孤独だった。"
		],
		"chinese": [
			"斯克约尔德这个名字平息了冰川。",
			"巨大的船体痕迹如今清晰可见。",
			"漫长遗忘之后再次被呼唤的名字。",
			"那不是精灵的愤怒。",
			"是深深的悲伤……和被遗弃者的孤独。"
		],
		"french": [
			"Le nom Skjoldr a apaisé le glacier.",
			"Les traces de la coque colossale sont maintenant clairement révélées.",
			"Un nom à nouveau prononcé après un long oubli.",
			"Ce n'était pas la colère des esprits.",
			"Une profonde tristesse et… la solitude de celui qui est laissé seul."
		],
		"spanish": [
			"El nombre Skjoldr aquietó el glaciar.",
			"Las huellas del colosal casco ahora claramente reveladas.",
			"Un nombre invocado de nuevo tras un largo olvido.",
			"No era la ira de los espíritus.",
			"Una profunda tristeza y… la soledad del que fue abandonado."
		],
		"vietnamese": [
			"Cái tên Skjoldr đã làm dịu đi sông băng.",
			"Dấu vết của thân tàu khổng lồ giờ đây đã lộ rõ.",
			"Một cái tên được gọi lại sau thời gian dài lãng quên.",
			"Đó không phải là cơn thịnh nộ của các linh hồn.",
			"Nỗi buồn sâu sắc và… sự cô đơn của người bị bỏ lại một mình."
		],
		"thai": [
			"ชื่อ Skjoldr ทำให้ธารน้ำแข็งสงบลง",
			"ร่องรอยของลำเรือขนาดมหึมาปรากฏชัดเจนแล้ว",
			"ชื่อที่ถูกเรียกอีกครั้งหลังจากการหลงลืมอันยาวนาน",
			"นั่นไม่ใช่ความโกรธแค้นของภูตผี",
			"ความโศกเศร้าอย่างลึกซึ้งและ... ความโดดเดี่ยวของผู้ที่ถูกทิ้งไว้เบื้องหลัง"
		],
		"hindi": [
			"स्किओल्ड्र नाम ने ग्लेशियर को शांत किया।",
			"विशालकाय पतवार के निशान अब स्पष्ट रूप से प्रकट हो गए।",
			"लंबे विस्मरण के बाद फिर से पुकारा गया एक नाम।",
			"वह आत्माओं का क्रोध नहीं था।",
			"गहरा दुख और… अकेले छूटे हुए व्यक्ति का अकेलापन था।"
		]
	},
	"prologue": {
		"korean": [
			"빙하의 심장부, 잊힌 것들의 무덤.",
			"룬 문자는 과거를 속삭였고, 얼음은 침묵했다.",
			"한 여인이 망자의 맹세를 기억하려 한다.",
			"그 이름이 불리는 순간, 모든 것이 흔들릴 터.",
			"과연 그것은 구원일까, 침해일까."
		],
		"english": [
			"Heart of the glacier, tomb of the forgotten.",
			"Runes whispered of the past, ice remained silent.",
			"A woman strives to remember the oath of the dead.",
			"The moment that name is called, all will tremble.",
			"Will it be salvation, or transgression?"
		],
		"japanese": [
			"氷河の心臓部、忘れ去られたものの墓。",
			"ルーン文字は過去を囁き、氷は沈黙した。",
			"ある女が死者の誓いを思い出そうとする。",
			"その名が呼ばれる瞬間、すべてが揺れ動く。",
			"それは救済なのか、それとも侵害なのか。"
		],
		"chinese": [
			"冰川之心，遗忘之物之墓。",
			"符文低语着过去，冰层却保持沉默。",
			"一个女人试图记住死者的誓言。",
			"那个名字被呼唤的瞬间，一切都将颤抖。",
			"那究竟是救赎，还是侵犯？"
		],
		"french": [
			"Au cœur du glacier, tombeau des oubliés.",
			"Les runes murmuraient le passé, la glace restait silencieuse.",
			"Une femme tente de se souvenir du serment des morts.",
			"Au moment où ce nom sera prononcé, tout tremblera.",
			"Sera-ce le salut, ou la transgression ?"
		],
		"spanish": [
			"Corazón del glaciar, tumba de lo olvidado.",
			"Las runas susurraban el pasado, el hielo permanecía en silencio.",
			"Una mujer intenta recordar el juramento de los muertos.",
			"En el instante en que se pronuncie ese nombre, todo temblará.",
			"¿Será salvación o transgresión?"
		],
		"vietnamese": [
			"Trái tim băng hà, mộ phần của những điều bị lãng quên.",
			"Chữ rune thì thầm về quá khứ, băng giá vẫn im lặng.",
			"Một người phụ nữ cố gắng ghi nhớ lời thề của người đã khuất.",
			"Khoảnh khắc cái tên đó được gọi, mọi thứ sẽ rung chuyển.",
			"Liệu đó là sự cứu rỗi, hay sự xâm phạm?"
		],
		"thai": [
			"ใจกลางธารน้ำแข็ง สุสานแห่งสิ่งที่ถูกลืม",
			"รูนกระซิบถึงอดีต น้ำแข็งยังคงนิ่งเงียบ",
			"หญิงคนหนึ่งพยายามจดจำคำสาบานของผู้ตาย",
			"เมื่อชื่อนั้นถูกเรียก ทุกสิ่งจะสั่นสะเทือน",
			"นั่นจะเป็นการไถ่บาป หรือการล่วงละเมิดกันแน่"
		],
		"hindi": [
			"ग्लेशियर का हृदय, भूली हुई चीज़ों का मकबरा।",
			"शिलालेखों ने अतीत फुसफुसाया, बर्फ़ ख़ामोश रही।",
			"एक महिला मृतकों की शपथ याद करने की कोशिश करती है।",
			"जिस पल वह नाम पुकारा जाएगा, सब कुछ हिल जाएगा।",
			"क्या वह मोक्ष होगा, या उल्लंघन?"
		]
	}
} as const;
