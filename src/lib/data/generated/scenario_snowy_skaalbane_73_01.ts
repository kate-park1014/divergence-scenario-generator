export const scenario_snowy_skaalbane_73_01 = {
	"scenario_id": "snowy_skaalbane_73_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"탑의 절규가 잦아들었다.",
			"그러나 더 섬뜩한 그림자가 드리워졌다.",
			"차가운 얼음 줄기는 오직 — 따뜻한 것을 향해 뻗어왔다.",
			"산 자의 온기. 탑이 노리는 새로운 양분이었다."
		],
		"english": [
			"The tower's scream faded.",
			"But a more chilling shadow loomed.",
			"Cold ice tendrils reached only — for warmth.",
			"The warmth of the living. A new nutrient for the tower."
		],
		"japanese": [
			"塔の絶叫が静まった。",
			"しかし、さらに不気味な影が覆いかぶさった。",
			"冷たい氷の蔓は、ただ温かいものへと伸びていった。",
			"生者の温もり。それは塔が狙う新たな養分だった。"
		],
		"chinese": [
			"高塔的哀嚎声渐渐平息。",
			"然而，更可怕的阴影笼罩而来。",
			"冰冷的藤蔓，只会伸向——温暖之处。",
			"生者的温度。这是高塔觊觎的新养分。"
		],
		"french": [
			"Le hurlement de la tour s'estompa.",
			"Cependant, une ombre plus sinistre s'étendit.",
			"Les froides vrilles de glace ne s'étendaient que vers — la chaleur.",
			"La chaleur des vivants. Un nouvel aliment pour la tour."
		],
		"spanish": [
			"El grito de la torre se desvaneció.",
			"Pero una sombra aún más espeluznante se cernió.",
			"Los fríos zarcillos de hielo solo se extendían — hacia el calor.",
			"El calor de los vivos. El nuevo sustento que la torre buscaba."
		],
		"vietnamese": [
			"Tiếng kêu gào của tháp đã lắng xuống.",
			"Tuy nhiên, một bóng ma rợn người hơn đã bao trùm.",
			"Những xúc tu băng giá lạnh lẽo chỉ vươn tới — sự ấm áp.",
			"Hơi ấm của sự sống. Đó là nguồn dinh dưỡng mới mà tòa tháp nhắm tới."
		],
		"thai": [
			"เสียงกรีดร้องของหอคอยจางหายไป",
			"แต่เงาที่น่าสะพรึงกลัวยิ่งกว่ากลับปกคลุม",
			"เถาวัลย์น้ำแข็งเย็นเยือกกลับยื่นออกไป — หาสิ่งที่อบอุ่น",
			"ความอบอุ่นของผู้มีชีวิต สารอาหารใหม่ที่หอคอยหมายปอง"
		],
		"hindi": [
			"मीनार की चीख थम गई।",
			"किंतु एक और भयावह छाया छा गई।",
			"ठंडी बर्फ की टहनियाँ केवल – गर्माहट की ओर बढ़ीं।",
			"जीवितों की गर्माहट। मीनार का नया पोषण।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 얼어붙은 탑의 하층부. 차가운 공기가 폐를 찢을 듯 날카로웠다.",
						"english": "The frozen lower levels of the tower. The icy air was sharp enough to tear lungs.",
						"japanese": "すべてが凍りついた塔の下層部。冷たい空気が肺を裂くように鋭かった。",
						"chinese": "一切都冻结的高塔下层。冰冷的空气尖锐得仿佛要撕裂肺部。",
						"french": "Les niveaux inférieurs gelés de la tour. L'air glacial était si vif qu'il semblait déchirer les poumons.",
						"spanish": "Los niveles inferiores congelados de la torre. El aire gélido era tan cortante que parecía desgarrar los pulmones.",
						"vietnamese": "Tầng dưới của tháp, nơi mọi thứ đều đóng băng. Không khí lạnh buốt như xé toạc phổi.",
						"thai": "ส่วนล่างของหอคอยที่ทุกสิ่งถูกแช่แข็ง อากาศเย็นเฉียบราวกับจะฉีกปอด",
						"hindi": "मीनार के निचले जमे हुए स्तर। बर्फीली हवा फेफड़ों को फाड़ने जितनी तीखी थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "으으… 너무 추워. 모닥불이라도 피워야…",
						"english": "Ugh... So cold. We need to start a campfire...",
						"japanese": "うぅ… 寒すぎる。焚き火でもしないと…",
						"chinese": "唔… 太冷了。得生个篝火…",
						"french": "Ugh… Trop froid. Il faut faire un feu de camp…",
						"spanish": "Ugh… Qué frío. Tenemos que encender una hoguera…",
						"vietnamese": "Ư… Lạnh quá. Phải đốt lửa trại thôi…",
						"thai": "อึ๋ย... หนาวเกินไป ต้องก่อกองไฟแล้ว...",
						"hindi": "उफ़... बहुत ठंड है। अलाव जलाना होगा..."
					}
				},
				{
					"type": "direction",
					"speaker": "frost",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "frost",
					"content": {
						"korean": "안 돼. 모닥불은 안 돼.",
						"english": "No. No campfire.",
						"japanese": "だめだ。焚き火はだめだ。",
						"chinese": "不行。不能生篝火。",
						"french": "Non. Pas de feu de camp.",
						"spanish": "No. Nada de hoguera.",
						"vietnamese": "Không. Không được đốt lửa trại.",
						"thai": "ไม่นะ กองไฟไม่ได้",
						"hindi": "नहीं। अलाव नहीं।"
					}
				},
				{
					"content": {
						"korean": "프로스트? 왜? 얼어 죽겠어.",
						"english": "Frost? Why? We're freezing to death.",
						"japanese": "フロスト？なぜだ？凍え死んでしまう。",
						"chinese": "弗罗斯特？为什么？我们会冻死的。",
						"french": "Frost ? Pourquoi ? On va mourir de froid.",
						"spanish": "¡Frost! ¿Por qué? Nos estamos congelando.",
						"vietnamese": "Frost? Tại sao? Chúng ta sẽ chết cóng mất.",
						"thai": "ฟรอสต์? ทำไม? เราจะแข็งตายอยู่แล้ว",
						"hindi": "फ्रॉस्ट? क्यों? हम तो जम कर मर जाएँगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "봤어. 저 얼음 줄기들… 차가운 곳이 아니라, 온기가 있는 쪽으로 자라나고 있어.",
						"english": "I saw them. Those ice tendrils… they're growing towards warmth, not cold.",
						"japanese": "見たんだ。あの氷の蔓… 冷たい場所じゃなく、温かい方へと伸びていってる。",
						"chinese": "我看到了。那些冰冷的藤蔓… 它们不是向着寒冷的地方，而是向着有温暖的地方生长。",
						"french": "Je les ai vus. Ces vrilles de glace… elles ne poussent pas vers le froid, mais vers la chaleur.",
						"spanish": "Los vi. Esos zarcillos de hielo… están creciendo hacia el calor, no hacia el frío.",
						"vietnamese": "Tôi đã thấy. Những xúc tu băng đó… chúng đang mọc về phía ấm áp, không phải về phía lạnh.",
						"thai": "ฉันเห็นแล้ว เถาวัลย์น้ำแข็งพวกนั้น... มันไม่ได้เติบโตไปหาความเย็น แต่เติบโตไปหาความอบอุ่น",
						"hindi": "मैंने उन्हें देखा। वे बर्फ की टहनियाँ... वे ठंड की ओर नहीं, बल्कि गर्माहट की ओर बढ़ रही हैं।"
					}
				},
				{
					"content": {
						"korean": "탐험대의 입김조차, 희미한 얼음 줄기를 끌어당겼다.",
						"english": "Even the explorers' breath drew faint ice tendrils.",
						"japanese": "探検隊の吐息すら、微かな氷の蔓を引き寄せた。",
						"chinese": "就连探险队的呼吸，都吸引了微弱的冰冷藤蔓。",
						"french": "Même le souffle des explorateurs attirait de faibles vrilles de glace.",
						"spanish": "Hasta el aliento de los exploradores atraía débiles zarcillos de hielo.",
						"vietnamese": "Ngay cả hơi thở của đội thám hiểm cũng thu hút những xúc tu băng mờ nhạt.",
						"thai": "แม้แต่ลมหายใจของคณะสำรวจก็ยังดึงดูดเถาวัลย์น้ำแข็งที่จาง ๆ",
						"hindi": "यहाँ तक कि खोजकर्ताओं की साँस ने भी पतली बर्फ की टहनियों को आकर्षित किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "frost"
				},
				{
					"content": {
						"korean": "탑이 변했어. 예전처럼 그저 울부짖지 않아.",
						"english": "The Tower has changed. It no longer just howls like before.",
						"japanese": "塔が変わった。以前のようにただ唸るだけじゃない。",
						"chinese": "塔变了。不再像以前那样只是嚎叫。",
						"french": "La Tour a changé. Elle ne hurle plus simplement comme avant.",
						"spanish": "La Torre ha cambiado. Ya no solo aúlla como antes.",
						"vietnamese": "Ngọn tháp đã thay đổi. Nó không còn chỉ gào thét như trước nữa.",
						"thai": "หอคอยเปลี่ยนไปแล้ว มันไม่ได้แค่คำรามเหมือนเมื่อก่อน",
						"hindi": "टावर बदल गया है। अब वह पहले की तरह सिर्फ़ चीख़ता नहीं।"
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭘 하는데?",
						"english": "What does it do then?",
						"japanese": "じゃあ、何をしてるの？",
						"chinese": "那它在做什么？",
						"french": "Alors, que fait-elle ?",
						"spanish": "¿Entonces qué hace?",
						"vietnamese": "Vậy nó làm gì?",
						"thai": "แล้วมันทำอะไร?",
						"hindi": "तो वह क्या करता है?"
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "angry",
					"content": {
						"korean": "따뜻함을 찾아. 모닥불, 체온, 입김… 살아있는 모든 온기를 더듬고 있어.",
						"english": "It seeks warmth. Campfires, body heat, breath… it gropes for all living warmth.",
						"japanese": "温かさを探してる。焚き火、体温、吐息… 生きている全ての温もりを手探りしてるんだ。",
						"chinese": "它在寻找温暖。篝火、体温、呼吸…… 它在摸索所有活着的温暖。",
						"french": "Elle cherche la chaleur. Feux de joie, chaleur corporelle, souffle… elle tâtonne après toute chaleur vivante.",
						"spanish": "Busca calor. Hogueras, calor corporal, aliento… busca a tientas toda calidez viviente.",
						"vietnamese": "Nó tìm kiếm sự ấm áp. Lửa trại, thân nhiệt, hơi thở… nó đang dò dẫm mọi hơi ấm sống.",
						"thai": "มันกำลังตามหาความอบอุ่น กองไฟ อุณหภูมิร่างกาย ลมหายใจ… มันกำลังสัมผัสความอบอุ่นทั้งหมดของสิ่งมีชีวิต",
						"hindi": "वह गर्मी ढूँढता है। अलाव, शरीर की गर्मी, साँस… वह हर जीवित गर्माहट को टटोल रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "온기를… 더듬어?",
						"english": "Gropes for… warmth?",
						"japanese": "温もりを… 手探り？",
						"chinese": "寻找… 温暖？",
						"french": "Tâtonne après… la chaleur ?",
						"spanish": "¿Busca a tientas… calidez?",
						"vietnamese": "Dò dẫm… hơi ấm?",
						"thai": "สัมผัส… ความอบอุ่น?",
						"hindi": "गर्माहट को… टटोलता है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "응. 그래서 숨겨야 해. 전부 다. 동료들을 지켜야 해.",
						"english": "Yes. So we must hide. Everything. We must protect our comrades.",
						"japanese": "うん。だから隠さないと。全部。仲間たちを守らないと。",
						"chinese": "嗯。所以我们必须藏起来。所有的一切。我们必须保护我们的同伴。",
						"french": "Oui. Alors nous devons nous cacher. Tout. Nous devons protéger nos camarades.",
						"spanish": "Sí. Así que debemos escondernos. Todo. Debemos proteger a nuestros compañeros.",
						"vietnamese": "Đúng vậy. Nên chúng ta phải che giấu. Tất cả. Phải bảo vệ đồng đội của chúng ta.",
						"thai": "ใช่ เพราะฉะนั้นเราต้องซ่อน ทุกสิ่ง เราต้องปกป้องสหายของเรา",
						"hindi": "हाँ। तो हमें छिपाना होगा। सब कुछ। हमें अपने साथियों की रक्षा करनी होगी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저 얼음 줄기 끝에는… 탑이 있어.",
						"english": "At the end of that ice tendril… there's the Tower.",
						"japanese": "あの氷の蔓の先には… 塔がある。",
						"chinese": "那些冰藤的尽头是…… 塔。",
						"french": "Au bout de cette vrille de glace… se trouve la Tour.",
						"spanish": "Al final de esa enredadera de hielo… está la Torre.",
						"vietnamese": "Ở cuối sợi băng đó… là ngọn tháp.",
						"thai": "สุดปลายเส้นน้ำแข็งนั้น… คือหอคอย",
						"hindi": "उस बर्फ़ीली बेल के सिरे पर… टावर है।"
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "탑이 온기를 노린다고?",
						"english": "The Tower targets warmth?",
						"japanese": "塔が温もりを狙ってるって？",
						"chinese": "塔在瞄准温暖？",
						"french": "La Tour vise la chaleur ?",
						"spanish": "¿La Torre apunta al calor?",
						"vietnamese": "Ngọn tháp nhắm vào hơi ấm ư?",
						"thai": "หอคอยเล็งเป้าหมายที่ความอบอุ่นเหรอ?",
						"hindi": "टावर गर्मी को निशाना बना रहा है?"
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "angry",
					"content": {
						"korean": "그래. 온기가 미끼야. 잡히면 안 돼.",
						"english": "Yes. Warmth is the bait. We mustn't get caught.",
						"japanese": "そう。温もりが餌だ。捕まっちゃダメだ。",
						"chinese": "是的。温暖是诱饵。我们不能被抓住。",
						"french": "Oui. La chaleur est l'appât. Nous ne devons pas nous faire prendre.",
						"spanish": "Sí. El calor es el cebo. No debemos dejarnos atrapar.",
						"vietnamese": "Đúng vậy. Hơi ấm là mồi nhử. Không được để bị bắt.",
						"thai": "ใช่ ความอบอุ่นคือเหยื่อ เราต้องไม่ถูกจับ",
						"hindi": "हाँ। गर्मी चारा है। हमें फँसना नहीं चाहिए।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 어떻게 해야 해?",
						"english": "Then what should we do?",
						"japanese": "じゃあ、どうすればいい？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "base",
					"content": {
						"korean": "감춰야 해. 완벽하게. 우리는 그림자처럼 움직여야 해.",
						"english": "We must hide it. Perfectly. We must move like shadows.",
						"japanese": "隠さないと。完璧に。私たちは影のように動かないと。",
						"chinese": "我们必须把它藏起来。完美地。我们必须像影子一样移动。",
						"french": "Nous devons le cacher. Parfaitement. Nous devons nous déplacer comme des ombres.",
						"spanish": "Debemos esconderlo. Perfectamente. Debemos movernos como sombras.",
						"vietnamese": "Chúng ta phải che giấu nó. Hoàn hảo. Chúng ta phải di chuyển như những bóng ma.",
						"thai": "เราต้องซ่อนมันให้สมบูรณ์แบบ เราต้องเคลื่อนไหวเหมือนเงา",
						"hindi": "हमें इसे छिपाना होगा। पूरी तरह से। हमें परछाइयों की तरह चलना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "frost",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수많은 얼음 줄기가 사방에서 뻗어왔다. 공포가 목을 조여왔다.",
						"english": "Countless ice tendrils shot out from all directions. Fear choked me.",
						"japanese": "無数の氷の蔓が四方八方から伸びてきた。恐怖が喉を締め付けた。",
						"chinese": "无数冰冷的藤蔓从四面八方伸来。恐惧扼住了我的喉咙。",
						"french": "D'innombrables vrilles de glace jaillirent de toutes parts. La peur m'étouffait.",
						"spanish": "Innumerables zarcillos de hielo brotaron de todas direcciones. El miedo me ahogaba.",
						"vietnamese": "Vô số xúc tu băng giá trỗi dậy từ mọi hướng. Nỗi sợ hãi nghẹt thở.",
						"thai": "หน่อไม้น้ำแข็งนับไม่ถ้วนพุ่งออกมาจากทุกทิศทาง ความกลัวรัดคอฉัน",
						"hindi": "बर्फ़ की अनगिनत टहनियाँ चारों ओर से निकल आईं। डर ने मेरा गला घोंट दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "더 이상 숨길 곳이 없어… 온기를 감춰도 소용없어.",
						"english": "There's nowhere left to hide... Hiding our warmth is useless.",
						"japanese": "もう隠れる場所はない… 温もりを隠しても無駄だ。",
						"chinese": "无处可藏了… 隐藏温暖也无济于事。",
						"french": "Il n'y a plus d'endroit où se cacher... Cacher notre chaleur est inutile.",
						"spanish": "Ya no hay dónde esconderse... Es inútil ocultar nuestro calor.",
						"vietnamese": "Không còn nơi nào để trốn... Che giấu sự ấm áp cũng vô ích.",
						"thai": "ไม่มีที่ให้ซ่อนอีกแล้ว... การซ่อนความอบอุ่นก็ไร้ประโยชน์",
						"hindi": "अब कहीं छिपने की जगह नहीं है... अपनी गर्माहट छिपाना बेकार है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 해?! 도망쳐야 해?",
						"english": "Then what should we do?! Should we run?",
						"japanese": "じゃあどうすればいいんだ？！逃げるべきか？",
						"chinese": "那我们该怎么办？！要逃跑吗？",
						"french": "Alors que devons-nous faire ?! Faut-il fuir ?",
						"spanish": "¿Entonces qué debemos hacer?! ¿Debemos huir?",
						"vietnamese": "Vậy chúng ta phải làm gì?! Phải chạy trốn sao?",
						"thai": "แล้วเราควรทำยังไง?! เราควรรีบหนีไหม?",
						"hindi": "तो हमें क्या करना चाहिए?! क्या हमें भागना चाहिए?"
					}
				},
				{
					"content": {
						"korean": "아니. 맞서야 해. 하지만 방심하면 안 돼. 저것들은… 우리를 유혹할 거야.",
						"english": "No. We must face them. But don't let your guard down. They will... tempt us.",
						"japanese": "いや。立ち向かうんだ。だが油断するな。あれらは… 我々を誘惑するだろう。",
						"chinese": "不。我们必须面对。但不要放松警惕。它们会… 引诱我们。",
						"french": "Non. Nous devons leur faire face. Mais ne baissez pas votre garde. Elles... nous tenteront.",
						"spanish": "No. Debemos enfrentarlos. Pero no bajes la guardia. Ellos... nos tentarán.",
						"vietnamese": "Không. Chúng ta phải đối mặt. Nhưng đừng lơ là. Chúng sẽ... cám dỗ chúng ta.",
						"thai": "ไม่ เราต้องเผชิญหน้ากับมัน แต่อย่าประมาท พวกมันจะ... ล่อลวงเรา",
						"hindi": "नहीं। हमें उनका सामना करना होगा। लेकिन अपनी चौकसी मत छोड़ो। वे... हमें लुभाएंगे।"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "유혹?",
						"english": "Temptation?",
						"japanese": "誘惑？",
						"chinese": "诱惑？",
						"french": "Tentation ?",
						"spanish": "¿Tentación?",
						"vietnamese": "Cám dỗ?",
						"thai": "การล่อลวง?",
						"hindi": "प्रलोभन?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 줄기가 탐험대의 모든 온기를 흡수했다. 몸이 마비되었다.",
						"english": "Ice tendrils absorbed all the warmth from the expedition. Bodies went numb.",
						"japanese": "「氷の蔓が探検隊の全ての温もりを吸収した。体が麻痺した。」",
						"chinese": "“冰冷的藤蔓吸收了探险队所有的温暖。身体麻痹了。”",
						"french": "« Les lianes de glace absorbèrent toute la chaleur de l'expédition. Le corps fut paralysé. »",
						"spanish": "« Los zarcillos de hielo absorbieron toda la calidez de la expedición. El cuerpo quedó paralizado. »",
						"vietnamese": "« Những dây băng đã hút hết hơi ấm của đoàn thám hiểm. Cơ thể tê liệt. »",
						"thai": "« เถาวัลย์น้ำแข็งดูดซับความอบอุ่นทั้งหมดจากคณะสำรวจ ร่างกายชาไปหมด »",
						"hindi": "« बर्फ की लताएँ अभियान दल की सारी गर्माहट सोख गईं। शरीर सुन्न पड़ गया। »"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 것들. 온기를 지키려다, 전부 빼앗기는구나.",
						"english": "...Foolish beings. Trying to protect your warmth, you lose it all.",
						"japanese": "「…愚かな者たちめ。温もりを守ろうとして、全て奪われるとはな。」",
						"chinese": "“…愚蠢的东西。想要守护温暖，结果却被夺走了一切。”",
						"french": "« …Stupides créatures. En essayant de protéger votre chaleur, vous perdez tout. »",
						"spanish": "« …Estúpidos. Al intentar proteger vuestra calidez, lo perdéis todo. »",
						"vietnamese": "« ...Những kẻ ngu ngốc. Cố gắng giữ hơi ấm, lại bị tước đoạt tất cả. »",
						"thai": "« …พวกโง่เง่า พยายามจะปกป้องความอบอุ่น แต่กลับถูกช่วงชิงไปทั้งหมด »",
						"hindi": "« ...मूर्ख जीवो। अपनी गर्माहट बचाने की कोशिश में, तुम सब कुछ खो बैठते हो। »"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 답을 찾아낼 거야.",
						"english": "...It's not over yet. We will find the answer.",
						"japanese": "…まだ終わってない。私たちは答えを見つける。",
						"chinese": "…还没结束。我们会找到答案的。",
						"french": "...Ce n'est pas encore fini. Nous trouverons la réponse.",
						"spanish": "...Aún no ha terminado. Encontraremos la respuesta.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ tìm ra câu trả lời.",
						"thai": "...ยังไม่จบแค่นี้ เราจะหาคำตอบให้เจอ",
						"hindi": "...अभी खत्म नहीं हुआ है। हम जवाब ढूंढ निकालेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 얼음 조각처럼 부서져 내렸다.",
						"english": "The colossal shadow shattered like a piece of ice.",
						"japanese": "「巨大な影が氷の破片のように砕け散った。」",
						"chinese": "“巨大的身影如冰块般破碎。”",
						"french": "« L'ombre colossale se brisa comme un morceau de glace. »",
						"spanish": "« La sombra gigantesca se hizo añicos como un trozo de hielo. »",
						"vietnamese": "« Bóng đen khổng lồ vỡ tan như mảnh băng. »",
						"thai": "« เงาขนาดมหึมาแตกสลายราวกับเศษน้ำแข็ง »",
						"hindi": "« विशाल छाया बर्फ के टुकड़े की तरह बिखर गई। »"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크으… 고작 이 정도 온기로… 날 막다니…",
						"english": "Urgh... With such meager warmth... to stop me...",
						"japanese": "「くっ…たかがこの程度の温もりで…私を止めるとは…」",
						"chinese": "“呃…就凭这点温暖…竟敢阻止我…”",
						"french": "« Ugh… Avec si peu de chaleur… m'arrêter… »",
						"spanish": "« Ugh… Con tan poca calidez… ¿detenerme…? »",
						"vietnamese": "« Khừ... chỉ với chút hơi ấm này... mà lại cản được ta... »",
						"thai": "« อึก… แค่ความอบอุ่นเพียงแค่นี้… ถึงกับหยุดข้าได้… »",
						"hindi": "« उफ़… इतनी सी गर्माहट से… मुझे रोक लिया… »"
					}
				},
				{
					"content": {
						"korean": "온기가 약점이 되는 세상이라니…",
						"english": "A world where warmth becomes a weakness...",
						"japanese": "「温もりが弱点になる世界とは…」",
						"chinese": "“一个温暖成为弱点的世界啊…”",
						"french": "« Un monde où la chaleur devient une faiblesse… »",
						"spanish": "« Un mundo donde la calidez se convierte en debilidad… »",
						"vietnamese": "« Một thế giới mà hơi ấm lại là điểm yếu... »",
						"thai": "« โลกที่ความอบอุ่นกลายเป็นจุดอ่อน… »",
						"hindi": "« एक ऐसी दुनिया जहाँ गर्माहट कमज़ोरी बन जाती है… »"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "탑은… 모든 온기를 원해… 너희는… 아무것도 몰라…",
						"english": "The Tower... desires all warmth... You... know nothing...",
						"japanese": "「塔は…全ての温もりを欲している…お前たちは…何も知らない…」",
						"chinese": "“塔…渴望所有的温暖…你们…什么都不知道…”",
						"french": "« La Tour… désire toute la chaleur… Vous… ne savez rien… »",
						"spanish": "« La Torre… desea todo el calor… Vosotros… no sabéis nada… »",
						"vietnamese": "« Tháp... muốn tất cả hơi ấm... Các ngươi... không biết gì cả... »",
						"thai": "« หอคอย… ต้องการความอบอุ่นทั้งหมด… พวกแก… ไม่รู้อะไรเลย… »",
						"hindi": "« मीनार… सारी गर्माहट चाहती है… तुम… कुछ नहीं जानते… »"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "탑이 온기를 노리는 이유가 대체 뭘까?",
						"english": "Why does the Tower target warmth, I wonder?",
						"japanese": "「一体、塔が温もりを狙う理由は何なのだろうか？」",
						"chinese": "“塔到底为什么会觊觎温暖呢？”",
						"french": "« Quelle est la raison pour laquelle la Tour vise la chaleur ? »",
						"spanish": "« ¡¿Cuál será la razón por la que la Torre anhela la calidez?! »",
						"vietnamese": "« Rốt cuộc, lý do Tháp nhắm vào hơi ấm là gì? »",
						"thai": "« ทำไมหอคอยถึงเล็งเป้าหมายที่ความอบอุ่นกันนะ? »",
						"hindi": "« आखिर मीनार गर्माहट को क्यों निशाना बना रही है? »"
					}
				},
				{
					"content": {
						"korean": "탑이 왜 산 자의 온기를 갈구하는지. 그 의문은 더욱 깊어졌다.",
						"english": "Why the Tower craved the warmth of the living. The mystery deepened.",
						"japanese": "「塔がなぜ生者の温もりを求めるのか。その疑問はさらに深まった。」",
						"chinese": "“塔为何会渴求生者的温暖。这个疑问更加深了。”",
						"french": "« Pourquoi la Tour convoitait la chaleur des vivants. Le mystère s'épaissit. »",
						"spanish": "« Por qué la Torre anhelaba el calor de los vivos. La duda se profundizó aún más. »",
						"vietnamese": "« Vì sao Tháp lại khao khát hơi ấm của người sống. Nghi vấn đó càng thêm sâu sắc. »",
						"thai": "« ทำไมหอคอยถึงกระหายความอบอุ่นของผู้มีชีวิต ความสงสัยนั้นยิ่งลึกซึ้งขึ้น »",
						"hindi": "« मीनार जीवितों की गर्माहट के लिए तरस क्यों रही है। यह रहस्य और गहरा गया। »"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "frost",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "frost",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 앞에… 탑의 사냥꾼이 있어. 온기를 쫓는 존재.",
						"english": "Ahead of us... is the Tower's Hunter. A being that chases warmth.",
						"japanese": "この先に… 塔の狩人がいる。温もりを追う存在だ。",
						"chinese": "前面… 有塔的猎人。一个追逐温暖的存在。",
						"french": "Devant nous... se trouve le Chasseur de la Tour. Un être qui traque la chaleur.",
						"spanish": "Delante de nosotros... está el Cazador de la Torre. Un ser que persigue el calor.",
						"vietnamese": "Phía trước... là Thợ săn của Tháp. Một sinh vật truy đuổi sự ấm áp.",
						"thai": "ข้างหน้า... มีนักล่าของหอคอยอยู่ เป็นสิ่งมีชีวิตที่ไล่ล่าความอบอุ่น",
						"hindi": "हमारे आगे... टावर का शिकारी है। एक ऐसी सत्ता जो गर्माहट का पीछा करती है।"
					}
				},
				{
					"content": {
						"korean": "탑의… 사냥꾼?",
						"english": "The Tower's... Hunter?",
						"japanese": "塔の… 狩人？",
						"chinese": "塔的… 猎人？",
						"french": "Le... Chasseur de la Tour ?",
						"spanish": "¿El... Cazador de la Torre?",
						"vietnamese": "Thợ săn... của Tháp?",
						"thai": "นักล่า... ของหอคอย?",
						"hindi": "टावर का... शिकारी?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad",
					"content": {
						"korean": "나는 더 이상 함께할 수 없어. 숨는 것밖에 할 줄 몰라서…",
						"english": "I can't go with you any longer. All I know is how to hide...",
						"japanese": "私はもう一緒には行けない。隠れることしかできないから…",
						"chinese": "我不能再和你们一起了。我只会躲藏…",
						"french": "Je ne peux plus vous accompagner. Tout ce que je sais faire, c'est me cacher...",
						"spanish": "Ya no puedo ir con vosotros. Todo lo que sé hacer es esconderme...",
						"vietnamese": "Tôi không thể đi cùng nữa. Tôi chỉ biết trốn mà thôi...",
						"thai": "ฉันไปกับเธอไม่ได้อีกแล้ว ฉันทำได้แค่ซ่อนตัว...",
						"hindi": "मैं अब और साथ नहीं जा सकता। मैं केवल छिपना जानता हूँ..."
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "frost",
					"type": "direction"
				},
				{
					"content": {
						"korean": "거대한 얼음 줄기가 한데 모여, 정체 모를 그림자를 형성했다.",
						"english": "Massive ice tendrils converged, forming an unknown shadow.",
						"japanese": "巨大な氷の蔓が一箇所に集まり、正体不明の影を形成した。",
						"chinese": "巨大的冰藤蔓汇聚在一起，形成了一个不明身份的影子。",
						"french": "D'énormes vrilles de glace convergèrent, formant une ombre inconnue.",
						"spanish": "Enormes zarcillos de hielo convergieron, formando una sombra desconocida.",
						"vietnamese": "Những xúc tu băng khổng lồ hội tụ lại, tạo thành một cái bóng không rõ hình thù.",
						"thai": "หน่อไม้น้ำแข็งขนาดมหึมารวมตัวกัน ก่อตัวเป็นเงาที่ไม่รู้จัก",
						"hindi": "विशाल बर्फ़ीली टहनियाँ एक साथ मिलीं, जिससे एक अज्ञात छाया बन गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…따뜻한 것들. 드디어 찾아냈다.",
						"english": "...Warm ones. Finally found you.",
						"japanese": "…温かいものたち。ついに見つけた。",
						"chinese": "…温暖之物。终于找到了。",
						"french": "...Des êtres chaleureux. Enfin trouvés.",
						"spanish": "...Los cálidos. Finalmente os encontré.",
						"vietnamese": "...Những kẻ ấm áp. Cuối cùng cũng tìm thấy rồi.",
						"thai": "...พวกที่อบอุ่น ในที่สุดก็เจอแล้ว",
						"hindi": "...गर्म चीजें। आखिरकार तुम्हें ढूंढ लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 탑의 사냥꾼인가!",
						"english": "You are the Tower's hunter!",
						"japanese": "「貴様が塔の狩人か！」",
						"chinese": "“你就是塔的猎人吗！”",
						"french": "« Tu es le chasseur de la Tour ! »",
						"spanish": "« ¡¿Eres el cazador de la Torre?! »",
						"vietnamese": "« Ngươi là thợ săn của Tháp à! »",
						"thai": "« แกคือพรานของหอคอยรึไง! »",
						"hindi": "« तुम ही हो मीनार के शिकारी! »"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래. 너희의 온기… 내가 전부 가져가 주지.",
						"english": "Yes. All your warmth... I'll take it all.",
						"japanese": "「そうだ。お前たちの温もり…俺が全て奪ってやる。」",
						"chinese": "“没错。你们的温暖…我将全部夺走。”",
						"french": "« Oui. Votre chaleur… je vais tout prendre. »",
						"spanish": "« Sí. Vuestro calor… me lo llevaré todo. »",
						"vietnamese": "« Đúng vậy. Hơi ấm của các ngươi... ta sẽ lấy đi tất cả. »",
						"thai": "« ใช่แล้ว ความอบอุ่นของพวกแก… ข้าจะเอาไปทั้งหมดเลย »",
						"hindi": "« हाँ। तुम्हारी सारी गर्माहट... मैं सब ले लूँगा। »"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
