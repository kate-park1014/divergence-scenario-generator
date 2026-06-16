export const scenario_snowy_skalhorn_75_02 = {
	"scenario_id": "snowy_skalhorn_75_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 표면이 수정으로 뒤덮였다. 그 안에 일그러진 얼굴들이 갇혀 있었다.",
						"english": "The horn chalice's surface was covered in crystal. Distorted faces were trapped within.",
						"japanese": "角杯の表面は水晶で覆われていた。その中に歪んだ顔々が閉じ込められていた。",
						"chinese": "号角圣杯的表面被水晶覆盖。扭曲的面孔被困在其中。",
						"french": "La surface du calice en corne était couverte de cristal. Des visages déformés y étaient piégés.",
						"spanish": "La superficie del cáliz de cuerno estaba cubierta de cristal. Rostros distorsionados estaban atrapados en su interior.",
						"vietnamese": "Bề mặt của sừng chén phủ đầy pha lê. Những khuôn mặt méo mó bị mắc kẹt bên trong.",
						"thai": "พื้นผิวของจอกเขาถูกปกคลุมด้วยคริสตัล ใบหน้าบิดเบี้ยวถูกขังอยู่ภายใน",
						"hindi": "श्रृंग प्याले की सतह क्रिस्टल से ढकी थी। विकृत चेहरे भीतर फंसे हुए थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 소리… 웅얼거리는 것 같아.",
						"english": "This sound... it feels like murmuring.",
						"japanese": "この音… 囁いているようだ。",
						"chinese": "这声音……听起来像低语。",
						"french": "Ce son... on dirait un murmure.",
						"spanish": "Este sonido... parece un murmullo.",
						"vietnamese": "Âm thanh này… như đang lầm bầm.",
						"thai": "เสียงนี้... เหมือนกำลังพึมพำ",
						"hindi": "यह आवाज़... बड़बड़ाहट जैसी लगती है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"type": "speech",
					"content": {
						"korean": "찬가처럼 들리는군. 하지만 뭔가 거슬려.",
						"english": "Sounds like a hymn. But something's off.",
						"japanese": "賛歌のように聞こえるな。だが、何かが気に障る。",
						"chinese": "听起来像赞美诗。但总觉得哪里不对劲。",
						"french": "Ça sonne comme un hymne. But quelque chose cloche.",
						"spanish": "Suena a himno. Pero algo molesta.",
						"vietnamese": "Nghe như một bài thánh ca. Nhưng có gì đó không ổn.",
						"thai": "ฟังดูเหมือนเพลงสรรเสริญ แต่มีบางอย่างแปลกๆ",
						"hindi": "भजन जैसा लगता है। पर कुछ अजीब है।"
					},
					"speaker": "boris",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "가까이 갈수록 소름 끼치는군.",
						"english": "The closer I get, the creepier it feels.",
						"japanese": "近づくほど、ぞっとするな。",
						"chinese": "越靠近，越毛骨悚然。",
						"french": "Plus je m'approche, plus c'est effrayant.",
						"spanish": "Cuanto más me acerco, más espeluznante se vuelve.",
						"vietnamese": "Càng đến gần, càng rợn người.",
						"thai": "ยิ่งเข้าใกล้ ยิ่งน่าขนลุก",
						"hindi": "जितना करीब जाता हूँ, उतना ही डरावना लगता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왜? 난 아름답게 들리는데.",
						"english": "Why? It sounds beautiful to me.",
						"japanese": "なぜ？私には美しく聞こえるけど。",
						"chinese": "为什么？我觉得很美啊。",
						"french": "Pourquoi ? Ça me semble magnifique.",
						"spanish": "¿Por qué? A mí me suena hermoso.",
						"vietnamese": "Sao vậy? Với tôi thì nghe hay mà.",
						"thai": "ทำไมล่ะ? ฉันได้ยินว่ามันไพเราะนะ",
						"hindi": "क्यों? मुझे तो यह मधुर लगता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "잘 들어봐. 멜로디 속에… 다른 소리가 섞여 있어.",
						"english": "Listen closely. In the melody... another sound is mixed in.",
						"japanese": "よく聞いてみて。メロディーの中に…別の音が混ざっている。",
						"chinese": "仔细听。旋律里……混杂着别的声音。",
						"french": "Écoute attentivement. Dans la mélodie... un autre son est mêlé.",
						"spanish": "Escucha bien. En la melodía... hay otro sonido mezclado.",
						"vietnamese": "Nghe kỹ xem. Trong giai điệu… có lẫn một âm thanh khác.",
						"thai": "ลองฟังดีๆ สิ ในทำนอง...มีเสียงอื่นปนอยู่",
						"hindi": "ध्यान से सुनो। धुन में... कोई और आवाज़ मिली हुई है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "확신해. 이건 노래가 아니야.",
						"english": "I'm sure. This isn't a song.",
						"japanese": "確信してる。これは歌じゃない。",
						"chinese": "我确信。这不是歌。",
						"french": "J'en suis sûr. Ce n'est pas une chanson.",
						"spanish": "Estoy seguro. Esto no es una canción.",
						"vietnamese": "Tôi chắc chắn. Đây không phải là bài hát.",
						"thai": "ฉันแน่ใจ นี่ไม่ใช่เพลง",
						"hindi": "मुझे यकीन है। यह कोई गाना नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ一体何なんだ？",
						"chinese": "那到底是什么？",
						"french": "Alors, c'est quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर ये क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비명이야. 누군가 이걸 찬가로 둔갑시킨 거라고.",
						"english": "It's a scream. Someone disguised it as a hymn.",
						"japanese": "悲鳴だ。誰かがこれを賛歌に偽装したんだ。",
						"chinese": "是尖叫。有人把它伪装成了赞歌。",
						"french": "C'est un cri. Quelqu'un l'a déguisé en hymne.",
						"spanish": "Es un grito. Alguien lo disfrazó de himno.",
						"vietnamese": "Đó là tiếng hét. Ai đó đã biến nó thành bài thánh ca.",
						"thai": "มันคือเสียงกรีดร้อง ใครบางคนปลอมแปลงมันเป็นเพลงสวด",
						"hindi": "यह एक चीख है। किसी ने इसे भजन का रूप दे दिया है।"
					},
					"speaker": "boris",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누가 그런 짓을?",
						"english": "Who would do such a thing?",
						"japanese": "誰がそんなことを？",
						"chinese": "谁会做这种事？",
						"french": "Qui ferait une telle chose ?",
						"spanish": "¿Quién haría tal cosa?",
						"vietnamese": "Ai lại làm chuyện đó?",
						"thai": "ใครจะทำเรื่องแบบนั้น?",
						"hindi": "ऐसा कौन करेगा?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 듣지 마! 이성을 잃을 거야.",
						"english": "Don't listen anymore! You'll lose your mind.",
						"japanese": "もう聞くな！理性を失うぞ。",
						"chinese": "别再听了！你会失去理智的。",
						"french": "N'écoute plus ! Tu vas perdre la tête.",
						"spanish": "¡No escuches más! Perderás la cordura.",
						"vietnamese": "Đừng nghe nữa! Ngươi sẽ mất trí đấy.",
						"thai": "อย่าฟังอีกเลย! เจ้าจะเสียสติ!",
						"hindi": "और मत सुनो! तुम अपनी बुद्धि खो दोगे।"
					}
				},
				{
					"content": {
						"korean": "저 비명은… 우리 마을 사람들의?",
						"english": "Those screams... are they from our villagers?",
						"japanese": "あの悲鳴は… 我が村の者たちの？",
						"chinese": "那些尖叫声… 是我们村里人的吗？",
						"french": "Ces cris... Sont-ils de nos villageois ?",
						"spanish": "Esos gritos... ¿Son de nuestra gente del pueblo?",
						"vietnamese": "Những tiếng hét đó… là của dân làng chúng ta sao?",
						"thai": "เสียงกรีดร้องเหล่านั้น... คือคนในหมู่บ้านเราหรือ?",
						"hindi": "वे चीखें... क्या हमारे गाँव वालों की हैं?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "그럴 리 없어. 이렇게 조작될 리가.",
						"english": "That can't be. It couldn't be manipulated like this.",
						"japanese": "そんなはずない。こんな風に操作されるはずがない。",
						"chinese": "不可能。它不可能被这样操纵。",
						"french": "C'est impossible. Ça ne peut pas être manipulé comme ça.",
						"spanish": "Eso no puede ser. No podría ser manipulado así.",
						"vietnamese": "Không thể nào. Nó không thể bị thao túng như vậy.",
						"thai": "เป็นไปไม่ได้ มันไม่น่าจะถูกบิดเบือนแบบนี้",
						"hindi": "ऐसा नहीं हो सकता। इसे ऐसे हेरफेर नहीं किया जा सकता।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "shake",
					"speaker": "narrator",
					"duration_ms": 700
				},
				{
					"type": "speech",
					"content": {
						"korean": "뒤틀린 음률이 공간을 가득 채웠다. 거대한 그림자가 드리워졌다.",
						"english": "Twisted melodies filled the space. A gigantic shadow loomed.",
						"japanese": "歪んだ音律が空間を満たした。巨大な影が差し込んだ。",
						"chinese": "扭曲的旋律充斥着空间。一个巨大的阴影笼罩而下。",
						"french": "Des mélodies tordues emplissaient l'espace. Une ombre gigantesque planait.",
						"spanish": "Melodías retorcidas llenaron el espacio. Una sombra gigantesca se cernió.",
						"vietnamese": "Những giai điệu méo mó lấp đầy không gian. Một bóng đen khổng lồ bao trùm.",
						"thai": "ท่วงทำนองบิดเบี้ยวเติมเต็มพื้นที่ เงาขนาดมหึมาทอดทับ",
						"hindi": "विकृत धुनें अंतरिक्ष में भर गईं। एक विशाल छाया मंडराने लगी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들… 진실은 더욱 잔혹할 텐데.",
						"english": "Fools... The truth will be even crueler.",
						"japanese": "愚か者たちめ… 真実はもっと残酷だろうに。",
						"chinese": "蠢货们……真相会更加残酷。",
						"french": "Fous... La vérité sera encore plus cruelle.",
						"spanish": "Necios... La verdad será aún más cruel.",
						"vietnamese": "Những kẻ ngu ngốc... Sự thật sẽ còn tàn khốc hơn.",
						"thai": "พวกโง่... ความจริงจะโหดร้ายยิ่งกว่านั้น",
						"hindi": "मूर्खों... सच और भी क्रूर होगा।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "그는 비명을 숨기려 했어. 뭔가 더 큰 게 있어.",
						"english": "He tried to hide his screams. There's something bigger at play.",
						"japanese": "彼は悲鳴を隠そうとした。もっと大きな何かが隠されている。",
						"chinese": "他试图隐藏尖叫。有更大的事情在发生。",
						"french": "Il a essayé de cacher ses cris. Il y a quelque chose de plus grand.",
						"spanish": "Él intentó ocultar sus gritos. Hay algo más grande detrás.",
						"vietnamese": "Hắn ta đã cố che giấu tiếng thét. Có điều gì đó lớn hơn đang xảy ra.",
						"thai": "เขาพยายามซ่อนเสียงกรีดร้อง มีบางสิ่งที่ใหญ่กว่านั้น",
						"hindi": "उसने अपनी चीखें छिपाने की कोशिश की। कुछ और बड़ा चल रहा है।"
					},
					"speaker": "boris",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 어두운 진실이 조금 더 드러났다. 그러나 여전히 해명되지 않은 의문들이 남아 있었다.",
						"english": "The dark truth of the horn goblet was further revealed. Yet, unresolved questions remained.",
						"japanese": "角杯の暗い真実がさらに明らかになった。しかし、まだ解明されていない疑問が残っていた。",
						"chinese": "圣杯的黑暗真相进一步揭露。然而，仍有未解之谜。",
						"french": "La sombre vérité du gobelet cornu fut révélée davantage. Pourtant, des questions irrésolues subsistaient.",
						"spanish": "La oscura verdad del cuerno fue revelada aún más. Sin embargo, preguntas sin resolver permanecieron.",
						"vietnamese": "Sự thật đen tối về chiếc sừng đã được hé lộ thêm một chút. Tuy nhiên, những câu hỏi chưa được giải đáp vẫn còn đó.",
						"thai": "ความจริงอันมืดมิดของถ้วยเขาถูกเปิดเผยมากขึ้น แต่คำถามที่ยังไม่คลี่คลายก็ยังคงอยู่",
						"hindi": "सींग के प्याले की काली सच्चाई और उजागर हुई। फिर भी, अनसुलझे प्रश्न शेष रहे।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 영원히 찬가 속에 갇혀라.",
						"english": "Fools. Be trapped forever in the hymn.",
						"japanese": "愚か者たちめ。永遠に賛歌の中に閉じ込められろ。",
						"chinese": "蠢货们。永远被困在赞美诗中吧。",
						"french": "Fous. Soyez piégés pour toujours dans l'hymne.",
						"spanish": "Necios. Quedaos atrapados para siempre en el himno.",
						"vietnamese": "Những kẻ ngu ngốc. Hãy bị giam cầm mãi mãi trong bài thánh ca.",
						"thai": "พวกโง่ จงติดกับอยู่ในเพลงสดุดีตลอดไป",
						"hindi": "मूर्खों। भजन में हमेशा के लिए कैद रहो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 진실을 밝혀낼 거야.",
						"english": "...It's not over yet. I will definitely uncover the truth.",
						"japanese": "…まだ終わっていない。必ず真実を明らかにする。",
						"chinese": "……还没结束。我一定会揭露真相。",
						"french": "...Ce n'est pas encore fini. Je découvrirai la vérité, c'est sûr.",
						"spanish": "...Aún no ha terminado. Sin duda, revelaré la verdad.",
						"vietnamese": "...Chưa kết thúc đâu. Ta nhất định sẽ khám phá ra sự thật.",
						"thai": "...ยังไม่จบ ฉันจะเปิดเผยความจริงให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं निश्चित रूप से सच्चाई उजागर करूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "비명을 알아챘다고? 헛소리.",
						"english": "You noticed the screams? Nonsense.",
						"japanese": "悲鳴に気づいたと？たわごとだ。",
						"chinese": "你察觉到尖叫声了？胡说八道。",
						"french": "Tu as remarqué les cris ? Absurdités.",
						"spanish": "¿Notaste los gritos? Tonterías.",
						"vietnamese": "Ngươi đã nhận ra tiếng hét? Vô lý.",
						"thai": "เจ้ารู้สึกถึงเสียงกรีดร้องหรือ? ไร้สาระ",
						"hindi": "तुम्हें चीखें सुनाई दीं? बकवास।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "너의 짓이구나. 이 모든 게.",
						"english": "It was your doing. All of this.",
						"japanese": "お前の仕業だな。この全てが。",
						"chinese": "是你干的。这一切都是。",
						"french": "C'était ton œuvre. Tout ça.",
						"spanish": "Fue obra tuya. Todo esto.",
						"vietnamese": "Là do ngươi làm. Tất cả chuyện này.",
						"thai": "เป็นฝีมือของเจ้าเอง ทุกสิ่งนี้",
						"hindi": "यह तुम्हारी करतूत है। यह सब कुछ।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그저 아름다운 노래일 뿐. 너희에겐 들릴 가치도 없어.",
						"english": "Just a beautiful song. Not worth your ears.",
						"japanese": "ただ美しい歌にすぎない。お前たちには聞くに値しない。",
						"chinese": "这只是一首美妙的歌。不值得你们倾听。",
						"french": "Juste une belle chanson. Indigne de vos oreilles.",
						"spanish": "Solo una hermosa canción. Indigna de vuestros oídos.",
						"vietnamese": "Chỉ là một bài ca tuyệt đẹp. Không đáng để các ngươi lắng nghe.",
						"thai": "แค่เพลงเพราะๆ เท่านั้น ไม่คู่ควรให้พวกเจ้าได้ยิน",
						"hindi": "बस एक सुंदर गीत। तुम्हारे सुनने लायक नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "でたらめを言うな！",
						"chinese": "胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói xàm!",
						"thai": "ไร้สาระ!",
						"hindi": "बकवास!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 수정이 빛났다. 그 안의 얼굴들은 고요히 웅얼거렸다.",
			"신성한 찬가처럼 들리는 소리.",
			"그러나 이성은 속삭였다. 이건 노래가 아니라고.",
			"어둠 속에서 비명은 더 커지고 있었다."
		],
		"english": [
			"The crystal of the horn chalice gleamed. Faces within it quietly murmured.",
			"A sound like a sacred hymn.",
			"But reason whispered: This is no song.",
			"In the darkness, the screams grew louder."
		],
		"japanese": [
			"角杯の水晶が輝いた。その中の顔々は静かに囁いた。",
			"聖なる賛歌のように聞こえる音。",
			"しかし理性が囁いた。これは歌ではないと。",
			"闇の中で、悲鳴はさらに大きくなっていった。"
		],
		"chinese": [
			"号角圣杯的水晶闪耀着。里面的面孔们悄悄低语着。",
			"一个听起来像神圣赞美诗的声音。",
			"但理性低语道：这不是歌。",
			"在黑暗中，尖叫声越来越大。"
		],
		"french": [
			"Le cristal du calice en corne brillait. Des visages à l'intérieur murmuraient doucement.",
			"Un son comme un hymne sacré.",
			"Mais la raison chuchota : Ce n'est pas une chanson.",
			"Dans l'obscurité, les cris s'intensifiaient."
		],
		"spanish": [
			"El cristal del cáliz de cuerno resplandecía. Los rostros en su interior murmuraban en silencio.",
			"Un sonido como un himno sagrado.",
			"Pero la razón susurró: Esto no es una canción.",
			"En la oscuridad, los gritos se hacían más fuertes."
		],
		"vietnamese": [
			"Pha lê của sừng chén lấp lánh. Những khuôn mặt bên trong khẽ thì thầm.",
			"Một âm thanh như thánh ca linh thiêng.",
			"Nhưng lý trí thì thầm: Đây không phải là một bài hát.",
			"Trong bóng tối, những tiếng la hét ngày càng lớn."
		],
		"thai": [
			"คริสตัลแห่งจอกเขาเปล่งประกาย ใบหน้าภายในกระซิบแผ่วเบา",
			"เสียงราวกับเพลงสรรเสริญอันศักดิ์สิทธิ์",
			"แต่สติกระซิบ: นี่ไม่ใช่เพลง",
			"ในความมืดมิด เสียงกรีดร้องดังขึ้นเรื่อยๆ"
		],
		"hindi": [
			"श्रृंग प्याले का क्रिस्टल चमक उठा। उसके भीतर के चेहरे खामोशी से बड़बड़ा रहे थे。",
			"एक पवित्र भजन जैसी आवाज़।",
			"परंतु तर्क ने फुसफुसाया: यह कोई गीत नहीं है।",
			"अंधेरे में, चीखें तेज़ होती जा रही थीं।"
		]
	}
} as const;
