export const scenario_modern_evan_0_03 = {
	"scenario_id": "modern_evan_0_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"content": {
						"korean": "대기실은 늘 분주했다. '다음'을 기다리는 열기로 가득했다.",
						"english": "The waiting room was always bustling. Filled with the fervor of awaiting 'next'.",
						"japanese": "待合室はいつも賑わっていた。「次」を待つ熱気に満ちていた。",
						"chinese": "等候室总是很繁忙。充满了等待“下一次”的热情。",
						"french": "La salle d'attente était toujours animée. Remplie de la ferveur d'attendre le 'suivant'.",
						"spanish": "La sala de espera siempre estaba bulliciosa. Llena del fervor de esperar lo 'siguiente'.",
						"vietnamese": "Phòng chờ luôn nhộn nhịp. Đầy ắp sự háo hức chờ đợi 'điều kế tiếp'.",
						"thai": "ห้องรอคอยคึกคักเสมอ เต็มไปด้วยความกระตือรือร้นในการรอคอย 'สิ่งต่อไป'",
						"hindi": "प्रतीक्षालय हमेशा व्यस्त रहता था। 'अगले' की प्रतीक्षा के उत्साह से भरा हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "에반, 잘 지냈니? 이번에도 완벽하게 준비했지?",
						"english": "Evan, how have you been? You're perfectly prepared this time too, right?",
						"japanese": "エバン、元気だった？今回も完璧に準備できた？",
						"chinese": "埃文，你还好吗？这次也准备得很充分吧？",
						"french": "Evan, comment vas-tu ? Tu es parfaitement préparé cette fois aussi, n'est-ce pas ?",
						"spanish": "Evan, ¿cómo has estado? ¿Estás perfectamente preparado esta vez también, verdad?",
						"vietnamese": "Evan, cậu khỏe không? Lần này cậu cũng đã chuẩn bị hoàn hảo rồi chứ?",
						"thai": "เอแวน สบายดีไหม? ครั้งนี้ก็เตรียมตัวมาอย่างสมบูรณ์แบบแล้วใช่ไหม?",
						"hindi": "एवन, कैसे हो? इस बार भी तुमने पूरी तैयारी कर ली है, है ना?"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네, 니아 선배! 언제나처럼 최선을 다했습니다!",
						"english": "Yes, Senior Nia! I've done my best as always!",
						"japanese": "はい、ニア先輩！いつも通り、最善を尽くしました！",
						"chinese": "是的，尼亚前辈！我像往常一样尽力了！",
						"french": "Oui, senior Nia ! J'ai fait de mon mieux comme toujours !",
						"spanish": "¡Sí, Nia, senior! ¡He dado lo mejor de mí como siempre!",
						"vietnamese": "Vâng, tiền bối Nia! Em đã cố gắng hết sức như mọi khi!",
						"thai": "ครับ รุ่นพี่เนีย! ผมทำเต็มที่ที่สุดแล้วครับ!",
						"hindi": "हाँ, सीनियर निया! मैंने हमेशा की तरह अपना सर्वश्रेष्ठ दिया है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "흐음, 역시 에반이구나. 언제 봐도 듬직해.",
						"english": "Hmm, it's Evan, as expected. Always reliable.",
						"japanese": "ふむ、やはりエバンだね。いつ見ても頼もしい。",
						"chinese": "嗯，果然是埃文啊。什么时候看都那么可靠。",
						"french": "Hmm, c'est Evan, comme prévu. Toujours aussi fiable.",
						"spanish": "Hmm, es Evan, como esperaba. Siempre tan fiable.",
						"vietnamese": "Hừm, quả nhiên là Evan. Lúc nào trông cũng đáng tin cậy.",
						"thai": "หืม, ก็ต้องเป็นเอแวนอยู่แล้วสินะ ดูน่าเชื่อถือเสมอเลย",
						"hindi": "हम्म, यह एवन है, जैसा कि अपेक्षित था। हमेशा भरोसेमंद।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그런데 너, 벌써 몇 번째 '준비'만 하고 있는 거니?",
						"english": "...But tell me, how many times have you just been 'preparing'?",
						"japanese": "…ところで君、もう何度目の「準備」をしているんだい？",
						"chinese": "…但是你，这已经是第几次只在“准备”了？",
						"french": "...Mais dis-moi, combien de fois n'as-tu fait que te 'préparer' ?",
						"spanish": "...Pero dime, ¿cuántas veces llevas solo 'preparándote'?",
						"vietnamese": "...Nhưng nói cho tôi biết, đây là lần thứ mấy cậu chỉ đang 'chuẩn bị' thôi?",
						"thai": "…ว่าแต่ เธอ 'เตรียมตัว' มาแล้วกี่ครั้งกันแน่?",
						"hindi": "...लेकिन तुम, कितनी बार से केवल 'तैयारी' ही कर रहे हो?"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "에반, 솔직히 말해봐. 정말로 이 준비가 끝이 있을 거라고 생각해?",
						"english": "Evan, be honest. Do you really think this preparation will ever end?",
						"japanese": "エバン、正直に言ってごらん。本当にこの準備に終わりがあると思う？",
						"chinese": "埃文，老实说。你真的认为这种准备会有尽头吗？",
						"french": "Evan, sois honnête. Penses-tu vraiment que cette préparation aura une fin ?",
						"spanish": "Evan, sé honesto. ¿De verdad crees que esta preparación tendrá un final?",
						"vietnamese": "Evan, thành thật mà nói. Cậu có thực sự nghĩ rằng sự chuẩn bị này sẽ có hồi kết không?",
						"thai": "เอแวน บอกตรงๆ นะ เธอคิดจริงๆ หรือว่าการเตรียมตัวนี้จะมีวันสิ้นสุด?",
						"hindi": "एवन, सच बताओ। क्या तुम्हें सच में लगता है कि इस तैयारी का कभी अंत होगा?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당연하죠! 다음엔 꼭 합격할 겁니다!",
						"english": "Of course! I'll definitely pass next time!",
						"japanese": "もちろんです！次はきっと合格します！",
						"chinese": "当然了！下次我一定会通过的！",
						"french": "Bien sûr ! Je réussirai à coup sûr la prochaine fois !",
						"spanish": "¡Por supuesto! ¡La próxima vez seguro que apruebo!",
						"vietnamese": "Đương nhiên rồi! Lần tới tôi nhất định sẽ đậu!",
						"thai": "แน่นอนอยู่แล้ว! ครั้งหน้าฉันจะต้องผ่านให้ได้!",
						"hindi": "बेशक! अगली बार मैं ज़रूर पास हो जाऊँगा!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "그 '다음'이라는 게 도대체 언제 오는 걸까….",
						"english": "When will that 'next time' ever come...?",
						"japanese": "その『次』って、一体いつになったら来るんだろう…。",
						"chinese": "那个'下次'到底什么时候才会来啊……",
						"french": "Ce 'prochaine fois', quand arrivera-t-il donc... ?",
						"spanish": "¿Cuándo llegará ese 'próxima vez'…?",
						"vietnamese": "Cái 'lần tới' đó rốt cuộc là khi nào mới đến đây….",
						"thai": "แล้ว 'ครั้งหน้า' นั่นมันจะมาถึงเมื่อไหร่กันนะ...",
						"hindi": "वो 'अगली बार' आख़िर कब आएगी...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어라? 이 꽃병… 지난번에도 여기 있었던 것 같은데.",
						"english": "Huh? This vase... I think it was here last time too.",
						"japanese": "あれ？この花瓶…前もここにありましたっけ。",
						"chinese": "咦？这个花瓶…上次好像也在这里。",
						"french": "Tiens ? Ce vase... je crois qu'il était déjà là la dernière fois.",
						"spanish": "¿Eh? Este jarrón... me parece que la última vez también estaba aquí.",
						"vietnamese": "Ơ? Cái bình hoa này… Hình như lần trước nó cũng ở đây mà.",
						"thai": "เอ๊ะ? แจกันนี่... คราวที่แล้วก็อยู่ตรงนี้ไม่ใช่เหรอ?",
						"hindi": "अरे? ये फूलदान... पिछली बार भी यहीं था, मुझे लगता है।"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꽃병이요?",
						"english": "The vase?",
						"japanese": "花瓶ですか？",
						"chinese": "花瓶？",
						"french": "Le vase ?",
						"spanish": "¿El jarrón?",
						"vietnamese": "Bình hoa á?",
						"thai": "แจกันเหรอ?",
						"hindi": "फूलदान?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "아니, 그냥. 매번 똑같은 자리에 있는 게 좀 이상해서.",
						"english": "No, it's just. It's a bit strange that it's in the exact same spot every time.",
						"japanese": "いや、ただ。毎回同じ場所にあるのが、ちょっと変だなと。",
						"chinese": "不，没什么。只是觉得每次都在同一个位置，有点奇怪。",
						"french": "Non, rien. C'est juste que c'est un peu bizarre qu'il soit au même endroit à chaque fois.",
						"spanish": "No, nada. Es que es un poco raro que esté en el mismo sitio cada vez.",
						"vietnamese": "Không, chỉ là. Việc nó cứ ở cùng một chỗ mỗi lần thấy hơi lạ thôi.",
						"thai": "เปล่าหรอก แค่รู้สึกแปลกๆ ที่มันอยู่ตรงที่เดิมทุกครั้งน่ะ",
						"hindi": "नहीं, बस ऐसे ही। हर बार एक ही जगह पर होना थोड़ा अजीब है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "아무리 봐도 이 액자 위치, 어제랑 똑같지 않아?",
						"english": "No matter how I look, isn't this picture frame in the exact same spot as yesterday?",
						"japanese": "どう見てもこの額縁の位置、昨日と一緒じゃない？",
						"chinese": "怎么看，这个相框的位置都和昨天一模一样，不是吗？",
						"french": "Peu importe comment je regarde, cet encadrement n'est-il pas exactement au même endroit qu'hier ?",
						"spanish": "Por mucho que mire, ¿la posición de este cuadro no es la misma que ayer?",
						"vietnamese": "Nhìn thế nào thì vị trí cái khung ảnh này cũng giống y hệt hôm qua phải không?",
						"thai": "มองยังไงตำแหน่งกรอบรูปนี้ก็เหมือนเมื่อวานเป๊ะเลยไม่ใช่เหรอ?",
						"hindi": "कितना भी देख लो, इस फ्रेम की जगह कल जैसी ही नहीं है क्या?"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그러고 보니, 저 시계도 멈춰 있는 것 같아요.",
						"english": "...Now that you mention it, that clock seems to be stopped too.",
						"japanese": "…そういえば、あの時計も止まっているみたいです。",
						"chinese": "……说起来，那个时钟好像也停了。",
						"french": "...À propos, cette horloge semble aussi arrêtée.",
						"spanish": "…Ahora que lo dices, ese reloj también parece parado.",
						"vietnamese": "…Mà nói mới nhớ, hình như cái đồng hồ kia cũng bị đứng rồi.",
						"thai": "...ว่าไปแล้ว นาฬิกานั่นก็ดูเหมือนจะหยุดเดินนะ",
						"hindi": "...अब याद आया, वो घड़ी भी रुकी हुई लग रही है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "이 대기실, 뭔가 이상해. 마치… 계속 반복되는 꿈 같아.",
						"english": "This waiting room, something's strange. It's like... a dream that keeps repeating.",
						"japanese": "この待合室、何かおかしい。まるで…繰り返される夢みたいだ。",
						"chinese": "这个等候室，有点奇怪。简直就像……一个不断重复的梦。",
						"french": "Cette salle d'attente, quelque chose ne va pas. C'est comme... un rêve qui ne cesse de se répéter.",
						"spanish": "Esta sala de espera, algo es extraño. Es como... un sueño que se repite una y otra vez.",
						"vietnamese": "Cái phòng chờ này, có gì đó lạ. Cứ như… một giấc mơ lặp đi lặp lại vậy.",
						"thai": "ห้องรอรับรองนี้มันแปลกๆ นะ เหมือนกับ... ความฝันที่วนเวียนซ้ำไปซ้ำมาเลย",
						"hindi": "यह प्रतीक्षालय, कुछ अजीब है। जैसे... एक ऐसा सपना जो बार-बार आता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "꿈…?",
						"english": "A dream...?",
						"japanese": "夢…？",
						"chinese": "梦……？",
						"french": "Un rêve... ?",
						"spanish": "¿Un sueño...?",
						"vietnamese": "Giấc mơ à…?",
						"thai": "ความฝันเหรอ...?",
						"hindi": "सपना...?"
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
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 게, 진짜가 아니라고?",
						"english": "All of this, it's not real?",
						"japanese": "これ全部、本当じゃないってこと？",
						"chinese": "这一切，都不是真的吗？",
						"french": "Tout ça, ce n'est pas réel ?",
						"spanish": "¿Todo esto, no es real?",
						"vietnamese": "Tất cả những thứ này, đều không phải sự thật sao?",
						"thai": "ทั้งหมดนี่ไม่ใช่เรื่องจริงเหรอ?",
						"hindi": "ये सब, सच नहीं है?"
					}
				},
				{
					"content": {
						"korean": "점점 더 확실해져. 우리는 계속 같은 곳을 맴돌고 있어.",
						"english": "It's becoming clearer. We're just going around in circles.",
						"japanese": "ますますはっきりしてきた。私たちは同じ場所を堂々巡りしている。",
						"chinese": "越来越清楚了。我们一直在原地打转。",
						"french": "C'est de plus en plus clair. Nous tournons en rond.",
						"spanish": "Cada vez está más claro. Seguimos dando vueltas en el mismo lugar.",
						"vietnamese": "Càng ngày càng rõ ràng. Chúng ta cứ luẩn quẩn ở cùng một chỗ.",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ เรายังคงวนเวียนอยู่ที่เดิม",
						"hindi": "यह और भी स्पष्ट होता जा रहा है। हम बस एक ही जगह पर घूम रहे हैं।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "끝없는 '다음'이라는 말에 속아서….",
						"english": "Deceived by the endless promise of 'Next'....",
						"japanese": "終わりのない「次」という言葉に騙されて…。",
						"chinese": "被无尽的“下一个”所蒙骗……",
						"french": "Trompés par la promesse sans fin du \"Suivant\"...",
						"spanish": "Engañados por la promesa interminable del \"Siguiente\"...",
						"vietnamese": "Bị lừa bởi lời hứa \"Tiếp theo\" không hồi kết...",
						"thai": "ถูกหลอกด้วยคำว่า \"ต่อไป\" ที่ไม่มีวันสิ้นสุด...",
						"hindi": "\"अगले\" के अंतहीन वादे से धोखा खाकर..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "대기실의 공기가 차갑게 가라앉았다. 출구는 보이지 않았다.",
						"english": "The air in the waiting room grew heavy and cold. No exit was in sight.",
						"japanese": "待合室の空気が冷たく沈んだ。出口は見えなかった。",
						"chinese": "等候室的空气变得冰冷沉重。出口不见踪影。",
						"french": "L'air de la salle d'attente s'alourdit et devint froid. Aucune sortie n'était en vue.",
						"spanish": "El aire de la sala de espera se volvió frío y denso. No se veía ninguna salida.",
						"vietnamese": "Không khí trong phòng chờ trở nên lạnh lẽo. Không thấy lối thoát.",
						"thai": "อากาศในห้องรอหนาวเย็นลง ไม่เห็นทางออก",
						"hindi": "प्रतीक्षा कक्ष की हवा ठंडी हो गई। कोई निकास दिखाई नहीं दे रहा था।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "하하! 넌 영원히 여기서 '준비'만 할 운명이야!",
						"english": "Hah! You're destined to 'prepare' here forever!",
						"japanese": "ハハ！お前は永遠にここで「準備」する運命だ！",
						"chinese": "哈哈！你注定要永远在这里“准备”！",
						"french": "Hah ! Tu es destiné à 'préparer' ici pour toujours !",
						"spanish": "¡Ja, ja! ¡Estás destinado a 'prepararte' aquí para siempre!",
						"vietnamese": "Haha! Ngươi định mệnh phải mãi mãi \"chuẩn bị\" ở đây thôi!",
						"thai": "ฮ่าฮ่า! แกมันมีชะตาจะต้อง \"เตรียมพร้อม\" อยู่ที่นี่ตลอดไป!",
						"hindi": "हाहा! तुम हमेशा यहीं 'तैयारी' करने के लिए नियत हो!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장…! 아직 끝나지 않았어! 다시 도전할 거야!",
						"english": "Damn...! It's not over yet! I'll challenge again!",
						"japanese": "くそっ…！まだ終わってない！もう一度挑戦するぞ！",
						"chinese": "该死…！还没结束！我会再挑战的！",
						"french": "Mince… ! Ce n'est pas encore fini ! Je vais retenter !",
						"spanish": "¡Maldita sea...! ¡Aún no ha terminado! ¡Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt...! Chưa xong đâu! Ta sẽ thử thách lại!",
						"thai": "ให้ตายสิ...! ยังไม่จบหรอก! ฉันจะท้าทายอีกครั้ง!",
						"hindi": "धिक्कार है...! अभी खत्म नहीं हुआ! मैं फिर से चुनौती दूँगा!"
					}
				},
				{
					"content": {
						"korean": "다시 시작된 대기실. 주인공의 눈빛은 더욱 강렬해졌다.",
						"english": "The waiting room started again. The protagonist's gaze grew even more intense.",
						"japanese": "再び始まった待機室。主人公の眼差しは一層鋭くなった。",
						"chinese": "等候室再次开始。主人公的眼神变得更加锐利。",
						"french": "La salle d'attente reprit. Le regard du protagoniste devint encore plus intense.",
						"spanish": "La sala de espera se reinició. La mirada del protagonista se volvió aún más intensa.",
						"vietnamese": "Phòng chờ lại bắt đầu. Ánh mắt của nhân vật chính trở nên mạnh mẽ hơn.",
						"thai": "ห้องรอเริ่มต้นใหม่อีกครั้ง สายตาของตัวเอกเข้มข้นยิ่งขึ้น",
						"hindi": "प्रतीक्षा कक्ष फिर से शुरू हुआ। नायक की नज़रें और भी तीव्र हो गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "갑자기 대기실 한가운데 공간이 일그러지며 거대한 그림자가 나타났다.",
						"english": "Suddenly, space warped in the middle of the waiting room, and a colossal shadow appeared.",
						"japanese": "突然、待合室の真ん中の空間が歪み、巨大な影が現れた。",
						"chinese": "突然，等候室中央的空间扭曲，一个巨大的身影出现了。",
						"french": "Soudain, l'espace au milieu de la salle d'attente se déforma, et une ombre colossale apparut.",
						"spanish": "De repente, el espacio en el centro de la sala de espera se distorsionó y apareció una sombra gigantesca.",
						"vietnamese": "Đột nhiên, không gian giữa phòng chờ biến dạng, một cái bóng khổng lồ xuất hiện.",
						"thai": "ทันใดนั้น พื้นที่กลางห้องโถงก็บิดเบี้ยว และเงาขนาดมหึมาก็ปรากฏขึ้น",
						"hindi": "अचानक, प्रतीक्षा कक्ष के बीच में जगह विकृत हो गई और एक विशाल छाया दिखाई दी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "또 다시 '다음'을 원하는가? 어리석은 자들.",
						"english": "Do you desire 'Next' again? Fools.",
						"japanese": "また「次」を望むのか？愚かな者たちめ。",
						"chinese": "再次渴望“下一个”吗？愚蠢的家伙们。",
						"french": "Vous désirez encore le \"Suivant\" ? Imbéciles.",
						"spanish": "¿Deseáis de nuevo el \"Siguiente\"? Necios.",
						"vietnamese": "Lại muốn \"Tiếp theo\" nữa sao? Những kẻ ngu ngốc.",
						"thai": "ยังคงปรารถนา \"ต่อไป\" อีกหรือ? พวกคนโง่เง่า",
						"hindi": "क्या तुम फिर से 'अगले' की इच्छा रखते हो? मूर्खों।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐! 네가 이 반복을 만든 거냐?",
						"english": "Who are you?! Did you create this loop?",
						"japanese": "誰だ！お前がこの繰り返しを生み出したのか？",
						"chinese": "你是谁？！是你制造了这一切循环吗？",
						"french": "Qui es-tu ?! As-tu créé cette boucle ?",
						"spanish": "¿Quién eres?! ¿Creaste tú este bucle?",
						"vietnamese": "Ngươi là ai?! Ngươi tạo ra vòng lặp này sao?",
						"thai": "แกเป็นใคร! แกสร้างการวนซ้ำนี้ใช่ไหม?",
						"hindi": "तुम कौन हो! क्या तुमने यह दोहराव बनाया है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "'다음'은 영원히 오지 않아. 준비만 있을 뿐.",
						"english": "'Next' will never come. There is only preparation.",
						"japanese": "「次」は永遠に来ない。準備があるだけだ。",
						"chinese": "“下一个”永远不会到来。只有无尽的准备。",
						"french": "Le \"Suivant\" ne viendra jamais. Il n'y a que la préparation.",
						"spanish": "El \"Siguiente\" nunca llegará. Solo hay preparación.",
						"vietnamese": "Không có \"Tiếp theo\" thực sự. Chỉ có sự chuẩn bị mà thôi.",
						"thai": "\"ต่อไป\" จะไม่มีวันมาถึง มีแต่การเตรียมพร้อมเท่านั้น",
						"hindi": "'अगला' कभी नहीं आएगा। केवल तैयारी है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 설마 나를 쓰러뜨리다니….",
						"english": "Ugh… To think you could defeat me…",
						"japanese": "くっ… まさか私を倒すとは…。",
						"chinese": "呃……没想到你竟然能打败我……",
						"french": "Urgh… Dire que tu as pu me vaincre…",
						"spanish": "Ugh... Pensar que pudiste derrotarme...",
						"vietnamese": "Khụ... Không ngờ ngươi lại đánh bại được ta...",
						"thai": "อึก... ไม่คิดเลยว่าจะล้มข้าได้...",
						"hindi": "उफ़... सोचा भी न था कि तुम मुझे हरा पाओगे..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만 명심해… 이것은 끝이 아니야. 진짜 '다음'은 없어.",
						"english": "But remember… this isn't the end. There is no true 'Next'.",
						"japanese": "だが覚えておけ…これは終わりではない。本当の「次」などないのだ。",
						"chinese": "但请记住……这不是结束。没有真正的“下一个”。",
						"french": "Mais souviens-toi… ce n'est pas la fin. Il n'y a pas de véritable \"Suivant\".",
						"spanish": "Pero recuerda… esto no es el final. No hay un verdadero \"Siguiente\".",
						"vietnamese": "Nhưng hãy nhớ... đây không phải là kết thúc. Không có \"Tiếp theo\" thực sự.",
						"thai": "แต่จำไว้... นี่ไม่ใช่จุดจบ ไม่มี \"ต่อไป\" ที่แท้จริง",
						"hindi": "लेकिन याद रखना... यह अंत नहीं है। कोई सच्चा 'अगला' नहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시끄러워! 이제 우리가 끝낼 거야!",
						"english": "Shut up! We'll end it now!",
						"japanese": "うるさい！私たちが今終わらせる！",
						"chinese": "闭嘴！现在就由我们来终结这一切！",
						"french": "Tais-toi ! C'est nous qui allons y mettre fin maintenant !",
						"spanish": "¡Cállate! ¡Nosotros lo terminaremos ahora!",
						"vietnamese": "Im đi! Giờ chúng ta sẽ kết thúc nó!",
						"thai": "หุบปาก! พวกเราจะจบมันเดี๋ยวนี้!",
						"hindi": "चुप रहो! अब हम इसे खत्म करेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "봤지? 결국 해냈어! 하지만… 이 반복을 정말 멈출 수 있을까?",
						"english": "See? We finally did it! But... can we truly stop this loop?",
						"japanese": "ほらね？結局やったよ！でも…この繰り返しを本当に止められるかな？",
						"chinese": "看到了吗？我们最终成功了！但是…真的能阻止这场循环吗？",
						"french": "Tu vois ? On a finalement réussi ! Mais… peut-on vraiment arrêter cette boucle ?",
						"spanish": "¿Lo ves? ¡Al final lo logramos! Pero... ¿podremos detener este bucle?",
						"vietnamese": "Thấy chưa? Cuối cùng cũng làm được! Nhưng… liệu có thể thực sự dừng vòng lặp này không?",
						"thai": "เห็นไหม? ในที่สุดเราก็ทำสำเร็จ! แต่... เราจะหยุดวงจรนี้ได้จริงหรือเปล่า?",
						"hindi": "देखा? हमने आखिरकार कर दिखाया! लेकिन... क्या हम सच में इस लूप को रोक पाएंगे?"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잠시 정적이 흐른 대기실. 그러나 여전히 문은 굳게 닫혀 있었다.",
						"english": "A brief silence fell over the waiting room. Yet, the door remained firmly shut.",
						"japanese": "待機室に束の間の静寂が訪れた。しかし、扉は依然として固く閉ざされたままだった。",
						"chinese": "等候室里短暂的寂静。然而，门依然紧闭着。",
						"french": "Un bref silence plana dans la salle d'attente. Pourtant, la porte restait hermétiquement close.",
						"spanish": "Un breve silencio reinó en la sala de espera. Sin embargo, la puerta seguía firmemente cerrada.",
						"vietnamese": "Căn phòng chờ chìm vào tĩnh lặng. Tuy nhiên, cánh cửa vẫn đóng chặt.",
						"thai": "ความเงียบสงบชั่วขณะแผ่ซ่านในห้องพักรอ แต่ประตูยังคงปิดสนิท",
						"hindi": "प्रतीक्षा कक्ष में कुछ पल की खामोशी छा गई। फिर भी, दरवाज़ा मज़बूती से बंद था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "새로운 의문과 함께, 다음 단계로 나아가야 할 때였다.",
						"english": "With new questions, it was time to move on to the next stage.",
						"japanese": "新たな疑問を抱え、次の段階へ進むべき時だった。",
						"chinese": "带着新的疑问，是时候进入下一个阶段了。",
						"french": "De nouvelles questions en tête, il était temps de passer à l'étape suivante.",
						"spanish": "Con nuevas preguntas, era el momento de avanzar a la siguiente etapa.",
						"vietnamese": "Cùng với những câu hỏi mới, đã đến lúc tiến tới giai đoạn tiếp theo.",
						"thai": "พร้อมกับคำถามใหม่ ๆ ถึงเวลาแล้วที่จะก้าวไปสู่ขั้นต่อไป",
						"hindi": "नए सवालों के साथ, अगले चरण में आगे बढ़ने का समय था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 대기실. 이곳은 '다음'만을 준비하는 곳.",
			"합격자 선배 니아는 에반을 격려하지만, 어딘가 이상함을 느낀다.",
			"익숙한 풍경. 하지만 모든 것이 미묘하게 반복되고 있었다.",
			"진정한 합격은, 과연 존재하는가?"
		],
		"english": [
			"An endless waiting room. A place solely preparing for 'next'.",
			"Senior passer Nia encourages Evan, but senses something amiss.",
			"A familiar scene. Yet, everything was subtly repeating.",
			"Does true acceptance truly exist?"
		],
		"japanese": [
			"終わりのない待合室。ここは「次」だけを準備する場所。",
			"合格者の先輩ニアはエバンを励ますが、どこか違和感を覚える。",
			"見慣れた風景。しかし、全てが微妙に繰り返されていた。",
			"真の合格は、果たして存在するのか？"
		],
		"chinese": [
			"无尽的等候室。这里只为“下一次”做准备。",
			"合格的前辈尼亚鼓励着埃文，但总觉得有些不对劲。",
			"熟悉的景象。但一切都在微妙地重复着。",
			"真正的合格，真的存在吗？"
		],
		"french": [
			"Une salle d'attente sans fin. Un lieu où l'on ne fait que se préparer pour le 'suivant'.",
			"Nia, la senior diplômée, encourage Evan, mais ressent que quelque chose ne va pas.",
			"Un paysage familier. Pourtant, tout se répétait subtilement.",
			"La véritable acceptation existe-t-elle vraiment ?"
		],
		"spanish": [
			"Una sala de espera interminable. Un lugar que solo se prepara para lo 'siguiente'.",
			"Nia, la veterana aprobada, anima a Evan, pero siente que algo anda mal.",
			"Un paisaje familiar. Sin embargo, todo se repetía sutilmente.",
			"¿Existe realmente la verdadera aprobación?"
		],
		"vietnamese": [
			"Phòng chờ vô tận. Nơi đây chỉ chuẩn bị cho 'điều kế tiếp'.",
			"Nia, tiền bối đã đỗ, cổ vũ Evan, nhưng cảm thấy có gì đó lạ.",
			"Cảnh quen thuộc. Nhưng mọi thứ đang lặp lại một cách tinh vi.",
			"Liệu sự chấp nhận thực sự có tồn tại không?"
		],
		"thai": [
			"ห้องรอคอยที่ไม่มีที่สิ้นสุด ที่นี่เตรียมพร้อมสำหรับ 'สิ่งต่อไป' เท่านั้น",
			"รุ่นพี่เนียผู้ผ่านการคัดเลือกให้กำลังใจเอแวน แต่ก็รู้สึกได้ว่ามีบางอย่างผิดปกติ",
			"ทิวทัศน์ที่คุ้นเคย แต่ทุกสิ่งกำลังวนซ้ำอย่างละเอียดอ่อน",
			"การยอมรับที่แท้จริงมีอยู่จริงหรือ?"
		],
		"hindi": [
			"एक अंतहीन प्रतीक्षालय। यह 'अगले' के लिए ही तैयारी की जगह है।",
			"वरिष्ठ उत्तीर्ण निया, एवन को प्रोत्साहित करती है, लेकिन कुछ अजीब महसूस करती है।",
			"एक परिचित दृश्य। फिर भी, सब कुछ सूक्ष्मता से दोहराया जा रहा था।",
			"क्या सच्ची स्वीकृति वास्तव में मौजूद है?"
		]
	}
} as const;
