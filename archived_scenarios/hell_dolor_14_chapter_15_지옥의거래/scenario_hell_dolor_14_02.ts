export const scenario_hell_dolor_14_02 = {
	"scenario_id": "hell_dolor_14_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥. 끝없는 절망이 거래되는 곳.",
			"모든 영혼은 계약에 묶여, 벗어날 수 없는 순환 속에 갇힌다.",
			"여기서 '구원'은 가장 달콤한 거짓말이자, 더 깊은 족쇄였다."
		],
		"english": [
			"Hell. Where endless despair is traded.",
			"Every soul is bound by contract, trapped in an inescapable cycle.",
			"Here, 'salvation' was the sweetest lie, and a deeper shackle."
		],
		"japanese": [
			"地獄。終わりのない絶望が取引される場所。",
			"すべての魂は契約に縛られ、逃れられない循環に囚われる。",
			"ここで「救済」は最も甘い嘘であり、より深い足枷だった。"
		],
		"chinese": [
			"地狱。无尽绝望交易之地。",
			"所有灵魂都被契约束缚，困于无法逃脱的循环之中。",
			"在这里，‘救赎’是最甜美的谎言，也是更深的枷锁。"
		],
		"french": [
			"L'Enfer. Là où le désespoir infini est échangé.",
			"Chaque âme est liée par un contrat, piégée dans un cycle inéluctable.",
			"Ici, le 'salut' était le plus doux des mensonges, et une entrave plus profonde."
		],
		"spanish": [
			"El Infierno. Donde la desesperación infinita se negocia.",
			"Cada alma está atada por un contrato, atrapada en un ciclo ineludible.",
			"Aquí, la 'salvación' era la mentira más dulce y un grillete más profundo."
		],
		"vietnamese": [
			"Địa ngục. Nơi vô vàn tuyệt vọng được giao dịch.",
			"Mọi linh hồn đều bị ràng buộc bởi khế ước, mắc kẹt trong vòng luân hồi không lối thoát.",
			"Ở đây, 'cứu rỗi' là lời nói dối ngọt ngào nhất, và là xiềng xích sâu hơn."
		],
		"thai": [
			"นรก. ที่ซึ่งความสิ้นหวังอันไม่รู้จบถูกแลกเปลี่ยน.",
			"ทุกดวงวิญญาณถูกผูกมัดด้วยสัญญา ขังอยู่ในวัฏจักรที่ไม่อาจหลุดพ้น.",
			"ที่นี่ 'การไถ่บาป' คือคำโกหกที่หอมหวานที่สุด และเป็นพันธนาการที่ลึกซึ้งยิ่งกว่า."
		],
		"hindi": [
			"नर्क। जहाँ अंतहीन निराशा का व्यापार होता है।",
			"हर आत्मा अनुबंध से बंधी है, एक अपरिहार्य चक्र में फँसी हुई है।",
			"यहाँ, 'मुक्ति' सबसे मधुर झूठ थी, और एक गहरी बेड़ी थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "희망조차 상품이 되는 지옥. 모든 것이 계약의 그림자 아래 있었다.",
						"english": "Hell, where even hope is a commodity. Everything was under the shadow of contracts.",
						"japanese": "希望すら商品となる地獄。すべては契約の影の下にあった。",
						"chinese": "希望亦是商品的炼狱。一切皆在契约的阴影之下。",
						"french": "L'Enfer, où même l'espoir est une marchandise. Tout était sous l'ombre des contrats.",
						"spanish": "El Infierno, donde incluso la esperanza es una mercancía. Todo estaba bajo la sombra de los contratos.",
						"vietnamese": "Địa ngục, nơi ngay cả hy vọng cũng là món hàng. Mọi thứ đều nằm dưới bóng tối của khế ước.",
						"thai": "นรก ที่ซึ่งแม้แต่ความหวังก็เป็นสินค้า ทุกสิ่งอยู่ภายใต้เงาของสัญญา.",
						"hindi": "नर्क, जहाँ आशा भी एक वस्तु है। सब कुछ अनुबंधों की छाया में था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…또 왔네. 발버둥쳐봤자 소용없는데.",
						"english": "...You're back again. Struggling is useless.",
						"japanese": "…また来たな。もがいても無駄なのに。",
						"chinese": "……又来了。挣扎也是徒劳。",
						"french": "...Vous êtes de retour. Lutter est inutile.",
						"spanish": "...Estás de nuevo aquí. Luchar es inútil.",
						"vietnamese": "...Lại đến nữa rồi. Dù có giãy giụa cũng vô ích thôi.",
						"thai": "...กลับมาอีกแล้วดิ้นรนไปก็เปล่าประโยชน์.",
						"hindi": "...तुम फिर आ गए। संघर्ष करना बेकार है।"
					},
					"speaker": "char",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구지? 여기서 뭘 하는 거야.",
						"english": "Who are you? What are you doing here?",
						"japanese": "誰だ？ここで何をしている？",
						"chinese": "你是谁？在这里做什么？",
						"french": "Qui es-tu ? Que fais-tu ici ?",
						"spanish": "¿Quién eres? ¿Qué haces aquí?",
						"vietnamese": "Ngươi là ai? Ngươi đang làm gì ở đây?",
						"thai": "คุณเป็นใคร? คุณมาทำอะไรที่นี่?",
						"hindi": "तुम कौन हो? यहाँ क्या कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "char",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 계약의 희생양. 너희가 '구원'하려는 그 영혼.",
						"english": "I am the victim of the contract. The soul you seek to 'save'.",
						"japanese": "私は契約の犠牲者。お前たちが「救済」しようとするその魂だ。",
						"chinese": "我是契约的牺牲品。你们想要‘救赎’的那个灵魂。",
						"french": "Je suis la victime du contrat. L'âme que vous cherchez à 'sauver'.",
						"spanish": "Soy la víctima del contrato. El alma que ustedes buscan 'salvar'.",
						"vietnamese": "Ta là nạn nhân của khế ước. Linh hồn mà các ngươi muốn 'cứu rỗi'.",
						"thai": "ฉันคือเหยื่อของสัญญา ดวงวิญญาณที่คุณพยายาม 'ช่วย'.",
						"hindi": "मैं अनुबंध का शिकार हूँ। वह आत्मा जिसे तुम 'बचाना' चाहते हो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "char",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "char",
					"emotion": "base",
					"content": {
						"korean": "이 지옥에선 계약이 전부야. 내가 맺은 건 '구원 계약'.",
						"english": "In this hell, contracts are everything. Mine is a 'Salvation Contract'.",
						"japanese": "この地獄では契約がすべてだ。私が結んだのは「救済契約」だ。",
						"chinese": "在这地狱，契约就是一切。我签订的是‘救赎契约’。",
						"french": "Dans cet enfer, les contrats sont tout. Le mien est un 'Contrat de Salut'.",
						"spanish": "En este infierno, los contratos lo son todo. El mío es un 'Contrato de Salvación'.",
						"vietnamese": "Ở địa ngục này, khế ước là tất cả. Khế ước ta đã ký là 'Khế ước Cứu rỗi'.",
						"thai": "ในนรกนี้ สัญญาคือทุกสิ่ง สัญญาที่ฉันทำคือ 'สัญญาแห่งการไถ่บาป'.",
						"hindi": "इस नर्क में, अनुबंध ही सब कुछ हैं। मेरा वाला 'मुक्ति अनुबंध' है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "구원 계약? 그럼 왜 여기 있어?",
						"english": "Salvation Contract? Then why are you here?",
						"japanese": "救済契約？じゃあ、なぜここにいる？",
						"chinese": "救赎契约？那你为什么在这里？",
						"french": "Contrat de Salut ? Alors pourquoi es-tu ici ?",
						"spanish": "¿Contrato de Salvación? ¿Entonces por qué estás aquí?",
						"vietnamese": "Khế ước Cứu rỗi? Vậy sao ngươi lại ở đây?",
						"thai": "สัญญาแห่งการไถ่บาป? แล้วทำไมคุณถึงมาอยู่ที่นี่?",
						"hindi": "मुक्ति अनुबंध? तो तुम यहाँ क्यों हो?"
					}
				},
				{
					"content": {
						"korean": "고통에서 벗어나면, 더 깊은 절망의 루프에 갇히는 계약이지.",
						"english": "It's a contract where if you escape pain, you're trapped in a deeper loop of despair.",
						"japanese": "苦痛から逃れると、より深い絶望のループに囚われる契約さ。",
						"chinese": "摆脱痛苦后，就会陷入更深绝望循环的契约。",
						"french": "C'est un contrat où si tu échappes à la douleur, tu es piégé dans une boucle de désespoir plus profonde.",
						"spanish": "Es un contrato en el que, si escapas del dolor, quedas atrapado en un ciclo más profundo de desesperación.",
						"vietnamese": "Đó là một khế ước mà nếu thoát khỏi nỗi đau, ngươi sẽ bị mắc kẹt trong vòng lặp tuyệt vọng sâu hơn.",
						"thai": "มันคือสัญญาที่ถ้าคุณหนีจากความเจ็บปวด คุณก็จะติดอยู่ในวงจรแห่งความสิ้นหวังที่ลึกซึ้งยิ่งกว่า.",
						"hindi": "यह एक ऐसा अनुबंध है जहाँ यदि तुम दर्द से बचते हो, तो तुम निराशा के एक गहरे चक्र में फँस जाते हो।"
					},
					"speaker": "char",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 구원이라고? 말이 안 돼.",
						"english": "That's salvation? Nonsense.",
						"japanese": "それが救済だと？馬鹿な。",
						"chinese": "那就是救赎？简直胡说八道。",
						"french": "C'est ça, le salut ? Absurde.",
						"spanish": "¿Eso es salvación? No tiene sentido.",
						"vietnamese": "Đó là sự cứu rỗi sao? Vô lý.",
						"thai": "นั่นคือความรอดหรือ? ไร้สาระ",
						"hindi": "उसे मोक्ष कहते हो? बकवास।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 계약서가 비슷해. 내용도, 결과도. 이름만 달라질 뿐.",
						"english": "All contracts are alike. Their content, their outcome. Only the names change.",
						"japanese": "どの契約も同じだ。内容も結果も。名前が変わるだけ。",
						"chinese": "所有契约都一样。内容、结果，都只是换个名字而已。",
						"french": "Tous les contrats sont pareils. Le contenu, le résultat. Seuls les noms changent.",
						"spanish": "Todos los contratos son similares. El contenido, el resultado. Solo los nombres cambian.",
						"vietnamese": "Mọi hợp đồng đều giống nhau. Nội dung, kết quả. Chỉ thay đổi tên thôi.",
						"thai": "สัญญาล้วนคล้ายกัน ทั้งเนื้อหา ผลลัพธ์ แค่ชื่อที่ต่างออกไป",
						"hindi": "सभी अनुबंध एक जैसे हैं। सामग्री भी, परिणाम भी। बस नाम बदल जाते हैं।"
					},
					"speaker": "char",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "char",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이게 가장 합리적인 해결책이야. 잠깐의 평온이라도 얻을 수 있으니까.",
						"english": "This is the most rational solution. At least you gain a moment of peace.",
						"japanese": "これが最も合理的な解決策だ。束の間の平穏でも得られるのだから。",
						"chinese": "这是最合理的解决方案。至少能获得片刻的宁静。",
						"french": "C'est la solution la plus rationnelle. Au moins, tu y gagnes un instant de paix.",
						"spanish": "Esta es la solución más razonable. Al menos obtendrás un momento de paz.",
						"vietnamese": "Đây là giải pháp hợp lý nhất. Ít nhất cũng có được chút bình yên.",
						"thai": "นี่คือทางออกที่สมเหตุสมผลที่สุด อย่างน้อยก็ยังได้ความสงบสุขชั่วคราว",
						"hindi": "यह सबसे तार्किक समाधान है। कम से कम क्षणिक शांति तो मिलती है।"
					},
					"speaker": "char",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "하지만 영원히 반복되잖아! 그게 어떻게 합리적이야?",
						"english": "But it repeats forever! How is that rational?",
						"japanese": "しかし、永遠に繰り返されるじゃないか！それがどうして合理的だ？",
						"chinese": "但它会永远重复！这怎么合理？",
						"french": "Mais ça se répète à l'infini ! En quoi est-ce rationnel ?",
						"spanish": "¡Pero se repite eternamente! ¿Cómo es eso razonable?",
						"vietnamese": "Nhưng nó lặp lại mãi mãi! Làm sao mà hợp lý được?",
						"thai": "แต่มันจะวนซ้ำไปเรื่อยๆ! นั่นมันสมเหตุสมผลตรงไหน?",
						"hindi": "पर यह तो हमेशा दोहराता रहता है! यह कैसे तार्किक है?"
					}
				},
				{
					"type": "speech",
					"speaker": "char",
					"emotion": "sad",
					"content": {
						"korean": "처음엔 구원이라 속삭여. 달콤한 향기로 유혹하지.",
						"english": "At first, it whispers salvation. Enticing with a sweet scent.",
						"japanese": "最初は救済だと囁く。甘い香りで誘惑するのだ。",
						"chinese": "起初，它低语着救赎。用甜美的芬芳引诱。",
						"french": "Au début, il murmure le salut. Il attire avec un parfum doux.",
						"spanish": "Al principio, susurra salvación. Tienta con un dulce aroma.",
						"vietnamese": "Lúc đầu, nó thì thầm về sự cứu rỗi. Quyến rũ bằng hương thơm ngọt ngào.",
						"thai": "ในตอนแรก มันกระซิบถึงความรอด ล่อลวงด้วยกลิ่นหอมหวาน",
						"hindi": "पहले यह मुक्ति फुसफुसाता है। मीठी सुगंध से लुभाता है।"
					}
				},
				{
					"content": {
						"korean": "그 유혹에 넘어가지 않는 영혼은 없어. 이 지옥에서는.",
						"english": "No soul resists that temptation. Not in this hell.",
						"japanese": "その誘惑に抗える魂はない。この地獄では。",
						"chinese": "没有灵魂能抵挡那种诱惑。在这个地狱里。",
						"french": "Aucune âme ne résiste à cette tentation. Pas dans cet enfer.",
						"spanish": "Ningún alma sucumbe a esa tentación. En este infierno.",
						"vietnamese": "Không một linh hồn nào không sa ngã trước cám dỗ đó. Trong địa ngục này.",
						"thai": "ไม่มีวิญญาณใดต้านทานสิ่งล่อลวงนั้นได้ ในนรกแห่งนี้",
						"hindi": "कोई भी आत्मा उस प्रलोभन का विरोध नहीं कर सकती। इस नरक में।"
					},
					"speaker": "char",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "char",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저항해봤자 소용없어. 시스템은 더 단단해질 뿐.",
						"english": "Resistance is futile. The system only grows stronger.",
						"japanese": "抵抗しても無駄だ。システムはより強固になるだけ。",
						"chinese": "抵抗是徒劳的。系统只会变得更强大。",
						"french": "La résistance est futile. Le système ne fera que se renforcer.",
						"spanish": "Resistir es inútil. El sistema solo se hará más fuerte.",
						"vietnamese": "Chống cự cũng vô ích. Hệ thống chỉ càng thêm vững chắc.",
						"thai": "ต่อต้านไปก็ไร้ประโยชน์ ระบบมีแต่จะแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "विरोध करना व्यर्थ है। सिस्टम और भी मजबूत होता जाएगा।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너희도 곧 깨닫게 될 거야. 이 절망의 순환을.",
						"english": "You too will soon realize. This cycle of despair.",
						"japanese": "お前たちもすぐに気づくだろう。この絶望の循環に。",
						"chinese": "你们也很快会明白。这个绝望的循环。",
						"french": "Vous aussi, vous le réaliserez bientôt. Ce cycle de désespoir.",
						"spanish": "Pronto os daréis cuenta. De este ciclo de desesperación.",
						"vietnamese": "Các ngươi cũng sẽ sớm nhận ra thôi. Vòng lặp tuyệt vọng này.",
						"thai": "พวกเจ้าเองก็จะเข้าใจในไม่ช้า วงจรแห่งความสิ้นหวังนี้",
						"hindi": "तुम भी जल्द ही समझ जाओगे। निराशा के इस चक्र को।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그딴 거 인정 못 해.",
						"english": "...I won't accept that.",
						"japanese": "…そんなもの、認められない。",
						"chinese": "…我绝不承认那种事。",
						"french": "...Je ne peux pas accepter ça.",
						"spanish": "...No puedo aceptar eso.",
						"vietnamese": "...Tôi không thể chấp nhận điều đó.",
						"thai": "...ฉันไม่อาจยอมรับเรื่องแบบนั้นได้",
						"hindi": "...मैं ऐसी बात स्वीकार नहीं कर सकता।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강력한 힘에 압도당했다. 거대한 시스템은 흔들림 없었다.",
						"english": "Overwhelmed by immense power. The colossal system remained unshaken.",
						"japanese": "強大な力に圧倒された。巨大なシステムは揺るぎなかった。",
						"chinese": "被强大的力量所压倒。庞大的系统纹丝不动。",
						"french": "Submergés par une puissance écrasante. Le système colossal est resté inébranlable.",
						"spanish": "Abatidos por una fuerza abrumadora. El gigantesco sistema permaneció inquebrantable.",
						"vietnamese": "Bị áp đảo bởi sức mạnh khủng khiếp. Hệ thống khổng lồ vẫn không hề lay chuyển.",
						"thai": "ถูกครอบงำด้วยพลังอันมหาศาล ระบบอันยิ่งใหญ่ยังคงไม่สั่นคลอน",
						"hindi": "असाधारण शक्ति से अभिभूत। विशालकाय प्रणाली अडिग रही।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "발버둥칠수록 더 깊이 갇힐 뿐. 이것이 너희의 운명이다.",
						"english": "The more you struggle, the deeper you're trapped. This is your fate.",
						"japanese": "もがけばもがくほど、より深く囚われるだけ。これが貴様たちの運命だ。",
						"chinese": "越是挣扎，越是深陷。这就是你们的命运。",
						"french": "Plus vous vous débattez, plus vous êtes piégés. Tel est votre destin.",
						"spanish": "Cuanto más luchéis, más profundamente quedaréis atrapados. Este es vuestro destino.",
						"vietnamese": "Càng vùng vẫy, càng bị mắc kẹt sâu hơn. Đây là vận mệnh của các ngươi.",
						"thai": "ยิ่งดิ้นรนมากเท่าไหร่ ก็ยิ่งติดกับดักลึกขึ้นเท่านั้น นี่คือชะตากรรมของพวกเจ้า",
						"hindi": "जितना तुम संघर्ष करोगे, उतना ही गहरे फँसोगे। यही तुम्हारा भाग्य है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기 안 해!",
						"english": "...It's not over yet. We won't give up!",
						"japanese": "…まだ終わってない。私たちは諦めない！",
						"chinese": "…还没结束。我们不会放弃！",
						"french": "…Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "…Todavía no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ! เราจะไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 시스템의 수호자.",
						"english": "A colossal shadow blocked the path. Guardian of the System.",
						"japanese": "巨大な影が道を塞いだ。システムの守護者。",
						"chinese": "巨大的阴影挡住了去路。系统守护者。",
						"french": "Une ombre colossale bloquait le chemin. Le gardien du Système.",
						"spanish": "Una sombra colosal bloqueó el camino. El guardián del Sistema.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Người bảo hộ của Hệ thống.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ ผู้พิทักษ์ของระบบ",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। सिस्टम का संरक्षक।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 저항이군. 이 순환은 깨지지 않아.",
						"english": "Futile resistance. This cycle won't break.",
						"japanese": "無駄な抵抗だ。この循環は破られない。",
						"chinese": "垂死的挣扎。这个循环不会被打破。",
						"french": "Résistance futile. Ce cycle ne sera pas brisé.",
						"spanish": "Resistencia inútil. Este ciclo no se romperá.",
						"vietnamese": "Kháng cự vô ích. Vòng tuần hoàn này sẽ không bị phá vỡ.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ วงจรนี้ไม่มีทางแตกหัก",
						"hindi": "व्यर्थ का प्रतिरोध। यह चक्र नहीं टूटेगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 모든 노력은 결국 {random_boss}에게 힘을 줄 뿐이다.",
						"english": "All your efforts will only empower {random_boss}.",
						"japanese": "お前たちのあらゆる努力は、結局{random_boss}に力を与えるだけだ。",
						"chinese": "你们所有的努力，最终只会增强{random_boss}的力量。",
						"french": "Tous vos efforts ne feront qu'accroître le pouvoir de {random_boss}.",
						"spanish": "Todos vuestros esfuerzos solo darán poder a {random_boss}.",
						"vietnamese": "Mọi nỗ lực của các ngươi cuối cùng chỉ tiếp thêm sức mạnh cho {random_boss}.",
						"thai": "ความพยายามทั้งหมดของพวกเจ้ามีแต่จะเสริมพลังให้ {random_boss} เท่านั้น",
						"hindi": "तुम्हारे सभी प्रयास अंततः केवल {random_boss} को शक्ति देंगे।"
					}
				},
				{
					"content": {
						"korean": "헛소리 하지 마! 우리가 널 끝낼 거야.",
						"english": "Don't talk nonsense! We'll end you.",
						"japanese": "くだらないことを言うな！私たちが貴様を終わらせる！",
						"chinese": "别胡说八道！我们会解决你！",
						"french": "Arrête tes sottises ! Nous allons t'anéantir.",
						"spanish": "¡No digas tonterías! ¡Nosotros acabaremos contigo!",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ kết liễu ngươi.",
						"thai": "อย่าพูดพล่าม! เราจะจัดการแกเอง!",
						"hindi": "बकवास मत करो! हम तुम्हें ख़त्म कर देंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…겨우 문지기 하나를 쓰러뜨렸다고 생각하나.",
						"english": "...Do you think you've merely defeated a gatekeeper?",
						"japanese": "…ただの門番を倒したとでも思っているのか。",
						"chinese": "…你们以为这只是击败了一个看门人吗？",
						"french": "…Croyez-vous n'avoir vaincu qu'un simple gardien ?",
						"spanish": "¿...Acaso creéis que solo habéis derrotado a un guardián?",
						"vietnamese": "...Ngươi nghĩ rằng mình chỉ mới đánh bại một tên lính gác thôi sao?",
						"thai": "...พวกเจ้าคิดว่าแค่ล้มผู้เฝ้าประตูได้คนเดียวงั้นรึ",
						"hindi": "...क्या तुम्हें लगता है कि तुमने सिर्फ एक द्वारपाल को हराया है?"
					}
				},
				{
					"content": {
						"korean": "이것은 시작일 뿐. 너희는 이미 시스템의 일부가 되었다.",
						"english": "This is just the beginning. You are already part of the system.",
						"japanese": "これは始まりに過ぎない。お前たちは既にシステムの一部となった。",
						"chinese": "这仅仅是个开始。你们已经成为了系统的一部分。",
						"french": "Ce n'est que le début. Vous faites déjà partie du système.",
						"spanish": "Esto es solo el principio. Ya sois parte del sistema.",
						"vietnamese": "Đây chỉ là khởi đầu. Các ngươi đã trở thành một phần của hệ thống rồi.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น พวกเจ้าได้กลายเป็นส่วนหนึ่งของระบบไปแล้ว",
						"hindi": "यह तो बस शुरुआत है। तुम पहले से ही सिस्टम का हिस्सा बन चुके हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐라고…?",
						"english": "What...?",
						"japanese": "な、なんだって…？",
						"chinese": "你说什么…？",
						"french": "Quoi... ?",
						"spanish": "¿Qué...?",
						"vietnamese": "Cái gì...?",
						"thai": "ว่าไงนะ...?",
						"hindi": "क्या...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "절망의 그림자는 더욱 짙어졌다. 구원은, 아직 멀었다.",
						"english": "The shadow of despair deepened. Salvation is still far off.",
						"japanese": "絶望の影はさらに濃くなった。救いは、まだ遠い。",
						"chinese": "绝望的阴影愈发深重。救赎，遥遥无期。",
						"french": "L'ombre du désespoir s'est épaissie. Le salut est encore loin.",
						"spanish": "La sombra de la desesperación se profundizó. La salvación, aún está lejos.",
						"vietnamese": "Bóng tối tuyệt vọng càng thêm dày đặc. Sự cứu rỗi, vẫn còn xa vời.",
						"thai": "เงามืดแห่งความสิ้นหวังยิ่งทวีความรุนแรงขึ้น การไถ่ถอนยังอีกยาวไกล",
						"hindi": "निराशा की छाया और गहरी हो गई। मोक्ष, अभी दूर है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
