export const scenario_forest_thalassa_7_02 = {
	"scenario_id": "forest_thalassa_7_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 고요했다. 평온함이 모든 것을 덮었다.",
						"english": "The forest was silent. Tranquility covered everything.",
						"japanese": "森は静かだった。静寂がすべてを覆っていた。",
						"chinese": "森林寂静无声。宁静笼罩着一切。",
						"french": "La forêt était silencieuse. La tranquillité couvrait tout.",
						"spanish": "El bosque estaba en silencio. La tranquilidad lo cubría todo.",
						"vietnamese": "Rừng thật tĩnh lặng. Sự thanh bình bao trùm mọi thứ.",
						"thai": "ป่าเงียบสงัด ความสงบปกคลุมทุกสิ่ง",
						"hindi": "जंगल शांत था। शांति ने सब कुछ ढक लिया था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사람들이… 모두 저 말만 해.",
						"english": "People... they all say just that.",
						"japanese": "みんな…あの言葉ばかり言ってる。",
						"chinese": "人们……都只说那句话。",
						"french": "Les gens… ils ne disent que ça.",
						"spanish": "La gente... todos dicen solo eso.",
						"vietnamese": "Mọi người... ai cũng chỉ nói câu đó.",
						"thai": "ผู้คน... ทุกคนพูดแต่คำนั้น",
						"hindi": "लोग... वे सब बस वही कहते हैं।"
					}
				},
				{
					"content": {
						"korean": "\"이제 평화로워…\"",
						"english": "\"Now it's peaceful...\"",
						"japanese": "「もう平和だ…」",
						"chinese": "“现在太平了……”",
						"french": "« Maintenant, c'est paisible… »",
						"spanish": "«Ahora es pacífico...»",
						"vietnamese": "\"Giờ thì yên bình rồi...\"",
						"thai": "“ตอนนี้สงบสุขแล้ว...”",
						"hindi": "\"अब शांति है...\""
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...이상하지 않아?",
						"english": "...Isn't it strange?",
						"japanese": "…おかしくない？",
						"chinese": "……不觉得奇怪吗？",
						"french": "...N'est-ce pas étrange ?",
						"spanish": "«...¿No es extraño?»",
						"vietnamese": "...Không phải là lạ sao?",
						"thai": "...มันไม่แปลกเหรอ?",
						"hindi": "...अजीब नहीं है क्या?"
					},
					"emotion": "sad",
					"speaker": "cedar"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "이건 평화가 아니야. 뭔가… 사라지고 있어.",
						"english": "This isn't peace. Something... is disappearing.",
						"japanese": "これは平和じゃない。何かが…消え去っている。",
						"chinese": "这不是和平。有什么东西……正在消失。",
						"french": "Ce n'est pas la paix. Quelque chose… disparaît.",
						"spanish": "Esto no es paz. Algo... está desapareciendo.",
						"vietnamese": "Đây không phải là hòa bình. Có điều gì đó... đang biến mất.",
						"thai": "นี่ไม่ใช่สันติภาพ บางสิ่ง... กำลังหายไป",
						"hindi": "यह शांति नहीं है। कुछ... गायब हो रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 고통이 없는데.",
						"english": "What are you talking about? There's no pain.",
						"japanese": "何を言ってるの？痛みがないのに。",
						"chinese": "你在说什么？又没有痛苦。",
						"french": "Qu'est-ce que tu racontes ? Il n'y a pas de douleur.",
						"spanish": "¿De qué hablas? No hay dolor.",
						"vietnamese": "Anh đang nói gì vậy? Đâu có nỗi đau nào.",
						"thai": "คุณพูดอะไรน่ะ? ไม่มีอะไรเจ็บปวดเลยนี่",
						"hindi": "क्या बक रहे हो? कोई दर्द तो है नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 사람 손 좀 봐. 수액이 닿았던 자리에….",
						"english": "Look at their hand. Where the sap touched...",
						"japanese": "あの人の手を見て。樹液が触れたところに…",
						"chinese": "看那个人的手。在树液接触到的地方……",
						"french": "Regardez leur main. Là où la sève a touché...",
						"spanish": "Mira su mano. Donde la savia tocó...",
						"vietnamese": "Nhìn tay người đó kìa. Nơi nhựa cây chạm vào...",
						"thai": "ดูมือของพวกเขาตรงที่ยางไม้โดน...",
						"hindi": "उस व्यक्ति का हाथ देखो। जहाँ रस छू गया था..."
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "피부 아래에서 돋아나는 작은 뿌리. 섬뜩한 광경이다.",
						"english": "Tiny roots sprouting beneath the skin. A gruesome sight.",
						"japanese": "皮膚の下から生える小さな根。ぞっとする光景だ。",
						"chinese": "皮肤下长出的小根。一个可怕的景象。",
						"french": "De minuscules racines poussant sous la peau. Une vision macabre.",
						"spanish": "Pequeñas raíces brotando bajo la piel. Una visión espantosa.",
						"vietnamese": "Những rễ nhỏ mọc dưới da. Một cảnh tượng ghê rợn.",
						"thai": "รากเล็กๆ งอกออกมาใต้ผิวหนัง เป็นภาพที่น่าขนลุก",
						"hindi": "त्वचा के नीचे से निकलती छोटी जड़ें। एक भयावह दृश्य।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통뿐만이 아니야. 그들 자신이… 흐릿해지고 있어.",
						"english": "It's not just pain. They themselves... are fading.",
						"japanese": "苦痛だけじゃない。彼ら自身が…曖昧になっていく。",
						"chinese": "不只是痛苦。他们自己……正在变得模糊。",
						"french": "Ce n'est pas seulement la douleur. Eux-mêmes... s'estompent.",
						"spanish": "No es solo dolor. Ellos mismos... se están desvaneciendo.",
						"vietnamese": "Không chỉ là nỗi đau. Chính họ... đang mờ dần đi.",
						"thai": "ไม่ใช่แค่ความเจ็บปวด พวกเขาเอง... กำลังเลือนหายไป",
						"hindi": "यह सिर्फ दर्द नहीं है। वे खुद... धुंधले हो रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "cedar"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이봐요! 정신 차려요!",
						"english": "Hey! Snap out of it!",
						"japanese": "おい！しっかりしろ！",
						"chinese": "喂！清醒一点！",
						"french": "Hé ! Reprenez-vous !",
						"spanish": "¡Oye! ¡Espabila!",
						"vietnamese": "Này! Tỉnh lại đi!",
						"thai": "เฮ้! ตื่นขึ้นมา!",
						"hindi": "अरे! होश में आओ!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "(멍한 눈으로) 평화로워요… 아주 평화로워요.",
						"english": "(With vacant eyes) It's peaceful... very peaceful.",
						"japanese": "(うつろな目で) 平和だ…とても平和だ。",
						"chinese": "(眼神空洞) 很平静……非常平静。",
						"french": "(Les yeux vides) C'est paisible... très paisible.",
						"spanish": "(Con ojos vacíos) Es pacífico... muy pacífico.",
						"vietnamese": "(Với đôi mắt vô hồn) Thật bình yên... rất bình yên.",
						"thai": "(ด้วยสายตาว่างเปล่า) มันสงบ... สงบมาก",
						"hindi": "खाली आँखों से) शांतिपूर्ण है... बहुत शांतिपूर्ण है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "봐. 그들은 이미 없어. 그저… 껍데기뿐이야.",
						"english": "Look. They're already gone. Just... shells.",
						"japanese": "見て。彼らはもういない。ただ…抜け殻だけだ。",
						"chinese": "看。他们已经不在了。只剩下……空壳。",
						"french": "Regardez. Ils sont déjà partis. Juste... des coquilles vides.",
						"spanish": "Mira. Ya no están. Solo... cáscaras.",
						"vietnamese": "Nhìn kìa. Họ đã không còn. Chỉ còn... lớp vỏ rỗng.",
						"thai": "ดูสิ พวกเขาไปแล้ว เหลือแค่... เปลือกหอย",
						"hindi": "देखो। वे पहले ही जा चुके हैं। बस... खोखले।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈춰야 해.",
						"english": "We have to stop.",
						"japanese": "止めなければならない。",
						"chinese": "必须停下来。",
						"french": "Il faut arrêter.",
						"spanish": "Tenemos que parar.",
						"vietnamese": "Phải dừng lại.",
						"thai": "เราต้องหยุด",
						"hindi": "हमें रुकना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 깊이 들어가면 안 돼. 너희마저 그렇게 될 거야.",
						"english": "Don't go any deeper. You'll become like them too.",
						"japanese": "これ以上深入りするな。お前たちもそうなるぞ。",
						"chinese": "不能再深入了。你们也会变成那样。",
						"french": "N'allez pas plus loin. Vous deviendrez comme eux aussi.",
						"spanish": "No vayas más profundo. Tú también te volverás así.",
						"vietnamese": "Đừng đi sâu hơn nữa. Các ngươi cũng sẽ trở thành như vậy.",
						"thai": "อย่าไปลึกกว่านี้ คุณก็จะกลายเป็นเหมือนพวกเขา",
						"hindi": "और गहरे मत जाओ। तुम भी उनके जैसे हो जाओगे।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 여기서 멈출 수 없어.",
						"english": "We can't stop here.",
						"japanese": "私たちはここで止まるわけにはいかない。",
						"chinese": "我们不能在这里停下。",
						"french": "Nous ne pouvons pas nous arrêter ici.",
						"spanish": "No podemos parar aquí.",
						"vietnamese": "Chúng ta không thể dừng lại ở đây.",
						"thai": "เราหยุดที่นี่ไม่ได้",
						"hindi": "हम यहाँ रुक नहीं सकते।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그 평화는 함정이야. 너희 모든 걸 빼앗아갈 거라고.",
						"english": "...That peace is a trap. It will take everything from you.",
						"japanese": "…その平和は罠だ。お前たちの全てを奪っていくぞ。",
						"chinese": "……那种平静是个陷阱。它会夺走你们的一切。",
						"french": "...Cette paix est un piège. Elle vous prendra tout.",
						"spanish": "...Esa paz es una trampa. Te lo quitará todo.",
						"vietnamese": "...Sự bình yên đó là một cái bẫy. Nó sẽ lấy đi tất cả của các ngươi.",
						"thai": "...ความสงบนั้นเป็นกับดัก มันจะพรากทุกสิ่งไปจากคุณ",
						"hindi": "...वह शांति एक जाल है। यह तुमसे सब कुछ छीन लेगी।"
					},
					"emotion": "angry",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알아. 그래도 가야 해.",
						"english": "I know. But I still have to go.",
						"japanese": "分かってる。それでも、行かないと。",
						"chinese": "我知道。但还是得去。",
						"french": "Je sais. Mais je dois quand même y aller.",
						"spanish": "Lo sé. Pero aún así tengo que ir.",
						"vietnamese": "Tôi biết. Nhưng tôi vẫn phải đi.",
						"thai": "ฉันรู้ แต่ฉันก็ยังต้องไป",
						"hindi": "मुझे पता है। फिर भी, मुझे जाना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "제발… 돌아가.",
						"english": "Please... go back.",
						"japanese": "お願い…戻って。",
						"chinese": "求你了…回去吧。",
						"french": "S'il te plaît… retourne-t'en.",
						"spanish": "Por favor… regresa.",
						"vietnamese": "Làm ơn... quay lại đi.",
						"thai": "ได้โปรด... กลับไปเถอะ",
						"hindi": "कृपया… वापस जाओ।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "봐라… 너희도 결국 평화를 찾게 될 것이다.",
						"english": "Look... you too will eventually find peace.",
						"japanese": "見ろ… お前たちも結局は平和を見つけるだろう。",
						"chinese": "看吧… 你们终将寻得平静。",
						"french": "Voyez… vous aussi finirez par trouver la paix.",
						"spanish": "Mirad… vosotros también acabaréis encontrando la paz.",
						"vietnamese": "Hãy nhìn xem… rồi các ngươi cũng sẽ tìm thấy hòa bình thôi.",
						"thai": "ดูสิ… พวกเจ้าเองก็จะได้พบความสงบในที่สุด",
						"hindi": "देखो… तुम भी आखिर में शांति पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not… over yet.",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没有… 结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยังไม่… จบลง",
						"hindi": "अभी… खत्म नहीं हुआ।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 정체 모를 존재가 기다리고 있었다.",
						"english": "In the deepest part of the forest, an unknown entity waited.",
						"japanese": "森の最も深い場所。正体不明の存在が待っていた。",
						"chinese": "森林最深处。一个不明存在正在等待。",
						"french": "Au plus profond de la forêt. Une entité inconnue attendait.",
						"spanish": "En lo más profundo del bosque. Una entidad desconocida esperaba.",
						"vietnamese": "Sâu nhất trong rừng. Một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "ลึกที่สุดในป่า สิ่งมีชีวิตนิรนามกำลังรออยู่",
						"hindi": "जंगल के सबसे गहरे हिस्से में। एक अज्ञात सत्ता प्रतीक्षा कर रही थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 너희도 평화를 원하나?",
						"english": "...You've come. Do you also seek peace?",
						"japanese": "…来たか。お前たちも平和を望むのか？",
						"chinese": "……你们来了。你们也渴望和平吗？",
						"french": "...Vous êtes venus. Vous aussi, vous désirez la paix ?",
						"spanish": "...Habéis venido. ¿Vosotros también queréis la paz?",
						"vietnamese": "…Các ngươi đã đến. Các ngươi cũng muốn hòa bình sao?",
						"thai": "...มาแล้วสินะ พวกเจ้าก็ต้องการสันติสุขหรือ?",
						"hindi": "…तुम आ गए। क्या तुम भी शांति चाहते हो?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 그 모든 걸 꾸민 거구나.",
						"english": "So you're behind all of this.",
						"japanese": "お前が、全てを企んでいたのか。",
						"chinese": "原来这一切都是你策划的。",
						"french": "C'est donc toi qui as tout manigancé.",
						"spanish": "Así que fuiste tú quien orquestó todo esto.",
						"vietnamese": "Thì ra ngươi đã sắp đặt tất cả.",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี่เอง",
						"hindi": "तो तुम ही थे इसके पीछे।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내가 준 건 평화뿐이다. 고통 없는 영원한 휴식.",
						"english": "All I offered was peace. Eternal rest, free from pain.",
						"japanese": "私が与えたのは平和だけだ。苦痛のない永遠の安息を。",
						"chinese": "我所给予的，唯有和平。没有痛苦的永恒安息。",
						"french": "Tout ce que j'ai donné, c'est la paix. Un repos éternel sans douleur.",
						"spanish": "Todo lo que di fue paz. Descanso eterno sin dolor.",
						"vietnamese": "Tất cả những gì ta ban cho chỉ là hòa bình. Sự an nghỉ vĩnh hằng không đau khổ.",
						"thai": "สิ่งที่ข้ามอบให้คือสันติสุขเท่านั้น การพักผ่อนชั่วนิรันดร์ที่ปราศจากความเจ็บปวด",
						"hindi": "मैंने तो केवल शांति दी है। पीड़ा रहित शाश्वत विश्राम।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건 소멸이야! 자기 자신을 잃는 거잖아!",
						"english": "That's annihilation! You lose yourselves!",
						"japanese": "それは消滅だ！自分自身を失うことになる！",
						"chinese": "那是毁灭！你们会失去自我！",
						"french": "C'est l'anéantissement ! C'est perdre son être !",
						"spanish": "¡Eso es aniquilación! ¡Es perderse a uno mismo!",
						"vietnamese": "Đó là sự tiêu diệt! Các ngươi sẽ đánh mất chính mình!",
						"thai": "นั่นมันคือการลบล้าง! พวกเจ้าจะสูญเสียตัวตนไป!",
						"hindi": "वह तो विनाश है! तुम खुद को खो दोगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 너희는 진짜 평화를 몰라.",
						"english": "...Fools. You know nothing of true peace.",
						"japanese": "…愚かな者たち。お前たちは本当の平和を知らない。",
						"chinese": "……愚蠢的家伙们。你们不懂真正的和平。",
						"french": "...Imbéciles. Vous ne connaissez pas la vraie paix.",
						"spanish": "...Necios. No conocéis la verdadera paz.",
						"vietnamese": "...Những kẻ ngu xuẩn. Các ngươi không biết hòa bình thật sự là gì.",
						"thai": "...คนโง่เง่า พวกเจ้าไม่รู้จักสันติสุขที่แท้จริง",
						"hindi": "…मूर्खों। तुम असली शांति नहीं जानते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그녀는 너희를 기다리고 있다… 영원히.",
						"english": "She is waiting for you... forever.",
						"japanese": "彼女がお前たちを待っている…永遠に。",
						"chinese": "她在等着你们……永远。",
						"french": "Elle vous attend... pour toujours.",
						"spanish": "Ella os está esperando... para siempre.",
						"vietnamese": "Cô ấy đang đợi các ngươi... mãi mãi.",
						"thai": "หล่อนกำลังรอพวกเจ้า... ชั่วนิรันดร์",
						"hindi": "वह तुम्हारा इंतजार कर रही है… हमेशा के लिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그녀? 대체 누가…",
						"english": "Her? Who exactly...?",
						"japanese": "彼女？一体誰が…",
						"chinese": "她？到底是谁…",
						"french": "Elle ? Qui donc...?",
						"spanish": "¿Ella? ¿Quién, exactamente...?",
						"vietnamese": "Cô ấy? Rốt cuộc là ai...?",
						"thai": "หล่อน? ใครกันแน่...",
						"hindi": "वह? आखिर कौन…"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "승리했으나, 불안감은 더 깊어졌다. 이 평온 뒤에 숨겨진 진실은 무엇일까.",
						"english": "Victory, yet a deeper unease settles. What truth hides behind this calm?",
						"japanese": "勝利した、だが不安はさらに深まった。この平穏の裏に隠された真実とは一体何か。",
						"chinese": "虽胜，不安却更深。这份平静背后隐藏着怎样的真相？",
						"french": "Victoire, pourtant l'inquiétude s'approfondit. Quelle vérité se cache derrière ce calme ?",
						"spanish": "Victoria, pero la inquietud se profundiza. ¿Qué verdad se esconde tras esta calma?",
						"vietnamese": "Chiến thắng, nhưng bất an càng thêm sâu sắc. Sự thật nào ẩn giấu sau vẻ bình yên này?",
						"thai": "ชัยชนะ แต่ความไม่สบายใจกลับลึกลงไปอีก อะไรคือความจริงที่ซ่อนอยู่เบื้องหลังความสงบนี้?",
						"hindi": "जीत मिली, पर बेचैनी और गहरी हो गई। इस शांति के पीछे क्या सच्चाई छिपी है?"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"\"평화로워.\" 상처 입은 이들의 속삭임.",
			"고통 없는 세상, 모두가 꿈꾸던 이상향.",
			"그러나 그 속에서, 무언가 소리 없이 사라지고 있었다.",
			"삶의 이유, 존재의 의미… 희미한 그림자처럼."
		],
		"english": [
			"\"Peaceful.\" The whisper of the wounded.",
			"A world without pain, the utopia everyone dreamed of.",
			"But within it, something was silently fading away.",
			"The reason for life, the meaning of existence... like a faint shadow."
		],
		"japanese": [
			"「平和だ。」傷ついた者たちのささやき。",
			"痛みなき世界、誰もが夢見た理想郷。",
			"しかしその中で、何かが音もなく消え去っていた。",
			"生きる理由、存在の意味… 希薄な影のように。"
		],
		"chinese": [
			"“和平。”伤者的低语。",
			"一个没有痛苦的世界，所有人梦想的乌托邦。",
			"然而，在那之中，有什么东西正在无声地消逝。",
			"生命的理由，存在的意义……如同一个模糊的影子。"
		],
		"french": [
			"« Paisible. » Le murmure des blessés.",
			"Un monde sans douleur, l'utopie dont tout le monde rêvait.",
			"Mais en son sein, quelque chose disparaissait silencieusement.",
			"La raison de vivre, le sens de l'existence… comme une ombre pâle."
		],
		"spanish": [
			"«Pacífico.» El susurro de los heridos.",
			"Un mundo sin dolor, la utopía que todos soñaban.",
			"Pero dentro de él, algo se desvanecía en silencio.",
			"La razón de vivir, el significado de la existencia... como una sombra tenue."
		],
		"vietnamese": [
			"\"Yên bình.\" Tiếng thì thầm của những người bị thương.",
			"Một thế giới không đau đớn, thiên đường mà mọi người hằng mơ ước.",
			"Nhưng trong đó, một điều gì đó đang âm thầm biến mất.",
			"Lý do tồn tại, ý nghĩa cuộc sống... như một cái bóng mờ nhạt."
		],
		"thai": [
			"“สงบสุข” เสียงกระซิบของผู้บาดเจ็บ",
			"โลกที่ไร้ความเจ็บปวด ดินแดนในฝันของทุกคน",
			"แต่ในนั้น มีบางสิ่งกำลังเลือนหายไปอย่างเงียบงัน",
			"เหตุผลของการมีชีวิต ความหมายของการดำรงอยู่... ราวกับเงาเลือนลาง"
		],
		"hindi": [
			"\"शांतिपूर्ण।\" घायलों की फुसफुसाहट।",
			"दर्द रहित दुनिया, वह आदर्शलोक जिसका हर कोई सपना देखता था।",
			"लेकिन उसके भीतर, कुछ खामोशी से मिटता जा रहा था।",
			"जीवन का कारण, अस्तित्व का अर्थ... एक धुंधली परछाई की तरह।"
		]
	}
} as const;
