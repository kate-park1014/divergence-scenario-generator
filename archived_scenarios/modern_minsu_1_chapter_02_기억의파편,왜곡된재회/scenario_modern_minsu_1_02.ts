export const scenario_modern_minsu_1_02 = {
	"scenario_id": "modern_minsu_1_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"content": {
						"korean": "따뜻하고 아련한 기억들이 파노라마처럼 펼쳐졌다.",
						"english": "Warm, hazy memories unfolded like a panorama.",
						"japanese": "温かく、おぼろげな記憶がパノラマのように広がった。",
						"chinese": "温暖而模糊的记忆，如全景般展开。",
						"french": "Des souvenirs doux et flous se déroulaient comme un panorama.",
						"spanish": "Recuerdos cálidos y borrosos se desplegaron como un panorama.",
						"vietnamese": "Những ký ức ấm áp và mơ hồ mở ra như một bức tranh toàn cảnh.",
						"thai": "ความทรงจำอันอบอุ่นและเลือนรางแผ่ขยายออกไปดั่งภาพพาโนรามา",
						"hindi": "गर्म, धुंधली यादें एक मनोरम दृश्य की तरह सामने आईं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기는… 마치 꿈같아.",
						"english": "This place... it's like a dream.",
						"japanese": "ここは…まるで夢みたい。",
						"chinese": "这里…简直像梦一样。",
						"french": "Cet endroit... c'est comme un rêve.",
						"spanish": "Este lugar... es como un sueño.",
						"vietnamese": "Nơi này... như một giấc mơ vậy.",
						"thai": "ที่นี่...เหมือนความฝันเลย",
						"hindi": "यह जगह... एक सपने जैसी है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "기록 영상과 음성이 실시간으로 재생되는군. 꽤나 정교해.",
						"english": "Recorded video and audio are playing in real-time. Quite intricate.",
						"japanese": "記録映像と音声がリアルタイムで再生されている。なかなか精巧だ。",
						"chinese": "录像和音频正在实时播放。相当精巧。",
						"french": "Des vidéos et audios enregistrés sont diffusés en temps réel. C'est assez élaboré.",
						"spanish": "Video y audio grabados se reproducen en tiempo real. Bastante sofisticado.",
						"vietnamese": "Video và âm thanh ghi lại đang phát theo thời gian thực. Khá tinh xảo.",
						"thai": "ภาพและเสียงที่บันทึกไว้กำลังเล่นแบบเรียลไทม์ ซับซ้อนมากทีเดียว",
						"hindi": "रिकॉर्डेड वीडियो और ऑडियो वास्तविक समय में चल रहे हैं। काफी जटिल है।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그냥 즐기면 안 돼? 너무 아름다운데.",
						"english": "Can't we just enjoy it? It's so beautiful.",
						"japanese": "ただ楽しめばいいじゃない？ とても美しいのに。",
						"chinese": "就不能享受一下吗？它太美了。",
						"french": "On ne peut pas juste en profiter ? C'est tellement beau.",
						"spanish": "¿No podemos simplemente disfrutarlo? Es tan hermoso.",
						"vietnamese": "Không thể cứ tận hưởng thôi sao? Đẹp quá mà.",
						"thai": "แค่สนุกกับมันไม่ได้เหรอ? มันสวยมากเลยนะ",
						"hindi": "क्या हम बस इसका आनंद नहीं ले सकते? यह बहुत खूबसूरत है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "음… 잠시만. 방금 저 음성… 반복됐어.",
						"english": "Hmm... Wait a minute. That voice... it just repeated.",
						"japanese": "ん…ちょっと待って。今の音声…繰り返されたよ。",
						"chinese": "嗯…等一下。刚才那段语音…重复了。",
						"french": "Hmm... Attends. Cette voix... elle s'est répétée.",
						"spanish": "Mmm... Espera un momento. Esa voz... se repitió.",
						"vietnamese": "Ừm... Khoan đã. Giọng nói đó... vừa lặp lại.",
						"thai": "อื้ม...เดี๋ยวนะ เสียงเมื่อกี้...มันซ้ำ",
						"hindi": "हम्म... एक मिनट रुको। वह आवाज... अभी दोहराई गई।"
					}
				},
				{
					"content": {
						"korean": "응? 무슨 소리야?",
						"english": "Huh? What do you mean?",
						"japanese": "え？どういうこと？",
						"chinese": "嗯？什么意思？",
						"french": "Hein ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Eh? ¿Qué quieres decir?",
						"vietnamese": "Hả? Cậu nói gì vậy?",
						"thai": "หือ? หมายความว่าไง?",
						"hindi": "क्या? तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "같은 구절이 미세하게 두 번 재생됐어. 오류인가?",
						"english": "The same phrase played subtly twice. Is it an error?",
						"japanese": "同じフレーズがかすかに二度再生された。エラーかな？",
						"chinese": "同样的句子微妙地播放了两次。是错误吗？",
						"french": "La même phrase a été jouée subtilement deux fois. Une erreur ?",
						"spanish": "La misma frase se reprodujo sutilmente dos veces. ¿Es un error?",
						"vietnamese": "Cùng một câu đã được phát lại một cách tinh tế hai lần. Có phải là lỗi không?",
						"thai": "วลีเดิมเล่นซ้ำสองครั้งเล็กน้อย เป็นข้อผิดพลาดหรือเปล่า?",
						"hindi": "वही वाक्यांश सूक्ष्मता से दो बार चला। क्या यह एक त्रुटि है?"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "너무 예민한 거 아니야? 원래 이런 건가 보다 하고 넘어가.",
						"english": "Aren't you overreacting? Just let it go, it's probably normal.",
						"japanese": "考えすぎじゃない？元々こんなものだと思って、気にしないで。",
						"chinese": "你是不是太敏感了？就当它本来就是这样，别管了。",
						"french": "Tu n'es pas un peu trop sensible ? Laisse tomber, c'est sûrement normal.",
						"spanish": "¿No eres demasiado sensible? Déjalo pasar, seguro es normal.",
						"vietnamese": "Cậu không quá nhạy cảm sao? Cứ cho là chuyện bình thường đi.",
						"thai": "เธอไม่ได้อ่อนไหวเกินไปหน่อยเหรอ? ปล่อยไปเถอะ น่าจะปกติ",
						"hindi": "क्या तुम ज़्यादा संवेदनशील नहीं हो रहे? इसे जाने दो, शायद यह सामान्य है।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니, 이건 비정상적이야.",
						"english": "No, this is abnormal.",
						"japanese": "いや、これは異常だ。",
						"chinese": "不，这不正常。",
						"french": "Non, c'est anormal.",
						"spanish": "No, esto es anormal.",
						"vietnamese": "Không, cái này bất thường.",
						"thai": "ไม่ นี่มันผิดปกติ",
						"hindi": "नहीं, यह असामान्य है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "계속 감지돼. 음성 기록뿐만이 아니야.",
						"english": "Still detecting something. And not just audio logs.",
						"japanese": "まだ感知できる。音声記録だけではない。",
						"chinese": "还在检测。不只是语音记录。",
						"french": "Ça continue de détecter. Pas seulement des enregistrements audio.",
						"spanish": "Sigue detectándose. Y no solo son registros de audio.",
						"vietnamese": "Vẫn đang cảm nhận được. Không chỉ là nhật ký âm thanh.",
						"thai": "ยังคงตรวจจับได้ ไม่ใช่แค่บันทึกเสียง",
						"hindi": "अभी भी पता लग रहा है। सिर्फ़ ऑडियो रिकॉर्ड ही नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐가 문제인데?",
						"english": "What's wrong?",
						"japanese": "何が問題なの？",
						"chinese": "有什么问题？",
						"french": "Quel est le problème ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีปัญหาอะไร?",
						"hindi": "क्या बात है?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "특정 장면에서 미묘하게 영상이 튀고 있어. 고의적인 조작 가능성이 있어.",
						"english": "The video glitches subtly in certain scenes. There's a possibility of deliberate manipulation.",
						"japanese": "特定の場面で映像が微妙に乱れている。意図的な操作の可能性がある。",
						"chinese": "在特定场景中，视频有轻微的卡顿。有故意篡改的可能性。",
						"french": "La vidéo présente de subtils sauts dans certaines scènes. Il y a une possibilité de manipulation délibérée.",
						"spanish": "El video se distorsiona sutilmente en ciertas escenas. Existe la posibilidad de manipulación deliberada.",
						"vietnamese": "Video đang bị giật nhẹ ở một số cảnh. Có khả năng bị thao túng cố ý.",
						"thai": "วิดีโอกระตุกเล็กน้อยในบางฉาก มีความเป็นไปได้ที่จะถูกบิดเบือนโดยเจตนา",
						"hindi": "कुछ दृश्यों में वीडियो हल्का सा अटक रहा है। जानबूझकर छेड़छाड़ की संभावना है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "조작이라니… 누가 왜 이런 짓을?",
						"english": "Manipulation... Who would do this, and why?",
						"japanese": "操作だって…誰が、何のために？",
						"chinese": "篡改…谁会做这种事，为什么？",
						"french": "Manipulation... Qui ferait ça, et pourquoi ?",
						"spanish": "¿Manipulación...? ¿Quién haría esto y por qué?",
						"vietnamese": "Thao túng sao... Ai và tại sao lại làm thế?",
						"thai": "บงการงั้นเหรอ... ใครจะทำเรื่องแบบนี้ ทำไมล่ะ?",
						"hindi": "छेड़छाड़... ऐसा कौन करेगा और क्यों?"
					}
				},
				{
					"content": {
						"korean": "아름다운 기억 속에 균열이 생기는 건 좋은 징조가 아니야.",
						"english": "Cracks appearing in beautiful memories are not a good sign.",
						"japanese": "美しい記憶に亀裂が入るのは良い兆候じゃない。",
						"chinese": "美好的记忆中出现裂缝不是一个好兆头。",
						"french": "Des fissures dans de beaux souvenirs ne sont pas bon signe.",
						"spanish": "Las grietas en los recuerdos hermosos no son una buena señal.",
						"vietnamese": "Những vết nứt xuất hiện trong ký ức đẹp không phải là điềm lành.",
						"thai": "รอยร้าวที่เกิดขึ้นในความทรงจำที่สวยงามไม่ใช่ลางดี",
						"hindi": "सुंदर यादों में दरारें आना अच्छा संकेत नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이상해. 분명히 지나온 길인데… 왜 같은 풍경이 계속 반복되는 거지?",
						"english": "It's strange. I've definitely been this way... Why does the same scenery keep repeating?",
						"japanese": "おかしい。確かに通った道なのに…なぜ同じ風景が繰り返されるんだ？",
						"chinese": "很奇怪。明明是走过的路…为什么同样的风景会一直重复？",
						"french": "C'est étrange. J'ai déjà pris ce chemin... Pourquoi le même paysage se répète-t-il ?",
						"spanish": "Es extraño. Ya pasamos por aquí... ¿Por qué el mismo paisaje se repite?",
						"vietnamese": "Lạ thật. Rõ ràng là con đường đã đi qua... Sao cùng một khung cảnh cứ lặp đi lặp lại?",
						"thai": "แปลกจัง. ฉันเคยผ่านมาทางนี้แน่ๆ... ทำไมทิวทัศน์เดิมๆ ถึงได้ซ้ำไปซ้ำมา?",
						"hindi": "यह अजीब है। ज़रूर इसी रास्ते से आए थे... एक ही नज़ारा बार-बार क्यों दोहराया जा रहा है?"
					}
				},
				{
					"content": {
						"korean": "기분 탓 아니야? 너무 예민해서 그래.",
						"english": "Isn't it just your imagination? You're being too sensitive.",
						"japanese": "気のせいじゃない？考えすぎなんだよ。",
						"chinese": "不是你的错觉吗？是你太敏感了。",
						"french": "N'est-ce pas juste ton imagination ? Tu es trop sensible.",
						"spanish": "¿No es solo tu imaginación? Eres demasiado sensible.",
						"vietnamese": "Không phải do cảm giác của cậu sao? Cậu quá nhạy cảm.",
						"thai": "ไม่ใช่แค่อารมณ์หรอกเหรอ? เธออ่อนไหวเกินไป",
						"hindi": "क्या यह सिर्फ़ तुम्हारी कल्पना नहीं है? तुम बहुत संवेदनशील हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아니. 이 세계는 무언가 불완전해. 우리를 가두고 있어.",
						"english": "No. This world is incomplete somehow. It's trapping us.",
						"japanese": "違う。この世界は何か不完全だ。私たちを閉じ込めている。",
						"chinese": "不。这个世界有些不完整。它把我们困住了。",
						"french": "Non. Ce monde est en quelque sorte incomplet. Il nous piège.",
						"spanish": "No. Este mundo está incompleto de alguna manera. Nos está atrapando.",
						"vietnamese": "Không. Thế giới này không hoàn hảo. Nó đang giam cầm chúng ta.",
						"thai": "ไม่ โลกนี้ไม่สมบูรณ์แบบ มันกำลังขังเราไว้",
						"hindi": "नहीं। यह दुनिया किसी तरह से अधूरी है। यह हमें फँसा रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "따뜻했던 기억들은 이제 혼란으로 변질되고 있었다.",
						"english": "Warm memories now twisted into confusion.",
						"japanese": "温かい記憶は今、混乱へと変質していた。",
						"chinese": "温暖的记忆现在已变为混乱。",
						"french": "Les souvenirs chaleureux se sont transformés en confusion.",
						"spanish": "Los cálidos recuerdos ahora se retorcían en confusión.",
						"vietnamese": "Những ký ức ấm áp giờ đây đã biến thành sự hỗn loạn.",
						"thai": "ความทรงจำอันอบอุ่นบิดเบี้ยวกลายเป็นความสับสน",
						"hindi": "गर्म यादें अब उलझन में बदल गई थीं।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 이것 때문에? 기억 관리자는… 더 거대하다.",
						"english": "...Just for this? The Memory Keeper... is far grander.",
						"japanese": "…たったこれだけの為に？記憶管理者は…もっと巨大だ。",
						"chinese": "…就为了这个？记忆管理者…更加强大。",
						"french": "...Juste pour ça ? Le Gardien de la Mémoire... est bien plus grand.",
						"spanish": "... ¿Solo por esto? El Guardián de la Memoria... es mucho más grande.",
						"vietnamese": "...Chỉ vì điều này? Kẻ Giữ Ký Ức... còn vĩ đại hơn nhiều.",
						"thai": "…เพียงแค่นี้? ผู้ดูแลความทรงจำ… ยิ่งใหญ่กว่ามาก",
						"hindi": "...बस इसी के लिए? स्मृति रक्षक... कहीं अधिक भव्य है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "기억 관리자… 네 배후가 누구인지 알게 될 거야.",
						"english": "Memory Keeper... I'll find out who's behind you.",
						"japanese": "記憶管理者…お前の背後にいる者が誰なのか、必ず突き止めてやる。",
						"chinese": "记忆管理者…我会查出你背后是谁。",
						"french": "Gardien de la Mémoire... Je découvrirai qui est derrière toi.",
						"spanish": "Guardián de la Memoria... Descubriré quién está detrás de ti.",
						"vietnamese": "Kẻ Giữ Ký Ức... Ta sẽ tìm ra kẻ đứng sau ngươi.",
						"thai": "ผู้ดูแลความทรงจำ… ข้าจะรู้ว่าใครอยู่เบื้องหลังเจ้า",
						"hindi": "स्मृति रक्षक... मैं पता लगाऊंगा कि तुम्हारे पीछे कौन है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "기억의 파편들이 흩어졌다. 하지만 균열은 더 깊어졌다. 진실은 아직 멀었다.",
						"english": "Fragments of memory scattered. But the rift deepened. Truth is still far off.",
						"japanese": "記憶の破片が散らばった。しかし亀裂はさらに深まった。真実はまだ遠い。",
						"chinese": "记忆的碎片散落了。但裂痕更深了。真相仍遥远。",
						"french": "Les fragments de mémoire se sont dispersés. Mais la fissure s'est approfondie. La vérité est encore loin.",
						"spanish": "Fragmentos de memoria dispersos. Pero la grieta se profundizó. La verdad aún está lejos.",
						"vietnamese": "Những mảnh ký ức tan biến. Nhưng vết nứt càng sâu hơn. Sự thật vẫn còn xa vời.",
						"thai": "ชิ้นส่วนแห่งความทรงจำกระจัดกระจาย แต่รอยแยกกลับลึกขึ้น ความจริงยังอีกยาวไกล",
						"hindi": "स्मृति के टुकड़े बिखर गए। लेकिन दरार और गहरी हो गई। सच अभी भी दूर है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 과거의 환상 속에서 나타난 존재였다.",
						"english": "A giant shadow blocked the way. A being from a past illusion.",
						"japanese": "巨大な影が道を塞いだ。過去の幻想から現れた存在だった。",
						"chinese": "一道巨大的阴影挡住了去路。它是从过去的幻象中出现的。",
						"french": "Une ombre gigantesque bloquait le chemin. C'était une entité apparue d'une illusion passée.",
						"spanish": "Una sombra gigante bloqueaba el camino. Era un ser de una ilusión pasada.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một thực thể từ ảo ảnh quá khứ.",
						"thai": "เงาขนาดยักษ์ขวางทาง สิ่งมีชีวิตจากภาพลวงตาในอดีต",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। यह अतीत के एक भ्रम से उत्पन्न हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왜 이 완벽한 기억을 의심하는가? 이곳은 영원한 낙원.",
						"english": "Why doubt this perfect memory? This is eternal paradise.",
						"japanese": "なぜこの完璧な記憶を疑う？ここは永遠の楽園だ。",
						"chinese": "为何怀疑这完美的记忆？这里是永恒的乐园。",
						"french": "Pourquoi douter de ce souvenir parfait ? C'est le paradis éternel.",
						"spanish": "Por qué dudar de este recuerdo perfecto? Este es el paraíso eterno.",
						"vietnamese": "Tại sao lại nghi ngờ ký ức hoàn hảo này? Đây là thiên đường vĩnh cửu.",
						"thai": "ทำไมต้องสงสัยความทรงจำที่สมบูรณ์แบบนี้? ที่นี่คือสวรรค์นิรันดร์",
						"hindi": "इस पूर्ण स्मृति पर संदेह क्यों? यह शाश्वत स्वर्ग है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "완벽하다고? 거짓으로 점철된 반복된 오류일 뿐이야!",
						"english": "Perfect? It's just a repeated error full of lies!",
						"japanese": "完璧だと？それは嘘にまみれた繰り返しのエラーに過ぎない！",
						"chinese": "完美？这只是一个充满谎言的重复错误！",
						"french": "Parfait ? Ce n'est qu'une erreur répétée pleine de mensonges !",
						"spanish": "¿Perfecto? ¡Es solo un error repetido lleno de mentiras!",
						"vietnamese": "Hoàn hảo? Đó chỉ là một lỗi lặp đi lặp lại đầy dối trá!",
						"thai": "สมบูรณ์แบบ? มันก็แค่ข้อผิดพลาดซ้ำๆ ที่เต็มไปด้วยคำโกหก!",
						"hindi": "पूर्ण? यह केवल झूठ से भरी एक दोहराई गई त्रुटि है!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리는 진실을 찾아야 해. 여기서 멈출 수 없어.",
						"english": "We must find the truth. We can't stop here.",
						"japanese": "私たちは真実を見つけなければならない。ここで止まることはできない。",
						"chinese": "我们必须找到真相。不能在这里停下。",
						"french": "Nous devons trouver la vérité. Nous ne pouvons pas nous arrêter ici.",
						"spanish": "Debemos encontrar la verdad. No podemos detenernos aquí.",
						"vietnamese": "Chúng ta phải tìm ra sự thật. Không thể dừng lại ở đây.",
						"thai": "เราต้องค้นหาความจริง เราหยุดที่นี่ไม่ได้",
						"hindi": "हमें सच खोजना होगा। हम यहां रुक नहीं सकते।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 불편할 뿐. 영원한 망각 속에 머물러라.",
						"english": "Truth is only inconvenient. Remain in eternal oblivion.",
						"japanese": "真実は不便なだけだ。永遠の忘却の中に留まれ。",
						"chinese": "真相只会带来不便。永远留在遗忘之中吧。",
						"french": "La vérité n'est qu'un inconvénient. Restez dans l'oubli éternel.",
						"spanish": "La verdad es solo un inconveniente. Permanece en el olvido eterno.",
						"vietnamese": "Sự thật chỉ bất tiện thôi. Hãy ở lại trong sự lãng quên vĩnh cửu.",
						"thai": "ความจริงเป็นเพียงความไม่สะดวก จงอยู่ในความลืมเลือนชั่วนิรันดร์",
						"hindi": "सच सिर्फ असुविधाजनक है। शाश्वत विस्मृति में रहो।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억의 파도에 휩쓸려 모든 것이 희미해졌다.",
						"english": "Swept away by the waves of memory, everything faded.",
						"japanese": "記憶の波に飲み込まれ、すべてが薄れていった。",
						"chinese": "被记忆的浪潮卷走，一切都模糊了。",
						"french": "Emporté par les vagues de la mémoire, tout s'est estompé.",
						"spanish": "Arrastrado por las olas de la memoria, todo se desvaneció.",
						"vietnamese": "Bị cuốn trôi bởi những con sóng ký ức, mọi thứ mờ dần.",
						"thai": "ถูกคลื่นความทรงจำพัดพา ทุกสิ่งจางหายไป",
						"hindi": "स्मृति की लहरों में बहकर, सब कुछ धुंधला गया।"
					}
				},
				{
					"content": {
						"korean": "환상 속에서 영원히 잠들어라. 그게 너희의 행복이야.",
						"english": "Sleep forever in this illusion. It is your happiness.",
						"japanese": "幻想の中で永遠に眠れ。それがお前たちの幸せだ。",
						"chinese": "在幻想中永远沉睡吧。那是你们的幸福。",
						"french": "Dormez éternellement dans cette illusion. C'est votre bonheur.",
						"spanish": "Dormid para siempre en la ilusión. Esa es vuestra felicidad.",
						"vietnamese": "Hãy ngủ yên mãi mãi trong ảo mộng. Đó là hạnh phúc của các ngươi.",
						"thai": "จงหลับใหลชั่วนิรันดร์ในภาพลวงตา นั่นคือความสุขของพวกเจ้า",
						"hindi": "इस भ्रम में हमेशा के लिए सो जाओ। यही तुम्हारी खुशी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 이 거짓된 평화를 깨부술 거야.",
						"english": "…It's not over yet. I will shatter this false peace.",
						"japanese": "…まだ終わってない。この偽りの平和を打ち砕いてやる。",
						"chinese": "……还没有结束。我会打破这虚假的和平。",
						"french": "…Ce n'est pas encore fini. Je briserai cette fausse paix.",
						"spanish": "…Aún no ha terminado. Destrozaré esta falsa paz.",
						"vietnamese": "…Vẫn chưa kết thúc đâu. Ta sẽ phá tan sự bình yên giả dối này.",
						"thai": "…ยังไม่จบแค่นี้ ฉันจะทำลายความสงบสุขจอมปลอมนี้ซะ",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं इस झूठी शांति को तोड़ दूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 아름다웠다. 하지만 완벽하지 않았다.",
			"행복한 기억들 속, 낯선 균열이 시작된다.",
			"이 아름다운 환상은 누구의 거짓인가?"
		],
		"english": [
			"The world was beautiful, but not perfect.",
			"Amidst happy memories, a strange rift begins.",
			"Whose lie is this beautiful illusion?"
		],
		"japanese": [
			"世界は美しかった。しかし、完璧ではなかった。",
			"幸せな記憶の中、見慣れない亀裂が始まる。",
			"この美しい幻想は、誰の嘘なのか？"
		],
		"chinese": [
			"世界曾如此美丽。但并非完美。",
			"幸福记忆中，陌生的裂痕悄然浮现。",
			"这美丽的幻象，是何人的谎言？"
		],
		"french": [
			"Le monde était beau, mais pas parfait.",
			"Au milieu des souvenirs heureux, une étrange faille apparaît.",
			"De qui est ce beau mensonge, cette illusion ?"
		],
		"spanish": [
			"El mundo era hermoso, pero no perfecto.",
			"Entre recuerdos felices, una extraña grieta empieza.",
			"¿De quién es esta hermosa ilusión?"
		],
		"vietnamese": [
			"Thế giới thật đẹp. Nhưng không hoàn hảo.",
			"Giữa những ký ức hạnh phúc, một vết nứt lạ bắt đầu.",
			"Ảo ảnh tuyệt đẹp này là lời nói dối của ai?"
		],
		"thai": [
			"โลกงดงาม แต่ไม่สมบูรณ์แบบ",
			"ท่ามกลางความทรงจำอันแสนสุข รอยร้าวแปลกประหลาดกำลังเริ่มต้นขึ้น",
			"ภาพลวงตาอันงดงามนี้เป็นคำโกหกของใครกัน?"
		],
		"hindi": [
			"दुनिया खूबसूरत थी। लेकिन परिपूर्ण नहीं।",
			"सुखद यादों के बीच, एक अजीब दरार शुरू होती है।",
			"यह खूबसूरत भ्रम किसका झूठ है?"
		]
	}
} as const;
