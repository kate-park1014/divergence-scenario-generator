export const scenario_modern_elias_72_02 = {
	"scenario_id": "modern_elias_72_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"엘리아스, 잊힌 골목을 맴돌았다는 단서.",
			"그 과거의 흔적을 쫓아 도착한 재개발 지역.",
			"낡고 부서진 건물들 속에서, 진실은 빛바랜 사진 한 장으로 모습을 드러냈다.",
			"하지만 그 사진은, 시작일 뿐이었다."
		],
		"english": [
			"Elias, a clue about him lingering in forgotten alleys.",
			"Following the traces of that past, we arrived at the redevelopment area.",
			"Among the old, crumbling buildings, the truth revealed itself as a faded photograph.",
			"But that photograph was just the beginning."
		],
		"japanese": [
			"エリアス、忘れられた路地をうろついていたという手がかり。",
			"その過去の痕跡を追い、たどり着いた再開発地域。",
			"古びた壊れた建物の中で、真実は色褪せた一枚の写真として姿を現した。",
			"しかし、その写真は始まりに過ぎなかった。"
		],
		"chinese": [
			"埃利亚斯，徘徊于被遗忘小巷的线索。",
			"追寻着过去的痕迹，我们抵达了旧城区。",
			"在破旧的建筑群中，真相以一张褪色的照片显现。",
			"然而，那张照片，仅仅只是个开始。"
		],
		"french": [
			"Elias, un indice sur son errance dans les ruelles oubliées.",
			"En suivant les traces de ce passé, nous arrivâmes dans la zone de réaménagement.",
			"Au milieu des bâtiments vieux et brisés, la vérité se révéla sous la forme d'une photo fanée.",
			"Mais cette photo n'était que le début."
		],
		"spanish": [
			"Elias, una pista sobre su deambular por callejones olvidados.",
			"Siguiendo las huellas de ese pasado, llegamos a la zona de reurbanización.",
			"Entre los edificios viejos y derrumbados, la verdad se reveló en una foto descolorida.",
			"Pero esa foto, solo era el principio."
		],
		"vietnamese": [
			"Elias, manh mối về việc anh ta lảng vảng trong những con hẻm bị lãng quên.",
			"Theo dấu vết quá khứ đó, chúng tôi đến khu vực tái phát triển.",
			"Giữa những tòa nhà cũ nát, sự thật hiện ra qua một bức ảnh phai màu.",
			"Nhưng bức ảnh đó, chỉ là khởi đầu."
		],
		"thai": [
			"เอเลียส เบาะแสว่าเขาเตร็ดเตร่อยู่ในตรอกที่ถูกลืม",
			"ตามรอยอดีตนั้นมาถึงพื้นที่พัฒนาใหม่",
			"ท่ามกลางอาคารเก่าทรุดโทรม ความจริงปรากฏในรูปถ่ายสีซีดจาง",
			"แต่ภาพถ่ายนั้นเป็นเพียงจุดเริ่มต้นเท่านั้น"
		],
		"hindi": [
			"एलियास, भूली हुई गलियों में भटकने का सुराग।",
			"उस अतीत के निशान का पीछा करते हुए, हम पुनर्विकास क्षेत्र में पहुँचे।",
			"पुरानी और टूटी हुई इमारतों के बीच, सच्चाई एक धुंधली तस्वीर के रूप में सामने आई।",
			"लेकिन वह तस्वीर, सिर्फ शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 재개발 현장. 부서진 잔해들이 과거를 삼켰다.",
						"english": "An abandoned redevelopment site. Broken debris swallowed the past.",
						"japanese": "打ち捨てられた再開発現場。壊れた残骸が過去を飲み込んだ。",
						"chinese": "废弃的旧城区改造现场。破碎的残骸吞噬了过去。",
						"french": "Un site de réaménagement abandonné. Les débris brisés ont englouti le passé.",
						"spanish": "Un sitio de reurbanización abandonado. Los escombros rotos engulleron el pasado.",
						"vietnamese": "Hiện trường tái phát triển bị bỏ hoang. Những mảnh vỡ tan nát đã nuốt chửng quá khứ.",
						"thai": "พื้นที่พัฒนาใหม่ที่ถูกทอดทิ้ง ซากปรักหักพังกลืนกินอดีต",
						"hindi": "एक परित्यक्त पुनर्विकास स्थल। टूटे हुए मलबे ने अतीत को निगल लिया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 엘리아스가 맴돌았다는 그곳이야?",
						"english": "Is this the place Elias was said to have lingered?",
						"japanese": "ここが、エリアスがうろついていたという場所か？",
						"chinese": "这里就是埃利亚斯徘徊过的地方吗？",
						"french": "C'est l'endroit où Elias aurait erré ?",
						"spanish": "¿Es este el lugar donde se dice que Elias merodeaba?",
						"vietnamese": "Đây có phải là nơi Elias đã từng lảng vảng không?",
						"thai": "ที่นี่ใช่ที่ที่เอเลียสเคยวนเวียนอยู่หรือเปล่า?",
						"hindi": "क्या यह वही जगह है जहाँ एलियास भटकता रहता था?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "응. 허름한 골목이 많았던 곳이지. 지금은 다 사라졌지만.",
						"english": "Yeah. It was a place with many shabby alleys. They're all gone now, though.",
						"japanese": "ああ。薄汚い路地が多かった場所だよ。今はもう全部なくなったけど。",
						"chinese": "嗯。这里曾经有很多破旧的小巷。现在都消失了。",
						"french": "Oui. C'était un endroit avec beaucoup de ruelles minables. Elles ont toutes disparu maintenant, cependant.",
						"spanish": "Sí. Era un lugar con muchos callejones ruinosos. Aunque ahora ya no quedan.",
						"vietnamese": "Ừ. Đây từng là nơi có nhiều con hẻm tồi tàn. Bây giờ thì tất cả đã biến mất rồi.",
						"thai": "ใช่ ที่นี่เคยมีตรอกซอกซอยโทรมๆ เยอะแยะ แต่ตอนนี้หายไปหมดแล้ว",
						"hindi": "हाँ। यह बहुत सारी जीर्ण-शीर्ण गलियों वाली जगह थी। हालांकि अब वे सब गायब हो गई हैं।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "뭘 찾으려고 했는지… 흔적이라도 찾아봐야 해.",
						"english": "What he was trying to find... I need to at least find a trace.",
						"japanese": "何を捜そうとしていたのか…痕跡だけでも見つけないと。",
						"chinese": "他到底想找什么……至少得找到些线索。",
						"french": "Ce qu'il cherchait… Je dois au moins trouver une trace.",
						"spanish": "Qué intentaba encontrar... Debo encontrar al menos un rastro.",
						"vietnamese": "Anh ta đã cố gắng tìm gì... Tôi phải tìm ít nhất một dấu vết.",
						"thai": "เขาพยายามจะหาอะไร... ต้องหาเบาะแสให้เจอแม้แต่นิดหน่อยก็ยังดี",
						"hindi": "वह क्या ढूँढने की कोशिश कर रहा था... मुझे कम से कम एक निशान तो ढूँढना ही होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "무너진 벽 틈새에서, 낡은 사진 한 장이 발견되었다.",
						"english": "From a crack in the crumbling wall, a faded photograph was discovered.",
						"japanese": "崩れた壁の隙間から、古びた写真が一枚見つかった。",
						"chinese": "在坍塌的墙壁缝隙中，发现了一张旧照片。",
						"french": "Dans la fente du mur effondré, une vieille photo a été découverte.",
						"spanish": "De una grieta en la pared derrumbada, se descubrió una foto antigua.",
						"vietnamese": "Từ khe hở của bức tường đổ nát, một bức ảnh cũ đã được tìm thấy.",
						"thai": "จากรอยแตกของกำแพงที่พังทลาย พบรูปถ่ายเก่าแก่หนึ่งใบ",
						"hindi": "गिरी हुई दीवार की दरार से, एक पुरानी तस्वीर मिली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건… 꽤 오래된 사진인데.",
						"english": "This is... a quite old photograph.",
						"japanese": "これは…ずいぶん古い写真だ。",
						"chinese": "这……是张很旧的照片啊。",
						"french": "C'est… une photo assez ancienne.",
						"spanish": "Esto es... una foto bastante antigua.",
						"vietnamese": "Đây là... một bức ảnh khá cũ.",
						"thai": "นี่มัน... รูปถ่ายที่เก่าแก่มากเลยนี่นา",
						"hindi": "यह... काफी पुरानी तस्वीर है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "봐. 여기 한 명이 얼굴이 흐릿하게 지워져 있어.",
						"english": "Look. One face here is blurred out.",
						"japanese": "見て。ここに一人、顔がぼやけて消されている。",
						"chinese": "看。这里有一个人的脸被模糊掉了。",
						"french": "Regarde. Le visage d'une personne est flouté ici.",
						"spanish": "Mira. El rostro de una persona está difuminado aquí.",
						"vietnamese": "Nhìn kìa. Một người ở đây có khuôn mặt bị làm mờ đi.",
						"thai": "ดูสิ. ใบหน้าของคนหนึ่งถูกทำให้เบลอที่นี่",
						"hindi": "देखो। यहाँ एक का चेहरा धुंधला हो गया है。"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "누군가 고의로 지운 것 같지 않아?",
						"english": "Doesn't it look like someone intentionally erased it?",
						"japanese": "誰かが故意に消したように見えない？",
						"chinese": "不觉得像是有人故意抹去的吗？",
						"french": "On dirait que quelqu'un l'a effacé exprès, non ?",
						"spanish": "¿No crees que alguien lo borró a propósito?",
						"vietnamese": "Không phải trông như có người cố ý xóa đi sao?",
						"thai": "ไม่เหมือนกับว่ามีคนจงใจลบมันเหรอ?",
						"hindi": "क्या यह जानबूझकर मिटाया हुआ नहीं लगता?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자세히 보니까… 이 지워진 부분의 윤곽이 엘리아스랑 비슷해.",
						"english": "Looking closely... the outline of this erased part resembles Elias.",
						"japanese": "よく見ると…この消された部分の輪郭がエリアスに似ている。",
						"chinese": "仔细一看……这个被抹去部分的轮廓和埃利亚斯很像。",
						"french": "En y regardant de près... le contour de cette partie effacée ressemble à celui d'Elias.",
						"spanish": "Mirando de cerca... el contorno de esta parte borrada es similar al de Elías.",
						"vietnamese": "Nhìn kỹ hơn thì... đường nét của phần bị xóa này giống Elias.",
						"thai": "พอมองใกล้ๆ… ร่างของส่วนที่ถูกลบไปนั้นคล้ายกับเอเลียส",
						"hindi": "करीब से देखने पर... इस मिटे हुए हिस्से का बाहरी आकार एलियास जैसा है।"
					},
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엘리아스…?",
						"english": "Elias...?",
						"japanese": "エリアス…？",
						"chinese": "埃利亚斯……？",
						"french": "Elias... ?",
						"spanish": "¿Elías...?",
						"vietnamese": "Elias...?",
						"thai": "เอเลียส…?",
						"hindi": "एलियास...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "섬뜩할 정도로 닮았어. 우연일까?",
						"english": "It's eerily similar. Is it a coincidence?",
						"japanese": "ぞっとするほど似ている。偶然かな？",
						"chinese": "像得可怕。是巧合吗？",
						"french": "C'est d'une ressemblance effrayante. Est-ce une coïncidence ?",
						"spanish": "Se parece escalofriantemente. ¿Será casualidad?",
						"vietnamese": "Giống đến rợn người. Có phải trùng hợp không?",
						"thai": "คล้ายจนน่าขนลุก. เป็นเรื่องบังเอิญหรือเปล่า?",
						"hindi": "यह भयानक रूप से मिलता-जुलता है। क्या यह एक इत्तेफाक है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "엘리아스가 과거 이 골목에 있던 사람들과 관련이 있다는 건가?",
						"english": "Could Elias be connected to the people who were in this alley before?",
						"japanese": "エリアスが昔、この路地にいた人たちと関係があるってこと？",
						"chinese": "这难道意味着埃利亚斯和过去这条巷子里的人有关系吗？",
						"french": "Est-ce qu'Elias serait lié aux gens qui étaient dans cette ruelle autrefois ?",
						"spanish": "¿Significa esto que Elías está relacionado con la gente que estaba en este callejón antes?",
						"vietnamese": "Phải chăng Elias có liên quan đến những người từng ở con hẻm này?",
						"thai": "นี่หมายความว่าเอเลียสเกี่ยวข้องกับคนที่เคยอยู่ในซอยนี้เหรอ?",
						"hindi": "क्या इसका मतलब है कि एलियास का संबंध उन लोगों से है जो पहले इस गली में थे?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직은 단서가 부족해. 하지만 이 사진, 뭔가 말해주고 있는 것 같아.",
						"english": "Not enough clues yet. But this photo... it feels like it's trying to tell us something.",
						"japanese": "まだ手がかりは足りない。でもこの写真、何かを語りかけている気がする。",
						"chinese": "线索还不够。但这张照片，好像在诉说着什么。",
						"french": "Pas assez d'indices pour l'instant. Mais cette photo... elle semble vouloir nous dire quelque chose.",
						"spanish": "Aún faltan pistas. Pero esta foto, parece estar contándonos algo.",
						"vietnamese": "Chưa đủ manh mối. Nhưng bức ảnh này, dường như đang nói lên điều gì đó.",
						"thai": "ยังไม่มีเบาะแสพอ แต่รูปนี้ เหมือนจะบอกอะไรบางอย่าง",
						"hindi": "अभी पर्याप्त सुराग नहीं हैं। लेकिन यह तस्वीर, कुछ बताना चाह रही है।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 골목은 깊어질수록 어둠을 토해냈다.",
						"english": "The old alley deepened, spewing out darkness.",
						"japanese": "古びた路地は、奥へ行くほど闇を吐き出した。",
						"chinese": "老旧的巷子越深，越是弥漫着黑暗。",
						"french": "Plus la vieille ruelle s'enfonçait, plus elle crachait les ténèbres.",
						"spanish": "Cuanto más profundo se hacía el callejón viejo, más oscuridad exhalaba.",
						"vietnamese": "Con hẻm cũ càng sâu, bóng tối càng bao trùm.",
						"thai": "ยิ่งซอยเก่าลึกไปเท่าไร ความมืดก็ยิ่งคายออกมา",
						"hindi": "पुरानी गली जितनी गहरी होती गई, उतना ही अँधेरा उगलती गई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 기분 나쁜 기운이 느껴져.",
						"english": "I'm feeling an increasingly eerie presence.",
						"japanese": "ますます嫌な気配がする。",
						"chinese": "我感觉到越来越令人不安的气息。",
						"french": "Je ressens une présence de plus en plus inquiétante.",
						"spanish": "Cada vez siento una vibra más inquietante.",
						"vietnamese": "Cảm thấy một luồng khí khó chịu ngày càng rõ.",
						"thai": "รู้สึกถึงพลังงานไม่ดีมากขึ้นเรื่อยๆ",
						"hindi": "मुझे लगातार एक अजीब सी, बुरी ऊर्जा महसूस हो रही है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 파고들지 마라.",
						"english": "Don't delve any deeper.",
						"japanese": "これ以上深入りするな。",
						"chinese": "别再深究了。",
						"french": "Ne t'enfonce pas plus loin.",
						"spanish": "No indagues más.",
						"vietnamese": "Đừng đi sâu hơn nữa.",
						"thai": "อย่าเจาะลึกไปมากกว่านี้",
						"hindi": "और गहराई में मत जाओ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구야!",
						"english": "Who's there!",
						"japanese": "「誰だ！」",
						"chinese": "“是谁！”",
						"french": "« Qui est là ! »",
						"spanish": "« ¡Quién anda ahí! »",
						"vietnamese": "« Ai đó! »",
						"thai": "« ใครน่ะ! »",
						"hindi": "« कौन है! »"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희가 알 필요 없는 진실이 있다.",
						"english": "There's a truth you don't need to know.",
						"japanese": "「お前たちが知る必要のない真実がある。」",
						"chinese": "“有些真相你们无需知道。”",
						"french": "« Il y a une vérité que vous n'avez pas besoin de savoir. »",
						"spanish": "« Hay una verdad que no necesitáis saber. »",
						"vietnamese": "« Có một sự thật các ngươi không cần biết. »",
						"thai": "« มีความจริงที่พวกเจ้าไม่จำเป็นต้องรู้ »",
						"hindi": "« एक सच है जो तुम्हें जानने की ज़रूरत नहीं। »"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "경고했다. 여기서 멈춰라.",
						"english": "I warned you. Stop here.",
						"japanese": "「警告した。ここで止めろ。」",
						"chinese": "“我警告过你们。到此为止。”",
						"french": "« Je vous ai prévenus. Arrêtez-vous ici. »",
						"spanish": "« Os lo advertí. Parad aquí. »",
						"vietnamese": "« Ta đã cảnh báo. Dừng lại ở đây. »",
						"thai": "« ข้าเตือนแล้ว หยุดอยู่แค่นี้ »",
						"hindi": "« मैंने तुम्हें चेतावनी दी थी। यहीं रुक जाओ। »"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이대로… 끝나지 않아…!",
						"english": "Ugh... It won't... end like this...!",
						"japanese": "「くっ…このままでは…終わらない…！」",
						"chinese": "“呃…不会…就这样结束的…！”",
						"french": "« Argh... Ça ne... finira pas comme ça... ! »",
						"spanish": "« ¡Ugh... no... terminará así...! »",
						"vietnamese": "« Khụ... Sẽ không... kết thúc như thế này đâu...! »",
						"thai": "« อึก... มันจะ... ไม่จบลงแค่นี้...! »",
						"hindi": "« उफ़... यह ऐसे... ख़त्म नहीं होगा...! »"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났어. 다음 단서를 찾자.",
						"english": "It's over. Let's find the next clue.",
						"japanese": "「終わった。次の手がかりを探そう。」",
						"chinese": "“结束了。我们去找下一个线索。”",
						"french": "« C'est fini. Cherchons le prochain indice. »",
						"spanish": "« Se acabó. Busquemos la siguiente pista. »",
						"vietnamese": "« Xong rồi. Hãy tìm manh mối tiếp theo. »",
						"thai": "« จบแล้ว ไปหาเบาะแสต่อไปกันเถอะ »",
						"hindi": "« यह खत्म हो गया। चलो अगला सुराग ढूंढते हैं। »"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 사진… 엘리아스의 출생 기록과 비교해봐야 할 것 같아.",
						"english": "This photo... I should compare it with Elias's birth records.",
						"japanese": "「この写真…エリアスの出生記録と比較してみる必要がある。」",
						"chinese": "“这张照片…我应该和埃利亚斯的出生记录进行比对。”",
						"french": "« Cette photo... Je devrais la comparer aux actes de naissance d'Elias. »",
						"spanish": "« Esta foto... Debería compararla con los registros de nacimiento de Elías. »",
						"vietnamese": "« Bức ảnh này... Tôi nên so sánh nó với hồ sơ khai sinh của Elias. »",
						"thai": "« รูปนี้... ฉันควรเปรียบเทียบกับบันทึกการเกิดของเอเลียส »",
						"hindi": "« यह तस्वीर... मुझे इसे एलियास के जन्म रिकॉर्ड से तुलना करनी चाहिए। »"
					}
				},
				{
					"content": {
						"korean": "빛바랜 사진 한 장이 새로운 진실의 문을 열었다.",
						"english": "A faded photograph unveiled a new truth.",
						"japanese": "色褪せた写真が新たな真実の扉を開いた。",
						"chinese": "一张褪色的照片揭示了新的真相。",
						"french": "Une photo fanée a ouvert la porte à une nouvelle vérité.",
						"spanish": "Una foto descolorida abrió la puerta a una nueva verdad.",
						"vietnamese": "Một bức ảnh phai màu đã mở ra cánh cửa đến một sự thật mới.",
						"thai": "ภาพถ่ายที่ซีดจางได้เปิดประตูสู่ความจริงใหม่",
						"hindi": "एक धुंधली तस्वीर ने एक नए सच का दरवाज़ा खोल दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "오래된 건물의 가장 깊은 곳. 정체 모를 그림자가 길을 막아섰다.",
						"english": "In the deepest part of the old building, an unknown shadow blocked the way.",
						"japanese": "「古い建物の最深部。正体不明の影が道を塞いだ。」",
						"chinese": "“在古老建筑的最深处，一个不明的影子挡住了去路。”",
						"french": "« Au plus profond de l'ancien bâtiment, une ombre inconnue a barré le chemin. »",
						"spanish": "« En lo más profundo del antiguo edificio, una sombra desconocida bloqueó el camino. »",
						"vietnamese": "« Ở nơi sâu nhất của tòa nhà cổ, một bóng đen không rõ danh tính đã chặn đường. »",
						"thai": "« ในส่วนลึกที่สุดของอาคารเก่าแก่ เงาลึกลับได้ขวางทางไว้ »",
						"hindi": "« पुरानी इमारत के सबसे गहरे हिस्से में, एक अज्ञात परछाई ने रास्ता रोक दिया। »"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳에 발을 들인 것을 후회하게 될 것이다.",
						"english": "You will regret setting foot in this place.",
						"japanese": "「この場所に足を踏み入れたことを後悔するだろう。」",
						"chinese": "“你们会后悔踏足此地。”",
						"french": "« Vous regretterez d'avoir mis les pieds ici. »",
						"spanish": "« Lamentaréis haber puesto un pie en este lugar. »",
						"vietnamese": "« Ngươi sẽ hối hận vì đã đặt chân đến nơi này. »",
						"thai": "« เจ้าจะต้องเสียใจที่ย่างกรายเข้ามาในที่แห่งนี้ »",
						"hindi": "« तुम्हें इस जगह पर कदम रखने का पछतावा होगा। »"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 멈추지 않아. 엘리아스의 과거를 밝혀낼 거야.",
						"english": "We won't stop. We'll uncover Elias's past.",
						"japanese": "「私たちは止まらない。エリアスの過去を明らかにする。」",
						"chinese": "“我们不会停下。我们会揭露埃利亚斯的过去。”",
						"french": "« Nous ne nous arrêterons pas. Nous allons découvrir le passé d'Elias. »",
						"spanish": "« No nos detendremos. Descubriremos el pasado de Elías. »",
						"vietnamese": "« Chúng ta sẽ không dừng lại. Chúng ta sẽ phơi bày quá khứ của Elias. »",
						"thai": "« เราจะไม่หยุด เราจะเปิดเผยอดีตของเอเลียส »",
						"hindi": "« हम रुकेंगे नहीं। हम एलियास के अतीत का खुलासा करेंगे। »"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들. 진실은 너희를 고통스럽게 할 뿐이다.",
						"english": "Fools. The truth will only bring you pain.",
						"japanese": "「愚か者ども。真実はお前たちを苦しめるだけだ。」",
						"chinese": "“愚蠢的家伙。真相只会给你们带来痛苦。”",
						"french": "« Imbéciles. La vérité ne vous apportera que de la douleur. »",
						"spanish": "« Estúpidos. La verdad solo os causará dolor. »",
						"vietnamese": "« Đồ ngốc. Sự thật chỉ mang lại đau khổ cho các ngươi. »",
						"thai": "« เจ้าคนโง่ ความจริงมีแต่จะทำให้พวกเจ้าเจ็บปวดเท่านั้น »",
						"hindi": "« मूर्ख। सच तुम्हें केवल दर्द देगा। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적의 힘에 탐험대는 쓰러졌다.",
						"english": "The expedition fell to an unknown enemy's power.",
						"japanese": "正体不明の敵の力に、探検隊は倒れた。",
						"chinese": "探险队倒在了不明敌人的力量之下。",
						"french": "L'expédition a succombé au pouvoir d'un ennemi inconnu.",
						"spanish": "La expedición sucumbió al poder de un enemigo desconocido.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh của kẻ thù không rõ.",
						"thai": "คณะสำรวจพ่ายแพ้ต่อพลังของศัตรูที่ไม่รู้จัก",
						"hindi": "अज्ञात शत्रु की शक्ति से अभियान दल पराजित हो गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 도전이었다. 여기서 멈춰라.",
						"english": "A foolish challenge. Stop here.",
						"japanese": "愚かな挑戦だった。ここでやめろ。",
						"chinese": "真是愚蠢的挑战。到此为止吧。",
						"french": "Un défi insensé. Arrêtez-vous là.",
						"spanish": "Fue un desafío insensato. Detente aquí.",
						"vietnamese": "Một thử thách ngu ngốc. Dừng lại ở đây.",
						"thai": "เป็นการท้าทายที่โง่เขลา จงหยุดแค่นี้",
						"hindi": "यह एक मूर्खतापूर्ण चुनौती थी। यहीं रुक जाओ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은 반드시 밝혀진다.",
						"english": "...It's not over yet. The truth will surely come to light.",
						"japanese": "…まだ終わってない。真実は必ず暴かれる。",
						"chinese": "……还没结束。真相终将大白。",
						"french": "...Ce n'est pas encore fini. La vérité sera révélée.",
						"spanish": "...Aún no ha terminado. La verdad será revelada.",
						"vietnamese": "…Vẫn chưa kết thúc. Sự thật nhất định sẽ được phơi bày.",
						"thai": "...ยังไม่จบ ความจริงจะถูกเปิดเผยอย่างแน่นอน",
						"hindi": "...अभी खत्म नहीं हुआ है। सच ज़रूर सामने आएगा।"
					}
				}
			]
		}
	]
} as const;
