export const scenario_ExArchive_V1_Aftermath_03 = {
	"scenario_id": "ExArchive_V1_Aftermath_03",
	"order": 3,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "동네는 어딘가 모르게 텅 비어 있었다. 과거의 그림자가 드리운 듯했다.",
						"english": "The neighborhood felt strangely empty, as if shadowed by the past.",
						"japanese": "町はどこか空っぽで、過去の影が差しているようだった。",
						"chinese": "社区莫名地空荡荡，仿佛笼罩在过去的阴影中。",
						"french": "Le quartier semblait étrangement vide, comme ombragé par le passé.",
						"spanish": "El barrio se sentía extrañamente vacío, como si estuviera ensombrecido por el pasado.",
						"vietnamese": "Khu phố trống vắng lạ thường, như thể bị bóng đêm quá khứ che phủ.",
						"thai": "ละแวกบ้านดูว่างเปล่าอย่างประหลาด ราวกับมีเงาของอดีตปกคลุมอยู่",
						"hindi": "पड़ोस अजीब तरह से खाली था, मानो अतीत की परछाई से ढका हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아… 그때가 좋았는데.",
						"english": "...Ah... those were the good old days.",
						"japanese": "…ああ…あの頃はよかったな。",
						"chinese": "……啊……那时候真好啊。",
						"french": "« ...Ah... c'était le bon vieux temps. »",
						"spanish": "...Ah... qué buenos tiempos aquellos.",
						"vietnamese": "...À... lúc đó thật tốt biết bao.",
						"thai": "...อา... ตอนนั้นมันดีจริง ๆ เลยนะ.",
						"hindi": "...आह... वो दिन अच्छे थे।"
					},
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이? 괜찮아?",
						"english": "Kai? Are you okay?",
						"japanese": "カイ？大丈夫？",
						"chinese": "凯？你还好吗？",
						"french": "Kai ? Ça va ?",
						"spanish": "¿Kai? ¿Estás bien?",
						"vietnamese": "Kai? Cậu ổn không?",
						"thai": "ไค? เป็นอะไรหรือเปล่า?",
						"hindi": "काई? तुम ठीक हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "응? 아… 응. 잠깐 옛날 생각 좀.",
						"english": "Huh? Oh... yeah. Just thinking about the past for a bit.",
						"japanese": "うん？ああ…うん。ちょっと昔のこと考えてた。",
						"chinese": "嗯？啊…嗯。只是在想以前的事。",
						"french": "Hein ? Oh... oui. Je pensais juste au passé un instant.",
						"spanish": "¿Eh? Oh... sí. Solo recordaba el pasado un poco.",
						"vietnamese": "Hả? À... ừ. Chỉ là đang nghĩ về chuyện cũ thôi.",
						"thai": "หือ? อ๋อ... อืม. แค่คิดถึงเรื่องเก่า ๆ นิดหน่อยน่ะ.",
						"hindi": "हूँ? ओह... हाँ। बस थोड़ी देर पुराने दिनों के बारे में सोच रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼굴이 안 좋은데.",
						"english": "You don't look so good.",
						"japanese": "顔色が悪いよ。",
						"chinese": "你脸色不太好。",
						"french": "Tu n'as pas bonne mine.",
						"spanish": "No tienes buena cara.",
						"vietnamese": "Trông cậu không khỏe lắm.",
						"thai": "หน้าตานายดูไม่ค่อยดีเลยนะ.",
						"hindi": "तुम्हारा चेहरा ठीक नहीं लग रहा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그때… 우리 정말 행복했잖아. 기억나?",
						"english": "Back then... we were truly happy, weren't we? Do you remember?",
						"japanese": "あの時… 私たち、本当に幸せだったよね？覚えてる？",
						"chinese": "那时候… 我们真的很幸福，不是吗？你还记得吗？",
						"french": "À cette époque… nous étions vraiment heureux, n'est-ce pas ? Tu te souviens ?",
						"spanish": "En aquel entonces… éramos realmente felices, ¿verdad? ¿Lo recuerdas?",
						"vietnamese": "Hồi đó… chúng ta đã thực sự hạnh phúc mà, phải không? Bạn nhớ không?",
						"thai": "ตอนนั้น... พวกเรามีความสุขมากเลยนะ จำได้ไหม?",
						"hindi": "उस समय… हम सचमुच बहुत खुश थे, है ना? याद है?"
					},
					"speaker": "kai",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "카이, 무슨 소리야. 지금은…",
						"english": "Kai, what are you talking about? Now is...",
						"japanese": "カイ、何を言ってるの。今は…",
						"chinese": "凯，你在说什么。现在是…",
						"french": "Kai, de quoi parles-tu ? Maintenant…",
						"spanish": "Kai, ¿de qué estás hablando? Ahora…",
						"vietnamese": "Kai, anh đang nói gì vậy? Bây giờ thì…",
						"thai": "ไค นี่นายพูดอะไรน่ะ ตอนนี้มัน…",
						"hindi": "काई, क्या कह रहे हो तुम। अभी तो…"
					}
				},
				{
					"content": {
						"korean": "돌아가고 싶어. 모든 게 그대로였던 그때로.",
						"english": "I want to go back. To when everything was just as it was.",
						"japanese": "戻りたい。全てがそのままだったあの頃に。",
						"chinese": "我想回去。回到一切都保持原样的那个时候。",
						"french": "Je veux retourner en arrière. À l'époque où tout était tel quel.",
						"spanish": "Quiero volver. A cuando todo era como antes.",
						"vietnamese": "Tôi muốn trở về. Trở về cái lúc mọi thứ vẫn như cũ.",
						"thai": "ฉันอยากกลับไป ตอนที่ทุกอย่างยังคงเดิม",
						"hindi": "मैं वापस जाना चाहता हूँ। उस समय में जब सब कुछ वैसा ही था।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…그래. 돌아갈 수 있어. 행복했던 과거로.",
						"english": "...Yes. You can go back. To that happy past.",
						"japanese": "…そう。戻れるよ。幸せだった過去に。",
						"chinese": "…是的。你可以回去。回到那段幸福的过去。",
						"french": "…Oui. Tu peux y retourner. À ce passé heureux.",
						"spanish": "…Sí. Puedes volver. Al pasado feliz.",
						"vietnamese": "…Đúng vậy. Anh có thể quay lại. Quay lại quá khứ hạnh phúc đó.",
						"thai": "…ใช่แล้ว กลับไปได้นะ กลับไปหาอดีตที่มีความสุขนั้น",
						"hindi": "…हाँ। तुम वापस जा सकते हो। उस खुशहाल अतीत में।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구야!",
						"english": "Who's there!",
						"japanese": "誰だ！",
						"chinese": "谁？！",
						"french": "Qui est là !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ai đó!",
						"thai": "ใครน่ะ!",
						"hindi": "कौन है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기서 우리 다시 만났잖아? 하하…",
						"english": "We met again here, didn't we? Haha...",
						"japanese": "ここでまた会えたね？ハハ…",
						"chinese": "我们又在这里见面了，不是吗？哈哈…",
						"french": "On s'est retrouvés ici, n'est-ce pas ? Haha…",
						"spanish": "Nos volvimos a encontrar aquí, ¿verdad? Jaja…",
						"vietnamese": "Chúng ta lại gặp nhau ở đây rồi, phải không? Haha…",
						"thai": "พวกเราได้เจอกันอีกแล้วที่นี่ ใช่ไหม? ฮ่าฮ่า…",
						"hindi": "हम यहीं फिर से मिले, है ना? हाहा…"
					},
					"speaker": "kai",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이! 나 좀 봐!",
						"english": "Kai! Look at me!",
						"japanese": "カイ！私を見て！",
						"chinese": "凯！看着我！",
						"french": "Kai ! Regarde-moi !",
						"spanish": "¡Kai! ¡Mírame!",
						"vietnamese": "Kai! Nhìn em này!",
						"thai": "ไค! มองฉันสิ!",
						"hindi": "काई! मेरी तरफ देखो!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…망각은 축복. 고통스러운 현실 대신 영원한 행복을 택하거라.",
						"english": "...Oblivion is a blessing. Choose eternal happiness instead of painful reality.",
						"japanese": "…忘却は祝福。苦痛な現実の代わりに、永遠の幸福を選べ。",
						"chinese": "…遗忘是祝福。选择永恒的幸福，而非痛苦的现实。",
						"french": "…L'oubli est une bénédiction. Choisis le bonheur éternel plutôt qu'une réalité douloureuse.",
						"spanish": "…El olvido es una bendición. Elige la felicidad eterna en lugar de una realidad dolorosa.",
						"vietnamese": "…Quên lãng là một phước lành. Hãy chọn hạnh phúc vĩnh cửu thay vì thực tại đau khổ.",
						"thai": "…การลืมเลือนคือพร เลือกความสุขนิรันดร์แทนความเป็นจริงที่เจ็บปวด",
						"hindi": "…विस्मृति एक वरदान है। दर्दनाक वास्तविकता के बजाय शाश्वत खुशी चुनो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "카이의 눈은 행복으로 가득 찼다. 마치 다른 사람 같았다.",
						"english": "Kai's eyes were filled with happiness. He seemed like a different person.",
						"japanese": "カイの目は幸福に満ちていた。まるで別人のようだった。",
						"chinese": "凯的眼中充满了幸福。他仿佛变了一个人。",
						"french": "Les yeux de Kai étaient remplis de bonheur. Il semblait être une personne différente.",
						"spanish": "Los ojos de Kai estaban llenos de felicidad. Parecía una persona diferente.",
						"vietnamese": "Mắt Kai tràn ngập hạnh phúc. Cứ như thể anh ấy là một người khác.",
						"thai": "ดวงตาของไคเต็มไปด้วยความสุข ราวกับเป็นคนละคน",
						"hindi": "काई की आँखें खुशी से भर गई थीं। वह किसी और जैसा लग रहा था।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼… 이대로 둘 수 없어.",
						"english": "No... I can't let this happen.",
						"japanese": "だめだ…このままにしておけない。",
						"chinese": "不…不能就这样。",
						"french": "Non… je ne peux pas laisser les choses en l'état.",
						"spanish": "No… no puedo dejar que esto siga así.",
						"vietnamese": "Không được… Tôi không thể để mọi chuyện như thế này.",
						"thai": "ไม่นะ… ปล่อยไว้แบบนี้ไม่ได้",
						"hindi": "नहीं… मैं ऐसा नहीं होने दे सकता।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "…아무것도 변하지 않는 이곳에서… 영원히…",
						"english": "...In this place where nothing changes... forever...",
						"japanese": "...何も変わらないこの場所で…永遠に…",
						"chinese": "...在这个一成不变的地方...永远...",
						"french": "...Dans ce lieu où rien ne change... pour toujours...",
						"spanish": "...En este lugar donde nada cambia... para siempre...",
						"vietnamese": "...Ở nơi đây không gì thay đổi... mãi mãi...",
						"thai": "...ณ ที่แห่งนี้ที่ไม่มีอะไรเปลี่ยนแปลง... ชั่วนิรันดร์...",
						"hindi": "...इस जगह में जहाँ कुछ भी नहीं बदलता... हमेशा के लिए..."
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그래, 영원히… 현실의 모든 고통에서 벗어나거라.",
						"english": "...Yes, forever... free from all the pain of reality.",
						"japanese": "...ええ、永遠に…現実のすべての苦痛から解放されなさい。",
						"chinese": "...是的，永远...摆脱现实的一切痛苦吧。",
						"french": "...Oui, pour toujours... libéré de toute la douleur de la réalité.",
						"spanish": "...Sí, para siempre... libre de todo el dolor de la realidad.",
						"vietnamese": "...Đúng vậy, mãi mãi... thoát khỏi mọi đau khổ của thực tại.",
						"thai": "...ใช่ ชั่วนิรันดร์... ปลดปล่อยจากความเจ็บปวดทั้งหมดของความเป็นจริง",
						"hindi": "...हाँ, हमेशा के लिए... यथार्थ के सभी दुखों से मुक्त हो जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "카이! 그건 진짜가 아니야!",
						"english": "Kai! That's not real!",
						"japanese": "カイ！それは現実じゃない！",
						"chinese": "凯！那不是真的！",
						"french": "Kai ! Ce n'est pas réel !",
						"spanish": "¡Kai! ¡Eso no es real!",
						"vietnamese": "Kai! Đó không phải là thật!",
						"thai": "ไค! นั่นไม่จริง!",
						"hindi": "काई! वह असली नहीं है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…거짓된 현실에 얽매이지 마라.",
						"english": "...Don't be bound by a false reality.",
						"japanese": "...偽りの現実に縛られるな。",
						"chinese": "...不要被虚假的现实束缚。",
						"french": "...Ne sois pas lié à une fausse réalité.",
						"spanish": "...No te ates a una falsa realidad.",
						"vietnamese": "...Đừng bị ràng buộc bởi một thực tại giả dối.",
						"thai": "...อย่าถูกผูกมัดด้วยความเป็นจริงที่หลอกลวง",
						"hindi": "...झूठी वास्तविकता से बंधे मत रहो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "넌 여기에 있어야 해! 나랑 같이!",
						"english": "You should be here! With me!",
						"japanese": "君はここにいるべきだ！私と一緒に！",
						"chinese": "你应该在这里！和我在一起！",
						"french": "Tu devrais être ici ! Avec moi !",
						"spanish": "¡Deberías estar aquí! ¡Conmigo!",
						"vietnamese": "Cậu nên ở đây! Cùng với tớ!",
						"thai": "คุณควรจะอยู่ที่นี่! กับฉัน!",
						"hindi": "तुम्हें यहीं होना चाहिए! मेरे साथ!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국… 현실을 택하는군. 후회할 것이다.",
						"english": "...So, you choose reality. You will regret this.",
						"japanese": "…結局…現実を選ぶのか。後悔するぞ。",
						"chinese": "…最终…你选择了现实。你会后悔的。",
						"french": "...Finalement... tu choisis la réalité. Tu le regretteras.",
						"spanish": "...Al final... eliges la realidad. Te arrepentirás.",
						"vietnamese": "...Cuối cùng... ngươi chọn hiện thực. Ngươi sẽ hối hận.",
						"thai": "...ในที่สุด... เจ้าก็เลือกความจริง เจ้าจะต้องเสียใจ",
						"hindi": "...अंततः... तुम यथार्थ चुनते हो। तुम्हें पछताना पड़ेगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…아니. 후회하지 않아. 이제야 알았어.",
						"english": "...No. I won't regret it. Now I understand.",
						"japanese": "…いや。後悔しない。今わかったんだ。",
						"chinese": "…不。我不会后悔。我现在明白了。",
						"french": "...Non. Je ne le regrette pas. Je viens de comprendre.",
						"spanish": "...No. No me arrepentiré. Ahora lo entiendo.",
						"vietnamese": "...Không. Ta không hối hận. Giờ ta đã hiểu.",
						"thai": "...ไม่ ฉันจะไม่เสียใจ ตอนนี้ฉันเข้าใจแล้ว",
						"hindi": "...नहीं। मुझे पछतावा नहीं होगा। अब मैं समझ गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "잘했어, 카이.",
						"english": "Well done, Kai.",
						"japanese": "よくやった、カイ。",
						"chinese": "做得好，凯。",
						"french": "Bien joué, Kai.",
						"spanish": "Bien hecho, Kai.",
						"vietnamese": "Làm tốt lắm, Kai.",
						"thai": "ยอดเยี่ยมมาก ไค",
						"hindi": "बहुत अच्छे, काई।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "과거는 과거일 뿐. 나는… 앞으로 나아갈 거야.",
						"english": "The past is just the past. I will... move forward.",
						"japanese": "過去は過去。私は…前へ進む。",
						"chinese": "过去已是过去。我将…向前迈进。",
						"french": "Le passé n'est que le passé. Je vais... aller de l'avant.",
						"spanish": "El pasado es solo el pasado. Yo... seguiré adelante.",
						"vietnamese": "Quá khứ chỉ là quá khứ. Ta sẽ... bước tiếp.",
						"thai": "อดีตก็คืออดีต ฉันจะ... ก้าวต่อไป",
						"hindi": "अतीत तो बस अतीत है। मैं... आगे बढूंगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "카이는 과거의 유혹에서 벗어났다. 하지만 '미완의 그림자'는 여전히 도시에 존재했다.",
						"english": "Kai escaped the temptations of the past. But 'Unfinished Shadow' still lingered in the city.",
						"japanese": "カイは過去の誘惑から逃れた。しかし、『未完の影』は依然として街に存在していた。",
						"chinese": "凯摆脱了过去的诱惑。然而，'未完成的阴影'仍旧存在于城市中。",
						"french": "Kai a échappé aux tentations du passé. Mais 'L'ombre inachevée' persistait toujours dans la ville.",
						"spanish": "Kai escapó de las tentaciones del pasado. Pero la 'Sombra Incompleta' todavía persistía en la ciudad.",
						"vietnamese": "Kai đã thoát khỏi cám dỗ của quá khứ. Nhưng 'Bóng tối chưa hoàn thiện' vẫn còn tồn tại trong thành phố.",
						"thai": "ไคหลุดพ้นจากสิ่งล่อลวงในอดีต แต่ 'เงาที่ไม่สมบูรณ์' ยังคงอยู่ในเมือง",
						"hindi": "काई अतीत के प्रलोभनों से बच निकला। परंतु 'अधूरी छाया' अब भी शहर में मौजूद थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "집단 망념체의 실체는 아직 드러나지 않았다. 싸움은 계속된다.",
						"english": "The true nature of the collective delusion was not yet revealed. The fight continues.",
						"japanese": "集団妄念体の実体はまだ明らかになっていない。戦いは続く。",
						"chinese": "集体妄念体的真面目尚未揭露。战斗仍在继续。",
						"french": "La véritable nature de la masse de délires collectifs n'avait pas encore été révélée. Le combat continue.",
						"spanish": "La verdadera naturaleza de la entidad de delirio colectivo aún no había sido revelada. La lucha continúa.",
						"vietnamese": "Bản chất thực sự của thực thể ảo ảnh tập thể vẫn chưa được tiết lộ. Cuộc chiến vẫn tiếp diễn.",
						"thai": "ตัวตนที่แท้จริงของร่างหลอนหมู่ยังไม่ถูกเปิดเผย การต่อสู้ยังคงดำเนินต่อไป",
						"hindi": "सामूहिक भ्रम की वास्तविक प्रकृति अभी सामने नहीं आई थी। लड़ाई जारी है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 과거의 환상이 만들어낸 존재였다.",
						"english": "A giant shadow blocked the way. It was a being created by a past illusion.",
						"japanese": "巨大な影が道を塞いだ。過去の幻影が生み出した存在だった。",
						"chinese": "一个巨大的影子挡住了去路。那是过去幻象所创造的存在。",
						"french": "Une ombre géante bloquait le chemin. C'était une entité créée par une illusion passée.",
						"spanish": "Una sombra gigante bloqueaba el camino. Era un ser creado por una ilusión del pasado.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là một thực thể được tạo ra bởi ảo ảnh quá khứ.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่สร้างขึ้นจากภาพลวงตาในอดีต",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह अतीत के भ्रम से बनी एक इकाई थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 자여. 행복을 파괴하려는가?",
						"english": "...Foolish one. Do you seek to destroy happiness?",
						"japanese": "...愚か者め。幸福を破壊するつもりか？",
						"chinese": "...愚蠢的家伙。你想要摧毁幸福吗？",
						"french": "...Imbécile. Cherches-tu à détruire le bonheur ?",
						"spanish": "...Necio. ¿Buscas destruir la felicidad?",
						"vietnamese": "...Kẻ ngu ngốc. Ngươi muốn phá hủy hạnh phúc sao?",
						"thai": "...คนโง่เง่า เจ้าต้องการทำลายความสุขหรือ?",
						"hindi": "...मूर्ख। क्या तुम खुशी को नष्ट करना चाहते हो?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "이건… 뭐야? 내가 뭘…",
						"english": "What... is this? What have I...",
						"japanese": "これ…何だ？私は何を…",
						"chinese": "这…是什么？我做了什么…",
						"french": "Qu'est-ce que... c'est ? Qu'ai-je...",
						"spanish": "¿Qué... es esto? ¿Qué he...",
						"vietnamese": "Cái này... là gì? Tôi đã làm gì...",
						"thai": "นี่...อะไร? ฉันทำอะไรลงไป...",
						"hindi": "यह... क्या है? मैंने क्या..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네 가장 소중한 기억. 네가 영원히 머물고 싶었던 곳.",
						"english": "Your most cherished memory. The place where you wished to stay forever.",
						"japanese": "お前の最も大切な記憶。お前が永遠に留まりたかった場所。",
						"chinese": "你最珍贵的回忆。你曾想永远停留的地方。",
						"french": "Ton souvenir le plus précieux. L'endroit où tu voulais rester pour toujours.",
						"spanish": "Tu recuerdo más preciado. El lugar donde deseabas quedarte para siempre.",
						"vietnamese": "Ký ức quý giá nhất của ngươi. Nơi ngươi muốn ở lại mãi mãi.",
						"thai": "ความทรงจำที่ล้ำค่าที่สุดของเจ้า สถานที่ที่เจ้าอยากจะอยู่ตลอดไป",
						"hindi": "तुम्हारी सबसे प्यारी याद। वह जगह जहाँ तुम हमेशा रहना चाहते थे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이를 건드리지 마!",
						"english": "Don't touch Kai!",
						"japanese": "カイに触るな！",
						"chinese": "别碰凯！",
						"french": "Ne touche pas à Kai !",
						"spanish": "¡No toques a Kai!",
						"vietnamese": "Đừng chạm vào Kai!",
						"thai": "อย่าแตะต้องไค!",
						"hindi": "काई को मत छूना!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…감히 나에게 맞서는가?",
						"english": "...You dare defy me?",
						"japanese": "…よくも私に逆らうか？",
						"chinese": "…竟敢与我为敌？",
						"french": "...Oserez-vous me défier ?",
						"spanish": "¿...Te atreves a desafiarme?",
						"vietnamese": "...Ngươi dám chống đối ta sao?",
						"thai": "...เจ้ากล้าต่อต้านข้าหรือ?",
						"hindi": "...क्या तुम मुझे चुनौती देने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "…나약한 현실은 너를 부술 것이다. 영원히 여기서 머물러라.",
						"english": "...A weak reality will break you. Stay here forever.",
						"japanese": "…弱々しい現実は、お前を打ち砕く。永遠にここに留まれ。",
						"chinese": "…软弱的现实会摧毁你。永远留在这里吧。",
						"french": "...Une réalité faible te brisera. Reste ici pour toujours.",
						"spanish": "...Una realidad débil te destruirá. Quédate aquí para siempre.",
						"vietnamese": "...Thực tại yếu đuối sẽ hủy hoại ngươi. Hãy ở lại đây mãi mãi.",
						"thai": "...ความจริงที่อ่อนแอจะทำลายเจ้า จงอยู่ที่นี่ตลอดไป",
						"hindi": "...कमजोर यथार्थ तुम्हें तोड़ देगा। हमेशा के लिए यहीं रहो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…아직 아니야. 나는… 돌아가지 않아.",
						"english": "...Not yet. I won't... go back.",
						"japanese": "…まだだ。私は…戻らない。",
						"chinese": "…还没。我不会…回去的。",
						"french": "...Pas encore. Je ne... reviendrai pas.",
						"spanish": "...Todavía no. Yo no... regresaré.",
						"vietnamese": "...Chưa đâu. Ta sẽ... không quay lại.",
						"thai": "...ยังไม่ถึงเวลา ฉันจะ... ไม่กลับไป",
						"hindi": "...अभी नहीं। मैं... वापस नहीं जाऊंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 한번. 카이를 구할 거야.",
						"english": "...One more time. I will save Kai.",
						"japanese": "…もう一度。カイを救う。",
						"chinese": "…再一次。我会拯救凯的。",
						"french": "...Encore une fois. Je vais sauver Kai.",
						"spanish": "...Una vez más. Salvaré a Kai.",
						"vietnamese": "...Thêm một lần nữa. Ta sẽ cứu Kai.",
						"thai": "...อีกครั้งหนึ่ง ฉันจะช่วยไค",
						"hindi": "...एक बार फिर। मैं काई को बचाऊंगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"카이의 눈은 비어있었다.",
			"과거의 행복에 잠식된 채.",
			"'미완의 그림자'는 가장 찬란했던 순간을 보여주며 속삭였다.",
			"\"돌아와. 모든 것이 완벽했던 그때로.\"",
			"주인공은 그 유혹을 부숴야만 했다."
		],
		"english": [
			"Kai's eyes were empty.",
			"Consumed by past happiness.",
			"The 'Unfinished Shadow' whispered, showing its most radiant moments.",
			"\"Come back. To when everything was perfect.\"",
			"The protagonist had to break that temptation."
		],
		"japanese": [
			"カイの目は虚ろだった。",
			"過去の幸福に囚われたまま。",
			"「未完の影」は、最も輝かしい瞬間を見せつけ囁いた。",
			"「戻ってきて。全てが完璧だったあの頃へ。」",
			"主人公はその誘惑を打ち破らなければならなかった。"
		],
		"chinese": [
			"凯的眼神空洞。",
			"被昔日的幸福吞噬。",
			"“未完成的影子”低语着，展示着最辉煌的瞬间。",
			"“回来吧。回到一切都完美的那时候。”",
			"主角必须打破那个诱惑。"
		],
		"french": [
			"Les yeux de Kai étaient vides.",
			"Submergé par le bonheur passé.",
			"L'« Ombre Inachevée » chuchotait, montrant ses moments les plus radieux.",
			"« Reviens. À l'époque où tout était parfait. »",
			"Le protagoniste devait briser cette tentation."
		],
		"spanish": [
			"Los ojos de Kai estaban vacíos.",
			"Consumido por la felicidad pasada.",
			"La \"Sombra Incompleta\" susurró, mostrando sus momentos más radiantes.",
			"\"Vuelve. Al momento en que todo era perfecto.\"",
			"El protagonista debía romper esa tentación."
		],
		"vietnamese": [
			"Đôi mắt Kai trống rỗng.",
			"Bị hạnh phúc quá khứ nuốt chửng.",
			"‘Bóng tối dang dở’ thì thầm, hiện ra khoảnh khắc rạng rỡ nhất.",
			"\"Trở lại đi. Về cái thuở mọi thứ hoàn hảo.\"",
			"Nhân vật chính phải phá vỡ cám dỗ đó."
		],
		"thai": [
			"ดวงตาของไคว่างเปล่า",
			"จมปลักอยู่กับความสุขในอดีต",
			"'เงาที่ยังไม่สมบูรณ์' กระซิบพลางเผยช่วงเวลาที่รุ่งโรจน์ที่สุด",
			"\"กลับมาสิ. กลับไปในตอนที่ทุกอย่างสมบูรณ์แบบ.\"",
			"ตัวเอกต้องทำลายสิ่งยั่วยวนนั้น"
		],
		"hindi": [
			"काई की आँखें सूनी थीं।",
			"अतीत के सुख में डूबा हुआ।",
			"'अधूरी परछाई' ने अपने सबसे शानदार पल दिखाते हुए फुसफुसाया।",
			"\"वापस आओ। उस वक्त में, जब सब कुछ सही था।\"",
			"नायक को उस प्रलोभन को तोड़ना ही था।"
		]
	}
} as const;
