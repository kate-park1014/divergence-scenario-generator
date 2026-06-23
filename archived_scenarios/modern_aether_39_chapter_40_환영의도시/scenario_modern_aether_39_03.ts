export const scenario_modern_aether_39_03 = {
	"scenario_id": "modern_aether_39_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도심 외곽, 폐허가 된 저택. 시간마저 멈춘 듯했다.",
						"english": "On the outskirts of the city, a ruined mansion. Even time seemed to stand still.",
						"japanese": "市街の郊外、廃墟となった屋敷。時間さえ止まったようだった。",
						"chinese": "城郊，废墟般的宅邸。时间仿佛也停滞了。",
						"french": "En périphérie de la ville, un manoir en ruine. Même le temps semblait s'être arrêté.",
						"spanish": "En las afueras de la ciudad, una mansión en ruinas. Hasta el tiempo parecía haberse detenido.",
						"vietnamese": "Ngoại ô thành phố, một dinh thự hoang tàn. Thời gian dường như cũng ngừng lại.",
						"thai": "ชานเมือง คฤหาสน์ที่ปรักหักพัง แม้แต่เวลาก็ดูเหมือนจะหยุดนิ่ง",
						"hindi": "शहर के बाहरी इलाके में, एक खंडहर हवेली। यहां तक ​​कि समय भी थम गया था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "으스스하네. 여기가 에코가 있다는 곳인가?",
						"english": "Spooky. Is this where Echo is?",
						"japanese": "薄気味悪いな。ここがエコーがいる場所なのか？",
						"chinese": "真让人毛骨悚然。这里就是艾可所在的地方吗？",
						"french": "Effrayant. C'est ici qu'est Écho ?",
						"spanish": "Escalofriante. ¿Es aquí donde está Eco?",
						"vietnamese": "Rợn người thật. Đây là nơi Echo ở sao?",
						"thai": "น่าขนลุก ที่นี่คือที่ที่เอคโค่อยู่ใช่ไหม?",
						"hindi": "डरावना है। क्या इको यहीं है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "echo",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군요. 기억의 조각들을 쫓는 자여.",
						"english": "You've arrived. Seeker of memory fragments.",
						"japanese": "来られましたね。記憶の破片を追う者よ。",
						"chinese": "您来了。追寻记忆碎片的旅人啊。",
						"french": "Vous êtes arrivé. Traqueur de fragments de mémoire.",
						"spanish": "Habéis llegado. Buscador de fragmentos de memoria.",
						"vietnamese": "Ngươi đã đến rồi. Kẻ truy tìm mảnh vỡ ký ức.",
						"thai": "ท่านมาแล้ว ผู้ตามล่าเศษเสี้ยวความทรงจำ",
						"hindi": "तुम आ गए। यादों के टुकड़ों को खोजने वाले।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "이곳은 모든 비극이 시작된 곳이자, 기록된 곳입니다.",
						"english": "This is where all tragedy began, and where it was recorded.",
						"japanese": "ここはすべての悲劇が始まり、記録された場所です。",
						"chinese": "这里是所有悲剧开始并被记录的地方。",
						"french": "C'est ici que toute la tragédie a commencé, et où elle fut enregistrée.",
						"spanish": "Este es el lugar donde toda la tragedia comenzó y fue registrada.",
						"vietnamese": "Đây là nơi mọi bi kịch bắt đầu và được ghi lại.",
						"thai": "ที่นี่คือที่ที่โศกนาฏกรรมทั้งหมดเริ่มต้นและถูกบันทึกไว้",
						"hindi": "यह वह जगह है जहां सारी त्रासदी शुरू हुई, और जहां इसे दर्ज किया गया था।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "찢겨진 페이지 속에서… 한 남자의 비극적인 사랑이 보입니다.",
						"english": "Within the torn pages... I see a man's tragic love.",
						"japanese": "引き裂かれたページの中で…ある男の悲劇的な愛が見えます。",
						"chinese": "在被撕裂的页面中……我看到了一个男人的悲剧爱情。",
						"french": "Au sein des pages déchirées... Je vois l'amour tragique d'un homme.",
						"spanish": "Entre las páginas rotas... veo el amor trágico de un hombre.",
						"vietnamese": "Trong những trang sách bị xé nát… tôi thấy tình yêu bi thảm của một người đàn ông.",
						"thai": "ในหน้ากระดาษที่ฉีกขาด... ฉันเห็นความรักอันน่าเศร้าของชายคนหนึ่ง",
						"hindi": "फटे हुए पन्नों में... मुझे एक आदमी का दुखद प्यार दिखता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…사랑?",
						"english": "...Love?",
						"japanese": "…愛？",
						"chinese": "……爱情？",
						"french": "...L'amour ?",
						"spanish": "...¿Amor?",
						"vietnamese": "…Tình yêu?",
						"thai": "...ความรัก?",
						"hindi": "...प्यार?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 맹세했죠. '베로니카, 반드시 돌아오겠다'고.",
						"english": "He swore, \"Veronica, I will surely return.\"",
						"japanese": "彼は誓った。「ベロニカ、必ず戻る」と。",
						"chinese": "他发誓说：“维罗妮卡，我一定会回来的。”",
						"french": "Il a juré : « Veronica, je reviendrai, c'est promis. »",
						"spanish": "Él juró: «Verónica, sin falta regresaré.»",
						"vietnamese": "Anh ấy đã thề: \"Veronica, anh nhất định sẽ trở lại.\"",
						"thai": "เขาສາบานว่า \"เวโรนิกา ฉันจะกลับมาแน่นอน\"",
						"hindi": "उसने कसम खाई, 'वेरोनिका, मैं निश्चित रूप से वापस आऊंगा।'"
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 유품 속에서 빛바랜 편지 조각이 손에 쥐였다. '베로니카'…",
						"english": "A faded letter fragment, 'Veronica,' was clutched in hand amidst old keepsakes.",
						"japanese": "古い遺品の中で、色褪せた手紙の断片「ベロニカ」が手に握られていた。",
						"chinese": "在旧遗物中，手里握着一张褪色的信纸碎片，上面写着“维罗妮卡”……",
						"french": "Un fragment de lettre décoloré, « Veronica », fut serré dans ma main au milieu de vieux souvenirs.",
						"spanish": "Un fragmento de carta descolorido, «Verónica», se aferró a mi mano entre viejas reliquias.",
						"vietnamese": "Một mảnh thư phai màu, 'Veronica', được nắm chặt trong tay giữa những kỷ vật cũ.",
						"thai": "เศษจดหมายที่ซีดจาง 'เวโรนิกา' ถูกกำไว้ในมือท่ามกลางของที่ระลึกเก่าๆ",
						"hindi": "पुरानी यादगार वस्तुओं के बीच, हाथ में एक फीका पत्र का टुकड़ा था, 'वेरोनिका'…"
					}
				},
				{
					"action": "shake",
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊어라. 모든 건 허상일 뿐.",
						"english": "Forget it. Everything is just an illusion.",
						"japanese": "忘れろ。全ては虚像に過ぎない。",
						"chinese": "忘了吧。一切都只是幻象。",
						"french": "Oublie ça. Tout n'est qu'illusion.",
						"spanish": "Olvídalo. Todo es solo una ilusión.",
						"vietnamese": "Quên đi. Tất cả chỉ là ảo ảnh.",
						"thai": "ลืมไปซะ ทุกสิ่งเป็นแค่ภาพลวงตา",
						"hindi": "भूल जाओ। सब कुछ सिर्फ एक भ्रम है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓말!",
						"english": "Lies!",
						"japanese": "嘘だ！",
						"chinese": "骗人！",
						"french": "Mensonge !",
						"spanish": "¡Mentira!",
						"vietnamese": "Nói dối!",
						"thai": "โกหก!",
						"hindi": "झूठ!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억은 조작될 수 있습니다. 누가 가해자인지… 누가 피해자인지…",
						"english": "Memories can be manipulated. Who is the aggressor... who is the victim...",
						"japanese": "記憶は操作され得る。誰が加害者なのか… 誰が被害者なのか…",
						"chinese": "记忆是可以被操控的。谁是加害者……谁是受害者……",
						"french": "Les souvenirs peuvent être manipulés. Qui est l'agresseur... qui est la victime...",
						"spanish": "Los recuerdos pueden ser manipulados. Quién es el agresor... quién es la víctima...",
						"vietnamese": "Ký ức có thể bị thao túng. Ai là kẻ gây hại... ai là nạn nhân...",
						"thai": "ความทรงจำสามารถถูกบิดเบือนได้ ใครคือผู้กระทำ... ใครคือเหยื่อ...",
						"hindi": "यादों को बदला जा सकता है। अपराधी कौन है... पीड़ित कौन है..."
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 경계는 너무나도 흐릿하죠.",
						"english": "That boundary is too blurry.",
						"japanese": "その境界はあまりにも曖昧だ。",
						"chinese": "那界限是如此模糊。",
						"french": "Cette frontière est bien trop floue.",
						"spanish": "Esa frontera es demasiado borrosa.",
						"vietnamese": "Ranh giới đó quá mờ nhạt.",
						"thai": "เส้นแบ่งนั้นพร่ามัวเกินไป",
						"hindi": "वह सीमा बहुत धुंधली है।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…그게 무슨 소리야.",
						"english": "...What do you mean by that?",
						"japanese": "…それはどういう意味だ。",
						"chinese": "……那是什么意思。",
						"french": "...Qu'est-ce que ça veut dire ?",
						"spanish": "...¿Qué quieres decir con eso?",
						"vietnamese": "...Ý anh là sao.",
						"thai": "...นั่นหมายความว่าอะไร",
						"hindi": "...इसका क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "진실은… 당신이 아는 것과 다를지도 모릅니다.",
						"english": "The truth... might be different from what you know.",
						"japanese": "真実は… あなたが知っていることと違うかもしれない。",
						"chinese": "真相……可能和你所知道的不同。",
						"french": "La vérité... pourrait être différente de ce que vous savez.",
						"spanish": "La verdad... podría ser diferente de lo que sabes.",
						"vietnamese": "Sự thật... có thể khác với những gì bạn biết.",
						"thai": "ความจริง... อาจแตกต่างจากที่คุณรู้",
						"hindi": "सच... शायद वह नहीं है जो आप जानते हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "혼란스러워…",
						"english": "I'm confused...",
						"japanese": "混乱している…",
						"chinese": "我很困惑……",
						"french": "Je suis confus...",
						"spanish": "Estoy confundido...",
						"vietnamese": "Tôi bối rối quá...",
						"thai": "ฉันสับสน...",
						"hindi": "मैं भ्रमित हूँ..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊어지는 허무 속으로… 이 길은 돌아올 수 없습니다.",
						"english": "Into an ever-deepening void... This path is irreversible.",
						"japanese": "深まる虚無の中へ… この道は戻れない。",
						"chinese": "进入越来越深的虚无之中……这条路没有回头。",
						"french": "Dans un vide toujours plus profond... Ce chemin est irréversible.",
						"spanish": "Hacia un vacío cada vez más profundo... Este camino es irreversible.",
						"vietnamese": "Vào khoảng không ngày càng sâu thẳm... Con đường này không thể quay lại.",
						"thai": "สู่ความว่างเปล่าที่ลึกซึ้งขึ้นเรื่อยๆ... เส้นทางนี้ไม่สามารถย้อนกลับได้",
						"hindi": "गहरे होते शून्य में... इस रास्ते से वापसी नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "막다른 길이라고 해도, 멈출 순 없어.",
						"english": "Even if it's a dead end, I can't stop.",
						"japanese": "行き止まりだとしても、止まることはできない。",
						"chinese": "即使是死路，也无法停止。",
						"french": "Même si c'est une impasse, je ne peux pas m'arrêter.",
						"spanish": "Aunque sea un callejón sin salida, no puedo detenerme.",
						"vietnamese": "Dù là đường cùng, ta cũng không thể dừng lại.",
						"thai": "ถึงแม้จะเป็นทางตัน ก็หยุดไม่ได้",
						"hindi": "भले ही यह एक बंद गली हो, मैं रुक नहीं सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서… 흐느낌이 들려오지 않나요? 모든 것을 잃은 듯한…",
						"english": "In the darkness... don't you hear the sobbing? As if everything has been lost...",
						"japanese": "闇の中で…すすり泣きが聞こえませんか？すべてを失ったかのような…",
						"chinese": "在黑暗中……难道你没听到啜泣声吗？仿佛失去了一切……",
						"french": "Dans l'obscurité... n'entendez-vous pas les sanglots ? Comme si tout avait été perdu...",
						"spanish": "En la oscuridad... ¿no oyes los sollozos? Como si todo se hubiera perdido...",
						"vietnamese": "Trong bóng tối... chẳng phải ngươi nghe thấy tiếng nức nở sao? Như thể đã mất đi tất cả...",
						"thai": "ในความมืดมิด... ไม่ได้ยินเสียงสะอื้นหรอกหรือ? ราวกับสูญสิ้นทุกสิ่ง...",
						"hindi": "अंधेरे में... क्या तुम्हें सिसकियाँ नहीं सुनाई देतीं? जैसे सब कुछ खो दिया हो..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "알 수 없는 허무의 감정이 온몸을 덮쳤다.",
						"english": "An unknown sense of emptiness enveloped my entire body.",
						"japanese": "得体の知れない虚無感が全身を覆った。",
						"chinese": "一种莫名的虚无感笼罩了全身。",
						"french": "Un sentiment de vide inconnu m'a envahi.",
						"spanish": "Una sensación de vacío desconocida me invadió por completo.",
						"vietnamese": "Một cảm giác hư vô khó tả bao trùm toàn thân.",
						"thai": "ความรู้สึกว่างเปล่าที่ไม่รู้จักปกคลุมทั่วทั้งร่าง",
						"hindi": "एक अज्ञात शून्यता की भावना ने मेरे पूरे शरीर को घेर लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 건가. 찢겨진 기억을 모으는 자여.",
						"english": "So you've come this far, gatherer of shattered memories.",
						"japanese": "ここまで来たか。引き裂かれた記憶を集める者よ。",
						"chinese": "收集破碎记忆之人，你走到这里了吗。",
						"french": "C'est donc là que tu es arrivé, toi qui rassembles les souvenirs déchirés.",
						"spanish": "Así que has llegado hasta aquí, recolector de recuerdos destrozados.",
						"vietnamese": "Ngươi đã đến tận đây sao, kẻ thu thập ký ức tan vỡ.",
						"thai": "เจ้ามาถึงที่นี่แล้วสินะ ผู้รวบรวมความทรงจำที่แตกสลายเอ๋ย",
						"hindi": "तो तुम यहीं तक आ गए हो, बिखरी यादों को इकट्ठा करने वाले।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하지만 모든 진실은 결국, 허무로 끝난다.",
						"english": "But all truth ultimately ends in emptiness.",
						"japanese": "しかし、すべての真実は結局、虚無に終わる。",
						"chinese": "然而，所有的真相最终都以虚无告终。",
						"french": "Mais toute vérité finit par n'être que vide.",
						"spanish": "Pero toda verdad, al final, termina en la nada.",
						"vietnamese": "Nhưng mọi sự thật cuối cùng đều kết thúc trong hư vô.",
						"thai": "แต่ความจริงทั้งมวล สุดท้ายแล้วก็จบลงด้วยความว่างเปล่า",
						"hindi": "लेकिन सभी सच अंततः शून्यता में समाप्त होते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "くだらないことを言うな！",
						"chinese": "别胡说！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói xằng!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास मत करो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "후회하게 될 거다.",
						"english": "You'll regret this.",
						"japanese": "後悔することになるぞ。",
						"chinese": "你会后悔的。",
						"french": "Tu le regretteras.",
						"spanish": "Te arrepentirás.",
						"vietnamese": "Ngươi sẽ phải hối hận.",
						"thai": "เจ้าจะต้องเสียใจ",
						"hindi": "तुम्हें इसका पछतावा होगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석군. 진실을 마주할 용기조차 없는 자여.",
						"english": "Foolish. One who lacks even the courage to face the truth.",
						"japanese": "愚か者め。真実と向き合う勇気さえ持たぬ者よ。",
						"chinese": "愚蠢。连面对真相的勇气都没有的人。",
						"french": "Insensé. Celui qui n'a même pas le courage d'affronter la vérité.",
						"spanish": "Necio. Aquel que ni siquiera tiene el valor de enfrentar la verdad.",
						"vietnamese": "Ngu ngốc. Kẻ thậm chí không có dũng khí đối mặt với sự thật.",
						"thai": "โง่เขลา ผู้ที่แม้แต่ความกล้าหาญที่จะเผชิญหน้ากับความจริงก็ไม่มี",
						"hindi": "मूर्ख। वह जिसके पास सत्य का सामना करने का साहस भी नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다시 싸울 거야.",
						"english": "...I'll fight again.",
						"japanese": "…また戦う。",
						"chinese": "……我会再战。",
						"french": "...Je me battrai à nouveau.",
						"spanish": "...Volveré a luchar.",
						"vietnamese": "...Tôi sẽ chiến đấu lần nữa.",
						"thai": "...ฉันจะสู้ใหม่",
						"hindi": "...मैं फिर लड़ूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "허무의 굴레는… 벗어날 수 없다.",
						"english": "The shackles of emptiness... cannot be escaped.",
						"japanese": "虚無の桎梏からは…逃れられない。",
						"chinese": "虚无的枷锁……无法摆脱。",
						"french": "Les chaînes du néant... sont inéluctables.",
						"spanish": "Las cadenas del vacío... no se pueden romper.",
						"vietnamese": "Xiềng xích của hư vô... không thể thoát khỏi.",
						"thai": "พันธนาการแห่งความว่างเปล่า... ไม่อาจหลีกหนี",
						"hindi": "शून्यता की बेड़ियों से... बच नहीं सकते।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… 또… 반복되는 건가…",
						"english": "Ugh... In the end... again... is it repeating...?",
						"japanese": "くっ…結局…また…繰り返されるのか…",
						"chinese": "呃……最终……又……要重复了吗……",
						"french": "Ugh... Au final... encore... ça se répète...?",
						"spanish": "Ugh... Al final... otra vez... ¿se repite...?",
						"vietnamese": "Khụ... Cuối cùng... lại... lặp lại sao...?",
						"thai": "อึก... สุดท้ายแล้ว... ก็... ซ้ำรอยอีกแล้วหรือนี่...",
						"hindi": "उफ़... अंत में... फिर... क्या यह दोहराया जा रहा है...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Ngươi nói gì?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자는 사라졌지만, 그 말이 귓가에 맴돌았다.",
						"english": "The shadow vanished, but its words lingered in my ears.",
						"japanese": "影は消えたが、その言葉は耳にこびりついて離れなかった。",
						"chinese": "影子消失了，但那句话却在我耳边萦绕。",
						"french": "L'ombre disparut, mais ses paroles résonnaient encore à mes oreilles.",
						"spanish": "La sombra desapareció, pero sus palabras resonaron en mis oídos.",
						"vietnamese": "Cái bóng biến mất, nhưng lời nói của nó vẫn văng vẳng bên tai.",
						"thai": "เงาหายไปแล้ว แต่คำพูดนั้นยังคงวนเวียนอยู่ในหู",
						"hindi": "परछाई गायब हो गई, लेकिन उसके शब्द मेरे कानों में गूँजते रहे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "베로니카. 그 이름은 아직 해답을 기다리고 있었다.",
						"english": "Veronica. That name still awaited an answer.",
						"japanese": "ベロニカ。その名前はまだ答えを待っていた。",
						"chinese": "维罗妮卡。那个名字仍在等待答案。",
						"french": "Veronica. Ce nom attendait toujours une réponse.",
						"spanish": "Verónica. Ese nombre aún esperaba una respuesta.",
						"vietnamese": "Veronica. Cái tên đó vẫn đang chờ một câu trả lời.",
						"thai": "เวโรนิก้า ชื่อนั้นยังคงรอคำตอบ",
						"hindi": "वेरोनिका। वह नाम अभी भी एक उत्तर की प्रतीक्षा कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"폐허가 된 저택. 잊혀진 시간의 기록들이 흩어져 있었다.",
			"한때 찬란했던 사랑은 비극으로 찢겨진 조각이 되어.",
			"기억을 모으는 자, 에코가 그 진실을 속삭인다.",
			"모든 것은 시작되었고, 진실은 언제나 잔인하게 숨어있다."
		],
		"english": [
			"A ruined mansion. Records of forgotten time lay scattered.",
			"Love, once brilliant, became fragments torn by tragedy.",
			"Echo, the gatherer of memories, whispers the truth.",
			"All began, and truth always hides cruelly."
		],
		"japanese": [
			"廃墟となった屋敷。忘れ去られた時間の記録が散らばっていた。",
			"かつて輝かしかった愛は、悲劇によって引き裂かれた破片となり。",
			"記憶を集める者、エコーがその真実を囁く。",
			"すべては始まり、真実は常に残酷に隠されている。"
		],
		"chinese": [
			"废墟般的宅邸。被遗忘的时间记录散落一地。",
			"曾经辉煌的爱情，化作被悲剧撕裂的碎片。",
			"记忆的收集者，艾可，低语着真相。",
			"一切都已开始，而真相总是残酷地隐藏着。"
		],
		"french": [
			"Un manoir en ruine. Des fragments du temps oublié étaient éparpillés.",
			"L'amour, autrefois éclatant, devint des fragments déchirés par la tragédie.",
			"Écho, la collectionneuse de souvenirs, murmure la vérité.",
			"Tout a commencé, et la vérité se cache toujours cruellement."
		],
		"spanish": [
			"Una mansión en ruinas. Registros de tiempos olvidados yacían dispersos.",
			"El amor, una vez brillante, se convirtió en fragmentos desgarrados por la tragedia.",
			"Eco, el que reúne los recuerdos, susurra la verdad.",
			"Todo comenzó, y la verdad siempre se oculta cruelmente."
		],
		"vietnamese": [
			"Một dinh thự hoang tàn. Những ghi chép về thời gian bị lãng quên nằm rải rác.",
			"Tình yêu từng rực rỡ, giờ thành những mảnh vỡ tan nát bởi bi kịch.",
			"Echo, người thu thập ký ức, thì thầm sự thật.",
			"Mọi thứ đã bắt đầu, và sự thật luôn ẩn giấu một cách tàn nhẫn."
		],
		"thai": [
			"คฤหาสน์ที่ปรักหักพัง บันทึกแห่งกาลเวลาที่ถูกลืมเลือนกระจัดกระจายอยู่",
			"ความรักที่เคยรุ่งโรจน์ กลับกลายเป็นชิ้นส่วนที่ถูกโศกนาฏกรรมฉีกขาด",
			"เอคโค่ ผู้รวบรวมความทรงจำ กระซิบความจริง",
			"ทุกสิ่งเริ่มต้นขึ้น และความจริงมักจะซ่อนเร้นอย่างโหดร้ายเสมอ"
		],
		"hindi": [
			"एक खंडहर हवेली। भूले हुए समय के अभिलेख बिखरे पड़े थे।",
			"कभी शानदार रहा प्यार, त्रासदी से टूटे हुए टुकड़े बन गया।",
			"यादों को बटोरने वाला, इको, सच फुसफुसाता है।",
			"सब कुछ शुरू हो गया, और सच्चाई हमेशा क्रूरता से छिपी रहती है।"
		]
	}
} as const;
