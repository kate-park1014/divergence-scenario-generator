export const scenario_snowy_aevum_21_02 = {
	"scenario_id": "snowy_aevum_21_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 바람이 기억을 훑고 지나간다.",
			"무너진 폐허 속에서 진실은 왜곡된다.",
			"조각난 얼음 파편처럼, 과거는 제멋대로 흐트러져 있다.",
			"누구를 믿어야 하는가. 무엇이 진짜인가."
		],
		"english": [
			"A cold wind sweeps through memories.",
			"In the ruined remnants, truth is distorted.",
			"Like shattered ice shards, the past lies scattered haphazardly.",
			"Who can be trusted? What is real?"
		],
		"japanese": [
			"冷たい風が記憶をなぞる。",
			"崩れた廃墟の中で、真実は歪められる。",
			"砕けた氷の破片のように、過去は勝手に散らばっている。",
			"誰を信じればいいのか。何が真実なのか。"
		],
		"chinese": [
			"寒风掠过记忆。",
			"在坍塌的废墟中，真相被扭曲。",
			"过去如同碎裂的冰片，散乱无章。",
			"谁值得信任？何为真实？"
		],
		"french": [
			"Un vent froid balaie les souvenirs.",
			"Dans les ruines effondrées, la vérité est déformée.",
			"Tel des éclats de glace brisés, le passé est éparpillé sans ordre.",
			"Qui croire ? Qu'est-ce qui est réel ?"
		],
		"spanish": [
			"Un viento frío recorre los recuerdos.",
			"Entre las ruinas derrumbadas, la verdad se distorsiona.",
			"Como fragmentos de hielo rotos, el pasado yace disperso sin orden.",
			"¿En quién confiar? ¿Qué es real?"
		],
		"vietnamese": [
			"Gió lạnh lướt qua ký ức.",
			"Giữa đống đổ nát hoang tàn, sự thật bị bóp méo.",
			"Như những mảnh băng vỡ vụn, quá khứ nằm rải rác một cách lộn xộn.",
			"Phải tin ai đây? Điều gì là thật?"
		],
		"thai": [
			"ลมหนาวพัดผ่านความทรงจำ",
			"ในซากปรักหักพังที่พังทลาย ความจริงถูกบิดเบือน",
			"เหมือนเศษน้ำแข็งที่แตกกระจาย อดีตกระจัดกระจายไม่เป็นระเบียบ",
			"จะเชื่อใครดี? อะไรคือความจริง?"
		],
		"hindi": [
			"ठंडी हवा यादों को छूकर जाती है।",
			"ढह चुके खंडहरों में, सच विकृत हो जाता है।",
			"टूटे हुए बर्फ के टुकड़ों की तरह, अतीत बेतरतीब बिखरा पड़ा है।",
			"किस पर विश्वास करें? क्या सच है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 고대 유적의 잔해가 눈 속에 잠겨 있었다.",
						"english": "An endless snowy plain; the remnants of ancient ruins lay buried in the snow.",
						"japanese": "限りなく広がる雪原、古代遺跡の残骸が雪に埋もれていた。",
						"chinese": "无尽的雪原，古老遗迹的残骸沉睡在雪中。",
						"french": "Une étendue enneigée infinie ; les vestiges d'anciennes ruines gisaient enfouis sous la neige.",
						"spanish": "Una llanura nevada interminable; los restos de ruinas antiguas yacían enterrados en la nieve.",
						"vietnamese": "Đồng tuyết trải dài vô tận, tàn tích của di chỉ cổ đại vùi mình trong tuyết.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ไร้ขอบเขต ซากปรักหักพังของอารยธรรมโบราณจมอยู่ใต้หิมะ",
						"hindi": "एक अंतहीन बर्फीला मैदान; प्राचीन खंडहरों के अवशेष बर्फ में दबे थे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 폐허인가.",
						"english": "Is this... these ruins?",
						"japanese": "ここが… あの廃墟か。",
						"chinese": "这里是……那片废墟吗？",
						"french": "C'est ici… ces ruines ?",
						"spanish": "¿Es esto… esas ruinas?",
						"vietnamese": "Đây là… di tích đó sao?",
						"thai": "ที่นี่… คือซากปรักหักพังนั้นหรือ?",
						"hindi": "क्या यह… वही खंडहर हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "finn",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제법 깊숙이 들어왔군. 내가 여기서 꽤 건졌지.",
						"english": "We've come quite deep. I've found quite a bit here.",
						"japanese": "結構奥まで来たな。ここで結構儲けたんだ。",
						"chinese": "已经深入不少了。我在这里收获颇丰。",
						"french": "On est allés assez loin. J'ai pas mal récupéré ici.",
						"spanish": "Hemos entrado bastante. Aquí he conseguido bastantes cosas.",
						"vietnamese": "Đã vào khá sâu rồi. Tôi đã kiếm được kha khá ở đây.",
						"thai": "เข้ามาลึกพอตัวเลยนะ ฉันได้ของดีจากที่นี่ไปเยอะเลย",
						"hindi": "हम काफ़ी अंदर आ गए हैं। मैंने यहाँ काफ़ी कुछ पाया है।"
					}
				},
				{
					"content": {
						"korean": "찾는 게 있어.",
						"english": "I'm looking for something.",
						"japanese": "探しているものがある。",
						"chinese": "我在找东西。",
						"french": "Je cherche quelque chose.",
						"spanish": "Busco algo.",
						"vietnamese": "Tôi đang tìm một thứ.",
						"thai": "ฉันกำลังหาอะไรบางอย่าง",
						"hindi": "मैं कुछ ढूंढ रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잃어버린 예언? 그런 허황된 거 말고 실용적인 걸 찾아야지.",
						"english": "A lost prophecy? Forget that nonsense, we need to find something practical.",
						"japanese": "失われた予言？そんなばかげたものじゃなくて、実用的なものを探さないと。",
						"chinese": "失去的预言？别找那些虚无缥缈的东西，得找些实用的。",
						"french": "Une prophétie perdue ? Oublie ces balivernes, il faut trouver quelque chose de pratique.",
						"spanish": "¿Una profecía perdida? Olvídate de esas tonterías, necesitamos encontrar algo práctico.",
						"vietnamese": "Một lời tiên tri bị mất? Quên mấy thứ hão huyền đó đi, phải tìm cái gì thực tế chứ.",
						"thai": "คำพยากรณ์ที่หายไป? เลิกเรื่องไร้สาระพวกนั้นเถอะ เราต้องหาสิ่งที่ใช้งานได้จริง",
						"hindi": "खोई हुई भविष्यवाणी? उस बकवास को भूल जाओ, हमें कुछ व्यावहारिक खोजना होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "봐. 이게 내가 찾은 것들. 아름답지 않나?",
						"english": "Look. These are the things I found. Aren't they beautiful?",
						"japanese": "見ろ。これらが俺が見つけたものだ。美しいだろう？",
						"chinese": "看。这些就是我找到的东西。是不是很美？",
						"french": "Regarde. Voilà ce que j'ai trouvé. N'est-ce pas magnifique ?",
						"spanish": "¿No son hermosas?",
						"vietnamese": "Nhìn đi. Đây là những thứ tôi tìm thấy. Đẹp không?",
						"thai": "ดูสิ นี่คือสิ่งที่ฉันเจอ สวยงามใช่ไหมล่ะ?",
						"hindi": "देखो। ये वो चीजें हैं जो मुझे मिली हैं। सुंदर हैं ना?"
					}
				},
				{
					"speaker": "finn",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 크리스탈 조각이야. 딱히 쓸모는 없지만.",
						"english": "A cold crystal shard. Not particularly useful, though.",
						"japanese": "冷たいクリスタルの破片だ。特に使い道はないが。",
						"chinese": "一块冰冷的 кристал 碎片。没什么特别的用处。",
						"french": "Un éclat de cristal froid. Pas vraiment utile, cependant.",
						"spanish": "Un fragmento de cristal frío. Aunque no es muy útil.",
						"vietnamese": "Một mảnh tinh thể lạnh lẽo. Dù không có ích lợi gì đặc biệt.",
						"thai": "เศษคริสตัลเย็นยะเยือก ถึงจะไม่มีประโยชน์อะไรพิเศษก็เถอะ",
						"hindi": "एक ठंडा क्रिस्टल का टुकड़ा। हालांकि, यह खास उपयोगी नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대 부족의 미신적인 물건이겠지. 그냥 돌멩이야.",
						"english": "Probably a superstitious object from an ancient tribe. Just a rock.",
						"japanese": "古代の部族の迷信的なものだろう。ただの石だ。",
						"chinese": "可能是古代部落的迷信物品吧。只是一块石头。",
						"french": "Probablement un objet superstitieux d'une ancienne tribu. Juste une pierre.",
						"spanish": "Seguro es un objeto supersticioso de una tribu antigua. Solo una roca.",
						"vietnamese": "Chắc là vật phẩm mê tín của bộ tộc cổ đại. Chỉ là một viên đá thôi.",
						"thai": "คงเป็นวัตถุมงคลของชนเผ่าโบราณนั่นแหละ ก็แค่ก้อนหิน",
						"hindi": "शायद यह किसी प्राचीन जनजाति की अंधविश्वासी वस्तु है। बस एक पत्थर।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "폐허 속에서 스치는 듯한 후회의 감정이 느껴졌다.",
						"english": "A fleeting sense of regret could be felt within the ruins.",
						"japanese": "廃墟の中で、一瞬の後悔の念が感じられた。",
						"chinese": "在废墟中，感受到一丝转瞬即逝的悔恨。",
						"french": "Une fugace sensation de regret fut ressentie dans les ruines.",
						"spanish": "Una fugaz sensación de arrepentimiento se sintió en las ruinas.",
						"vietnamese": "Trong đống đổ nát, cảm giác hối tiếc thoáng qua.",
						"thai": "ในซากปรักหักพัง สัมผัสได้ถึงความรู้สึกเสียใจที่แวบผ่าน",
						"hindi": "खंडहरों के भीतर पश्चाताप की एक क्षणिक भावना महसूस हुई।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어갈수록 이상한 기운이 느껴져.",
						"english": "The deeper we go, the stranger the aura feels.",
						"japanese": "奥へ進むほど、奇妙な気配を感じる。",
						"chinese": "越往深处走，感觉到的气息越奇怪。",
						"french": "Plus nous allons en profondeur, plus l'aura semble étrange.",
						"spanish": "Cuanto más nos adentramos, más extraña se siente el aura.",
						"vietnamese": "Càng đi sâu, cảm giác càng có một luồng khí kỳ lạ.",
						"thai": "ยิ่งเข้าไปลึกเท่าไหร่ ก็ยิ่งรู้สึกถึงพลังงานประหลาด",
						"hindi": "जितना गहरा हम जाते हैं, आभा उतनी ही अजीब महसूस होती है।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 상징… 아까 그 조각이랑 비슷해.",
						"english": "This symbol... it's similar to that shard from earlier.",
						"japanese": "この紋章…さっきの破片と似ている。",
						"chinese": "这个符号……和刚才那块碎片很像。",
						"french": "Ce symbole... il ressemble à l'éclat de tout à l'heure.",
						"spanish": "Este símbolo... es parecido a ese fragmento de antes.",
						"vietnamese": "Biểu tượng này… giống với mảnh vỡ ban nãy.",
						"thai": "สัญลักษณ์นี้... คล้ายกับเศษนั่นเมื่อกี้เลย",
						"hindi": "यह प्रतीक... पहले वाले उस टुकड़े जैसा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그냥 우연이겠지. 똑같은 문양 많아.",
						"english": "Just a coincidence. There are many similar patterns.",
						"japanese": "ただの偶然だろう。同じような模様はたくさんある。",
						"chinese": "只是巧合吧。很多图案都差不多。",
						"french": "Juste une coïncidence. Il y a beaucoup de motifs similaires.",
						"spanish": "Solo una coincidencia. Hay muchos patrones iguales.",
						"vietnamese": "Chắc chỉ là trùng hợp thôi. Có nhiều hoa văn giống nhau mà.",
						"thai": "คงเป็นแค่เรื่องบังเอิญ ลายแบบเดียวกันมีเยอะแยะ",
						"hindi": "बस एक संयोग। ऐसे कई समान पैटर्न हैं।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "형태는 같지만, 그 의미는 알 수 없이 뒤틀려 있었다.",
						"english": "The form was the same, but its meaning was inexplicably twisted.",
						"japanese": "形は同じだが、その意味は不可解に歪められていた。",
						"chinese": "形状相同，但其意义却被莫名地扭曲了。",
						"french": "La forme était la même, mais sa signification était inexplicablement tordue.",
						"spanish": "La forma era la misma, pero su significado estaba inexplicablemente retorcido.",
						"vietnamese": "Hình dạng thì giống, nhưng ý nghĩa của nó lại bị bóp méo một cách khó hiểu.",
						"thai": "รูปร่างเหมือนกัน แต่ความหมายกลับบิดเบี้ยวจนไม่อาจเข้าใจได้",
						"hindi": "रूप वही था, लेकिन उसका अर्थ अकथनीय रूप से विकृत था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뭔가… 잘못된 것 같아.",
						"english": "Something... feels wrong.",
						"japanese": "何か…間違っている気がする。",
						"chinese": "总觉得……有什么不对劲。",
						"french": "Quelque chose... ne va pas.",
						"spanish": "Algo... no está bien.",
						"vietnamese": "Có gì đó… không ổn.",
						"thai": "บางอย่าง... รู้สึกว่าผิดปกติ",
						"hindi": "कुछ... गलत लग रहा है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니. 이제 돌아가긴 글렀군.",
						"english": "To come all this way. There's no turning back now.",
						"japanese": "ここまで来たか。もう引き返すことはできないな。",
						"chinese": "都到这里了。现在想回去也来不及了。",
						"french": "Venir jusqu'ici. Il est trop tard pour faire demi-tour maintenant.",
						"spanish": "Llegar hasta aquí. Ya no hay vuelta atrás.",
						"vietnamese": "Đã đến đây rồi. Giờ không thể quay lại được nữa.",
						"thai": "มาถึงนี่แล้ว คงกลับไม่ได้แล้วสินะ",
						"hindi": "इतनी दूर आ गए। अब पीछे हटना नामुमकिन है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳에 진실이 있을 거야.",
						"english": "The truth must lie deeper.",
						"japanese": "真実はもっと深い所にあるはずだ。",
						"chinese": "真相一定在更深处。",
						"french": "La vérité doit se trouver plus profond.",
						"spanish": "La verdad debe estar más profunda.",
						"vietnamese": "Sự thật hẳn nằm sâu hơn.",
						"thai": "ความจริงต้องอยู่ลึกกว่านั้น",
						"hindi": "सच्चाई कहीं गहरी होगी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "글쎄. 진실이든 뭐든, 대가는 치러야겠지.",
						"english": "Well. Truth or not, a price must be paid.",
						"japanese": "さあな。真実だろうが何だろうが、代償は払うことになるだろう。",
						"chinese": "哼。无论是真相与否，总要付出代价。",
						"french": "Eh bien. Vérité ou non, un prix devra être payé.",
						"spanish": "Bueno. Verdad o no, se deberá pagar un precio.",
						"vietnamese": "Chà. Dù là sự thật hay không, cũng phải trả giá thôi.",
						"thai": "เอาเถอะ ไม่ว่าจะเป็นความจริงหรือไม่ ก็ต้องจ่ายราคาอยู่ดี",
						"hindi": "खैर। सच हो या न हो, कीमत चुकानी पड़ेगी।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				},
				{
					"content": {
						"korean": "차가운 공기가 폐부를 찔렀다. 발걸음이 무거워졌다.",
						"english": "Cold air pierced my lungs. My steps grew heavy.",
						"japanese": "冷たい空気が肺を突き刺した。足取りが重くなった。",
						"chinese": "冰冷的空气刺入肺腑。脚步变得沉重。",
						"french": "L'air froid transperça mes poumons. Mes pas devinrent lourds.",
						"spanish": "El aire frío perforó mis pulmones. Mis pasos se hicieron pesados.",
						"vietnamese": "Không khí lạnh buốt đâm xuyên phổi. Bước chân tôi nặng trĩu.",
						"thai": "อากาศเย็นเยียบแทงปอดก้าวเท้าหนักอึ้ง",
						"hindi": "ठंडी हवा फेफड़ों को भेद गई। कदम भारी हो गए।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
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
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 하지만 어딘가 공허했다.",
						"english": "The unknown enemy fell. Yet, a sense of emptiness lingered.",
						"japanese": "正体不明の敵が倒れた。しかし、どこか虚しかった。",
						"chinese": "不明的敌人倒下了。但某种空虚感挥之不去。",
						"french": "L'ennemi inconnu tomba. Pourtant, un sentiment de vide subsistait.",
						"spanish": "El enemigo desconocido cayó. Sin embargo, una sensación de vacío persistía.",
						"vietnamese": "Kẻ thù không rõ danh tính đã ngã xuống. Nhưng đâu đó vẫn còn một sự trống rỗng.",
						"thai": "ศัตรูที่ไม่ระบุชื่อล้มลงแต่รู้สึกว่างเปล่า",
						"hindi": "अज्ञात शत्रु गिर गया। फिर भी, कहीं-न-कहीं एक खालीपन था।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…어둠은… 다시… 시작될 뿐….",
						"english": "...The darkness... merely... begins anew...",
						"japanese": "「…闇は…再び…始まるだけ…」",
						"chinese": "「……黑暗……不过……再次开始……」",
						"french": "...Les ténèbres... ne font... que recommencer...",
						"spanish": "...La oscuridad... solo... volverá a empezar...",
						"vietnamese": "...Bóng tối... chỉ... bắt đầu lại...",
						"thai": "...ความมืด...เพียงแค่...เริ่มต้นใหม่อีกครั้ง...",
						"hindi": "...अंधेरा... बस... फिर से शुरू होगा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이것으로 끝이 아니야. 더 깊은 곳으로 가야 해.",
						"english": "This isn't the end. We must go deeper.",
						"japanese": "「これで終わりじゃない。もっと深淵へ行かねば。」",
						"chinese": "「这不是结束。必须前往更深处。」",
						"french": "Ce n'est pas la fin. Il faut aller plus profond.",
						"spanish": "Esto no es el final. Debemos ir más profundo.",
						"vietnamese": "Đây không phải là kết thúc. Phải đi sâu hơn nữa.",
						"thai": "นี่ไม่ใช่จุดสิ้นสุด เราต้องไปให้ลึกกว่านี้",
						"hindi": "यह अंत नहीं है। हमें और गहराई तक जाना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그녀는 폐허 깊은 곳으로 향했다. 비극은 이제 막 시작되었다.",
						"english": "She headed into the depths of the ruins. The tragedy had only just begun.",
						"japanese": "「彼女は廃墟の奥深くへと向かった。悲劇は今、始まったばかりだ。」",
						"chinese": "「她前往了废墟深处。悲剧才刚刚开始。」",
						"french": "Elle se dirigea vers les profondeurs des ruines. La tragédie ne faisait que commencer.",
						"spanish": "Ella se dirigió a las profundidades de las ruinas. La tragedia apenas había comenzado.",
						"vietnamese": "Cô ấy đi sâu vào tàn tích. Bi kịch chỉ vừa mới bắt đầu.",
						"thai": "เธอ มุ่งหน้า สู่ เบื้องลึก ของ ซากปรักหักพัง โศกนาฏกรรม เพิ่งจะ เริ่มต้น ขึ้น",
						"hindi": "वह खंडहरों की गहराई में चली गई। त्रासदी तो अभी शुरू ही हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "폐허의 가장 깊은 곳, 거대한 그림자가 기다리고 있었다.",
						"english": "In the deepest part of the ruins, a colossal shadow awaited.",
						"japanese": "廃墟の最深部、巨大な影が待ち受けていた。",
						"chinese": "废墟最深处，一道巨大的黑影正在等候。",
						"french": "Au plus profond des ruines, une ombre colossale attendait.",
						"spanish": "En lo más profundo de las ruinas, una sombra colosal esperaba.",
						"vietnamese": "Tại nơi sâu nhất của phế tích, một bóng đen khổng lồ đang chờ đợi.",
						"thai": "ในส่วนที่ลึกที่สุดของซากปรักหักพังเงาขนาดมหึมารออยู่",
						"hindi": "खंडहर के सबसे गहरे हिस्से में, एक विशालकाय परछाई इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…침입자여. 왜곡된 기억에 다가서려 하는가?",
						"english": "...Intruder. Do you seek to approach the twisted memories?",
						"japanese": "…侵入者よ。歪んだ記憶に近づこうとするのか？",
						"chinese": "……入侵者。你想接近扭曲的记忆吗？",
						"french": "...Intrus. Cherchez-vous à approcher les souvenirs déformés ?",
						"spanish": "...Intruso. ¿Buscas acercarte a los recuerdos distorsionados?",
						"vietnamese": "…Kẻ xâm nhập. Ngươi định đến gần những ký ức méo mó sao?",
						"thai": "...ผู้บุกรุกเจ้าต้องการเข้าใกล้ความทรงจำที่บิดเบี้ยวหรือไม่?",
						"hindi": "...घुसपैठिए। क्या तुम विकृत यादों के करीब जाना चाहते हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 밝히러 왔다.",
						"english": "I came to uncover the truth.",
						"japanese": "真実を明かしに来た。",
						"chinese": "我来揭示真相。",
						"french": "Je suis venu révéler la vérité.",
						"spanish": "Vine a revelar la verdad.",
						"vietnamese": "Tôi đến để vạch trần sự thật.",
						"thai": "ฉันมาเพื่อเปิดเผยความจริง",
						"hindi": "मैं सच उजागर करने आया हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어리석군. 진실은 고통스러울 뿐이다.",
						"english": "Foolish. The truth brings only pain.",
						"japanese": "愚か者め。真実は苦痛をもたらすだけだ。",
						"chinese": "愚蠢。真相只会带来痛苦。",
						"french": "Imbécile. La vérité n'apporte que de la douleur.",
						"spanish": "Necio. La verdad solo trae dolor.",
						"vietnamese": "Ngu xuẩn. Sự thật chỉ mang đến đau khổ mà thôi.",
						"thai": "โง่เขลาความจริงนำมาซึ่งความเจ็บปวดเท่านั้น",
						"hindi": "मूर्ख। सच केवल दर्द लाता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "finn",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도망치는 게 좋을 텐데… 저건 상대할 게 못 돼.",
						"english": "You'd best flee... That's not something you can fight.",
						"japanese": "逃げた方がいい…あれは相手にするものじゃない。",
						"chinese": "你最好逃跑……那不是你能对付的。",
						"french": "Tu ferais mieux de fuir... Ça, tu ne peux pas le combattre.",
						"spanish": "Será mejor que huyas... Eso no es algo con lo que puedas lidiar.",
						"vietnamese": "Ngươi nên chạy đi... Đó không phải là thứ ngươi có thể đối phó.",
						"thai": "เจ้าควรจะหนีไปจะดีกว่า...นั่นไม่ใช่สิ่งที่เจ้าจะต่อกรได้",
						"hindi": "बेहतर होगा तुम भाग जाओ... उससे लड़ा नहीं जा सकता।"
					},
					"speaker": "finn"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜곡된 기억의 힘이 모든 것을 집어삼켰다.",
						"english": "The power of distorted memories consumed everything.",
						"japanese": "「歪んだ記憶の力がすべてを飲み込んだ。」",
						"chinese": "「扭曲记忆的力量吞噬了一切。」",
						"french": "Le pouvoir des souvenirs déformés a tout englouti.",
						"spanish": "El poder de los recuerdos distorsionados lo consumió todo.",
						"vietnamese": "Sức mạnh của ký ức méo mó đã nuốt chửng mọi thứ.",
						"thai": "พลังของความทรงจำที่บิดเบือนกลืนกินทุกสิ่ง",
						"hindi": "विकृत यादों की शक्ति ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "너의 탐색은… 여기서 끝이다.",
						"english": "Your quest... ends here.",
						"japanese": "「お前の探索は…ここで終わりだ。」",
						"chinese": "「你的探索……到此为止。」",
						"french": "Ta quête... s'achève ici.",
						"spanish": "Tu búsqueda... termina aquí.",
						"vietnamese": "Cuộc tìm kiếm của ngươi... kết thúc tại đây.",
						"thai": "การแสวงหาของเจ้า...จบลงที่นี่",
						"hindi": "तुम्हारी खोज... यहीं खत्म होती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "「まだ…終わってない。」",
						"chinese": "「还……没有结束。」",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Chưa... kết thúc đâu.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
