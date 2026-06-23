export const scenario_desert_kenshin_21_05 = {
	"scenario_id": "desert_kenshin_21_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_DesertEcho_Kenshin_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "황량한 사막의 가장 깊은 곳. 고대 도시의 흔적이 먼지 속에 묻혔다.",
						"english": "Deepest in the desolate desert. Traces of an ancient city buried in dust.",
						"japanese": "荒涼たる砂漠の最も深い場所。古代都市の痕跡は塵の中に埋もれた。",
						"chinese": "荒凉沙漠的最深处。古老城市的痕迹被埋在尘埃中。",
						"french": "Au plus profond du désert désolé. Des traces d'une ville antique enfouies dans la poussière.",
						"spanish": "En lo más profundo del desierto desolado. Rastros de una ciudad antigua sepultados en el polvo.",
						"vietnamese": "Sâu nhất trong sa mạc hoang vắng. Dấu vết của một thành phố cổ đã bị chôn vùi trong cát bụi.",
						"thai": "ลึกที่สุดในทะเลทรายที่รกร้าง ร่องรอยของเมืองโบราณถูกฝังอยู่ในฝุ่น",
						"hindi": "वीरान रेगिस्तान के सबसे गहरे में। एक प्राचीन शहर के निशान धूल में दबे हुए थे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 마지막이야.",
						"english": "This is... the end.",
						"japanese": "ここが… 最後だ。",
						"chinese": "这里是……结局。",
						"french": "C'est... la fin.",
						"spanish": "Aquí es... el final.",
						"vietnamese": "Đây là... kết thúc.",
						"thai": "นี่คือ... จุดจบ",
						"hindi": "यह है... अंत।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "그래. 더 이상 숨을 곳도, 도망칠 곳도 없어.",
						"english": "Yes. There's nowhere left to hide, nowhere left to run.",
						"japanese": "そうだ。もう隠れる場所も、逃げる場所もない。",
						"chinese": "是的。再也没有地方可躲，也没有地方可逃了。",
						"french": "Oui. Il n'y a plus nulle part où se cacher, nulle part où fuir.",
						"spanish": "Sí. Ya no hay dónde esconderse, ni dónde huir.",
						"vietnamese": "Đúng vậy. Không còn nơi nào để trốn, không còn nơi nào để chạy.",
						"thai": "ใช่แล้ว ไม่มีที่ให้ซ่อนอีกแล้ว ไม่มีที่ให้หนีอีกแล้ว",
						"hindi": "हाँ। अब छिपने की कोई जगह नहीं, भागने की कोई जगह नहीं।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 진실이 이곳에 있어.",
						"english": "All truth lies here.",
						"japanese": "全ての真実がここにある。",
						"chinese": "所有的真相都在这里。",
						"french": "Toute la vérité est ici.",
						"spanish": "Toda la verdad está aquí.",
						"vietnamese": "Tất cả sự thật đều ở đây.",
						"thai": "ความจริงทั้งหมดอยู่ที่นี่",
						"hindi": "सारी सच्चाई यहीं है।"
					},
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어둠이 너무 깊어. 하지만 포기할 순 없어.",
						"english": "The darkness is too deep. But I can't give up.",
						"japanese": "闇が深すぎる。だが、諦めるわけにはいかない。",
						"chinese": "黑暗太深了。但我不能放弃。",
						"french": "Les ténèbres sont trop profondes. Mais je ne peux pas abandonner.",
						"spanish": "La oscuridad es demasiado profunda. Pero no puedo rendirme.",
						"vietnamese": "Bóng tối quá sâu. Nhưng tôi không thể bỏ cuộc.",
						"thai": "ความมืดมิดช่างลึกล้ำ แต่ฉันจะยอมแพ้ไม่ได้",
						"hindi": "अंधेरा बहुत गहरा है। लेकिन मैं हार नहीं मान सकता।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "켄신은 왜 이런 곳에 숨어있지?",
						"english": "Why is Kenshin hiding in a place like this?",
						"japanese": "ケンシンはなぜこんな場所に隠れているんだ？",
						"chinese": "剑心为什么会藏在这种地方？",
						"french": "Pourquoi Kenshin se cache-t-il dans un endroit pareil ?",
						"spanish": "¿Por qué Kenshin se esconde en un lugar como este?",
						"vietnamese": "Tại sao Kenshin lại trốn ở một nơi như thế này?",
						"thai": "ทำไมเคนชินถึงซ่อนตัวอยู่ในที่แบบนี้?",
						"hindi": "केंशिन ऐसी जगह क्यों छिपा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그가… 정말 '수호자'일까?",
						"english": "Is he... truly the 'Guardian'?",
						"japanese": "彼が…本当に『守護者』なのか？",
						"chinese": "他…真的是‘守护者’吗？",
						"french": "Est-il… vraiment le 'Gardien' ?",
						"spanish": "¿Es él... realmente el 'Guardián'?",
						"vietnamese": "Anh ta... có thực sự là 'Người bảo vệ' không?",
						"thai": "เขา... คือ 'ผู้พิทักษ์' จริงๆ เหรอ?",
						"hindi": "क्या वह... सच में 'संरक्षक' है?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "'수호자의 저주'는… 사실 권력자들이 만들어낸 거짓이었어.",
						"english": "The 'Guardian's Curse' was... actually a lie created by those in power.",
						"japanese": "『守護者の呪い』は…実は権力者たちが作り出した嘘だった。",
						"chinese": "‘守护者的诅咒’…其实是掌权者编造的谎言。",
						"french": "La 'Malédiction du Gardien' était… en fait un mensonge créé par les puissants.",
						"spanish": "La 'Maldición del Guardián' era... en realidad una mentira creada por los poderosos.",
						"vietnamese": "'Lời nguyền của Người bảo vệ'... thực ra là một lời nói dối do những kẻ có quyền lực tạo ra.",
						"thai": " 'คำสาปของผู้พิทักษ์' เป็น... เรื่องโกหกที่ถูกสร้างขึ้นโดยผู้มีอำนาจ",
						"hindi": "'अभिभावक का श्राप'… दरअसल सत्ताधारियों द्वारा बनाया गया झूठ था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 오아시스의 물이 마른 건…?",
						"english": "Then the oasis drying up...?",
						"japanese": "ではオアシスの水が枯れたのは…？",
						"chinese": "那绿洲的水干涸了…？",
						"french": "Alors l'assèchement de l'oasis… ?",
						"spanish": "¿Entonces el oasis secándose...?",
						"vietnamese": "Vậy việc ốc đảo cạn nước là...?",
						"thai": "แล้วน้ำในโอเอซิสที่แห้งไปล่ะ...?",
						"hindi": "तो नखलिस्तान का सूखना…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "물을 독점하고, 우리를 통제하기 위한 수단이었을 뿐.",
						"english": "It was merely a means to monopolize water and control us.",
						"japanese": "水を独占し、我々を支配するための手段に過ぎなかった。",
						"chinese": "不过是垄断水源、控制我们的手段而已。",
						"french": "Ce n'était qu'un moyen de monopoliser l'eau et de nous contrôler.",
						"spanish": "Era solo un medio para monopolizar el agua y controlarnos.",
						"vietnamese": "Nó chỉ là một phương tiện để độc chiếm nước và kiểm soát chúng ta.",
						"thai": "มันเป็นแค่การผูกขาดน้ำและควบคุมพวกเราเท่านั้น",
						"hindi": "यह सिर्फ पानी पर एकाधिकार करने और हमें नियंत्रित करने का एक साधन था।"
					},
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사막의 영혼이 비명을 지르는 듯했다. 모든 생명이 고통에 공명하는 것처럼.",
						"english": "The soul of the desert seemed to scream. As if all life resonated with pain.",
						"japanese": "砂漠の魂が叫び声を上げているかのようだった。全ての生命が苦痛に共鳴しているかのように。",
						"chinese": "沙漠的灵魂似乎在尖叫。仿佛所有生命都在痛苦中共鸣。",
						"french": "L'âme du désert semblait crier. Comme si toute vie résonnait de douleur.",
						"spanish": "El alma del desierto parecía gritar. Como si toda vida resonara con dolor.",
						"vietnamese": "Linh hồn sa mạc dường như đang gào thét. Như thể mọi sự sống đang cộng hưởng với nỗi đau.",
						"thai": "จิตวิญญาณของทะเลทรายดูเหมือนจะกรีดร้อง ราวกับว่าทุกชีวิตกำลังสะท้อนความเจ็บปวด",
						"hindi": "रेगिस्तान की आत्मा चीख रही थी। जैसे सारा जीवन दर्द से गूँज रहा हो।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "켄신은… 이 모든 고통의 중심에 있어.",
						"english": "Kenshin is... at the heart of all this suffering.",
						"japanese": "ケンシンは…この全ての苦痛の中心にいる。",
						"chinese": "剑心…是所有这些痛苦的中心。",
						"french": "Kenshin est… au cœur de toute cette souffrance.",
						"spanish": "Kenshin está… en el centro de todo este sufrimiento.",
						"vietnamese": "Kenshin... là trung tâm của mọi đau khổ này.",
						"thai": "เคนชิน... อยู่ที่ใจกลางของความเจ็บปวดทั้งหมดนี้",
						"hindi": "केंशिन... इस सारे दुख के केंद्र में है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그의 슬픔이… 여기까지 느껴져.",
						"english": "His sorrow... I can feel it even here.",
						"japanese": "彼の悲しみが… ここまで伝わってくる。",
						"chinese": "他的悲伤……连我都能感受到。",
						"french": "Sa tristesse... Je la ressens jusqu'ici.",
						"spanish": "Su tristeza... La siento incluso aquí.",
						"vietnamese": "Nỗi buồn của anh ấy... Tôi cảm nhận được cả ở đây.",
						"thai": "ความโศกเศร้าของเขา... สัมผัสได้ถึงที่นี่เลย",
						"hindi": "उसका दुख... यहाँ तक महसूस हो रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그의 슬픔이… 사막을 병들게 했어.",
						"english": "His sorrow... it sickened the desert.",
						"japanese": "彼の悲しみが… 砂漠を病ませた。",
						"chinese": "他的悲伤……让沙漠病了。",
						"french": "Sa tristesse... a rendu le désert malade.",
						"spanish": "Su tristeza... enfermó el desierto.",
						"vietnamese": "Nỗi buồn của anh ấy... đã làm sa mạc héo mòn.",
						"thai": "ความโศกเศร้าของเขา... ทำให้ทะเลทรายป่วย",
						"hindi": "उसका दुख... रेगिस्तान को बीमार कर गया।"
					},
					"type": "speech",
					"speaker": "amir"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 걷히자, 거대한 검을 든 환영 검사, 켄신이 모습을 드러냈다. 그의 눈은 슬픔으로 가득했다.",
						"english": "As the sandstorm cleared, Kenshin, the Phantom Swordsman with his colossal blade, appeared. His eyes were filled with sorrow.",
						"japanese": "砂嵐が晴れると、巨大な剣を携えた幻影の剣士、ケンシンが現れた。彼の瞳は悲しみに満ちていた。",
						"chinese": "沙尘暴散去，手持巨剑的幻影剑士剑心现身。他的眼中充满了悲伤。",
						"french": "Alors que la tempête de sable se dissipait, Kenshin, l'épéiste fantôme à l'épée colossale, apparut. Ses yeux étaient emplis de tristesse.",
						"spanish": "Cuando la tormenta de arena se disipó, Kenshin, el Espadachín Fantasma con su hoja colosal, apareció. Sus ojos estaban llenos de tristeza.",
						"vietnamese": "Khi bão cát tan, Kenshin, Kiếm sĩ Ảo ảnh với thanh kiếm khổng lồ, xuất hiện. Đôi mắt anh ta tràn ngập nỗi buồn.",
						"thai": "เมื่อพายุทรายสงบลง เคนชิน นักดาบมายาผู้ถือดาบยักษ์ก็ปรากฏตัว ดวงตาของเขาเต็มไปด้วยความโศกเศร้า",
						"hindi": "जैसे ही रेत का तूफान हटा, विशाल तलवार लिए प्रेत तलवारबाज केंशिन प्रकट हुआ। उसकी आँखें दुख से भरी थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...왔는가. 이 비극의 끝을 보러.",
						"english": "...So you've come. To witness the end of this tragedy.",
						"japanese": "…来たか。この悲劇の終わりを見るために。",
						"chinese": "……你来了。来见证这场悲剧的结局吗。",
						"french": "...Vous êtes venu. Pour assister à la fin de cette tragédie.",
						"spanish": "...Has venido. A presenciar el fin de esta tragedia.",
						"vietnamese": "...Ngươi đã đến. Để chứng kiến kết thúc bi kịch này.",
						"thai": "...มาแล้วรึ เพื่อเป็นพยานในจุดจบของโศกนาฏกรรมนี้",
						"hindi": "...आ गए तुम। इस त्रासदी का अंत देखने।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "당신이… 사막을 병들게 했어!",
						"english": "You... you sickened the desert!",
						"japanese": "あなたが… 砂漠を病ませたんだ！",
						"chinese": "是你……让沙漠病了！",
						"french": "C'est vous... qui avez rendu le désert malade !",
						"spanish": "¡Tú... tú enfermaste el desierto!",
						"vietnamese": "Ngươi... ngươi đã làm sa mạc héo mòn!",
						"thai": "ท่าน... เป็นคนทำให้ทะเลทรายป่วย!",
						"hindi": "तुमने... रेगिस्तान को बीमार कर दिया!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나는... 지키려고 했을 뿐. 내 맹세가... 모든 것을 망쳤다.",
						"english": "I... merely tried to protect. My vow... ruined everything.",
						"japanese": "私は… 守ろうとしただけだ。私の誓いが… 全てを台無しにした。",
						"chinese": "我……只是想守护。我的誓言……毁了一切。",
						"french": "J'ai... seulement essayé de protéger. Mon serment... a tout gâché.",
						"spanish": "Yo... solo intenté proteger. Mi juramento... lo arruinó todo.",
						"vietnamese": "Ta... chỉ muốn bảo vệ. Lời thề của ta... đã hủy hoại tất cả.",
						"thai": "ข้า... แค่พยายามปกป้อง คำสาบานของข้า... ทำลายทุกสิ่ง",
						"hindi": "मैंने... बस बचाने की कोशिश की। मेरी प्रतिज्ञा ने... सब कुछ बर्बाद कर दिया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맹세? 무슨 맹세야!",
						"english": "A vow? What vow?!",
						"japanese": "誓い？何の誓いだ！",
						"chinese": "誓言？什么誓言！",
						"french": "Un serment ? Quel serment !",
						"spanish": "¿Un juramento? ¡¿Qué juramento?!",
						"vietnamese": "Lời thề? Lời thề gì chứ!",
						"thai": "คำสาบาน? คำสาบานอะไร!",
						"hindi": "प्रतिज्ञा? कैसी प्रतिज्ञा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그에게도… 사정이 있었던 거야.",
						"english": "He... had his reasons too.",
						"japanese": "彼にも… 事情があったんだ。",
						"chinese": "他……也有他的苦衷。",
						"french": "Lui aussi... avait ses raisons.",
						"spanish": "Él también... tenía sus razones.",
						"vietnamese": "Anh ấy... cũng có lý do riêng.",
						"thai": "เขาก็... มีเหตุผลของเขา",
						"hindi": "उसके भी... अपने कारण थे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "켄신의 검이 모든 희망을 산산조각 냈다.",
						"english": "Kenshin's blade shattered all hope.",
						"japanese": "ケンシンの剣が、全ての希望を打ち砕いた。",
						"chinese": "剑心之剑粉碎了所有希望。",
						"french": "La lame de Kenshin a brisé tout espoir.",
						"spanish": "La espada de Kenshin hizo añicos toda esperanza.",
						"vietnamese": "Kiếm của Kenshin đã phá tan mọi hy vọng.",
						"thai": "ดาบของเคนชินทำลายความหวังทั้งหมด",
						"hindi": "केंशिन की तलवार ने सारी उम्मीदें तोड़ दीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자여... 너희의 분노는... 또 다른 비극을 낳을 뿐.",
						"english": "Fool... your rage... will only birth another tragedy.",
						"japanese": "愚かな者よ…お前たちの怒りは…新たな悲劇を生むだけだ。",
						"chinese": "愚蠢之人……你们的愤怒……只会带来另一场悲剧。",
						"french": "Imbéciles... votre rage... n'engendrera qu'une autre tragédie.",
						"spanish": "Tonto... tu ira... solo engendrará otra tragedia.",
						"vietnamese": "Kẻ ngốc... cơn giận của ngươi... chỉ sinh ra một bi kịch khác mà thôi.",
						"thai": "เจ้าคนโง่...ความโกรธของเจ้า...จะนำมาซึ่งโศกนาฏกรรมอีกครั้งเท่านั้น",
						"hindi": "मूर्ख... तुम्हारा क्रोध... केवल एक और त्रासदी को जन्म देगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 우리는 멈추지 않아. 진실은… 반드시 밝혀질 거야.",
						"english": "No... we won't stop. The truth... will surely be revealed.",
						"japanese": "いいえ…私たちは止まらない。真実は…必ず明らかになる。",
						"chinese": "不……我们不会停止。真相……一定会大白。",
						"french": "Non... nous n'arrêterons pas. La vérité... sera sûrement révélée.",
						"spanish": "No... no nos detendremos. La verdad... será revelada.",
						"vietnamese": "Không... chúng ta sẽ không dừng lại. Sự thật... nhất định sẽ được phơi bày.",
						"thai": "ไม่...เราจะไม่หยุด ความจริง...จะต้องถูกเปิดเผย",
						"hindi": "नहीं... हम रुकेंगे नहीं। सच...ज़रूर सामने आएगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "다시 일어서야 해. 우리는 아직 끝나지 않았어.",
						"english": "We must rise again. We're not finished yet.",
						"japanese": "再び立ち上がらなければならない。私たちはまだ終わっていない。",
						"chinese": "我们必须再次站起来。我们还没结束。",
						"french": "Nous devons nous relever. Nous n'avons pas encore fini.",
						"spanish": "Debemos levantarnos de nuevo. Todavía no hemos terminado.",
						"vietnamese": "Chúng ta phải đứng dậy lần nữa. Chúng ta chưa kết thúc.",
						"thai": "เราต้องลุกขึ้นยืนอีกครั้ง เรายังไม่จบ",
						"hindi": "हमें फिर से उठना होगा। हम अभी खत्म नहीं हुए हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "켄신의 환영이 산산이 부서지며, 모래 폭풍 속에 인간의 형상이 희미하게 스쳐 지나갔다.",
						"english": "Kenshin's phantom shattered into pieces, and a faint human figure fleetingly passed through the sandstorm.",
						"japanese": "ケンシンの幻影が粉々に砕け散り、砂嵐の中に人間の姿がかすかに通り過ぎた。",
						"chinese": "剑心的幻影支离破碎，一个模糊的人影在沙尘暴中一闪而过。",
						"french": "Le fantôme de Kenshin se brisa en mille morceaux, et une silhouette humaine indistincte passa furtivement à travers la tempête de sable.",
						"spanish": "El fantasma de Kenshin se hizo añicos, y una tenue figura humana pasó fugazmente a través de la tormenta de arena.",
						"vietnamese": "Ảo ảnh của Kenshin vỡ vụn, và một hình bóng người mờ ảo thoáng qua trong bão cát.",
						"thai": "ร่างมายาของเคนชินแตกสลาย และร่างมนุษย์ที่เลือนรางก็ผ่านไปในพายุทราย",
						"hindi": "केंशिन का प्रेत टुकड़ों में बिखर गया, और रेत के तूफान में एक धुंधली मानवीय आकृति क्षण भर के लिए गुज़र गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "...사랑하는 이여... 이 맹세가... 너를 지킬 수 있었다면... 나는... 기꺼이...",
						"english": "...My beloved... if this vow... could have protected you... I would have... gladly...",
						"japanese": "…愛しい者よ… この誓いが… お前を守れたのなら… 私は… 喜んで…",
						"chinese": "……我所爱之人啊……如果这个誓言……能够保护你……我……会欣然……",
						"french": "...Ma bien-aimée... si ce serment... avait pu te protéger... j'aurais... volontiers...",
						"spanish": "...Mi amada... si este juramento... hubiera podido protegerte... yo... con gusto...",
						"vietnamese": "...Người yêu dấu... nếu lời thề này... có thể bảo vệ được em... ta sẽ... cam tâm...",
						"thai": "...ที่รักของข้า... หากคำสาบานนี้... สามารถปกป้องเจ้าได้... ข้า... ยินดี...",
						"hindi": "...मेरी प्रिय... यदि यह प्रतिज्ञा... तुम्हें बचा सकती... तो मैं... सहर्ष..."
					}
				},
				{
					"content": {
						"korean": "(충격) ...이게… 진실이었어?",
						"english": "(Shock) ...This was the truth?",
						"japanese": "(衝撃) ...これが…真実だったのか？",
						"chinese": "(震惊) ……这就是……真相吗？",
						"french": "(Choc) ...C'était ça... la vérité ?",
						"spanish": "(Conmoción) ...¿Esta... era la verdad?",
						"vietnamese": "(Sốc) ...Đây... là sự thật ư?",
						"thai": "(ตกใจ) ...นี่...คือความจริงหรือ?",
						"hindi": "(आश्चर्य) ...यह...सच था?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는… 희생자였어. 우리 모두가 속았던 거야.",
						"english": "He... was a victim. We were all deceived.",
						"japanese": "彼が…犠牲者だったんだ。私たちは皆、騙されていた。",
						"chinese": "他是……受害者。我们都被骗了。",
						"french": "Il... était une victime. Nous avons tous été trompés.",
						"spanish": "Él... era una víctima. Todos fuimos engañados.",
						"vietnamese": "Anh ta... là nạn nhân. Tất cả chúng ta đã bị lừa.",
						"thai": "เขา...คือเหยื่อ เราทุกคนถูกหลอก",
						"hindi": "वह...एक पीड़ित था। हम सभी को धोखा दिया गया था।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "권력자들… 용서 못 해.",
						"english": "Those in power... I can't forgive them.",
						"japanese": "権力者たち…許せない。",
						"chinese": "那些当权者……不可饶恕。",
						"french": "Les puissants... impardonnables.",
						"spanish": "Los poderosos... no los perdonaré.",
						"vietnamese": "Bọn quyền lực... không thể tha thứ.",
						"thai": "พวกมีอำนาจ...จะไม่มีวันให้อภัย",
						"hindi": "सत्ता में बैठे लोग... मैं उन्हें माफ़ नहीं कर सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사막의 오랜 비밀이 드러났다. 이제 새로운 정의를 향한 여정이 시작된다.",
						"english": "The desert's ancient secret is revealed. A journey for new justice begins now.",
						"japanese": "砂漠の古き秘密が明かされた。今、新たな正義への旅が始まる。",
						"chinese": "沙漠的古老秘密被揭示。现在，一场追求新正义的旅程开始了。",
						"french": "Le vieux secret du désert est révélé. Un voyage vers une nouvelle justice commence.",
						"spanish": "El antiguo secreto del desierto ha sido revelado. Ahora comienza un viaje hacia una nueva justicia.",
						"vietnamese": "Bí mật cổ xưa của sa mạc đã được tiết lộ. Giờ đây, cuộc hành trình tìm kiếm công lý mới bắt đầu.",
						"thai": "ความลับโบราณของทะเลทรายถูกเปิดเผย การเดินทางเพื่อความยุติธรรมครั้งใหม่ได้เริ่มต้นขึ้นแล้ว",
						"hindi": "रेगिस्तान का पुराना रहस्य सामने आ गया है। अब, नए न्याय की ओर एक यात्रा शुरू होती है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"켄신의 비극적인 진실이 사막에 울려 퍼졌다.",
			"오래된 권력의 거짓된 장막이 찢어졌다.",
			"우리는 분노를 넘어선 연민을 배웠고, 새로운 정의를 다짐했다.",
			"사막의 바람은 변했다. 이제는 희망을 싣고 불어올 것이다."
		],
		"english": [
			"Kenshin's tragic truth echoed across the desert.",
			"The false veil of old power was torn.",
			"We learned compassion beyond rage, and vowed for a new justice.",
			"The desert winds have changed. Now, they'll carry hope."
		],
		"japanese": [
			"ケンシンの悲劇的な真実が砂漠に響き渡った。",
			"古き権力の偽りの帳が引き裂かれた。",
			"我々は怒りを超えた憐憫を学び、新たな正義を誓った。",
			"砂漠の風は変わった。今、希望を乗せて吹くだろう。"
		],
		"chinese": [
			"剑心悲惨的真相在沙漠中回荡。",
			"旧势力虚假的帷幕被撕裂了。",
			"我们学会了超越愤怒的怜悯，并承诺了新的正义。",
			"沙漠的风变了。现在，它们将承载希望而来。"
		],
		"french": [
			"La vérité tragique de Kenshin résonna dans le désert.",
			"Le faux voile de l'ancien pouvoir fut déchiré.",
			"Nous avons appris la compassion au-delà de la rage, et juré une nouvelle justice.",
			"Les vents du désert ont changé. Maintenant, ils porteront l'espoir."
		],
		"spanish": [
			"La trágica verdad de Kenshin resonó en el desierto.",
			"El falso velo del antiguo poder fue desgarrado.",
			"Aprendimos compasión más allá de la ira, y prometimos una nueva justicia.",
			"Los vientos del desierto han cambiado. Ahora, traerán esperanza."
		],
		"vietnamese": [
			"Sự thật bi thảm của Kenshin vang vọng khắp sa mạc.",
			"Bức màn dối trá của quyền lực cũ đã bị xé toạc.",
			"Chúng ta đã học được lòng trắc ẩn vượt lên trên sự giận dữ, và thề vì một công lý mới.",
			"Gió sa mạc đã thay đổi. Giờ đây, chúng sẽ mang theo hy vọng."
		],
		"thai": [
			"ความจริงอันน่าเศร้าของเคนชินสะท้อนไปทั่วทะเลทราย",
			"ม่านแห่งอำนาจเก่าจอมปลอมถูกฉีกขาด",
			"เราได้เรียนรู้ความเมตตาที่เหนือกว่าความโกรธ และให้คำมั่นสัญญาต่อความยุติธรรมใหม่",
			"ลมทะเลทรายเปลี่ยนไปแล้ว บัดนี้มันจะพัดพาความหวังมา"
		],
		"hindi": [
			"केंशिन की दुखद सच्चाई रेगिस्तान में गूँज उठी।",
			"पुरानी शक्ति का झूठा पर्दा फट गया।",
			"हमने क्रोध से परे करुणा सीखी, और एक नए न्याय की कसम खाई।",
			"रेगिस्तान की हवाएँ बदल गई हैं। अब, वे आशा लेकर आएँगी।"
		]
	},
	"prologue": {
		"korean": [
			"사막의 심장부. 모든 것이 시작되고 끝나는 곳.",
			"'수호자' 켄신. 그의 검에는 분노가 아닌 슬픔이 배어 있었다.",
			"감춰진 진실은 잔혹했고, 우리는 그 앞에서 흔들렸다.",
			"하지만, 거짓된 평화는 깨져야 했다. 이제, 모든 것을 되돌릴 시간."
		],
		"english": [
			"The heart of the desert. Where all begins and ends.",
			"'Kenshin the Guardian.' His blade held sorrow, not rage.",
			"The hidden truth was cruel; we wavered before it.",
			"But false peace had to shatter. Now, it's time to set things right."
		],
		"japanese": [
			"砂漠の心臓部。全てが始まり、そして終わる場所。",
			"守護者ケンシン。彼の剣には怒りではなく悲しみが宿っていた。",
			"隠された真実は残酷で、我々はその前で揺らいだ。",
			"だが、偽りの平和は打ち破られるべきだった。今こそ、全てを元に戻す時。"
		],
		"chinese": [
			"沙漠的中心。万物始于此，亦终于此。",
			"“守护者”剑心。他的剑中浸透着悲伤，而非愤怒。",
			"隐藏的真相残酷无比，我们为此动摇了。",
			"然而，虚假的和平必须被打破。现在，是时候扭转一切了。"
		],
		"french": [
			"Le cœur du désert. Là où tout commence et finit.",
			"'Kenshin le Gardien.' Sa lame portait la tristesse, non la fureur.",
			"La vérité cachée était cruelle ; nous avons chancelé devant elle.",
			"Mais la fausse paix devait être brisée. Il est temps de tout rétablir."
		],
		"spanish": [
			"El corazón del desierto. Donde todo empieza y termina.",
			"'Kenshin el Guardián'. Su espada no albergaba ira, sino tristeza.",
			"La verdad oculta era cruel; vacilamos ante ella.",
			"Pero la falsa paz debía romperse. Ahora, es el momento de arreglarlo todo."
		],
		"vietnamese": [
			"Trái tim sa mạc. Nơi vạn vật bắt đầu và kết thúc.",
			"'Kenshin Người bảo vệ.' Thanh kiếm của anh thấm đượm nỗi buồn, không phải giận dữ.",
			"Sự thật ẩn giấu thật tàn khốc; chúng ta đã dao động trước nó.",
			"Nhưng sự bình yên giả dối phải bị phá vỡ. Giờ là lúc để đưa mọi thứ trở lại đúng quỹ đạo."
		],
		"thai": [
			"ใจกลางทะเลทราย ที่ที่ทุกสิ่งเริ่มต้นและสิ้นสุด",
			"'เคนชิน ผู้พิทักษ์' ดาบของเขาเปื้อนไปด้วยความโศกเศร้า ไม่ใช่ความโกรธแค้น",
			"ความจริงที่ซ่อนอยู่ช่างโหดร้าย เราสั่นคลอนต่อหน้ามัน",
			"แต่สันติสุขจอมปลอมต้องพังทลาย ถึงเวลาแล้วที่จะแก้ไขทุกสิ่ง"
		],
		"hindi": [
			"रेगिस्तान का हृदय। जहाँ सब कुछ शुरू होता है और खत्म होता है।",
			"'संरक्षक' केंशिन। उसकी तलवार में क्रोध नहीं, दुःख समाया था।",
			"छिपी हुई सच्चाई क्रूर थी; हम उसके सामने डगमगा गए।",
			"परन्तु, झूठी शांति टूटनी ही थी। अब, सब कुछ ठीक करने का समय है।"
		]
	}
} as const;
