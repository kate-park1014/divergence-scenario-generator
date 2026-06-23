export const scenario_forest_glittercap_32_02 = {
	"scenario_id": "forest_glittercap_32_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 찬란했지만, 어딘가 뒤틀려 있었다.",
			"여왕은 완벽한 아름다움을 노래했지만,",
			"그 찬양 아래 시들어가는 것들이 있었다.",
			"그리고 광기의 포자는, 침묵 속에서 증식했다."
		],
		"english": [
			"The forest was brilliant, yet somehow twisted.",
			"The Queen sang of perfect beauty,",
			"but beneath her praise, things withered.",
			"And the spores of madness proliferated in silence."
		],
		"japanese": [
			"森は輝いていたが、どこか歪んでいた。",
			"女王は完璧な美しさを歌ったが、",
			"その賛美の下で、萎れていくものがあった。",
			"そして、狂気の胞子は、沈黙の中で増殖した。"
		],
		"chinese": [
			"森林璀璨夺目，却又扭曲诡异。",
			"女王歌颂着完美的 M美，",
			"但在她的赞美之下，万物枯萎。",
			"而疯狂的孢子，在寂静中滋生蔓延。"
		],
		"french": [
			"La forêt était splendide, mais étrangement tordue.",
			"La Reine chantait la beauté parfaite,",
			"mais sous ses louanges, des choses se fanaient.",
			"Et les spores de la folie proliféraient en silence."
		],
		"spanish": [
			"El bosque era brillante, pero de alguna manera retorcido.",
			"La Reina cantaba sobre la belleza perfecta,",
			"pero bajo su alabanza, las cosas se marchitaban.",
			"Y las esporas de la locura proliferaron en silencio."
		],
		"vietnamese": [
			"Khu rừng rực rỡ nhưng lại méo mó một cách lạ lùng.",
			"Nữ hoàng ca ngợi vẻ đẹp hoàn hảo,",
			"nhưng dưới lời ca ngợi của bà, vạn vật héo tàn.",
			"Và những bào tử điên loạn, lặng lẽ sinh sôi nảy nở."
		],
		"thai": [
			"ป่าสวยงามแต่ก็บิดเบี้ยวไปบ้าง",
			"ราชินีทรงขับขานถึงความงามอันสมบูรณ์แบบ",
			"แต่ภายใต้การสรรเสริญของพระองค์ มีบางสิ่งร่วงโรยไป",
			"และสปอร์แห่งความบ้าคลั่งก็แพร่กระจายไปในความเงียบ"
		],
		"hindi": [
			"जंगल शानदार था, फिर भी कहीं-कहीं मुड़ा हुआ था।",
			"रानी ने पूर्ण सुंदरता का गुणगान किया,",
			"लेकिन उसकी प्रशंसा के नीचे, चीजें मुरझा गईं।",
			"और पागलपन के बीजाणु खामोशी में फैल गए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 찬란했지만, 어딘가 생기를 잃고 있었다.",
						"english": "The forest was brilliant, yet somehow losing its vitality.",
						"japanese": "森は輝いていたが、どこか生気を失っていた。",
						"chinese": "森林璀璨夺目，却又有些失去生机。",
						"french": "La forêt était splendide, mais perdait quelque peu sa vitalité.",
						"spanish": "El bosque era brillante, pero de alguna manera estaba perdiendo su vitalidad.",
						"vietnamese": "Khu rừng rực rỡ nhưng lại mất dần sức sống.",
						"thai": "ป่าสวยงามแต่ก็สูญเสียความมีชีวิตชีวาไปบ้าง",
						"hindi": "जंगल शानदार था, फिर भी कहीं न कहीं अपनी जीवंतता खो रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이상해. 꽃들이… 시들어가고 있어.",
						"english": "Strange. The flowers are... withering.",
						"japanese": "おかしい。花が… 枯れていってる。",
						"chinese": "奇怪。花朵… 正在枯萎。",
						"french": "Étrange. Les fleurs… se fanent.",
						"spanish": "Extraño. Las flores están… marchitándose.",
						"vietnamese": "Kỳ lạ thật. Hoa… đang héo tàn.",
						"thai": "แปลกจัง ดอกไม้กำลัง... เหี่ยวเฉา",
						"hindi": "अजीब है। फूल… मुरझा रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "포자도 너무 많아. 꼭 병든 것 같아.",
						"english": "There are too many spores too. It's like it's sick.",
						"japanese": "胞子も多すぎる。まるで病気みたいだ。",
						"chinese": "孢子也太多了。像是生病了一样。",
						"french": "Il y a trop de spores aussi. On dirait que c'est malade.",
						"spanish": "También hay demasiadas esporas. Parece enfermo.",
						"vietnamese": "Quá nhiều bào tử. Cứ như là bị bệnh vậy.",
						"thai": "สปอร์ก็เยอะเกินไป เหมือนกับกำลังป่วย",
						"hindi": "बीजाणु भी बहुत ज़्यादा हैं। ऐसा लगता है कि यह बीमार है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "fern",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…그것들은 여왕님의 '정화' 때문이야.",
						"english": "...They are due to the Queen's 'purification'.",
						"japanese": "…それらは女王様の「浄化」のせいだよ。",
						"chinese": "…那是因为女王的“净化”。",
						"french": "...C'est à cause de la 'purification' de la Reine.",
						"spanish": "...Eso es debido a la 'purificación' de la Reina.",
						"vietnamese": "...Chúng là do 'thanh tẩy' của Nữ hoàng.",
						"thai": "…พวกมันเป็นเพราะ 'การชำระล้าง' ของราชินี",
						"hindi": "…वे रानी के 'शुद्धिकरण' के कारण हैं।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'정화'?",
						"english": "'Purification'?",
						"japanese": "「浄化」？",
						"chinese": "“净化”？",
						"french": "'Purification' ?",
						"spanish": "¿'Purificación'?",
						"vietnamese": "'Thanh tẩy'?",
						"thai": "'การชำระล้าง'?",
						"hindi": "'शुद्धिकरण'?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아름다움을 위한 파멸….",
						"english": "Destruction for beauty....",
						"japanese": "美のための破滅…。",
						"chinese": "为了美丽而毁灭…。",
						"french": "La destruction pour la beauté….",
						"spanish": "Destrucción por la belleza….",
						"vietnamese": "Hủy diệt vì cái đẹp….",
						"thai": "การทำลายล้างเพื่อความงาม….",
						"hindi": "सुंदरता के लिए विनाश…।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "fern",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기 좀 봐. 이 꽃들… 다 이렇게 만들었어.",
						"english": "Look here. These flowers... all made like this.",
						"japanese": "ここ見て。この花たち…全部こうやって作ったんだって。",
						"chinese": "看这里。这些花…都是这样制作的。",
						"french": "Regarde ici. Ces fleurs... toutes faites comme ça.",
						"spanish": "Mira aquí. Estas flores... todas hechas así.",
						"vietnamese": "Nhìn đây này. Mấy bông hoa này... đều được làm như vậy đấy.",
						"thai": "ดูนี่สิ ดอกไม้พวกนี้... ถูกสร้างขึ้นแบบนี้ทั้งหมดเลย",
						"hindi": "यहाँ देखो। ये फूल... सब ऐसे ही बनाए गए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여왕이 직접?",
						"english": "The Queen herself?",
						"japanese": "女王様が直々に？",
						"chinese": "女王亲自？",
						"french": "La Reine elle-même ?",
						"spanish": "¿La Reina en persona?",
						"vietnamese": "Chính Nữ hoàng sao?",
						"thai": "องค์ราชินีเองเหรอ?",
						"hindi": "रानी ने खुद?"
					},
					"type": "speech"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "그래. '순수하지 않다'고. 그래서 '정화'한대.",
						"english": "Yes. Says they're 'not pure.' So, she 'purifies' them.",
						"japanese": "うん。『純粋じゃない』って。だから『浄化』するんだって。",
						"chinese": "对。说它们『不纯洁』。所以要『净化』。",
						"french": "Oui. Elle dit qu'ils ne sont 'pas purs'. Alors elle les 'purifie'.",
						"spanish": "Sí. Dice que 'no son puros'. Así que los 'purifica'.",
						"vietnamese": "Đúng vậy. Bảo là 'không thuần khiết'. Nên sẽ 'thanh tẩy' chúng.",
						"thai": "ใช่สิ บอกว่า 'ไม่บริสุทธิ์' เลย 'ชำระล้าง' ซะ",
						"hindi": "हाँ। कहती है 'शुद्ध नहीं हैं'। इसलिए 'शुद्ध' करती है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "'순수'의 기준이 뭔데?",
						"english": "What's the standard for 'purity'?",
						"japanese": "『純粋』の基準って何？",
						"chinese": "『纯洁』的标准是什么？",
						"french": "Quel est le critère de la 'pureté' ?",
						"spanish": "¿Cuál es el criterio de 'pureza'?",
						"vietnamese": "Tiêu chuẩn 'thuần khiết' là gì chứ?",
						"thai": "มาตรฐานของ 'ความบริสุทธิ์' คืออะไร?",
						"hindi": "'शुद्धता' का मापदंड क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "여왕님을 충분히 찬양하지 않는 것?",
						"english": "Not praising the Queen enough?",
						"japanese": "女王様を十分に称賛しないこと？",
						"chinese": "没有充分赞美女王？",
						"french": "Ne pas assez louer la Reine ?",
						"spanish": "¿No alabar lo suficiente a la Reina?",
						"vietnamese": "Không tán dương Nữ hoàng đủ ư?",
						"thai": "การไม่สรรเสริญองค์ราชินีให้มากพอ?",
						"hindi": "रानी की पर्याप्त प्रशंसा न करना?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼.",
						"english": "That's absurd.",
						"japanese": "ありえない。",
						"chinese": "荒谬。",
						"french": "C'est absurde.",
						"spanish": "Es ridículo.",
						"vietnamese": "Vô lý.",
						"thai": "ไร้สาระน่า",
						"hindi": "यह बेतुका है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "fern",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이건… 옛날 기록이야. 금지된 의식에 대한.",
						"english": "This is... an old record. About a forbidden ritual.",
						"japanese": "これは…古い記録だ。禁じられた儀式についての。",
						"chinese": "这是…旧记录。关于一场被禁止的仪式。",
						"french": "C'est... un vieil écrit. Sur un rituel interdit.",
						"spanish": "Esto es... un antiguo registro. Sobre un ritual prohibido.",
						"vietnamese": "Đây là... một ghi chép cũ. Về một nghi lễ cấm.",
						"thai": "นี่คือ...บันทึกเก่าแก่ เรื่องพิธีกรรมต้องห้าม",
						"hindi": "यह... एक पुराना रिकॉर्ड है। एक वर्जित अनुष्ठान के बारे में।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "금지된 의식?",
						"english": "Forbidden ritual?",
						"japanese": "禁じられた儀式？",
						"chinese": "被禁止的仪式？",
						"french": "Un rituel interdit ?",
						"spanish": "¿Un ritual prohibido?",
						"vietnamese": "Nghi lễ cấm sao?",
						"thai": "พิธีกรรมต้องห้ามเหรอ?",
						"hindi": "वर्जित अनुष्ठान?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "식물을 억지로 바꾸는… 어떤 부족의 레시피. 여왕님도 이걸 썼어.",
						"english": "Forcibly altering plants... a tribe's recipe. The Queen used this too.",
						"japanese": "植物を無理やり変える…ある部族の秘術。女王様もこれを使ったんだ。",
						"chinese": "强行改变植物…某个部落的秘方。女王也用了这个。",
						"french": "Altérer les plantes de force... une recette tribale. La Reine l'a utilisée aussi.",
						"spanish": "Alterar las plantas a la fuerza... una receta de una tribu. La Reina también usó esto.",
						"vietnamese": "Ép buộc thay đổi thực vật... một bí quyết của bộ lạc nào đó. Nữ hoàng cũng đã dùng nó.",
						"thai": "การบังคับเปลี่ยนแปลงพืช... สูตรของชนเผ่าหนึ่ง องค์ราชินีก็ใช้สิ่งนี้ด้วย",
						"hindi": "पौधों को जबरन बदलना... किसी जनजाति की विधि। रानी ने भी इसका इस्तेमाल किया।"
					},
					"speaker": "fern"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "숲을 망치면서 아름다움을 외치는 거야?",
						"english": "Destroying the forest while proclaiming beauty?",
						"japanese": "森を台無しにしておきながら、美しさを叫ぶってこと？",
						"chinese": "一边破坏森林，一边宣扬美丽？",
						"french": "Détruire la forêt tout en proclamant la beauté ?",
						"spanish": "¿Destruir el bosque mientras proclama belleza?",
						"vietnamese": "Vừa phá hoại rừng lại vừa hô hào về cái đẹp ư?",
						"thai": "ทำลายป่าไปพร้อมกับการประกาศความงามงั้นเหรอ?",
						"hindi": "जंगल को बर्बाद करते हुए सुंदरता का दावा करना?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…나도 그게 죄책감으로 남아.",
						"english": "...That guilt still haunts me.",
						"japanese": "…それが、私も罪悪感として残ってる。",
						"chinese": "…那也一直让我感到愧疚。",
						"french": "...Cela reste une culpabilité pour moi.",
						"spanish": "...Eso me sigue carcomiendo la conciencia.",
						"vietnamese": "...Tội lỗi đó vẫn ám ảnh tôi.",
						"thai": "...นั่นยังคงเป็นตราบาปในใจฉัน",
						"hindi": "...वह अपराधबोध अब भी मुझे सालता है।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리 마을도 여왕의 방식대로 '정화'된 건가?",
						"english": "Was our village 'purified' in the Queen's way too?",
						"japanese": "私たちの村も、女王様のやり方で『浄化』されたのか？",
						"chinese": "我们的村庄也以女王的方式被‘净化’了吗？",
						"french": "Notre village a-t-il aussi été 'purifié' à la manière de la Reine ?",
						"spanish": "¿Nuestro pueblo también fue 'purificado' a la manera de la Reina?",
						"vietnamese": "Lẽ nào làng của chúng ta cũng bị 'thanh tẩy' theo cách của Nữ hoàng?",
						"thai": "หมู่บ้านของเราก็ถูก 'ชำระล้าง' ด้วยวิธีของราชินีเหมือนกันงั้นหรือ?",
						"hindi": "क्या हमारा गाँव भी रानी के तरीके से 'शुद्ध' किया गया था?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "fern",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 가면 안 돼. 여왕님의 광기가 더 심해질 거야.",
						"english": "Don't go further. The Queen's madness will worsen.",
						"japanese": "これ以上はダメだ。女王様の狂気がさらにひどくなる。",
						"chinese": "不能再深入了。女王的疯狂会变得更严重。",
						"french": "N'allez pas plus loin. La folie de la Reine s'aggravera.",
						"spanish": "No vayas más lejos. La locura de la Reina empeorará.",
						"vietnamese": "Đừng đi xa hơn. Sự điên loạn của Nữ hoàng sẽ càng tệ hơn.",
						"thai": "อย่าไปไกลกว่านี้ ความคลุ้มคลั่งของราชินีจะรุนแรงขึ้น",
						"hindi": "और आगे मत जाओ। रानी का पागलपन और बढ़ेगा।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 이 숲을 원래대로 돌려놔야 해.",
						"english": "I can't stop. This forest must be restored.",
						"japanese": "止められない。この森を元に戻さなければならない。",
						"chinese": "无法停止。必须让这片森林恢复原状。",
						"french": "Je ne peux pas m'arrêter. Je dois rendre cette forêt à son état d'origine.",
						"spanish": "No puedo detenerme. Debo devolver este bosque a su estado original.",
						"vietnamese": "Không thể dừng lại. Phải trả lại khu rừng này về trạng thái ban đầu.",
						"thai": "หยุดไม่ได้ ฉันต้องคืนป่านี้ให้กลับคืนสู่สภาพเดิม",
						"hindi": "रुक नहीं सकता। मुझे इस जंगल को उसकी मूल अवस्था में वापस लाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희도 '불순물'로 찍힐 거야.",
						"english": "You'll be branded 'impurities' too.",
						"japanese": "お前たちも『不純物』と見なされるだろう。",
						"chinese": "你们也会被视为‘不纯物’。",
						"french": "Vous aussi, vous serez considérés comme des 'impuretés'.",
						"spanish": "A vosotros también os tildarán de 'impurezas'.",
						"vietnamese": "Các ngươi cũng sẽ bị coi là 'tạp chất'.",
						"thai": "พวกเจ้าก็จะถูกตราหน้าว่าเป็น 'สิ่งปนเปื้อน' ด้วยเช่นกัน",
						"hindi": "तुम्हें भी 'अशुद्ध' करार दिया जाएगा।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "상관 없어. 진실을 밝힐 거야.",
						"english": "I don't care. I'll reveal the truth.",
						"japanese": "構わない。真実を明らかにする。",
						"chinese": "无所谓。我会揭露真相。",
						"french": "Peu importe. Je révélerai la vérité.",
						"spanish": "No me importa. Revelaré la verdad.",
						"vietnamese": "Không sao cả. Tôi sẽ phơi bày sự thật.",
						"thai": "ไม่เป็นไร ฉันจะเปิดเผยความจริง",
						"hindi": "कोई फर्क नहीं पड़ता। मैं सच उजागर करूँगा।"
					}
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "…그럼, 조심해.",
						"english": "...Then, be careful.",
						"japanese": "…なら、気をつけろ。",
						"chinese": "…那么，小心。",
						"french": "...Alors, soyez prudent.",
						"spanish": "...Entonces, ten cuidado.",
						"vietnamese": "...Vậy thì, hãy cẩn thận.",
						"thai": "...งั้นก็ระวังตัวด้วย",
						"hindi": "...तो, सावधान रहना।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 여왕님… 당신의 아름다움은… 영원할 겁니다…",
						"english": "Ugh… My Queen… Your beauty… will be eternal…",
						"japanese": "くっ… 女王様… あなたの美しさは… 永遠に…",
						"chinese": "呃啊… 女王陛下… 您的美貌… 将永恒不朽…",
						"french": "Urgh… Ma Reine… Votre beauté… sera éternelle…",
						"spanish": "Ugh… Mi Reina… Tu belleza… será eterna…",
						"vietnamese": "Khụ… Nữ hoàng… Vẻ đẹp của người… sẽ vĩnh cửu…",
						"thai": "อึก… ราชินี… ความงามของท่าน… จะคงอยู่ชั่วนิรันดร์…",
						"hindi": "उफ़… मेरी रानी… आपकी सुंदरता… अमर रहेगी…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… '정화'의 대가인가.",
						"english": "Is this… the price of 'purification'?",
						"japanese": "これが… '浄化'の代償か。",
						"chinese": "这… 就是“净化”的代价吗？",
						"french": "Est-ce là… le prix de la 'purification' ?",
						"spanish": "¿Es este… el precio de la 'purificación'?",
						"vietnamese": "Đây là… cái giá của 'thanh tẩy' sao?",
						"thai": "นี่คือ… ค่าตอบแทนของ 'การชำระล้าง' งั้นหรือ?",
						"hindi": "क्या यह… 'शुद्धिकरण' का मूल्य है?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해에서, 시들어가는 꽃잎들이 흩날렸다.",
						"english": "From the fallen remnants of {random_boss}, wilting petals scattered.",
						"japanese": "倒れた{random_boss}の残骸から、枯れゆく花びらが舞い散った。",
						"chinese": "从倒下的{random_boss}残骸中，枯萎的花瓣随风飘散。",
						"french": "Des vestiges de {random_boss} tombé, des pétales fanés s'éparpillèrent.",
						"spanish": "De los restos caídos de {random_boss}, pétalos marchitos se dispersaron.",
						"vietnamese": "Từ tàn dư của {random_boss} đã ngã xuống, những cánh hoa héo tàn bay lả tả.",
						"thai": "จากซากปรักหักพังของ {random_boss} ที่ล้มลง กลีบดอกไม้ที่เหี่ยวเฉาก็ปลิวว่อน.",
						"hindi": "गिरे हुए {random_boss} के अवशेषों से, मुरझाए हुए पंखुड़ियाँ बिखरीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 비정상적인 균형은 여왕의 손아귀에 있었다. 다음 목표는, 여왕의 가면 뒤에 숨겨진 진실이었다.",
						"english": "The forest's abnormal balance was in the Queen's grasp. The next objective was the truth hidden behind the Queen's mask.",
						"japanese": "森の異常な均衡は女王の手中にあった。次の目標は、女王の仮面の下に隠された真実だった。",
						"chinese": "森林的异常平衡掌握在女王手中。下一个目标，是女王面具背后隐藏的真相。",
						"french": "L'équilibre anormal de la forêt était sous l'emprise de la Reine. Le prochain objectif était la vérité cachée derrière le masque de la Reine.",
						"spanish": "El equilibrio anormal del bosque estaba en las manos de la Reina. El siguiente objetivo era la verdad oculta tras la máscara de la Reina.",
						"vietnamese": "Sự cân bằng bất thường của khu rừng nằm trong tay Nữ hoàng. Mục tiêu tiếp theo là sự thật ẩn giấu sau mặt nạ của Nữ hoàng.",
						"thai": "ความสมดุลที่ผิดปกติของป่าอยู่ในกำมือของราชินี. เป้าหมายต่อไปคือความจริงที่ซ่อนอยู่เบื้องหลังหน้ากากของราชินี.",
						"hindi": "जंगल का असामान्य संतुलन रानी के हाथ में था। अगला लक्ष्य, रानी के मुखौटे के पीछे छिपा सच था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "광기의 포자가 모든 것을 잠식했다.",
						"english": "Spores of madness engulfed everything.",
						"japanese": "狂気の胞子がすべてを侵食した。",
						"chinese": "疯狂的孢子吞噬了一切。",
						"french": "Les spores de la folie ont tout englouti.",
						"spanish": "Las esporas de la locura lo envolvieron todo.",
						"vietnamese": "Bào tử điên loạn đã nuốt chửng mọi thứ.",
						"thai": "สปอร์แห่งความบ้าคลั่งกลืนกินทุกสิ่ง.",
						"hindi": "पागलपन के बीजाणुओं ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "넌 여왕님의 아름다움을 이해 못 해.",
						"english": "You don't understand the Queen's beauty.",
						"japanese": "お前は女王様の美しさを理解できない。",
						"chinese": "你不懂女王陛下的美。",
						"french": "Tu ne comprends pas la beauté de la Reine.",
						"spanish": "No entiendes la belleza de la Reina.",
						"vietnamese": "Ngươi không hiểu vẻ đẹp của Nữ hoàng.",
						"thai": "เจ้าไม่เข้าใจความงามของราชินี.",
						"hindi": "तुम रानी की सुंदरता को नहीं समझते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 끝낼 순 없어.",
						"english": "I can't end it like this.",
						"japanese": "このままでは終われない。",
						"chinese": "不能就这样结束。",
						"french": "Je ne peux pas en finir ainsi.",
						"spanish": "No puedo terminar así.",
						"vietnamese": "Không thể kết thúc thế này được.",
						"thai": "จะจบลงแค่นี้ไม่ได้.",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 도전해봐라. 그 어리석은 용기가 어디까지 갈지.",
						"english": "Try again. Let's see how far your foolish courage takes you.",
						"japanese": "もう一度挑んでみろ。その愚かな勇気がどこまで持つか見せてもらおう。",
						"chinese": "再挑战一次吧。看看你那愚蠢的勇气能走到哪一步。",
						"french": "Essaie encore. Voyons jusqu'où ton courage insensé te mènera.",
						"spanish": "Inténtalo de nuevo. Veamos hasta dónde te lleva tu necio coraje.",
						"vietnamese": "Hãy thử thách lại đi. Để xem lòng dũng cảm ngu xuẩn của ngươi đi được bao xa.",
						"thai": "ลองใหม่อีกครั้งสิ. มาดูกันว่าความกล้าหาญอันโง่เขลาของเจ้าจะไปได้ไกลแค่ไหน.",
						"hindi": "फिर से प्रयास करो। देखते हैं तुम्हारी मूर्खतापूर्ण हिम्मत कहाँ तक जाती है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 형체가 길을 막았다.",
						"english": "A colossal figure blocked the path.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一个巨大的形体挡住了去路。",
						"french": "Une forme colossale bloquait le chemin.",
						"spanish": "Una figura colosal bloqueó el camino.",
						"vietnamese": "Một hình thể khổng lồ đã chặn đường.",
						"thai": "ร่างมหึมาขวางทางอยู่",
						"hindi": "एक विशाल आकृति ने रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 여왕님의 '정화'를 방해하는가?",
						"english": "How dare you interfere with the Queen's 'purification'?",
						"japanese": "女王様の『浄化』を邪魔する気か？",
						"chinese": "你竟敢妨碍女王的‘净化’？",
						"french": "Comment osez-vous interférer avec la 'purification' de la Reine ?",
						"spanish": "¿Cómo osas interferir con la 'purificación' de la Reina?",
						"vietnamese": "Ngươi dám cản trở 'thanh tẩy' của Nữ hoàng ư?",
						"thai": "กล้าดียังไงมาขัดขวาง 'การชำระล้าง' ของราชินี?",
						"hindi": "रानी के 'शुद्धिकरण' में हस्तक्षेप करने की तुम्हारी हिम्मत कैसे हुई?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신도 여왕의 광기에 물든 거야?",
						"english": "Have you also been tainted by the Queen's madness?",
						"japanese": "お前も女王の狂気に染まったのか？",
						"chinese": "你也感染了女王的疯狂吗？",
						"french": "Avez-vous aussi été contaminé par la folie de la Reine ?",
						"spanish": "¿También te ha contagiado la locura de la Reina?",
						"vietnamese": "Ngươi cũng bị sự điên loạn của Nữ hoàng làm vấy bẩn rồi sao?",
						"thai": "เจ้าก็ถูกความคลุ้มคลั่งของราชินีเข้าครอบงำแล้วงั้นหรือ?",
						"hindi": "क्या तुम भी रानी के पागलपन से प्रभावित हो गए हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 여왕님의 아름다움을 지키는 자.",
						"english": "I am the guardian of the Queen's beauty.",
						"japanese": "私は女王様の美しさを守る者。",
						"chinese": "我是守护女王陛下美貌之人。",
						"french": "Je suis le gardien de la beauté de la Reine.",
						"spanish": "Soy el guardián de la belleza de la Reina.",
						"vietnamese": "Ta là kẻ bảo vệ vẻ đẹp của Nữ hoàng.",
						"thai": "ข้าคือผู้พิทักษ์ความงามของราชินี.",
						"hindi": "मैं रानी की सुंदरता का रक्षक हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아름다움이 파멸이라고 누가 그랬지.",
						"english": "Who said beauty leads to ruin?",
						"japanese": "美しさが破滅を招くと、誰が言った？",
						"chinese": "谁说美貌会带来毁灭？",
						"french": "Qui a dit que la beauté mène à la ruine ?",
						"spanish": "¿Quién dijo que la belleza conduce a la ruina?",
						"vietnamese": "Ai bảo vẻ đẹp dẫn đến hủy diệt?",
						"thai": "ใครบอกว่าความงามนำมาซึ่งความพินาศ?",
						"hindi": "किसने कहा कि सुंदरता विनाश की ओर ले जाती है?"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
