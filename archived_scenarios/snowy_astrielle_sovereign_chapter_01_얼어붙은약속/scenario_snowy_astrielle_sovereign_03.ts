export const scenario_snowy_astrielle_sovereign_03 = {
	"scenario_id": "snowy_astrielle_sovereign_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Astri": {
			"id": "actor_10",
			"name": {
				"korean": "아스트리",
				"english": "Astri",
				"japanese": "アストリ",
				"chinese": "阿斯特里",
				"french": "Astri",
				"spanish": "Astri",
				"vietnamese": "Astri",
				"thai": "อ스트리",
				"hindi": "अस्त्री"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0496af1b-19c2-43b2-c579-38a283320a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/537f5bb2-fba9-4781-36fc-489213dbff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼음 성 깊숙한 곳으로.",
			"복도는 끝없이 이어지고 있었다.",
			"그녀의 그림자도, 걸음도 무거워졌다.",
			"어쩌면, 이 모든 건 그녀를 위한 것인지도 몰랐다."
		],
		"english": [
			"Deep into the Ice Castle.",
			"The corridor stretched endlessly.",
			"Her shadow, her steps, grew heavy.",
			"Perhaps, all of this was for her."
		],
		"japanese": [
			"氷の城の奥深くへ。",
			"廊下は果てしなく続いていた。",
			"彼女の影も、足取りも重くなった。",
			"もしかしたら、この全てが彼女のためなのかもしれない。"
		],
		"chinese": [
			"深入冰之城堡。",
			"走廊绵延不绝。",
			"她的身影和脚步都变得沉重。",
			"也许，这一切都是为了她。"
		],
		"french": [
			"Au plus profond du Château de Glace.",
			"Le couloir s'étirait à l'infini.",
			"Son ombre et ses pas devinrent lourds.",
			"Peut-être que tout cela était pour elle."
		],
		"spanish": [
			"En lo profundo del Castillo de Hielo.",
			"El pasillo se extendía sin fin.",
			"Su sombra, sus pasos, se volvieron pesados.",
			"Quizás, todo esto era para ella."
		],
		"vietnamese": [
			"Sâu vào Lâu đài Băng giá.",
			"Hành lang kéo dài vô tận.",
			"Bóng cô, bước chân cô, đều trở nên nặng nề.",
			"Có lẽ, tất cả những điều này là dành cho cô ấy."
		],
		"thai": [
			"ลึกเข้าไปในปราสาทน้ำแข็ง",
			"ทางเดินทอดยาวไม่มีที่สิ้นสุด",
			"เงาและก้าวเดินของเธอกลับหนักอึ้ง",
			"บางที ทั้งหมดนี้อาจเป็นเพื่อเธอ"
		],
		"hindi": [
			"बर्फ के महल की गहराइयों में।",
			"गलियारा अंतहीन फैला हुआ था।",
			"उसकी परछाई और उसके कदम भारी हो गए।",
			"शायद, यह सब उसके लिए ही था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성 내부, 복도는 미로처럼 길게 이어졌다.",
						"english": "Inside the castle, the corridor stretched like a maze.",
						"japanese": "城内部、廊下は迷路のように長く続いていた。",
						"chinese": "城堡内部，走廊像迷宫一样延伸。",
						"french": "À l'intérieur du château, le couloir s'étirait comme un labyrinthe.",
						"spanish": "Dentro del castillo, el pasillo se extendía como un laberinto.",
						"vietnamese": "Bên trong lâu đài, hành lang kéo dài như một mê cung.",
						"thai": "ภายในปราสาท ทางเดินทอดยาวเหมือนเขาวงกต",
						"hindi": "महल के अंदर, गलियारा भूलभुलैया की तरह फैला हुआ था।"
					}
				},
				{
					"speaker": "Astri",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…점점 추워지는 것 같아.",
						"english": "...It feels like it's getting colder.",
						"japanese": "…だんだん寒くなってきたみたい。",
						"chinese": "……感觉越来越冷了。",
						"french": "...On dirait qu'il fait de plus en plus froid.",
						"spanish": "...Parece que hace cada vez más frío.",
						"vietnamese": "...Hình như càng ngày càng lạnh.",
						"thai": "...รู้สึกเหมือนกำลังหนาวขึ้นเรื่อยๆ",
						"hindi": "...लगता है ठंड बढ़ती जा रही है।"
					},
					"speaker": "Astri",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그냥 기분 탓이겠지.",
						"english": "It must be just my imagination.",
						"japanese": "ただの気のせいだろう。",
						"chinese": "应该只是我的错觉吧。",
						"french": "Ce doit être juste mon imagination.",
						"spanish": "Debe ser solo mi imaginación.",
						"vietnamese": "Chắc là chỉ do mình tưởng tượng thôi.",
						"thai": "คงจะเป็นแค่ความรู้สึกไปเอง",
						"hindi": "यह सिर्फ मेरा वहम होगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "아니. 이 한기는… 나를 쫓아오는 한기야.",
						"english": "No. This chill... it's a chill that's chasing me.",
						"japanese": "違う。この冷気は…私を追いかけてくる冷気だ。",
						"chinese": "不。这股寒意……是追着我来的寒意。",
						"french": "Non. Ce froid... c'est un froid qui me poursuit.",
						"spanish": "No. Este frío... es un frío que me persigue.",
						"vietnamese": "Không. Cơn lạnh này... là cơn lạnh đang đuổi theo tôi.",
						"thai": "ไม่ใช่ ความหนาวเย็นนี้... เป็นความหนาวเย็นที่ไล่ตามฉันมา",
						"hindi": "नहीं। यह ठंडक... यह वह ठंडक है जो मेरा पीछा कर रही है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Astri",
					"action": "enter"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "이상해… 손끝이 차가워.",
						"english": "Strange... My fingertips are cold.",
						"japanese": "変だ…指先が冷たい。",
						"chinese": "奇怪……指尖好冷。",
						"french": "Étrange... Le bout de mes doigts est froid.",
						"spanish": "Extraño... Las puntas de mis dedos están frías.",
						"vietnamese": "Lạ quá... Đầu ngón tay tôi lạnh cóng.",
						"thai": "แปลกจัง... ปลายนิ้วฉันเย็นเฉียบ",
						"hindi": "अजीब... मेरी उंगलियों के सिरे ठंडे हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "원래 얼음 성이니까 차가운 거 아니야?",
						"english": "Isn't it naturally cold since it's an ice castle?",
						"japanese": "もともと氷の城なんだから、寒いのが当たり前じゃない？",
						"chinese": "本来就是冰之城堡，冷不是很正常吗？",
						"french": "N'est-ce pas normal qu'il fasse froid puisque c'est un château de glace ?",
						"spanish": "¿No es normal que haga frío, siendo un castillo de hielo?",
						"vietnamese": "Không phải là bình thường thôi sao, vì đây là lâu đài băng mà?",
						"thai": "ก็ปราสาทน้ำแข็งนี่นา ไม่หนาวก็แปลกแล้วไม่ใช่เหรอ?",
						"hindi": "क्या यह स्वाभाविक रूप से ठंडा नहीं होगा, क्योंकि यह एक बर्फ का महल है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "아니, 이런 종류의 한기는… 옛날이랑 같아.",
						"english": "No, this kind of chill... it's the same as before.",
						"japanese": "いや、この寒気は… 昔と同じだ。",
						"chinese": "不，这种寒气……和以前一样。",
						"french": "Non, ce genre de frisson... c'est comme avant.",
						"spanish": "No, este tipo de escalofrío... es igual que antes.",
						"vietnamese": "Không, cái lạnh này... giống hệt như xưa.",
						"thai": "ไม่สิ ความหนาวเย็นแบบนี้... เหมือนเมื่อก่อนเลย",
						"hindi": "नहीं, इस तरह की ठंडक... पहले जैसी ही है।"
					}
				},
				{
					"content": {
						"korean": "아스트리의 손목에 작은 얼음 결정이 맺히기 시작했다.",
						"english": "Small ice crystals began to form on Astri's wrist.",
						"japanese": "アストリの手首に小さな氷の結晶ができ始めた。",
						"chinese": "阿斯特丽的手腕上开始结出小冰晶。",
						"french": "De petits cristaux de glace commencèrent à se former sur le poignet d'Astri.",
						"spanish": "Pequeños cristales de hielo comenzaron a formarse en la muñeca de Astri.",
						"vietnamese": "Những tinh thể băng nhỏ bắt đầu hình thành trên cổ tay Astri.",
						"thai": "ผลึกน้ำแข็งเล็กๆ เริ่มก่อตัวขึ้นบนข้อมือของอัสตรี",
						"hindi": "एस्ट्री की कलाई पर छोटे-छोटे बर्फ के क्रिस्टल बनने लगे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Astri"
				},
				{
					"content": {
						"korean": "갑자기 폭풍이… 왜 너한테만 그래?",
						"english": "A sudden storm... Why only you?",
						"japanese": "突然の嵐が… なぜお前だけに？",
						"chinese": "突然的暴风雨……为什么只针对你？",
						"french": "Une tempête soudaine... Pourquoi seulement toi ?",
						"spanish": "¿Una tormenta repentina...? ¿Por qué solo a ti?",
						"vietnamese": "Bão tố bất chợt... Sao chỉ xảy ra với ngươi?",
						"thai": "พายุโหมกระหน่ำกะทันหัน... ทำไมถึงเป็นแค่เธอ?",
						"hindi": "अचानक तूफ़ान... सिर्फ़ तुम ही क्यों?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "…아직도 날 알아보는구나.",
						"english": "...You still recognize me.",
						"japanese": "…まだ私を覚えているのか。",
						"chinese": "……你还认得我。",
						"french": "...Tu me reconnais encore.",
						"spanish": "...Todavía me reconoces.",
						"vietnamese": "...Ngươi vẫn còn nhận ra ta.",
						"thai": "...เธอยังจำฉันได้สินะ",
						"hindi": "...तुम मुझे अभी भी पहचानते हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가? 뭘?",
						"english": "Who? What?",
						"japanese": "誰が？何を？",
						"chinese": "谁？什么？",
						"french": "Qui ? Quoi ?",
						"spanish": "¿Quién? ¿Qué?",
						"vietnamese": "Ai? Cái gì?",
						"thai": "ใคร? อะไร?",
						"hindi": "कौन? क्या?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "그날의 겨울이. 이 성의 주인이.",
						"english": "The winter of that day. The master of this castle.",
						"japanese": "あの日の冬が。この城の主が。",
						"chinese": "那一天的冬天。这座城堡的主人。",
						"french": "L'hiver de ce jour-là. Le maître de ce château.",
						"spanish": "El invierno de aquel día. El señor de este castillo.",
						"vietnamese": "Mùa đông của ngày hôm đó. Chủ nhân của tòa lâu đài này.",
						"thai": "ฤดูหนาวของวันนั้น. เจ้าของปราสาทแห่งนี้.",
						"hindi": "उस दिन की सर्दियाँ। इस महल का मालिक।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "Astri",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 이상은… 가면 안 될 것 같아.",
						"english": "Any further than this... I don't think we should go.",
						"japanese": "これ以上は… 行かない方がいい。",
						"chinese": "再往前……我不能再去了。",
						"french": "Au-delà de ça... je ne crois pas que nous devrions y aller.",
						"spanish": "Más allá de esto... creo que no deberíamos ir.",
						"vietnamese": "Hơn thế nữa... có lẽ không nên đi.",
						"thai": "มากกว่านี้... ฉันว่าไม่ควรไปนะ",
						"hindi": "इससे आगे... मुझे नहीं लगता कि जाना चाहिए।"
					},
					"speaker": "Astri"
				},
				{
					"content": {
						"korean": "이제 와서 돌아갈 순 없어!",
						"english": "We can't go back now!",
						"japanese": "今さら引き返せない！",
						"chinese": "现在回头已经来不及了！",
						"french": "Il est trop tard pour faire demi-tour !",
						"spanish": "¡Ya no podemos volver!",
						"vietnamese": "Giờ quay lại thì không được nữa rồi!",
						"thai": "ตอนนี้กลับไม่ได้แล้ว!",
						"hindi": "अब पीछे नहीं हट सकते!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내가… 내가 그 사람을 망쳤어.",
						"english": "I... I ruined that person.",
						"japanese": "私が… 私が彼を破滅させた。",
						"chinese": "我……我毁了他。",
						"french": "J'ai... j'ai ruiné cette personne.",
						"spanish": "Yo... yo arruiné a esa persona.",
						"vietnamese": "Tôi... tôi đã hủy hoại người đó.",
						"thai": "ฉัน... ฉันทำให้เขาพัง",
						"hindi": "मैंने... मैंने उस व्यक्ति को बर्बाद कर दिया।"
					},
					"speaker": "Astri",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야. 진실을 밝히러 온 거잖아.",
						"english": "What are you talking about? We came here to reveal the truth.",
						"japanese": "何を言ってるんだ。真実を明らかにするために来たんじゃないか。",
						"chinese": "你在说什么。我们是来揭露真相的。",
						"french": "Qu'est-ce que tu racontes ? On est là pour révéler la vérité.",
						"spanish": "¿De qué hablas? Vinimos a revelar la verdad.",
						"vietnamese": "Ngươi đang nói gì vậy. Chúng ta đến đây để tiết lộ sự thật mà.",
						"thai": "พูดอะไรน่ะ? เรามาที่นี่เพื่อเปิดเผยความจริงนะ",
						"hindi": "यह क्या बात कर रहे हो। हम यहाँ सच सामने लाने आए हैं।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…겨울은, 너를 삼킬 것이다.",
						"english": "...Winter shall devour you.",
						"japanese": "…冬は、お前を飲み込むだろう。",
						"chinese": "……冬天，会将你吞噬。",
						"french": "...L'hiver te consumera.",
						"spanish": "...El invierno te engullirá.",
						"vietnamese": "...Mùa đông, sẽ nuốt chửng ngươi.",
						"thai": "...ฤดูหนาว จะกลืนกินเจ้า",
						"hindi": "...सर्दी, तुम्हें निगल जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "Astri"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석군.",
						"english": "Foolish.",
						"japanese": "愚かだ。",
						"chinese": "愚蠢。",
						"french": "Insensé.",
						"spanish": "Necio.",
						"vietnamese": "Ngốc nghếch.",
						"thai": "โง่เขลา",
						"hindi": "मूर्ख।"
					},
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막았다.",
						"english": "A massive shadow bars the way.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "巨大的黑影挡住了去路。",
						"french": "Une ombre colossale obstrue le passage.",
						"spanish": "Una sombra inmensa bloqueaba el paso.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối.",
						"thai": "เงามืดขนาดมหึมาขวางทางอยู่",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…잊혀진 과거는, 사라지는 게 좋아.",
						"english": "...It's better for forgotten pasts to vanish.",
						"japanese": "…忘れ去られた過去は、消え去るのがいい。",
						"chinese": "……被遗忘的过去，最好还是消失吧。",
						"french": "...Les passés oubliés doivent disparaître.",
						"spanish": "...Los pasados olvidados, mejor que se desvanezcan.",
						"vietnamese": "...Những quá khứ bị lãng quên, tốt nhất nên biến mất.",
						"thai": "...อดีตที่ถูกลืมเลือน ควรจะหายไปเสียดีกว่า",
						"hindi": "...भूला हुआ अतीत, मिट जाना ही बेहतर है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너… 누구야.",
						"english": "You... who are you?",
						"japanese": "お前…誰だ。",
						"chinese": "你……是谁？",
						"french": "Toi... qui es-tu ?",
						"spanish": "Tú... ¿quién eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "เจ้า...เป็นใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"speaker": "Astri"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너를 막으려는 자.",
						"english": "The one who would stop you.",
						"japanese": "お前を止めようとする者。",
						"chinese": "欲阻止你之人。",
						"french": "Celui qui te barrera la route.",
						"spanish": "El que busca detenerte.",
						"vietnamese": "Kẻ muốn ngăn cản ngươi.",
						"thai": "ผู้ที่ต้องการหยุดยั้งเจ้า",
						"hindi": "तुम्हें रोकने वाला।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "길을 비켜라!",
						"english": "Clear the path!",
						"japanese": "道を開けろ！",
						"chinese": "让路！",
						"french": "Fais place !",
						"spanish": "¡Abre paso!",
						"vietnamese": "Tránh đường!",
						"thai": "หลีกทาง!",
						"hindi": "रास्ता छोड़ो!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨울은, 다시 찾아올 것이다.",
						"english": "...Winter shall return.",
						"japanese": "…冬は、また訪れるだろう。",
						"chinese": "……冬天，还会再次降临。",
						"french": "...L'hiver reviendra.",
						"spanish": "...El invierno, regresará.",
						"vietnamese": "...Mùa đông, sẽ lại đến.",
						"thai": "...ฤดูหนาว จะกลับมาอีกครั้ง",
						"hindi": "...सर्दी, फिर आएगी।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Astri"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…다시, 시작되겠지.",
						"english": "...It will begin again.",
						"japanese": "…再び、始まるだろう。",
						"chinese": "……又会再次开始吧。",
						"french": "...Ça recommencera.",
						"spanish": "...Volverá a empezar.",
						"vietnamese": "...Lại sẽ bắt đầu thôi.",
						"thai": "...จะเริ่มต้นใหม่อีกครั้ง",
						"hindi": "...फिर से, शुरू होगा।"
					}
				},
				{
					"content": {
						"korean": "겨울의 여왕을 향한 길은, 더욱 깊은 곳으로 이어지고 있었다.",
						"english": "The path to the Winter Queen led deeper still.",
						"japanese": "冬の女王への道は、さらに深い場所へと続いていた。",
						"chinese": "通往寒冬女王的道路，正通往更深之处。",
						"french": "Le chemin vers la Reine d'Hiver menait toujours plus profond.",
						"spanish": "El camino a la Reina del Invierno se adentraba más.",
						"vietnamese": "Con đường đến Nữ hoàng Mùa đông dẫn sâu hơn.",
						"thai": "เส้นทางสู่ราชินีเหมันต์ นำไปสู่สถานที่ที่ลึกลงไปอีก",
						"hindi": "शीत ऋतु की रानी की ओर का रास्ता, और भी गहरे स्थान की ओर जा रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
