export const scenario_forest_glittercap_32_03 = {
	"scenario_id": "forest_glittercap_32_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 오래된 비밀을 품고 있었다.",
			"완벽해 보였던 여왕의 왕국, 그 이면에 드리워진 어설픈 그림자.",
			"금지된 의식의 잔해. 어딘가 삐걱이는 불협화음.",
			"구원이 파멸일 수도 있음을, 우리는 깨달아가고 있었다."
		],
		"english": [
			"The forest held an ancient secret.",
			"The Queen's seemingly perfect kingdom, overshadowed by a clumsy shadow.",
			"Remnants of a forbidden ritual. A discordant creak somewhere.",
			"We were realizing that salvation might be ruin."
		],
		"japanese": [
			"森は古き秘密を抱えていた。",
			"完璧に見えた女王の王国、その裏に潜む不器用な影。",
			"禁断の儀式の残骸。どこかで軋む不協和音。",
			"救済が破滅であるかもしれないと、私たちは気づき始めていた。"
		],
		"chinese": [
			"森林隐藏着一个古老的秘密。",
			"女王看似完美的王国，其背后却笼罩着笨拙的阴影。",
			"禁忌仪式的残骸。某处传来的刺耳不和谐音。",
			"我们逐渐意识到，救赎可能也是毁灭。"
		],
		"french": [
			"La forêt recelait un ancien secret.",
			"Le royaume apparemment parfait de la Reine, assombri par une ombre maladroite.",
			"Les vestiges d'un rituel interdit. Une dissonance grinçante quelque part.",
			"Nous réalisions que le salut pouvait être la ruine."
		],
		"spanish": [
			"El bosque guardaba un antiguo secreto.",
			"El reino aparentemente perfecto de la Reina, ensombrecido por una torpe sombra.",
			"Restos de un ritual prohibido. Una discordancia chirriante en algún lugar.",
			"Estábamos dándonos cuenta de que la salvación podría ser la ruina."
		],
		"vietnamese": [
			"Rừng già ôm giữ một bí mật cổ xưa.",
			"Vương quốc tưởng chừng hoàn hảo của Nữ hoàng, ẩn chứa một bóng đen vụng về.",
			"Tàn dư của nghi lễ cấm. Một sự lệch tông cọt kẹt đâu đó.",
			"Chúng tôi dần nhận ra rằng cứu rỗi cũng có thể là sự hủy diệt."
		],
		"thai": [
			"ป่าซ่อนความลับโบราณไว้",
			"อาณาจักรของราชินีที่ดูสมบูรณ์แบบ กลับมีเงาแห่งความไม่สมบูรณ์ปกคลุมอยู่",
			"ซากพิธีกรรมต้องห้าม เสียงไม่ประสานที่ดังเอี๊ยดอ๊าดจากที่ใดที่หนึ่ง",
			"เรากำลังตระหนักว่าการไถ่อาจนำมาซึ่งความพินาศ"
		],
		"hindi": [
			"वन में एक प्राचीन रहस्य छिपा था।",
			"रानी का प्रतीत होता परिपूर्ण साम्राज्य, जिस पर एक अनाड़ी छाया मंडरा रही थी।",
			"निषिद्ध अनुष्ठान के अवशेष। कहीं से आती एक कर्कश बेसुरी आवाज़।",
			"हम समझ रहे थे कि मोक्ष भी विनाश हो सकता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "발걸음이 닿은 곳은 낡은 기록이 쌓인 연구실이었다.",
						"english": "My footsteps led to a laboratory filled with old records.",
						"japanese": "足が向かった先は、古い記録が積み重なった研究室だった。",
						"chinese": "脚步所及之处，是一间堆满了旧记录的实验室。",
						"french": "Mes pas me menèrent à un laboratoire rempli de vieux dossiers.",
						"spanish": "Mis pasos me llevaron a un laboratorio lleno de viejos registros.",
						"vietnamese": "Bước chân tôi dẫn đến một phòng thí nghiệm chất đầy tài liệu cũ kỹ.",
						"thai": "ก้าวเดินมาถึงห้องทดลองที่เต็มไปด้วยบันทึกเก่าๆ",
						"hindi": "मेरे कदम एक पुरानी अभिलेखों से भरी प्रयोगशाला में जा पहुँचे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 다 뭐야? 이상한 낙서투성이잖아.",
						"english": "What is all this? It's full of strange scribbles.",
						"japanese": "これ、一体何？変な落書きだらけじゃないか。",
						"chinese": "这都是些什么？全是奇怪的涂鸦。",
						"french": "C'est quoi tout ça ? Plein de gribouillis étranges.",
						"spanish": "¿Qué es todo esto? Está lleno de garabatos extraños.",
						"vietnamese": "Mấy cái này là gì vậy? Toàn là nét vẽ nguệch ngoạc kỳ lạ.",
						"thai": "นี่มันอะไรกันเนี่ย? เต็มไปด้วยรอยขีดเขียนประหลาดๆ",
						"hindi": "यह सब क्या है? अजीबोगरीब लिखावट से भरा है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ivy",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쉿, 조용히 해. 여왕님의 비밀 장소니까.",
						"english": "Shh, quiet. This is the Queen's secret place.",
						"japanese": "シッ、静かに。ここは女王様の秘密の場所だから。",
						"chinese": "嘘，安静。这是女王陛下的秘密场所。",
						"french": "Chut, silence. C'est le lieu secret de la Reine.",
						"spanish": "Shh, silencio. Este es el lugar secreto de la Reina.",
						"vietnamese": "Suỵt, im lặng nào. Đây là nơi bí mật của Nữ hoàng đấy.",
						"thai": "ชู่ว์ เงียบหน่อย นี่คือสถานที่ลับของราชินีนะ",
						"hindi": "श्श्श, चुप रहो। यह रानी का गुप्त स्थान है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 있는 건 전부… 여왕님이 따라 하려다 실패한 흔적들이야.",
						"english": "Everything here... are traces of the Queen's failed attempts to replicate something.",
						"japanese": "ここにあるのは全部…女王様が真似しようとして失敗した痕跡よ。",
						"chinese": "这里的一切……都是女王陛下试图模仿却失败的痕迹。",
						"french": "Tout ce qui est ici... sont les traces des tentatives infructueuses de la Reine pour reproduire quelque chose.",
						"spanish": "Todo lo que hay aquí... son rastros de los intentos fallidos de la Reina por replicar algo.",
						"vietnamese": "Mọi thứ ở đây... đều là dấu vết của những lần Nữ hoàng cố gắng sao chép nhưng thất bại.",
						"thai": "ทั้งหมดที่นี่...คือร่องรอยความล้มเหลวของราชินีที่พยายามจะเลียนแบบ",
						"hindi": "यहाँ सब कुछ... रानी के नकल करने के विफल प्रयासों के निशान हैं।"
					},
					"speaker": "ivy",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivy",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 '식물 융합 의식'이라고. 아주 오래전, 금기시됐던 부족의 지식이야.",
						"english": "This is the 'Plant Fusion Ritual.' An ancient, forbidden tribal knowledge.",
						"japanese": "これは「植物融合の儀式」よ。ずっと昔、禁忌とされた部族の知識だわ。",
						"chinese": "这是“植物融合仪式”。是很久以前，被禁忌的部落知识。",
						"french": "C'est le « Rituel de Fusion Végétale ». Une connaissance tribale ancienne, interdite.",
						"spanish": "Este es el 'Ritual de Fusión Vegetal'. Un antiguo conocimiento tribal prohibido.",
						"vietnamese": "Đây là 'Nghi lễ Dung hợp Thực vật'. Một tri thức bộ lạc cổ xưa, từng bị cấm kỵ.",
						"thai": "นี่คือ 'พิธีกรรมหลอมรวมพืช' เป็นความรู้ของชนเผ่าที่ถูกห้ามมานานแล้ว",
						"hindi": "यह 'वनस्पति संलयन अनुष्ठान' है। बहुत पहले से वर्जित जनजातीय ज्ञान।"
					},
					"speaker": "ivy",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "금기? 그럼 여왕이 그걸 따라 한 거라고?",
						"english": "Forbidden? So the Queen copied it?",
						"japanese": "禁忌？じゃあ、女王様がそれを真似したってこと？",
						"chinese": "禁忌？那女王模仿了这个？",
						"french": "Interdit ? Alors la Reine l'a copié ?",
						"spanish": "¿Prohibido? ¿Entonces la Reina lo copió?",
						"vietnamese": "Cấm kỵ? Vậy là Nữ hoàng đã bắt chước nó sao?",
						"thai": "ต้องห้ามเหรอ? งั้นราชินีก็เลียนแบบมันน่ะสิ?",
						"hindi": "वर्जित? तो रानी ने उसकी नकल की?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "엉성하게. 아주 엉성하게 말이지. 여왕님은 항상 남의 걸 베끼는 데 재주가 있었거든.",
						"english": "Clumsily. Very clumsily, indeed. The Queen always had a knack for copying others.",
						"japanese": "ずさんに。とてもずさんだったわ。女王様はいつも他人のものを真似るのが得意だったもの。",
						"chinese": "拙劣地。非常拙劣。女王陛下总是有模仿别人东西的才能。",
						"french": "Maladroitement. Très maladroitement, en effet. La Reine a toujours eu le don de copier les autres.",
						"spanish": "Torpe. Muy torpe, de verdad. La Reina siempre tuvo la habilidad de copiar a los demás.",
						"vietnamese": "Vụng về. Rất vụng về. Nữ hoàng luôn có tài sao chép của người khác.",
						"thai": "ห่วยแตก ห่วยแตกมากเลยนะ พระราชินีมีความสามารถพิเศษในการลอกเลียนแบบของคนอื่นเสมอ",
						"hindi": "बेतरतीब ढंग से। बहुत बेतरतीब ढंग से। महारानी को हमेशा दूसरों की नक़ल करने में महारत हासिल थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 450
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 의식의 핵심은 '완벽한 조화'인데… 여왕님은 언제나 '과장된 아름다움'만 추구했어.",
						"english": "The core of this ritual is 'perfect harmony'... but the Queen always pursued only 'exaggerated beauty'.",
						"japanese": "この儀式の核は「完璧な調和」なのに…女王様はいつも「誇張された美」ばかりを追い求めたわ。",
						"chinese": "这个仪式的核心是“完美和谐”…但女王陛下却总是追求“夸张的美丽”。",
						"french": "Le cœur de ce rituel est 'l'harmonie parfaite'... mais la Reine a toujours recherché uniquement la 'beauté exagérée'.",
						"spanish": "El núcleo de este ritual es la 'armonía perfecta'... pero la Reina siempre persiguió sólo la 'belleza exagerada'.",
						"vietnamese": "Cốt lõi của nghi lễ này là 'sự hài hòa hoàn hảo'... nhưng Nữ hoàng luôn chỉ theo đuổi 'vẻ đẹp khoa trương'.",
						"thai": "แก่นแท้ของพิธีกรรมนี้คือ 'ความกลมกลืนที่สมบูรณ์แบบ'... แต่พระราชินีกลับใฝ่หาแต่ 'ความงามที่เกินจริง' เสมอ",
						"hindi": "इस अनुष्ठान का सार 'पूर्ण सामंजस्य' है... लेकिन महारानी ने हमेशा 'अतिरंजित सुंदरता' का ही पीछा किया।"
					},
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 이렇게 부자연스러운 숲이 된 거였나?",
						"english": "So that's why this forest became so unnatural?",
						"japanese": "だから、こんな不自然な森になったの？",
						"chinese": "所以，这片森林才变得如此不自然吗？",
						"french": "C'est pour ça que cette forêt est devenue si artificielle ?",
						"spanish": "¿Por eso este bosque se volvió tan antinatural?",
						"vietnamese": "Vậy ra đó là lý do khu rừng này trở nên bất thường như vậy sao?",
						"thai": "งั้นนี่คือเหตุผลที่ป่าแห่งนี้ดูไม่เป็นธรรมชาติเลยเหรอ?",
						"hindi": "तो इसीलिए यह जंगल इतना अप्राकृतिक हो गया?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "딱 보면 모르겠어? 흉내 낸 티가 너무 나잖아. 마치 칭찬받고 싶어 안달 난 애처럼.",
						"english": "Can't you tell just by looking? It's so obviously imitated. Like a child desperate for praise.",
						"japanese": "見れば分からない？真似してるのが丸分かりじゃない。まるで褒められたくて必死な子供みたいに。",
						"chinese": "一眼看不出来吗？模仿的痕迹太明显了。就像个渴望被赞美的孩子。",
						"french": "Tu ne le vois pas d'un coup d'œil ? Ça se voit qu'elle a imité. Comme un enfant désespéré d'obtenir des éloges.",
						"spanish": "¿No te das cuenta con sólo mirarlo? Se nota demasiado la imitación. Como un niño desesperado por elogios.",
						"vietnamese": "Nhìn là không biết sao? Dấu vết bắt chước quá rõ ràng. Cứ như một đứa trẻ khao khát được khen ngợi vậy.",
						"thai": "ดูแล้วไม่รู้เหรอ? มันเลียนแบบชัดเจนเกินไป เหมือนเด็กที่อยากได้รับคำชมจนตัวสั่นเลย",
						"hindi": "देखकर नहीं पता चलता? यह इतना स्पष्ट रूप से नक़ल किया गया है। जैसे कोई बच्चा तारीफ़ के लिए बेताब हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "칭찬…?",
						"english": "Praise...?",
						"japanese": "褒め言葉…？",
						"chinese": "赞美…？",
						"french": "Éloges...?",
						"spanish": "¿Elogios...?",
						"vietnamese": "Khen ngợi...?",
						"thai": "คำชม...?",
						"hindi": "तारीफ़...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 550,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여왕님은 완벽한 척하지만… 사실은 언제나 불안했어. 관심과 칭찬이 없으면 견디지 못했지.",
						"english": "The Queen pretends to be perfect... but in truth, she was always insecure. She couldn't bear to be without attention and praise.",
						"japanese": "女王様は完璧なふりをするけど…実はいつも不安だったわ。関心と称賛がなければ耐えられなかったのよ。",
						"chinese": "女王陛下假装完美…但实际上，她总是很不安。没有关注和赞美，她就无法忍受。",
						"french": "La Reine prétend être parfaite... mais en réalité, elle était toujours incertaine. Elle ne supportait pas d'être privée d'attention et d'éloges.",
						"spanish": "La Reina finge ser perfecta... pero en realidad, siempre fue insegura. No podía soportar estar sin atención y elogios.",
						"vietnamese": "Nữ hoàng giả vờ hoàn hảo... nhưng thực ra, cô ấy luôn bất an. Cô ấy không thể chịu đựng được nếu không có sự chú ý và lời khen ngợi.",
						"thai": "พระราชินีแสร้งทำเป็นสมบูรณ์แบบ... แต่ความจริงแล้ว นางมักจะไม่มั่นคงเสมอ นางทนไม่ได้หากไม่มีความสนใจและคำชมเชย",
						"hindi": "महारानी परिपूर्ण होने का दिखावा करती है... लेकिन सच्चाई यह है कि वह हमेशा असुरक्षित थी। वह ध्यान और प्रशंसा के बिना रह नहीं सकती थी।"
					},
					"speaker": "ivy",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 이 모든 일의 원인이라고?",
						"english": "That's the cause of all this?",
						"japanese": "それがこの全ての原因なの？",
						"chinese": "那就是这一切的起因吗？",
						"french": "C'est la cause de tout ça ?",
						"spanish": "¿Esa es la causa de todo esto?",
						"vietnamese": "Đó là nguyên nhân của tất cả những chuyện này sao?",
						"thai": "นั่นคือสาเหตุของเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या यही इन सब का कारण है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "그녀의 '구원'은 곧 '파멸'이야. 모두를 망치고, 스스로도 망가질 거야.",
						"english": "Her 'salvation' is actually 'destruction'. She will ruin everyone, and herself too.",
						"japanese": "彼女の「救済」はすなわち「破滅」よ。皆を台無しにし、自らも破滅するでしょう。",
						"chinese": "她的“救赎”很快就是“毁灭”。她会毁掉所有人，也会毁掉自己。",
						"french": "Son 'salut' est en fait la 'destruction'. Elle ruinera tout le monde, et elle-même aussi.",
						"spanish": "Su 'salvación' es en realidad 'destrucción'. Arruinará a todos y a sí misma.",
						"vietnamese": "'Cứu rỗi' của cô ấy thực chất là 'hủy diệt'. Cô ấy sẽ hủy hoại mọi người, và cả chính mình nữa.",
						"thai": " 'การไถ่ถอน' ของนางคือ 'ความพินาศ' นางจะทำลายทุกคน และทำลายตัวเองด้วย",
						"hindi": "उसकी 'मुक्ति' असल में 'विनाश' है। वह सबको बर्बाद कर देगी, और खुद भी बर्बाद हो जाएगी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "막아야 해…!",
						"english": "We have to stop her...!",
						"japanese": "止めないと…！",
						"chinese": "必须阻止她…！",
						"french": "Il faut l'arrêter...!",
						"spanish": "¡Tenemos que detenerla...!",
						"vietnamese": "Phải ngăn cản cô ta...!",
						"thai": "ต้องหยุดเธอให้ได้...!",
						"hindi": "हमें उसे रोकना होगा...!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기이한 에너지가 사그라들었다.",
						"english": "The strange energy has faded.",
						"japanese": "奇妙なエネルギーが消え去った。",
						"chinese": "奇异的能量消散了。",
						"french": "L'étrange énergie s'est estompée.",
						"spanish": "La extraña energía se desvaneció.",
						"vietnamese": "Năng lượng kỳ lạ đã tan biến.",
						"thai": "พลังงานประหลาดได้จางหายไปแล้ว",
						"hindi": "अजीब ऊर्जा कम हो गई है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쿨럭…! 감히… 감히… 여왕님을… 모욕하다니….",
						"english": "Cough...! How dare you... how dare you... insult the Queen...",
						"japanese": "ゴホッ…！よくも…よくも…女王様を…侮辱するなどと…。",
						"chinese": "咳…！竟敢…竟敢…侮辱女王陛下…。",
						"french": "Toussote… ! Comment osez-vous… comment osez-vous… insulter la Reine….",
						"spanish": "¡Cof...! ¡Cómo osas... cómo osas... insultar a la Reina...!",
						"vietnamese": "Khụ…! Dám… dám… sỉ nhục Nữ hoàng….",
						"thai": "แค่ก...! บังอาจ... บังอาจ... ดูหมิ่นองค์ราชินี...",
						"hindi": "खांसी...! तुम्हारी हिम्मत कैसे हुई... तुम्हारी हिम्मत कैसे हुई... महारानी का अपमान करने की..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그분은… 그분은 사랑이 필요했을 뿐…!",
						"english": "She... she just needed love...!",
						"japanese": "あの方は…あの方はただ愛が必要だっただけなのに…！",
						"chinese": "她…她只是需要爱而已…！",
						"french": "Elle… elle n'avait besoin que d'amour… !",
						"spanish": "Ella… ella solo necesitaba amor…!",
						"vietnamese": "Người ấy… Người ấy chỉ cần tình yêu thôi…!",
						"thai": "พระองค์... พระองค์เพียงแค่ต้องการความรักเท่านั้น...!",
						"hindi": "उन्हें... उन्हें बस प्यार की ज़रूरत थी...!"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사랑이… 이런 파멸을 불러왔다고?",
						"english": "Love... brought about such ruin?",
						"japanese": "愛が…このような破滅を招いたと？",
						"chinese": "爱…竟带来了这样的毁灭？",
						"french": "L'amour… a causé une telle ruine ?",
						"spanish": "¿El amor… causó tal ruina?",
						"vietnamese": "Tình yêu… lại gây ra sự hủy diệt thế này ư?",
						"thai": "ความรัก... เป็นสิ่งที่นำมาซึ่งความหายนะเช่นนี้หรือ?",
						"hindi": "प्यार... ऐसी बर्बादी लाया?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "봐. 결국 모든 건 그녀의… '불완전한 사랑' 때문이야.",
						"english": "See. In the end, it was all because of her... 'imperfect love.'",
						"japanese": "見ろ。結局、全ては彼女の…「不完全な愛」のせいだ。",
						"chinese": "看。归根结底，一切都源于她…‘不完美的爱’。",
						"french": "Vois. Au final, tout est dû à son… 'amour imparfait'.",
						"spanish": "Mira. Al final, todo fue por su... 'amor imperfecto'.",
						"vietnamese": "Xem kìa. Rốt cuộc, mọi thứ đều do 'tình yêu không hoàn hảo' của cô ấy.",
						"thai": "ดูสิ. สุดท้ายแล้ว ทุกสิ่งก็เป็นเพราะ... 'ความรักที่ไม่สมบูรณ์แบบ' ของเธอ",
						"hindi": "देखो। अंत में, यह सब उसके... 'अधूरे प्यार' की वजह से था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여왕의 광기는 어설픈 사랑에서 비롯된 것임을. 죄책감과 연민이 교차했다.",
						"english": "The Queen's madness, born of clumsy love. Guilt and pity intertwined.",
						"japanese": "女王の狂気は未熟な愛から生じた。罪悪感と憐憫が交錯した。",
						"chinese": "女王的疯狂源于拙劣的爱。罪恶感与怜悯交织。",
						"french": "La folie de la Reine, née d'un amour maladroit. Culpabilité et pitié s'entremêlaient.",
						"spanish": "La locura de la Reina, nacida de un amor torpe. Culpa y piedad se entrelazaron.",
						"vietnamese": "Sự điên loạn của Nữ hoàng, sinh ra từ tình yêu vụng về. Tội lỗi và lòng trắc ẩn đan xen.",
						"thai": "ความบ้าคลั่งของราชินี เกิดจากรักที่เปราะบาง ความรู้สึกผิดและความเวทนาปะปนกัน",
						"hindi": "रानी का पागलपन, अधूरी मोहब्बत से उपजा। अपराधबोध और दया घुलमिल गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오래된 의식의 중심부. 기이한 에너지가 뿜어져 나왔다.",
						"english": "The core of an ancient ritual. Strange energy emanated.",
						"japanese": "古びた儀式の中心部。奇妙なエネルギーが噴き出していた。",
						"chinese": "古老仪式的中心。奇异的能量喷涌而出。",
						"french": "Le cœur d'un ancien rituel. Une énergie étrange en émanait.",
						"spanish": "El centro de un antiguo ritual. Una energía extraña emanaba.",
						"vietnamese": "Trung tâm của một nghi lễ cổ xưa. Năng lượng kỳ lạ phun trào.",
						"thai": "ใจกลางของพิธีกรรมโบราณ พลังงานแปลกประหลาดพวยพุ่งออกมา",
						"hindi": "एक प्राचीन अनुष्ठान का केंद्र। अजीब ऊर्जा निकल रही थी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 여왕님의 위대한 뜻을 이해 못 하는군.",
						"english": "Insignificant beings. You fail to grasp the Queen's grand design.",
						"japanese": "取るに足らぬ者たちめ。女王様の偉大なる御心を理解できぬとは。",
						"chinese": "无知之辈。尔等岂能理解女王陛下的伟大旨意。",
						"french": "Créatures insignifiantes. Vous ne comprenez pas la grande volonté de la Reine.",
						"spanish": "Seres insignificantes. No comprendéis la gran voluntad de la Reina.",
						"vietnamese": "Đồ thấp hèn. Các ngươi không thể hiểu được ý chí vĩ đại của Nữ hoàng.",
						"thai": "พวกไร้ค่า. เจ้าไม่เข้าใจพระประสงค์อันยิ่งใหญ่ขององค์ราชินีเลย",
						"hindi": "तुच्छ प्राणी। तुम महारानी की महान इच्छा को समझ नहीं सकते।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여왕의 뜻? 엉터리 의식으로 모두를 망치는 게?",
						"english": "The Queen's will? Ruining everyone with a botched ritual?",
						"japanese": "女王の御心だと？お粗末な儀式で全てを台無しにするのがか？",
						"chinese": "女王的旨意？用拙劣的仪式毁掉一切吗？",
						"french": "La volonté de la Reine ? Détruire tout le monde avec un rituel raté ?",
						"spanish": "¿La voluntad de la Reina? ¿Arruinar a todos con un ritual chapucero?",
						"vietnamese": "Ý chí của Nữ hoàng? Phá hoại mọi thứ bằng một nghi lễ sai lầm ư?",
						"thai": "พระประสงค์ของราชินีงั้นหรือ? ทำลายทุกสิ่งด้วยพิธีกรรมที่ผิดพลาดเนี่ยนะ?",
						"hindi": "महारानी की इच्छा? एक असफल अनुष्ठान से सबको बर्बाद करना?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히…! 그분은 완벽해! 감히 불순한 눈으로 그분을 평가하다니!",
						"english": "How dare you...! She is perfect! How dare you judge her with impure eyes!",
						"japanese": "よくも…！あの方は完璧だ！よくも不純な目で評価しようなどと！",
						"chinese": "竟敢…！她完美无瑕！竟敢用不敬的眼光评判她！",
						"french": "Comment osez-vous…! Elle est parfaite ! Comment osez-vous la juger avec des yeux impurs !",
						"spanish": "¡Cómo osas...! ¡Ella es perfecta! ¡Cómo osas juzgarla con ojos impuros!",
						"vietnamese": "Dám lắm…! Người ấy hoàn hảo! Dám dùng ánh mắt bất tịnh để đánh giá Người ư!",
						"thai": "บังอาจ...! พระองค์สมบูรณ์แบบ! บังอาจตัดสินพระองค์ด้วยสายตาที่ไม่บริสุทธิ์!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...! वह बिल्कुल सही हैं! तुम्हारी हिम्मत कैसे हुई उन्हें अपवित्र नज़रों से आंकने की!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "누가 봐도 실패한 의식이야.",
						"english": "It's clearly a failed ritual.",
						"japanese": "誰が見ても失敗した儀式だ。",
						"chinese": "这分明就是一场失败的仪式。",
						"french": "C'est un rituel clairement raté.",
						"spanish": "Es un ritual fallido a todas luces.",
						"vietnamese": "Ai nhìn cũng thấy đó là một nghi lễ thất bại.",
						"thai": "ไม่ว่าใครก็เห็นว่ามันเป็นพิธีกรรมที่ล้มเหลว",
						"hindi": "यह साफ तौर पर एक असफल अनुष्ठान है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 너희도 여왕님의 정화가 필요하군!",
						"english": "Silence! You too need the Queen's purification!",
						"japanese": "黙れ！お前たちも女王様の浄化が必要なようだな！",
						"chinese": "闭嘴！你们也需要女王陛下的净化！",
						"french": "Tais-toi ! Vous aussi avez besoin de la purification de la Reine !",
						"spanish": "¡Cállate! ¡Vosotros también necesitáis la purificación de la Reina!",
						"vietnamese": "Câm miệng! Các ngươi cũng cần sự thanh tẩy của Nữ hoàng!",
						"thai": "เงียบซะ! พวกเจ้าเองก็ต้องการการชำระล้างจากราชินีเช่นกัน!",
						"hindi": "चुप रहो! तुम्हें भी महारानी के शुद्धिकरण की ज़रूरत है!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어설픈 의식의 기운이 탐험대를 덮쳤다.",
						"english": "The clumsy ritual's aura overwhelmed the expedition.",
						"japanese": "拙い儀式の気が探検隊を襲った。",
						"chinese": "拙劣仪式的气息笼罩了探险队。",
						"french": "L'aura d'un rituel maladroit submergea l'expédition.",
						"spanish": "El aura de un ritual torpe cubrió a la expedición.",
						"vietnamese": "Hào quang vụng về của nghi lễ bao trùm đoàn thám hiểm.",
						"thai": "พลังงานของพิธีกรรมที่ไม่สมบูรณ์เข้าปกคลุมคณะสำรวจ",
						"hindi": "एक कच्चे अनुष्ठान की आभा ने अभियान दल को ढक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크크… 여왕님은 완벽해. 너희 같은 건…!",
						"english": "Heh heh... The Queen is perfect. You are nothing...!",
						"japanese": "クク… 女王様は完璧だ。お前らごときが…！",
						"chinese": "呵呵… 女王陛下是完美的。你们这种货色…！",
						"french": "Hmph... La Reine est parfaite. Vous n'êtes rien...!",
						"spanish": "Je je... La Reina es perfecta. ¡Ustedes no son nada...!",
						"vietnamese": "Khà khà... Nữ hoàng hoàn hảo. Bọn ngươi là thứ gì...!",
						"thai": "ฮ่าๆ... ราชินีไร้ที่ติ พวกแกน่ะ... เทียบไม่ติด!",
						"hindi": "हँ हँ... रानी एकदम सही हैं। तुम जैसे तो कुछ भी नहीं...!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 그녀의 가면을 벗길 거야.",
						"english": "No... It's not over yet. I'll unmask her.",
						"japanese": "いや… まだ終わってない。彼女の仮面を剥がしてやる。",
						"chinese": "不… 还没结束。我要揭下她的面具。",
						"french": "Non... Ce n'est pas encore fini. Je vais lui arracher son masque.",
						"spanish": "No... Todavía no ha terminado. Le quitaré la máscara.",
						"vietnamese": "Không... Vẫn chưa kết thúc. Ta sẽ lột mặt nạ của cô ta.",
						"thai": "ไม่... ยังไม่จบแค่นี้ ฉันจะเผยโฉมที่แท้จริงของนาง",
						"hindi": "नहीं… अभी खत्म नहीं हुआ है। मैं उसका नकाब उतारूंगा।"
					}
				}
			]
		}
	]
} as const;
