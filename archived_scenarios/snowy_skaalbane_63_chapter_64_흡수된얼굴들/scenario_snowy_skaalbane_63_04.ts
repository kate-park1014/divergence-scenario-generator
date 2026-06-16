export const scenario_snowy_skaalbane_63_04 = {
	"scenario_id": "snowy_skaalbane_63_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼음 탑, 그 안에서 멈춘 비명들.",
			"그 얼굴을 오래 들여다본 자는 저주에 걸린다 했다.",
			"차가운 한기에 누구보다 예민한 프로스트.",
			"그녀는 절규가 동료들의 가슴으로 스며드는 것을 느꼈다."
		],
		"english": [
			"The Ice Tower, where screams fell silent.",
			"They said those who gazed too long upon those faces would be cursed.",
			"Frost, more sensitive to the cold than anyone.",
			"She felt the screams seep into her comrades' hearts."
		],
		"japanese": [
			"氷の塔、その中で止まった悲鳴。",
			"その顔を長く見つめた者は呪われると。",
			"誰よりも冷気には敏感なフロスト。",
			"彼女は絶叫が仲間たちの胸に染み込むのを感じた。"
		],
		"chinese": [
			"冰之塔，其中止息的尖叫。",
			"据说，久视其面者，必受诅咒。",
			"霜，比任何人都对寒气更为敏感。",
			"她感到那绝望的尖叫正渗入同伴的心扉。"
		],
		"french": [
			"La Tour de Glace, où les cris se sont tus.",
			"On disait que ceux qui fixaient ces visages trop longtemps seraient maudits.",
			"Frost, plus sensible au froid que quiconque.",
			"Elle sentit les cris s'infiltrer dans le cœur de ses camarades."
		],
		"spanish": [
			"La Torre de Hielo, donde los gritos se silenciaron.",
			"Decían que quienes miraran esos rostros por mucho tiempo serían maldecidos.",
			"Frost, más sensible al frío que nadie.",
			"Ella sintió cómo los gritos se filtraban en los corazones de sus compañeros."
		],
		"vietnamese": [
			"Tháp Băng, nơi những tiếng thét ngừng lại.",
			"Kẻ nào nhìn quá lâu vào khuôn mặt ấy sẽ bị nguyền rủa.",
			"Frost, nhạy cảm với cái lạnh hơn bất cứ ai.",
			"Cô cảm thấy tiếng thét xé lòng đang len lỏi vào trái tim đồng đội."
		],
		"thai": [
			"หอคอยน้ำแข็ง ที่ซึ่งเสียงกรีดร้องหยุดนิ่ง",
			"ว่ากันว่าผู้ใดจ้องมองใบหน้าเหล่านั้นนานเกินไปจะถูกสาป",
			"ฟรอสต์ ผู้ไวต่อความหนาวเย็นยิ่งกว่าใคร",
			"เธอรู้สึกถึงเสียงกรีดร้องที่ซึมซาบเข้าสู่หัวใจของสหาย"
		],
		"hindi": [
			"बर्फ़ की मीनार, जहाँ चीखें थम गईं।",
			"कहा जाता था कि जो उन चेहरों को देर तक देखता, वह शापित हो जाता।",
			"फ्रॉस्ट, जो ठंड के प्रति किसी और से भी ज़्यादा संवेदनशील थी।",
			"उसने महसूस किया कि चीखें उसके साथियों के दिलों में समा रही थीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음벽이 한결 투명해졌다. 수많은 얼굴이 그 안에 갇힌 채였다.",
						"english": "The ice wall grew clearer. Countless faces were trapped within.",
						"japanese": "氷壁は一層透明になった。数多くの顔がその中に囚われていた。",
						"chinese": "冰墙变得更加透明。无数张脸被困其中。",
						"french": "Le mur de glace devint plus transparent. D'innombrables visages y étaient piégés.",
						"spanish": "La pared de hielo se volvió más transparente. Innumerables rostros estaban atrapados dentro.",
						"vietnamese": "Bức tường băng trở nên trong suốt hơn. Vô số khuôn mặt bị kẹt bên trong.",
						"thai": "กำแพงน้ำแข็งโปร่งใสขึ้น ใบหน้ามากมายถูกกักขังอยู่ข้างใน",
						"hindi": "बर्फ़ की दीवार और पारदर्शी हो गई। अनगिनत चेहरे उसमें फंसे हुए थे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "으음… 이젠 너무 잘 보여.",
						"english": "Ugh... now I can see too clearly.",
						"japanese": "うーん…もう、はっきり見えすぎだ。",
						"chinese": "嗯…现在看得太清楚了。",
						"french": "Ugh... maintenant, je vois trop bien.",
						"spanish": "Uhm... ahora se ve demasiado bien.",
						"vietnamese": "Ưm... giờ nhìn rõ quá.",
						"thai": "อืม... ตอนนี้เห็นชัดเกินไปแล้ว",
						"hindi": "उम्म... अब बहुत ज़्यादा साफ़ दिख रहा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저 표정… 고통스러워 보여.",
						"english": "That expression... it looks painful.",
						"japanese": "あの表情…苦しそうだ。",
						"chinese": "那个表情…看起来很痛苦。",
						"french": "Cette expression... elle a l'air douloureuse.",
						"spanish": "Esa expresión... parece dolorosa.",
						"vietnamese": "Biểu cảm đó... trông thật đau đớn.",
						"thai": "สีหน้านั้น... ดูเจ็บปวดเหลือเกิน",
						"hindi": "वह भाव... दर्दनाक लग रहा है।"
					}
				},
				{
					"type": "direction",
					"speaker": "frost",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "frost",
					"content": {
						"korean": "보지 마. 오래 보지 마.",
						"english": "Don't look. Don't look for too long.",
						"japanese": "見るな。長く見るな。",
						"chinese": "别看。别看太久。",
						"french": "Ne regarde pas. Ne regarde pas trop longtemps.",
						"spanish": "No mires. No mires mucho tiempo.",
						"vietnamese": "Đừng nhìn. Đừng nhìn lâu.",
						"thai": "อย่ามอง อย่ามองนาน",
						"hindi": "मत देखो। ज़्यादा देर मत देखो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜 그래?",
						"english": "What's wrong?",
						"japanese": "どうしたの？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Sao vậy?",
						"thai": "เป็นอะไรไป?",
						"hindi": "क्या हुआ?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "저 비명이… 우리한테 옮겨붙어.",
						"english": "Those screams... they'll infect us.",
						"japanese": "あの悲鳴が…私たちに伝染する。",
						"chinese": "那些尖叫…会传染给我们。",
						"french": "Ces cris... ils vont nous contaminer.",
						"spanish": "Esos gritos... se nos pegarán.",
						"vietnamese": "Tiếng thét đó... sẽ lây sang chúng ta.",
						"thai": "เสียงกรีดร้องเหล่านั้น... จะติดตัวเรามา",
						"hindi": "वे चीखें... हमें भी लग जाएँगी।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "frost"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "이건 단순한 얼음이 아니야.",
						"english": "This isn't just ice.",
						"japanese": "これはただの氷じゃない。",
						"chinese": "这不是普通的冰。",
						"french": "Ce n'est pas de la simple glace.",
						"spanish": "Esto no es solo hielo.",
						"vietnamese": "Đây không phải băng thường.",
						"thai": "นี่ไม่ใช่แค่น้ำแข็งธรรมดา",
						"hindi": "यह सिर्फ़ बर्फ़ नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…점점 추워지는 것 같아.",
						"english": "...It feels colder and colder.",
						"japanese": "...だんだん寒くなってきたみたい。",
						"chinese": "...好像越来越冷了。",
						"french": "...Il fait de plus en plus froid, je crois.",
						"spanish": "...Creo que hace cada vez más frío.",
						"vietnamese": "...Càng lúc càng lạnh thì phải.",
						"thai": "...รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है ठंड बढ़ती जा रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "내 머리 속에서… 웅성거리는 소리가 들려.",
						"english": "I hear a buzzing... in my head.",
						"japanese": "頭の中で...ざわめきが聞こえる。",
						"chinese": "我听到我脑子里...有嗡嗡的声音。",
						"french": "J'entends un bourdonnement... dans ma tête.",
						"spanish": "Oigo un zumbido... en mi cabeza.",
						"vietnamese": "Trong đầu tôi... nghe thấy tiếng ồn ào.",
						"thai": "ฉันได้ยินเสียงกระซิบกระซาบ...ในหัวฉัน",
						"hindi": "मेरे सिर में... एक फुसफुसाहट सुनाई दे रही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "frost",
					"content": {
						"korean": "저게 새 먹이를 끄는 방식이야. 절규가 스며들면… 너희도 저렇게 돼.",
						"english": "That's how it lures new prey. Once the screams seep in... you'll become like them.",
						"japanese": "あれが新たな獲物を誘い込む手口だ。絶叫が染み込めば...お前たちもああなる。",
						"chinese": "那就是它吸引新猎物的方式。一旦尖叫声渗入...你们也会变成那样。",
						"french": "C'est comme ça qu'il attire de nouvelles proies. Une fois que les hurlements s'infiltrent... vous deviendrez comme eux.",
						"spanish": "Así es como atrae a nuevas presas. Una vez que los gritos se filtren... os convertiréis en ellos.",
						"vietnamese": "Đó là cách nó dụ con mồi mới. Một khi tiếng hét ngấm vào... các người cũng sẽ trở thành như vậy.",
						"thai": "นั่นคือวิธีที่มันล่อเหยื่อใหม่ เมื่อเสียงกรีดร้องแทรกซึมเข้าไป...พวกเจ้าก็จะกลายเป็นเหมือนพวกมัน",
						"hindi": "वह नए शिकार को ऐसे ही लुभाता है। एक बार चीखें अंदर घुस जाएँ... तो तुम भी वैसे ही बन जाओगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "먹이?",
						"english": "Prey?",
						"japanese": "獲物？",
						"chinese": "猎物？",
						"french": "Proie ?",
						"spanish": "¿Presa?",
						"vietnamese": "Con mồi?",
						"thai": "เหยื่อ?",
						"hindi": "शिकार?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "frost",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이 사람들… 옷차림이 다 달라. 어떤 얼굴은 옛날 바이킹 같고…",
						"english": "These people... their clothes are all different. Some faces look like ancient Vikings...",
						"japanese": "この人々...服装がみんな違う。ある顔は昔のヴァイキングのようだ...",
						"chinese": "这些人...穿着各不相同。有些脸看起来像古代的维京人...",
						"french": "Ces gens... leurs vêtements sont tous différents. Certains visages ressemblent à d'anciens Vikings...",
						"spanish": "Esta gente... su ropa es toda diferente. Algunas caras parecen de antiguos vikingos...",
						"vietnamese": "Những người này... trang phục của họ đều khác nhau. Một số khuôn mặt trông giống như người Viking cổ đại...",
						"thai": "คนเหล่านี้...เสื้อผ้าของพวกเขาแตกต่างกันทั้งหมด บางใบหน้าดูเหมือนชาวไวกิ้งโบราณ...",
						"hindi": "ये लोग... इनके कपड़े सब अलग हैं। कुछ चेहरे प्राचीन वाइकिंग्स जैसे दिखते हैं..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시대를 건너뛴 것 같아.",
						"english": "It's like they've jumped through time.",
						"japanese": "時代を飛び越えたようだ。",
						"chinese": "好像穿越了时代一样。",
						"french": "On dirait qu'ils ont traversé les époques.",
						"spanish": "Es como si hubieran saltado en el tiempo.",
						"vietnamese": "Cứ như họ đã vượt qua thời gian vậy.",
						"thai": "เหมือนพวกเขากระโดดข้ามกาลเวลามา",
						"hindi": "लगता है इन्होंने समय को पार कर लिया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "맞아. 이 탑에 흡수된 자들은… 시간이 없어.",
						"english": "Exactly. Those absorbed by this tower... have no time left.",
						"japanese": "その通りだ。この塔に吸収された者たちは...時間がないんだ。",
						"chinese": "没错。被这座塔吞噬的人...已经没有时间了。",
						"french": "Exactement. Ceux qui sont absorbés par cette tour... n'ont plus de temps.",
						"spanish": "Exacto. Los que son absorbidos por esta torre... no tienen tiempo.",
						"vietnamese": "Đúng vậy. Những người bị tòa tháp này hấp thụ... không còn thời gian nữa.",
						"thai": "ถูกต้อง ผู้ที่ถูกหอคอยนี้ดูดกลืน...ไม่มีเวลาเหลืออยู่แล้ว",
						"hindi": "सही कहा। जो इस मीनार में समा गए हैं... उनके पास समय नहीं बचा।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "내 가슴이… 갑자기 너무 아파. 저 얼굴들이 겪었던 고통이… 느껴지는 것 같아.",
						"english": "My chest... suddenly hurts so much. I feel like I can sense the pain those faces endured...",
						"japanese": "胸が...急にとても痛い。あの顔たちが経験した苦痛が...感じられるようだ。",
						"chinese": "我的胸口...突然好痛。我好像能感受到那些脸孔所承受的痛苦...",
						"french": "Ma poitrine... me fait soudainement si mal. J'ai l'impression de ressentir la douleur que ces visages ont endurée...",
						"spanish": "Mi pecho... de repente me duele mucho. Siento como si pudiera sentir el dolor que sufrieron esas caras...",
						"vietnamese": "Ngực tôi... đột nhiên đau quá. Tôi cảm thấy như mình có thể cảm nhận được nỗi đau mà những khuôn mặt đó đã chịu đựng...",
						"thai": "หน้าอกของฉัน...จู่ๆ ก็เจ็บปวดเหลือเกิน ฉันรู้สึกเหมือนสัมผัสได้ถึงความเจ็บปวดที่ใบหน้าเหล่านั้นต้องทนรับ...",
						"hindi": "मेरा सीना... अचानक बहुत दर्द कर रहा है। मुझे लगता है कि मैं उन चेहरों के दर्द को महसूस कर पा रहा हूँ..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "안 돼! 네 마음을 열지 마. 저 절규가 파고들어.",
						"english": "No! Don't open your mind. Those screams will seep in.",
						"japanese": "ダメだ！心を閉ざせ。あの絶叫が侵食してくる。",
						"chinese": "不！别敞开心扉。那些尖叫声会侵蚀进来。",
						"french": "Non ! N'ouvre pas ton esprit. Ces hurlements vont s'infiltrer.",
						"spanish": "¡No! No abras tu mente. Esos gritos se infiltrarán.",
						"vietnamese": "Không! Đừng mở lòng mình. Những tiếng hét đó sẽ xâm nhập.",
						"thai": "ไม่นะ! อย่าเปิดใจของเจ้า เสียงกรีดร้องเหล่านั้นจะแทรกซึมเข้ามา",
						"hindi": "नहीं! अपना मन मत खोलो। वह चीखें अंदर घुस जाएँगी।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "frost",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 저 얼굴들이… 날 부르고 있어.",
						"english": "I can't stop. Those faces... they're calling me.",
						"japanese": "止められない。あの顔たちが…私を呼んでいる。",
						"chinese": "我停不下来。那些面孔…它们在呼唤我。",
						"french": "Je ne peux pas m'arrêter. Ces visages… ils m'appellent.",
						"spanish": "No puedo parar. Esos rostros… me están llamando.",
						"vietnamese": "Tôi không thể dừng lại. Những khuôn mặt đó... chúng đang gọi tôi.",
						"thai": "ฉันหยุดไม่ได้ ใบหน้าเหล่านั้น... กำลังเรียกฉันอยู่",
						"hindi": "मैं रुक नहीं सकता। वो चेहरे… मुझे बुला रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "돌아가! 아직 늦지 않았어.",
						"english": "Go back! It's not too late yet.",
						"japanese": "戻れ！まだ間に合う。",
						"chinese": "回去！还不晚。",
						"french": "Retourne en arrière ! Il n'est pas trop tard.",
						"spanish": "¡Vuelve! Aún no es tarde.",
						"vietnamese": "Quay lại đi! Vẫn chưa quá muộn đâu.",
						"thai": "กลับไป! ยังไม่สายเกินไป",
						"hindi": "वापस जाओ! अभी देर नहीं हुई है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "하지만… 저들의 고통을 외면할 수 없어.",
						"english": "But... I can't ignore their pain.",
						"japanese": "しかし…彼らの苦しみを無視できない。",
						"chinese": "但是…我不能对他们的痛苦视而不见。",
						"french": "Mais… je ne peux pas ignorer leur souffrance.",
						"spanish": "Pero… no puedo ignorar su dolor.",
						"vietnamese": "Nhưng... tôi không thể làm ngơ trước nỗi đau của họ.",
						"thai": "แต่... ฉันไม่สามารถเมินเฉยต่อความเจ็บปวดของพวกเขาได้",
						"hindi": "लेकिन… मैं उनके दर्द को नज़रअंदाज़ नहीं कर सकता।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "frost",
					"content": {
						"korean": "외면해야 해! 이건 네 고통이 아니야. 저 비명이… 널 집어삼킬 거야.",
						"english": "You have to ignore it! This isn't your pain. Those screams… they'll devour you.",
						"japanese": "無視しろ！これはお前の苦しみじゃない。あの悲鳴が…お前を飲み込むぞ。",
						"chinese": "你必须视而不见！这不是你的痛苦。那些尖叫声…会吞噬你。",
						"french": "Tu dois l'ignorer ! Ce n'est pas ta souffrance. Ces cris… ils vont te dévorer.",
						"spanish": "¡Tienes que ignorarlo! Este no es tu dolor. Esos gritos… te devorarán.",
						"vietnamese": "Ngươi phải làm ngơ đi! Đây không phải nỗi đau của ngươi. Những tiếng thét đó... sẽ nuốt chửng ngươi đấy.",
						"thai": "นายต้องเมินเฉย! นี่ไม่ใช่ความเจ็บปวดของนาย เสียงกรีดร้องเหล่านั้น... จะกลืนกินนาย",
						"hindi": "तुम्हें इसे नज़रअंदाज़ करना होगा! यह तुम्हारा दर्द नहीं है। वो चीखें… तुम्हें निगल जाएँगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탑의 심장이 가까워질수록, 얼음벽 속 절규는 더욱 거세졌다.",
						"english": "As the tower's heart grew closer, the screams within the ice walls intensified.",
						"japanese": "塔の心臓に近づくほど、氷壁の中の絶叫はさらに激しくなった。",
						"chinese": "随着塔的心脏越来越近，冰墙中的尖叫声也愈发激烈。",
						"french": "Plus le cœur de la tour se rapprochait, plus les cris des murs de glace s'intensifiaient.",
						"spanish": "Cuanto más se acercaba el corazón de la torre, más intensos se volvían los gritos dentro de los muros de hielo.",
						"vietnamese": "Càng đến gần trái tim của tòa tháp, những tiếng kêu gào trong bức tường băng càng trở nên dữ dội.",
						"thai": "ยิ่งเข้าใกล้หัวใจของหอคอย เสียงกรีดร้องภายในกำแพงน้ำแข็งก็ยิ่งรุนแรงขึ้น",
						"hindi": "जैसे-जैसे टावर का दिल करीब आता गया, बर्फ की दीवारों के भीतर की चीखें और तेज़ होती गईं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐흐… 어리석은 자들. 결국 여기까지 왔군.",
						"english": "Hee hee hee… Foolish ones. You've finally made it this far.",
						"japanese": "フフフ…愚かな者たち。ついにここまで来たか。",
						"chinese": "呵呵呵…愚蠢的家伙们。终于还是走到这里了。",
						"french": "Hé hé hé… Insensés. Vous avez finalement réussi à venir jusqu'ici.",
						"spanish": "Je je je… Estúpidos. Finalmente habéis llegado hasta aquí.",
						"vietnamese": "Hừ hừ hừ... Những kẻ ngốc. Cuối cùng cũng đã đến được đây.",
						"thai": "ฮิฮิฮิ... พวกคนโง่ ในที่สุดก็มาถึงที่นี่",
						"hindi": "ही ही ही… मूर्ख लोग। आखिर तुम यहाँ तक आ ही गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 절규도 곧 이 탑의 일부가 될 것이다.",
						"english": "Your screams too, will soon become a part of this tower.",
						"japanese": "お前たちの絶叫も、すぐにこの塔の一部となるだろう。",
						"chinese": "你们的尖叫声，很快也将成为这座塔的一部分。",
						"french": "Vos cris aussi, feront bientôt partie de cette tour.",
						"spanish": "Vuestros gritos también, pronto serán parte de esta torre.",
						"vietnamese": "Tiếng kêu gào của các ngươi rồi cũng sẽ sớm trở thành một phần của tòa tháp này.",
						"thai": "เสียงกรีดร้องของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของหอคอยนี้ในไม่ช้า",
						"hindi": "तुम्हारी चीखें भी, जल्द ही इस टावर का हिस्सा बन जाएँगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 우린 널 막을 거야.",
						"english": "Shut up! We're going to stop you.",
						"japanese": "黙れ！私たちは貴様を止める！",
						"chinese": "闭嘴！我们会阻止你。",
						"french": "Tais-toi ! Nous allons t'arrêter.",
						"spanish": "¡Cállate! Te detendremos.",
						"vietnamese": "Câm miệng! Bọn ta sẽ ngăn ngươi lại.",
						"thai": "หุบปาก! เราจะหยุดนาย",
						"hindi": "चुप रहो! हम तुम्हें रोकेंगे।"
					}
				},
				{
					"speaker": "frost",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "모두 물러서! 저 자의 말에 흔들리지 마!",
						"english": "Everyone step back! Don't be swayed by their words!",
						"japanese": "全員下がれ！あの者の言葉に惑わされるな！",
						"chinese": "都退后！不要被他的话动摇！",
						"french": "Tout le monde, reculez ! Ne vous laissez pas influencer par ses paroles !",
						"spanish": "¡Todos retroceded! ¡No os dejéis llevar por sus palabras!",
						"vietnamese": "Tất cả lùi lại! Đừng để bị dao động bởi lời lẽ của hắn!",
						"thai": "ทุกคนถอยไป! อย่าหวั่นไหวกับคำพูดของมัน!",
						"hindi": "सब पीछे हटो! उसकी बातों से मत बहको!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "소용없어, {random_boss}에게서 도망칠 순 없다.",
						"english": "It's no use, you can't escape {random_boss}.",
						"japanese": "無駄だ、{random_boss}からは逃げられない。",
						"chinese": "没用的，你逃不出{random_boss}的手掌心。",
						"french": "C'est inutile, tu ne peux pas échapper à {random_boss}.",
						"spanish": "Es inútil, no puedes escapar de {random_boss}.",
						"vietnamese": "Vô ích thôi, ngươi không thể thoát khỏi {random_boss} đâu.",
						"thai": "ไร้ประโยชน์, เจ้าหนี {random_boss} ไม่พ้นหรอก",
						"hindi": "कोई फायदा नहीं, तुम {random_boss} से भाग नहीं सकते।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 무너졌다.",
						"english": "The colossal shadow collapsed.",
						"japanese": "巨大な影が崩れ落ちた。",
						"chinese": "巨大的黑影倒下了。",
						"french": "L'ombre colossale s'est effondrée.",
						"spanish": "La sombra colosal se derrumbó.",
						"vietnamese": "Bóng tối khổng lồ sụp đổ.",
						"thai": "เงาขนาดมหึมาล่มสลายลง",
						"hindi": "विशाल छाया ढह गई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…큭, 겨우… 이 정도는… 시작에 불과해…",
						"english": "...Hmph, barely... This much... is just the beginning...",
						"japanese": "…くっ、かろうじて…これしき…始まりに過ぎない…",
						"chinese": "…哼，这点程度……不过是……刚开始……",
						"french": "...Pff, à peine... Ce n'est... que le début...",
						"spanish": "...Hmph, apenas... Esto... es solo el principio...",
						"vietnamese": "...Khặc, vừa rồi... chừng này... chỉ là khởi đầu thôi...",
						"thai": "...หึ, แค่นี้... มันก็แค่... จุดเริ่มต้นเท่านั้น...",
						"hindi": "…हुँह, बस इतना सा… यह तो… केवल शुरुआत है…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 말하는 거야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "저 비명들은… 사라지지 않아… 곧 너희 가슴에서… 다시 울부짖을 것이다…",
						"english": "Those screams... they won't fade... Soon they will wail... from your hearts again...",
						"japanese": "あの悲鳴は…消えはしない…間もなくお前たちの胸で…再び叫び出すだろう…",
						"chinese": "那些尖叫声……不会消失……很快就会在你们心中……再次咆哮……",
						"french": "Ces cris... ils ne disparaîtront pas... Bientôt ils hurleront... de nouveau dans vos cœurs...",
						"spanish": "Esos gritos... no desaparecerán... Pronto aullarán... de nuevo desde vuestros corazones...",
						"vietnamese": "Những tiếng thét đó... sẽ không biến mất... Chẳng mấy chốc chúng sẽ gào thét... từ trái tim các ngươi một lần nữa...",
						"thai": "เสียงกรีดร้องเหล่านั้น... จะไม่จางหายไป... ไม่ช้ามันจะคร่ำครวญ... จากหัวใจของพวกเจ้าอีกครั้ง...",
						"hindi": "वो चीखें... मिटेंगी नहीं... जल्द ही वे तुम्हारी छाती में... फिर से दहाड़ेंगी..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "...!",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 얼음 속 얼굴들이 더욱 선명해졌다. 탑의 진정한 심장이 모습을 드러낼 준비를 하고 있었다.",
						"english": "Behind the fallen {random_boss}, faces in the ice became clearer. The true heart of the tower was preparing to reveal itself.",
						"japanese": "倒れた{random_boss}の背後で、氷の中の顔がより鮮明になった。塔の真の心臓が姿を現す準備をしていた。",
						"chinese": "倒下的{random_boss}身后，冰中的面孔变得更加清晰。塔的真正核心正准备显现。",
						"french": "Derrière le {random_boss} tombé, les visages dans la glace devinrent plus clairs. Le véritable cœur de la tour se préparait à se révéler.",
						"spanish": "Detrás del {random_boss} caído, los rostros en el hielo se hicieron más claros. El verdadero corazón de la torre se preparaba para revelarse.",
						"vietnamese": "Phía sau {random_boss} đã ngã xuống, những khuôn mặt trong băng trở nên rõ nét hơn. Trái tim thật sự của tòa tháp đang chuẩn bị lộ diện.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง ใบหน้าในน้ำแข็งปรากฏชัดเจนยิ่งขึ้น หัวใจที่แท้จริงของหอคอยกำลังเตรียมพร้อมที่จะเผยโฉม",
						"hindi": "गिरे हुए {random_boss} के पीछे, बर्फ में चेहरे और स्पष्ट हो गए। मीनार का असली दिल खुद को प्रकट करने की तैयारी कर रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 압도했다.",
						"english": "The colossal shadow overwhelmed.",
						"japanese": "巨大な影が圧倒した。",
						"chinese": "巨大的黑影压倒一切。",
						"french": "L'ombre colossale a submergé.",
						"spanish": "La sombra colosal abrumó.",
						"vietnamese": "Bóng tối khổng lồ đã áp đảo.",
						"thai": "เงาขนาดมหึมาเข้าครอบงำ",
						"hindi": "विशाल छाया ने अभिभूत कर दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 결국 아무것도 막지 못했군.",
						"english": "Fools... In the end, you couldn't stop anything.",
						"japanese": "愚かな者たちめ…結局何も止められなかったな。",
						"chinese": "愚蠢的家伙们……最终什么都阻止不了。",
						"french": "Imbéciles... Au final, vous n'avez rien pu arrêter.",
						"spanish": "Necios... Al final, no pudisteis detener nada.",
						"vietnamese": "Bọn ngu xuẩn... Cuối cùng, các ngươi chẳng ngăn cản được gì.",
						"thai": "พวกโง่เขลา... สุดท้ายก็หยุดอะไรไม่ได้เลยสินะ",
						"hindi": "मूर्खों... अंत में, तुम कुछ भी नहीं रोक पाए।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 우린 멈추지 않아.",
						"english": "No... We won't stop.",
						"japanese": "いいえ…私たちは止まらない。",
						"chinese": "不……我们不会停下。",
						"french": "Non... Nous n'arrêterons pas.",
						"spanish": "No... No nos detendremos.",
						"vietnamese": "Không... Chúng ta sẽ không dừng lại.",
						"thai": "ไม่... เราจะไม่หยุด",
						"hindi": "नहीं... हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "반드시 막을 거야.",
						"english": "We will definitely stop it.",
						"japanese": "必ず止めてみせる。",
						"chinese": "我们一定会阻止它。",
						"french": "Nous l'arrêterons, quoi qu'il arrive.",
						"spanish": "Lo detendremos, pase lo que pase.",
						"vietnamese": "Nhất định sẽ ngăn chặn nó.",
						"thai": "เราจะหยุดมันให้ได้แน่นอน",
						"hindi": "हम इसे ज़रूर रोकेंगे।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
