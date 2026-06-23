export const scenario_forest_moros_50_03 = {
	"scenario_id": "forest_moros_50_03",
	"order": 3,
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 빛나는 실타래들이 미로처럼 얽혀 있었다.",
						"english": "Luminous threads intertwined like a labyrinth in the darkness.",
						"japanese": "闇の中で輝く糸が迷路のように絡み合っていた。",
						"chinese": "黑暗中，发光的线团如迷宫般缠绕。",
						"french": "Des fils lumineux s'entremêlaient comme un labyrinthe dans l'obscurité.",
						"spanish": "Hilos luminosos se entrelazaban como un laberinto en la oscuridad.",
						"vietnamese": "Trong bóng tối, những sợi chỉ phát sáng đan xen như một mê cung.",
						"thai": "ด้ายเรืองแสงพันกันยุ่งเหยิงราวกับเขาวงกตในความมืด",
						"hindi": "अँधेरे में, चमकीले धागे एक भूलभुलैया की तरह उलझे हुए थे।"
					}
				},
				{
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오지 마… 그 빛은 가짜야.",
						"english": "Don't come... that light is fake.",
						"japanese": "来ないで…その光は偽物よ。",
						"chinese": "别过来……那光是假的。",
						"french": "Ne viens pas… cette lumière est fausse.",
						"spanish": "No vengas… esa luz es falsa.",
						"vietnamese": "Đừng đến gần… ánh sáng đó là giả.",
						"thai": "อย่ามานะ… แสงนั่นมันของปลอม",
						"hindi": "मत आओ… वो रोशनी झूठी है।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구…?",
						"english": "Who...?",
						"japanese": "誰…？",
						"chinese": "谁……？",
						"french": "Qui… ?",
						"spanish": "¿Quién…?",
						"vietnamese": "Ai…?",
						"thai": "ใครน่ะ…?",
						"hindi": "कौन…?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "페른. 내 가족이… 저 빛을 따라갔어. 그리고… 돌아오지 못했어.",
						"english": "Fern. My family… followed that light. And… never returned.",
						"japanese": "フェルン。私の家族が…あの光を追っていったの。そして…戻ってこなかった。",
						"chinese": "费恩。我的家人……跟着那光去了。然后……再也没回来。",
						"french": "Fern. Ma famille… a suivi cette lumière. Et… n'est jamais revenue.",
						"spanish": "Fern. Mi familia… siguió esa luz. Y… nunca regresó.",
						"vietnamese": "Fern. Gia đình tôi… đã đi theo ánh sáng đó. Và… không bao giờ trở lại.",
						"thai": "เฟิร์น ครอบครัวของฉัน… ตามแสงนั้นไปแล้ว… และ… ไม่กลับมาอีกเลย",
						"hindi": "फ़र्न। मेरा परिवार… उस रोशनी के पीछे गया था। और… कभी वापस नहीं आया।"
					},
					"speaker": "fern",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 저건 '운명의 실'이라고…",
						"english": "What are you talking about? That's the 'Thread of Destiny'...",
						"japanese": "何を言ってるの？あれは「運命の糸」よ…",
						"chinese": "你在说什么？那是“命运之线”……",
						"french": "De quoi parles-tu ? C'est le « Fil du Destin »…",
						"spanish": "¿De qué hablas? Eso es el \"Hilo del Destino\"...",
						"vietnamese": "Cô đang nói gì vậy? Đó là 'Sợi chỉ định mệnh' mà…",
						"thai": "พูดอะไรน่ะ? นั่นมัน 'ด้ายแห่งโชคชะตา'…",
						"hindi": "तुम क्या कह रहे हो? वह तो 'नियति का धागा' है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야. 전부 거짓말이야! 속지 마…",
						"english": "No. It's all lies! Don't be fooled...",
						"japanese": "違う。全部嘘よ！騙されないで…",
						"chinese": "不。那全是谎言！别被骗了……",
						"french": "Non. Tout est mensonge ! Ne te laisse pas berner…",
						"spanish": "No. ¡Todo es mentira! No te dejes engañar…",
						"vietnamese": "Không phải. Tất cả là dối trá! Đừng bị lừa…",
						"thai": "ไม่ใช่ ทั้งหมดนั่นโกหก! อย่าหลงเชื่อนะ…",
						"hindi": "नहीं। सब झूठ है! धोखा मत खाओ…"
					},
					"type": "speech",
					"speaker": "fern"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그들은 사라졌어. 흔적도 없이… 마치 빛에 잡아먹힌 것처럼.",
						"english": "They vanished. Without a trace… as if devoured by light.",
						"japanese": "彼らは消えた。痕跡もなく…まるで光に喰われたかのように。",
						"chinese": "他们消失了。了无痕迹……仿佛被光吞噬了一般。",
						"french": "Ils ont disparu. Sans laisser de trace… comme dévorés par la lumière.",
						"spanish": "Desaparecieron. Sin dejar rastro… como si la luz los hubiera devorado.",
						"vietnamese": "Họ biến mất rồi. Không một dấu vết… cứ như bị ánh sáng nuốt chửng vậy.",
						"thai": "พวกเขาหายไปแล้ว ไม่มีร่องรอย…ราวกับถูกแสงกลืนกิน.",
						"hindi": "वे गायब हो गए। बिना किसी निशान के… मानो प्रकाश ने उन्हें निगल लिया हो।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…빛이 가족을 해쳤다고?",
						"english": "…Light harmed your family?",
						"japanese": "…光が家族を傷つけたって？",
						"chinese": "……光伤害了你的家人？",
						"french": "…La lumière a fait du mal à ta famille ?",
						"spanish": "¿…La luz dañó a tu familia?",
						"vietnamese": "…Ánh sáng đã làm hại gia đình cậu sao?",
						"thai": "…แสงทำร้ายครอบครัวงั้นเหรอ?",
						"hindi": "…प्रकाश ने परिवार को नुकसान पहुँचाया?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래! 아름다운 실타래? 다 거짓말이야! 저건… 덫이야.",
						"english": "Yes! A beautiful thread? It's all a lie! That's… a trap.",
						"japanese": "そうだ！美しい糸玉？全部嘘だ！あれは…罠だ。",
						"chinese": "是的！美丽的线团？那都是谎言！那是……一个陷阱。",
						"french": "Oui ! Un beau fil ? Tout ça n'est qu'un mensonge ! C'est… un piège.",
						"spanish": "¡Sí! ¿Un hermoso hilo? ¡Todo es mentira! Eso es… una trampa.",
						"vietnamese": "Đúng vậy! Cuộn chỉ đẹp đẽ ấy à? Toàn bộ là dối trá! Đó… là một cái bẫy.",
						"thai": "ใช่! ด้ายที่สวยงามงั้นเหรอ? โกหกทั้งเพ! นั่นมัน…กับดัก.",
						"hindi": "हाँ! सुंदर धागा? सब झूठ है! वह… एक जाल है।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "소문은 숲을 떠돌았다. 실타래가 구원인지, 덫인지.",
						"english": "Rumors spread through the forest. Whether the thread was salvation, or a trap.",
						"japanese": "噂は森を巡った。糸玉が救いなのか、罠なのかと。",
						"chinese": "谣言在森林中流传。线团究竟是救赎，还是陷阱。",
						"french": "Les rumeurs couraient dans la forêt. Le fil était-il un salut, ou un piège.",
						"spanish": "Los rumores se extendieron por el bosque. Si el hilo era salvación, o una trampa.",
						"vietnamese": "Tin đồn lan khắp khu rừng. Liệu cuộn chỉ là cứu rỗi, hay là một cái bẫy.",
						"thai": "ข่าวลือแพร่สะพัดไปทั่วป่า ไม่ว่าด้ายนั้นจะเป็นความรอด หรือกับดัก.",
						"hindi": "जंगल में अफवाहें फैल गईं। कि वह धागा मुक्ति है या जाल।"
					},
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "fern",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "나처럼 당하지 마. 넌 달라야 해.",
						"english": "Don't suffer like me. You must be different.",
						"japanese": "私みたいになるな。お前は違わなければならない。",
						"chinese": "别像我一样受害。你必须与众不同。",
						"french": "Ne subis pas le même sort que moi. Tu dois être différent.",
						"spanish": "No termines como yo. Tú debes ser diferente.",
						"vietnamese": "Đừng như ta. Ngươi phải khác biệt.",
						"thai": "อย่าโดนเหมือนฉัน เธอต้องแตกต่าง.",
						"hindi": "मेरी तरह मत बनो। तुम्हें अलग होना चाहिए।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…어떻게 해야 해?",
						"english": "…What should I do?",
						"japanese": "…どうすればいい？",
						"chinese": "……我该怎么做？",
						"french": "…Que dois-je faire ?",
						"spanish": "¿…Qué debo hacer?",
						"vietnamese": "…Ta phải làm gì?",
						"thai": "…ฉันควรทำยังไง?",
						"hindi": "…मुझे क्या करना चाहिए?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "복수해 줘. 이 숲에… 저 빛나는 실타래에… 고통을 되갚아 줘.",
						"english": "Avenge me. Avenge this forest… that glowing thread… repay the suffering.",
						"japanese": "復讐してくれ。この森に…あの光る糸玉に…苦痛を返してくれ。",
						"chinese": "为我复仇。为这片森林……为那发光的线团……让它们尝尝痛苦的滋味。",
						"french": "Venge-moi. Venge cette forêt… ce fil brillant… rends-leur la souffrance.",
						"spanish": "Véngame. A este bosque… a ese hilo brillante… devuélveles el sufrimiento.",
						"vietnamese": "Hãy báo thù cho ta. Cho khu rừng này… cho cuộn chỉ phát sáng kia… hãy trả lại nỗi đau.",
						"thai": "แก้แค้นให้ฉันที ให้ป่านี้… ให้ด้ายที่ส่องแสงนั่น… ชดใช้ความเจ็บปวด.",
						"hindi": "मेरा बदला लो। इस जंगल से… उस चमकते धागे से… दर्द का बदला चुकाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "빛나는 실타래가 밤하늘의 별처럼 반짝였다. 그러나 그 속에서 불길한 기운이 느껴졌다.",
						"english": "The glowing thread sparkled like stars in the night sky. But an ominous aura emanated from within.",
						"japanese": "光る糸玉は夜空の星のように輝いた。しかし、その中から不吉な気配が感じられた。",
						"chinese": "发光的线团像夜空中的星星一样闪烁。然而，其中却散发着不祥的气息。",
						"french": "Le fil brillant étincelait comme les étoiles dans le ciel nocturne. Mais une aura sinistre s'en dégageait.",
						"spanish": "El hilo brillante centelleaba como estrellas en el cielo nocturno. Pero una aura siniestra emanaba de él.",
						"vietnamese": "Cuộn chỉ phát sáng lấp lánh như những vì sao trên bầu trời đêm. Nhưng từ bên trong nó, một cảm giác bất an trỗi dậy.",
						"thai": "ด้ายที่ส่องแสงระยิบระยับเหมือนดวงดาวบนท้องฟ้ายามค่ำคืน แต่กลับสัมผัสได้ถึงลางร้ายจากภายใน.",
						"hindi": "चमकता धागा रात के आकाश के तारों की तरह चमक रहा था। लेकिन उसके अंदर से एक अशुभ आभा निकल रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "fern",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈추지 마. 돌아갈 곳은 없어.",
						"english": "Don't stop. There's no turning back.",
						"japanese": "止まるな。戻る場所はない。",
						"chinese": "别停下。没有回头路了。",
						"french": "Ne t'arrête pas. Il n'y a pas de retour en arrière.",
						"spanish": "No te detengas. No hay vuelta atrás.",
						"vietnamese": "Đừng dừng lại. Không còn đường quay về nữa.",
						"thai": "อย่าหยุด ไม่มีที่ให้กลับไป.",
						"hindi": "रुको मत। वापस जाने की कोई जगह नहीं है।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "알아. 이미 너무 깊이 왔어.",
						"english": "I know. I've already come too far.",
						"japanese": "分かってる。もう深入りしすぎた。",
						"chinese": "我知道。我已经走得太远了。",
						"french": "Je sais. Je suis déjà allé trop loin.",
						"spanish": "Lo sé. Ya he llegado demasiado lejos.",
						"vietnamese": "Ta biết. Ta đã đi quá sâu rồi.",
						"thai": "ฉันรู้ ฉันมาไกลเกินไปแล้ว.",
						"hindi": "मुझे पता है। मैं पहले ही बहुत दूर आ चुका हूँ।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "모든 걸 부숴버려. 내 가족의 원한을 풀어 줘.",
						"english": "Destroy everything. Avenge my family.",
						"japanese": "全てを破壊しろ。私の家族の恨みを晴らしてくれ。",
						"chinese": "摧毁一切。为我的家人报仇。",
						"french": "Détruis tout. Venge ma famille.",
						"spanish": "Destruye todo. Venga a mi familia.",
						"vietnamese": "Phá hủy tất cả. Trả thù cho gia đình ta.",
						"thai": "ทำลายทุกสิ่ง แก้แค้นให้ครอบครัวของข้า",
						"hindi": "सब कुछ तबाह कर दो। मेरे परिवार का बदला लो。"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래. 반드시.",
						"english": "Yes. Absolutely.",
						"japanese": "ああ。必ず。",
						"chinese": "好。一定。",
						"french": "Oui. Absolument.",
						"spanish": "Sí. Sin falta.",
						"vietnamese": "Được. Nhất định.",
						"thai": "ได้เลย. ข้าจะทำแน่.",
						"hindi": "हाँ। निश्चित रूप से。"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "복수는… 너를 집어삼킬 것이다…",
						"english": "Vengeance… will consume you…",
						"japanese": "復讐は…お前を飲み込むだろう…",
						"chinese": "复仇…会吞噬你…",
						"french": "La vengeance… te consumera…",
						"spanish": "La venganza… te consumirá…",
						"vietnamese": "Sự trả thù… sẽ nuốt chửng ngươi…",
						"thai": "การแก้แค้น…จะกลืนกินเจ้า…",
						"hindi": "प्रतिशोध… तुम्हें निगल जाएगा…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยังไม่…จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 마… 아직… 희망은 있어…",
						"english": "Don't give up… There's still… hope…",
						"japanese": "諦めるな…まだ…希望はある…",
						"chinese": "别放弃…还有…希望…",
						"french": "N'abandonne pas… Il y a encore… de l'espoir…",
						"spanish": "No te rindas… Todavía… hay esperanza…",
						"vietnamese": "Đừng bỏ cuộc… Vẫn còn… hy vọng…",
						"thai": "อย่ายอมแพ้…ยังมีความ…หวัง…",
						"hindi": "हार मत मानो… अभी भी… उम्मीद है…"
					},
					"speaker": "fern",
					"emotion": "sad"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 넌… 그저 도구일 뿐… 더 큰 진실이 기다린다…",
						"english": "Heh heh... You... are merely a tool... A greater truth awaits...",
						"japanese": "クク…お前は…ただの道具にすぎない…もっと大きな真実が待っている…",
						"chinese": "呵呵…你…不过是个工具…更大的真相在等着…",
						"french": "Hé hé… Tu n'es… qu'un outil… Une vérité plus grande t'attend…",
						"spanish": "Je je... Tú... eres solo una herramienta... Una verdad mayor te espera...",
						"vietnamese": "Khà khà… Ngươi… chỉ là một công cụ… Một sự thật lớn hơn đang chờ đợi…",
						"thai": "คิกคิก… เจ้า… เป็นเพียงแค่เครื่องมือ… ความจริงที่ยิ่งใหญ่กว่ากำลังรออยู่…",
						"hindi": "हँ हँ… तुम… बस एक उपकरण हो… एक बड़ा सच इंतज़ार कर रहा है…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What are you talking about!?",
						"japanese": "何を言っている！？",
						"chinese": "你说什么！？",
						"french": "De quoi parles-tu !?",
						"spanish": "¡¿De qué hablas?!",
						"vietnamese": "Ngươi đang nói cái gì vậy!?",
						"thai": "หมายความว่าอะไร!?",
						"hindi": "तुम क्या कह रहे हो!?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "fern"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "해냈구나… 고마워…",
						"english": "You did it... Thank you...",
						"japanese": "やったな…ありがとう…",
						"chinese": "你成功了…谢谢…",
						"french": "Tu l'as fait… Merci…",
						"spanish": "Lo lograste... Gracias...",
						"vietnamese": "Ngươi đã làm được… Cảm ơn…",
						"thai": "เจ้าทำได้แล้ว... ขอบคุณ...",
						"hindi": "तुमने कर दिखाया… धन्यवाद…"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빛나는 실타래가 잠시 흐릿해졌다. 그러나 숲은 여전히 침묵하고 있었다.",
						"english": "The radiant thread momentarily blurred. Yet, the forest remained silent.",
						"japanese": "輝く糸が一時的に霞んだ。しかし、森は依然として静まり返っていた。",
						"chinese": "闪耀的丝线短暂模糊。然而，森林依然寂静。",
						"french": "Le fil éclatant s'est estompé un instant. Pourtant, la forêt restait silencieuse.",
						"spanish": "El hilo radiante se desdibujó momentáneamente. Sin embargo, el bosque permaneció en silencio.",
						"vietnamese": "Sợi chỉ phát sáng mờ đi trong chốc lát. Thế nhưng, khu rừng vẫn chìm trong im lặng.",
						"thai": "ด้ายเรืองแสงพร่ามัวไปชั่วขณะ แต่ป่าก็ยังคงเงียบงัน",
						"hindi": "चमकता धागा क्षण भर के लिए धुंधला हो गया। फिर भी, जंगल खामोश रहा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "페른의 슬픔은 가셨지만, 더 깊은 미스터리가 시작될 뿐이었다.",
						"english": "Though Fern's sorrow lifted, a deeper mystery had only just begun.",
						"japanese": "フェルンの悲しみは晴れたが、より深遠な謎が始まったばかりだった。",
						"chinese": "尽管费恩的悲伤消散，更深的谜团才刚刚开始。",
						"french": "Bien que la tristesse de Fern se soit dissipée, un mystère plus profond ne faisait que commencer.",
						"spanish": "Aunque la tristeza de Fern se disipó, un misterio más profundo apenas comenzaba.",
						"vietnamese": "Nỗi buồn của Fern đã tan biến, nhưng một bí ẩn sâu sắc hơn chỉ mới bắt đầu.",
						"thai": "แม้ความโศกเศร้าของเฟิร์นจะจางหายไป แต่ความลึกลับที่ลึกซึ้งกว่ากลับเพิ่งเริ่มต้น",
						"hindi": "हालांकि फ़र्न का दुख दूर हो गया, एक गहरा रहस्य बस शुरू ही हुआ था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마침내 마주한 뒤틀린 운명의 심장.",
						"english": "Finally, the twisted heart of fate.",
						"japanese": "ついに相対する、歪んだ運命の心臓。",
						"chinese": "终于，扭曲命运的核心。",
						"french": "Enfin, le cœur tordu du destin.",
						"spanish": "Por fin, el retorcido corazón del destino.",
						"vietnamese": "Cuối cùng, trái tim méo mó của vận mệnh.",
						"thai": "ในที่สุด ใจกลางแห่งโชคชะตาที่บิดเบี้ยวก็ปรากฏกาย.",
						"hindi": "अंततः, भाग्य का विकृत हृदय सामने है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 인간. 여기까지 오다니.",
						"english": "Foolish human. To come this far.",
						"japanese": "愚かな人間め。ここまで来るとはな。",
						"chinese": "愚蠢的人类。竟能走到这里。",
						"french": "Humain stupide. Oser venir si loin.",
						"spanish": "Estúpido humano. Has llegado demasiado lejos.",
						"vietnamese": "Con người ngu xuẩn. Dám đi xa đến thế.",
						"thai": "มนุษย์โง่เขลา บังอาจมาถึงเพียงนี้.",
						"hindi": "मूर्ख मानव। इतनी दूर आने की हिम्मत की।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 저 빛을 조종하는 자인가.",
						"english": "Are you... the one who controls that light?",
						"japanese": "貴様が…あの光を操る者か。",
						"chinese": "你就是…操纵那道光的人吗？",
						"french": "Es-tu… celui qui contrôle cette lumière ?",
						"spanish": "¿Eres tú... quien controla esa luz?",
						"vietnamese": "Ngươi… là kẻ điều khiển ánh sáng đó sao?",
						"thai": "เจ้า... คือผู้ควบคุมแสงนั้นหรือ?",
						"hindi": "क्या तुम… उस प्रकाश को नियंत्रित करने वाले हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "복수심에 눈먼 {random_boss}의 사냥개여. 네 분노를 바쳐라.",
						"english": "Hound of {random_boss}, blinded by vengeance. Offer up your rage.",
						"japanese": "復讐心に目が眩んだ{random_boss}の猟犬よ。その怒りを捧げよ。",
						"chinese": "{random_boss}的猎犬，被复仇蒙蔽了双眼。献出你的愤怒吧。",
						"french": "Chien de {random_boss}, aveuglé par la vengeance. Offre ta rage.",
						"spanish": "Sabueso de {random_boss}, cegado por la venganza. Ofrece tu ira.",
						"vietnamese": "Con chó săn của {random_boss}, bị báo thù làm mờ mắt. Hãy dâng hiến cơn thịnh nộ của ngươi.",
						"thai": "หมาล่าเนื้อของ {random_boss} ผู้มืดบอดด้วยแรงแค้น จงมอบความโกรธของเจ้ามา.",
						"hindi": "{random_boss} का शिकारी कुत्ता, प्रतिशोध से अंधा। अपना क्रोध अर्पित करो।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐. 내 가족을 돌려내!",
						"english": "Silence. Give me back my family!",
						"japanese": "黙れ。私の家族を返せ！",
						"chinese": "住口。把我的家人还给我！",
						"french": "Tais-toi. Rends-moi ma famille !",
						"spanish": "Cállate. ¡Devuélveme a mi familia!",
						"vietnamese": "Câm miệng. Trả lại gia đình của ta!",
						"thai": "หุบปาก! คืนครอบครัวของข้ามา!",
						"hindi": "खामोश। मेरे परिवार को वापस करो!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 '신비로운 빛'으로 가득했다.",
			"길을 잃은 자들을 구원한다는 속삭임.",
			"그러나 그 빛은, 누군가의 가족을 앗아갔다.",
			"복수의 울부짖음이, 뒤틀린 운명을 깨운다."
		],
		"english": [
			"The forest was filled with a 'mysterious light'.",
			"A whisper of salvation for the lost.",
			"But that light took someone's family.",
			"A cry for revenge awakens a twisted fate."
		],
		"japanese": [
			"森は「神秘的な光」に満ちていた。",
			"道に迷った者たちを救うという囁き。",
			"しかし、その光は誰かの家族を奪った。",
			"復讐の叫びが、歪んだ運命を目覚めさせる。"
		],
		"chinese": [
			"森林里充满了“神秘之光”。",
			"拯救迷失者的低语。",
			"然而，那光却夺走了某人的家人。",
			"复仇的哭喊，唤醒了扭曲的命运。"
		],
		"french": [
			"La forêt était remplie d'une «lumière mystérieuse».",
			"Un murmure de salut pour les égarés.",
			"Mais cette lumière a emporté la famille de quelqu'un.",
			"Un cri de vengeance éveille un destin tordu."
		],
		"spanish": [
			"El bosque estaba lleno de una \"luz misteriosa\".",
			"Un susurro de salvación para los perdidos.",
			"Pero esa luz se llevó a la familia de alguien.",
			"Un grito de venganza despierta un destino retorcido."
		],
		"vietnamese": [
			"Rừng tràn ngập 'ánh sáng huyền bí'.",
			"Lời thì thầm cứu rỗi những kẻ lạc lối.",
			"Nhưng ánh sáng đó đã cướp đi gia đình của ai đó.",
			"Tiếng gào thét báo thù đánh thức số phận vặn vẹo."
		],
		"thai": [
			"ป่าเต็มไปด้วย 'แสงเร้นลับ'",
			"เสียงกระซิบแห่งความรอดสำหรับผู้หลงทาง",
			"แต่แสงนั้นได้พรากครอบครัวของใครบางคนไป",
			"เสียงร่ำไห้แห่งการแก้แค้นปลุกโชคชะตาที่บิดเบี้ยว"
		],
		"hindi": [
			"जंगल 'रहस्यमयी रोशनी' से भरा था।",
			"भटके हुए लोगों के लिए मुक्ति की फुसफुसाहट।",
			"लेकिन उस रोशनी ने किसी के परिवार को छीन लिया।",
			"प्रतिशोध की चीख, एक विकृत भाग्य को जगाती है।"
		]
	}
} as const;
