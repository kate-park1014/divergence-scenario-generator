export const scenario_modern_nemesis_15_05 = {
	"scenario_id": "modern_nemesis_15_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "pool_Oathbound_Nemesis_V1"
	},
	"prologue": {
		"korean": [
			"네메시스의 마천루, 그 최상층에 진실이 잠들어 있었다.",
			"도시를 지배하는 '서약'의 심장.",
			"모든 것을 폭로하려는 자와, 모든 것을 끝내려는 자.",
			"이 대결은 업보의 굴레를 끊어낼 것인가, 혹은 완성시킬 것인가."
		],
		"english": [
			"In Nemesis's skyscraper, at its highest floor, the truth lay dormant.",
			"The heart of the 'Pledge' that rules the city.",
			"One who seeks to expose everything, and one who seeks to end everything.",
			"Will this confrontation break the cycle of karma, or complete it?"
		],
		"japanese": [
			"ネメシスの摩天楼、その最上階に真実が眠っていた。",
			"都市を支配する「誓約」の心臓。",
			"すべてを暴露しようとする者と、すべてを終わらせようとする者。",
			"この対決は業の輪廻を断ち切るのか、それとも完成させるのか。"
		],
		"chinese": [
			"在涅墨西斯摩天楼的顶层，真相沉睡着。",
			"支配这座城市的“誓约”之心。",
			"一个想揭露一切的人，一个想结束一切的人。",
			"这场对决会打破业报的轮回，还是将其完成？"
		],
		"french": [
			"Au sommet du gratte-ciel de Némésis, la vérité dormait.",
			"Le cœur du 'Serment' qui régit la ville.",
			"Celui qui veut tout révéler et celui qui veut tout finir.",
			"Cette confrontation brisera-t-elle le cycle du karma, ou l'achèvera-t-elle ?"
		],
		"spanish": [
			"En el rascacielos de Némesis, en su piso más alto, la verdad yacía dormida.",
			"El corazón del 'Pacto' que domina la ciudad.",
			"Quien busca revelar todo y quien busca acabar con todo.",
			"Esta confrontación, ¿romperá el ciclo del karma o lo completará?"
		],
		"vietnamese": [
			"Trên đỉnh tòa nhà chọc trời của Nemesis, sự thật đang ngủ yên.",
			"Trái tim của 'Lời thề' thống trị thành phố.",
			"Một người muốn phơi bày tất cả, và một người muốn chấm dứt tất cả.",
			"Liệu cuộc đối đầu này sẽ phá vỡ vòng luân hồi nghiệp chướng, hay hoàn thành nó?"
		],
		"thai": [
			"ความจริงหลับใหลอยู่บนยอดตึกระฟ้าของเนเมซิส",
			"หัวใจของ 'พันธสัญญา' ที่ปกครองเมือง",
			"ผู้ที่ต้องการเปิดเผยทุกสิ่ง และผู้ที่ต้องการยุติทุกสิ่ง",
			"การเผชิญหน้านี้จะทำลายวงจรของกรรม หรือจะทำให้สมบูรณ์?"
		],
		"hindi": [
			"नेमेसिस के गगनचुंबी इमारत में, उसकी सबसे ऊपरी मंजिल पर, सच्चाई सो रही थी।",
			"शहर पर राज करने वाले 'शपथ' का दिल।",
			"एक जो सब कुछ उजागर करना चाहता है, और एक जो सब कुछ खत्म करना चाहता है।",
			"क्या यह टकराव कर्म के चक्र को तोड़ेगा, या उसे पूरा करेगा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "여기야. 네메시스의 심장부.",
						"english": "This is it. The heart of Nemesis.",
						"japanese": "ここだ。ネメシスの心臓部。",
						"chinese": "就是这里。涅墨西斯的心脏。",
						"french": "C'est ici. Le cœur de Némésis.",
						"spanish": "Aquí es. El corazón de Némesis.",
						"vietnamese": "Chính là đây. Trái tim của Nemesis.",
						"thai": "นี่แหละ หัวใจของเนเมซิส",
						"hindi": "यह यहाँ है। नेमेसिस का दिल।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔군.",
						"english": "So, you've made it this far.",
						"japanese": "結局ここまで来たか。",
						"chinese": "你终于走到这里了。",
						"french": "Tu es enfin arrivé jusqu'ici.",
						"spanish": "Finalmente has llegado hasta aquí.",
						"vietnamese": "Cuối cùng thì ngươi cũng đã đến đây.",
						"thai": "ในที่สุดก็มาถึงที่นี่",
						"hindi": "तो, तुम यहाँ तक आ गए हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'백년회'의 모든 비극이 이곳에서 시작됐어.",
						"english": "All the tragedies of 'Centennial' began here.",
						"japanese": "「百年会」の悲劇はすべてここから始まった。",
						"chinese": "“百年会”的所有悲剧都从这里开始。",
						"french": "Toutes les tragédies du « Centennaire » ont commencé ici.",
						"spanish": "Todas las tragedias del \"Centenario\" comenzaron aquí.",
						"vietnamese": "Mọi bi kịch của 'Bách Niên Hội' đều bắt đầu từ đây.",
						"thai": "โศกนาฏกรรมทั้งหมดของ 'สมาคมร้อยปี' เริ่มต้นขึ้นที่นี่",
						"hindi": "'शताब्दी' की सभी त्रासदी यहीं से शुरू हुईं।"
					},
					"emotion": "sad",
					"speaker": "dax"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그들은 피로 맹세했어. 죽음으로도 파기될 수 없는 서약.",
						"english": "They swore an oath in blood. A pact that even death cannot break.",
						"japanese": "彼らは血で誓った。死をもってしても破れぬ誓約を。",
						"chinese": "他们以血立誓。一个连死亡也无法打破的誓约。",
						"french": "Ils ont juré par le sang. Un pacte que même la mort ne peut briser.",
						"spanish": "Juraron con sangre. Un pacto que ni la muerte puede romper.",
						"vietnamese": "Họ đã thề bằng máu. Một lời thề mà ngay cả cái chết cũng không thể phá vỡ.",
						"thai": "พวกเขาสาบานด้วยเลือด คำปฏิญาณที่แม้ความตายก็ไม่อาจทำลายได้",
						"hindi": "उन्होंने खून से कसम खाई। एक ऐसी प्रतिज्ञा जिसे मृत्यु भी नहीं तोड़ सकती।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 네메시스가 그 서약의 집행자라는 건가.",
						"english": "So, Nemesis is the enforcer of that pact?",
						"japanese": "なら、ネメシスはその誓約の執行者ってことか。",
						"chinese": "所以，涅墨西斯就是那个誓约的执行者吗？",
						"french": "Alors, Némésis est l'exécutrice de ce pacte ?",
						"spanish": "¿Entonces Némesis es el ejecutor de ese pacto?",
						"vietnamese": "Vậy ra Nemesis là người thực thi lời thề đó sao?",
						"thai": "งั้นเนเมซิสก็คือผู้บังคับใช้คำปฏิญาณนั้นสินะ",
						"hindi": "तो, नेमेसिस उस प्रतिज्ञा का प्रवर्तक है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 맹세를 어긴 자들에게 영겁의 빚을 받아내는 죽음의 사자.",
						"english": "Yes. The grim reaper who collects an eternal debt from those who break their vows.",
						"japanese": "そうだ。誓いを破った者たちから永遠の代償を徴収する死の使者。",
						"chinese": "是的。向违背誓言者索取永恒债务的死神。",
						"french": "Oui. La faucheuse qui réclame une dette éternelle à ceux qui rompent leurs vœux.",
						"spanish": "Sí. La parca que cobra una deuda eterna a quienes rompen sus votos.",
						"vietnamese": "Đúng vậy. Sứ giả của cái chết thu lấy món nợ vĩnh cửu từ những kẻ vi phạm lời thề.",
						"thai": "ใช่ ทูตแห่งความตายที่ทวงหนี้ชั่วนิรันดร์จากผู้ที่ผิดคำสาบาน",
						"hindi": "हाँ। वह मृत्युदूत जो अपनी प्रतिज्ञा तोड़ने वालों से एक शाश्वत ऋण वसूल करता है।"
					},
					"emotion": "angry",
					"speaker": "dax"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "네메시스를 쓰러뜨린다고 끝이 아니야.",
						"english": "Defeating Nemesis isn't the end.",
						"japanese": "ネメシスを倒しても終わりじゃない。",
						"chinese": "击败涅墨西斯并不是结束。",
						"french": "Vaincre Némésis n'est pas la fin.",
						"spanish": "Derrotar a Némesis no es el final.",
						"vietnamese": "Đánh bại Nemesis không phải là kết thúc.",
						"thai": "การโค่นเนเมซิสไม่ใช่จุดจบ",
						"hindi": "नेमेसिस को हराना अंत नहीं है।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 서약은… 죽음을 통해서만 완성돼.",
						"english": "That pact... is only fulfilled through death.",
						"japanese": "その誓約は…死をもってのみ完遂される。",
						"chinese": "那个誓约……只有通过死亡才能完成。",
						"french": "Ce pacte... n'est accompli que par la mort.",
						"spanish": "Ese pacto... solo se cumple a través de la muerte.",
						"vietnamese": "Lời thề đó... chỉ hoàn thành qua cái chết.",
						"thai": "คำปฏิญาณนั้น... จะสมบูรณ์ได้ด้วยความตายเท่านั้น",
						"hindi": "वह प्रतिज्ञा... केवल मृत्यु के माध्यम से ही पूरी होती है।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう戻れない。",
						"chinese": "已经无法回头了。",
						"french": "On ne peut plus reculer.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "ไม่มีทางย้อนกลับไปแล้ว",
						"hindi": "अब पीछे नहीं हट सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 세상에 알릴 준비가 됐어.",
						"english": "I'm ready to reveal the truth to the world.",
						"japanese": "真実を世界に明かす準備ができた。",
						"chinese": "我已经准备好向世界揭露真相了。",
						"french": "Je suis prêt à révéler la vérité au monde.",
						"spanish": "Estoy listo para revelar la verdad al mundo.",
						"vietnamese": "Tôi đã sẵn sàng tiết lộ sự thật cho thế giới.",
						"thai": "ฉันพร้อมแล้วที่จะเปิดเผยความจริงให้โลกได้รับรู้",
						"hindi": "मैं दुनिया को सच्चाई बताने के लिए तैयार हूँ।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "네메시스의 죽음이 또 다른 비극을 낳지 않도록….",
						"english": "So Nemesis's death doesn't birth another tragedy...",
						"japanese": "ネメシスの死が新たな悲劇を生み出さないように…。",
						"chinese": "绝不能让涅墨西斯的死再酿悲剧……",
						"french": "Pour que la mort de Nemesis n'engendre pas une autre tragédie...",
						"spanish": "Para que la muerte de Némesis no dé lugar a otra tragedia...",
						"vietnamese": "Để cái chết của Nemesis không gây ra một bi kịch khác...",
						"thai": "เพื่อไม่ให้ความตายของเนเมซิสสร้างโศกนาฏกรรมอื่นอีก...",
						"hindi": "ताकि नेमेसिस की मौत एक और त्रासदी को जन्म न दे..."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "영원히 갚아야 할 빚이다. 이 업보의 굴레에서 벗어날 수 없어.",
						"english": "An eternal debt. This karmic cycle, inescapable.",
						"japanese": "永遠に償うべき借りだ。この業の輪廻からは逃れられぬ。",
						"chinese": "永恒之债。此业力轮回，无法挣脱。",
						"french": "Une dette éternelle. Impossible d'échapper à ce cycle karmique.",
						"spanish": "Una deuda eterna. De este ciclo kármico, no puedo escapar.",
						"vietnamese": "Món nợ đời đời. Vòng nghiệp chướng này, khó thoát.",
						"thai": "หนี้กรรมชั่วนิรันดร์. วงจรนี้ไม่อาจหลุดพ้น.",
						"hindi": "यह एक शाश्वत ऋण है। इस कर्मचक्र से मुक्ति नहीं।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았다.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "마침내 왔군. 어리석은 영웅이여.",
						"english": "You've finally arrived, foolish hero.",
						"japanese": "ようやく来たか。愚かなる英雄よ。",
						"chinese": "终于来了吗，愚蠢的英雄。",
						"french": "Te voilà enfin, héros insensé.",
						"spanish": "Por fin has llegado, héroe insensato.",
						"vietnamese": "Cuối cùng ngươi cũng đến, anh hùng ngu xuẩn.",
						"thai": "ในที่สุดก็มาถึงแล้วสินะ วีรบุรุษผู้โง่เขลาเอ๋ย",
						"hindi": "तुम अंततः आ गए, मूर्ख नायक।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈의 가면을 벗겨주마! 네메시스!",
						"english": "I'll rip off your mask! Nemesis!",
						"japanese": "貴様の仮面を剥がしてやろう！ネメシス！",
						"chinese": "我会撕下你的面具！涅墨西斯！",
						"french": "Je t'arracherai ton masque ! Nemesis !",
						"spanish": "¡Te arrancaré la máscara! ¡Némesis!",
						"vietnamese": "Ta sẽ lột mặt nạ của ngươi! Nemesis!",
						"thai": "ข้าจะกระชากหน้ากากของเจ้าออก! เนเมซิส!",
						"hindi": "मैं तुम्हारा मुखौटा फाड़ दूंगा! नेмеसिस!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "시민 여러분! 네메시스는 '백년회'의…!",
						"english": "Citizens! Nemesis is a member of the 'Centennial Society'...!",
						"japanese": "市民の皆さん！ネメシスは「百年会」の…！",
						"chinese": "市民们！涅墨西斯是“百年会”的……！",
						"french": "Citoyens ! Nemesis fait partie de la \"Société du Centenaire\"... !",
						"spanish": "¡Ciudadanos! ¡Némesis es de la 'Sociedad Centenaria'... !",
						"vietnamese": "Hỡi các công dân! Nemesis là của 'Hội Trăm Năm'... !",
						"thai": "ท่านพลเมืองทั้งหลาย! เนเมซิสคือของ 'สมาคมร้อยปี'... !",
						"hindi": "नागरिकों! नेमेसिस 'शताब्दी समाज' का है…!"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "진실? 너희가 감당할 수 있을까?",
						"english": "The truth? Can you handle it?",
						"japanese": "真実？貴様らが耐えられるか？",
						"chinese": "真相？你们能承受得了吗？",
						"french": "La vérité ? Pourrez-vous la supporter ?",
						"spanish": "¿La verdad? ¿Podréis soportarla?",
						"vietnamese": "Sự thật? Các ngươi có chịu nổi không?",
						"thai": "ความจริงน่ะหรือ? พวกเจ้าจะรับไหวหรือ?",
						"hindi": "सत्य? क्या तुम उसे झेल पाओगे?"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"speaker": "dax",
					"type": "direction",
					"action": "exit"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났다…!",
						"english": "It's over...!",
						"japanese": "終わった…！",
						"chinese": "结束了……！",
						"french": "C'est fini… !",
						"spanish": "¡Se acabó…!",
						"vietnamese": "Đã kết thúc...!",
						"thai": "จบแล้ว...!",
						"hindi": "खत्म हो गया…!"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들… 이 서약은… 죽음을 통해서만 완성된다.",
						"english": "Foolish beings... This oath... is only fulfilled through death.",
						"japanese": "愚かな者たちよ… この誓約は… 死によってのみ完遂される。",
						"chinese": "愚蠢的东西…… 这誓约…… 唯有通过死亡才能完成。",
						"french": "Êtres insensés... Ce serment... n'est accompli que par la mort.",
						"spanish": "Necios... Este juramento... solo se cumple con la muerte.",
						"vietnamese": "Những kẻ ngu ngốc... Lời thề này... chỉ được hoàn thành qua cái chết.",
						"thai": "เจ้าพวกโง่เขลา... คำสาบานนี้... จะสำเร็จได้ด้วยความตายเท่านั้น",
						"hindi": "मूर्खों… यह शपथ… केवल मृत्यु से ही पूरी होती है।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희 또한… 그 굴레에서 자유롭지 못하리니….",
						"english": "You too... will not be free from that cycle...",
						"japanese": "お前たちもまた… その輪廻から自由ではいられないだろう…。",
						"chinese": "你们也…… 无法摆脱那个束缚……",
						"french": "Vous non plus... ne serez pas libres de ce carcan...",
						"spanish": "Vosotros tampoco... seréis libres de esa atadura...",
						"vietnamese": "Các ngươi cũng vậy... sẽ không thoát khỏi vòng luẩn quẩn đó đâu...",
						"thai": "พวกเจ้าก็เช่นกัน... จะไม่มีวันเป็นอิสระจากห่วงโซ่นั้น...",
						"hindi": "तुम भी… उस बंधन से मुक्त नहीं हो पाओगे…।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그의 몸은 잿더미로 변해 사라졌다. 찢어진 양피지에서 핏방울이 허공으로 흩어졌다.",
						"english": "His body turned to ash and vanished. Drops of blood scattered into the air from the torn parchment.",
						"japanese": "彼の体は灰と化して消え去った。破れた羊皮紙から血の滴が虚空へと散った。",
						"chinese": "他的身体化为灰烬消散了。破碎的羊皮纸上，血滴散落在空中。",
						"french": "Son corps se réduisit en cendres et disparut. Des gouttes de sang s'éparpillèrent dans l'air depuis le parchemin déchiré.",
						"spanish": "Su cuerpo se convirtió en cenizas y desapareció. Gotas de sangre se dispersaron en el aire desde el pergamino rasgado.",
						"vietnamese": "Thân thể hắn biến thành tro bụi và biến mất. Những giọt máu từ mảnh giấy da rách rưới vương vãi vào không trung.",
						"thai": "ร่างของเขากลายเป็นเถ้าถ่านและหายไป หยดเลือดกระจายไปในอากาศจากแผ่นหนังที่ฉีกขาด",
						"hindi": "उसका शरीर राख में बदल गया और गायब हो गया। फटे हुए चर्मपत्र से खून की बूँदें हवा में बिखर गईं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 무슨…?",
						"english": "What... is this...?",
						"japanese": "これが…いったい…？",
						"chinese": "这…… 是什么……？",
						"french": "Qu'est-ce que... c'est...?",
						"spanish": "¿Qué… es esto…?",
						"vietnamese": "Đây... là cái gì...?",
						"thai": "นี่มัน... อะไรกัน...?",
						"hindi": "यह… क्या है…?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 자리에 새겨진 것은 끝나지 않는 업보의 굴레였다. 닥스의 폭로로 진실은 세상에 알려졌다. 그러나 해답은 보이지 않았다.",
						"english": "An endless karmic cycle was etched there. Dax's revelation unveiled the truth, yet no solution emerged.",
						"japanese": "そこに刻まれたのは、終わりのない業の輪廻。ダックスの暴露により真実は明かされたが、解は見えなかった。",
						"chinese": "刻印于此的，是无尽的业力轮回。达克斯的揭露令真相大白，然而解法依旧渺茫。",
						"french": "Gravé là était un cycle karmique sans fin. La révélation de Dax a mis la vérité au jour, sans qu'aucune solution n'émerge.",
						"spanish": "Grabado allí estaba un ciclo kármico sin fin. La revelación de Dax expuso la verdad, mas ninguna solución se avistaba.",
						"vietnamese": "Khắc sâu nơi đó là vòng nghiệp chướng vô tận. Sự thật được Dax phơi bày, nhưng lời giải thì mịt mờ.",
						"thai": "สิ่งที่สลักไว้คือวงจรแห่งกรรมไม่สิ้นสุด การเปิดเผยของแด็กซ์เผยความจริง แต่ไร้ซึ่งทางออก.",
						"hindi": "वहाँ अंकित था कर्म का अंतहीन चक्र। डैक्स के खुलासे से सच सामने आया, पर कोई हल न मिला।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"네메시스의 죽음은 끝이 아닌 시작이었다.",
			"닥스의 폭로로 도시는 거대한 혼란에 빠졌다.",
			"과거의 서약은 현재를, 그리고 미래를 집어삼키려 한다.",
			"이것이 구원이었을까, 혹은 끝나지 않는 침해의 서막이었을까."
		],
		"english": [
			"Nemesis's death was not an end, but a beginning.",
			"With Dax's revelations, the city plunged into immense chaos.",
			"The pact of the past seeks to engulf the present and the future.",
			"Was this salvation, or the prelude to an unending infringement?"
		],
		"japanese": [
			"ネメシスの死は終わりではなく、始まりだった。",
			"ダックスの暴露により、都市は巨大な混乱に陥った。",
			"過去の誓約は現在を、そして未来を飲み込もうとしている。",
			"これが救済だったのか、あるいは終わりのない侵害の序幕だったのか。"
		],
		"chinese": [
			"涅墨西斯的死亡不是结束，而是一个开始。",
			"随着达克斯的揭露，城市陷入了巨大的混乱。",
			"过去的誓约试图吞噬现在和未来。",
			"这是救赎吗，还是无休止侵犯的序幕？"
		],
		"french": [
			"La mort de Némésis n'était pas une fin, mais un début.",
			"Avec les révélations de Dax, la ville fut plongée dans un chaos immense.",
			"Le serment du passé cherche à engloutir le présent et l'avenir.",
			"Était-ce le salut, ou le prélude à une atteinte sans fin ?"
		],
		"spanish": [
			"La muerte de Némesis no fue un final, sino un comienzo.",
			"Con las revelaciones de Dax, la ciudad se sumió en un caos inmenso.",
			"El pacto del pasado busca engullir el presente y el futuro.",
			"¿Fue esto la salvación, o el preludio de una infracción interminable?"
		],
		"vietnamese": [
			"Cái chết của Nemesis không phải là kết thúc, mà là một khởi đầu.",
			"Với những tiết lộ của Dax, thành phố chìm trong hỗn loạn lớn.",
			"Lời thề của quá khứ đang cố gắng nuốt chửng hiện tại và tương lai.",
			"Đây có phải là sự cứu rỗi, hay là khúc dạo đầu cho một sự vi phạm không ngừng?"
		],
		"thai": [
			"การตายของเนเมซิสไม่ใช่จุดจบ แต่เป็นการเริ่มต้น",
			"ด้วยการเปิดเผยของแด็กซ์ เมืองก็ตกอยู่ในความโกลาหลครั้งใหญ่",
			"พันธสัญญาในอดีตพยายามจะกลืนกินทั้งปัจจุบันและอนาคต",
			"นี่คือความรอด หรือเป็นการเริ่มต้นของการละเมิดที่ไม่สิ้นสุด?"
		],
		"hindi": [
			"नेमेसिस की मौत अंत नहीं, बल्कि एक शुरुआत थी।",
			"डैक्स के खुलासों के साथ, शहर भारी अराजकता में डूब गया।",
			"अतीत का समझौता वर्तमान और भविष्य को निगलने की कोशिश कर रहा है।",
			"क्या यह मोक्ष था, या एक अंतहीन उल्लंघन का प्रस्तावना?"
		]
	}
} as const;
