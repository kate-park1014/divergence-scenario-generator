export const scenario_desert_aurelia_28_04 = {
	"scenario_id": "desert_aurelia_28_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오아시스의 환영이 모래폭풍과 뒤섞였다.",
			"아름다움은 이제, 끝없는 절망의 다른 이름.",
			"모든 것이 부서질 듯한 위기 속에서도…",
			"우리는 진실을 찾아야만 했다. 이 고통의 근원을."
		],
		"english": [
			"The oasis's mirage blended with the sandstorm.",
			"Beauty is now another name for endless despair.",
			"Even amidst a crisis where everything seemed to shatter...",
			"We had to find the truth. The source of this suffering."
		],
		"japanese": [
			"オアシスの幻影が砂嵐と混じり合った。",
			"美しさは今、終わりのない絶望の別の名。",
			"全てが崩れ落ちそうな危機の中でも…",
			"我々は真実を探し出さねばならなかった。この苦痛の根源を。"
		],
		"chinese": [
			"绿洲的幻影与沙暴交织。",
			"美丽如今是无尽绝望的另一个名字。",
			"即使在一切即将崩塌的危机中…",
			"我们必须找到真相。这痛苦的根源。"
		],
		"french": [
			"Le mirage de l'oasis se mêlait à la tempête de sable.",
			"La beauté est désormais un autre nom pour le désespoir infini.",
			"Même au milieu d'une crise où tout semblait s'effondrer...",
			"Nous devions trouver la vérité. La source de cette souffrance."
		],
		"spanish": [
			"El espejismo del oasis se mezcló con la tormenta de arena.",
			"La belleza es ahora otro nombre para la desesperación sin fin.",
			"Incluso en medio de una crisis donde todo parecía desmoronarse...",
			"Debíamos encontrar la verdad. La fuente de este sufrimiento."
		],
		"vietnamese": [
			"Ảo ảnh ốc đảo hòa lẫn vào bão cát.",
			"Vẻ đẹp giờ đây là một tên gọi khác của sự tuyệt vọng vô tận.",
			"Ngay cả trong cơn khủng hoảng mọi thứ dường như tan vỡ…",
			"Chúng ta phải tìm ra sự thật. Nguồn gốc của nỗi đau này."
		],
		"thai": [
			"ภาพลวงตาของโอเอซิสผสานกับพายุทราย",
			"ความงามคืออีกชื่อหนึ่งของความสิ้นหวังอันไม่สิ้นสุด",
			"แม้ในวิกฤตที่ทุกสิ่งราวกับจะแตกสลาย...",
			"เราต้องค้นหาความจริง ต้นกำเนิดของความทุกข์ทรมานนี้"
		],
		"hindi": [
			"नखलिस्तान का मृगतृष्णा रेतीले तूफान में मिल गया।",
			"सुंदरता अब अनंत निराशा का दूसरा नाम है।",
			"हर चीज़ के बिखरने की कगार पर पहुँच चुकी इस संकट के बीच भी...",
			"हमें सच का पता लगाना था। इस पीड़ा के स्रोत का।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래폭풍이 오아시스를 집어삼켰다. 환영은 더욱 선명해졌다.",
						"english": "The sandstorm swallowed the oasis. The mirage grew clearer.",
						"japanese": "砂嵐がオアシスを飲み込んだ。幻影はさらに鮮明になった。",
						"chinese": "沙暴吞噬了绿洲。幻象变得更加清晰。",
						"french": "La tempête de sable a englouti l'oasis. Le mirage est devenu plus clair.",
						"spanish": "La tormenta de arena engulló el oasis. El espejismo se hizo más claro.",
						"vietnamese": "Bão cát nuốt chửng ốc đảo. Ảo ảnh càng rõ nét.",
						"thai": "พายุทรายกลืนกินโอเอซิส ภาพลวงตาชัดเจนยิ่งขึ้น",
						"hindi": "रेतीले तूफान ने नखलिस्तान को निगल लिया। मृगतृष्णा और स्पष्ट हो गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 현실이 아니야. 전부 가짜야.",
						"english": "This isn't... reality. It's all fake.",
						"japanese": "これは…現実じゃない。全部偽物だ。",
						"chinese": "这不是…现实。全是假的。",
						"french": "Ce n'est pas... la réalité. Tout est faux.",
						"spanish": "Esto no es... la realidad. Todo es falso.",
						"vietnamese": "Đây không phải… hiện thực. Tất cả đều là giả.",
						"thai": "นี่ไม่ใช่...ความจริง ทุกอย่างเป็นของปลอม",
						"hindi": "यह... हकीकत नहीं है। सब कुछ नकली है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숨이 막혀. 시간이… 멈춰버릴 것 같아.",
						"english": "I can't breathe. Time feels like it's... stopping.",
						"japanese": "息が詰まる。時間が…止まってしまいそうだ。",
						"chinese": "我喘不过气。时间…仿佛要停止了。",
						"french": "J'étouffe. Le temps... semble s'arrêter.",
						"spanish": "Me ahogo. El tiempo... parece detenerse.",
						"vietnamese": "Tôi nghẹt thở. Thời gian… như sắp ngừng lại.",
						"thai": "ฉันหายใจไม่ออก เวลาราวกับจะ...หยุดลง",
						"hindi": "मेरा दम घुट रहा है। समय... रुकने वाला है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. 이젠 환영조차 피할 수 없겠지.",
						"english": "You've come. Now, not even mirages can be avoided.",
						"japanese": "来たか。もう幻影すら避けられないだろう。",
						"chinese": "你来了。现在，连幻象也无法避免了。",
						"french": "Vous êtes venu. Maintenant, même les mirages ne peuvent être évités.",
						"spanish": "Has venido. Ahora, ni siquiera los espejismos se pueden evitar.",
						"vietnamese": "Ngươi đã đến. Giờ thì ngay cả ảo ảnh cũng không thể tránh khỏi.",
						"thai": "เจ้ามาแล้ว ตอนนี้แม้แต่ภาพลวงตาก็ไม่อาจหลีกเลี่ยงได้",
						"hindi": "तुम आ गए। अब तो मृगतृष्णा से भी नहीं बचा जा सकता।"
					},
					"speaker": "jasper"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구야?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是…谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngươi… là ai?",
						"thai": "เจ้า...คือใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "재스퍼. 금지된 지식을 찾아 헤매는 자.",
						"english": "Jasper. One who wanders in search of forbidden knowledge.",
						"japanese": "ジャスパー。禁じられた知識を求めてさまよう者。",
						"chinese": "贾斯珀。一个寻求禁忌知识的流浪者。",
						"french": "Jasper. Celui qui erre à la recherche de connaissances interdites.",
						"spanish": "Jasper. Aquel que vaga en busca del conocimiento prohibido.",
						"vietnamese": "Jasper. Kẻ lang thang tìm kiếm tri thức cấm.",
						"thai": "แจสเปอร์ ผู้ที่ร่อนเร่เพื่อค้นหาความรู้ต้องห้าม",
						"hindi": "जैस्पर। वह जो वर्जित ज्ञान की तलाश में भटकता है।"
					},
					"speaker": "jasper"
				},
				{
					"speaker": "jasper",
					"content": {
						"korean": "이 오아시스는 생명을 앗아간다. 네가 보는 모든 것은 거짓이야.",
						"english": "This oasis devours life. Everything you see is a lie.",
						"japanese": "このオアシスは命を奪う。お前が見るものは全て偽りだ。",
						"chinese": "这片绿洲吞噬生命。你所见的一切都是谎言。",
						"french": "Cette oasis dévore la vie. Tout ce que tu vois n'est qu'un mensonge.",
						"spanish": "Este oasis devora la vida. Todo lo que ves es una mentira.",
						"vietnamese": "Ốc đảo này nuốt chửng sự sống. Mọi thứ ngươi thấy đều là dối trá.",
						"thai": "โอเอซิสนี้กลืนกินชีวิต ทุกสิ่งที่เจ้าเห็นคือภาพลวงตา",
						"hindi": "यह नखलिस्तान जीवन को निगल जाता है। तुम जो कुछ भी देखते हो वह झूठ है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "생명을… 앗아간다고?",
						"english": "Devours... life?",
						"japanese": "命を…奪うのか？",
						"chinese": "吞噬……生命？",
						"french": "Dévore... la vie ?",
						"spanish": "¿Devora... vida?",
						"vietnamese": "Nuốt chửng… sự sống sao?",
						"thai": "กลืนกิน...ชีวิต?",
						"hindi": "जीवन को... निगल जाता है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오랜 비석에 새겨진 경고가 있어.",
						"english": "An ancient tablet bears a warning.",
						"japanese": "古い石碑に刻まれた警告がある。",
						"chinese": "古老的石碑上刻着警告。",
						"french": "Une ancienne stèle porte un avertissement.",
						"spanish": "Una antigua estela lleva una advertencia.",
						"vietnamese": "Một tấm bia cổ khắc lời cảnh báo.",
						"thai": "มีคำเตือนจารึกอยู่บนศิลาโบราณ",
						"hindi": "एक प्राचीन शिला पर चेतावनी खुदी हुई है।"
					},
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "'생명을 앗아가는 오아시스'. 그리고 '금지된 의식'.",
						"english": "'The Oasis that Devours Life.' And 'The Forbidden Ritual.'",
						"japanese": "「命を奪うオアシス」。そして「禁断の儀式」。",
						"chinese": "“吞噬生命的绿洲”。以及“禁忌仪式”。",
						"french": "« L'Oasis qui dévore la vie. » Et « Le Rituel interdit. »",
						"spanish": "«El oasis que devora la vida.» Y «El ritual prohibido.»",
						"vietnamese": "“Ốc đảo nuốt chửng sự sống”. Và “Nghi lễ cấm kỵ”.",
						"thai": "“โอเอซิสที่กลืนกินชีวิต” และ “พิธีกรรมต้องห้าม”",
						"hindi": "''जीवन को निगलने वाला नखलिस्तान''। और ''वर्जित अनुष्ठान''।"
					},
					"speaker": "jasper"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "금지된 의식?",
						"english": "Forbidden ritual?",
						"japanese": "禁断の儀式だと？",
						"chinese": "禁忌仪式？",
						"french": "Rituel interdit ?",
						"spanish": "¿Ritual prohibido?",
						"vietnamese": "Nghi lễ cấm kỵ?",
						"thai": "พิธีกรรมต้องห้าม?",
						"hindi": "वर्जित अनुष्ठान?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이곳에 갇힌 자들의 영혼을… 이용하는 의식이지.",
						"english": "A ritual that... uses the souls of those trapped here.",
						"japanese": "ここに囚われた者たちの魂を…利用する儀式だ。",
						"chinese": "一个……利用被困在这里的人的灵魂的仪式。",
						"french": "Un rituel qui... utilise les âmes de ceux qui sont piégés ici.",
						"spanish": "Un ritual que... utiliza las almas de los que están atrapados aquí.",
						"vietnamese": "Một nghi lễ… lợi dụng linh hồn của những kẻ bị mắc kẹt ở đây.",
						"thai": "พิธีกรรมที่...ใช้ดวงวิญญาณของผู้ที่ถูกจองจำที่นี่",
						"hindi": "एक अनुष्ठान जो... यहाँ फँसे लोगों की आत्माओं का उपयोग करता है।"
					},
					"speaker": "jasper"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 그럼 우리는?",
						"english": "Impossible... Then what about us?",
						"japanese": "まさか…じゃあ、私たちは？",
						"chinese": "不可能……那我们呢？",
						"french": "Impossible... Et nous, alors ?",
						"spanish": "Imposible... ¿Entonces nosotros qué?",
						"vietnamese": "Không thể nào… Vậy còn chúng ta?",
						"thai": "ไม่จริง...แล้วพวกเราล่ะ?",
						"hindi": "असंभव... तो हम क्या?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시간에 갇힌 채 고통받다… 오아시스의 일부가 되겠지.",
						"english": "Trapped in time, suffering... to become part of the oasis.",
						"japanese": "時間に囚われ苦しみ…オアシスの一部となるだろう。",
						"chinese": "被困在时间里，受尽折磨……最终成为绿洲的一部分。",
						"french": "Piégés dans le temps, souffrant... pour devenir une partie de l'oasis.",
						"spanish": "Atrapados en el tiempo, sufriendo... para convertirnos en parte del oasis.",
						"vietnamese": "Bị mắc kẹt trong thời gian, chịu đựng… rồi trở thành một phần của ốc đảo.",
						"thai": "ถูกขังอยู่ในกาลเวลา ทนทุกข์ทรมาน... เพื่อกลายเป็นส่วนหนึ่งของโอเอซิส",
						"hindi": "समय में फँसकर, दुख झेलते हुए... नखलिस्तान का हिस्सा बन जाएंगे।"
					},
					"speaker": "jasper"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환영은 현실과 분간할 수 없게 변했다. 모래폭풍이 모든 것을 가로막았다.",
						"english": "The illusion became indistinguishable from reality. A sandstorm blocked everything.",
						"japanese": "幻は現実と区別がつかなくなった。砂嵐が全てを遮った。",
						"chinese": "幻象变得与现实难辨。沙尘暴阻挡了一切。",
						"french": "L'illusion est devenue indiscernable de la réalité. Une tempête de sable a tout bloqué.",
						"spanish": "La ilusión se volvió indistinguible de la realidad. Una tormenta de arena lo bloqueó todo.",
						"vietnamese": "Ảo ảnh trở nên không thể phân biệt được với thực tại. Một cơn bão cát đã chắn ngang mọi thứ.",
						"thai": "ภาพลวงตาแยกไม่ออกจากความจริง พายุทรายบดบังทุกสิ่ง",
						"hindi": "भ्रम वास्तविकता से अप्रभेद्य हो गया। एक रेत का तूफान सब कुछ अवरुद्ध कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 필멸자여. 진실을 안다고 달라질 것 같나?",
						"english": "Foolish mortal. Do you think knowing the truth will change anything?",
						"japanese": "愚かなる定命の者よ。真実を知ったところで何が変わるというのだ？",
						"chinese": "愚蠢的凡人。你以为知道真相就能改变什么吗？",
						"french": "Mortel insensé. Penses-tu que connaître la vérité changera quoi que ce soit ?",
						"spanish": "Mortales necios. ¿Creéis que saber la verdad cambiará algo?",
						"vietnamese": "Kẻ phàm trần ngu ngốc. Ngươi nghĩ rằng biết sự thật sẽ thay đổi được điều gì sao?",
						"thai": "มนุษย์ผู้โง่เขลา เจ้าคิดว่าการรู้ความจริงจะเปลี่ยนแปลงอะไรได้หรือ?",
						"hindi": "मूर्ख नश्वर। क्या तुम्हें लगता है कि सच्चाई जानने से कुछ बदलेगा?"
					}
				},
				{
					"content": {
						"korean": "당신이… 이 모든 환영의 근원인가?",
						"english": "Are you... the source of all these illusions?",
						"japanese": "あなたが…この全ての幻影の根源なのか？",
						"chinese": "你…是所有这些幻象的根源吗？",
						"french": "Vous êtes... la source de toutes ces illusions ?",
						"spanish": "¿Eres tú... la fuente de todas estas ilusiones?",
						"vietnamese": "Ngươi... là nguồn gốc của tất cả ảo ảnh này sao?",
						"thai": "เจ้า... คือต้นกำเนิดของภาพลวงตาทั้งหมดนี้งั้นหรือ?",
						"hindi": "क्या तुम... इन सभी भ्रमों का स्रोत हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "곧 너도 이곳의 일부가 될 뿐. 영원히 고통받으며…",
						"english": "Soon, you too will become a part of this place. Suffering eternally...",
						"japanese": "すぐに、お前もここの一部となるだけだ。永遠に苦しみながら…",
						"chinese": "很快，你也会成为这里的一部分。永远承受痛苦...",
						"french": "Bientôt, toi aussi tu feras partie de cet endroit. Souffrant éternellement...",
						"spanish": "Pronto, tú también serás parte de este lugar. Sufriendo eternamente...",
						"vietnamese": "Chẳng mấy chốc, ngươi cũng sẽ trở thành một phần của nơi đây. Đau khổ vĩnh viễn...",
						"thai": "ไม่นาน เจ้าก็จะกลายเป็นส่วนหนึ่งของที่นี่ ทรมานชั่วนิรันดร์...",
						"hindi": "जल्द ही, तुम भी इस जगह का हिस्सा बन जाओगे। हमेशा के लिए पीड़ित होते हुए..."
					}
				},
				{
					"content": {
						"korean": "절대 포기하지 않아! 이 고통을 끝낼 거야.",
						"english": "I'll never give up! I'll end this suffering.",
						"japanese": "決して諦めない！この苦痛を終わらせる。",
						"chinese": "我绝不放弃！我要结束这痛苦。",
						"french": "Je n'abandonnerai jamais ! Je vais mettre fin à cette souffrance.",
						"spanish": "¡Nunca me rendiré! Acabaré con este sufrimiento.",
						"vietnamese": "Ta sẽ không bao giờ bỏ cuộc! Ta sẽ chấm dứt nỗi đau này.",
						"thai": "ข้าจะไม่มีวันยอมแพ้! ข้าจะยุติความทุกข์ทรมานนี้",
						"hindi": "मैं कभी हार नहीं मानूंगा! मैं इस पीड़ा को खत्म कर दूंगा。"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도에 만족할 줄 아나?",
						"english": "...Do you think this is enough?",
						"japanese": "…たったこれだけで満足だとでも？",
						"chinese": "...你以为这样就满足了吗？",
						"french": "...Penses-tu que cela suffise ?",
						"spanish": "...¿Crees que esto es suficiente?",
						"vietnamese": "...Ngươi nghĩ chừng này là đủ sao?",
						"thai": "...คิดว่าแค่นี้ก็พอแล้วงั้นหรือ?",
						"hindi": "...क्या तुम्हें लगता है कि इतना काफी है?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오아시스의 저주는… 그리 간단하지 않아. 진정한 공포는 이제부터다.",
						"english": "The curse of the oasis... is not that simple. The true horror begins now.",
						"japanese": "オアシスの呪いは…そんなに単純ではない。真の恐怖はこれからだ。",
						"chinese": "绿洲的诅咒…并非那么简单。真正的恐惧才刚开始。",
						"french": "La malédiction de l'oasis... n'est pas si simple. La véritable horreur commence maintenant.",
						"spanish": "La maldición del oasis... no es tan simple. El verdadero horror comienza ahora.",
						"vietnamese": "Lời nguyền của ốc đảo... không hề đơn giản như vậy. Nỗi kinh hoàng thực sự bắt đầu từ bây giờ.",
						"thai": "คำสาปของโอเอซิส... ไม่ง่ายอย่างนั้น ความสยองขวัญที่แท้จริงเริ่มต้นขึ้นแล้ว",
						"hindi": "नखलिस्तान का अभिशाप... इतना आसान नहीं है। असली आतंक अब शुरू होता है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야…?",
						"english": "What do you mean...?",
						"japanese": "どういうことだ…？",
						"chinese": "你什么意思…？",
						"french": "Que voulez-vous dire...?",
						"spanish": "¿Qué quieres decir...?",
						"vietnamese": "Ngươi nói gì cơ...?",
						"thai": "หมายความว่าไง...?",
						"hindi": "तुम्हारा क्या मतलब है...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환영은 옅어졌지만, 오아시스의 잔혹한 진실은 더욱 깊어졌다.",
						"english": "The illusion faded, but the cruel truth of the oasis deepened.",
						"japanese": "幻影は薄れたが、オアシスの残酷な真実はさらに深まった。",
						"chinese": "幻象消退，但绿洲的残酷真相却愈发深刻。",
						"french": "L'illusion s'est estompée, mais la cruelle vérité de l'oasis s'est accentuée.",
						"spanish": "La ilusión se desvaneció, pero la cruel verdad del oasis se hizo más profunda.",
						"vietnamese": "Ảo ảnh mờ đi, nhưng sự thật tàn khốc về ốc đảo càng sâu sắc hơn.",
						"thai": "ภาพลวงตาจางหายไป แต่ความจริงอันโหดร้ายของโอเอซิสกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "भ्रम मिट गया, लेकिन नखलिस्तान की क्रूर सच्चाई और गहरी हो गई。"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았다. 이 저주의 근원을 찾아야 한다.",
						"english": "It's not over yet. I must find the source of this curse.",
						"japanese": "まだ終わってない。この呪いの根源を見つけなければ。",
						"chinese": "还没结束。我必须找到这诅咒的根源。",
						"french": "Ce n'est pas encore fini. Je dois trouver la source de cette malédiction.",
						"spanish": "Aún no ha terminado. Debo encontrar la fuente de esta maldición.",
						"vietnamese": "Chưa kết thúc. Ta phải tìm ra nguồn gốc của lời nguyền này.",
						"thai": "ยังไม่จบ ข้าต้องหาสาเหตุของคำสาปนี้ให้เจอ",
						"hindi": "यह अभी खत्म नहीं हुआ है। मुझे इस श्राप का स्रोत खोजना होगा।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영의 중심에서, 거대한 그림자가 기다리고 있었다.",
						"english": "At the heart of the illusion, a colossal shadow awaited.",
						"japanese": "幻影の中心で、巨大な影が待ち構えていた。",
						"chinese": "幻象的中心，一个巨大的影子正在等候。",
						"french": "Au cœur de l'illusion, une ombre colossale attendait.",
						"spanish": "En el corazón de la ilusión, una sombra colosal aguardaba.",
						"vietnamese": "Tại trung tâm của ảo ảnh, một bóng đen khổng lồ đang chờ đợi.",
						"thai": "ณ ใจกลางของภาพลวงตา เงาขนาดมหึมากำลังรออยู่",
						"hindi": "भ्रम के केंद्र में, एक विशाल छाया प्रतीक्षा कर रही थी。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 여기까지 왔군. 이 금지된 의식을 막으려는 건가?",
						"english": "You've finally made it this far. Do you intend to stop this forbidden ritual?",
						"japanese": "ついにここまで来たか。この禁断の儀式を止めようというのか？",
						"chinese": "你终于走到这一步了。是想阻止这个禁忌仪式吗？",
						"french": "Vous êtes enfin arrivé jusqu'ici. Comptez-vous arrêter ce rituel interdit ?",
						"spanish": "Finalmente has llegado hasta aquí. ¿Pretendes detener este ritual prohibido?",
						"vietnamese": "Ngươi cuối cùng cũng đã đến đây. Ngươi định ngăn chặn nghi lễ cấm kỵ này sao?",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ เจ้าตั้งใจจะหยุดพิธีกรรมต้องห้ามนี้งั้นหรือ?",
						"hindi": "तुम आखिरकार इतनी दूर आ गए। क्या तुम इस निषिद्ध अनुष्ठान को रोकना चाहते हो?"
					}
				},
				{
					"content": {
						"korean": "그래. 더 이상 희생자는 없어.",
						"english": "Yes. There will be no more victims.",
						"japanese": "そうだ。これ以上犠牲者は出させない。",
						"chinese": "是的。不会再有受害者了。",
						"french": "Oui. Il n'y aura plus de victimes.",
						"spanish": "Sí. No habrá más víctimas.",
						"vietnamese": "Đúng vậy. Sẽ không còn nạn nhân nào nữa.",
						"thai": "ใช่ จะไม่มีเหยื่ออีกแล้ว",
						"hindi": "हाँ। अब कोई और पीड़ित नहीं होंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "흥. 너의 의지마저 곧 모래가 될 거다.",
						"english": "Hmph. Even your will shall soon turn to sand.",
						"japanese": "ふん。お前の意志さえも、すぐに砂となるだろう。",
						"chinese": "哼。你的意志很快也会化为尘沙。",
						"french": "Hm. Votre volonté même se transformera bientôt en sable.",
						"spanish": "Hm. Incluso tu voluntad pronto se convertirá en arena.",
						"vietnamese": "Hừ. Ngay cả ý chí của ngươi cũng sẽ sớm hóa thành cát bụi.",
						"thai": "หึ แม้แต่เจตจำนงของเจ้าก็จะกลายเป็นทรายในไม่ช้า",
						"hindi": "हम्म। तुम्हारी इच्छा भी जल्द ही रेत बन जाएगी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래폭풍이 모든 것을 집어삼켰다. 절망만이 남았다.",
						"english": "The sandstorm swallowed everything. Only despair remained.",
						"japanese": "砂嵐がすべてを飲み込んだ。残されたのは絶望だけだった。",
						"chinese": "沙暴吞噬了一切。只剩下绝望。",
						"french": "La tempête de sable a tout englouti. Seul le désespoir subsistait.",
						"spanish": "La tormenta de arena lo engulló todo. Solo quedó la desesperación.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ. Chỉ còn lại tuyệt vọng.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง มีเพียงความสิ้นหวังเท่านั้นที่ยังคงอยู่",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया। केवल निराशा ही बची।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것. 이 오아시스에서 벗어날 수 없어.",
						"english": "Foolish one. You cannot escape this oasis.",
						"japanese": "愚かな者め。このオアシスから逃れることはできない。",
						"chinese": "愚蠢的东西。你逃不出这个绿洲。",
						"french": "Imbécile. Tu ne peux pas t'échapper de cette oasis.",
						"spanish": "Necio. No puedes escapar de este oasis.",
						"vietnamese": "Ngươi thật ngốc. Không thể thoát khỏi ốc đảo này đâu.",
						"thai": "เจ้าช่างโง่เขลา เจ้าไม่มีทางหนีพ้นโอเอซิสแห่งนี้ได้",
						"hindi": "मूर्ख। तुम इस नखलिस्तान से बच नहीं सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 아니야. 절대 포기 안 해.",
						"english": "...Not yet. I will never give up.",
						"japanese": "…まだだ。決して諦めない。",
						"chinese": "……还没。我绝不放弃。",
						"french": "...Pas encore. Je n'abandonnerai jamais.",
						"spanish": "...Todavía no. Nunca me rendiré.",
						"vietnamese": "...Chưa đâu. Ta sẽ không bao giờ bỏ cuộc.",
						"thai": "...ยังไม่ยอม ข้าไม่มีวันยอมแพ้",
						"hindi": "...अभी नहीं। मैं कभी हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
