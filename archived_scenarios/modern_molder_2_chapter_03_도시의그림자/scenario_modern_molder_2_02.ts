export const scenario_modern_molder_2_02 = {
	"scenario_id": "modern_molder_2_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 공장 지대. 도시의 폐기물이 이곳에 잠들었다.",
						"english": "Abandoned factory district. The city's waste sleeps here.",
						"japanese": "廃墟の工場地帯。都市の廃棄物がここで眠っている。",
						"chinese": "废弃的工厂区。城市的废弃物在此沉睡。",
						"french": "Zone industrielle abandonnée. Les déchets de la ville dorment ici.",
						"spanish": "Distrito de fábricas abandonadas. Los desechos de la ciudad duermen aquí.",
						"vietnamese": "Khu công nghiệp bỏ hoang. Chất thải của thành phố nằm im lìm ở đây.",
						"thai": "เขตโรงงานร้าง. ของเสียจากเมืองหลับใหลอยู่ที่นี่.",
						"hindi": "परित्यक्त कारखाना क्षेत्र। शहर का कचरा यहीं सो रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "냄새 지독해… 폐기물만 있는 게 아닌데?",
						"english": "The smell is terrible... It's not just waste, is it?",
						"japanese": "匂いがひどい…廃棄物だけじゃないのか？",
						"chinese": "味道真糟糕…不只是废弃物吧？",
						"french": "L'odeur est horrible... Ce n'est pas que des déchets, n'est-ce pas ?",
						"spanish": "El olor es horrible... ¿No es solo basura, verdad?",
						"vietnamese": "Mùi kinh khủng... Không chỉ có chất thải thôi đâu nhỉ?",
						"thai": "กลิ่นเหม็นมาก... ไม่ใช่แค่ขยะนี่?",
						"hindi": "बदबू बहुत तेज़ है... सिर्फ कचरा ही नहीं है ना?"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"content": {
						"korean": "맞아요. 단순한 폐기물이 아니에요. 뭔가 더 깊어요.",
						"english": "You're right. It's not mere waste. It's something deeper.",
						"japanese": "その通り。単なる廃棄物じゃない。もっと根深い。",
						"chinese": "没错。这不是单纯的废弃物。有更深层的东西。",
						"french": "Exactement. Ce ne sont pas de simples déchets. C'est quelque chose de plus profond.",
						"spanish": "Tienes razón. No es solo basura. Es algo más profundo.",
						"vietnamese": "Đúng vậy. Không phải chất thải đơn thuần. Có điều gì đó sâu xa hơn.",
						"thai": "ถูกต้อง. นี่ไม่ใช่แค่ขยะธรรมดา. มันมีอะไรลึกซึ้งกว่านั้น.",
						"hindi": "सही कहा। यह सिर्फ कचरा नहीं है। कुछ और गहरा है।"
					},
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 오염은… 자연적이지 않아요.",
						"english": "This contamination... it's not natural.",
						"japanese": "この汚染は…自然なものじゃない。",
						"chinese": "这污染…并非自然形成。",
						"french": "Cette contamination... ce n'est pas naturel.",
						"spanish": "Esta contaminación... no es natural.",
						"vietnamese": "Sự ô nhiễm này... không phải tự nhiên.",
						"thai": "มลพิษนี้... มันไม่เป็นธรรมชาติ.",
						"hindi": "यह प्रदूषण... प्राकृतिक नहीं है।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 인공적이라는 거야?",
						"english": "So it's artificial?",
						"japanese": "じゃあ人工的ってこと？",
						"chinese": "那么是人工的吗？",
						"french": "Alors c'est artificiel ?",
						"spanish": "¿Entonces es artificial?",
						"vietnamese": "Vậy là do con người tạo ra à?",
						"thai": "ถ้างั้นก็เป็นฝีมือมนุษย์เหรอ?",
						"hindi": "तो क्या यह कृत्रिम है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그보다 더해요. 이 모든 게 어떤… 의도 같아요.",
						"english": "It's more than that. It feels like... some intention.",
						"japanese": "それよりもっとだ。これらすべて、何かの…意図のようだ。",
						"chinese": "不止如此。这一切都像是…某种意图。",
						"french": "C'est plus que ça. Tout cela semble être... une intention.",
						"spanish": "Es más que eso. Todo esto parece... una intención.",
						"vietnamese": "Hơn thế nữa. Tất cả những điều này... như thể có một ý đồ.",
						"thai": "มากกว่านั้นอีก. ทั้งหมดนี่เหมือนกับว่า... มีเจตนาบางอย่าง.",
						"hindi": "यह उससे कहीं ज़्यादा है। यह सब कुछ... किसी इरादे जैसा लगता है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "버려진 공장 안에서 이상한 기계음이 들려요.",
						"english": "Strange mechanical sounds echo from the abandoned factory.",
						"japanese": "廃工場から奇妙な機械音が響く。",
						"chinese": "废弃工厂里传来奇怪的机械声。",
						"french": "D'étranges bruits mécaniques résonnent de l'usine abandonnée.",
						"spanish": "Extraños sonidos mecánicos resuenan en la fábrica abandonada.",
						"vietnamese": "Những âm thanh cơ khí kỳ lạ vọng ra từ nhà máy bỏ hoang.",
						"thai": "เสียงเครื่องจักรแปลกๆ ดังมาจากโรงงานร้าง",
						"hindi": "परित्यक्त कारखाने से अजीब यांत्रिक ध्वनियाँ गूँज रही हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "그리고 썩어가는 냄새도… 일반적인 폐기물이 아니에요.",
						"english": "And a rotting smell too... This isn't ordinary waste.",
						"japanese": "そして腐敗臭も…これは普通の廃棄物じゃない。",
						"chinese": "还有一股腐烂的味道…这可不是普通的废弃物。",
						"french": "Et une odeur de pourriture aussi... Ce ne sont pas des déchets ordinaires.",
						"spanish": "Y un olor a putrefacción también... Esto no son residuos ordinarios.",
						"vietnamese": "Và cả một mùi thối rữa nữa... Đây không phải là chất thải thông thường.",
						"thai": "และกลิ่นเหม็นเน่าด้วย… นี่ไม่ใช่ขยะธรรมดา",
						"hindi": "और एक सड़ी हुई गंध भी... यह सामान्य कचरा नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 이상해지는군.",
						"english": "It's getting stranger and stranger.",
						"japanese": "ますますおかしくなってきた。",
						"chinese": "事情变得越来越奇怪了。",
						"french": "Ça devient de plus en plus étrange.",
						"spanish": "Cada vez es más extraño.",
						"vietnamese": "Nó ngày càng trở nên kỳ lạ.",
						"thai": "มันแปลกขึ้นเรื่อยๆ",
						"hindi": "यह और भी अजीब होता जा रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 단순한 오염이 아니라… 어떤 징조예요.",
						"english": "This isn't just pollution... It's a sign.",
						"japanese": "これは単なる汚染じゃない…何かの兆候だ。",
						"chinese": "这不仅仅是污染…这是一种征兆。",
						"french": "Ce n'est pas seulement de la pollution... C'est un signe.",
						"spanish": "Esto no es solo contaminación... Es una señal.",
						"vietnamese": "Đây không chỉ là ô nhiễm... Đây là một điềm báo.",
						"thai": "นี่ไม่ใช่แค่มลพิษ... แต่มันเป็นลางบอกเหตุ",
						"hindi": "यह सिर्फ प्रदूषण नहीं है... यह एक संकेत है।"
					},
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 갈수록 더 위험해질 거예요.",
						"english": "The deeper we go, the more dangerous it will get.",
						"japanese": "深く潜るほど、危険が増すだろう。",
						"chinese": "我们走得越深，就会越危险。",
						"french": "Plus nous irons loin, plus ce sera dangereux.",
						"spanish": "Cuanto más nos adentremos, más peligroso será.",
						"vietnamese": "Càng đi sâu, càng nguy hiểm.",
						"thai": "ยิ่งเราเข้าไปลึกเท่าไหร่ ยิ่งอันตรายมากขึ้นเท่านั้น",
						"hindi": "जितना गहरा हम जाएंगे, उतना ही खतरनाक होता जाएगा।"
					},
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "I can't stop.",
						"japanese": "止められない。",
						"chinese": "我不能停下来。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Tôi không thể dừng lại.",
						"thai": "ฉันหยุดไม่ได้",
						"hindi": "मैं रुक नहीं सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "그럼… 조심해요. 뭔가 다가오고 있어요.",
						"english": "Then... be careful. Something is coming.",
						"japanese": "ならば…気をつけろ。何かが来る。",
						"chinese": "那么…小心。有什么东西来了。",
						"french": "Alors... sois prudent. Quelque chose arrive.",
						"spanish": "Entonces... ten cuidado. Algo se acerca.",
						"vietnamese": "Vậy thì... hãy cẩn thận. Có thứ gì đó đang đến.",
						"thai": "ถ้าอย่างนั้น... ระวังให้ดี มีบางอย่างกำลังมา",
						"hindi": "तो... सावधान रहो। कुछ आ रहा है।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… {random_boss}는 끝이 아니다…",
						"english": "Futile resistance… {random_boss} is not the end…",
						"japanese": "無駄な抵抗… {random_boss}は終わりではない…",
						"chinese": "徒劳的抵抗……{random_boss}并非终点……",
						"french": "Résistance futile… {random_boss} n'est pas la fin…",
						"spanish": "Resistencia inútil… {random_boss} no es el final…",
						"vietnamese": "Kháng cự vô ích… {random_boss} chưa phải là kết thúc…",
						"thai": "การต่อต้านที่ไร้ประโยชน์… {random_boss} ไม่ใช่จุดจบ…",
						"hindi": "व्यर्थ का प्रतिरोध… {random_boss} अंत नहीं है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "부패는… 깊다…",
						"english": "The corruption… runs deep…",
						"japanese": "腐敗は…深い…",
						"chinese": "腐败……根深蒂固……",
						"french": "La corruption… est profonde…",
						"spanish": "La corrupción… es profunda…",
						"vietnamese": "Sự thối rữa… thật sâu sắc…",
						"thai": "การทุจริต… หยั่งลึก…",
						"hindi": "भ्रष्टाचार… गहरा है…"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어. 더 깊은 곳에 뭐가 있든.",
						"english": "It's not over yet. Whatever lies deeper.",
						"japanese": "まだ終わってない。奥に何が潜んでいようと。",
						"chinese": "还没结束。无论更深处有什么。",
						"french": "Ce n'est pas encore fini. Peu importe ce qui se trouve plus profond.",
						"spanish": "Aún no ha terminado. Haya lo que haya más profundo.",
						"vietnamese": "Chưa kết thúc đâu. Dù có gì sâu hơn nữa.",
						"thai": "ยังไม่จบ ไม่ว่าอะไรจะอยู่ลึกกว่านั้นก็ตาม",
						"hindi": "अभी खत्म नहीं हुआ है। जो भी गहराई में हो।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "오염원은 사라졌지만, 도시의 상처는 더 깊어졌다.",
						"english": "The source of corruption is gone, but the city's wounds run deeper.",
						"japanese": "汚染源は消えたが、都市の傷はより深くなった。",
						"chinese": "污染源消失了，但城市的创伤更深了。",
						"french": "La source de la corruption a disparu, mais les blessures de la ville sont plus profondes.",
						"spanish": "La fuente de corrupción se ha ido, pero las heridas de la ciudad son más profundas.",
						"vietnamese": "Nguồn ô nhiễm đã biến mất, nhưng vết thương của thành phố ngày càng sâu hơn.",
						"thai": "แหล่งกำเนิดมลทินหายไปแล้ว แต่บาดแผลของเมืองกลับลึกกว่าเดิม",
						"hindi": "भ्रष्टाचार का स्रोत चला गया, लेकिन शहर के घाव गहरे हो गए हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과거의 그림자가 서서히 본색을 드러내기 시작했다.",
						"english": "The shadows of the past slowly began to reveal their true colors.",
						"japanese": "過去の影が徐々にその本性を現し始めた。",
						"chinese": "过去的阴影开始慢慢显露出它们的真面目。",
						"french": "Les ombres du passé ont lentement commencé à révéler leurs vraies couleurs.",
						"spanish": "Las sombras del pasado comenzaron a revelar lentamente sus verdaderos colores.",
						"vietnamese": "Bóng tối của quá khứ dần dần bắt đầu lộ rõ bản chất thật.",
						"thai": "เงามืดในอดีตเริ่มเผยโฉมที่แท้จริงอย่างช้าๆ",
						"hindi": "अतीत की परछाइयाँ धीरे-धीरे अपना असली रंग दिखाने लगीं।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "발버둥 쳐봐야… 아무것도 바꾸지 못한다.",
						"english": "Struggling… changes nothing.",
						"japanese": "もがいても…何も変わらない。",
						"chinese": "挣扎……什么都改变不了。",
						"french": "Lutter… ne change rien.",
						"spanish": "Luchar… no cambia nada.",
						"vietnamese": "Dù có vùng vẫy… cũng chẳng thay đổi được gì.",
						"thai": "ดิ้นรนไปก็… ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "संघर्ष करने से… कुछ भी नहीं बदलेगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 돌아올 거야…!",
						"english": "I'll be back…!",
						"japanese": "また戻ってくる…！",
						"chinese": "我会再回来的……！",
						"french": "Je reviendrai… !",
						"spanish": "¡Volveré…!",
						"vietnamese": "Ta sẽ trở lại…!",
						"thai": "ฉันจะกลับมา…!",
						"hindi": "मैं वापस आऊँगा…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 형체를 알 수 없었다.",
						"english": "A colossal shadow blocked the path. Its form was indiscernible.",
						"japanese": "巨大な影が道を塞いだ。その形は判別できなかった。",
						"chinese": "一个巨大的影子挡住了去路。其形体无法辨认。",
						"french": "Une ombre colossale bloquait le chemin. Sa forme était indiscernable.",
						"spanish": "Una sombra colosal bloqueó el camino. Su forma era indiscernible.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Hình dạng của nó không thể phân biệt được.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ รูปร่างของมันยากจะแยกแยะได้",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। उसका रूप अस्पष्ट था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 것들… 진실은 너희를 해칠 뿐이다.",
						"english": "Foolish ones... The truth will only harm you.",
						"japanese": "愚かな者たちよ…真実はお前たちを傷つけるだけだ。",
						"chinese": "愚蠢之辈…真相只会伤害你们。",
						"french": "Insensés... La vérité ne fera que vous nuire.",
						"spanish": "Necios... La verdad solo os hará daño.",
						"vietnamese": "Những kẻ ngu ngốc... Sự thật sẽ chỉ làm tổn thương các ngươi.",
						"thai": "พวกโง่เขลา... ความจริงจะทำร้ายเจ้าเท่านั้น",
						"hindi": "मूर्खों... सच तुम्हें केवल नुकसान पहुँचाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 오염을 만든 원흉이군.",
						"english": "You're the one who caused this pollution.",
						"japanese": "お前がこの汚染を引き起こした元凶だな。",
						"chinese": "你就是造成这场污染的罪魁祸首。",
						"french": "C'est toi le responsable de cette pollution.",
						"spanish": "Tú eres el que causó esta contaminación.",
						"vietnamese": "Ngươi chính là kẻ đã gây ra ô nhiễm này.",
						"thai": "แกคือต้นเหตุของมลพิษนี้",
						"hindi": "तुम ही हो जिसने इस प्रदूषण का कारण बना।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도망쳐요! 너무 강해요!",
						"english": "Run! Too strong!",
						"japanese": "逃げて！強すぎる！",
						"chinese": "快逃！太强了！",
						"french": "Fuyez ! Trop fort !",
						"spanish": "¡Huyan! ¡Demasiado fuerte!",
						"vietnamese": "Chạy đi! Hắn quá mạnh!",
						"thai": "หนีไป! แข็งแกร่งเกินไป!",
						"hindi": "भागो! बहुत शक्तिशाली है!"
					},
					"speaker": "bex"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 잊힌 심장부, 폐기물 더미는 침묵했다.",
			"그러나 그 아래, 부패는 더욱 깊게 스며들고 있었다.",
			"기이한 흔적들, 썩어가는 냄새…",
			"단순한 오염이 아니었다. 어떤 징조였다."
		],
		"english": [
			"In the city's forgotten heart, the waste piles lay silent.",
			"Yet beneath, decay seeped even deeper.",
			"Strange traces, a scent of decay...",
			"It wasn't mere contamination. It was a sign."
		],
		"japanese": [
			"都市の忘れられた中心部、廃棄物の山は沈黙していた。",
			"しかしその下では、腐敗がさらに深く浸透していた。",
			"奇妙な痕跡、腐敗する匂い…",
			"単なる汚染ではなかった。ある徴候だった。"
		],
		"chinese": [
			"在城市被遗忘的心脏，废墟堆寂静无声。",
			"然而其下，腐败却渗入得更深。",
			"奇异的痕迹，腐烂的气味…",
			"这并非单纯的污染。这是一种征兆。"
		],
		"french": [
			"Au cœur oublié de la ville, les tas de déchets gisaient en silence.",
			"Pourtant, en dessous, la corruption s'infiltrait plus profondément.",
			"Des traces étranges, une odeur de décomposition...",
			"Ce n'était pas une simple contamination. C'était un signe."
		],
		"spanish": [
			"En el corazón olvidado de la ciudad, las pilas de desechos yacían en silencio.",
			"Sin embargo, debajo, la putrefacción se filtraba aún más profundo.",
			"Huellas extrañas, un olor a putrefacción...",
			"No era una simple contaminación. Era un presagio."
		],
		"vietnamese": [
			"Tại trái tim lãng quên của thành phố, đống chất thải im lìm.",
			"Thế nhưng bên dưới, sự thối rữa càng ngấm sâu hơn.",
			"Những dấu vết kỳ lạ, mùi mục rữa...",
			"Đó không phải chỉ là ô nhiễm. Đó là một điềm báo."
		],
		"thai": [
			"ในใจกลางที่ถูกลืมเลือนของเมือง กองขยะเงียบสงบ.",
			"แต่ข้างใต้ ความเน่าเปื่อยกลับซึมลึกยิ่งขึ้น.",
			"ร่องรอยประหลาด กลิ่นเหม็นเน่า...",
			"นี่ไม่ใช่แค่การปนเปื้อนธรรมดา. มันเป็นลางบอกเหตุ."
		],
		"hindi": [
			"शहर के भूले हुए दिल में, कचरे के ढेर खामोश पड़े थे。",
			"फिर भी, उसके नीचे, सड़न और गहरी होती जा रही थी।",
			"अजीबोगरीब निशान, सड़ी हुई गंध...",
			"यह सिर्फ प्रदूषण नहीं था। यह एक संकेत था।"
		]
	}
} as const;
