export const scenario_forest_mycena_28_01 = {
	"scenario_id": "forest_mycena_28_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 입구. 짙은 안개가 모든 것을 집어삼킨 듯하다.",
						"english": "Forest entrance. The thick fog seems to have swallowed everything.",
						"japanese": "森の入り口。濃い霧がすべてを飲み込んだようだ。",
						"chinese": "森林入口。浓雾似乎吞噬了一切。",
						"french": "Entrée de la forêt. L'épais brouillard semble avoir tout englouti.",
						"spanish": "Entrada al bosque. La densa niebla parece haberlo engullido todo.",
						"vietnamese": "Lối vào rừng. Sương mù dày đặc dường như đã nuốt chửng mọi thứ.",
						"thai": "ทางเข้าป่า หมอกหนาทึบดูเหมือนจะกลืนกินทุกสิ่ง",
						"hindi": "जंगल का प्रवेश द्वार। घना कोहरा सब कुछ निगल गया प्रतीत होता है।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "여긴가. 목적지가.",
						"english": "Is this it? The destination.",
						"japanese": "ここか。目的地は。",
						"chinese": "是这里吗。目的地。",
						"french": "C'est ici ? La destination.",
						"spanish": "¿Es aquí? El destino.",
						"vietnamese": "Đây là đâu? Điểm đến.",
						"thai": "ที่นี่หรือ? จุดหมายปลายทาง",
						"hindi": "क्या यह है? गंतव्य।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…정말 뚫고 갈 수 있을까요?",
						"english": "...Can we really push through?",
						"japanese": "…本当に突破できるのでしょうか？",
						"chinese": "……我们真的能闯过去吗？",
						"french": "...Pouvons-nous vraiment passer à travers ?",
						"spanish": "...¿De verdad podemos abrirnos paso?",
						"vietnamese": "...Chúng ta có thực sự xuyên qua được không?",
						"thai": "...เราจะฝ่าไปได้จริงๆ หรือ?",
						"hindi": "...क्या हम सचमुच आगे बढ़ पाएंगे?"
					}
				},
				{
					"content": {
						"korean": "주어진 임무다. 망설일 시간 없어.",
						"english": "It's a given mission. No time to hesitate.",
						"japanese": "与えられた任務だ。ためらう時間はない。",
						"chinese": "这是任务。没有时间犹豫了。",
						"french": "C'est une mission donnée. Pas le temps d'hésiter.",
						"spanish": "Es una misión asignada. No hay tiempo para dudar.",
						"vietnamese": "Đó là một nhiệm vụ được giao. Không có thời gian để do dự.",
						"thai": "มันคือภารกิจที่ได้รับมอบหมาย ไม่มีเวลาลังเล",
						"hindi": "यह एक दिया गया मिशन है। हिचकिचाने का समय नहीं है।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "더 깊이 들어간다. 경계를 늦추지 마라.",
						"english": "Going deeper. Don't let your guard down.",
						"japanese": "さらに奥へ進む。警戒を怠るな。",
						"chinese": "深入进去。不要放松警惕。",
						"french": "Nous allons plus loin. Ne baissez pas votre garde.",
						"spanish": "Nos adentramos más. No bajes la guardia.",
						"vietnamese": "Đi sâu hơn. Đừng lơ là cảnh giác.",
						"thai": "เข้าไปลึกขึ้น อย่าลดการระมัดระวัง",
						"hindi": "और गहराई में जाते हैं। सतर्कता कम मत करो।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크흠… 왠지 모르게 달콤한 냄새가 나요.",
						"english": "*Cough*... Somehow, I smell something sweet.",
						"japanese": "くっ…なんだか甘い匂いがします。",
						"chinese": "咳……不知为何，我闻到一股甜味。",
						"french": "*Tousse*... Je sens comme une odeur douce, bizarrement.",
						"spanish": "*Tos*... De alguna manera, huelo algo dulce.",
						"vietnamese": "*Khụ khụ*... Không hiểu sao, tôi ngửi thấy mùi gì đó ngọt ngọt.",
						"thai": "*กระแอม*... ทำไมถึงได้กลิ่นหอมหวานก็ไม่รู้",
						"hindi": "*खाँसी*... किसी तरह, मुझे कुछ मीठा महक रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…몸이 으스스한데.",
						"english": "...I feel a chill.",
						"japanese": "「…体がゾクゾクする。」",
						"chinese": "「…身体发冷。」",
						"french": "...J'ai des frissons.",
						"spanish": "...Siento escalofríos.",
						"vietnamese": "...Tôi thấy ớn lạnh.",
						"thai": "...รู้สึกหนาวสั่น.",
						"hindi": "...मुझे ठंड लग रही है।"
					}
				},
				{
					"content": {
						"korean": "모두 조심해. 숲의 독기일 수 있다.",
						"english": "Everyone, be careful. It could be the forest's miasma.",
						"japanese": "「皆、気をつけろ。森の瘴気かもしれん。」",
						"chinese": "「大家小心。可能是森林的瘴气。」",
						"french": "Attention à tous. C'est peut-être le miasme de la forêt.",
						"spanish": "Tened cuidado, todos. Podría ser el miasma del bosque.",
						"vietnamese": "Mọi người cẩn thận. Có thể là độc khí của rừng.",
						"thai": "ทุกคนระวัง. อาจเป็นพิษร้ายของป่า.",
						"hindi": "सब सावधान रहो। यह जंगल की विषैली हवा हो सकती है।"
					},
					"speaker": "bracken",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 숲은… 살아있는 것 같군.",
						"english": "This forest... it feels alive.",
						"japanese": "「この森は…生きているようだ。」",
						"chinese": "「这片森林…好像活的一样。」",
						"french": "Cette forêt... semble vivante.",
						"spanish": "Este bosque... parece vivo.",
						"vietnamese": "Khu rừng này... dường như đang sống.",
						"thai": "ป่านี้... ดูเหมือนมีชีวิต.",
						"hindi": "यह जंगल... जीवित लग रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "점점 더 길을 잃는 기분이에요.",
						"english": "I feel like I'm getting more and more lost.",
						"japanese": "「ますます道に迷っている気分です。」",
						"chinese": "「我感觉越来越迷失方向了。」",
						"french": "Je me sens de plus en plus perdu.",
						"spanish": "Me siento cada vez más perdido.",
						"vietnamese": "Tôi cảm thấy càng ngày càng lạc lối.",
						"thai": "รู้สึกเหมือนยิ่งหลงทางไปเรื่อยๆ.",
						"hindi": "मैं और भी रास्ता भटक रहा हूँ।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여기 버섯들… 꼭 뭔가 형상을 하고 있는 것 같아요.",
						"english": "These mushrooms... they seem to be taking on shapes.",
						"japanese": "「ここのキノコたち…まるで何かの形をしているみたいだ。」",
						"chinese": "「这里的蘑菇…好像形成了某种形状。」",
						"french": "Ces champignons... semblent prendre des formes.",
						"spanish": "Estas setas... parecen estar tomando formas.",
						"vietnamese": "Những cây nấm ở đây... dường như đang tạo thành hình dạng gì đó.",
						"thai": "เห็ดพวกนี้... เหมือนกำลังก่อร่างสร้างตัวอะไรบางอย่าง.",
						"hindi": "ये मशरूम... किसी आकार में ढल रहे हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "환각에 속지 마라. 눈앞의 적에게 집중해.",
						"english": "Don't fall for illusions. Focus on the enemy before you.",
						"japanese": "「幻覚に惑わされるな。目の前の敵に集中しろ。」",
						"chinese": "「不要被幻觉欺骗。专注于眼前的敌人。」",
						"french": "Ne te laisse pas berner par les illusions. Concentre-toi sur l'ennemi devant toi.",
						"spanish": "No caigas en las ilusiones. Concéntrate en el enemigo frente a ti.",
						"vietnamese": "Đừng để bị ảo giác lừa. Tập trung vào kẻ thù trước mắt.",
						"thai": "อย่าหลงกลภาพลวงตา. ตั้งสมาธิกับศัตรูตรงหน้า.",
						"hindi": "भ्रम में मत पड़ो। सामने वाले शत्रु पर ध्यान दो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이제 돌아갈 길은 없다.",
						"english": "There's no way back now.",
						"japanese": "「もう引き返す道はない。」",
						"chinese": "「现在没有回头路了。」",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không còn đường quay lại nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว.",
						"hindi": "अब लौटने का कोई रास्ता नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "숨쉬기도 힘들어… 여긴 우리를 가두려는 것 같아.",
						"english": "It's hard to breathe... This place feels like it's trying to trap us.",
						"japanese": "「息をするのも辛い…ここは俺たちを閉じ込めようとしているようだ。」",
						"chinese": "「呼吸都很困难…这里好像想把我们困住。」",
						"french": "C'est difficile de respirer... On dirait que cet endroit essaie de nous piéger.",
						"spanish": "Es difícil respirar... Este lugar parece querer atraparnos.",
						"vietnamese": "Khó thở quá... Nơi đây dường như muốn giam cầm chúng ta.",
						"thai": "หายใจก็ลำบาก... ที่นี่เหมือนจะขังเราไว้.",
						"hindi": "साँस लेना भी मुश्किल है... लगता है यह जगह हमें फँसाना चाहती है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 추워져… 내 몸이 내 것이 아닌 것 같아.",
						"english": "It's getting colder... My body doesn't feel like my own.",
						"japanese": "「だんだん寒くなってきた…体が自分のものじゃないみたいだ。」",
						"chinese": "「越来越冷了…我的身体好像不是我自己的了。」",
						"french": "Il fait de plus en plus froid... Mon corps ne me semble plus m'appartenir.",
						"spanish": "Cada vez hace más frío... Mi cuerpo ya no se siente como mío.",
						"vietnamese": "Càng ngày càng lạnh... Cơ thể tôi cứ như không phải của mình nữa.",
						"thai": "ยิ่งหนาวขึ้นเรื่อยๆ... ร่างกายฉันไม่เหมือนของตัวเอง.",
						"hindi": "ठंड बढ़ती जा रही है... मेरा शरीर मेरा अपना नहीं लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "정신 차려! 여기서 무너지면 전부 끝이다.",
						"english": "Snap out of it! If we fall here, it's all over.",
						"japanese": "「気をしっかり持て！ここで倒れたら全て終わりだ。」",
						"chinese": "「振作起来！如果在这里倒下，一切就都完了。」",
						"french": "Reprends-toi ! Si nous nous effondrons ici, tout est fini.",
						"spanish": "¡Anímate! Si caemos aquí, todo habrá terminado.",
						"vietnamese": "Tỉnh táo lại! Nếu gục ngã ở đây, tất cả sẽ kết thúc.",
						"thai": "ตั้งสติไว้! ถ้าล้มลงที่นี่ ทุกอย่างก็จบ.",
						"hindi": "होश में आओ! अगर हम यहाँ हार गए, तो सब ख़त्म हो जाएगा।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "해치웠나…?",
						"english": "Did we defeat it...?",
						"japanese": "やったか…？",
						"chinese": "解决掉了吗…？",
						"french": "L'avons-nous vaincu... ?",
						"spanish": "¿Lo hemos derrotado...?",
						"vietnamese": "Chúng ta đã hạ gục nó rồi sao...?",
						"thai": "จัดการได้แล้ว...?",
						"hindi": "क्या हमने इसे हरा दिया...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 결국 너희도… 숲의 일부가 될 뿐…",
						"english": "Futile resistance... in the end, you too... will merely become a part of the forest...",
						"japanese": "取るに足らない抵抗…結局お前たちも…森の一部になるだけだ…",
						"chinese": "微不足道的抵抗…最终你们也会…成为森林的一部分…",
						"french": "Résistance futile... au final, vous aussi... ne ferez que devenir une partie de la forêt...",
						"spanish": "Resistencia inútil... al final, vosotros también... solo seréis parte del bosque...",
						"vietnamese": "Sự kháng cự yếu ớt... cuối cùng các ngươi cũng... chỉ trở thành một phần của khu rừng thôi...",
						"thai": "การต่อต้านที่ไร้ค่า... สุดท้ายพวกเจ้าก็จะ... เป็นแค่ส่วนหนึ่งของป่า...",
						"hindi": "तुच्छ प्रतिरोध... अंत में, तुम भी... बस जंगल का हिस्सा बन जाओगे..."
					}
				},
				{
					"content": {
						"korean": "끝났다… 숲이… 조금 진정된 것 같아.",
						"english": "It's over... The forest... seems a little calmer now.",
						"japanese": "終わった…森が…少し落ち着いたようだ。",
						"chinese": "结束了…森林…似乎平静了一些。",
						"french": "C'est fini... La forêt... semble un peu plus calme.",
						"spanish": "Se acabó... El bosque... parece un poco más tranquilo.",
						"vietnamese": "Kết thúc rồi... Khu rừng... dường như đã bình yên hơn một chút.",
						"thai": "จบแล้ว... ป่า... ดูเหมือนจะสงบลงบ้างแล้ว",
						"hindi": "यह खत्म हो गया... जंगल... थोड़ा शांत लग रहा है।"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하지만, 이 숲의 진짜 그림자는 아직 모습을 드러내지 않았다.",
						"english": "However, the true shadow of this forest has not yet shown itself.",
						"japanese": "だが、この森の真の影はまだ姿を見せていない。",
						"chinese": "但是，这片森林真正的阴影还没有现身。",
						"french": "Cependant, la véritable ombre de cette forêt ne s'est pas encore révélée.",
						"spanish": "Sin embargo, la verdadera sombra de este bosque aún no ha aparecido.",
						"vietnamese": "Tuy nhiên, bóng tối thực sự của khu rừng này vẫn chưa lộ diện.",
						"thai": "แต่เงาที่แท้จริงของป่านี้ยังไม่เผยตัว",
						"hindi": "हालांकि, इस जंगल की असली छाया अभी तक सामने नहीं आई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "이럴 수가…!",
						"english": "No way...!",
						"japanese": "まさか…！",
						"chinese": "怎么会这样…！",
						"french": "Impossible...!",
						"spanish": "¡No puede ser...!",
						"vietnamese": "Không thể nào...!",
						"thai": "ไม่จริงน่า...!",
						"hindi": "यह नहीं हो सकता…!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무릎 꿇어라… 모든 것은… 숲으로 돌아간다.",
						"english": "Kneel... Everything returns to the forest.",
						"japanese": "跪け… 全ては… 森へ還る。",
						"chinese": "跪下吧… 一切都将… 归于森林。",
						"french": "Agenouille-toi… Tout… retourne à la forêt.",
						"spanish": "Arrodíllate… Todo… vuelve al bosque.",
						"vietnamese": "Hãy quỳ xuống… Mọi thứ… sẽ trở về với rừng.",
						"thai": "คุกเข่าซะ… ทุกสิ่ง… จะกลับคืนสู่ป่า",
						"hindi": "घुटने टेको… सब कुछ… जंगल में लौट आता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어!",
						"english": "Damn it... I still... can't give up!",
						"japanese": "くそ… まだ… 諦められない！",
						"chinese": "该死… 我还… 不能放弃！",
						"french": "Maudit… Je ne peux pas… abandonner encore !",
						"spanish": "¡Maldita sea… Todavía… no puedo rendirme!",
						"vietnamese": "Khốn kiếp… Ta vẫn… chưa thể bỏ cuộc!",
						"thai": "ให้ตายสิ… ยัง… ยอมแพ้ไม่ได้!",
						"hindi": "धिक्कार है… मैं अभी भी… हार नहीं मान सकता!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "여기서 끝낼 수는 없다. 다시 일어서라!",
						"english": "It can't end here. Rise again!",
						"japanese": "ここで終わらせるわけにはいかない。もう一度立ち上がれ！",
						"chinese": "不能在这里结束。重新站起来！",
						"french": "Ça ne peut pas finir ici. Relève-toi !",
						"spanish": "No puede terminar aquí. ¡Levántate de nuevo!",
						"vietnamese": "Không thể kết thúc ở đây. Hãy đứng dậy một lần nữa!",
						"thai": "จบตรงนี้ไม่ได้หรอก! ลุกขึ้นมาใหม่!",
						"hindi": "यह यहाँ खत्म नहीं हो सकता। फिर से उठो!"
					}
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "이곳이… 안개의 심장이군.",
						"english": "This is... the heart of the mist.",
						"japanese": "ここが…霧の心臓か。",
						"chinese": "这里就是…迷雾之心。",
						"french": "C'est ici... le cœur du brouillard.",
						"spanish": "Este es... el corazón de la niebla.",
						"vietnamese": "Đây là... trái tim của sương mù.",
						"thai": "ที่นี่คือ... หัวใจแห่งหมอก",
						"hindi": "यह है... कोहरे का दिल।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 왔느냐… 어리석은 인간들.",
						"english": "You dare come this far... foolish humans.",
						"japanese": "よくもここまで来たな…愚かな人間め。",
						"chinese": "竟敢走到这里…愚蠢的人类。",
						"french": "Vous osez venir jusqu'ici... stupides humains.",
						"spanish": "¿Osáis llegar hasta aquí... estúpidos humanos?",
						"vietnamese": "Ngươi dám đến tận đây... lũ người ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่... มนุษย์โง่เขลา",
						"hindi": "तुम इतनी दूर आने की हिम्मत करते हो... मूर्ख इंसानो।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네놈이 이 숲을 망쳤구나!",
						"english": "You ruined this forest!",
						"japanese": "貴様がこの森を荒らしたな！",
						"chinese": "是你毁了这片森林！",
						"french": "C'est toi qui as ruiné cette forêt !",
						"spanish": "¡Tú arruinaste este bosque!",
						"vietnamese": "Ngươi đã hủy hoại khu rừng này!",
						"thai": "แกทำลายป่านี้!",
						"hindi": "तुमने इस जंगल को तबाह कर दिया!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 숲의 일부일 뿐.",
						"english": "I am merely... a part of the forest.",
						"japanese": "私はただ…森の一部に過ぎない。",
						"chinese": "我只是…森林的一部分。",
						"french": "Je ne suis que... une partie de la forêt.",
						"spanish": "Yo soy solo... una parte del bosque.",
						"vietnamese": "Ta chỉ là... một phần của khu rừng.",
						"thai": "ข้าก็แค่... ส่วนหนึ่งของป่า",
						"hindi": "मैं तो बस... जंगल का एक हिस्सा हूँ।"
					}
				},
				{
					"content": {
						"korean": "…말도 안 되는 소리!",
						"english": "...Nonsense!",
						"japanese": "…馬鹿なことを！",
						"chinese": "胡说八道！",
						"french": "...Absurdité !",
						"spanish": "¡...Qué tontería!",
						"vietnamese": "...Vô lý!",
						"thai": "...เหลวไหล!",
						"hindi": "...बकवास!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "각오해라, {random_boss}!",
						"english": "Prepare yourself, {random_boss}!",
						"japanese": "覚悟しろ、{random_boss}！",
						"chinese": "准备受死吧，{random_boss}！",
						"french": "Prépare-toi, {random_boss} !",
						"spanish": "¡Prepárate, {random_boss}!",
						"vietnamese": "Hãy sẵn sàng đi, {random_boss}!",
						"thai": "เตรียมตัวไว้ให้ดี, {random_boss}!",
						"hindi": "तैयार हो जाओ, {random_boss}!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"짙은 안개가 삼킨 숲.",
			"우리는 그 안으로 걸어 들어갔다.",
			"달콤한 독기, 섬뜩한 침묵.",
			"이곳은 생지옥의 시작이었다."
		],
		"english": [
			"A forest swallowed by thick fog.",
			"We walked into it.",
			"Sweet venom, eerie silence.",
			"This was the beginning of a living hell."
		],
		"japanese": [
			"濃い霧に飲まれた森。",
			"我々はそこへ足を踏み入れた。",
			"甘い毒気、不気味な沈黙。",
			"ここは生き地獄の始まりだった。"
		],
		"chinese": [
			"浓雾吞噬的森林。",
			"我们走进了它。",
			"甜美的毒气，诡异的沉默。",
			"这里是活地狱的开始。"
		],
		"french": [
			"Une forêt engloutie par un épais brouillard.",
			"Nous y sommes entrés.",
			"Un poison doux, un silence étrange.",
			"Ce fut le début d'un enfer vivant."
		],
		"spanish": [
			"Un bosque devorado por una densa niebla.",
			"Entramos en él.",
			"Veneno dulce, silencio espeluznante.",
			"Este fue el comienzo de un infierno viviente."
		],
		"vietnamese": [
			"Rừng bị sương mù dày đặc nuốt chửng.",
			"Chúng tôi bước vào đó.",
			"Chất độc ngọt ngào, sự im lặng rợn người.",
			"Đây là khởi đầu của một địa ngục trần gian."
		],
		"thai": [
			"ป่าที่ถูกหมอกหนาทึบกลืนกิน",
			"เราเดินเข้าไปในนั้น",
			"พิษอันหอมหวาน, ความเงียบอันน่าขนลุก",
			"ที่นี่คือจุดเริ่มต้นของนรกบนดิน"
		],
		"hindi": [
			"घना कोहरा निगला हुआ जंगल।",
			"हम उसमें चले गए।",
			"मीठा जहर, डरावनी चुप्पी।",
			"यह एक जीते-जागते नरक की शुरुआत थी।"
		]
	}
} as const;
