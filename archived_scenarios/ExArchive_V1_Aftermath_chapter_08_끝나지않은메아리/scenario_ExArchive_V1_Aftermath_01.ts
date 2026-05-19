export const scenario_ExArchive_V1_Aftermath_01 = {
	"scenario_id": "ExArchive_V1_Aftermath_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "평화로웠던 거리에, 기이한 낙서들이 번졌다.",
						"english": "Eerie graffiti spread across the once peaceful streets.",
						"japanese": "平和だった通りに、奇妙な落書きが広がった。",
						"chinese": "曾经宁静的街道上，蔓延着诡异的涂鸦。",
						"french": "Des graffitis étranges se sont répandus dans les rues autrefois paisibles.",
						"spanish": "Grafitis extraños se extendieron por las calles antaño pacíficas.",
						"vietnamese": "Những hình vẽ kỳ lạ lan tràn khắp các con phố yên bình.",
						"thai": "บนถนนที่เคยสงบสุข ภาพวาดประหลาดได้แพร่กระจายไปทั่ว",
						"hindi": "शांत सड़कों पर अजीबोगरीบ भit्तichitra फैल गए।"
					}
				},
				{
					"content": {
						"korean": "이게 다 뭐야?",
						"english": "What is all this?",
						"japanese": "これはいったい何だ？",
						"chinese": "这都是些什么？",
						"french": "Qu'est-ce que tout ça ?",
						"spanish": "¿Qué es todo esto?",
						"vietnamese": "Tất cả đây là gì vậy?",
						"thai": "นี่มันอะไรกันเนี่ย?",
						"hindi": "ये सब क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "야! 큰일 났어!",
						"english": "Hey! We've got big trouble!",
						"japanese": "おい！大変だぞ！",
						"chinese": "喂！出大事了！",
						"french": "Hé ! C'est la catastrophe !",
						"spanish": "¡Oye! ¡Tenemos un gran problema!",
						"vietnamese": "Này! To chuyện rồi!",
						"thai": "เฮ้! แย่แล้ว!",
						"hindi": "अरे! बड़ी मुसीबत आ गई है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "주민들이 이상해. 몽유병 환자 같아.",
						"english": "The residents are acting strange. Like sleepwalkers.",
						"japanese": "住民たちが変だ。夢遊病患者のようだ。",
						"chinese": "居民们很奇怪。像是梦游症患者。",
						"french": "Les habitants sont étranges. On dirait des somnambules.",
						"spanish": "Los residentes están raros. Parecen sonámbulos.",
						"vietnamese": "Cư dân đang lạ lắm. Cứ như người mộng du.",
						"thai": "ชาวบ้านแปลกไป พวกเขาเหมือนคนละเมอ",
						"hindi": "निवासी अजीब व्यवहार कर रहे हैं। जैसे नींद में चलने वाले।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "Max, 진정해봐. 무슨 일인데?",
						"english": "Max, calm down. What's going on?",
						"japanese": "マックス、落ち着いて。どうしたんだ？",
						"chinese": "马克斯，冷静点。怎么回事？",
						"french": "Max, calme-toi. Qu'est-ce qui se passe ?",
						"spanish": "Max, cálmate. ¿Qué pasa?",
						"vietnamese": "Max, bình tĩnh nào. Chuyện gì vậy?",
						"thai": "แม็กซ์ ใจเย็นๆ เกิดอะไรขึ้น?",
						"hindi": "मैक्स, शांत हो जाओ। क्या बात है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "또 시작된 것 같아… 지난번처럼.",
						"english": "It seems to be starting again... like last time.",
						"japanese": "また始まったみたいだ…前回みたいに。",
						"chinese": "好像又开始了……和上次一样。",
						"french": "Ça recommence... comme la dernière fois.",
						"spanish": "Parece que está empezando de nuevo... como la última vez.",
						"vietnamese": "Có vẻ như nó lại bắt đầu rồi... giống lần trước.",
						"thai": "ดูเหมือนจะเริ่มขึ้นอีกครั้ง... เหมือนคราวที่แล้วเลย",
						"hindi": "लगता है फिर से शुरू हो गया है... पिछली बार की तरह।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "max"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아무리 지워도, 다음 날 또 생겨.",
						"english": "No matter how much I erase it, it reappears the next day.",
						"japanese": "いくら消しても、次の日にはまた現れる。",
						"chinese": "无论怎么擦，第二天又会出现。",
						"french": "Peu importe combien je l'efface, ça réapparaît le lendemain.",
						"spanish": "Por mucho que lo borre, al día siguiente vuelve a aparecer.",
						"vietnamese": "Dù có xóa bao nhiêu, hôm sau nó lại xuất hiện.",
						"thai": "ไม่ว่าจะลบเท่าไหร่ วันรุ่งขึ้นมันก็กลับมาอีก",
						"hindi": "मैं इसे कितना भी मिटा दूं, यह अगले दिन फिर से आ जाता है।"
					},
					"speaker": "max",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이상해. 흐릿해졌다가 선명해져.",
						"english": "...Strange. It blurs, then sharpens.",
						"japanese": "…おかしい。ぼやけてはっきりする。",
						"chinese": "……奇怪。它时而模糊，时而清晰。",
						"french": "...Bizarre. Ça se floute, puis ça devient net.",
						"spanish": "...Extraño. Se difumina y luego se aclara.",
						"vietnamese": "...Kỳ lạ. Nó mờ đi rồi lại rõ nét.",
						"thai": "...แปลกจัง มันเบลอแล้วก็ชัดขึ้นมา",
						"hindi": "...अजीब है। यह धुंधला हो जाता है, फिर स्पष्ट हो जाता है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어제는 저 그림자가… 움직이는 것 같았어.",
						"english": "Yesterday, that shadow... seemed to move.",
						"japanese": "昨日はあの影が…動いているようだった。",
						"chinese": "昨天那个影子……好像动了。",
						"french": "Hier, cette ombre... a semblé bouger.",
						"spanish": "Ayer, esa sombra... pareció moverse.",
						"vietnamese": "Hôm qua, cái bóng đó... dường như đã di chuyển.",
						"thai": "เมื่อวานนี้ เงา... ดูเหมือนจะขยับได้",
						"hindi": "कल, वह परछाई... हिलती हुई लग रही थी।"
					},
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "착각일 거야.",
						"english": "It must be an illusion.",
						"japanese": "気のせいだろう。",
						"chinese": "那一定是错觉。",
						"french": "Ce doit être une illusion.",
						"spanish": "Debe ser una ilusión.",
						"vietnamese": "Chắc là ảo giác thôi.",
						"thai": "คงจะเป็นแค่ภาพลวงตา",
						"hindi": "यह एक भ्रम होगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "착각 아니야! 난 봤어.",
						"english": "It's not an illusion! I saw it.",
						"japanese": "気のせいじゃない！私、見たんだ。",
						"chinese": "不是错觉！我看到了。",
						"french": "Ce n'est pas une illusion ! Je l'ai vu.",
						"spanish": "¡No es una ilusión! Lo vi.",
						"vietnamese": "Không phải ảo giác! Tôi đã thấy nó.",
						"thai": "ไม่ใช่ภาพลวงตา! ฉันเห็นมันแล้ว",
						"hindi": "यह कोई भ्रम नहीं है! मैंने इसे देखा है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "max"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 사람 좀 봐. 뭔가에 홀린 것 같아.",
						"english": "Look at that person. They seem to be possessed by something.",
						"japanese": "あの人を見て。何かに憑かれているみたい。",
						"chinese": "看看那个人。好像被什么附身了。",
						"french": "Regarde cette personne. Elle semble être possédée par quelque chose.",
						"spanish": "Mira a esa persona. Parece poseída por algo.",
						"vietnamese": "Nhìn người đó kìa. Họ dường như bị cái gì đó ám ảnh.",
						"thai": "ดูคนนั้นสิ ดูเหมือนจะโดนอะไรบางอย่างสิงอยู่",
						"hindi": "उस व्यक्ति को देखो। वह किसी चीज़ से ग्रस्त लग रहा है।"
					},
					"speaker": "max",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다들 뭔가에 쫓기는 듯해 보여.",
						"english": "Everyone seems to be chased by something.",
						"japanese": "みんな何かに追われているように見える。",
						"chinese": "大家好像都被什么追赶着。",
						"french": "Tout le monde semble être poursuivi par quelque chose.",
						"spanish": "Todos parecen ser perseguidos por algo.",
						"vietnamese": "Mọi người dường như đang bị cái gì đó đuổi theo.",
						"thai": "ทุกคนดูเหมือนจะถูกอะไรบางอย่างไล่ตาม",
						"hindi": "सब लोग किसी चीज़ से पीछा करते हुए दिख रहे हैं।"
					}
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그때랑 너무 비슷해… 기억의 수호자 사건 때랑.",
						"english": "It's too similar to that time... the Guardian of Memories incident.",
						"japanese": "あの時とそっくりだ…記憶の守護者事件の時と。",
						"chinese": "和那时太像了……和记忆守护者事件的时候。",
						"french": "C'est trop similaire à cette époque... l'incident du Gardien des Souvenirs.",
						"spanish": "Es demasiado similar a esa vez... al incidente del Guardián de los Recuerdos.",
						"vietnamese": "Nó quá giống với lần đó... vụ án Người bảo vệ ký ức.",
						"thai": "มันคล้ายกับตอนนั้นมาก... ตอนเกิดเหตุการณ์ผู้พิทักษ์ความทรงจำ",
						"hindi": "यह उस समय के बहुत समान है... यादों के अभिभावक की घटना के समय की तरह।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 수호자는 사라졌잖아.",
						"english": "But the Guardian disappeared, didn't they?",
						"japanese": "でも守護者は消えたじゃないか。",
						"chinese": "但是守护者不是消失了吗？",
						"french": "Mais le Gardien a disparu, n'est-ce pas ?",
						"spanish": "Pero el Guardián desapareció, ¿no?",
						"vietnamese": "Nhưng Người bảo vệ đã biến mất rồi mà.",
						"thai": "แต่ผู้พิทักษ์หายไปแล้วไม่ใช่เหรอ",
						"hindi": "लेकिन अभिभावक तो गायब हो गया, है ना?"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "그럼 이건… 다른 악몽이야.",
						"english": "Then this is... another nightmare.",
						"japanese": "これは…また別の悪夢だ。",
						"chinese": "那么这……是另一个噩梦。",
						"french": "Alors c'est... un autre cauchemar.",
						"spanish": "Entonces esto es... otra pesadilla.",
						"vietnamese": "Vậy đây là... một cơn ác mộng khác.",
						"thai": "งั้นนี่...ก็เป็นฝันร้ายอีกแล้ว",
						"hindi": "तो यह... एक और दुःस्वप्न है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 낙서… 이제는 모든 벽에 다 있어.",
						"english": "This graffiti... it's on every wall now.",
						"japanese": "この落書き…今はもう全ての壁にある。",
						"chinese": "这些涂鸦……现在布满了所有墙壁。",
						"french": "Ces graffitis... ils sont sur tous les murs maintenant.",
						"spanish": "Este grafiti... ahora está en cada pared.",
						"vietnamese": "Hình vẽ nguệch ngoạc này... giờ đã ở khắp mọi bức tường.",
						"thai": "ภาพวาดพวกนี้...ตอนนี้อยู่บนกำแพงทุกบานแล้ว",
						"hindi": "यह भित्तिचित्र... अब हर दीवार पर है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "출구가 없는 미로 같아.",
						"english": "It's like a maze with no exit.",
						"japanese": "出口のない迷路のようだ。",
						"chinese": "就像一个没有出口的迷宫。",
						"french": "C'est comme un labyrinthe sans sortie.",
						"spanish": "Es como un laberinto sin salida.",
						"vietnamese": "Giống như một mê cung không lối thoát.",
						"thai": "เหมือนเขาวงกตที่ไม่มีทางออก",
						"hindi": "यह एक ऐसे भूलभुलैया जैसा है जिसका कोई निकास नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "도망칠 수 없어. 피할 수도 없어.",
						"english": "I can't escape. I can't avoid it.",
						"japanese": "逃げられない。避けることもできない。",
						"chinese": "无法逃脱。也无法躲避。",
						"french": "Je ne peux pas m'échapper. Je ne peux pas l'éviter.",
						"spanish": "No puedo escapar. No puedo evitarlo.",
						"vietnamese": "Không thể trốn thoát. Không thể né tránh.",
						"thai": "หนีไม่พ้น หลบเลี่ยงไม่ได้",
						"hindi": "मैं भाग नहीं सकता। मैं इससे बच नहीं सकता।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭘 하려는 거지, 이 그림자들이?",
						"english": "What are these shadows trying to do?",
						"japanese": "この影たち、何をしようとしているんだ？",
						"chinese": "这些影子想做什么？",
						"french": "Que veulent faire ces ombres ?",
						"spanish": "¿Qué intentan hacer estas sombras?",
						"vietnamese": "Những cái bóng này đang cố làm gì?",
						"thai": "เงามืดพวกนี้กำลังทำอะไรกัน?",
						"hindi": "ये परछाइयाँ क्या करने की कोशिश कर रही हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "몰라… 하지만 좋은 일은 아닐 거야.",
						"english": "I don't know... but it can't be good.",
						"japanese": "分からない…でも、良いことではないだろう。",
						"chinese": "不知道……但肯定不是好事。",
						"french": "Je ne sais pas... mais ça ne peut pas être bon.",
						"spanish": "No lo sé... pero no puede ser bueno.",
						"vietnamese": "Tôi không biết... nhưng chắc chắn không phải điều tốt.",
						"thai": "ไม่รู้สิ...แต่คงไม่ใช่เรื่องดีแน่",
						"hindi": "मुझे नहीं पता... लेकिन यह अच्छा नहीं हो सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "max"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미완의 그림자들로 가득 찬 공간. 그 중앙에 정체 모를 존재가 서 있었다.",
						"english": "A space filled with incomplete shadows. An unknown entity stood at its center.",
						"japanese": "未完成の影で満たされた空間。その中央に、正体不明の存在が立っていた。",
						"chinese": "一个充满未完成影子的空间。一个不明实体站在它的中央。",
						"french": "Un espace rempli d'ombres incomplètes. Une entité inconnue se tenait en son centre.",
						"spanish": "Un espacio lleno de sombras incompletas. Una entidad desconocida se alzaba en su centro.",
						"vietnamese": "Một không gian tràn ngập những bóng tối chưa hoàn thiện. Một thực thể không rõ danh tính đứng giữa trung tâm.",
						"thai": "พื้นที่ที่เต็มไปด้วยเงาที่ยังไม่สมบูรณ์ และมีบางสิ่งที่ไม่รู้จักยืนอยู่ตรงกลาง",
						"hindi": "अधूरी परछाइयों से भरा एक स्थान। उसके केंद्र में एक अज्ञात सत्ता खड़ी थी।"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "저게… 저게 그 그림자의 근원인가?",
						"english": "Is that... is that the source of the shadows?",
						"japanese": "あれが…あれがその影の根源なのか？",
						"chinese": "那是……那是那些影子的源头吗？",
						"french": "C'est... c'est la source de ces ombres ?",
						"spanish": "¿Es eso... es esa la fuente de las sombras?",
						"vietnamese": "Kia... kia là nguồn gốc của những cái bóng đó sao?",
						"thai": "นั่น...นั่นคือต้นกำเนิดของเงาเหล่านั้นหรือ?",
						"hindi": "क्या वह... क्या वह उन परछाइयों का स्रोत है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…기억의 찌꺼기들. 너희도 곧 동화될 것이다.",
						"english": "...Scraps of memory. You too will soon be assimilated.",
						"japanese": "…記憶の残滓。お前たちもじきに同化されるだろう。",
						"chinese": "……记忆的残渣。你们也很快就会被同化。",
						"french": "...Fragments de mémoire. Vous aussi, vous serez bientôt assimilés.",
						"spanish": "...Retazos de memoria. Vosotros también seréis asimilados pronto.",
						"vietnamese": "...Những mảnh vụn ký ức. Các ngươi cũng sẽ sớm bị đồng hóa thôi.",
						"thai": "...เศษเสี้ยวความทรงจำ. พวกเจ้าก็จะถูกหลอมรวมในไม่ช้า",
						"hindi": "...यादों के टुकड़े। तुम भी जल्द ही आत्मसात हो जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "말도 안 돼!",
						"english": "Impossible!",
						"japanese": "そんな馬鹿な！",
						"chinese": "不可能！",
						"french": "C'est impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "เป็นไปไม่ได้!",
						"hindi": "असंभव!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "거스를 수 없는 흐름이다.",
						"english": "An irreversible flow.",
						"japanese": "逆らえない流れだ。",
						"chinese": "这是不可逆转的洪流。",
						"french": "C'est un flot inéluctable.",
						"spanish": "Es una corriente ineludible.",
						"vietnamese": "Đây là dòng chảy không thể cưỡng lại.",
						"thai": "นี่คือกระแสที่ไม่อาจต้านทานได้",
						"hindi": "यह एक अपरिवर्तनीय प्रवाह है।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 그림자는 사라지지 않아.",
						"english": "...Fools. The shadow never fades.",
						"japanese": "...愚かな。影は消えない。",
						"chinese": "……愚蠢的东西。影子不会消失。",
						"french": "...Imbéciles. L'ombre ne disparaît jamais.",
						"spanish": "...Necios. La sombra nunca desaparece.",
						"vietnamese": "...Lũ ngốc. Bóng tối không biến mất.",
						"thai": "พวกโง่เง่า. เงาไม่มีวันหายไป.",
						"hindi": "...मूर्ख। छाया कभी मिटती नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그저… 다른 형태로… 깨어날 뿐.",
						"english": "It merely... awakens in another form.",
						"japanese": "ただ…別の形で…目覚めるだけだ。",
						"chinese": "只是……以另一种形式……苏醒过来。",
						"french": "Elle... ne fait que se réveiller sous une autre forme.",
						"spanish": "Solo... despierta en otra forma.",
						"vietnamese": "Chỉ là... nó thức tỉnh dưới một hình dạng khác mà thôi.",
						"thai": "เพียงแค่... ตื่นขึ้นมาในอีกร่างหนึ่งเท่านั้น",
						"hindi": "बस... एक अलग रूप में... जागृत होती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"action": "exit",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뭐? 사라지지 않는다고?",
						"english": "What? It doesn't disappear?",
						"japanese": "何？消えないって？",
						"chinese": "什么？不会消失？",
						"french": "Quoi ? Ça ne disparaît pas ?",
						"spanish": "¿Qué? ¿No desaparece?",
						"vietnamese": "Gì cơ? Không biến mất sao?",
						"thai": "อะไรนะ? มันไม่หายไปเหรอ?",
						"hindi": "क्या? यह गायब नहीं होती?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "저 말… 신경 쓰여.",
						"english": "Those words... bother me.",
						"japanese": "あの言葉…気になる。",
						"chinese": "那句话……很让人在意。",
						"french": "Ces mots... m'inquiètent.",
						"spanish": "Esas palabras... me preocupan.",
						"vietnamese": "Lời nói đó... khiến tôi bận tâm.",
						"thai": "คำพูดนั้น... ทำให้ฉันไม่สบายใจ.",
						"hindi": "वे शब्द... मुझे परेशान कर रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "미완의 그림자는 잠시 물러났다. 하지만, 그 흔적은 동네 곳곳에 남아 있었다.",
						"english": "The incomplete shadow retreated for a moment. But its traces remained throughout the town.",
						"japanese": "未完の影は一時的に退いた。しかし、その痕跡は町中に残っていた。",
						"chinese": "未完成的影子暂时退去了。但是，它的痕迹仍然留在小镇各处。",
						"french": "L'ombre inachevée recula un instant. Mais ses traces restaient partout dans la ville.",
						"spanish": "La sombra incompleta se retiró por un momento. Pero sus huellas permanecieron por todo el pueblo.",
						"vietnamese": "Bóng tối chưa hoàn chỉnh tạm thời rút lui. Nhưng dấu vết của nó vẫn còn lại khắp nơi trong thị trấn.",
						"thai": "เงาที่ยังไม่สมบูรณ์ได้ถอยกลับไปชั่วขณะ แต่ร่องรอยของมันยังคงหลงเหลืออยู่ทั่วเมือง",
						"hindi": "अधूरी छाया कुछ देर के लिए पीछे हट गई। लेकिन उसके निशान पूरे शहर में रह गए थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어딘가에서, 또 다른 악몽이 꿈틀거리고 있었다.",
						"english": "Somewhere, another nightmare was stirring.",
						"japanese": "どこかで、別の悪夢が蠢いていた。",
						"chinese": "在某个地方，另一个噩梦正在蠢蠢欲动。",
						"french": "Quelque part, un autre cauchemar rampait.",
						"spanish": "En algún lugar, otra pesadilla se gestaba.",
						"vietnamese": "Ở đâu đó, một cơn ác mộng khác đang cựa quậy.",
						"thai": "ที่ไหนสักแห่ง ฝันร้ายอีกอย่างกำลังคืบคลาน",
						"hindi": "कहीं और, एक और दुःस्वप्न मंडरा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항이군. 너희의 기억도 곧 우리의 일부가 될 것이다.",
						"english": "A futile resistance. Your memories, too, will soon become part of us.",
						"japanese": "くだらない抵抗だな。お前たちの記憶も、すぐに我らの一部となるだろう。",
						"chinese": "真是微不足道的抵抗。你们的记忆也很快会成为我们的一部分。",
						"french": "Quelle résistance futile. Vos souvenirs aussi feront bientôt partie de nous.",
						"spanish": "Resistencia inútil. Vuestras memorias pronto serán parte de nosotros.",
						"vietnamese": "Sự kháng cự yếu ớt. Ký ức của các ngươi cũng sẽ sớm trở thành một phần của chúng ta.",
						"thai": "การต่อต้านที่ไร้สาระ. ความทรงจำของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของเราในไม่ช้า",
						"hindi": "यह एक तुच्छ प्रतिरोध है। तुम्हारी यादें भी जल्द ही हमारा हिस्सा बन जाएंगी।"
					}
				},
				{
					"content": {
						"korean": "…젠장! 아직 끝나지 않았어!",
						"english": "...Damn it! It's not over yet!",
						"japanese": "...くそ！まだ終わってない！",
						"chinese": "……该死！还没结束！",
						"french": "...Mince ! Ce n'est pas encore fini !",
						"spanish": "...¡Maldita sea! ¡Esto no ha terminado aún!",
						"vietnamese": "...Chết tiệt! Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ! มันยังไม่จบ!",
						"hindi": "धिक्कार है! अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "포기하지 마! 다시 일어서야 해!",
						"english": "Don't give up! We have to get back up!",
						"japanese": "諦めるな！また立ち上がるんだ！",
						"chinese": "不要放弃！我们必须重新站起来！",
						"french": "N'abandonnez pas ! Nous devons nous relever !",
						"spanish": "¡No te rindas! ¡Tenemos que levantarnos de nuevo!",
						"vietnamese": "Đừng bỏ cuộc! Chúng ta phải đứng dậy một lần nữa!",
						"thai": "อย่ายอมแพ้! เราต้องลุกขึ้นอีกครั้ง!",
						"hindi": "हार मत मानो! हमें फिर से उठना होगा!"
					},
					"speaker": "max",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"평화는 짧았다.",
			"사라진 기억의 수호자. 돌아온 줄 알았던 평온.",
			"하지만 어둠은 다른 얼굴로 돌아왔다.",
			"벽에는 섬뜩한 낙서가, 주민들은 불안에 떨었다.",
			"악몽은, 이제 막 시작될 뿐이었다."
		],
		"english": [
			"Peace was brief.",
			"The guardian of lost memories. A tranquility thought to have returned.",
			"But darkness returned with a different face.",
			"Eerie graffiti on the walls, residents trembled with unease.",
			"The nightmare, it had only just begun."
		],
		"japanese": [
			"平和は短かった。",
			"消え去った記憶の守護者。戻ったはずの平穏。",
			"しかし、闇は別の顔で戻ってきた。",
			"壁には不気味な落書き、住民たちは不安に震えた。",
			"悪夢は、まだ始まったばかりだった。"
		],
		"chinese": [
			"和平是短暂的。",
			"逝去记忆的守护者。本以为回归的平静。",
			"然而，黑暗以另一副面孔卷土重来。",
			"墙上是诡异的涂鸦，居民们则在不安中颤抖。",
			"噩梦，才刚刚开始。"
		],
		"french": [
			"La paix fut brève.",
			"Le gardien des souvenirs perdus. Une quiétude que l'on croyait revenue.",
			"Mais les ténèbres revinrent sous un autre visage.",
			"Des graffitis sinistres sur les murs, les habitants tremblaient d'inquiétude.",
			"Le cauchemar, il ne faisait que commencer."
		],
		"spanish": [
			"La paz fue breve.",
			"El guardián de los recuerdos perdidos. Una tranquilidad que creíamos recuperada.",
			"Pero la oscuridad regresó con un rostro diferente.",
			"Grafitis espeluznantes en las paredes, los residentes temblaban de inquietud.",
			"La pesadilla, apenas acababa de empezar."
		],
		"vietnamese": [
			"Hòa bình thật ngắn ngủi.",
			"Kẻ bảo hộ ký ức đã mất. Sự yên bình tưởng chừng đã trở lại.",
			"Nhưng bóng tối đã trở lại với một bộ mặt khác.",
			"Những hình vẽ đáng sợ trên tường, cư dân run rẩy vì lo lắng.",
			"Ác mộng, chỉ mới vừa bắt đầu."
		],
		"thai": [
			"สันติสุขนั้นช่างสั้นนัก",
			"ผู้พิทักษ์แห่งความทรงจำที่สาบสูญ ความสงบสุขที่คิดว่ากลับคืนมาแล้ว",
			"แต่ความมืดกลับมาในอีกโฉมหน้าหนึ่ง",
			"กำแพงเต็มไปด้วยกราฟฟิตีชวนขนลุก ชาวบ้านหวาดผวา",
			"ฝันร้ายเพิ่งจะเริ่มต้นขึ้นเท่านั้น"
		],
		"hindi": [
			"शांति अल्पकालिक थी।",
			"खोई हुई यादों का संरक्षक। एक शांति जो लौट आई थी।",
			"लेकिन अंधेरा एक अलग चेहरे के साथ लौटा।",
			"दीवारों पर डरावनी चित्रकारी थी, निवासी बेचैनी से काँप रहे थे।",
			"दुःस्वप्न, बस अभी शुरू हुआ था।"
		]
	}
} as const;
