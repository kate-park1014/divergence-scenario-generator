export const scenario_snowy_frostwhisper_75_03 = {
	"scenario_id": "snowy_frostwhisper_75_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 온기 없는 비명만이 울려 퍼졌다.",
			"희망은 빠르게 얼어붙고, 잔혹한 진실만이 남았다.",
			"이 혹독한 추위는 과연 자연의 섭리일까, 아니면..."
		],
		"english": [
			"An endless snowfield. Only warmth-less screams echoed.",
			"Hope quickly froze, and only cruel truth remained.",
			"Is this harsh cold truly nature's providence, or..."
		],
		"japanese": [
			"果てしなく広がる雪原。温もりのない悲鳴だけが響き渡った。",
			"希望は急速に凍りつき、残虐な真実だけが残った。",
			"この過酷な寒さは、果たして自然の摂理なのか、それとも..."
		],
		"chinese": [
			"一望无际的雪原。只有冰冷的尖叫声回荡。",
			"希望迅速冻结，只剩下残酷的真相。",
			"这严酷的寒冷，究竟是自然的天意，还是..."
		],
		"french": [
			"Une étendue de neige infinie. Seuls des cris sans chaleur résonnaient.",
			"L'espoir gela rapidement, ne laissant qu'une vérité cruelle.",
			"Ce froid rigoureux est-il vraiment la providence de la nature, ou..."
		],
		"spanish": [
			"Un campo de nieve interminable. Solo gritos sin calidez resonaron.",
			"La esperanza se congeló rápidamente, y solo quedó la cruel verdad.",
			"¿Es este frío implacable realmente la providencia de la naturaleza, o...?"
		],
		"vietnamese": [
			"Một cánh đồng tuyết vô tận. Chỉ những tiếng hét lạnh lẽo vang vọng.",
			"Hy vọng nhanh chóng đóng băng, chỉ còn lại sự thật tàn khốc.",
			"Cái lạnh khắc nghiệt này, liệu có phải là ý trời, hay..."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ขอบเขต มีเพียงเสียงกรีดร้องที่ไร้ความอบอุ่นเท่านั้นที่ก้องกังวาน",
			"ความหวังถูกแช่แข็งอย่างรวดเร็ว และเหลือเพียงความจริงอันโหดร้าย",
			"ความหนาวเย็นอันโหดร้ายนี้ แท้จริงแล้วเป็นชะตากรรมจากธรรมชาติ หรือ..."
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। केवल बेजान चीखें गूँज उठीं।",
			"आशा तेजी से जम गई, और केवल क्रूर सत्य शेष रहा।",
			"क्या यह कठोर ठंड वास्तव में प्रकृति का विधान है, या..."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 얼어붙은 설원, 한 발짝 내딛을 때마다 살을 에는 추위가 파고들었다.",
						"english": "In the frozen snowfield, every step I took, a bone-chilling cold pierced through me.",
						"japanese": "全てが凍りついた雪原、一歩踏み出すたびに肌を刺すような寒さが突き刺さった。",
						"chinese": "在万物冻结的雪原上，每迈出一步，刺骨的寒冷就侵袭而来。",
						"french": "Dans la plaine enneigée et gelée, à chaque pas, un froid mordant me transperçait.",
						"spanish": "En el campo de nieve congelado, a cada paso, un frío que calaba los huesos me atravesaba.",
						"vietnamese": "Trên cánh đồng tuyết đóng băng, mỗi bước chân đều khiến cái lạnh thấu xương xâm nhập.",
						"thai": "ในทุ่งหิมะที่ทุกสิ่งแข็งตัว ทุกก้าวที่เดิน ความหนาวเย็นกัดกินกระดูกก็แทรกซึมเข้ามา",
						"hindi": "बर्फ़ीले मैदान में, हर कदम पर, एक हड्डियों को चीरने वाली ठंड चुभ रही थी।"
					}
				},
				{
					"content": {
						"korean": "이대로는… 안 돼.",
						"english": "This way... won't do.",
						"japanese": "このままでは…ダメだ。",
						"chinese": "这样下去...不行。",
						"french": "Ainsi... ça ne va pas.",
						"spanish": "Así... no se puede.",
						"vietnamese": "Thế này thì... không được.",
						"thai": "แบบนี้... ไม่ได้",
						"hindi": "ऐसे... नहीं चलेगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "방법은 있어. 아직은 이성이 남아있을 때 움직여야 해.",
						"english": "There's a way. I need to move while reason still remains.",
						"japanese": "方法は、ある。まだ理性が残っているうちに動かなければ。",
						"chinese": "有办法。必须趁着理智尚存时行动。",
						"french": "Il y a un moyen. Je dois agir tant qu'il me reste de la raison.",
						"spanish": "Hay una manera. Debo moverme mientras la razón aún me quede.",
						"vietnamese": "Có cách. Phải hành động khi lý trí còn sót lại.",
						"thai": "มีทางออก ฉันต้องเคลื่อนไหวในขณะที่ยังเหลือสติอยู่",
						"hindi": "एक रास्ता है। मुझे तब तक चलना होगा जब तक मेरा विवेक बाकी है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "저 얼어붙은 나무들이라도 태워야지.",
						"english": "I need to burn even those frozen trees.",
						"japanese": "あの凍りついた木々でも燃やさないと。",
						"chinese": "至少要把那些冻结的树木烧掉。",
						"french": "Je dois brûler ces arbres gelés.",
						"spanish": "Debo quemar incluso esos árboles congelados.",
						"vietnamese": "Phải đốt những cái cây đông cứng kia.",
						"thai": "ฉันต้องเผาต้นไม้ที่แข็งตัวเหล่านั้น",
						"hindi": "मुझे उन जमे हुए पेड़ों को भी जलाना होगा।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 나무를 겨우 모아 불을 피웠다. 그러나...",
						"english": "I barely gathered frozen wood and lit a fire. But...",
						"japanese": "凍りついた木をかろうじて集めて火を熾した。しかし...",
						"chinese": "好不容易收集到冻结的树木，生起了火。但是...",
						"french": "J'ai à peine rassemblé du bois gelé et allumé un feu. But...",
						"spanish": "Apenas logré reunir madera congelada y encender un fuego. Pero...",
						"vietnamese": "Tôi vừa gom được củi đông cứng và nhóm lửa. Nhưng...",
						"thai": "ฉันรวบรวมไม้ที่แข็งตัวได้อย่างยากลำบากและจุดไฟ แต่ว่า...",
						"hindi": "मैंने मुश्किल से जमे हुए लकड़ी इकट्ठी की और आग जलाई। लेकिन..."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "finn"
				},
				{
					"emotion": "happy",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "보여? 이 불이, 우리의 희망이야.",
						"english": "See? This fire, it's our hope.",
						"japanese": "見えるか？ この火が、私たちの希望だ。",
						"chinese": "看到了吗？这火，是我们的希望。",
						"french": "Tu vois ? Ce feu, c'est notre espoir.",
						"spanish": "¿Ves? Este fuego es nuestra esperanza.",
						"vietnamese": "Thấy không? Ngọn lửa này, là hy vọng của chúng ta.",
						"thai": "เห็นไหม? ไฟนี้คือความหวังของเรา",
						"hindi": "देख रहे हो? यह आग, हमारी आशा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "따뜻해... 정말 오랜만에.",
						"english": "It's warm... for the first time in a long while.",
						"japanese": "暖かい…本当に久しぶりに。",
						"chinese": "真暖和...真是久违了。",
						"french": "C'est chaud... depuis si longtemps.",
						"spanish": "Está cálido... después de tanto tiempo.",
						"vietnamese": "Ấm quá... thật lâu rồi mới được như vậy.",
						"thai": "มันอบอุ่น... เป็นครั้งแรกในรอบนาน",
						"hindi": "यह गर्म है... सच में बहुत समय बाद।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그러나 불꽃은 힘없이 일렁였다. 닿는 모든 것을 얼리는 냉기가 심상치 않았다.",
						"english": "But the flame flickered weakly. The chilling cold, freezing everything it touched, was unusual.",
						"japanese": "しかし炎は力なく揺らめいた。触れるもの全てを凍らせる冷気が尋常ではなかった。",
						"chinese": "然而火焰微弱地摇曳着。触及万物的寒气非同寻常。",
						"french": "Mais la flamme vacillait faiblement. Le froid glacial, gelant tout ce qu'il touchait, était étrange.",
						"spanish": "Pero la llama parpadeaba débilmente. El frío gélido, que congelaba todo lo que tocaba, era inusual.",
						"vietnamese": "Nhưng ngọn lửa yếu ớt lay động. Cái lạnh buốt giá, đóng băng mọi thứ nó chạm vào, thật bất thường.",
						"thai": "แต่เปลวไฟก็ริบหรี่ลง ความเย็นยะเยือกที่แช่แข็งทุกสิ่งที่สัมผัสไม่ธรรมดา",
						"hindi": "परंतु ज्वाला कमज़ोर पड़ रही थी। छूने वाली हर चीज़ को जमा देने वाली ठंड असामान्य थी।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "아니... 왜 이래? 이 정도면 충분한데...",
						"english": "No... why is this happening? This much should be enough...",
						"japanese": "いや…どうしてだ？これだけあれば十分なはずなのに…",
						"chinese": "不... 为什么会这样？这应该够了啊...",
						"french": "Non... pourquoi ça arrive ? Ça devrait suffire...",
						"spanish": "No... ¿por qué está pasando esto? Con esto debería bastar...",
						"vietnamese": "Không... sao lại thế này? Chừng này là đủ rồi mà...",
						"thai": "ไม่นะ... ทำไมถึงเป็นแบบนี้? แค่นี้ก็น่าจะพอแล้ว...",
						"hindi": "नहीं... यह क्यों हो रहा है? इतना तो काफी होना चाहिए..."
					}
				},
				{
					"content": {
						"korean": "불꽃이... 약해지고 있어.",
						"english": "The flame... it's getting weaker.",
						"japanese": "炎が…弱まっている。",
						"chinese": "火焰... 正在变弱。",
						"french": "La flamme... s'affaiblit.",
						"spanish": "La llama... se está debilitando.",
						"vietnamese": "Ngọn lửa... đang yếu dần.",
						"thai": "เปลวไฟ... มันกำลังอ่อนลง",
						"hindi": "ज्वाला... कमज़ोर पड़ रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼! 더... 더 피워야 해!",
						"english": "Impossible! I need to light... light more!",
						"japanese": "嘘だ！もっと…もっと焚かないと！",
						"chinese": "不可能！必须... 烧得更旺！",
						"french": "C'est impossible ! Il faut... en allumer plus !",
						"spanish": "¡Imposible! ¡Debo... encender más!",
						"vietnamese": "Không thể nào! Phải... thắp thêm nữa!",
						"thai": "เป็นไปไม่ได้! ต้อง... จุดเพิ่มอีก!",
						"hindi": "असंभव! मुझे... और जलाना होगा!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "점점 더 깊어지는 냉기. 온기를 찾아 헤맬수록 희망은 차갑게 식어갔다.",
						"english": "The cold deepened further. The more I sought warmth, the colder hope grew.",
						"japanese": "深まるばかりの冷気。温もりを求めて彷徨うほど、希望は冷たく冷めっていった。",
						"chinese": "寒气愈发深重。越是寻找温暖，希望就越是冰冷。",
						"french": "Le froid s'intensifiait. Plus je cherchais la chaleur, plus l'espoir s'éteignait froidement.",
						"spanish": "El frío se hacía cada vez más profundo. Cuanto más buscaba calor, más fría se volvía la esperanza.",
						"vietnamese": "Cái lạnh ngày càng sâu hơn. Càng tìm kiếm hơi ấm, hy vọng càng nguội lạnh.",
						"thai": "ความหนาวเย็นยิ่งทวีความรุนแรงขึ้น ยิ่งออกตามหาความอบอุ่น ความหวังก็ยิ่งเย็นชาลง",
						"hindi": "ठंड बढ़ती जा रही थी। जितनी ज़्यादा गरमाहट की तलाश की, उतनी ही उम्मीद ठंडी पड़ती गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건... 단순한 추위가 아니야.",
						"english": "This isn't... just simple cold.",
						"japanese": "これは…ただの寒さじゃない。",
						"chinese": "这不... 只是简单的寒冷。",
						"french": "Ce n'est pas... un simple froid.",
						"spanish": "Esto no es... un simple frío.",
						"vietnamese": "Đây không phải... chỉ là lạnh đơn thuần.",
						"thai": "นี่ไม่ใช่... แค่ความหนาวเย็นธรรมดา",
						"hindi": "यह... सिर्फ़ सामान्य ठंड नहीं है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 얼어 죽을 것 같아.",
						"english": "What are you talking about? I feel like I'm going to freeze to death.",
						"japanese": "何を言ってるんだ？凍え死にそうだ。",
						"chinese": "你在说什么？我快冻死了。",
						"french": "Qu'est-ce que tu racontes ? J'ai l'impression de mourir de froid.",
						"spanish": "¿De qué estás hablando? Siento que me voy a morir congelado.",
						"vietnamese": "Cậu đang nói gì vậy? Tớ sắp chết cóng rồi.",
						"thai": "พูดอะไรน่ะ? ฉันกำลังจะแข็งตายอยู่แล้วนะ",
						"hindi": "तुम क्या कह रहे हो? मुझे लग रहा है मैं जम कर मर जाऊँगा।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "불꽃이, 불꽃이 얼어붙어 꺼졌어. 눈으로 봤다고!",
						"english": "The flame, the flame froze and went out. I saw it with my own eyes!",
						"japanese": "炎が、炎が凍りついて消えたんだ。この目で見たんだぞ！",
						"chinese": "火焰，火焰冻结熄灭了。我亲眼看到的！",
						"french": "La flamme, la flamme a gelé et s'est éteinte. Je l'ai vu de mes propres yeux !",
						"spanish": "La llama, la llama se congeló y se apagó. ¡Lo vi con mis propios ojos!",
						"vietnamese": "Ngọn lửa, ngọn lửa đóng băng rồi tắt ngấm. Tớ đã tận mắt nhìn thấy!",
						"thai": "เปลวไฟ เปลวไฟแข็งตัวและดับลงแล้ว ฉันเห็นกับตาตัวเองเลยนะ!",
						"hindi": "ज्वाला, ज्वाला जम गई और बुझ गई। मैंने अपनी आँखों से देखा!"
					}
				},
				{
					"content": {
						"korean": "핀, 진정해. 우린 방법을 찾아야 해.",
						"english": "Finn, calm down. We need to find a way.",
						"japanese": "フィン、落ち着け。私たちは方法を見つけないと。",
						"chinese": "芬，冷静。我们必须找到办法。",
						"french": "Finn, calme-toi. Nous devons trouver un moyen.",
						"spanish": "Finn, cálmate. Tenemos que encontrar una manera.",
						"vietnamese": "Finn, bình tĩnh đi. Chúng ta phải tìm cách.",
						"thai": "ฟินน์ ใจเย็นก่อน เราต้องหาวิธี",
						"hindi": "फिन, शांत हो जाओ। हमें कोई रास्ता खोजना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "방법? 하하... 무슨 방법? 다 얼어 죽을 텐데!",
						"english": "A way? Haha... what way? We'll all freeze to death!",
						"japanese": "方法？はは…どんな方法だ？みんな凍え死ぬぞ！",
						"chinese": "办法？哈哈... 什么办法？我们都会冻死的！",
						"french": "Un moyen ? Haha... quel moyen ? On va tous mourir de froid !",
						"spanish": "¿Una manera? Jaja... ¿qué manera? ¡Todos vamos a morir congelados!",
						"vietnamese": "Cách ư? Ha ha... cách gì chứ? Chúng ta sẽ chết cóng hết thôi!",
						"thai": "วิธีเหรอ? ฮ่าฮ่า... วิธีอะไร? เราทุกคนจะแข็งตายกันหมด!",
						"hindi": "रास्ता? हाहा... क्या रास्ता? हम सब जम कर मर जाएँगे!"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "이성은 한계에 부딪혔다. 절망은 냉기처럼 탐험대를 덮쳐왔다.",
						"english": "Reason hit its limit. Despair, like a chilling frost, enveloped the expedition.",
						"japanese": "理性は限界を迎えた。絶望は冷気のように探検隊を襲った。",
						"chinese": "理智达到了极限。绝望如寒气般笼罩了探险队。",
						"french": "La raison atteignait ses limites. Le désespoir, tel un froid glacial, submergeait l'expédition.",
						"spanish": "La razón alcanzó su límite. La desesperación, como un frío gélido, envolvió a la expedición.",
						"vietnamese": "Lý trí đã chạm đến giới hạn. Tuyệt vọng ập đến đoàn thám hiểm như băng giá.",
						"thai": "เหตุผลมาถึงขีดจำกัดแล้ว ความสิ้นหวังปกคลุมคณะสำรวจราวกับความหนาวเย็น",
						"hindi": "तर्क अपनी सीमा पर पहुँच गया था। निराशा, एक ठंडी लहर की तरह, अभियान दल को घेर लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "핀! 어디 가는 거야? 이쪽이 아니야!",
						"english": "Finn! Where are you going? Not this way!",
						"japanese": "フィン！どこへ行くの？そっちじゃない！",
						"chinese": "芬！你要去哪儿？不是这边！",
						"french": "Finn ! Où vas-tu ? Ce n'est pas par ici !",
						"spanish": "¡Finn! ¿Adónde vas? ¡No es por aquí!",
						"vietnamese": "Finn! Cậu đi đâu vậy? Không phải đường này!",
						"thai": "ฟินน์! จะไปไหนน่ะ? ไม่ใช่ทางนี้!",
						"hindi": "फ़िन! कहाँ जा रहे हो? यह रास्ता नहीं है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니! 아니야! 저쪽에서... 뭔가 들려! 온기가 있는 곳이 분명해!",
						"english": "No! No! I hear something... from over there! It must be where warmth is!",
						"japanese": "違う！違う！あっちから…何か聞こえる！きっと暖かい場所だ！",
						"chinese": "不！不是！那边…有什么声音！那里肯定有温暖！",
						"french": "Non ! Non ! J'entends quelque chose… par là-bas ! Il doit y avoir de la chaleur !",
						"spanish": "¡No! ¡No! ¡Escucho algo… de por allá! ¡Debe ser donde hay calor!",
						"vietnamese": "Không! Không phải! Từ đằng kia... tôi nghe thấy gì đó! Chắc chắn là nơi có hơi ấm!",
						"thai": "ไม่! ไม่ใช่! ได้ยินอะไรบางอย่าง... จากทางโน้น! ต้องเป็นที่ที่มีความอบอุ่นแน่ๆ!",
						"hindi": "नहीं! नहीं! मुझे उधर से... कुछ सुनाई दे रहा है! ज़रूर वहाँ गर्माहट होगी!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "핀! 정신 차려! 저긴 함정일지도 몰라!",
						"english": "Finn! Snap out of it! It might be a trap!",
						"japanese": "フィン！しっかりしろ！そこは罠かもしれないぞ！",
						"chinese": "芬！清醒点！那里可能是陷阱！",
						"french": "Finn ! Reprends tes esprits ! C'est peut-être un piège !",
						"spanish": "¡Finn! ¡Reacciona! ¡Podría ser una trampa!",
						"vietnamese": "Finn! Tỉnh táo lại đi! Chỗ đó có thể là bẫy đấy!",
						"thai": "ฟินน์! ตั้งสติหน่อย! ที่นั่นอาจเป็นกับดักนะ!",
						"hindi": "फ़िन! होश में आओ! वह एक जाल हो सकता है!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "함정? 상관없어! 이대로 얼어 죽는 것보단 나아! 이젠 아무것도 보이지 않아!",
						"english": "A trap? I don't care! It's better than freezing to death like this! I can't see anything anymore!",
						"japanese": "罠？どうでもいい！このまま凍え死ぬよりはマシだ！もう何も見えないんだ！",
						"chinese": "陷阱？我不在乎！总比这样冻死好！我现在什么都看不见了！",
						"french": "Un piège ? Je m'en fiche ! C'est mieux que de mourir de froid comme ça ! Je ne vois plus rien !",
						"spanish": "¿Una trampa? ¡No me importa! ¡Es mejor que morir congelado así! ¡Ya no veo nada!",
						"vietnamese": "Bẫy ư? Tôi không quan tâm! Tốt hơn là cứ thế này mà chết cóng! Giờ tôi chẳng thấy gì nữa!",
						"thai": "กับดักเหรอ? ไม่สนหรอก! ดีกว่าต้องมาแข็งตายแบบนี้! ฉันไม่เห็นอะไรอีกแล้ว!",
						"hindi": "जाल? मुझे परवाह नहीं! इस तरह जम कर मरने से तो बेहतर है! मुझे अब कुछ नहीं दिख रहा!"
					}
				},
				{
					"direction": "down",
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "핀... 멈춰!",
						"english": "Finn... Stop!",
						"japanese": "フィン…止まれ！",
						"chinese": "芬…停下！",
						"french": "Finn… Arrête !",
						"spanish": "¡Finn… Detente!",
						"vietnamese": "Finn... Dừng lại!",
						"thai": "ฟินน์... หยุดนะ!",
						"hindi": "फ़िन... रुको!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "절망에 잠식된 길의 끝. 마침내 모든 온기를 집어삼키는 그림자가 모습을 드러냈다.",
						"english": "The end of a path consumed by despair. Finally, the shadow that devours all warmth revealed itself.",
						"japanese": "絶望に侵食された道の終わり。ついに、すべての温もりを飲み込む影が姿を現した。",
						"chinese": "绝望侵蚀之路的尽头。终于，吞噬所有温暖的阴影显露了真身。",
						"french": "Au bout du chemin dévoré par le désespoir. Enfin, l'ombre qui dévore toute chaleur se révéla.",
						"spanish": "El final de un camino consumido por la desesperación. Finalmente, la sombra que devora todo calor se reveló.",
						"vietnamese": "Cuối con đường chìm trong tuyệt vọng. Cuối cùng, bóng tối nuốt chửng mọi hơi ấm đã lộ diện.",
						"thai": "สุดปลายทางที่ถูกความสิ้นหวังกัดกิน ในที่สุดเงามืดที่กลืนกินความอบอุ่นทั้งหมดก็ปรากฏกาย",
						"hindi": "निराशा से घिरे रास्ते का अंत। आखिरकार, वह छाया प्रकट हुई जो सारी गर्माहट निगल जाती है।"
					}
				},
				{
					"content": {
						"korean": "오랜만이야. 따뜻한 숨결을 가진 자들.",
						"english": "Long time no see. Those with warm breaths.",
						"japanese": "久しいな。温かい息吹を持つ者たちよ。",
						"chinese": "很久不见了。拥有温暖气息的你们。",
						"french": "Longtemps sans vous voir. Vous, aux souffles chauds.",
						"spanish": "Cuánto tiempo sin vernos. Vosotros, los de aliento cálido.",
						"vietnamese": "Lâu rồi không gặp. Những kẻ mang hơi thở ấm áp.",
						"thai": "ไม่ได้เจอกันนานนะ พวกเจ้าผู้มีลมหายใจอันอบอุ่น",
						"hindi": "बहुत समय हो गया। गर्म साँस वाले प्राणियों।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가... 모든 걸 얼어붙게 만든 장본인이구나!",
						"english": "So you... are the one who froze everything!",
						"japanese": "お前が…すべてを凍らせた張本人か！",
						"chinese": "你就是…让一切冻结的元凶！",
						"french": "C'est toi... le responsable de tout ce qui a gelé !",
						"spanish": "¡Así que tú... eres el culpable de que todo se congelara!",
						"vietnamese": "Ngươi... chính là kẻ đã đóng băng tất cả mọi thứ!",
						"thai": "แก... คือตัวการที่ทำให้ทุกอย่างแข็งตัว!",
						"hindi": "तो तुम... ही हो जिसने सब कुछ जमा दिया!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "세상의 온기는 본래 내 것이었어. 감히, 네까짓 것들이 빼앗으려 드는가?",
						"english": "The warmth of the world was originally mine. How dare you, mere mortals, try to steal it?",
						"japanese": "世界の温もりは元々私のものだった。よくも、お前のような取るに足らない者どもが奪おうとするか？",
						"chinese": "世界 的温暖本来就是我的。你们这些渺小的存在，竟敢妄想夺走它？",
						"french": "La chaleur du monde était originellement mienne. Comment osez-vous, misérables créatures, tenter de la dérober ?",
						"spanish": "La calidez del mundo era originalmente mía. ¿Cómo os atrevéis, simples mortales, a intentar robármela?",
						"vietnamese": "Hơi ấm của thế giới vốn dĩ là của ta. Dám, lũ phàm tục các ngươi lại muốn cướp đoạt?",
						"thai": "ความอบอุ่นของโลกนี้เดิมเป็นของข้า พวกเจ้าบังอาจคิดจะช่วงชิงไปงั้นรึ?",
						"hindi": "दुनिया की गर्माहट मूल रूप से मेरी थी। तुम्हारी इतनी हिम्मत कि तुम जैसे तुच्छ प्राणी उसे छीनने की कोशिश करो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "당장 멈춰!",
						"english": "Stop right now!",
						"japanese": "今すぐやめろ！",
						"chinese": "立刻停止！",
						"french": "Arrête immédiatement !",
						"spanish": "¡Detente ahora mismo!",
						"vietnamese": "Dừng lại ngay!",
						"thai": "หยุดเดี๋ยวนี้!",
						"hindi": "अभी रोको!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 불꽃이여... 영원히 얼어붙어라.",
						"english": "Insignificant flame... freeze forever.",
						"japanese": "取るに足らない炎よ…永遠に凍りつけ。",
						"chinese": "渺小的火焰啊...永远冻结吧。",
						"french": "Flamme insignifiante... gèle à jamais.",
						"spanish": "Llama insignificante... congélate para siempre.",
						"vietnamese": "Ngọn lửa tầm thường... hãy đóng băng vĩnh viễn đi.",
						"thai": "เปลวไฟไร้ค่า... จงแข็งตัวไปตลอดกาล.",
						"hindi": "तुच्छ लौ... हमेशा के लिए जम जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직... 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "It's not... over yet. We won't give up!",
						"japanese": "まだ…終わってない。私たちは諦めない！",
						"chinese": "还没...结束。我们不会放弃！",
						"french": "Ce n'est pas... encore fini. Nous n'abandonnerons pas !",
						"spanish": "Aún no... ha terminado. ¡No nos rendiremos!",
						"vietnamese": "Vẫn chưa... kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "ยัง... ไม่จบ. เราจะไม่ยอมแพ้!",
						"hindi": "अभी... खत्म नहीं हुआ। हम हार नहीं मानेंगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크윽... 이 불꽃... 언젠가 다시... 모든 것을 얼릴 것이다...",
						"english": "Ugh... This flame... someday again... will freeze everything...",
						"japanese": "ぐっ…この炎…いつかまた…全てを凍らせるだろう…",
						"chinese": "呃...这火焰...总有一天会再次...将一切冻结...",
						"french": "Ugh... Cette flamme... un jour à nouveau... gèlera tout...",
						"spanish": "Ugh... Esta llama... algún día de nuevo... lo congelará todo...",
						"vietnamese": "Khụ... Ngọn lửa này... một ngày nào đó... sẽ đóng băng mọi thứ...",
						"thai": "อึก... เปลวไฟนี้... สักวันหนึ่ง... จะแช่แข็งทุกสิ่งอีกครั้ง...",
						"hindi": "उफ़... यह लौ... किसी दिन फिर से... सब कुछ जमा देगी..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝났어. 우리가 이겼어.",
						"english": "It's over. We won.",
						"japanese": "終わった。私たちが勝った。",
						"chinese": "结束了。我们赢了。",
						"french": "C'est fini. Nous avons gagné.",
						"spanish": "Se acabó. Hemos ganado.",
						"vietnamese": "Xong rồi. Chúng ta thắng rồi.",
						"thai": "จบแล้ว. เราชนะแล้ว.",
						"hindi": "खत्म हो गया। हम जीत गए।"
					}
				},
				{
					"content": {
						"korean": "냉기의 그림자가 잠시 물러났다. 그러나 희망은 여전히 차가웠고, 진정한 승리는 아직 오지 않았다.",
						"english": "The shadow of ice has retreated for now. But hope remained cold, and true victory has yet to come.",
						"japanese": "冷気の影は一時的に退いた。しかし希望は依然として冷たく、真の勝利はまだ訪れていなかった。",
						"chinese": "寒冷的阴影暂时退去。然而希望依旧冰冷，真正的胜利尚未到来。",
						"french": "L'ombre du froid s'est retirée pour l'instant. Mais l'espoir restait froid, et la véritable victoire n'était pas encore venue.",
						"spanish": "La sombra del frío se ha retirado por ahora. Pero la esperanza seguía siendo fría, y la verdadera victoria aún no había llegado.",
						"vietnamese": "Bóng tối băng giá tạm thời rút lui. Nhưng hy vọng vẫn lạnh lẽo, và chiến thắng thực sự vẫn chưa đến.",
						"thai": "เงาแห่งความเย็นได้ถอยกลับไปชั่วคราว แต่ความหวังยังคงหนาวเหน็บ และชัยชนะที่แท้จริงยังมาไม่ถึง",
						"hindi": "ठंड की छाया अस्थायी रूप से पीछे हट गई। लेकिन उम्मीद अभी भी ठंडी थी, और सच्ची जीत अभी बाकी थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
