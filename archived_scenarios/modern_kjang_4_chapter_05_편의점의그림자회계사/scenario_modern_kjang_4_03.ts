export const scenario_modern_kjang_4_03 = {
	"scenario_id": "modern_kjang_4_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"평범해 보이는 편의점. 그 안에 감춰진 균열.",
			"렌은 날카로운 눈으로 숫자의 불일치를 포착했다.",
			"모든 것이 어긋나 있었다.",
			"수상한 재고, 뒤틀린 가격표. 이것은 단순한 실수가 아니었다."
		],
		"english": [
			"A seemingly ordinary convenience store. A hidden rift within.",
			"Ren's sharp eyes caught the numerical discrepancy.",
			"Everything was askew.",
			"Suspicious inventory, distorted price tags. This was no mere mistake."
		],
		"japanese": [
			"ごく普通のコンビニ。その奥に隠された亀裂。",
			"レンは鋭い目で数字の不一致を捉えた。",
			"全てが狂っていた。",
			"不審な在庫、歪んだ値札。これは単なる間違いではなかった。"
		],
		"chinese": [
			"看似普通的便利店。其中隐藏的裂缝。",
			"伦的敏锐目光捕捉到了数字上的不一致。",
			"一切都错位了。",
			"可疑的库存，扭曲的价格标签。这不是一个简单的错误。"
		],
		"french": [
			"Un dépanneur d'apparence ordinaire. Une fissure cachée à l'intérieur.",
			"Les yeux perçants de Ren ont détecté l'incohérence numérique.",
			"Tout était de travers.",
			"Stock suspect, étiquettes de prix déformées. Ce n'était pas une simple erreur."
		],
		"spanish": [
			"Una tienda de conveniencia aparentemente normal. Una grieta oculta en su interior.",
			"Los agudos ojos de Ren captaron la discrepancia numérica.",
			"Todo estaba fuera de lugar.",
			"Inventario sospechoso, etiquetas de precios distorsionadas. Esto no era un simple error."
		],
		"vietnamese": [
			"Một cửa hàng tiện lợi trông bình thường. Một vết nứt ẩn giấu bên trong.",
			"Đôi mắt sắc bén của Ren đã phát hiện ra sự không nhất quán về số liệu.",
			"Mọi thứ đều sai lệch.",
			"Hàng tồn kho đáng ngờ, bảng giá bị bóp méo. Đây không phải là một sai lầm đơn thuần."
		],
		"thai": [
			"ร้านสะดวกซื้อที่ดูธรรมดา รอยแยกที่ซ่อนอยู่ภายใน",
			"สายตาอันเฉียบคมของเรนจับความไม่ตรงกันของตัวเลขได้",
			"ทุกสิ่งผิดเพี้ยนไปหมด",
			"สินค้าคงคลังที่น่าสงสัย, ป้ายราคาที่บิดเบี้ยว นี่ไม่ใช่ความผิดพลาดธรรมดา"
		],
		"hindi": [
			"एक सामान्य सी दिखने वाली सुविधा स्टोर। उसके अंदर छिपी दरार।",
			"रेन की तेज़ नज़रों ने संख्यात्मक विसंगति को पकड़ लिया।",
			"सब कुछ गड़बड़ था।",
			"संदिग्ध इन्वेंट्री, विकृत मूल्य टैग। यह कोई साधारण गलती नहीं थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ren",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "음… 이상하네. 이 재고.",
						"english": "Hmm... strange. This inventory.",
						"japanese": "うーん…おかしいな。この在庫。",
						"chinese": "嗯…奇怪。这个库存。",
						"french": "Hmm... étrange. Cet inventaire.",
						"spanish": "Mmm... extraño. Este inventario.",
						"vietnamese": "Ưm... lạ thật. Lô hàng này.",
						"thai": "อืม... แปลกนะ สินค้าคงคลังนี้",
						"hindi": "हम्म... अजीब है। यह इन्वेंट्री।"
					},
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가요?",
						"english": "What is it?",
						"japanese": "何がですか？",
						"chinese": "什么？",
						"french": "Quoi donc ?",
						"spanish": "¿Qué cosa?",
						"vietnamese": "Cái gì ạ?",
						"thai": "อะไรคะ?",
						"hindi": "क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ren",
					"content": {
						"korean": "진열된 물품이랑 장부상 숫자가 안 맞아.",
						"english": "The displayed items and the ledger numbers don't match.",
						"japanese": "陳列品と帳簿の数字が合わない。",
						"chinese": "展示的商品和账簿上的数字不符。",
						"french": "Les articles exposés et les chiffres du registre ne correspondent pas.",
						"spanish": "Los artículos en exhibición y los números del libro no coinciden.",
						"vietnamese": "Hàng trưng bày và số liệu trên sổ sách không khớp.",
						"thai": "สินค้าที่จัดแสดงกับตัวเลขในบัญชีไม่ตรงกัน",
						"hindi": "प्रदर्शित वस्तुएं और बही-खाते के अंक मेल नहीं खाते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ren",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ren",
					"content": {
						"korean": "저기, K-jang 씨. 이 우유 가격이….",
						"english": "Excuse me, Mr. K-jang. The price of this milk is...",
						"japanese": "あの、K-jangさん。この牛乳の値段が…。",
						"chinese": "喂，K-jang先生。这牛奶的价格…。",
						"french": "Excusez-moi, Monsieur K-jang. Le prix de ce lait est...",
						"spanish": "Disculpe, señor K-jang. El precio de esta leche es...",
						"vietnamese": "Này, anh K-jang. Giá của hộp sữa này...",
						"thai": "คุณ K-jang ครับ ราคานมนี้...",
						"hindi": "सुनिए, के-जंग जी। इस दूध की कीमत...।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "random_boss",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아, 계산 실수입니다! 죄송합니다!",
						"english": "Oh, a calculation error! My apologies!",
						"japanese": "あ、計算ミスです！申し訳ありません！",
						"chinese": "啊，算错了！抱歉！",
						"french": "Ah, une erreur de calcul ! Désolé !",
						"spanish": "¡Ah, un error de cálculo! ¡Lo siento!",
						"vietnamese": "Ồ, lỗi tính toán ạ! Xin lỗi!",
						"thai": "อ๊ะ, คำนวณผิดครับ! ขออภัยครับ!",
						"hindi": "ओह, गणना में त्रुटि है! क्षमा करें!"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그의 눈빛이 순간, 칼날처럼 날카로웠다.",
						"english": "His gaze, for a moment, was as sharp as a blade.",
						"japanese": "彼の視線が、一瞬、刃物のように鋭くなった。",
						"chinese": "他的眼神瞬间变得像刀锋一样锐利。",
						"french": "Son regard, un instant, fut aussi tranchant qu'une lame.",
						"spanish": "Su mirada, por un instante, fue tan afilada como una cuchilla.",
						"vietnamese": "Ánh mắt anh ta bỗng chốc sắc như dao.",
						"thai": "แววตาของเขาคมกริบราวกับใบมีดในชั่วพริบตา",
						"hindi": "उसकी नज़रें एक पल के लिए तलवार की तरह तेज़ हो गईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ren",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ren",
					"emotion": "angry",
					"content": {
						"korean": "이건 실수가 아냐. 의도된 조작이야.",
						"english": "This isn't a mistake. It's a deliberate manipulation.",
						"japanese": "これは間違いじゃない。意図的な操作だ。",
						"chinese": "这不是失误。这是蓄意操控。",
						"french": "Ce n'est pas une erreur. C'est une manipulation délibérée.",
						"spanish": "Esto no es un error. Es una manipulación intencionada.",
						"vietnamese": "Đây không phải là một sai lầm. Đây là một sự thao túng có chủ đích.",
						"thai": "นี่ไม่ใช่ความผิดพลาด นี่คือการบิดเบือนที่จงใจ",
						"hindi": "यह गलती नहीं है। यह जानबूझकर किया गया हेरफेर है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "조작이요? 누가요?",
						"english": "Manipulation? By whom?",
						"japanese": "操作？誰が？",
						"chinese": "操控？谁做的？",
						"french": "Manipulation ? Par qui ?",
						"spanish": "¿Manipulación? ¿Por quién?",
						"vietnamese": "Thao túng? Ai?",
						"thai": "บิดเบือน? โดยใคร?",
						"hindi": "हेरफेर? किसने?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ren",
					"content": {
						"korean": "모든 숫자가 누군가의 손에 놀아나고 있어.",
						"english": "All numbers are being manipulated.",
						"japanese": "全ての数字が誰かの手によって弄ばれている。",
						"chinese": "所有的数字都被某人玩弄于股掌之间。",
						"french": "Tous les chiffres sont manipulés par quelqu'un.",
						"spanish": "Todos los números están siendo manipulados por alguien.",
						"vietnamese": "Mọi con số đều đang bị ai đó điều khiển.",
						"thai": "ทุกตัวเลขกำลังถูกใครบางคนเล่นงาน",
						"hindi": "हर संख्या किसी के हाथों में खेल रही है।"
					}
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
						3,
						2
					],
					"speaker": "ren",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "편의점의 공기가 무거워졌다. 모든 진열대가 감시하는 듯했다.",
						"english": "The air in the convenience store grew heavy. Every display seemed to watch.",
						"japanese": "コンビニの空気が重くなった。全ての陳列棚が監視しているようだった。",
						"chinese": "便利店里的空气变得沉重。所有的货架都仿佛在监视着。",
						"french": "L'air de la supérette s'alourdit. Tous les étalages semblaient surveiller.",
						"spanish": "El aire en la tienda de conveniencia se volvió pesado. Todas las estanterías parecían vigilar.",
						"vietnamese": "Không khí trong cửa hàng tiện lợi trở nên nặng nề. Mọi kệ hàng đều như đang giám sát.",
						"thai": "อากาศในร้านสะดวกซื้อหนักอึ้ง ทุกชั้นวางดูเหมือนกำลังเฝ้ามอง",
						"hindi": "सुविधा स्टोर की हवा भारी हो गई। हर डिस्प्ले निगरानी कर रहा था।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ren",
					"content": {
						"korean": "점점 더 심해지고 있어. 이 편의점, 뭔가 있어.",
						"english": "It's getting worse. There's something about this convenience store.",
						"japanese": "ますますひどくなってる。このコンビニ、何かある。",
						"chinese": "情况越来越糟了。这家便利店有问题。",
						"french": "Ça s'aggrave. Cette supérette cache quelque chose.",
						"spanish": "Está empeorando. Esta tienda de conveniencia tiene algo.",
						"vietnamese": "Nó ngày càng tệ hơn. Cửa hàng tiện lợi này có gì đó không ổn.",
						"thai": "มันแย่ลงเรื่อยๆ ร้านสะดวกซื้อนี่มีอะไรบางอย่าง",
						"hindi": "यह और खराब होता जा रहा है। इस सुविधा स्टोर में कुछ तो है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숨 막히네요.",
						"english": "It's suffocating.",
						"japanese": "息が詰まる。",
						"chinese": "真令人窒息。",
						"french": "C'est étouffant.",
						"spanish": "Es asfixiante.",
						"vietnamese": "Thật ngột ngạt.",
						"thai": "มันอึดอัด",
						"hindi": "घुटन हो रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크흐… 겨우 이 정도로… 질서는 무너지지 않아.",
						"english": "Hmph... Is that all...? Order will not crumble.",
						"japanese": "くっ…これしきで…秩序は崩れない。",
						"chinese": "哼...就凭这点...秩序不会崩溃。",
						"french": "Pff... Ce n'est que ça... L'ordre ne s'effondrera pas.",
						"spanish": "Uf... ¿Solo con esto...? El orden no se desmoronará.",
						"vietnamese": "Khặc... Chỉ nhiêu đó thôi sao...? Trật tự sẽ không sụp đổ.",
						"thai": "ฮึ... แค่นี้เองเหรอ... ระเบียบจะไม่พังทลาย",
						"hindi": "हम्म... बस इतना ही...? व्यवस्था ध्वस्त नहीं होगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이겼지만 찝찝해… 아직 뭔가 남은 것 같아.",
						"english": "A hollow victory... something still remains.",
						"japanese": "勝ったが、どうもすっきりしない…まだ何かが残っているようだ。",
						"chinese": "虽胜犹憾……似有未尽之事。",
						"french": "Victoire amère... quelque chose persiste.",
						"spanish": "Victoria vacía... algo aún acecha.",
						"vietnamese": "Thắng nhưng không vui… Dường như vẫn còn điều gì đó.",
						"thai": "ชนะแล้วแต่ใจยังขุ่น... เหมือนมีบางอย่างยังค้างคา",
						"hindi": "जीत तो गए, पर कुछ खटक रहा है... लगता है कुछ बाकी है。"
					},
					"type": "speech"
				},
				{
					"speaker": "ren",
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
						"korean": "질서는 부서졌지만, 통제는 끝나지 않았다.",
						"english": "Order shattered, control endures.",
						"japanese": "秩序は壊れたが、支配は終わらない。",
						"chinese": "秩序已破，掌控未终。",
						"french": "L'ordre est brisé, le contrôle perdure.",
						"spanish": "El orden se rompió, pero el control no ha terminado.",
						"vietnamese": "Trật tự vỡ, kiểm soát chưa hết.",
						"thai": "ระเบียบพังทลาย แต่การควบคุมยังไม่จบสิ้น",
						"hindi": "व्यवस्था भंग, नियंत्रण शेष।"
					},
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어긋난 질서 뒤, 더 거대한 그림자가 드리워졌다.",
						"english": "Beyond the shattered order, a grander shadow falls.",
						"japanese": "乱れた秩序の向こうに、より巨大な影が差し込んだ。",
						"chinese": "失序之后，更巨大的阴影笼罩。",
						"french": "Derrière l'ordre perturbé, une ombre plus grande s'étend.",
						"spanish": "Tras el orden roto, una sombra mayor se cierne.",
						"vietnamese": "Sau trật tự sai lệch, một bóng đen lớn hơn phủ xuống.",
						"thai": "เบื้องหลังความผิดเพี้ยนของระเบียบ เงาที่ใหญ่กว่ากำลังแผ่ขยาย",
						"hindi": "भंग व्यवस्था के पीछे, एक विशाल छाया मंडरा रही है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "이곳의 질서는 완벽하다. 감히 의심하려 드는가?",
						"english": "The order here is perfect. Do you dare to doubt it?",
						"japanese": "ここの秩序は完璧だ。あえて疑うというのか？",
						"chinese": "这里的秩序是完美的。你竟敢质疑？",
						"french": "L'ordre ici est parfait. Oserez-vous en douter ?",
						"spanish": "El orden aquí es perfecto. ¿Te atreves a dudarlo?",
						"vietnamese": "Trật tự ở đây là hoàn hảo. Ngươi dám nghi ngờ sao?",
						"thai": "ระเบียบที่นี่สมบูรณ์แบบ เจ้ากล้าสงสัยหรือ?",
						"hindi": "यहां का क्रम उत्तम है। क्या तुम संदेह करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 질서가 아니야. 조작된 숫자일 뿐!",
						"english": "This isn't order. It's just manipulated numbers!",
						"japanese": "これは秩序じゃない。ただの操作された数字だ！",
						"chinese": "这不是秩序。这只是被操控的数字！",
						"french": "Ce n'est pas l'ordre. Ce ne sont que des chiffres manipulés !",
						"spanish": "Esto no es orden. ¡Son solo números manipulados!",
						"vietnamese": "Đây không phải là trật tự. Chỉ là những con số bị thao túng thôi!",
						"thai": "นี่ไม่ใช่ระเบียบ นี่เป็นแค่ตัวเลขที่ถูกบิดเบือน!",
						"hindi": "यह व्यवस्था नहीं है। यह सिर्फ हेरफेर किए गए अंक हैं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것은 제자리에 있어야 한다. 너희도 마찬가지.",
						"english": "Everything must be in its place. You as well.",
						"japanese": "全ては所定の位置にあるべきだ。お前たちもな。",
						"chinese": "一切都必须各归其位。你们也一样。",
						"french": "Tout doit être à sa place. Vous aussi.",
						"spanish": "Todo debe estar en su lugar. Vosotros también.",
						"vietnamese": "Mọi thứ phải ở đúng vị trí của nó. Ngươi cũng vậy.",
						"thai": "ทุกสิ่งต้องอยู่ในที่ของมัน เจ้าก็เช่นกัน",
						"hindi": "सब कुछ अपनी जगह पर होना चाहिए। तुम भी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 이 완벽한 질서에 도전하려 하다니.",
						"english": "You dare... defy this perfect order.",
						"japanese": "よくも…この完璧な秩序に挑もうなどと。",
						"chinese": "竟敢……挑战如此完美的秩序。",
						"french": "Comment oses-tu... défier cet ordre parfait ?",
						"spanish": "¿Cómo osas... desafiar este orden perfecto?",
						"vietnamese": "Ngươi dám… thách thức trật tự hoàn hảo này.",
						"thai": "บังอาจ... ท้าทายระเบียบอันสมบูรณ์แบบนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस पूर्ण व्यवस्था को चुनौती देने की।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 다시 도전한다!",
						"english": "Blast! I'll try again!",
						"japanese": "ちくしょう！もう一度だ！",
						"chinese": "该死！再次挑战！",
						"french": "Zut ! Je retente !",
						"spanish": "¡Maldición! ¡Lo desafiaré de nuevo!",
						"vietnamese": "Khốn kiếp! Ta sẽ thách đấu lại!",
						"thai": "ให้ตายสิ! ข้าจะลองอีกครั้ง!",
						"hindi": "धिक्कार है! मैं फिर से कोशिश करूँगा!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
