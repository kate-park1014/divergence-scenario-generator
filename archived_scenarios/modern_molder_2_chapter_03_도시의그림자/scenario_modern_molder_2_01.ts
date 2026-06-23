export const scenario_modern_molder_2_01 = {
	"scenario_id": "modern_molder_2_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 심장부, 버려진 구역.",
			"악취와 침묵. 비명마저 잊힌 곳.",
			"오래된 폐기물이 도시의 비밀을 품고 있었다.",
			"그리고, 실종된 자들의 그림자."
		],
		"english": [
			"City's heart, a forgotten district.",
			"Stench and silence. A place where even screams are forgotten.",
			"Old waste held the city's secrets.",
			"And, the shadows of the missing."
		],
		"japanese": [
			"都市の心臓部、捨てられた区域。",
			"悪臭と沈黙。悲鳴すら忘れ去られた場所。",
			"古い廃棄物が都市の秘密を抱えていた。",
			"そして、失踪者たちの影。"
		],
		"chinese": [
			"城市中心，废弃区域。",
			"恶臭与寂静。连尖叫声都被遗忘的地方。",
			"旧废物藏匿着城市的秘密。",
			"还有，失踪者的影子。"
		],
		"french": [
			"Au cœur de la ville, un quartier abandonné.",
			"Pestilence et silence. Un lieu où même les cris sont oubliés.",
			"De vieux déchets recelaient les secrets de la ville.",
			"Et, les ombres des disparus."
		],
		"spanish": [
			"Corazón de la ciudad, un distrito abandonado.",
			"Hedor y silencio. Un lugar donde incluso los gritos son olvidados.",
			"Antiguos desechos guardaban los secretos de la ciudad.",
			"Y, las sombras de los desaparecidos."
		],
		"vietnamese": [
			"Trung tâm thành phố, một khu vực bị bỏ quên.",
			"Mùi hôi và sự im lặng. Một nơi mà ngay cả tiếng thét cũng bị lãng quên.",
			"Đống phế liệu cũ chứa đựng những bí mật của thành phố.",
			"Và, bóng tối của những người mất tích."
		],
		"thai": [
			"ใจกลางเมือง, เขตที่ถูกทอดทิ้ง.",
			"กลิ่นเหม็นและความเงียบงัน. ที่ที่แม้แต่เสียงกรีดร้องก็ถูกลืม.",
			"ขยะเก่าแก่เก็บงำความลับของเมืองไว้.",
			"และเงาของผู้ที่หายสาบสูญไป."
		],
		"hindi": [
			"शहर का दिल, एक परित्यक्त क्षेत्र।",
			"दुर्गंध और सन्नाटा। एक ऐसी जगह जहां चीखें भी भुला दी गई हैं।",
			"पुराने कचरे में शहर के रहस्य छिपे थे।",
			"और, लापता लोगों की परछाइयां।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 담장 너머, 도시의 흉터가 드러났다.",
						"english": "Beyond the old fence, the city's scars were revealed.",
						"japanese": "古い塀の向こう、都市の傷跡が露わになった。",
						"chinese": "旧围墙外，城市的伤疤显露无遗。",
						"french": "Au-delà de la vieille clôture, les cicatrices de la ville se révélaient.",
						"spanish": "Más allá de la valla vieja, las cicatrices de la ciudad se revelaron.",
						"vietnamese": "Ngoài bức tường cũ, những vết sẹo của thành phố hiện ra.",
						"thai": "พ้นรั้วเก่า, รอยแผลเป็นของเมืองก็เผยออกมา.",
						"hindi": "पुरानी बाड़ के उस पार, शहर के निशान उजागर हुए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 실종자들이 마지막으로 목격된 곳인가?",
						"english": "Is this where the missing were last seen?",
						"japanese": "ここが、失踪者たちが最後に目撃された場所か？",
						"chinese": "这里是失踪者最后一次被看到的地方吗？",
						"french": "Est-ce ici que les disparus ont été vus pour la dernière fois ?",
						"spanish": "¿Es aquí donde los desaparecidos fueron vistos por última vez?",
						"vietnamese": "Đây có phải là nơi những người mất tích được nhìn thấy lần cuối không?",
						"thai": "นี่คือที่ที่ผู้สูญหายถูกพบเห็นครั้งสุดท้ายหรือ?",
						"hindi": "क्या यह वही जगह है जहां लापता लोगों को आखिरी बार देखा गया था?"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그래. 시에서 눈 감아버린 쓰레기장이지.",
						"english": "Yes. A dumpsite the city turned a blind eye to.",
						"japanese": "ああ。市が見て見ぬふりをしたゴミ捨て場さ。",
						"chinese": "是的。一个城市视而不见的垃圾场。",
						"french": "Oui. Un dépotoir que la ville a ignoré.",
						"spanish": "Sí. Un vertedero al que la ciudad hizo la vista gorda.",
						"vietnamese": "Phải. Một bãi rác mà thành phố đã nhắm mắt làm ngơ.",
						"thai": "ใช่. เป็นบ่อทิ้งขยะที่เมืองเมินเฉย.",
						"hindi": "हाँ। एक कूड़े का ढेर जिसे शहर ने नज़रअंदाज़ कर दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "사람들은 깨끗한 것만 보려거든.",
						"english": "People only want to see what's clean.",
						"japanese": "人々は綺麗なものしか見ようとしないからな。",
						"chinese": "人们只愿看到干净的东西。",
						"french": "Les gens ne veulent voir que ce qui est propre.",
						"spanish": "La gente solo quiere ver lo limpio.",
						"vietnamese": "Mọi người chỉ muốn nhìn thấy những thứ sạch sẽ.",
						"thai": "ผู้คนต้องการเห็นแต่สิ่งที่สะอาดเท่านั้น.",
						"hindi": "लोग केवल साफ-सुथरी चीजें ही देखना चाहते हैं।"
					},
					"emotion": "sad"
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
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이 폐기물은 그냥 버려진 게 아니야.",
						"english": "This waste wasn't just abandoned.",
						"japanese": "この廃棄物は、ただ捨てられただけじゃない。",
						"chinese": "这些废弃物并非只是被丢弃的。",
						"french": "Ces déchets n'ont pas été simplement abandonnés.",
						"spanish": "Estos desechos no fueron solo abandonados.",
						"vietnamese": "Đống phế liệu này không chỉ bị bỏ rơi đâu.",
						"thai": "ขยะพวกนี้ไม่ได้ถูกทิ้งเฉยๆ หรอก.",
						"hindi": "यह कचरा सिर्फ फेंका नहीं गया था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "도시가 외면한 모든 것의 결과물. 때론, 제거될 필요도 있는 법이지.",
						"english": "The byproduct of everything the city turned its back on. Sometimes, it needs to be eliminated.",
						"japanese": "都市が背を向けた全てのものの結果だ。時には、排除される必要もあるだろう。",
						"chinese": "城市所背弃一切的产物。有时，它也需要被清除。",
						"french": "Le résultat de tout ce que la ville a ignoré. Parfois, il faut l'éliminer.",
						"spanish": "El producto de todo lo que la ciudad ignoró. A veces, necesita ser eliminado.",
						"vietnamese": "Sản phẩm của tất cả những gì thành phố đã quay lưng. Đôi khi, nó cần phải bị loại bỏ.",
						"thai": "ผลลัพธ์ของทุกสิ่งที่เมืองเมินเฉย บางครั้งก็จำเป็นต้องถูกกำจัด",
						"hindi": "शहर ने जिस हर चीज़ से मुँह मोड़ा, उसका नतीजा। कभी-कभी, इसे ख़त्म करने की ज़रूरत होती है。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야?",
						"english": "...What are you talking about?",
						"japanese": "「…何を言ってるんだ？」",
						"chinese": "……你说什么？",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué hablas?",
						"vietnamese": "...Bạn đang nói gì vậy?",
						"thai": "...คุณกำลังพูดถึงอะไร?",
						"hindi": "...तुम क्या कह रहे हो?"
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
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "봐. 저 벽 균열. 뭔가 스며나오고 있어.",
						"english": "Look. That crack in the wall. Something's seeping out.",
						"japanese": "「見ろ。あの壁の亀裂。何かが染み出している。」",
						"chinese": "看。那墙上的裂缝。有什么东西渗出来了。",
						"french": "Regarde. Cette fissure dans le mur. Quelque chose s'infiltre.",
						"spanish": "Mira. Esa grieta en la pared. Algo está filtrándose.",
						"vietnamese": "Nhìn kìa. Vết nứt trên tường. Có thứ gì đó đang rỉ ra.",
						"thai": "ดูนั่นสิ รอยร้าวบนกำแพง มีบางอย่างซึมออกมา",
						"hindi": "देखो। दीवार में वो दरार। कुछ रिस रहा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끔찍한 냄새… 대체 뭐가 이렇게 썩어가고 있는 거야?",
						"english": "A terrible smell... What on earth is rotting like this?",
						"japanese": "「ひどい匂い…一体何がこんなに腐ってるんだ？」",
						"chinese": "一股可怕的味道……到底是什么东西腐烂成这样了？",
						"french": "Une odeur horrible... Qu'est-ce qui pourrit comme ça ?",
						"spanish": "Un olor terrible... ¿Qué demonios se está pudriendo así?",
						"vietnamese": "Một mùi kinh khủng... Rốt cuộc cái gì đang thối rữa như thế này?",
						"thai": "กลิ่นเหม็นน่ากลัว... อะไรกำลังเน่าเหม็นขนาดนี้กันแน่?",
						"hindi": "एक भयानक बदबू... आखिर क्या इस तरह सड़ रहा है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글쎄. 어쩌면, 도시의 영혼일지도.",
						"english": "Well. Perhaps, it's the city's soul.",
						"japanese": "「さあ。もしかしたら、都市の魂かもな。」",
						"chinese": "嗯。也许，是城市的灵魂吧。",
						"french": "Hmm. Peut-être, l'âme de la ville.",
						"spanish": "Bueno. Quizás, sea el alma de la ciudad.",
						"vietnamese": "Chà. Có lẽ, đó là linh hồn của thành phố.",
						"thai": "อืม บางทีอาจจะเป็นวิญญาณของเมือง",
						"hindi": "ठीक है। शायद, यह शहर की आत्मा हो।"
					},
					"emotion": "base",
					"speaker": "kai"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폐허 깊숙한 곳, 기괴한 덩어리가 맥동했다.",
						"english": "Deep within the ruins, a grotesque mass pulsed.",
						"japanese": "「廃墟の奥深く、おぞましい塊が脈動した。」",
						"chinese": "废墟深处，一个怪异的肿块在跳动。",
						"french": "Au plus profond des ruines, une masse grotesque pulsait.",
						"spanish": "En lo profundo de las ruinas, una masa grotesca pulsaba.",
						"vietnamese": "Sâu trong đống đổ nát, một khối quái dị đang đập.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ก้อนเนื้อประหลาดเต้นเป็นจังหวะ",
						"hindi": "खंडहरों की गहराई में, एक विकृत द्रव्य धड़क रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기까지 왔으니, 이제 돌아갈 순 없어.",
						"english": "Now that we've come this far, there's no turning back.",
						"japanese": "「ここまで来たからには、もう引き返せない。」",
						"chinese": "既然都走到这里了，就不能回头了。",
						"french": "Maintenant que nous sommes arrivés si loin, il n'y a plus de retour possible.",
						"spanish": "Ahora que hemos llegado tan lejos, no hay vuelta atrás.",
						"vietnamese": "Đã đến nước này rồi, không thể quay lại được nữa.",
						"thai": "เมื่อมาถึงตรงนี้แล้ว ก็กลับไม่ได้แล้ว",
						"hindi": "जब हम इतनी दूर आ गए हैं, तो अब पीछे हटना नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 생각 없어.",
						"english": "I have no intention of turning back.",
						"japanese": "「引き返すつもりはない。」",
						"chinese": "我没想过要回去。",
						"french": "Je n'ai pas l'intention de faire demi-tour.",
						"spanish": "No tengo intención de volver.",
						"vietnamese": "Tôi không có ý định quay lại.",
						"thai": "ฉันไม่มีความคิดที่จะกลับไป",
						"hindi": "मेरा पीछे हटने का कोई इरादा नहीं है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 파괴만이 답이라니. 참 아이러니하지 않나?",
						"english": "So, destruction is the only answer after all. Isn't that ironic?",
						"japanese": "「結局、破壊だけが答えだなんて。皮肉なものだな。」",
						"chinese": "最终只有毁灭才是答案。这不是很讽刺吗？",
						"french": "Finalement, seule la destruction est la réponse. N'est-ce pas ironique ?",
						"spanish": "Así que, la destrucción es la única respuesta después de todo. ¿No es irónico?",
						"vietnamese": "Cuối cùng, sự hủy diệt là câu trả lời duy nhất. Không phải quá trớ trêu sao?",
						"thai": "ในที่สุด การทำลายล้างก็เป็นคำตอบเดียว ไม่ใช่เรื่องน่าขันหรอกเหรอ?",
						"hindi": "अंत में, विनाश ही एकमात्र उत्तर है। यह कितना विडंबनापूर्ण है, है ना?"
					},
					"emotion": "base",
					"speaker": "kai"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "썩어가는 심장부, 거대한 그림자가 일렁였다.",
						"english": "In the rotting heart, a colossal shadow rippled.",
						"japanese": "「腐敗する心臓部で、巨大な影が揺らめいた。」",
						"chinese": "在腐烂的中心，一个巨大的影子在波动。",
						"french": "Dans le cœur en putréfaction, une ombre colossale ondoyait.",
						"spanish": "En el corazón putrefacto, una sombra colosal se ondulaba.",
						"vietnamese": "Trong lòng thối rữa, một bóng đen khổng lồ gợn sóng.",
						"thai": "ในใจกลางที่เน่าเปื่อย เงาขนาดมหึมาได้สั่นไหว",
						"hindi": "सड़ते हुए दिल में, एक विशाल छाया लहराई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 나의 영역에 발을 들이다니.",
						"english": "How dare you… step into my domain.",
						"japanese": "よくも… 我の領域に足を踏み入れたな。",
						"chinese": "竟敢… 踏入我的领地。",
						"french": "Comment osez-vous… pénétrer mon domaine.",
						"spanish": "Cómo te atreves… a pisar mi dominio.",
						"vietnamese": "Dám… đặt chân vào lãnh địa của ta.",
						"thai": "บังอาจ… เข้ามาในอาณาเขตของข้า",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… मेरे क्षेत्र में कदम रखने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 모든 것의 원흉인가!",
						"english": "Are you the cause of all this?!",
						"japanese": "お前がすべての元凶か！",
						"chinese": "你就是这一切的罪魁祸首吗！",
						"french": "Es-tu la cause de tout cela ?",
						"spanish": "¿Eres la raíz de todo esto?!",
						"vietnamese": "Ngươi là kẻ chủ mưu của tất cả sao!",
						"thai": "เจ้าคือต้นเหตุของเรื่องทั้งหมดงั้นรึ!",
						"hindi": "क्या तुम ही इन सब के पीछे की वजह हो?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "도시의 무관심이 나를 키웠다. 너희도 곧 일부가 될 것이다.",
						"english": "The city's indifference fostered me. Soon, you too shall be a part of it.",
						"japanese": "都市の無関心が私を育てた。お前たちもじきにその一部となるだろう。",
						"chinese": "城市的冷漠滋养了我。很快，你们也将成为其中一部分。",
						"french": "L'indifférence de la ville m'a nourri. Bientôt, vous en ferez également partie.",
						"spanish": "La indiferencia de la ciudad me creó. Pronto, vosotros también seréis parte de ella.",
						"vietnamese": "Sự thờ ơ của thành phố đã nuôi dưỡng ta. Chẳng mấy chốc, các ngươi cũng sẽ trở thành một phần của nó.",
						"thai": "ความเฉยเมยของเมืองบ่มเพาะข้าขึ้นมา อีกไม่นาน เจ้าก็จะกลายเป็นส่วนหนึ่งเช่นกัน",
						"hindi": "शहर की उदासीनता ने मुझे पाला है। जल्द ही, तुम भी इसका हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "큭… 이것이… 끝이 아닐 거다… {random_boss}의… 의지는…",
						"english": "Gah… This… won't be the end… The will of {random_boss}…",
						"japanese": "くっ… これが… 終わりではない… {random_boss}の… 意志は…",
						"chinese": "呃… 这… 不会是终结… {random_boss}的… 意志…",
						"french": "Ugh… Ce… ne sera pas la fin… La volonté de {random_boss}…",
						"spanish": "Ugh… Esto… no será el final… La voluntad de {random_boss}…",
						"vietnamese": "Khặc… Đây… sẽ không phải là kết thúc… Ý chí của {random_boss}…",
						"thai": "อึก… นี่… จะไม่ใช่จุดจบ… เจตจำนงของ {random_boss}…",
						"hindi": "आह… यह… अंत नहीं होगा… {random_boss} की… इच्छा…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 뭔가 있다는 건가?",
						"english": "There's still more?",
						"japanese": "まだ何かあるというのか？",
						"chinese": "还有什么吗？",
						"french": "Il y a encore quelque chose ?",
						"spanish": "¿Todavía hay algo más?",
						"vietnamese": "Vẫn còn thứ gì đó sao?",
						"thai": "ยังมีอะไรอีกงั้นรึ?",
						"hindi": "अभी भी कुछ बाकी है क्या?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기괴한 덩어리는 힘없이 스러졌다. 그러나 도시는 여전히 비명을 삼키고 있었다.",
						"english": "The grotesque mass crumbled powerlessly. Yet, the city still swallowed screams.",
						"japanese": "異形の塊は力なく崩れ落ちた。しかし、都市は未だに悲鳴を飲み込んでいた。",
						"chinese": "那怪异的团块无力地崩塌了。然而，城市依旧吞噬着尖叫。",
						"french": "La masse grotesque s'effondra impuissamment. Pourtant, la ville continuait d'étouffer les cris.",
						"spanish": "La masa grotesca se desmoronó sin fuerza. Sin embargo, la ciudad seguía tragando gritos.",
						"vietnamese": "Khối dị hợm sụp đổ một cách yếu ớt. Tuy nhiên, thành phố vẫn nuốt chửng những tiếng thét.",
						"thai": "ก้อนเนื้อประหลาดร่วงลงอย่างไร้เรี่ยวแรง ทว่าเมืองยังคงกลืนกินเสียงกรีดร้อง",
						"hindi": "विकृत द्रव्य शक्तिहीन होकर बिखर गया। फिर भी, शहर अभी भी चीखों को निगल रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다음 그림자가 도시를 뒤덮기 시작한다.",
						"english": "The next shadow begins to engulf the city.",
						"japanese": "次の影が都市を覆い始める。",
						"chinese": "下一道阴影开始笼罩城市。",
						"french": "La prochaine ombre commence à engloutir la ville.",
						"spanish": "La próxima sombra comienza a envolver la ciudad.",
						"vietnamese": "Bóng tối tiếp theo bắt đầu bao trùm thành phố.",
						"thai": "เงามืดถัดไปเริ่มกลืนกินเมือง",
						"hindi": "अगली छाया शहर को निगलना शुरू कर देती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 도시의 쓰레기가 될 뿐.",
						"english": "Insignificant beings… merely city refuse.",
						"japanese": "取るに足らぬ者たち… 都市の塵となるだけだ。",
						"chinese": "微不足道的家伙… 终将沦为城市垃圾。",
						"french": "Êtres insignifiants… juste des déchets urbains.",
						"spanish": "Seres insignificantes… solo basura de la ciudad.",
						"vietnamese": "Những thứ nhỏ bé… chỉ là rác rưởi của thành phố.",
						"thai": "พวกไร้ค่า… เป็นแค่ขยะของเมือง",
						"hindi": "तुच्छ प्राणी… बस शहर का कचरा बनोगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기 안 해.",
						"english": "…I won't give up yet.",
						"japanese": "…まだ諦めない。",
						"chinese": "…我还没放弃。",
						"french": "…Je n'abandonne pas encore.",
						"spanish": "…Aún no me rindo.",
						"vietnamese": "…Ta vẫn chưa bỏ cuộc.",
						"thai": "…ข้ายังไม่ยอมแพ้",
						"hindi": "…मैंने अभी तक हार नहीं मानी है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 절망을 맛보게 해주지.",
						"english": "Come again. I'll let you taste despair.",
						"japanese": "また来るがいい。絶望を味わわせてやろう。",
						"chinese": "再来吧。我会让你尝尝绝望的滋味。",
						"french": "Revenez. Je vous ferai goûter au désespoir.",
						"spanish": "Vuelve. Te haré probar la desesperación.",
						"vietnamese": "Hãy trở lại đi. Ta sẽ cho ngươi nếm mùi tuyệt vọng.",
						"thai": "กลับมาอีกสิ ข้าจะทำให้เจ้าลิ้มรสความสิ้นหวัง",
						"hindi": "वापस आओ। मैं तुम्हें निराशा का स्वाद चखाऊंगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
