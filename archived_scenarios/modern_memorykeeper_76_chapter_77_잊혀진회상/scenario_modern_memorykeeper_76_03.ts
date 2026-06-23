export const scenario_modern_memorykeeper_76_03 = {
	"scenario_id": "modern_memorykeeper_76_03",
	"order": 3,
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "익숙한 풍경. 이곳은 언제나 같은 모습이다.",
						"english": "A familiar sight. This place is always the same.",
						"japanese": "見慣れた風景。ここはいつも同じだ。",
						"chinese": "熟悉的景象。这里总是一成不变。",
						"french": "Un paysage familier. Cet endroit est toujours le même.",
						"spanish": "Un paisaje familiar. Este lugar es siempre el mismo.",
						"vietnamese": "Khung cảnh quen thuộc. Nơi đây luôn như cũ.",
						"thai": "ทิวทัศน์ที่คุ้นเคย ที่นี่เหมือนเดิมเสมอ",
						"hindi": "एक परिचित दृश्य। यह जगह हमेशा एक जैसी है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 처음 왔던 그곳인가?",
						"english": "Is this… the place I first came to?",
						"japanese": "ここが…初めて来た場所なのか？",
						"chinese": "这里是…我第一次来的地方吗？",
						"french": "Est-ce… l'endroit où je suis venu pour la première fois ?",
						"spanish": "¿Es este… el lugar al que vine por primera vez?",
						"vietnamese": "Đây có phải… nơi tôi đến lần đầu không?",
						"thai": "ที่นี่… คือที่ที่ฉันมาครั้งแรกหรือเปล่า?",
						"hindi": "क्या यह… वह जगह है जहाँ मैं पहली बार आया था?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 아니라고!",
						"english": "No… It's not!",
						"japanese": "違う… 違うんだ！",
						"chinese": "不… 不是的！",
						"french": "Non… Ce n'est pas ça !",
						"spanish": "¡No… No es así!",
						"vietnamese": "Không… Không phải!",
						"thai": "ไม่… ไม่ใช่!",
						"hindi": "नहीं… यह नहीं है!"
					},
					"speaker": "zoe",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 사람은 누구지?",
						"english": "Who is that person?",
						"japanese": "あの人は誰だ？",
						"chinese": "那个人是谁？",
						"french": "Qui est cette personne ?",
						"spanish": "¿Quién es esa persona?",
						"vietnamese": "Người đó là ai?",
						"thai": "คนนั้นเป็นใคร?",
						"hindi": "वह व्यक्ति कौन है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴 가짜야. 전부…!",
						"english": "This place is fake. All of it…!",
						"japanese": "ここは偽物だ。全部…！",
						"chinese": "这里是假的。全部…！",
						"french": "Cet endroit est faux. Tout… !",
						"spanish": "Este lugar es falso. ¡Todo…!",
						"vietnamese": "Nơi đây là giả. Tất cả…!",
						"thai": "ที่นี่มันของปลอม ทั้งหมด…!",
						"hindi": "यह जगह नकली है। सब कुछ…!"
					},
					"speaker": "zoe",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또… 이 길이야. 몇 번째인지 셀 수도 없어.",
						"english": "This path again… I can't count how many times.",
						"japanese": "また…この道だ。何回目か数えられない。",
						"chinese": "又…是这条路。数不清多少次了。",
						"french": "Encore… ce chemin. Je ne peux pas compter combien de fois.",
						"spanish": "De nuevo… este camino. No puedo contar cuántas veces.",
						"vietnamese": "Lại… con đường này. Không đếm xuể đã bao nhiêu lần.",
						"thai": "อีกแล้ว… ทางเส้นนี้ นับไม่ถ้วนแล้วว่ากี่ครั้ง",
						"hindi": "फिर से… यह रास्ता। मैं गिन भी नहीं सकता कि कितनी बार।"
					},
					"speaker": "zoe",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가 반복된다는 거야?",
						"english": "What's repeating?",
						"japanese": "何が繰り返されてるの？",
						"chinese": "什么在重复？",
						"french": "Qu'est-ce qui se répète ?",
						"spanish": "¿Qué se repite?",
						"vietnamese": "Cái gì đang lặp lại vậy?",
						"thai": "อะไรกำลังซ้ำกัน?",
						"hindi": "क्या दोहराया जा रहा है?"
					}
				},
				{
					"speaker": "zoe",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저기, 저 손수건 보여? 아까랑… 다르잖아!",
						"english": "Look, that handkerchief? It's different from before!",
						"japanese": "ほら、あのハンカチ見える？さっきと…違う！",
						"chinese": "喂，看到那块手帕了吗？和刚才…不一样！",
						"french": "Hé, tu vois ce mouchoir ? Il est… différent de tout à l'heure !",
						"spanish": "Oye, ¿ves ese pañuelo? ¡Es diferente a antes!",
						"vietnamese": "Này, cậu thấy cái khăn tay kia không? Nó… khác lúc nãy rồi!",
						"thai": "นี่ เธอเห็นผ้าเช็ดหน้านั่นไหม? มัน...ไม่เหมือนเมื่อกี้เลย!",
						"hindi": "देखो, वह रूमाल दिख रहा है? यह पहले जैसा नहीं है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…정말이네. 아까는 분명 저 나무 아래에 있었는데.",
						"english": "...You're right. It was definitely under that tree earlier.",
						"japanese": "…本当に。さっきは確かにあの木の下にあったのに。",
						"chinese": "……真是这样。刚才明明在那棵树下面的。",
						"french": "...C'est vrai. Tout à l'heure, c'était clairement sous cet arbre.",
						"spanish": "...Es verdad. Antes estaba claramente bajo ese árbol.",
						"vietnamese": "…Đúng thật. Lúc nãy nó rõ ràng ở dưới gốc cây đó mà.",
						"thai": "...จริงด้วยแฮะ เมื่อกี้มันอยู่ใต้ต้นไม้นั่นชัดๆ เลยนะ",
						"hindi": "...सच में। पहले तो वह उस पेड़ के नीचे था।"
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여긴 우리를 가두고 있어. 영원히…!",
						"english": "This place is trapping us. Forever...!",
						"japanese": "ここは私たちを閉じ込めてる。永遠に…！",
						"chinese": "这里把我们困住了。永远…！",
						"french": "Cet endroit nous emprisonne. Pour toujours… !",
						"spanish": "Este lugar nos está atrapando. ¡Para siempre...!",
						"vietnamese": "Nơi này đang nhốt chúng ta lại. Mãi mãi…!",
						"thai": "ที่นี่กำลังขังเราไว้ ชั่วนิรันดร์...!",
						"hindi": "यह जगह हमें फँसा रही है। हमेशा के लिए...!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 음악… 이상해. 아까는 분명 아름다웠는데.",
						"english": "This music... it's strange. It was beautiful before.",
						"japanese": "この音楽…変だ。さっきは確かに美しかったのに。",
						"chinese": "这音乐……好奇怪。刚才明明很美的。",
						"french": "Cette musique... est bizarre. Elle était si belle tout à l'heure.",
						"spanish": "Esta música... es extraña. Antes era hermosa.",
						"vietnamese": "Bản nhạc này… lạ thật. Lúc nãy nó rõ ràng rất hay mà.",
						"thai": "ดนตรีนี่... แปลกๆ นะ เมื่อกี้มันไพเราะชัดๆ เลย",
						"hindi": "यह संगीत... अजीब है। पहले तो यह सुंदर था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제는 찢어지는 소리가 나.",
						"english": "Now it sounds like tearing.",
						"japanese": "今は引き裂かれるような音がする。",
						"chinese": "现在听起来像是撕裂声。",
						"french": "Maintenant, ça sonne comme une déchirure.",
						"spanish": "Ahora suena a desgarro.",
						"vietnamese": "Giờ thì nó nghe như tiếng xé toạc vậy.",
						"thai": "ตอนนี้มันมีเสียงเหมือนฉีกขาดเลย",
						"hindi": "अब यह फटने जैसी आवाज कर रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 게 망가지고 있어. 나처럼….",
						"english": "Everything's breaking. Like me...",
						"japanese": "全てが壊れていく。私みたいに…。",
						"chinese": "一切都在崩坏。就像我一样……。",
						"french": "Tout se brise. Comme moi...",
						"spanish": "Todo se está rompiendo. Como yo...",
						"vietnamese": "Mọi thứ đang vỡ vụn. Giống như tôi vậy…",
						"thai": "ทุกอย่างกำลังพังทลาย เหมือนฉันเลย...",
						"hindi": "सब कुछ टूट रहा है। मुझ जैसे...।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "무슨 소리야, 조이.",
						"english": "What are you talking about, Joey?",
						"japanese": "何言ってるんだ、ジョーイ。",
						"chinese": "你在说什么呢，乔伊。",
						"french": "Qu'est-ce que tu racontes, Joey ?",
						"spanish": "¿Qué dices, Joey?",
						"vietnamese": "Cậu đang nói gì vậy, Joey.",
						"thai": "เธอพูดอะไรน่ะ โจอี้",
						"hindi": "क्या बात कर रही हो, जॉय।"
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거울… 봤어? 내가 내가 아니야!",
						"english": "The mirror... did you see it? I'm not myself!",
						"japanese": "鏡…見た？私が私じゃない！",
						"chinese": "镜子……你看到了吗？我不是我了！",
						"french": "Le miroir... tu l'as vu ? Je ne suis plus moi-même !",
						"spanish": "El espejo... ¿lo viste? ¡No soy yo!",
						"vietnamese": "Gương… cậu thấy không? Tôi không phải là tôi nữa rồi!",
						"thai": "กระจก... เห็นไหม? ฉันไม่ใช่ฉันแล้ว!",
						"hindi": "शीशा... देखा? मैं मैं नहीं हूँ!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "봤어… 거울 속의 나를.",
						"english": "I saw... myself in the mirror.",
						"japanese": "見たよ…鏡の中の私を。",
						"chinese": "我看到了……镜子里的我。",
						"french": "J'ai vu... moi-même dans le miroir.",
						"spanish": "Vi... a mí mismo en el espejo.",
						"vietnamese": "Tôi đã thấy… bản thân trong gương.",
						"thai": "เห็นแล้ว... ตัวฉันในกระจก",
						"hindi": "मैंने देखा... खुद को शीशे में।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 일이야, 조이?",
						"english": "What's wrong, Joy?",
						"japanese": "どうしたの、ジョイ？",
						"chinese": "怎么了，乔伊？",
						"french": "Qu'est-ce qui ne va pas, Joy ?",
						"spanish": "¿Qué pasa, Joy?",
						"vietnamese": "Có chuyện gì vậy, Joy?",
						"thai": "เกิดอะไรขึ้น, จอย?",
						"hindi": "क्या हुआ, जॉय?"
					}
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 얼굴이… 텅 비어있었어. 아무것도 없어.",
						"english": "My face... it was empty. Nothing there.",
						"japanese": "私の顔が…空っぽだった。何もなかったの。",
						"chinese": "我的脸……是空的。什么都没有。",
						"french": "Mon visage... était vide. Rien.",
						"spanish": "Mi cara... estaba vacía. No había nada.",
						"vietnamese": "Mặt tôi... trống rỗng. Chẳng có gì cả.",
						"thai": "หน้าฉัน...มันว่างเปล่า ไม่มีอะไรเลย",
						"hindi": "मेरा चेहरा... खाली था। कुछ भी नहीं था।"
					}
				},
				{
					"content": {
						"korean": "환영일 거야.",
						"english": "It must be a hallucination.",
						"japanese": "幻覚だろう。",
						"chinese": "那一定是幻觉。",
						"french": "Ce doit être une hallucination.",
						"spanish": "Debe ser una ilusión.",
						"vietnamese": "Chắc là ảo giác thôi.",
						"thai": "คงเป็นภาพหลอนน่ะ",
						"hindi": "यह एक मतिभ्रम होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "아니. 저게 진짜 나일지도 몰라. 영원히 갇혀서….",
						"english": "No. That might be the real me. Trapped forever...",
						"japanese": "違う。あれが本当の私なのかも。永遠に閉じ込められて…",
						"chinese": "不。那可能就是真正的我。永远被困住……",
						"french": "Non. Ce pourrait être la vraie moi. Piégée pour toujours...",
						"spanish": "No. Esa podría ser la verdadera yo. Atrapada para siempre...",
						"vietnamese": "Không. Đó có thể là tôi thật. Bị mắc kẹt mãi mãi...",
						"thai": "ไม่ใช่ นั่นอาจจะเป็นตัวฉันจริงๆ ถูกขังตลอดไป...",
						"hindi": "नहीं। वह असली मैं हो सकती है। हमेशा के लिए फँसी हुई..."
					},
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				},
				{
					"content": {
						"korean": "조이는 아래로 사라졌다. 절망이 그녀를 집어삼켰다.",
						"english": "Joy vanished below. Despair swallowed her.",
						"japanese": "ジョイは下へと消えた。絶望が彼女を飲み込んだ。",
						"chinese": "乔伊消失在了下方。绝望吞噬了她。",
						"french": "Joy disparut en dessous. Le désespoir la submergea.",
						"spanish": "Joy desapareció abajo. La desesperación la consumió.",
						"vietnamese": "Joy biến mất xuống dưới. Sự tuyệt vọng nuốt chửng cô ấy.",
						"thai": "จอยหายไปเบื้องล่าง ความสิ้นหวังกลืนกินเธอ",
						"hindi": "जॉय नीचे गायब हो गई। निराशा ने उसे निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "조이…!",
						"english": "Joy...!",
						"japanese": "ジョイ…！",
						"chinese": "乔伊……！",
						"french": "Joy... !",
						"spanish": "¡Joy...!",
						"vietnamese": "Joy...!",
						"thai": "จอย...!",
						"hindi": "जॉय...!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 회귀는 운명이다.",
						"english": "Fools... Regression is fate.",
						"japanese": "愚か者ども…回帰は運命だ。",
						"chinese": "愚蠢的人类……回归是命运。",
						"french": "Fous... La régression est le destin.",
						"spanish": "Necios... El regreso es el destino.",
						"vietnamese": "Lũ ngốc... Hồi quy là định mệnh.",
						"thai": "พวกโง่... การหวนคืนคือชะตากรรม",
						"hindi": "मूर्खों... प्रतिगमन नियति है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐!",
						"english": "Who are you!",
						"japanese": "誰だ！",
						"chinese": "你是谁！",
						"french": "Qui êtes-vous !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "แกเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 끝없는 반복을 지키는 자.",
						"english": "The one who guards this endless loop.",
						"japanese": "この終わりのない繰り返しを守る者。",
						"chinese": "守护这无尽轮回之人。",
						"french": "Celui qui garde cette boucle sans fin.",
						"spanish": "El que custodia este bucle sin fin.",
						"vietnamese": "Kẻ canh giữ vòng lặp vô tận này.",
						"thai": "ผู้พิทักษ์การวนซ้ำอันไม่สิ้นสุดของที่นี่",
						"hindi": "वह जो इस अंतहीन लूप की रक्षा करता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우린 빠져나갈 거야!",
						"english": "We'll break free!",
						"japanese": "私たちはここから抜け出す！",
						"chinese": "我们会逃出去的！",
						"french": "Nous allons nous échapper !",
						"spanish": "¡Nosotros escaparemos!",
						"vietnamese": "Chúng ta sẽ thoát ra!",
						"thai": "เราจะหลุดพ้น!",
						"hindi": "हम बाहर निकलेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시도해라. 다시 돌아올 뿐이지만.",
						"english": "Try. But you'll only come back.",
						"japanese": "試してみろ。戻ってくるだけだがな。",
						"chinese": "试试吧。但你只会回来。",
						"french": "Essaie. Mais tu ne feras que revenir.",
						"spanish": "Intenta. Pero solo regresarás.",
						"vietnamese": "Cứ thử đi. Nhưng ngươi sẽ chỉ quay lại thôi.",
						"thai": "ลองดูสิ แต่เจ้าจะกลับมาเท่านั้นแหละ",
						"hindi": "कोशिश करो। पर तुम बस लौटोगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악…! 하지만… 반복은 멈추지 않아…."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리 마!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물은 사라졌지만, 불안한 기운은 여전했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탈출의 길은 아직 멀었다. 끝없는 회귀는, 이제 시작이었다."
					}
				}
			],
			"dialogue": [],
			"id": 15
		},
		{
			"id": 15,
			"dialogue": [],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 선택이다. 다시 시작될 뿐."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 다시…!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원히 여기서 헤매게 될 것이다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"다시, 또 다시. 익숙한 풍경이 반복된다.",
			"같은 길, 다른 감각.",
			"거울은 진실을 비추지 않았다.",
			"절망은, 그렇게 시작되었다."
		],
		"english": [
			"Again, and again. The familiar scenery repeats.",
			"The same path, a different sensation.",
			"The mirror did not reflect the truth.",
			"Despair, thus began."
		],
		"japanese": [
			"また、また。見慣れた風景が繰り返される。",
			"同じ道、異なる感覚。",
			"鏡は真実を映さなかった。",
			"絶望は、そうして始まった。"
		],
		"chinese": [
			"又一次，又一次。熟悉的风景重复着。",
			"同样的道路，不同的感觉。",
			"镜子没有映照出真相。",
			"绝望，就这样开始了。"
		],
		"french": [
			"Encore et encore. Le paysage familier se répète.",
			"Le même chemin, une sensation différente.",
			"Le miroir ne reflétait pas la vérité.",
			"Le désespoir, ainsi commença."
		],
		"spanish": [
			"Una y otra vez. El paisaje familiar se repite.",
			"El mismo camino, una sensación diferente.",
			"El espejo no reflejaba la verdad.",
			"La desesperación, así comenzó."
		],
		"vietnamese": [
			"Lại, lại nữa. Khung cảnh quen thuộc lặp đi lặp lại.",
			"Cùng một con đường, một cảm giác khác.",
			"Gương không phản chiếu sự thật.",
			"Tuyệt vọng, đã bắt đầu như thế."
		],
		"thai": [
			"อีกครั้ง และอีกครั้ง ทิวทัศน์ที่คุ้นเคยซ้ำรอยเดิม",
			"เส้นทางเดิม ความรู้สึกที่แตกต่าง",
			"กระจกไม่ได้สะท้อนความจริง",
			"ความสิ้นหวังได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"फिर से, और फिर से। परिचित दृश्य दोहराता है।",
			"वही रास्ता, एक अलग एहसास।",
			"दर्पण ने सत्य को नहीं दर्शाया।",
			"निराशा, ऐसे शुरू हुई।"
		]
	}
} as const;
