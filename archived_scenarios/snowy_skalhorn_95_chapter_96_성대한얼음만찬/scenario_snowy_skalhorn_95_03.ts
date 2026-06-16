export const scenario_snowy_skalhorn_95_03 = {
	"scenario_id": "snowy_skalhorn_95_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"푸른 광채가 타올랐다.",
			"얼어붙은 공기는 날카로운 비명 같았다.",
			"이성은 부서지고, 광기는 끓어올랐다.",
			"마지막 진실이 눈앞에 있었다.",
			"이제, 모든 것을 매듭지을 시간."
		],
		"english": [
			"A blue radiance flared.",
			"The frozen air was like a sharp scream.",
			"Reason shattered, madness boiled.",
			"The final truth was before me.",
			"Now, it's time to bring everything to an end."
		],
		"japanese": [
			"青い輝きが燃え上がった。",
			"凍てつく空気は鋭い悲鳴のようだった。",
			"理性が砕け散り、狂気が滾った。",
			"最後の真実が目の前にあった。",
			"今、すべてを終わらせる時。"
		],
		"chinese": [
			"蓝色光芒燃起。",
			"冰冷的空气如尖锐的嘶吼。",
			"理智破碎，狂气沸腾。",
			"最后的真相近在眼前。",
			"现在，是了结一切的时候。"
		],
		"french": [
			"Une lueur bleue s'embrasa.",
			"L'air gelé était comme un cri perçant.",
			"La raison s'écrasa, la folie bouillonna.",
			"La vérité finale était sous mes yeux.",
			"Il est temps de tout conclure."
		],
		"spanish": [
			"Un resplandor azul estalló.",
			"El aire helado era como un grito agudo.",
			"La razón se hizo añicos, la locura hirvió.",
			"La verdad final estaba ante mí.",
			"Ahora, es el momento de zanjarlo todo."
		],
		"vietnamese": [
			"Ánh sáng xanh bùng lên.",
			"Không khí đóng băng như tiếng thét chói tai.",
			"Lý trí tan vỡ, sự điên loạn trỗi dậy.",
			"Sự thật cuối cùng đã ở trước mắt.",
			"Bây giờ, là lúc kết thúc mọi chuyện."
		],
		"thai": [
			"แสงสีน้ำเงินลุกโชน.",
			"อากาศที่เยือกแข็งราวกับเสียงกรีดร้องอันแหลมคม.",
			"เหตุผลแตกสลาย, ความบ้าคลั่งเดือดพล่าน.",
			"ความจริงสุดท้ายอยู่ตรงหน้า.",
			"ถึงเวลาสะสางทุกสิ่ง."
		],
		"hindi": [
			"नीली चमक भड़क उठी।",
			"जमी हुई हवा एक तीखी चीख जैसी थी।",
			"तर्क टूट गया, उन्माद उमड़ पड़ा।",
			"अंतिम सत्य सामने था।",
			"अब, सब कुछ समेटने का समय है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "푸른 광채가 사방을 물들였다. 차가운 기운이 피부를 찢었다.",
						"english": "A blue radiance stained everything. A cold aura tore at the skin.",
						"japanese": "青い光が辺り一面を染めた。冷たい気が肌を裂いた。",
						"chinese": "蓝色光芒染遍四方。冰冷的气息撕裂皮肤。",
						"french": "Une lueur bleue colorait tout. Une aura froide lacérait la peau.",
						"spanish": "Un resplandor azul tiñó todo. Un aura fría desgarró la piel.",
						"vietnamese": "Ánh sáng xanh nhuộm khắp nơi. Luồng khí lạnh xé rách da.",
						"thai": "แสงสีน้ำเงินย้อมทุกสิ่ง. ไอเย็นฉีกกระชากผิวหนัง.",
						"hindi": "नीली चमक ने चारों ओर रंग भर दिया। एक ठंडी आभा ने त्वचा को चीर दिया।"
					}
				},
				{
					"content": {
						"korean": "점점 더 심해지고 있어.",
						"english": "It's getting worse and worse.",
						"japanese": "ますますひどくなっている。",
						"chinese": "越来越严重了。",
						"french": "Ça empire de plus en plus.",
						"spanish": "Está empeorando cada vez más.",
						"vietnamese": "Càng ngày càng tệ đi.",
						"thai": "มันแย่ลงเรื่อยๆ.",
						"hindi": "यह बदतर होता जा रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…광채가 심상치 않아. 기록에 없는 폭주 직전의 증상이야.",
						"english": "...The radiance is unusual. These are symptoms of an imminent rampage, unrecorded.",
						"japanese": "…光が尋常じゃない。記録にない暴走直前の症状だ。",
						"chinese": "……光芒非同寻常。这是记录中没有的、暴走前兆。",
						"french": "...La lueur est anormale. Ce sont des symptômes d'une frénésie imminente, non enregistrés.",
						"spanish": "...El resplandor es inusual. Son síntomas de un inminente descontrol, no registrados.",
						"vietnamese": "...Ánh sáng này không bình thường. Đây là triệu chứng trước khi bùng nổ, chưa từng được ghi nhận.",
						"thai": "...แสงนี้ไม่ปกติ. นี่คืออาการก่อนการอาละวาดที่ไม่มีบันทึก.",
						"hindi": "...चमक असामान्य है। ये अनियंत्रित होने के ठीक पहले के लक्षण हैं, जो दर्ज नहीं हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뿔잔이 이성을 잃기 직전이야. 마지막 진실을 읽어야 해.",
						"english": "The Horn is about to lose its reason. I must read the final truth.",
						"japanese": "뿔잔は理性を失う寸前だ。最後の真実を読まなければ。",
						"chinese": "뿔잔即将失去理智。必须读出最后的真相。",
						"french": "La Corne est sur le point de perdre la raison. Je dois lire la vérité finale.",
						"spanish": "El Cuerno está a punto de perder la razón. Debo leer la verdad final.",
						"vietnamese": "뿔잔 sắp mất đi lý trí. Phải đọc sự thật cuối cùng.",
						"thai": "뿔잔กำลังจะเสียสติ. ต้องอ่านความจริงสุดท้าย.",
						"hindi": "뿔잔 अपनी बुद्धि खोने वाला है। मुझे अंतिम सत्य पढ़ना होगा।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "계약의 룬이 일그러지고 있어. 절규가 찬가와 뒤섞이는군.",
						"english": "The rune of contract is distorting. Screams are mixing with hymns.",
						"japanese": "契約のルーンが歪んでいる。絶叫が賛歌と混じり合う。",
						"chinese": "契约符文正在扭曲。尖叫声与赞歌混杂。",
						"french": "La rune du contrat se déforme. Les cris se mêlent aux hymnes.",
						"spanish": "La runa del contrato se está distorsionando. Los gritos se mezclan con los himnos.",
						"vietnamese": "Lối khế ước đang biến dạng. Tiếng kêu gào hòa lẫn với thánh ca.",
						"thai": "รูนแห่งพันธะกำลังบิดเบี้ยว. เสียงกรีดร้องปะปนกับบทเพลงสรรเสริญ.",
						"hindi": "अनुबंध का रुन विकृत हो रहा है। चीखें भजनों के साथ घुल-मिल रही हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 하나로 수렴하고 있어. 이 만찬이 광기를 완성할 거야.",
						"english": "Everything converges into one. This feast will complete the madness.",
						"japanese": "全てが一つの点に収束している。この晩餐が狂気を完成させるだろう。",
						"chinese": "一切都汇聚成一点。这场晚宴将使疯狂臻至完美。",
						"french": "Tout converge vers un seul point. Ce festin achèvera la folie.",
						"spanish": "Todo converge en uno. Este banquete completará la locura.",
						"vietnamese": "Mọi thứ đang hội tụ thành một. Bữa tiệc này sẽ hoàn tất sự điên rồ.",
						"thai": "ทุกสิ่งกำลังรวมเข้าเป็นหนึ่ง งานเลี้ยงนี้จะทำให้ความบ้าคลั่งสมบูรณ์",
						"hindi": "सब कुछ एक में विलीन हो रहा है। यह दावत पागलपन को पूरा करेगी।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…다 읽었어. 이 광채는 모든 것을 얼리는 망자의 축제.",
						"english": "...I've read it all. This radiance is a festival of the dead, freezing everything.",
						"japanese": "…全て読んだ。この輝きは全てを凍らせる、亡者の祭典だ。",
						"chinese": "……都读完了。这光芒是冻结一切的亡者盛宴。",
						"french": "...J'ai tout lu. Cette lueur est une fête des morts qui gèle tout.",
						"spanish": "...Lo he leído todo. Este resplandor es un festival de los muertos que congela todo.",
						"vietnamese": "...Tôi đã đọc hết rồi. Ánh sáng này là lễ hội của người chết, đóng băng mọi thứ.",
						"thai": "...ฉันอ่านทั้งหมดแล้ว แสงสว่างนี้คืองานฉลองของคนตาย ผู้แช่แข็งทุกสิ่ง",
						"hindi": "...मैंने सब पढ़ लिया। यह चमक मृतकों का उत्सव है, जो सब कुछ जमा देती है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "망자?",
						"english": "The dead?",
						"japanese": "亡者だと？",
						"chinese": "亡者？",
						"french": "Les morts ?",
						"spanish": "¿Los muertos?",
						"vietnamese": "Người chết?",
						"thai": "คนตาย?",
						"hindi": "मृतक?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이름 없는 희생자들의 절규가 뿔잔의 주인이 되려는 거야.",
						"english": "The screams of nameless victims are about to claim the horn's master.",
						"japanese": "名もなき犠牲者たちの絶叫が、角杯の主になろうとしている。",
						"chinese": "无名牺牲者的尖叫正试图成为角杯的主人。",
						"french": "Les cris des victimes anonymes sont sur le point de s'emparer du maître de la corne.",
						"spanish": "Los gritos de las víctimas sin nombre están a punto de reclamar al dueño del cuerno.",
						"vietnamese": "Tiếng thét của những nạn nhân vô danh sắp trở thành chủ nhân của chiếc sừng.",
						"thai": "เสียงกรีดร้องของเหยื่อไร้นามกำลังจะอ้างสิทธิ์ในเจ้าของเขา",
						"hindi": "गुमनाम पीड़ितों की चीखें हॉर्न के मालिक पर दावा करने वाली हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "우리가 이걸 끝내지 않으면, 그들의 이름은 영원히 잊힐 거야.",
						"english": "If we don't end this, their names will be forgotten forever.",
						"japanese": "我々がこれを終わらせなければ、彼らの名は永遠に忘れ去られるだろう。",
						"chinese": "如果我们不结束这一切，他们的名字将永远被遗忘。",
						"french": "Si nous n'y mettons pas fin, leurs noms seront oubliés à jamais.",
						"spanish": "Si no acabamos con esto, sus nombres serán olvidados para siempre.",
						"vietnamese": "Nếu chúng ta không kết thúc chuyện này, tên của họ sẽ bị lãng quên mãi mãi.",
						"thai": "ถ้าเราไม่หยุดสิ่งนี้ ชื่อของพวกเขาจะถูกลืมไปตลอดกาล",
						"hindi": "अगर हम इसे खत्म नहीं करते, तो उनके नाम हमेशा के लिए भुला दिए जाएंगे।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 지체할 시간이 없어. 광기가 폭주 직전이야.",
						"english": "No more time to waste. The madness is on the verge of eruption.",
						"japanese": "もう遅延する時間はない。狂気は暴走寸前だ。",
						"chinese": "没有时间再拖延了。疯狂即将爆发。",
						"french": "Plus de temps à perdre. La folie est sur le point d'éclater.",
						"spanish": "No hay más tiempo que perder. La locura está a punto de desatarse.",
						"vietnamese": "Không còn thời gian để chần chừ nữa. Sự điên rồ sắp bùng phát.",
						"thai": "ไม่มีเวลาจะรอช้าอีกแล้ว ความบ้าคลั่งกำลังจะปะทุ",
						"hindi": "अब और देर करने का समय नहीं है। पागलपन भड़कने वाला है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "버틸 수 있을까?",
						"english": "Can we endure?",
						"japanese": "耐えられるか？",
						"chinese": "能撑住吗？",
						"french": "Tiendrons-nous le coup ?",
						"spanish": "¿Podremos aguantar?",
						"vietnamese": "Chúng ta có trụ được không?",
						"thai": "เราจะทนได้ไหม?",
						"hindi": "क्या हम टिक पाएंगे?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "모든 것이 얼어붙을 거야. 우린 매듭지어야만 해.",
						"english": "Everything will freeze. We must conclude this.",
						"japanese": "全てが凍り付くだろう。我々は決着をつけねばならない。",
						"chinese": "一切都将冻结。我们必须了结这一切。",
						"french": "Tout va geler. Nous devons en finir.",
						"spanish": "Todo se congelará. Debemos concluir esto.",
						"vietnamese": "Mọi thứ sẽ đóng băng. Chúng ta phải kết thúc chuyện này.",
						"thai": "ทุกสิ่งจะกลายเป็นน้ำแข็ง เราต้องสะสางให้จบ",
						"hindi": "सब कुछ जम जाएगा। हमें इसे खत्म करना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이름 없는 자들의 절규를 멈춰야 해.",
						"english": "We must stop the screams of the nameless.",
						"japanese": "名もなき者たちの絶叫を止めねばならない。",
						"chinese": "我们必须阻止无名者的尖叫。",
						"french": "Nous devons arrêter les cris des sans-nom.",
						"spanish": "Debemos detener los gritos de los sin nombre.",
						"vietnamese": "Chúng ta phải ngăn chặn tiếng thét của những kẻ vô danh.",
						"thai": "เราต้องหยุดเสียงกรีดร้องของเหล่าไร้นาม",
						"hindi": "हमें गुमनाम लोगों की चीखों को रोकना होगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "드디어… 광기의 정점.",
						"english": "Finally… the pinnacle of madness.",
						"japanese": "ついに…狂気の頂点だ。",
						"chinese": "终于……疯狂的顶点。",
						"french": "Enfin… le summum de la folie.",
						"spanish": "Finalmente… la cumbre de la locura.",
						"vietnamese": "Cuối cùng… đỉnh cao của sự điên loạn.",
						"thai": "ในที่สุด…จุดสูงสุดของความบ้าคลั่ง",
						"hindi": "अंततः... उन्माद का चरम।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 만찬에 온 것을 환영한다. 곧 너희도 이름 없는 손님이 될 것이다.",
						"english": "Welcome to {random_boss}'s feast. Soon, you too shall become nameless guests.",
						"japanese": "{random_boss}の饗宴へようこそ。すぐに、お前たちも名もなき客となるだろう。",
						"chinese": "欢迎来到{random_boss}的盛宴。很快，你们也将成为无名之客。",
						"french": "Bienvenue au festin de {random_boss}. Bientôt, vous aussi deviendrez des invités sans nom.",
						"spanish": "Bienvenidos al festín de {random_boss}. Pronto, vosotros también seréis invitados sin nombre.",
						"vietnamese": "Chào mừng đến với bữa tiệc của {random_boss}. Sớm thôi, các ngươi cũng sẽ trở thành những vị khách vô danh.",
						"thai": "ยินดีต้อนรับสู่พิธีเลี้ยงของ {random_boss} ในไม่ช้า พวกเจ้าก็จะกลายเป็นแขกไร้นามเช่นกัน",
						"hindi": "{random_boss} की दावत में तुम्हारा स्वागत है। जल्द ही, तुम भी बेनाम मेहमान बन जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 우리가 그걸 끝낼 거야.",
						"english": "Nonsense! We're going to end this.",
						"japanese": "ふざけるな！俺たちが終わらせてやる。",
						"chinese": "胡说八道！我们会终结这一切的。",
						"french": "Balivernes ! Nous allons mettre fin à ça.",
						"spanish": "¡Tonterías! Nosotros acabaremos con esto.",
						"vietnamese": "Vớ vẩn! Chúng ta sẽ chấm dứt chuyện này.",
						"thai": "ไร้สาระ! เราจะจบมันเอง",
						"hindi": "बकवास! हम इसे खत्म करेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "기록할 마지막 진실… 지금이야.",
						"english": "The last truth to be recorded… now is the time.",
						"japanese": "記録すべき最後の真実…今だ。",
						"chinese": "需要记录的最后一个真相……就是现在。",
						"french": "La dernière vérité à consigner… c'est maintenant.",
						"spanish": "La última verdad a registrar… es ahora.",
						"vietnamese": "Sự thật cuối cùng cần được ghi lại… chính là lúc này.",
						"thai": "ความจริงสุดท้ายที่จะถูกบันทึก…คือตอนนี้",
						"hindi": "रिकॉर्ड करने की आखिरी सच्चाई... अब समय आ गया है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "감히… 만찬을 거부하다니. 너희의 이름은… 사라질 것이다.",
						"english": "How dare you… refuse the feast. Your names… shall vanish.",
						"japanese": "よくも…饗宴を拒むとは。お前たちの名は…消え失せるだろう。",
						"chinese": "竟敢……拒绝盛宴。你们的名字……将会消失。",
						"french": "Comment osez-vous… refuser le festin. Vos noms… disparaîtront.",
						"spanish": "Cómo osas… rechazar el festín. Vuestros nombres… desaparecerán.",
						"vietnamese": "Dám… từ chối bữa tiệc sao. Tên của các ngươi… sẽ biến mất.",
						"thai": "กล้าดียังไง…มาปฏิเสธพิธีเลี้ยง ชื่อของพวกเจ้า…จะต้องหายไป",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... दावत ठुकराने की। तुम्हारे नाम... मिट जाएंगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it… it's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Mince… ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt… chưa kết thúc đâu!",
						"thai": "ให้ตายสิ…ยังไม่จบ!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "안 돼… 이대로는…!",
						"english": "No... Not like this...!",
						"japanese": "だめだ… このままでは…！",
						"chinese": "不行… 不能这样下去…！",
						"french": "Non... Pas comme ça... !",
						"spanish": "No... ¡Así no puedo...!",
						"vietnamese": "Không... Không thể thế này được...!",
						"thai": "ไม่นะ... แบบนี้ไม่ไหวแล้ว...!",
						"hindi": "नहीं... ऐसे नहीं चलेगा...!"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 광기는… 영원히… 회수될 뿐…",
						"english": "…Fools. Madness… merely… reclaims itself… eternally…",
						"japanese": "…愚か者どもめ。狂気は…永遠に…回収されるだけだ…",
						"chinese": "……愚蠢的东西。疯狂……只会……永远地……被收回……",
						"french": "…Imbéciles. La folie… ne fait que… se récupérer… éternellement…",
						"spanish": "…Necios. La locura… solo… se recupera… eternamente…",
						"vietnamese": "…Đồ ngốc. Sự điên loạn… chỉ… mãi mãi… được thu hồi…",
						"thai": "…เจ้าพวกโง่เขลา ความบ้าคลั่ง…จะถูกนำกลับคืนมา…ชั่วนิรันดร์…",
						"hindi": "...मूर्ख। उन्माद... बस... हमेशा के लिए... वापस आ जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝났어…!",
						"english": "It's over…!",
						"japanese": "終わった…！",
						"chinese": "结束了……！",
						"french": "C'est fini… !",
						"spanish": "¡Se acabó…!",
						"vietnamese": "Kết thúc rồi…!",
						"thai": "จบลงแล้ว…!",
						"hindi": "यह खत्म हो गया…!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이름 없는 자들의 기록에… 마침표를 찍었다.",
						"english": "A period has been put… on the records of the nameless.",
						"japanese": "名もなき者たちの記録に…終止符を打った。",
						"chinese": "在无名者的记录上……画上了句号。",
						"french": "Un point final a été mis… aux registres des sans-nom.",
						"spanish": "Se ha puesto punto final… a los registros de los sin nombre.",
						"vietnamese": "Một dấu chấm hết đã được đặt… vào ghi chép của những kẻ vô danh.",
						"thai": "จุดจบได้ถูกใส่ไว้…ในบันทึกของเหล่าไร้นาม",
						"hindi": "बेनामों के अभिलेखों पर… पूर्ण विराम लगा दिया गया है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "푸른 광채는 서서히 잦아들었다. 그러나 뿔잔은 여전히 거기 있었다. 다음 만찬을 기다리는 듯.",
						"english": "The blue glow slowly faded. But the horn goblet remained, as if awaiting the next feast.",
						"japanese": "青い輝きは徐々に薄れた。しかし、角杯はまだそこにあった。次の饗宴を待っているかのように。",
						"chinese": "蓝色的光芒渐渐消退。然而，那只角杯依然在那里，仿佛在等待下一场盛宴。",
						"french": "La lueur bleue s'estompa lentement. Mais le calice en corne était toujours là, comme s'il attendait le prochain festin.",
						"spanish": "El resplandor azul se desvaneció lentamente. Pero el cáliz de cuerno seguía allí, como esperando el próximo festín.",
						"vietnamese": "Ánh sáng xanh lam dần dần mờ đi. Nhưng chiếc cốc sừng vẫn còn đó, như thể đang chờ đợi bữa tiệc tiếp theo.",
						"thai": "แสงสีน้ำเงินค่อยๆ จางหายไป แต่ถ้วยเขาขนาดใหญ่ยังคงอยู่ที่นั่น ราวกับกำลังรอคอยพิธีเลี้ยงครั้งต่อไป",
						"hindi": "नीली चमक धीरे-धीरे फीकी पड़ गई। लेकिन सींग का प्याला वहीं था, मानो अगली दावत का इंतज़ार कर रहा हो।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
