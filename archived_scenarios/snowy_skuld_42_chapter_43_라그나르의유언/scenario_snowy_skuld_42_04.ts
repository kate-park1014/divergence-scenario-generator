export const scenario_snowy_skuld_42_04 = {
	"scenario_id": "snowy_skuld_42_04",
	"order": 4,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"빙하 가장 깊은 곳, 척후선의 심장부.",
			"얼어붙은 족장의 자리 곁에 거대한 룬 비석이 서 있었다.",
			"그 비석에 새겨진 맹세는 수천 년을 견딘 저주였다.",
			"그리고 마침내, 마지막 구절이 드러났다."
		],
		"english": [
			"Deepest within the glacier, the heart of the scout ship.",
			"Beside the frozen chieftain's seat, a massive runic monument stood.",
			"The oath carved on that monument was a curse that endured millennia.",
			"And at last, the final verse was revealed."
		],
		"japanese": [
			"氷河の最深部、偵察船の心臓部。",
			"凍てついた族長の座の傍らに、巨大なルーン碑が立っていた。",
			"その碑に刻まれた誓いは、数千年にわたり耐え忍んだ呪いだった。",
			"そしてついに、最後の節が明らかになった。"
		],
		"chinese": [
			"冰川最深处，侦察船的心脏。",
			"冰冻的酋长宝座旁，矗立着一块巨大的符文碑。",
			"雕刻在那块碑上的誓言，是历经千年不衰的诅咒。",
			"最终，最后一节被揭示了。"
		],
		"french": [
			"Au plus profond du glacier, le cœur du vaisseau éclaireur.",
			"À côté du siège gelé du chef, un immense monument runique se dressait.",
			"Le serment gravé sur ce monument était une malédiction qui avait perduré des millénaires.",
			"Et enfin, le dernier verset fut révélé."
		],
		"spanish": [
			"En lo más profundo del glaciar, el corazón de la nave exploradora.",
			"Junto al asiento congelado del cacique, se erguía un enorme monumento rúnico.",
			"El juramento grabado en ese monumento era una maldición que había perdurado milenios.",
			"Y finalmente, el último versículo fue revelado."
		],
		"vietnamese": [
			"Sâu thẳm nhất trong sông băng, trái tim của con tàu trinh sát.",
			"Bên cạnh ngai vàng đóng băng của tộc trưởng, một bia đá rune khổng lồ đứng sừng sững.",
			"Lời thề khắc trên bia đá đó là một lời nguyền đã tồn tại hàng thiên niên kỷ.",
			"Và cuối cùng, câu thơ cuối cùng đã được tiết lộ."
		],
		"thai": [
			"ลึกสุดในธารน้ำแข็ง ใจกลางเรือลาดตระเวน.",
			"ข้างบัลลังก์หัวหน้าเผ่าที่เยือกแข็ง มีหินจารึกรูนขนาดใหญ่ตั้งอยู่.",
			"คำสาบานที่แกะสลักบนอนุสาวรีย์นั้นเป็นคำสาปที่คงอยู่มาหลายพันปี.",
			"และในที่สุด บทสุดท้ายก็ถูกเปิดเผย."
		],
		"hindi": [
			"ग्लेशियर के सबसे गहरे में, स्काउट जहाज का हृदय।",
			"जमे हुए सरदार की सीट के पास, एक विशाल रुनिक स्मारक खड़ा था।",
			"उस स्मारक पर खुदी हुई शपथ एक श्राप थी जो सहस्राब्दियों तक चली।",
			"और अंततः, अंतिम पद प्रकट हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "척후선의 심장부. 거대한 룬 비석이 그들을 기다렸다.",
						"english": "The heart of the scout ship. A massive runic monument awaited them.",
						"japanese": "偵察船の心臓部。巨大なルーン碑が彼らを待っていた。",
						"chinese": "侦察船的心脏。一块巨大的符文碑正等着他们。",
						"french": "Le cœur du vaisseau éclaireur. Un immense monument runique les attendait.",
						"spanish": "El corazón de la nave exploradora. Un enorme monumento rúnico les esperaba.",
						"vietnamese": "Trái tim của con tàu trinh sát. Một bia đá rune khổng lồ đang chờ đợi họ.",
						"thai": "ใจกลางเรือลาดตระเวน หินจารึกรูนขนาดใหญ่รอคอยพวกเขาอยู่.",
						"hindi": "स्काउट जहाज का हृदय। एक विशाल रुनिक स्मारक उनकी प्रतीक्षा कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "…이 비석에서, 수천 년 묵은 맹세가 느껴져.",
						"english": "...From this monument, I feel an oath millennia old.",
						"japanese": "…この碑から、数千年もの古い誓いを感じる。",
						"chinese": "……从这块碑上，我感受到一个千年古老的誓言。",
						"french": "...De ce monument, je ressens un serment millénaire.",
						"spanish": "...De este monumento, siento un juramento milenario.",
						"vietnamese": "...Từ bia đá này, ta cảm nhận được một lời thề đã nghìn năm tuổi.",
						"thai": "...จากอนุสาวรีย์นี้ ข้ารู้สึกถึงคำสาบานที่มีอายุหลายพันปี.",
						"hindi": "...इस स्मारक से, मुझे एक सहस्राब्दी पुरानी शपथ महसूस होती है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "마지막 구절인가.",
						"english": "Is this the final verse?",
						"japanese": "最後の節か。",
						"chinese": "是最后一节吗？",
						"french": "Est-ce le dernier verset ?",
						"spanish": "¿Es este el último versículo?",
						"vietnamese": "Đây là câu cuối cùng sao?",
						"thai": "นี่คือบทสุดท้ายหรือ?",
						"hindi": "क्या यह अंतिम पद है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그래. 비어 있는 족장의 자리가 더 차갑게 느껴지는군.",
						"english": "Yes. The empty chieftain's seat feels even colder.",
						"japanese": "ああ。空っぽの族長の座が、より一層冷たく感じるな。",
						"chinese": "是的。空置的酋长宝座感觉更冷了。",
						"french": "Oui. Le siège vide du chef semble encore plus froid.",
						"spanish": "Sí. El asiento vacío del cacique se siente aún más frío.",
						"vietnamese": "Phải. Chiếc ghế trống của tộc trưởng càng cảm thấy lạnh lẽo hơn.",
						"thai": "ใช่ บัลลังก์หัวหน้าเผ่าที่ว่างเปล่ารู้สึกเย็นยะเยือกกว่าเดิม.",
						"hindi": "हाँ। खाली सरदार की सीट और भी ठंडी लगती है।"
					},
					"type": "speech",
					"speaker": "hild"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이 구절은… 망자의 마지막 약속이야.",
						"english": "This verse is... the dead's final promise.",
						"japanese": "この節は…死者の最後の約束だ。",
						"chinese": "这一节是……死者的最后承诺。",
						"french": "Ce verset est... la dernière promesse des morts.",
						"spanish": "Este versículo es... la última promesa de los muertos.",
						"vietnamese": "Câu thơ này là... lời hứa cuối cùng của người đã khuất.",
						"thai": "บทนี้คือ... คำมั่นสัญญาครั้งสุดท้ายของผู้ตาย.",
						"hindi": "यह पद... मृतकों का अंतिम वादा है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭐라고 쓰여있는데?",
						"english": "What does it say?",
						"japanese": "何て書いてある？",
						"chinese": "上面写了什么？",
						"french": "Que dit-il ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó viết gì vậy?",
						"thai": "มันเขียนว่าอะไร?",
						"hindi": "उस पर क्या लिखा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "\"나의 검은 반드시 아스가르드로 돌아가리라…\"",
						"english": "My sword shall surely return to Asgard...",
						"japanese": "我が剣、必ずやアスガルドへ帰還せん…",
						"chinese": "我的剑，必将重返阿斯加德…",
						"french": "Mon épée retournera sûrement à Asgard...",
						"spanish": "Mi espada sin duda regresará a Asgard...",
						"vietnamese": "Kiếm của ta nhất định sẽ trở về Asgard...",
						"thai": "ดาบของข้าจักต้องกลับคืนสู่แอสการ์ด...",
						"hindi": "मेरी तलवार निश्चित रूप से असगार्ड लौटेगी..."
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아스가르드로 돌아가겠다니.",
						"english": "Return to Asgard, you say.",
						"japanese": "アスガルドへ戻るとは。",
						"chinese": "你说要回阿斯加德？",
						"french": "Retourner à Asgard, dites-vous.",
						"spanish": "¿Regresar a Asgard, dices?",
						"vietnamese": "Trở về Asgard ư.",
						"thai": "กลับแอสการ์ดรึ.",
						"hindi": "असगार्ड लौटना है तुम्हें।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이 약속은 지켜지지 못했어.",
						"english": "This promise was not kept.",
						"japanese": "この約束は果たされなかった。",
						"chinese": "这个承诺未能实现。",
						"french": "Cette promesse n'a pas été tenue.",
						"spanish": "Esta promesa no se cumplió.",
						"vietnamese": "Lời hứa này đã không được giữ.",
						"thai": "คำสัญญานี้ไม่ได้ถูกรักษาไว้",
						"hindi": "यह वादा पूरा नहीं हुआ।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어째서?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그의 검은… 아직 여기 얼어붙어 있으니까.",
						"english": "Because his sword... is still frozen here.",
						"japanese": "彼の剣は…まだここに凍りついているからだ。",
						"chinese": "因为他的剑…仍旧冰封于此。",
						"french": "Parce que son épée... est encore gelée ici.",
						"spanish": "Porque su espada... aún está congelada aquí.",
						"vietnamese": "Vì thanh kiếm của anh ấy... vẫn còn đóng băng ở đây.",
						"thai": "เพราะดาบของเขา... ยังคงถูกแช่แข็งอยู่ที่นี่",
						"hindi": "क्योंकि उसकी तलवार... अभी भी यहीं जमी हुई है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "수천 년 동안?",
						"english": "For thousands of years?",
						"japanese": "数千年もの間？",
						"chinese": "数千年了？",
						"french": "Pendant des milliers d'années ?",
						"spanish": "¿Durante miles de años?",
						"vietnamese": "Hàng ngàn năm rồi ư?",
						"thai": "เป็นพันปีเชียวหรือ?",
						"hindi": "हजारों सालों से?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "영광이자 저주… 망자의 약속은 너무 무거워.",
						"english": "A glory and a curse... The promise of the dead is too heavy.",
						"japanese": "栄光であり、呪い… 死者の約束はあまりにも重い。",
						"chinese": "荣耀亦是诅咒… 亡者的誓言太过沉重。",
						"french": "Gloire et malédiction... La promesse des morts est trop lourde.",
						"spanish": "Una gloria y una maldición... La promesa de los muertos es demasiado pesada.",
						"vietnamese": "Vinh quang và lời nguyền... Lời hứa của người chết quá nặng nề.",
						"thai": "ทั้งเกียรติยศและคำสาป... คำสัญญาของผู้วายชนม์นั้นหนักอึ้งเกินไป",
						"hindi": "एक गौरव और एक अभिशाप... मृत का वादा बहुत भारी है।"
					},
					"type": "speech",
					"speaker": "hild"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이 모든 비극… 결국 그 맹세 때문인가.",
						"english": "All this tragedy... Is it all because of that vow?",
						"japanese": "このすべての悲劇… 結局、あの誓いのせいなのか。",
						"chinese": "所有的悲剧… 终究是因为那个誓言吗？",
						"french": "Toute cette tragédie... Est-ce à cause de ce serment, après tout ?",
						"spanish": "Toda esta tragedia... ¿Es por esa promesa, al final?",
						"vietnamese": "Tất cả bi kịch này... rốt cuộc là vì lời thề đó ư.",
						"thai": "โศกนาฏกรรมทั้งหมดนี้... สุดท้ายแล้วเป็นเพราะคำสาบานนั้นหรือเปล่า",
						"hindi": "यह सारी त्रासदी... क्या अंततः उस शपथ के कारण है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder and colder.",
						"japanese": "だんだん寒くなっているようだ。",
						"chinese": "感觉越来越冷了。",
						"french": "On dirait qu'il fait de plus en plus froid.",
						"spanish": "Parece que cada vez hace más frío.",
						"vietnamese": "Cảm giác như càng ngày càng lạnh.",
						"thai": "รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है कि ठंड बढ़ती जा रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "빙하의 한기가 무겁고 깊은 신음으로 변해갔다.",
						"english": "The chill of the glacier transformed into a heavy, deep groan.",
						"japanese": "氷河の寒気は重く深い呻きへと変わっていった。",
						"chinese": "冰川的寒气化作沉重而深沉的呻吟。",
						"french": "Le froid glacial du glacier se transforma en un gémissement lourd et profond.",
						"spanish": "El frío glacial se transformó en un gemido pesado y profundo.",
						"vietnamese": "Hơi lạnh của sông băng hóa thành tiếng rên rỉ nặng nề và sâu thẳm.",
						"thai": "ความหนาวเย็นของธารน้ำแข็งแปรเปลี่ยนเป็นเสียงครวญครางอันหนักหน่วงและลึกซึ้ง",
						"hindi": "ग्लेशियर की ठंडक एक भारी, गहरी कराह में बदल गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "망자의 약속이 이토록 강한 한을 품다니…",
						"english": "To think the promise of the dead holds such strong resentment…",
						"japanese": "亡者の約束がこれほど強い恨みを抱くとは…",
						"chinese": "亡者的誓约竟蕴含如此强大的怨恨…",
						"french": "Que la promesse des morts contienne un ressentiment si puissant…",
						"spanish": "Que la promesa de los muertos guarde un rencor tan fuerte…",
						"vietnamese": "Lời hứa của người chết lại chứa đựng sự oán hận mạnh mẽ đến thế…",
						"thai": "คำสัญญาของผู้ตายกลับมีความแค้นรุนแรงเพียงนี้…",
						"hindi": "मृतकों का वादा इतनी प्रबल घृणा कैसे समेटे हुए है…"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "…우리가 풀어야 하는 건가.",
						"english": "…Are we to resolve this?",
						"japanese": "…我々が解き放つべきなのか。",
						"chinese": "…这需要我们来解除吗？",
						"french": "…Est-ce à nous de la dénouer ?",
						"spanish": "…¿Somos nosotros quienes debemos resolverlo?",
						"vietnamese": "…Liệu chúng ta có nên giải quyết chuyện này?",
						"thai": "…เราต้องเป็นผู้คลี่คลายหรือ?",
						"hindi": "…क्या हमें ही इसे सुलझाना होगा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 맹세는… 끝나지 않아…",
						"english": "Ugh… The vow… it doesn't end…",
						"japanese": "くっ…誓いは…終わらない…",
						"chinese": "呃啊…誓言…永无止境…",
						"french": "Ugh… Le serment… ne se termine pas…",
						"spanish": "Ugh… El juramento… no termina…",
						"vietnamese": "Khụ… Lời thề… không bao giờ kết thúc…",
						"thai": "อึก… คำสาบาน… ไม่จบสิ้น…",
						"hindi": "उफ़… प्रतिज्ञा… समाप्त नहीं होती…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제… 이 검을 어떻게 해야 하지?",
						"english": "Now… what should I do with this sword?",
						"japanese": "さて…この剣をどうすべきか？",
						"chinese": "现在…我该如何处置这把剑？",
						"french": "Maintenant… que devrais-je faire de cette épée ?",
						"spanish": "Ahora… ¿qué debo hacer con esta espada?",
						"vietnamese": "Giờ thì… ta phải làm gì với thanh kiếm này đây?",
						"thai": "ตอนนี้… ข้าควรทำอย่างไรกับดาบเล่มนี้ดี?",
						"hindi": "अब… मुझे इस तलवार का क्या करना चाहिए?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "망자의 약속을… 우리가 이어야 할지도 몰라.",
						"english": "We might have to… continue the promise of the dead.",
						"japanese": "亡者の約束を…我々が継がねばならないのかもしれない。",
						"chinese": "我们或许要…继承亡者的誓约。",
						"french": "Nous devrons peut-être… poursuivre la promesse des morts.",
						"spanish": "Quizás debamos… continuar la promesa de los muertos.",
						"vietnamese": "Chúng ta có lẽ phải… tiếp nối lời hứa của người chết.",
						"thai": "เราอาจจะต้อง…สานต่อคำสัญญาของผู้ตาย",
						"hindi": "शायद हमें… मृतकों की प्रतिज्ञा को निभाना होगा।"
					}
				},
				{
					"content": {
						"korean": "그들의 여정은 맹세의 땅, 아스가르드를 향한다.",
						"english": "Their journey is towards the land of vows, Asgard.",
						"japanese": "彼らの旅は誓いの地、アス가르ドへと向かう。",
						"chinese": "他们的旅程…正驶向誓约之地，阿斯加德。",
						"french": "Leur voyage est vers la terre des serments, Asgard.",
						"spanish": "Su viaje es hacia la tierra de los juramentos, Asgard.",
						"vietnamese": "Hành trình của họ là hướng đến vùng đất của lời thề, Asgard.",
						"thai": "การเดินทางของพวกเขา… มุ่งหน้าสู่ดินแดนแห่งคำมั่นสัญญา, แอสการ์ด",
						"hindi": "उनकी यात्रा प्रतिज्ञा की भूमि, एस्गार्ड की ओर है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "누군가 이 맹세를 지키고 있어.",
						"english": "Someone is upholding this vow.",
						"japanese": "誰かがこの誓いを守っている。",
						"chinese": "有人正在守护这个誓言。",
						"french": "Quelqu'un maintient ce serment.",
						"spanish": "Alguien está manteniendo este juramento.",
						"vietnamese": "Ai đó đang giữ lời thề này.",
						"thai": "มีใครบางคนกำลังรักษาสัตย์สาบานนี้อยู่",
						"hindi": "कोई इस प्रतिज्ञा को निभा रहा है।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						7
					],
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그 맹세는… 영원히 지켜져야 한다.",
						"english": "That vow… must be kept forever.",
						"japanese": "その誓いは…永遠に守られるべきだ。",
						"chinese": "那个誓言…必须永远被守护。",
						"french": "Ce serment… doit être maintenu pour toujours.",
						"spanish": "Ese juramento… debe ser mantenido para siempre.",
						"vietnamese": "Lời thề đó… phải được giữ mãi mãi.",
						"thai": "คำสาบานนั้น… ต้องถูกรักษาไว้ชั่วนิรันดร์",
						"hindi": "वह प्रतिज्ञा… सदा के लिए निभाई जानी चाहिए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이 배를 지키는 자인가.",
						"english": "Are you the guardian of this ship?",
						"japanese": "お前がこの船を守る者か。",
						"chinese": "你是这艘船的守护者吗？",
						"french": "Es-tu le gardien de ce navire ?",
						"spanish": "¿Eres tú el guardián de esta nave?",
						"vietnamese": "Ngươi là kẻ canh giữ con thuyền này ư?",
						"thai": "เจ้าคือผู้พิทักษ์เรือลำนี้หรือ?",
						"hindi": "क्या तुम इस जहाज़ के रक्षक हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "방해하는 자, 누구든 얼려버릴 것이다.",
						"english": "Anyone who interferes will be frozen.",
						"japanese": "邪魔する者は、誰であろうと凍りつかせてやる。",
						"chinese": "任何阻挠者，都将被冻结。",
						"french": "Quiconque interférera sera gelé.",
						"spanish": "Cualquiera que interfiera, será congelado.",
						"vietnamese": "Kẻ nào cản trở, ta sẽ đóng băng chúng.",
						"thai": "ผู้ใดขัดขวาง จะถูกแช่แข็ง!",
						"hindi": "जो भी बाधा डालेगा, उसे जमा दिया जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "hild",
					"action": "exit",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "미련한 자들… 영원히 얼어붙어라!",
						"english": "Foolish ones... Freeze forever!",
						"japanese": "愚かな者たちよ… 永遠に凍りつけ！",
						"chinese": "愚蠢的家伙们……永远地冻结吧！",
						"french": "Fous... Gèlez pour l'éternité !",
						"spanish": "¡Necios... Congelaos para siempre!",
						"vietnamese": "Lũ ngu ngốc... Hãy đóng băng vĩnh viễn đi!",
						"thai": "พวกโง่เง่า... จงแข็งตายไปชั่วนิรันดร์!",
						"hindi": "मूर्खों... हमेशा के लिए जम जाओ!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 끝낼 수 없어…!",
						"english": "I can't end it here...!",
						"japanese": "ここで終わらせるわけにはいかない…！",
						"chinese": "不能就这么结束……！",
						"french": "Je ne peux pas finir ici... !",
						"spanish": "¡No puedo terminar aquí...!",
						"vietnamese": "Không thể kết thúc ở đây được...!",
						"thai": "จะมาจบที่นี่ไม่ได้...!",
						"hindi": "मैं इसे यहाँ खत्म नहीं कर सकता...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "맹세는… 아직 깨지지 않았다.",
						"english": "The oath... is not broken yet.",
						"japanese": "誓いは…まだ破られていない。",
						"chinese": "誓言……尚未打破。",
						"french": "Le serment... n'est pas encore brisé.",
						"spanish": "La promesa... aún no está rota.",
						"vietnamese": "Lời thề... vẫn chưa bị phá vỡ.",
						"thai": "คำสาบาน... ยังไม่ถูกทำลาย",
						"hindi": "शपथ... अभी टूटी नहीं है।"
					},
					"emotion": "sad"
				}
			]
		}
	]
} as const;
