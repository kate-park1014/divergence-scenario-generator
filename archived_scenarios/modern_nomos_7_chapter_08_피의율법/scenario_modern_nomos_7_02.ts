export const scenario_modern_nomos_7_02 = {
	"scenario_id": "modern_nomos_7_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 그림자 속, 맹세가 비틀린 곳.",
			"심판자의 이름이 속삭이는 암거래 시장.",
			"모든 것을 잃은 이들의 절망이 드리웠다.",
			"새로운 진실이, 그곳에서 기다린다."
		],
		"english": [
			"In the city's shadows, where oaths twist.",
			"The black market where the Judge's name whispers.",
			"Despair of those who lost everything loomed.",
			"A new truth awaits there."
		],
		"japanese": [
			"都市の影の中、誓いが歪む場所。",
			"審判者の名が囁かれる闇市。",
			"全てを失った者たちの絶望が覆いかぶさった。",
			"新たな真実が、そこで待つ。"
		],
		"chinese": [
			"在城市的阴影中，誓言扭曲之处。",
			"审判者之名低语的黑市。",
			"失去一切之人的绝望笼罩着。",
			"新的真相，在那里等待。"
		],
		"french": [
			"Dans les ombres de la ville, là où les serments se tordent.",
			"Le marché noir où le nom du Juge murmure.",
			"Le désespoir de ceux qui ont tout perdu planait.",
			"Une nouvelle vérité y attend."
		],
		"spanish": [
			"En las sombras de la ciudad, donde los juramentos se retuercen.",
			"El mercado negro donde susurra el nombre del Juez.",
			"La desesperación de quienes lo perdieron todo se cernía.",
			"Una nueva verdad aguarda allí."
		],
		"vietnamese": [
			"Trong bóng tối thành phố, nơi lời thề vặn vẹo.",
			"Chợ đen nơi tên của Thẩm phán thì thầm.",
			"Tuyệt vọng của những người đã mất tất cả bao trùm.",
			"Một sự thật mới đang chờ đợi ở đó."
		],
		"thai": [
			"ในเงามืดของเมือง ที่ซึ่งคำสาบานบิดเบี้ยว",
			"ตลาดมืดที่ซึ่งชื่อของผู้พิพากษากระซิบกระซาบ",
			"ความสิ้นหวังของผู้ที่สูญเสียทุกสิ่งปกคลุม",
			"ความจริงใหม่รออยู่ที่นั่น"
		],
		"hindi": [
			"शहर की परछाइयों में, जहाँ शपथें मुड़ जाती हैं।",
			"काला बाज़ार जहाँ न्यायाधीश का नाम फुसफुसाता है।",
			"सब कुछ खोने वालों की निराशा छा गई।",
			"एक नई सच्चाई वहाँ इंतज़ार कर रही है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 짙게 깔린 암거래 시장. 깨진 맹세들이 그림자처럼 배회했다.",
						"english": "The black market, shrouded in deep darkness. Broken oaths roamed like shadows.",
						"japanese": "闇が深く覆う闇市。破られた誓いが影のようにさまよった。",
						"chinese": "黑暗笼罩的黑市。破碎的誓言如影般徘徊。",
						"french": "Le marché noir, enveloppé d'une obscurité profonde. Les serments brisés erraient comme des ombres.",
						"spanish": "El mercado negro, envuelto en una oscuridad profunda. Los juramentos rotos vagaban como sombras.",
						"vietnamese": "Chợ đen chìm trong bóng tối. Lời thề vỡ tan lang thang như bóng ma.",
						"thai": "ตลาดมืดที่ปกคลุมด้วยความมืดมิด คำสาบานที่แตกหักลอยวนเหมือนเงา",
						"hindi": "गहरे अंधेरे में डूबा काला बाज़ार। टूटे हुए वादे परछाइयों की तरह भटक रहे थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이게 심판자의 도시라고?",
						"english": "...Is this the Judge's city?",
						"japanese": "…これが審判者の都市か？",
						"chinese": "…这就是审判者的城市吗？",
						"french": "...C'est ça, la ville du Juge ?",
						"spanish": "¿...Esta es la ciudad del Juez?",
						"vietnamese": "...Đây là thành phố của Thẩm phán sao?",
						"thai": "...นี่คือเมืองของผู้พิพากษาเหรอ?",
						"hindi": "...क्या यह न्यायाधीश का शहर है?"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "그래. 이곳에선 모든 것이 거래돼. 심판자의 판결도 예외는 아니지.",
						"english": "Yes. Everything is traded here. Even the Judge's verdicts are no exception.",
						"japanese": "ああ。ここでは全てが取引される。審判者の判決も例外ではない。",
						"chinese": "是的。这里一切都可以交易。就连审判者的判决也不例外。",
						"french": "Oui. Tout s'y négocie. Même les verdicts du Juge ne font pas exception.",
						"spanish": "Sí. Aquí todo se negocia. Incluso los veredictos del Juez no son una excepción.",
						"vietnamese": "Đúng vậy. Mọi thứ đều được giao dịch ở đây. Ngay cả phán quyết của Thẩm phán cũng không ngoại lệ.",
						"thai": "ใช่ ที่นี่ทุกสิ่งถูกซื้อขาย แม้แต่คำตัดสินของผู้พิพากษาก็ไม่มีข้อยกเว้น",
						"hindi": "हाँ। यहाँ सब कुछ का सौदा होता है। न्यायाधीश के फैसले भी कोई अपवाद नहीं हैं।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "불합리한 판결도?",
						"english": "Even unreasonable verdicts?",
						"japanese": "不合理な判決も？",
						"chinese": "不合理的判决也行？",
						"french": "Même les verdicts déraisonnables ?",
						"spanish": "¿Incluso los veredictos irrazonables?",
						"vietnamese": "Cả những phán quyết vô lý ư?",
						"thai": "แม้แต่คำตัดสินที่ไม่สมเหตุสมผล?",
						"hindi": "अन्यायपूर्ण फैसले भी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "누군가에겐 불합리, 누군가에겐 정의. 늘 그랬어.",
						"english": "Unreasonable to some, justice to others. It's always been that way.",
						"japanese": "ある者には不合理、ある者には正義。いつもそうだった。",
						"chinese": "对某些人来说不合理，对某些人来说是正义。一直都是如此。",
						"french": "Déraisonnable pour certains, justice pour d'autres. Ça a toujours été ainsi.",
						"spanish": "Irrazonable para algunos, justicia para otros. Siempre ha sido así.",
						"vietnamese": "Vô lý với người này, công lý với người kia. Luôn là vậy.",
						"thai": "ไม่สมเหตุสมผลสำหรับบางคน แต่เป็นความยุติธรรมสำหรับบางคน เป็นแบบนี้เสมอมา",
						"hindi": "किसी के लिए अन्यायपूर्ण, किसी के लिए न्याय। हमेशा से ऐसा ही रहा है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "zoe",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "심판자의 그림자는 생각보다 깊숙이 드리워져 있어.",
						"english": "The Judge's shadow runs deeper than you think.",
						"japanese": "審判者の影は、思ったよりも深く覆いかぶさっている。",
						"chinese": "审判者的阴影，比你想象的更深。",
						"french": "L'ombre du Juge s'étend plus profondément que vous ne le pensez.",
						"spanish": "La sombra del Juez se extiende más de lo que crees.",
						"vietnamese": "Bóng của Thẩm phán sâu sắc hơn bạn nghĩ.",
						"thai": "เงาของผู้พิพากษาลึกซึ้งกว่าที่คุณคิด",
						"hindi": "न्यायाधीश की परछाई आपकी सोच से भी गहरी है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어딘가에서 본 듯한 오래된 사진 조각들이 벽에 흩어져 있다. 희미한 글씨로 '깨진 맹세는 그림자를 남긴다'고 쓰여 있었다.",
						"english": "Old photo fragments, familiar yet scattered on the wall. Faint writing reads: 'Broken vows cast shadows.'",
						"japanese": "どこかで見たような古い写真の破片が壁に散らばっている。かすれた文字で「破られた誓いは影を残す」と書かれていた。",
						"chinese": "墙上散落着一些似曾相识的旧照片碎片。模糊的字迹写着：“破碎的誓言留下阴影。”",
						"french": "Des fragments de vieilles photos, étrangement familiers, sont éparpillés sur le mur. Une écriture effacée dit : « Les vœux brisés laissent des ombres. »",
						"spanish": "Fragmentos de fotos antiguas, familiares, esparcidos por la pared. Una escritura tenue dice: 'Las promesas rotas dejan sombras'.",
						"vietnamese": "Những mảnh ảnh cũ, quen thuộc, nằm rải rác trên tường. Dòng chữ mờ ghi: 'Lời thề đã vỡ để lại bóng tối.'",
						"thai": "เศษภาพถ่ายเก่าๆ ที่ดูคุ้นตา กระจัดกระจายอยู่บนผนัง ตัวอักษรจางๆ เขียนว่า 'คำสาบานที่แตกหักทิ้งเงาไว้'",
						"hindi": "दीवार पर कहीं देखी हुई पुरानी तस्वीरों के टुकड़े बिखरे हुए हैं। धुंधले अक्षरों में लिखा था: 'टूटे वादे परछाई छोड़ जाते हैं।'"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "깨진 맹세… 이곳 사람들은 모두 상처받았어.",
						"english": "Broken vows… Everyone here is hurt.",
						"japanese": "破られた誓い… ここの人々は皆傷ついている。",
						"chinese": "破碎的誓言……这里的人都受了伤。",
						"french": "Des vœux brisés… Tout le monde ici est blessé.",
						"spanish": "Promesas rotas… Todos aquí están heridos.",
						"vietnamese": "Lời thề đã vỡ… Mọi người ở đây đều bị tổn thương.",
						"thai": "คำสาบานที่แตกหัก... ทุกคนในที่นี้ล้วนเจ็บปวด",
						"hindi": "टूटे वादे… यहाँ हर कोई दुखी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "강요된 맹세는 결국 모두를 파멸로 이끌어. 심판자는 그걸 알면서도 외면하고 있어.",
						"english": "Forced vows eventually lead everyone to ruin. The Judge knows this, yet he looks away.",
						"japanese": "強制された誓いは結局、皆を破滅に導く。審判者はそれを知りながらも目を背けている。",
						"chinese": "被强迫的誓言最终会把所有人引向毁灭。审判者明知如此，却视而不见。",
						"french": "Les vœux forcés mènent inévitablement tout le monde à la ruine. Le Juge le sait, mais il détourne le regard.",
						"spanish": "Las promesas forzadas finalmente llevan a todos a la ruina. El Juez lo sabe, pero mira hacia otro lado.",
						"vietnamese": "Lời thề bị ép buộc cuối cùng sẽ đẩy tất cả vào sự hủy diệt. Kẻ Phán Xét biết điều đó nhưng vẫn làm ngơ.",
						"thai": "คำสาบานที่ถูกบังคับท้ายที่สุดจะนำพาทุกคนไปสู่ความพินาศ ผู้พิพากษารู้เรื่องนี้ แต่กลับเมินเฉย",
						"hindi": "जबरन वादे अंततः सभी को बर्बादी की ओर ले जाते हैं। न्यायाधीश यह जानते हुए भी अनदेखा कर रहा है।"
					},
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "zoe",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "심판자의 결정은 때론 불합리해 보이지만, 결국 모두를 위한 길이라고… 사람들은 그렇게 믿고 싶어 해.",
						"english": "The Judge's decisions sometimes seem unreasonable, but people want to believe it's for everyone's good…",
						"japanese": "審判者の決定は時に不合理に見えるが、結局は皆のためだと… 人々はそう信じたがっている。",
						"chinese": "审判者的决定有时看似不合理，但人们却愿意相信这最终是为了大家好……",
						"french": "Les décisions du Juge semblent parfois déraisonnables, mais les gens veulent croire que c'est pour le bien de tous…",
						"spanish": "Las decisiones del Juez a veces parecen irrazonables, pero la gente quiere creer que al final es por el bien de todos…",
						"vietnamese": "Quyết định của Kẻ Phán Xét đôi khi có vẻ bất hợp lý, nhưng mọi người muốn tin rằng đó là vì lợi ích của tất cả…",
						"thai": "การตัดสินใจของผู้พิพากษาบางครั้งดูเหมือนไม่สมเหตุสมผล แต่ผู้คนก็อยากจะเชื่อว่าท้ายที่สุดแล้วมันคือสิ่งที่ดีที่สุดสำหรับทุกคน...",
						"hindi": "न्यायाधीश के निर्णय कभी-कभी अतार्किक लग सकते हैं, लेकिन लोग यह विश्वास करना चाहते हैं कि अंततः यह सभी के लिए है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…불합리가 어떻게 모두를 위한다는 거야?",
						"english": "…How can unreasonableness be for everyone's good?",
						"japanese": "…不合理がどうして皆のためだというんだ？",
						"chinese": "……不合理怎么会是为了大家好？",
						"french": "…Comment l'irraisonnable peut-il être pour le bien de tous ?",
						"spanish": "…¿Cómo puede la irracionalidad ser para el bien de todos?",
						"vietnamese": "…Sao sự bất hợp lý lại có thể vì lợi ích của tất cả chứ?",
						"thai": "...ความไม่สมเหตุสมผลจะเพื่อประโยชน์ของทุกคนได้อย่างไร?",
						"hindi": "...अतार्किकता कैसे सभी के लिए हो सकती है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "그게 바로 심판자의 논리야. 그의 맹세는 거스를 수 없다고.",
						"english": "That's the Judge's logic. His vows cannot be defied.",
						"japanese": "それが審判者の論理だ。彼の誓いは逆らえないと。",
						"chinese": "那就是审判者的逻辑。他的誓言不可违抗。",
						"french": "C'est la logique du Juge. Ses vœux ne peuvent être défiés.",
						"spanish": "Esa es la lógica del Juez. Sus promesas no pueden ser desafiadas.",
						"vietnamese": "Đó chính là logic của Kẻ Phán Xét. Lời thề của hắn không thể bị chống lại.",
						"thai": "นั่นคือตรรกะของผู้พิพากษา คำสาบานของเขาไม่อาจถูกฝ่าฝืนได้",
						"hindi": "यही न्यायाधीश का तर्क है। उसके वादों का उल्लंघन नहीं किया जा सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "zoe",
					"content": {
						"korean": "하지만 모두를 위한 게 아니라… 그저 그의 질서를 위한 것일 뿐.",
						"english": "But it's not for everyone… It's just for his order.",
						"japanese": "しかし、皆のためではなく…ただ彼の秩序のためでしかない。",
						"chinese": "但这并非为了所有人……只是为了他的秩序。",
						"french": "Mais ce n'est pas pour tout le monde… C'est juste pour son ordre.",
						"spanish": "Pero no es para todos… Es solo para su orden.",
						"vietnamese": "Nhưng đó không phải vì lợi ích của tất cả… Mà chỉ vì trật tự của hắn.",
						"thai": "แต่มันไม่ใช่เพื่อทุกคน... เป็นเพียงเพื่อระเบียบของเขาเท่านั้น",
						"hindi": "लेकिन यह सभी के लिए नहीं है… यह सिर्फ उसके आदेश के लिए है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이 길을 계속 가면… 더 많은 진실을 마주하게 될 거야. 감당할 수 있겠어?",
						"english": "If you continue down this path… you'll face more truths. Can you handle it?",
						"japanese": "この道を続けるなら…より多くの真実と向き合うことになるだろう。耐えられるか？",
						"chinese": "如果继续走这条路……你将面对更多的真相。你能承受吗？",
						"french": "Si tu continues sur ce chemin… tu affronteras plus de vérités. Pourras-tu le supporter ?",
						"spanish": "Si sigues por este camino… te enfrentarás a más verdades. ¿Podrás soportarlo?",
						"vietnamese": "Nếu tiếp tục con đường này… ngươi sẽ phải đối mặt với nhiều sự thật hơn. Ngươi có chịu đựng nổi không?",
						"thai": "หากเจ้ายังคงเดินหน้าต่อไป... เจ้าจะต้องเผชิญหน้ากับความจริงที่มากขึ้น เจ้าจะรับมือไหวหรือไม่?",
						"hindi": "अगर तुम इसी रास्ते पर चलते रहे… तुम्हें और सच्चाइयों का सामना करना पड़ेगा। क्या तुम संभाल पाओगे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기까지 와서 멈출 순 없어.",
						"english": "I can't stop after coming this far.",
						"japanese": "ここまで来て止まるわけにはいかない。",
						"chinese": "都走到这里了，不能停下。",
						"french": "Je ne peux pas m'arrêter après être venu si loin.",
						"spanish": "No puedo parar después de haber llegado tan lejos.",
						"vietnamese": "Đến đây rồi không thể dừng lại.",
						"thai": "มาถึงขั้นนี้แล้ว จะหยุดไม่ได้",
						"hindi": "इतना दूर आकर रुक नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "그들의 맹세는… 너의 생명력과도 직결되어 있어. 조심해.",
						"english": "Their vows… are directly linked to your life force. Be careful.",
						"japanese": "彼らの誓いは…君の生命力と直結している。気をつけろ。",
						"chinese": "他们的誓言……与你的生命力息息相关。小心。",
						"french": "Leurs vœux… sont directement liés à ta force vitale. Sois prudent.",
						"spanish": "Sus promesas… están directamente ligadas a tu fuerza vital. Ten cuidado.",
						"vietnamese": "Lời thề của họ… liên quan trực tiếp đến sinh lực của ngươi. Hãy cẩn thận.",
						"thai": "คำสาบานของพวกเขา... เชื่อมโยงโดยตรงกับพลังชีวิตของเจ้า ระวังด้วย",
						"hindi": "उनके वादे… तुम्हारी जीवन शक्ति से सीधे जुड़े हैं। सावधान रहो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 외면하는 것보단 나아.",
						"english": "Better than ignoring the truth.",
						"japanese": "真実から目を背けるよりはマシだ。",
						"chinese": "总比无视真相要好。",
						"french": "C'est mieux que d'ignorer la vérité.",
						"spanish": "Mejor que ignorar la verdad.",
						"vietnamese": "Tốt hơn là lờ đi sự thật.",
						"thai": "ดีกว่าเมินเฉยต่อความจริง",
						"hindi": "सच से मुँह मोड़ने से बेहतर है।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국 너희의 어리석음이… 이 도시를 망가뜨릴 것이다.",
						"english": "In the end, your folly... will ruin this city.",
						"japanese": "結局、お前たちの愚かさが…この都市を破滅させるだろう。",
						"chinese": "最终，你们的愚蠢……会毁掉这座城市。",
						"french": "Au final, votre folie... détruira cette ville.",
						"spanish": "Al final, vuestra necedad... destruirá esta ciudad.",
						"vietnamese": "Cuối cùng, sự ngu xuẩn của các ngươi... sẽ hủy hoại thành phố này.",
						"thai": "ในที่สุด ความโง่เขลาของพวกเจ้า... จะทำลายเมืองนี้",
						"hindi": "अंततः, तुम्हारी मूर्खता... इस शहर को बर्बाद कर देगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아!",
						"english": "It's not over yet... I won't give up!",
						"japanese": "まだ…終わってない。諦めない！",
						"chinese": "还没…结束。我不会放弃！",
						"french": "Ce n'est pas encore… fini. Je n'abandonnerai pas !",
						"spanish": "Aún no… ha terminado. ¡No me rendiré!",
						"vietnamese": "Vẫn chưa… kết thúc. Tôi sẽ không bỏ cuộc!",
						"thai": "ยัง… ไม่จบ ฉันไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자는 탐험대를 비웃었다. 그들은 다시 일어설 수 있을까?",
						"english": "The mysterious shadow mocked the expedition. Can they rise again?",
						"japanese": "正体不明の影は探検隊を嘲笑った。彼らは再び立ち上がれるのか？",
						"chinese": "未知的身影嘲笑了探险队。他们能再次站起来吗？",
						"french": "L'ombre inconnue se moqua de l'expédition. Pourront-ils se relever ?",
						"spanish": "La sombra desconocida se burló de la expedición. ¿Podrán levantarse de nuevo?",
						"vietnamese": "Bóng tối vô danh chế nhạo đoàn thám hiểm. Liệu họ có thể đứng dậy một lần nữa không?",
						"thai": "เงาลึกลับเยาะเย้ยคณะสำรวจ พวกเขาจะลุกขึ้นยืนได้อีกครั้งหรือไม่?",
						"hindi": "अज्ञात परछाई ने अभियान दल का उपहास किया। क्या वे फिर से उठ खड़े हो सकते हैं?"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 무의미하다… 모든 것은… 허무로…",
						"english": "Ugh... Meaningless... Everything is... to nothingness...",
						"japanese": "くっ…無意味だ…全ては…虚無へと…",
						"chinese": "呃……毫无意义……一切都……归于虚无……",
						"french": "Ugh... Dénué de sens... Tout est... vers le néant...",
						"spanish": "Ugh... Sin sentido... Todo es... hacia la nada...",
						"vietnamese": "Khụ... Vô nghĩa... Tất cả đều... về hư vô...",
						"thai": "อึก… ไร้ความหมาย… ทุกสิ่งล้วน… สู่ความว่างเปล่า…",
						"hindi": "उफ़… व्यर्थ… सब कुछ… शून्य में…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…허무? 도대체 뭘 말하는 거야?",
						"english": "...Nothingness? What in the world are you talking about?",
						"japanese": "…虚無？一体何を言っているんだ？",
						"chinese": "……虚无？你到底在说什么？",
						"french": "...Néant ? De quoi parlez-vous ?",
						"spanish": "¿Nada? ¿De qué estás hablando?",
						"vietnamese": "...Hư vô? Rốt cuộc ngươi đang nói cái gì vậy?",
						"thai": "…ความว่างเปล่า? เจ้ากำลังพูดถึงอะไรกันแน่?",
						"hindi": "...शून्यता? आख़िर तुम किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "이것은 시작일 뿐이야. 더 깊은 곳에… 모든 맹세의 근원이 있어.",
						"english": "This is just the beginning. Deeper still... lies the origin of all oaths.",
						"japanese": "これは始まりに過ぎない。もっと深い場所に…全ての誓いの根源がある。",
						"chinese": "这仅仅是开始。更深处……存在着所有誓言的根源。",
						"french": "Ce n'est que le début. Plus profondément encore... se trouve l'origine de tous les serments.",
						"spanish": "Esto es solo el principio. Más profundo aún... reside el origen de todos los juramentos.",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Sâu hơn nữa... có nguồn gốc của mọi lời thề.",
						"thai": "นี่เป็นแค่จุดเริ่มต้นเท่านั้น ที่ที่ลึกกว่านี้… คือแหล่งกำเนิดของคำสาบานทั้งหมด",
						"hindi": "यह तो बस शुरुआत है। और गहराई में… सभी शपथों का स्रोत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자 속 중재자를 처치했다. 그러나 도시의 혼란은 여전했다. 탐험대는 더 깊은 진실을 향해 나아갔다.",
						"english": "The Shadow Intermediary was defeated. Yet, the city's chaos persisted. The expedition pressed on, towards a deeper truth.",
						"japanese": "影の中裁者を倒した。しかし、都市の混乱は依然として続いていた。探検隊は、より深い真実へと進んだ。",
						"chinese": "击败了暗影仲裁者。然而，城市的混乱依然如故。探险队继续前进，追寻更深层的真相。",
						"french": "L'Intermédiaire de l'Ombre a été vaincu. Pourtant, le chaos de la ville persistait. L'expédition poursuivit sa route, vers une vérité plus profonde.",
						"spanish": "El Intermediario Sombrío fue derrotado. Sin embargo, el caos de la ciudad persistía. La expedición avanzó, hacia una verdad más profunda.",
						"vietnamese": "Đã tiêu diệt Trọng tài Bóng tối. Tuy nhiên, sự hỗn loạn của thành phố vẫn còn. Đoàn thám hiểm tiếp tục tiến sâu hơn, hướng tới một sự thật ẩn sâu hơn.",
						"thai": "จัดการผู้ไกล่เกลี่ยในเงามืดได้แล้ว ทว่าความวุ่นวายของเมืองยังคงอยู่ คณะสำรวจจึงมุ่งหน้าสู่ความจริงที่ลึกซึ้งกว่าเดิม",
						"hindi": "छाया मध्यस्थ को हरा दिया गया। फिर भी, शहर में अराजकता बनी रही। अभियान दल एक गहरी सच्चाई की ओर आगे बढ़ा।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 정체 모를 자의 압도적인 기운이었다.",
						"english": "A colossal shadow blocked the path. It was the overwhelming aura of an unknown entity.",
						"japanese": "巨大な影が道を阻んだ。正体不明の者の圧倒的な気配だった。",
						"chinese": "一道巨大的阴影挡住了去路。那是未知存在的压倒性气息。",
						"french": "Une ombre colossale bloquait le chemin. C'était l'aura écrasante d'une entité inconnue.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el aura abrumadora de una entidad desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Đó là khí tức áp đảo của một thực thể không rõ.",
						"thai": "เงาขนาดมหึมาขวางทางไว้ มันคือพลังกดดันของสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। यह एक अज्ञात इकाई की ज़बरदस्त आभा थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "…맹세를 거스르는 자들. 너희의 탐욕이 이 도시를 파멸시킬 것이다.",
						"english": "...Oath-breakers. Your greed will destroy this city.",
						"japanese": "…誓いを破りし者たち。お前たちの貪欲がこの都市を破滅させるだろう。",
						"chinese": "……违背誓言之人。你们的贪婪将毁灭这座城市。",
						"french": "...Briselames. Votre avidité détruira cette ville.",
						"spanish": "...Rompejuramentos. Vuestra avaricia destruirá esta ciudad.",
						"vietnamese": "...Những kẻ phản bội lời thề. Lòng tham của các ngươi sẽ hủy diệt thành phố này.",
						"thai": "…พวกผู้ที่ฝ่าฝืนคำสาบาน ความโลภของพวกเจ้าจะทำลายเมืองนี้",
						"hindi": "...शपथ तोड़ने वालों। तुम्हारा लालच इस शहर को बर्बाद कर देगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너희야말로 이 도시를 망치고 있어!",
						"english": "You're the ones destroying this city!",
						"japanese": "お前たちこそがこの都市を滅ぼしているんだ！",
						"chinese": "你们才是在毁灭这座城市！",
						"french": "C'est vous qui détruisez cette ville !",
						"spanish": "¡Vosotros sois los que estáis destruyendo esta ciudad!",
						"vietnamese": "Chính các ngươi mới đang hủy hoại thành phố này!",
						"thai": "พวกเจ้าต่างหากที่กำลังทำลายเมืองนี้!",
						"hindi": "तुम ही इस शहर को बर्बाद कर रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "zoe",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "조심해! 저 자는 심판자의 힘을 빌린 강한 존재야.",
						"english": "Watch out! That one wields the power of the Judge.",
						"japanese": "気をつけろ！あれは審判者の力を借りた強大な存在だ。",
						"chinese": "小心！那家伙是借用了审判者力量的强大存在。",
						"french": "Attention ! Cet être manie le pouvoir du Juge.",
						"spanish": "¡Cuidado! Ese ser empuña el poder del Juez.",
						"vietnamese": "Coi chừng! Kẻ đó là một thực thể mạnh mẽ mượn sức mạnh của Thẩm Phán.",
						"thai": "ระวัง! หมอนั่นเป็นผู้แข็งแกร่งที่ยืมพลังของผู้พิพากษามาใช้",
						"hindi": "सावधान! वह न्यायाधीश की शक्ति का उपयोग करने वाला एक शक्तिशाली प्राणी है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 질서의 수호자. 너희 같은 존재는… 용납할 수 없다.",
						"english": "I am the Guardian of Order. Beings like you... cannot be tolerated.",
						"japanese": "私は秩序の守護者。お前たちのような存在は…容認できない。",
						"chinese": "我是秩序的守护者。像你们这样的存在……绝不容忍。",
						"french": "Je suis le Gardien de l'Ordre. Des êtres comme vous... ne peuvent être tolérés.",
						"spanish": "Soy el Guardián del Orden. Seres como vosotros... no pueden ser tolerados.",
						"vietnamese": "Ta là Người bảo vệ trật tự. Những kẻ như các ngươi... không thể dung thứ.",
						"thai": "ข้าคือผู้พิทักษ์แห่งระเบียบ สิ่งมีชีวิตเช่นพวกเจ้า… ไม่อาจยอมรับได้",
						"hindi": "मैं व्यवस्था का संरक्षक हूँ। तुम जैसे प्राणियों को… बर्दाश्त नहीं किया जा सकता।"
					}
				}
			]
		}
	]
} as const;
