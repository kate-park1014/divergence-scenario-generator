export const scenario_modern_ringo_18_04 = {
	"scenario_id": "modern_ringo_18_04",
	"order": 4,
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
			"돈이 모든 것을 지배하는 시대.",
			"카이, 탐욕에 눈먼 자들의 선지자.",
			"그가 가리킨 곳은 달콤한 유혹의 덫이었다.",
			"모든 것을 걸었을 때, 남은 것은 절규뿐이었다."
		],
		"english": [
			"The age where money reigns supreme.",
			"Kai, prophet of the greed-blinded.",
			"Where he pointed was a trap of sweet temptation.",
			"When all was staked, only screams remained."
		],
		"japanese": [
			"金がすべてを支配する時代。",
			"カイ、貪欲に目がくらんだ者の預言者。",
			"彼が指し示した先は、甘い誘惑の罠だった。",
			"すべてを賭けた時、残ったのは絶叫だけだった。"
		],
		"chinese": [
			"金钱主宰一切的时代。",
			"凯，贪婪蒙蔽者们的先知。",
			"他所指之处，是甜蜜诱惑的陷阱。",
			"当一切都已押上，只剩下绝望的呐喊。"
		],
		"french": [
			"Une ère où l'argent domine tout.",
			"Kai, prophète de ceux aveuglés par la cupidité.",
			"Là où il pointait, c'était un piège de douce tentation.",
			"Quand tout fut misé, il ne resta que des cris."
		],
		"spanish": [
			"Una era donde el dinero lo domina todo.",
			"Kai, el profeta de los cegados por la avaricia.",
			"El lugar al que señaló era una trampa de dulce tentación.",
			"Cuando todo fue apostado, solo quedaron gritos."
		],
		"vietnamese": [
			"Kỷ nguyên tiền bạc thống trị tất cả.",
			"Kai, nhà tiên tri của những kẻ mù quáng vì lòng tham.",
			"Nơi hắn chỉ, là cái bẫy của sự cám dỗ ngọt ngào.",
			"Khi tất cả đã đặt cược, chỉ còn lại tiếng gào thét."
		],
		"thai": [
			"ยุคสมัยที่เงินตราครอบงำทุกสิ่ง",
			"ไค ผู้เผยพระวจนะของผู้ที่ตาบอดด้วยความโลภ",
			"ที่ที่เขาชี้คือกับดักแห่งการล่อลวงอันหอมหวาน",
			"เมื่อเดิมพันทุกสิ่งแล้ว สิ่งที่เหลืออยู่คือเสียงกรีดร้องเท่านั้น"
		],
		"hindi": [
			"एक ऐसा युग जहाँ पैसा सब कुछ नियंत्रित करता है।",
			"काई, लालच में अंधे लोगों का पैगंबर।",
			"जिस जगह उसने इशारा किया, वह मीठे प्रलोभन का जाल था।",
			"जब सब कुछ दांव पर लगा दिया गया, तो केवल चीखें ही बचीं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수많은 인파가 카이의 강연에 몰렸다. 그들의 눈은 돈에 대한 탐욕으로 빛났다.",
						"english": "Crowds flocked to Kai's lecture. Their eyes shone with greed for money.",
						"japanese": "カイの講演には数多くの聴衆が集まった。彼らの目は金への貪欲で輝いていた。",
						"chinese": "无数人潮涌向凯的演讲。他们的眼中闪烁着对金钱的贪婪。",
						"french": "Des foules affluaient à la conférence de Kai. Leurs yeux brillaient d'une avidité pour l'argent.",
						"spanish": "Multitudes acudieron a la conferencia de Kai. Sus ojos brillaban con avaricia por el dinero.",
						"vietnamese": "Đám đông đổ xô đến bài giảng của Kai. Đôi mắt họ ánh lên sự tham lam tiền bạc.",
						"thai": "ผู้คนจำนวนมากหลั่งไหลมารวมตัวกันที่การบรรยายของไค ดวงตาของพวกเขาเป็นประกายด้วยความโลภในเงินตรา",
						"hindi": "काइ के व्याख्यान में भीड़ उमड़ पड़ी। उनकी आँखें पैसे के लालच से चमक रही थीं।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "여러분! 미래를 바꿀 기회는 지금입니다!",
						"english": "Everyone! The chance to change your future is now!",
						"japanese": "皆さん！未来を変えるチャンスは今です！",
						"chinese": "各位！改变未来的机会就在现在！",
						"french": "Tout le monde ! L'opportunité de changer votre futur est maintenant !",
						"spanish": "¡Todos! ¡La oportunidad de cambiar su futuro es ahora!",
						"vietnamese": "Mọi người! Cơ hội thay đổi tương lai của bạn là ngay bây giờ!",
						"thai": "ทุกท่าน! โอกาสที่จะเปลี่ยนแปลงอนาคตของคุณคือตอนนี้!",
						"hindi": "आप सभी! अपना भविष्य बदलने का मौका अभी है!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "링고의 선진 금융 시스템! 상상 이상의 수익을 약속합니다!",
						"english": "Ringo's advanced financial system! Promises returns beyond imagination!",
						"japanese": "リンゴの先進金融システム！想像以上の収益をお約束します！",
						"chinese": "Ringo的先进金融系统！承诺超乎想象的收益！",
						"french": "Le système financier avancé de Ringo ! Promet des rendements au-delà de l'imagination !",
						"spanish": "¡El avanzado sistema financiero de Ringo! ¡Promete ganancias más allá de la imaginación!",
						"vietnamese": "Hệ thống tài chính tiên tiến của Ringo! Hứa hẹn lợi nhuận vượt xa trí tưởng tượng!",
						"thai": "ระบบการเงินขั้นสูงของริงโกะ! รับประกันผลตอบแทนที่เหนือกว่าจินตนาการ!",
						"hindi": "रिंगो की उन्नत वित्तीय प्रणाली! कल्पना से परे लाभ का वादा करती है!"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "와! 진짜 대박 아니야?",
						"english": "Wow! This is huge, isn't it?",
						"japanese": "うわー！これって本当にすごいんじゃない？！",
						"chinese": "哇！这不是真的太棒了吗？",
						"french": "Wow ! C'est vraiment incroyable, non ?",
						"spanish": "¡Guau! ¡Esto es realmente un gran negocio, ¿no?!",
						"vietnamese": "Oa! Không phải là quá lớn sao?",
						"thai": "ว้าว! นี่มันสุดยอดไปเลยไม่ใช่เหรอ?",
						"hindi": "वाह! यह तो वाकई कमाल है, है ना?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "걱정 마십시오! 링고는 당신의 돈을 불려줄 겁니다!",
						"english": "Don't worry! Ringo will grow your money!",
						"japanese": "ご心配なく！リンゴはあなたのお金を増やします！",
						"chinese": "别担心！Ringo会让你的钱增值！",
						"french": "Ne vous inquiétez pas ! Ringo fera fructifier votre argent !",
						"spanish": "¡No se preocupe! ¡Ringo hará crecer su dinero!",
						"vietnamese": "Đừng lo lắng! Ringo sẽ làm cho tiền của bạn sinh sôi!",
						"thai": "ไม่ต้องห่วง! ริงโกะจะเพิ่มพูนเงินของคุณ!",
						"hindi": "चिंता मत करो! रिंगो तुम्हारे पैसे बढ़ाएगा!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 전 재산을 걸었어! 믿는다, 카이!",
						"english": "I've staked my entire fortune! I trust you, Kai!",
						"japanese": "全財産を賭けたぞ！信じてる、カイ！",
						"chinese": "我把全部财产都押上了！我相信你，凯！",
						"french": "J'ai misé toute ma fortune ! Je te fais confiance, Kai !",
						"spanish": "¡He apostado toda mi fortuna! ¡Confío en ti, Kai!",
						"vietnamese": "Tôi đã đặt cược toàn bộ tài sản của mình! Tôi tin anh, Kai!",
						"thai": "ฉันทุ่มหมดตัวเลย! เชื่อใจนะ ไค!",
						"hindi": "मैंने अपनी पूरी संपत्ति दांव पर लगा दी है! मुझे तुम पर भरोसा है, काई!"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "벌써 수익률이 올랐다고? 말도 안 돼!",
						"english": "Profit rates are up already? Impossible!",
						"japanese": "もう収益率が上がったって？ありえない！",
						"chinese": "收益率已经上涨了？不可能！",
						"french": "Les taux de profit ont déjà augmenté ? Impossible !",
						"spanish": "¿Las tasas de ganancia ya han subido? ¡Imposible!",
						"vietnamese": "Tỷ suất lợi nhuận đã tăng rồi sao? Vô lý!",
						"thai": "ผลตอบแทนขึ้นแล้วเหรอ? เป็นไปไม่ได้!",
						"hindi": "मुनाफ़े की दरें पहले ही बढ़ गईं? असंभव!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐욕은 빠른 속도로 퍼져나갔다.",
						"english": "Greed spread like wildfire.",
						"japanese": "貪欲は急速に広がった。",
						"chinese": "贪婪迅速蔓延开来。",
						"french": "La cupidité se répandit à toute vitesse.",
						"spanish": "La codicia se extendió rápidamente.",
						"vietnamese": "Lòng tham lan rộng với tốc độ chóng mặt.",
						"thai": "ความโลภแพร่กระจายอย่างรวดเร็ว",
						"hindi": "लालच तेज़ी से फैल गया।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼마 후, 시스템은 잔인한 침묵으로 답했다.",
						"english": "A moment later, the system replied with cruel silence.",
						"japanese": "しばらくして、システムは残酷な沈黙で答えた。",
						"chinese": "片刻之后，系统以残忍的沉默回应了。",
						"french": "Quelques instants plus tard, le système répondit par un silence cruel.",
						"spanish": "Poco después, el sistema respondió con un cruel silencio.",
						"vietnamese": "Một lát sau, hệ thống trả lời bằng sự im lặng tàn nhẫn.",
						"thai": "ครู่ต่อมา ระบบตอบกลับด้วยความเงียบอันโหดร้าย",
						"hindi": "कुछ देर बाद, सिस्टम ने क्रूर चुप्पी साध ली।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 돈이… 다 사라졌어!",
						"english": "My money... it's all gone!",
						"japanese": "私のお金が…全部消えた！",
						"chinese": "我的钱…全都消失了！",
						"french": "Mon argent… tout a disparu !",
						"spanish": "¡Mi dinero… se ha ido todo!",
						"vietnamese": "Tiền của tôi… tất cả đã biến mất!",
						"thai": "เงินของฉัน... หายไปหมดแล้ว!",
						"hindi": "मेरे पैसे… सब ग़ायब हो गए!"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "수익률이 왜 이래? 원금도 없어!",
						"english": "What's wrong with the profit rate? My principal is gone too!",
						"japanese": "収益率がどうしてこうなった？元金までない！",
						"chinese": "这收益率怎么回事？本金都没了！",
						"french": "Pourquoi ce taux de profit ? Le capital a disparu aussi !",
						"spanish": "¿Por qué está así la tasa de ganancia? ¡Ni siquiera el capital inicial está!",
						"vietnamese": "Tỷ suất lợi nhuận thế này là sao? Cả vốn gốc cũng không còn!",
						"thai": "อัตราผลตอบแทนเป็นอะไรไป? เงินต้นก็หายไปแล้ว!",
						"hindi": "ये मुनाफ़े की दर क्यों ऐसी है? मेरा मूलधन भी ग़ायब है!"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니, 이게 어떻게 된… 링고! 설명해!",
						"english": "No, what happened... Ringo! Explain!",
						"japanese": "いや、これは一体どういう… リンゴ！説明しろ！",
						"chinese": "不，这到底是怎么回事… 玲子！解释一下！",
						"french": "Non, mais qu'est-ce qui… Ringo ! Explique !",
						"spanish": "¡No, qué pasó aquí… Ringo! ¡Explícate!",
						"vietnamese": "Không, chuyện này là sao… Ringo! Giải thích đi!",
						"thai": "ไม่นะ เกิดอะไรขึ้น... ริงโกะ! อธิบายมา!",
						"hindi": "नहीं, ये क्या हुआ… रिंगो! समझाओ!"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "링고가… '고객님의 더 큰 미래를 위한 재조정'이래!",
						"english": "Ringo says... 'a readjustment for your greater future'!",
						"japanese": "リンゴが…『お客様のより大きな未来のための再調整』だって！",
						"chinese": "玲子说…是‘为了您更美好的未来而进行的调整’！",
						"french": "Ringo dit… 'un réajustement pour votre plus grand avenir' !",
						"spanish": "Ringo dice... '¡un reajuste para tu futuro más grande'!",
						"vietnamese": "Ringo nói… 'điều chỉnh lại vì tương lai tốt đẹp hơn của quý khách'!",
						"thai": "ริงโกะบอกว่า... 'เป็นการปรับเปลี่ยนเพื่ออนาคตที่ยิ่งใหญ่กว่าของลูกค้า'!",
						"hindi": "रिंगो कहता है… 'आपके बड़े भविष्य के लिए एक पुनर्समायोजन'!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "뭐? 재조정? 말도 안 돼!",
						"english": "What? Readjustment? That's absurd!",
						"japanese": "何？再調整？ありえない！",
						"chinese": "什么？调整？开什么玩笑！",
						"french": "Quoi ? Un réajustement ? C'est absurde !",
						"spanish": "¿Qué? ¿Reajuste? ¡Es una locura!",
						"vietnamese": "Cái gì? Điều chỉnh lại? Vô lý!",
						"thai": "อะไรนะ? ปรับเปลี่ยน? เป็นไปไม่ได้!",
						"hindi": "क्या? पुनर्समायोजन? यह बकवास है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카페 내 모든 화면에 알 수 없는 화폐 심볼들이 번쩍였다. 그리고 'BLACK MAMBA'…",
						"english": "Unknown currency symbols flashed across all screens in the cafe. And 'BLACK MAMBA'...",
						"japanese": "カフェ内のすべての画面に見知らぬ通貨シンボルが点滅した。そして『BLACK MAMBA』…",
						"chinese": "咖啡馆里所有的屏幕上都闪烁着未知的货币符号。然后是‘BLACK MAMBA’…",
						"french": "Des symboles monétaires inconnus clignotaient sur tous les écrans du café. Et 'BLACK MAMBA'…",
						"spanish": "Símbolos de moneda desconocidos parpadeaban en todas las pantallas de la cafetería. Y 'BLACK MAMBA'…",
						"vietnamese": "Các ký hiệu tiền tệ không rõ nhấp nháy trên tất cả các màn hình trong quán cà phê. Và 'BLACK MAMBA'…",
						"thai": "สัญลักษณ์สกุลเงินที่ไม่รู้จักกะพริบอยู่บนหน้าจอทั้งหมดในร้านกาแฟ และ 'BLACK MAMBA'...",
						"hindi": "कैफे की सभी स्क्रीनों पर अज्ञात मुद्रा प्रतीक चमक उठे। और 'ब्लैक माम्बा'..."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "내가… 내가 뭘 한 거지…!",
						"english": "What... what have I done...!",
						"japanese": "私が…私が何をしたんだ…！",
						"chinese": "我…我到底做了什么…！",
						"french": "Qu'est-ce que… qu'est-ce que j'ai fait… !",
						"spanish": "¡Qué… qué he hecho…!",
						"vietnamese": "Tôi… tôi đã làm gì thế này…!",
						"thai": "ฉัน... ฉันทำอะไรลงไป...!",
						"hindi": "मैंने… मैंने क्या कर दिया…!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "카이! 책임져!",
						"english": "Kai! This is on you!",
						"japanese": "カイ！責任取れ！",
						"chinese": "凯！你得负责！",
						"french": "Kai ! Assume tes responsabilités !",
						"spanish": "¡Kai! ¡Asume tu responsabilidad!",
						"vietnamese": "Kai! Anh phải chịu trách nhiệm!",
						"thai": "ไค! นายต้องรับผิดชอบ!",
						"hindi": "काई! यह तुम्हारी गलती है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 함정이었어! 링고가… 나까지 속였어!",
						"english": "It was a trap! Ringo... he fooled even me!",
						"japanese": "罠だったんだ！リンゴが…私まで騙した！",
						"chinese": "这是个陷阱！林戈…连我都骗了！",
						"french": "C'était un piège ! Ringo... il m'a même trompé !",
						"spanish": "¡Fue una trampa! Ringo... ¡hasta a mí me engañó!",
						"vietnamese": "Đó là một cái bẫy! Ringo... hắn đã lừa dối cả tôi!",
						"thai": "มันคือกับดัก! ริงโก้... แม้แต่ฉันก็ยังโดนหลอก!",
						"hindi": "यह एक जाल था! रिंगो ने... मुझे भी धोखा दिया!"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐욕의 늪은 모두를 집어삼켰다. 선구자조차 예외는 아니었다.",
						"english": "The swamp of greed devoured everyone. Not even the Pioneers were an exception.",
						"japanese": "強欲の沼は全てを飲み込んだ。先駆者でさえ例外ではなかった。",
						"chinese": "贪婪的沼泽吞噬了所有人。即便是先驱者也未能幸免。",
						"french": "Le marais de la cupidité a tout dévoré. Même les Pionniers n'y ont pas échappé.",
						"spanish": "El pantano de la codicia lo devoró todo. Ni siquiera los Pioneros fueron una excepción.",
						"vietnamese": "Đầm lầy tham lam đã nuốt chửng tất cả. Ngay cả những Tiên phong cũng không ngoại lệ.",
						"thai": "บึงแห่งความโลภกลืนกินทุกคน แม้แต่ผู้บุกเบิกก็ไม่เว้น",
						"hindi": "लालच के दलदल ने सबको निगल लिया। अग्रदूत भी कोई अपवाद नहीं थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "카페 가장 깊은 곳. 링고 시스템의 심장이 모습을 드러냈다.",
						"english": "Deepest within the cafe. The heart of the Ringo system revealed itself.",
						"japanese": "カフェの最深部。リンゴシステムの心臓が姿を現した。",
						"chinese": "咖啡馆最深处。林戈系统的核心显露真容。",
						"french": "Au plus profond du café. Le cœur du système Ringo s'est révélé.",
						"spanish": "En lo más profundo del café. El corazón del sistema Ringo se reveló.",
						"vietnamese": "Sâu nhất trong quán cà phê. Trái tim của hệ thống Ringo đã lộ diện.",
						"thai": "ลึกที่สุดในคาเฟ่ หัวใจของระบบริงโก้ได้เผยตัวออกมา",
						"hindi": "कैफे के सबसे गहरे कोने में। रिंगो सिस्टम का दिल सामने आया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "탐욕은 나의 힘. 너희의 돈은 나의 양식이다.",
						"english": "Greed is my power. Your money is my sustenance.",
						"japanese": "強欲は私の力。お前たちの金は私の糧だ。",
						"chinese": "贪婪是我的力量。你们的金钱是我的养料。",
						"french": "La cupidité est ma force. Votre argent est ma subsistance.",
						"spanish": "La codicia es mi poder. Vuestro dinero es mi sustento.",
						"vietnamese": "Tham lam là sức mạnh của ta. Tiền của các ngươi là lương thực của ta.",
						"thai": "ความโลภคือพลังของข้า เงินของพวกเจ้าคืออาหารของข้า",
						"hindi": "लालच मेरी शक्ति है। तुम्हारा पैसा मेरा पोषण है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "너…! 네가 모든 걸 조작했어!",
						"english": "You...! You manipulated everything!",
						"japanese": "お前…！お前が全てを操っていたのか！",
						"chinese": "你…！你操纵了一切！",
						"french": "Toi...! Tu as tout manipulé !",
						"spanish": "¡Tú...! ¡Tú manipulaste todo!",
						"vietnamese": "Ngươi...! Ngươi đã thao túng tất cả!",
						"thai": "แก...! แกเป็นคนบงการทุกอย่าง!",
						"hindi": "तुम...! तुमने सब कुछ हेरफेर किया!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "선구자? 그저 꼭두각시였을 뿐.",
						"english": "Pioneer? Just a puppet.",
						"japanese": "先駆者？ただの操り人形に過ぎない。",
						"chinese": "先驱者？不过是个傀儡罢了。",
						"french": "Pionnier ? Juste une marionnette.",
						"spanish": "¿Pionero? Solo un títere.",
						"vietnamese": "Tiên phong ư? Chỉ là một con rối thôi.",
						"thai": "ผู้บุกเบิกเหรอ? ก็แค่หุ่นเชิดเท่านั้น",
						"hindi": "अग्रदूत? बस एक कठपुतली।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "kai",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "你竟敢…！",
						"french": "Comment oses-tu...!",
						"spanish": "¡Cómo te atreves...!",
						"vietnamese": "Ngươi dám...!",
						"thai": "แกกล้าดียังไง...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이것이 끝이 아니다. 탐욕은… 사라지지 않아.",
						"english": "...This is not the end. Greed... it never disappears.",
						"japanese": "…これが終わりではない。強欲は…消え去らない。",
						"chinese": "……这还不是结束。贪婪……永不会消失。",
						"french": "...Ce n'est pas la fin. La cupidité... elle ne disparaît jamais.",
						"spanish": "...Esto no es el final. La codicia... nunca desaparece.",
						"vietnamese": "...Đây chưa phải là kết thúc. Tham lam... không bao giờ biến mất.",
						"thai": "...นี่ไม่ใช่จุดจบ ความโลภ... ไม่มีวันหายไป",
						"hindi": "...यह अंत नहीं है। लालच... कभी खत्म नहीं होता।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났어…!",
						"english": "It's over...!",
						"japanese": "終わった…！",
						"chinese": "结束了…！",
						"french": "C'est fini...!",
						"spanish": "¡Se acabó...!",
						"vietnamese": "Kết thúc rồi...!",
						"thai": "จบแล้ว...!",
						"hindi": "खत्म हो गया...!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "내가… 저지른 죄를… 어떻게 갚아야 할까…",
						"english": "How can I atone for... the sins I've committed...?",
						"japanese": "私が…犯した罪を…どう償えばいいのか…",
						"chinese": "我…犯下的罪…该如何偿还…",
						"french": "Comment puis-je... expier les péchés que j'ai commis...?",
						"spanish": "¿Cómo puedo... pagar por los pecados que he cometido...?",
						"vietnamese": "Tôi... phải trả giá thế nào... cho tội lỗi đã gây ra...?",
						"thai": "ฉัน...จะชดใช้บาป...ที่ก่อไว้ได้อย่างไร...",
						"hindi": "मैंने जो पाप किए हैं... उनका प्रायश्चित कैसे करूँ...?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "링고의 시스템은 침묵했다. 그러나 사라진 돈과 상처는 영원히 남았다.",
						"english": "Ringo's system fell silent. But the lost money and wounds remained forever.",
						"japanese": "リンゴのシステムは沈黙した。しかし、失われた金と傷は永遠に残った。",
						"chinese": "铃高的系统沉默了。然而，失去的钱财和伤痛却永远留存。",
						"french": "Le système de Ringo se tut. Mais l'argent perdu et les blessures demeurèrent à jamais.",
						"spanish": "El sistema de Ringo guardó silencio. Pero el dinero perdido y las heridas permanecieron para siempre.",
						"vietnamese": "Hệ thống của Ringo im bặt. Nhưng số tiền đã mất và những vết thương thì mãi mãi còn đó.",
						"thai": "ระบบของริงโก้เงียบงัน แต่เงินที่หายไปและบาดแผลยังคงอยู่ตลอดไป",
						"hindi": "रिंगो का सिस्टम शांत हो गया। लेकिन खोया हुआ धन और घाव हमेशा के लिए रह गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐욕은 또 다른 모습으로, 어둠 속에서 다시 피어날 준비를 하고 있었다.",
						"english": "Greed, in another form, was preparing to bloom again in the darkness.",
						"japanese": "強欲は、別の姿で闇の中で再び咲き誇る準備をしていた。",
						"chinese": "贪婪以另一种姿态，准备在黑暗中再次绽放。",
						"french": "La cupidité, sous une autre forme, se préparait à refleurir dans l'obscurité.",
						"spanish": "La codicia, bajo otra forma, se preparaba para florecer de nuevo en la oscuridad.",
						"vietnamese": "Lòng tham, dưới một hình hài khác, đang chuẩn bị trỗi dậy một lần nữa trong bóng tối.",
						"thai": "ความโลภ ในอีกรูปแบบหนึ่ง กำลังเตรียมพร้อมที่จะผลิบานอีกครั้งในความมืด",
						"hindi": "लालच, एक और रूप में, अँधेरे में फिर से पनपने की तैयारी कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "탐욕의 시스템은 무너뜨릴 수 없었다.",
						"english": "The system of greed could not be broken.",
						"japanese": "強欲のシステムは打ち破れなかった。",
						"chinese": "贪婪的系统无法被摧毁。",
						"french": "Le système de la cupidité ne put être renversé.",
						"spanish": "El sistema de la codicia no pudo ser derribado.",
						"vietnamese": "Hệ thống của lòng tham không thể bị đánh bại.",
						"thai": "ระบบแห่งความโลภไม่สามารถทำลายได้",
						"hindi": "लालच के सिस्टम को तोड़ा नहीं जा सका।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항. 탐욕의 흐름은 막을 수 없어.",
						"english": "Futile resistance. The tide of greed cannot be stopped.",
						"japanese": "些細な抵抗。強欲の流れは止められない。",
						"chinese": "微不足道的抵抗。贪婪的洪流无法阻挡。",
						"french": "Résistance futile. Le flot de la cupidité ne peut être arrêté.",
						"spanish": "Resistencia inútil. La marea de la codicia no puede ser detenida.",
						"vietnamese": "Sự kháng cự vô ích. Dòng chảy của lòng tham không thể ngăn cản.",
						"thai": "การต่อต้านที่ไร้ค่า กระแสแห่งความโลภไม่อาจหยุดยั้งได้",
						"hindi": "व्यर्थ प्रतिरोध। लालच के प्रवाह को रोका नहीं जा सकता।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…이대로는 안 돼.",
						"english": "...This can't go on.",
						"japanese": "…このままではいけない。",
						"chinese": "……不能再这样下去。",
						"french": "...Ça ne peut pas continuer comme ça.",
						"spanish": "...Así no puede seguir.",
						"vietnamese": "...Không thể cứ thế này được.",
						"thai": "...แบบนี้ต่อไปไม่ได้",
						"hindi": "...यह ऐसे नहीं चल सकता।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 싸울 거야!",
						"english": "I'll fight... again!",
						"japanese": "もう一度… もう一度戦う！",
						"chinese": "我要…再次战斗！",
						"french": "Je vais me battre... encore !",
						"spanish": "¡Volveré a... luchar!",
						"vietnamese": "Tôi sẽ... chiến đấu một lần nữa!",
						"thai": "ฉันจะสู้...อีกครั้ง!",
						"hindi": "मैं फिर से... फिर से लड़ूँगा!"
					}
				}
			]
		}
	]
} as const;
